const welcomeScreen = document.getElementById('welcome-screen');
const tutorialCard = document.getElementById('tutorial-card');
const namePanel = document.getElementById('name-panel');
const continueTutorialButton = document.getElementById('continue-tutorial');
const launchScreen = document.getElementById('launcher');
const topbar = document.getElementById('topbar');
const playerNameInput = document.getElementById('player-name');
const startGameButton = document.getElementById('start-game');
const playerLabel = document.getElementById('player-label');
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      // Service worker registration can fail on unsupported contexts; the app still works.
    });
  });
}

const launcherButtons = document.querySelectorAll('.game-card');
const panels = document.querySelectorAll('.game-panel');
const resetAllButton = document.getElementById('reset-all');

let arcadePlayerName = 'Gast';
let audioContext = null;

function ensureAudioContext() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioCtor();
  }

  if (audioContext.state === 'suspended') {
    audioContext.resume().catch(() => {
      // Browser autoplay restrictions can block the first audio context start.
    });
  }

  return audioContext;
}

function playTone({ frequency = 440, duration = 0.12, type = 'sine', volume = 0.04, delay = 0, sweep = 0 }) {
  const ctx = ensureAudioContext();
  if (!ctx) {
    return;
  }

  const startTime = ctx.currentTime + delay;
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  if (sweep !== 0) {
    oscillator.frequency.linearRampToValueAtTime(frequency + sweep, startTime + duration);
  }

  gainNode.gain.setValueAtTime(0.0001, startTime);
  gainNode.gain.exponentialRampToValueAtTime(volume, startTime + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.02);
}

function playSequence(notes, { duration = 0.08, interval = 0.08, type = 'triangle', volume = 0.04, sweep = 0 }) {
  notes.forEach((frequency, index) => {
    playTone({
      frequency,
      duration,
      type,
      volume,
      delay: index * interval,
      sweep,
    });
  });
}

function playTttMoveSound() {
  playTone({ frequency: 520, duration: 0.07, type: 'triangle', volume: 0.03 });
}

function playTttWinSound() {
  playSequence([659, 784, 988], { duration: 0.12, interval: 0.09, type: 'triangle', volume: 0.03, sweep: 25 });
}

function playTttDrawSound() {
  playSequence([392, 330, 294], { duration: 0.14, interval: 0.1, type: 'sine', volume: 0.025, sweep: -20 });
}

function playMemoryFlipSound() {
  playTone({ frequency: 540, duration: 0.06, type: 'square', volume: 0.02, sweep: 60 });
}

function playMemoryMatchSound() {
  playSequence([740, 880], { duration: 0.09, interval: 0.08, type: 'triangle', volume: 0.03, sweep: 40 });
}

function playMemoryMismatchSound() {
  playTone({ frequency: 280, duration: 0.16, type: 'sawtooth', volume: 0.025, sweep: -110 });
}

function playMarioJumpSound() {
  playTone({ frequency: 440, duration: 0.08, type: 'square', volume: 0.02, sweep: 45 });
}

function playMarioCollisionSound() {
  playSequence([220, 180, 140], { duration: 0.16, interval: 0.08, type: 'sawtooth', volume: 0.025, sweep: -25 });
}

function playMarioGoalSound() {
  playSequence([523, 659, 784, 988], { duration: 0.12, interval: 0.08, type: 'triangle', volume: 0.03, sweep: 35 });
}

function playRpsSound(result) {
  if (result === 'win') {
    playSequence([660, 783, 932], { duration: 0.08, interval: 0.07, type: 'triangle', volume: 0.03, sweep: 40 });
    return;
  }

  if (result === 'lose') {
    playSequence([330, 261, 196], { duration: 0.1, interval: 0.08, type: 'sawtooth', volume: 0.025, sweep: -35 });
    return;
  }

  playTone({ frequency: 420, duration: 0.08, type: 'sine', volume: 0.02 });
}

function showNamePanel() {
  tutorialCard.classList.add('hidden');
  namePanel.classList.remove('hidden');
  playerNameInput.focus();
}

