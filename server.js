/**
 * 🎮 Noel Arcade Universe - Live Multiplayer WebSocket Server
 * Unterstützt Raum-Codes, 2 bis 10 Spieler, Tic-Tac-Toe, Memory Matrix & Mini-Games
 * Läuft ressourcenschonend auf dem Raspberry Pi 400 (Port 3000)
 */

const http = require('http');
const WebSocket = require('ws');

const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify({ 
    status: 'online', 
    app: 'Noel Arcade Universe Multiplayer Server',
    author: 'noel190427-oss',
    activeRooms: Object.keys(rooms).length
  }));
});

const wss = new WebSocket.Server({ server });

// Aktive Räume im Speicher
const rooms = {};

// Generiert einen 4-stelligen Raumcode (z.B. "4829")
function generateRoomCode() {
  let code;
  do {
    code = Math.floor(1000 + Math.random() * 9000).toString();
  } while (rooms[code]);
  return code;
}

function broadcastToRoom(roomCode, data, excludeWs = null) {
  const room = rooms[roomCode];
  if (!room) return;
  const message = JSON.stringify(data);
  room.players.forEach(player => {
    if (player.ws !== excludeWs && player.ws.readyState === WebSocket.OPEN) {
      player.ws.send(message);
    }
  });
}

wss.on('connection', (ws) => {
  let currentRoom = null;
  let playerId = null;
  let playerName = 'Spieler';

  ws.on('message', (messageText) => {
    try {
      const msg = JSON.parse(messageText);

      switch (msg.type) {
        // ==========================================
        // 1. RAUM ERSTELLEN
        // ==========================================
        case 'CREATE_ROOM': {
          const roomCode = generateRoomCode();
          const maxPlayers = Math.min(10, Math.max(2, parseInt(msg.maxPlayers) || 2));
          playerName = (msg.name || 'Host').substring(0, 16);
          playerId = 'p_' + Math.random().toString(36).substr(2, 9);
          currentRoom = roomCode;

          rooms[roomCode] = {
            code: roomCode,
            gameType: msg.gameType || 'tictactoe',
            maxPlayers: maxPlayers,
            hostId: playerId,
            state: 'waiting', // waiting | playing | ended
            players: [{
              id: playerId,
              name: playerName,
              isHost: true,
              score: 0,
              symbol: 'X', // Für Tic-Tac-Toe
              ws: ws
            }],
            gameState: {
              turnIndex: 0,
              board: Array(9).fill(''),
              memoryCards: [],
              flipped: []
            }
          };

          ws.send(JSON.stringify({
            type: 'ROOM_CREATED',
            roomCode: roomCode,
            playerId: playerId,
            maxPlayers: maxPlayers,
            players: rooms[roomCode].players.map(p => ({ id: p.id, name: p.name, isHost: p.isHost, score: p.score }))
          }));
          break;
        }

        // ==========================================
        // 2. RAUM BEITRETEN
        // ==========================================
        case 'JOIN_ROOM': {
          const roomCode = (msg.roomCode || '').trim();
          playerName = (msg.name || 'Gast').substring(0, 16);
          const room = rooms[roomCode];

          if (!room) {
            ws.send(JSON.stringify({ type: 'ERROR', message: 'Raum nicht gefunden!' }));
            return;
          }

          if (room.players.length >= room.maxPlayers) {
            ws.send(JSON.stringify({ type: 'ERROR', message: 'Raum ist bereits voll (max. ' + room.maxPlayers + ' Spieler)!' }));
            return;
          }

          playerId = 'p_' + Math.random().toString(36).substr(2, 9);
          currentRoom = roomCode;
          const symbol = room.players.length === 1 ? 'O' : (room.players.length === 0 ? 'X' : 'Zuschauer');

          const newPlayer = {
            id: playerId,
            name: playerName,
            isHost: false,
            score: 0,
            symbol: symbol,
            ws: ws
          };

          room.players.push(newPlayer);

          // Bestätigung an den neuen Spieler
          ws.send(JSON.stringify({
            type: 'ROOM_JOINED',
            roomCode: roomCode,
            playerId: playerId,
            gameType: room.gameType,
            maxPlayers: room.maxPlayers,
            symbol: symbol,
            players: room.players.map(p => ({ id: p.id, name: p.name, isHost: p.isHost, score: p.score, symbol: p.symbol }))
          }));

          // Allen anderen im Raum mitteilen
          broadcastToRoom(roomCode, {
            type: 'PLAYER_JOINED',
            players: room.players.map(p => ({ id: p.id, name: p.name, isHost: p.isHost, score: p.score, symbol: p.symbol })),
            newPlayer: { id: playerId, name: playerName, symbol: symbol }
          }, ws);

          // Wenn Raum voll ist, automatisch Start signalisieren
          if (room.players.length === room.maxPlayers && room.state === 'waiting') {
            room.state = 'playing';
            broadcastToRoom(roomCode, {
              type: 'GAME_START',
              gameType: room.gameType,
              players: room.players.map(p => ({ id: p.id, name: p.name, symbol: p.symbol }))
            });
          }
          break;
        }

        // ==========================================
        // 3. HOST STARTET DAS SPIEL MANUELL
        // ==========================================
        case 'START_GAME': {
          const room = rooms[currentRoom];
          if (room && room.hostId === playerId && room.players.length >= 2) {
            room.state = 'playing';
            broadcastToRoom(currentRoom, {
              type: 'GAME_START',
              gameType: room.gameType,
              players: room.players.map(p => ({ id: p.id, name: p.name, symbol: p.symbol }))
            });
          }
          break;
        }

        // ==========================================
        // 4. TIC-TAC-TOE ZUG SYNCHRONISATION
        // ==========================================
        case 'TTT_MOVE': {
          const room = rooms[currentRoom];
          if (!room || room.state !== 'playing') return;

          const cellIndex = parseInt(msg.index);
          const activePlayer = room.players[room.gameState.turnIndex % room.players.length];

          if (activePlayer && activePlayer.id === playerId && cellIndex >= 0 && cellIndex < 9) {
            if (room.gameState.board[cellIndex] === '') {
              const symbol = activePlayer.symbol;
              room.gameState.board[cellIndex] = symbol;
              room.gameState.turnIndex++;

              const nextPlayer = room.players[room.gameState.turnIndex % room.players.length];

              broadcastToRoom(currentRoom, {
                type: 'TTT_UPDATE',
                index: cellIndex,
                symbol: symbol,
                board: room.gameState.board,
                nextTurnPlayerId: nextPlayer ? nextPlayer.id : null,
                nextTurnPlayerName: nextPlayer ? nextPlayer.name : null
              });
            }
          }
          break;
        }

        // ==========================================
        // 5. MEMORY KARTEN-FLIP & PAAR SYNCHRONISATION
        // ==========================================
        case 'MEMORY_FLIP': {
          const room = rooms[currentRoom];
          if (!room) return;

          broadcastToRoom(currentRoom, {
            type: 'MEMORY_CARD_FLIPPED',
            cardIndex: msg.cardIndex,
            icon: msg.icon,
            playerId: playerId,
            playerName: playerName
          }, ws);
          break;
        }

        case 'MEMORY_MATCH': {
          const room = rooms[currentRoom];
          if (!room) return;

          const player = room.players.find(p => p.id === playerId);
          if (player) {
            player.score += 1;
          }

          broadcastToRoom(currentRoom, {
            type: 'MEMORY_MATCH_SCORED',
            cardIndices: msg.cardIndices,
            playerId: playerId,
            playerName: playerName,
            players: room.players.map(p => ({ id: p.id, name: p.name, score: p.score }))
          });
          break;
        }

        // ==========================================
        // 6. SPIEL NEUSTARTEN
        // ==========================================
        case 'RESTART_GAME': {
          const room = rooms[currentRoom];
          if (room) {
            room.gameState.board = Array(9).fill('');
            room.gameState.turnIndex = 0;
            room.state = 'playing';
            broadcastToRoom(currentRoom, {
              type: 'GAME_RESTARTED',
              gameType: room.gameType
            });
          }
          break;
        }
      }
    } catch (err) {
      console.error('Fehler bei Nachricht:', err);
    }
  });

  ws.on('close', () => {
    if (currentRoom && rooms[currentRoom]) {
      const room = rooms[currentRoom];
      room.players = room.players.filter(p => p.id !== playerId);

      if (room.players.length === 0) {
        delete rooms[currentRoom];
        console.log(`🗑️ Raum ${currentRoom} geschlossen (keine Spieler mehr).`);
      } else {
        // Falls Host gegangen ist, neuen Host ernennen
        if (room.hostId === playerId && room.players[0]) {
          room.hostId = room.players[0].id;
          room.players[0].isHost = true;
        }

        broadcastToRoom(currentRoom, {
          type: 'PLAYER_LEFT',
          leftPlayerId: playerId,
          leftPlayerName: playerName,
          players: room.players.map(p => ({ id: p.id, name: p.name, isHost: p.isHost, score: p.score }))
        });
      }
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`🎮 Noel Arcade Universe - Multiplayer Server ONLINE!`);
  console.log(`🚀 Port: ${PORT}`);
  console.log(`👥 Max Spieler pro Raum: bis zu 10 Spieler`);
  console.log(`🕹️ Unterstützte Spiele: Tic-Tac-Toe, Memory & Mini-Games`);
  console.log(`======================================================\n`);
});
