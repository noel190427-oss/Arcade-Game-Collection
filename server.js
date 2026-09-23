/**
 * 🎮 Noel Arcade Universe - Dedicated Raspberry Pi Web & Multiplayer Server
 * Liefert das gesamte Spiel aus und verbindet Spieler in Echtzeit über WebSockets!
 * Port: 3000 | Author: noel190427-oss
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav'
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/' || reqUrl === '') reqUrl = '/index.html';

  const filePath = path.join(PUBLIC_DIR, reqUrl);
  const ext = path.extname(filePath).toLowerCase();

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (reqUrl === '/api/status') {
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        res.end(JSON.stringify({ status: 'online', server: 'Noel Arcade Pi Server', rooms: Object.keys(rooms).length }));
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found - Noel Arcade Pi');
      return;
    }

    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });
    res.end(content);
  });
});

const wss = new WebSocket.Server({ server });
const rooms = {};

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
  const message = typeof data === 'string' ? data : JSON.stringify(data);
  room.players.forEach(p => {
    if (p.ws !== excludeWs && p.ws.readyState === WebSocket.OPEN) {
      p.ws.send(message);
    }
  });
}

wss.on('connection', (ws) => {
  let currentRoom = null;
  let playerId = 'p_' + Math.random().toString(36).substr(2, 7);
  let playerName = 'Spieler';

  ws.on('message', (messageText) => {
    try {
      const msg = JSON.parse(messageText);

      switch (msg.type) {
        case 'CREATE_ROOM': {
          const roomCode = generateRoomCode();
          currentRoom = roomCode;
          playerName = (msg.name || 'Host').substring(0, 16);
          const maxPlayers = Math.min(10, Math.max(2, parseInt(msg.maxPlayers) || 2));

          rooms[roomCode] = {
            code: roomCode,
            gameType: msg.gameType || 'tictactoe',
            maxPlayers: maxPlayers,
            players: [{ id: playerId, name: playerName, isHost: true, symbol: 'X', ws }]
          };

          ws.send(JSON.stringify({
            type: 'ROOM_CREATED',
            roomCode: roomCode,
            playerId: playerId,
            players: rooms[roomCode].players.map(p => ({ id: p.id, name: p.name, isHost: p.isHost, symbol: p.symbol }))
          }));
          console.log(`[PI-SERVER] 🚀 Raum ${roomCode} von ${playerName} erstellt (${maxPlayers} Spieler)`);
          break;
        }

        case 'PLAYER_JOINED':
        case 'JOIN_ROOM': {
          const roomCode = (msg.roomCode || '').trim();
          const room = rooms[roomCode];
          if (!room) {
            ws.send(JSON.stringify({ type: 'ERROR', message: `Raum ${roomCode} nicht gefunden!` }));
            return;
          }

          currentRoom = roomCode;
          playerName = (msg.name || 'Gast').substring(0, 16);
          const existing = room.players.find(p => p.id === msg.playerId);
          if (!existing) {
            room.players.push({
              id: msg.playerId || playerId,
              name: playerName,
              isHost: false,
              symbol: 'O',
              ws
            });
          }

          const playerList = room.players.map(p => ({ id: p.id, name: p.name, isHost: p.isHost, symbol: p.symbol }));
          
          // Broadcast update to everyone in room
          broadcastToRoom(roomCode, {
            type: 'ROOM_STATE_SYNC',
            players: playerList,
            gameType: room.gameType,
            maxPlayers: room.maxPlayers
          });

          console.log(`[PI-SERVER] 👤 ${playerName} beigetreten zu Raum ${roomCode} (${room.players.length}/${room.maxPlayers})`);

          if (room.players.length >= room.maxPlayers) {
            broadcastToRoom(roomCode, {
              type: 'GAME_START',
              gameType: room.gameType,
              players: playerList
            });
            console.log(`[PI-SERVER] 🎮 Spielstart in Raum ${roomCode}!`);
          }
          break;
        }

        case 'ROOM_STATE_SYNC':
        case 'GAME_START':
        case 'TTT_UPDATE':
        case 'MEMORY_CARD_FLIPPED':
        case 'MEMORY_MATCH_SCORED': {
          broadcastToRoom(msg.roomCode || currentRoom, msg, ws);
          break;
        }
      }
    } catch (e) {
      console.error('[PI-SERVER] Message error:', e);
    }
  });

  ws.on('close', () => {
    if (currentRoom && rooms[currentRoom]) {
      rooms[currentRoom].players = rooms[currentRoom].players.filter(p => p.ws !== ws);
      if (rooms[currentRoom].players.length === 0) {
        delete rooms[currentRoom];
        console.log(`[PI-SERVER] 🗑️ Raum ${currentRoom} geschlossen (leer).`);
      } else {
        broadcastToRoom(currentRoom, {
          type: 'ROOM_STATE_SYNC',
          players: rooms[currentRoom].players.map(p => ({ id: p.id, name: p.name, isHost: p.isHost }))
        });
      }
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`🎮 NOEL ARCADE PI SERVER LÄUFT ERFOLGREICH!`);
  console.log(`🌐 Öffne im Browser: http://192.168.2.124:${PORT}`);
  console.log(`====================================================`);
});