continueTutorialButton.addEventListener('click', showNamePanel);

function startArcadeSession() {
  const enteredName = playerNameInput.value.trim();
  if (!enteredName) {
    playerNameInput.focus();
    return;
  }

  arcadePlayerName = enteredName;
  playerLabel.textContent = `Spieler: ${enteredName}`;
  welcomeScreen.classList.add('hidden');
  topbar.classList.remove('hidden');
  launchScreen.classList.remove('hidden');
  document.querySelector('.game-card').click();
}

startGameButton.addEventListener('click', startArcadeSession);
playerNameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    startArcadeSession();
  }
});

launcherButtons.forEach((button) => {
  button.addEventListener('click', () => {
    launcherButtons.forEach((btn) => btn.classList.remove('active'));
    panels.forEach((panel) => panel.classList.remove('active-panel'));
    button.classList.add('active');
    document.getElementById(button.dataset.game).classList.add('active-panel');
  });
});

resetAllButton.addEventListener('click', () => {
  resetTicTacToe();
  resetMemory();
  resetMarioRun();
 resetMarioKart();
 resetRps();
});

const tttCells = Array.from(document.querySelectorAll('.cell'));
const tttStatus = document.getElementById('ttt-status');
const resetTttButton = document.getElementById('reset-tictactoe');
const tttModeButtons = Array.from(document.querySelectorAll('.mode-button'));
let tttBoard = Array(9).fill('');
let tttCurrentPlayer = 'X';
let tttGameOver = false;
let tttMode = 'human';
let tttAiTimer = null;

function clearTttAiTimer() {
  if (tttAiTimer !== null) {
    clearTimeout(tttAiTimer);
    tttAiTimer = null;
  }
}

function setTttMode(mode) {
  tttMode = mode;
  tttModeButtons.forEach((button) => {
    button.classList.toggle('active-mode', button.dataset.mode === mode);
  });
  resetTicTacToe();
}

function getTttTurnLabel() {
  if (tttMode === 'ai') {
    return tttCurrentPlayer === 'X' ? 'Du bist am Zug.' : 'KI ist am Zug.';
  }
  return `Spieler ${tttCurrentPlayer} ist am Zug.`;
}

function resetTicTacToe() {
  clearTttAiTimer();
  tttBoard = Array(9).fill('');
  tttCurrentPlayer = 'X';
  tttGameOver = false;
  tttCells.forEach((cell) => {
    cell.textContent = '';
    cell.disabled = false;
  });
  tttStatus.textContent = tttMode === 'ai' ? 'Du bist X. Die KI spielt O. Du bist am Zug.' : 'Spieler X ist am Zug.';
}

function getWinner(board) {
  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of combos) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function getWinningMoves(board, player) {
  const winningMoves = [];
  for (let index = 0; index < board.length; index += 1) {
    if (!board[index]) {
      const testBoard = [...board];
      testBoard[index] = player;
      if (getWinner(testBoard) === player) {
        winningMoves.push(index);
      }
    }
  }
  return winningMoves;
}

function getAiMove(board) {
  const winMove = getWinningMoves(board, 'O')[0];
  if (winMove !== undefined) {
    return winMove;
  }

  const blockMove = getWinningMoves(board, 'X')[0];
  if (blockMove !== undefined) {
    return blockMove;
  }

  const preferredOrder = [4, 0, 2, 6, 8, 1, 3, 5, 7];
  return preferredOrder.find((index) => !board[index]);
}

function finishTttRound(message) {
  tttStatus.textContent = message;
  tttGameOver = true;
  if (message.includes('gewinn') || message.includes('Gewinnt')) {
    playTttWinSound();
  } else {
    playTttDrawSound();
  }
}

function getTttResultMessage(winner) {
  if (winner === 'O' && tttMode === 'ai') {
    return 'Die KI gewinnt!';
  }
  if (winner === 'X' && tttMode === 'ai') {
    return 'Du gewinnst!';
  }
  return `Spieler ${winner} gewinnt!`;
}

function runTttTurnFlow() {
  const winner = getWinner(tttBoard);
  if (winner) {
    finishTttRound(getTttResultMessage(winner));
    return;
  }

  if (tttBoard.every(Boolean)) {
    finishTttRound('Unentschieden!');
    return;
  }

  tttCurrentPlayer = tttCurrentPlayer === 'X' ? 'O' : 'X';

  if (tttMode === 'ai' && tttCurrentPlayer === 'O') {
    tttStatus.textContent = 'KI denkt nach…';
    tttAiTimer = setTimeout(() => {
      const aiIndex = getAiMove(tttBoard);
      if (aiIndex === undefined) {
        return;
      }

      tttBoard[aiIndex] = 'O';
      const aiCell = tttCells[aiIndex];
      aiCell.textContent = 'O';
      aiCell.disabled = true;
     playTttMoveSound();
     tttAiTimer = null;
     runTttTurnFlow();
   }, 450);
   return;
  }

  tttStatus.textContent = getTttTurnLabel();
}

function handleTttClick(event) {
  const index = Number(event.currentTarget.dataset.index);
  if (tttBoard[index] || tttGameOver) return;
  if (tttMode === 'ai' && tttCurrentPlayer === 'O') return;

  tttBoard[index] = tttCurrentPlayer;
  event.currentTarget.textContent = tttCurrentPlayer;
  event.currentTarget.disabled = true;
  playTttMoveSound();

  runTttTurnFlow();
}

tttCells.forEach((cell) => cell.addEventListener('click', handleTttClick));
resetTttButton.addEventListener('click', resetTicTacToe);
tttModeButtons.forEach((button) => button.addEventListener('click', () => setTttMode(button.dataset.mode)));
resetTicTacToe();

const memoryBoard = document.getElementById('memory-board');
const memoryScore = document.getElementById('memory-score');
const memoryAttempts = document.getElementById('memory-attempts');
const resetMemoryButton = document.getElementById('reset-memory');
const memorySymbols = ['🌞', '🌙', '⭐', '🔥', '🎵', '🎯', '🚀', '💎'];
let memoryDeck = [];
let memoryFirstCard = null;
let memorySecondCard = null;
let memoryMatches = 0;
let memoryTryCount = 0;
let memoryLock = false;

function createMemoryDeck() {
  return [...memorySymbols, ...memorySymbols]
    .sort(() => Math.random() - 0.5)
    .map((symbol, index) => ({ id: `${symbol}-${index}`, symbol, matched: false }));
}

function resetMemory() {
  memoryDeck = createMemoryDeck();
  memoryFirstCard = null;
  memorySecondCard = null;
  memoryMatches = 0;
  memoryTryCount = 0;
  memoryLock = false;
  memoryScore.textContent = '0';
  memoryAttempts.textContent = '0';
  memoryBoard.innerHTML = '';

  memoryDeck.forEach((card) => {
    const button = document.createElement('button');
    button.className = 'memory-card';
    button.dataset.symbol = card.symbol;
    button.dataset.id = card.id;
    button.textContent = '❔';
    button.addEventListener('click', () => handleMemoryClick(button, card));
    memoryBoard.appendChild(button);
  });
}

function revealCard(cardElement, symbol) {
  cardElement.textContent = symbol;
  cardElement.classList.add('revealed');
  playMemoryFlipSound();
}

function hideCard(cardElement) {
  cardElement.textContent = '❔';
  cardElement.classList.remove('revealed');
}

function handleMemoryClick(cardElement, card) {
  if (memoryLock || cardElement.classList.contains('matched') || cardElement.classList.contains('revealed')) {
    return;
  }

  revealCard(cardElement, card.symbol);

  if (!memoryFirstCard) {
    memoryFirstCard = { element: cardElement, card };
    return;
  }

  memorySecondCard = { element: cardElement, card };
  memoryTryCount += 1;
  memoryAttempts.textContent = String(memoryTryCount);
  memoryLock = true;

  if (memoryFirstCard.card.symbol === memorySecondCard.card.symbol) {
    memoryFirstCard.element.classList.add('matched');
    memorySecondCard.element.classList.add('matched');
    memoryFirstCard.element.disabled = true;
    memorySecondCard.element.disabled = true;
    memoryMatches += 1;
    memoryScore.textContent = String(memoryMatches);
    playMemoryMatchSound();
    memoryFirstCard = null;
    memorySecondCard = null;
    memoryLock = false;
    if (memoryMatches === memorySymbols.length) {
      memoryScore.textContent = '8/8';
    }
    return;
  }

  playMemoryMismatchSound();
  setTimeout(() => {
    hideCard(memoryFirstCard.element);
    hideCard(memorySecondCard.element);
    memoryFirstCard = null;
    memorySecondCard = null;
    memoryLock = false;
  }, 700);
}

resetMemoryButton.addEventListener('click', resetMemory);
resetMemory();

const marioWorld = document.getElementById('mario-world');
const marioRunner = document.getElementById('mario-runner');
const marioStatus = document.getElementById('mario-status');
const marioScoreEl = document.getElementById('mario-score');
const marioProgressFill = document.getElementById('mario-progress-fill');
const marioProgressLabel = document.getElementById('mario-progress-label');
const resetSuperMarioButton = document.getElementById('reset-supermario');
const marioModeButtons = Array.from(document.querySelectorAll('.mario-mode-button'));
const marioDifficultySettings = {
  easy: { speed: 3.8, label: 'Leicht' },
  medium: { speed: 5.3, label: 'Mittel' },
  hard: { speed: 6.8, label: 'Schwer' },
};
const marioGoalDistance = 1000;
let marioJumpVelocity = 0;
let marioJumpHeight = 0;
let marioGameOver = false;
let marioObstacle = null;
let marioObstacleX = 0;
let marioObstacleSpeed = marioDifficultySettings.easy.speed;
let marioAnimationId = null;
let marioDifficulty = 'easy';
let marioScore = 0;

function updateMarioProgress() {
  const completion = Math.min(100, Math.max(0, (marioScore / marioGoalDistance) * 100));
  marioProgressFill.style.width = `${completion}%`;
  marioProgressLabel.textContent = `${Math.round(completion)}%`;
}

function setMarioDifficulty(mode) {
  marioDifficulty = mode;
  marioModeButtons.forEach((button) => {
    button.classList.toggle('active-mode', button.dataset.marioMode === mode);
  });
  marioObstacleSpeed = marioDifficultySettings[mode].speed;
  marioStatus.textContent = `Modus: ${marioDifficultySettings[mode].label}. Tippe in die Welt, um Mario zum Springen zu bringen.`;
  marioScoreEl.textContent = '0';
  updateMarioProgress();
}

function resetMarioRun() {
  marioJumpVelocity = 0;
  marioJumpHeight = 0;
  marioGameOver = false;
  marioScore = 0;
  marioScoreEl.textContent = '0';
  updateMarioProgress();
  marioObstacleX = marioWorld.clientWidth + 30;
  marioObstacleSpeed = marioDifficultySettings[marioDifficulty].speed;
  marioStatus.textContent = `Modus: ${marioDifficultySettings[marioDifficulty].label}. Tippe in die Welt, um Mario zum Springen zu bringen.`;
  if (marioObstacle) {
    marioObstacle.remove();
  }
  marioObstacle = document.createElement('div');
  marioObstacle.className = 'runner-obstacle';
  marioObstacle.style.left = `${marioObstacleX}px`;
  marioWorld.appendChild(marioObstacle);
  marioRunner.style.transform = 'translateY(0)';
}

function marioJump() {
  if (marioGameOver) {
    resetMarioRun();
    return;
  }
  if (marioJumpHeight > 0) {
    return;
  }
  marioJumpVelocity = 12;
  marioStatus.textContent = 'Mario springt!';
  playMarioJumpSound();
}

function tickMarioRun() {
  if (!marioGameOver) {
    marioJumpHeight += marioJumpVelocity;
    marioJumpVelocity -= 0.72;

    if (marioJumpHeight <= 0) {
      marioJumpHeight = 0;
      marioJumpVelocity = 0;
      marioStatus.textContent = `Modus: ${marioDifficultySettings[marioDifficulty].label}. Tippe in die Welt, um Mario zum Springen zu bringen.`;
    }

    marioScore += 0.35;
    marioScoreEl.textContent = String(Math.floor(marioScore));
    updateMarioProgress();
    marioRunner.style.transform = `translateY(${-marioJumpHeight}px)`;

    marioObstacleX -= marioObstacleSpeed;
    marioObstacle.style.left = `${marioObstacleX}px`;

    if (marioObstacleX < 48 && marioObstacleX > 10) {
      const marioRect = marioRunner.getBoundingClientRect();
      const obstacleRect = marioObstacle.getBoundingClientRect();
      const overlap = !(marioRect.right < obstacleRect.left || marioRect.left > obstacleRect.right || marioRect.bottom < obstacleRect.top || marioRect.top > obstacleRect.bottom);
      if (overlap) {
        marioGameOver = true;
        marioStatus.textContent = `Kollision! Dein Score: ${Math.floor(marioScore)}. Drücke Neu starten.`;
        playMarioCollisionSound();
      }
    }

    if (marioScore >= marioGoalDistance) {
      marioGameOver = true;
      marioStatus.textContent = `Ziel erreicht! Du bist am Ziel mit ${Math.floor(marioScore)} Punkten.`;
      playMarioGoalSound();
    }

    if (marioObstacleX < -40) {
      marioObstacleX = marioWorld.clientWidth + 40;
      marioObstacleSpeed = marioDifficultySettings[marioDifficulty].speed + Math.random() * 0.6;
      marioObstacle.style.left = `${marioObstacleX}px`;
    }
  }

  marioAnimationId = window.requestAnimationFrame(tickMarioRun);
}

marioWorld.addEventListener('click', marioJump);
resetSuperMarioButton.addEventListener('click', resetMarioRun);
marioModeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setMarioDifficulty(button.dataset.marioMode);
    resetMarioRun();
  });
});
setMarioDifficulty('easy');
resetMarioRun();
window.requestAnimationFrame(tickMarioRun);

const marioKartCanvas = document.getElementById('mario-kart-canvas');
const marioKartCtx = marioKartCanvas.getContext('2d');
const marioKartStatus = document.getElementById('mario-kart-status');
const resetMarioKartButton = document.getElementById('reset-mariokart');
const marioKartKeys = {
  left: false,
  right: false,
  up: false,
  down: false,
};
const marioKartFinishDistance = 1500;
const marioKartRoad = { left: 80, right: 340, width: 260 };
let marioKartAnimationId = null;
let marioKartLastFrame = 0;
let marioKartGameOver = false;
let marioKartPlayer = null;
let marioKartOpponents = [];

function makeKartOpponent(index) {
  return {
    name: `KI ${index + 1}`,
    color: ['#ef4444', '#f59e0b', '#22c55e', '#38bdf8', '#a855f7', '#fb7185'][index],
    progress: 0,
    speed: 3.2 + Math.random() * 0.8,
    x: marioKartRoad.left + 20 + (index * 34),
  };
}

function resetMarioKart() {
  marioKartPlayer = {
    name: 'Du',
    color: '#facc15',
    progress: 0,
    speed: 0,
    x: marioKartRoad.left + (marioKartRoad.width / 2),
  };
  marioKartOpponents = Array.from({ length: 6 }, (_, index) => makeKartOpponent(index));
  marioKartGameOver = false;
  marioKartLastFrame = 0;
  marioKartStatus.textContent = 'Rennziel: 6 KI-Gegner schlagen.';
}

function drawKartCar(car, y) {
  marioKartCtx.save();
  marioKartCtx.translate(car.x, y);
  marioKartCtx.fillStyle = car.color;
  marioKartCtx.fillRect(-14, -18, 28, 36);
  marioKartCtx.fillStyle = '#111827';
  marioKartCtx.fillRect(-10, -8, 20, 18);
  marioKartCtx.fillStyle = '#f8fafc';
  marioKartCtx.fillRect(-16, -12, 6, 24);
  marioKartCtx.fillRect(10, -12, 6, 24);
  marioKartCtx.restore();
}

function drawMarioKartScene() {
  marioKartCtx.clearRect(0, 0, marioKartCanvas.width, marioKartCanvas.height);
  marioKartCtx.fillStyle = '#166534';
  marioKartCtx.fillRect(0, 0, marioKartCanvas.width, marioKartCanvas.height);
  marioKartCtx.fillStyle = '#4b5563';
  marioKartCtx.fillRect(marioKartRoad.left, 0, marioKartRoad.width, marioKartCanvas.height);

  marioKartCtx.fillStyle = '#f8fafc';
  marioKartCtx.fillRect(marioKartRoad.left + 32, 0, 4, marioKartCanvas.height);
  marioKartCtx.fillRect(marioKartRoad.right - 36, 0, 4, marioKartCanvas.height);

  marioKartCtx.strokeStyle = 'rgba(255,255,255,0.65)';
  marioKartCtx.setLineDash([16, 16]);
  marioKartCtx.beginPath();
  marioKartCtx.moveTo(marioKartCanvas.width / 2, 0);
  marioKartCtx.lineTo(marioKartCanvas.width / 2, marioKartCanvas.height);
  marioKartCtx.stroke();
  marioKartCtx.setLineDash([]);

  marioKartCtx.fillStyle = '#f8fafc';
  marioKartCtx.fillRect(marioKartRoad.left + 12, 14, marioKartRoad.width - 24, 6);
  marioKartCtx.fillStyle = '#ef4444';
  marioKartCtx.fillRect(marioKartRoad.left + 16, 14, 4, 24);

  marioKartOpponents.forEach((bot) => {
    const y = 210 - (bot.progress / marioKartFinishDistance) * 175;
    drawKartCar(bot, y);
  });

  const playerY = 210 - (marioKartPlayer.progress / marioKartFinishDistance) * 175;
  drawKartCar(marioKartPlayer, playerY);
}

function getKartRanking() {
  return [marioKartPlayer, ...marioKartOpponents]
    .sort((a, b) => b.progress - a.progress)
    .map((racer, index) => ({ racer, index: index + 1 }));
}

function tickMarioKart(timestamp) {
  if (!marioKartLastFrame) {
    marioKartLastFrame = timestamp;
  }

  const delta = Math.min(2.2, (timestamp - marioKartLastFrame) / 16.666);
  marioKartLastFrame = timestamp;

  if (!marioKartGameOver) {
    const throttle = marioKartKeys.up ? 0.24 : 0;
    const brake = marioKartKeys.down ? 0.21 : 0;
    const steer = (marioKartKeys.left ? -1 : 0) + (marioKartKeys.right ? 1 : 0);

    marioKartPlayer.speed += (throttle - brake) * delta;
    marioKartPlayer.speed *= 0.985;
    marioKartPlayer.speed = Math.max(-1.4, Math.min(6.5, marioKartPlayer.speed));
    marioKartPlayer.progress += marioKartPlayer.speed * 15 * delta;
    marioKartPlayer.x += steer * 4.7 * delta;
    marioKartPlayer.x = Math.max(marioKartRoad.left + 20, Math.min(marioKartRoad.right - 20, marioKartPlayer.x));

    marioKartOpponents.forEach((bot, index) => {
      const botBoost = 0.6 + index * 0.1 + Math.sin(timestamp / 420 + index) * 0.08;
      bot.progress += (bot.speed + botBoost) * 10 * delta;
    });

    const standings = getKartRanking();
    const playerRank = standings.find((entry) => entry.racer.name === 'Du')?.index ?? 7;
    marioKartStatus.textContent = `Platz ${playerRank}. ${standings.map((entry) => `${entry.racer.name}: ${Math.round(entry.racer.progress / 10)}m`).join(' | ')}`;

    if (marioKartPlayer.progress >= marioKartFinishDistance) {
      marioKartGameOver = true;
      marioKartStatus.textContent = `Ziel erreicht! Du bist Platz ${playerRank}.`;
    }
  }

  drawMarioKartScene();
  marioKartAnimationId = window.requestAnimationFrame(tickMarioKart);
}

window.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if (['arrowleft', 'arrowright', 'arrowup', 'arrowdown', 'a', 'd', 'w', 's'].includes(key)) {
    event.preventDefault();
  }

  if (key === 'a' || key === 'arrowleft') {
    marioKartKeys.left = true;
  }
  if (key === 'd' || key === 'arrowright') {
    marioKartKeys.right = true;
  }
  if (key === 'w' || key === 'arrowup') {
    marioKartKeys.up = true;
  }
  if (key === 's' || key === 'arrowdown') {
    marioKartKeys.down = true;
  }
});

window.addEventListener('keyup', (event) => {
  const key = event.key.toLowerCase();
  if (key === 'a' || key === 'arrowleft') {
    marioKartKeys.left = false;
  }
  if (key === 'd' || key === 'arrowright') {
    marioKartKeys.right = false;
  }
  if (key === 'w' || key === 'arrowup') {
    marioKartKeys.up = false;
  }
  if (key === 's' || key === 'arrowdown') {
    marioKartKeys.down = false;
  }
});

resetMarioKartButton.addEventListener('click', resetMarioKart);
resetMarioKart();
drawMarioKartScene();
marioKartAnimationId = window.requestAnimationFrame(tickMarioKart);

const rpsButtons = Array.from(document.querySelectorAll('.rps-choice'));
const rpsUserScore = document.getElementById('rps-user-score');
const rpsComputerScore = document.getElementById('rps-computer-score');
const rpsStatus = document.getElementById('rps-status');
const resetRpsButton = document.getElementById('reset-rps');
const outcomes = {
  Stein: { Stein: 'unentschieden', Papier: 'Computer gewinnt', Schere: 'Du gewinnst' },
  Papier: { Stein: 'Du gewinnst', Papier: 'unentschieden', Schere: 'Computer gewinnt' },
  Schere: { Stein: 'Computer gewinnt', Papier: 'Du gewinnst', Schere: 'unentschieden' },
};
let userScore = 0;
let computerScore = 0;

function resetRps() {
  userScore = 0;
  computerScore = 0;
  rpsUserScore.textContent = '0';
  rpsComputerScore.textContent = '0';
  rpsStatus.textContent = 'Mach deinen Zug.';
}

function playRps(playerPick) {
  const options = ['Stein', 'Papier', 'Schere'];
  const computerPick = options[Math.floor(Math.random() * options.length)];
  const result = outcomes[playerPick][computerPick];

  if (result === 'Du gewinnst') {
    userScore += 1;
    rpsUserScore.textContent = String(userScore);
    rpsStatus.textContent = `Du: ${playerPick} vs Computer: ${computerPick} — du gewinnst!`;
    playRpsSound('win');
  } else if (result === 'Computer gewinnt') {
    computerScore += 1;
    rpsComputerScore.textContent = String(computerScore);
    rpsStatus.textContent = `Du: ${playerPick} vs Computer: ${computerPick} — computer gewinnt.`;
    playRpsSound('lose');
  } else {
    rpsStatus.textContent = `Du: ${playerPick} vs Computer: ${computerPick} — unentschieden.`;
    playRpsSound('draw');
  }
}

rpsButtons.forEach((button) => {
  button.addEventListener('click', () => playRps(button.dataset.choice));
});
resetRpsButton.addEventListener('click', resetRps);
resetRps();
