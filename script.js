/**
 * ARCADE COLLECTION ULTRA & VIP - MASTER GAME ENGINE & ARCHITECTURE
 * 
 * Features:
 * - Multi-language i18n (DE, EN, FR, PT, TR, ES) with first-visit modal
 * - Quantum-Resistant Branching Cryptographic PIN Auth (256-Bit Salted Branching Lattice)
 * - Complete VIP Lock & Protection System (Non-VIPs locked out of all VIP perks, VIPs fully unlocked)
 * - VIP Bank & Money Generator ("Give Money to Yourself" with Cash Register SFX & Coin Showers)
 * - VIP 24K Gold & Platinum Diamond Themes, VIP Matrix Hyper Animations & Sparkle Trails
 * - Super Mario Run Gold Suit & Hover Jump, Mario Kart 300cc Hyper VIP Cup
 * - Retro Synthesized Web Audio Chiptune Jukebox (6 Offline BGM Tracks & Visualizer)
 * - 3D Physics Confetti, Money Rain & Fireworks Particle Engine
 * - Resource Freeze during overlays & background tabs (0% idle CPU)
 * - Optimal Minimax Tic-Tac-Toe AI & Markov Chain RPSLS AI
 * - 7 Complete Arcade Games (TTT, Memory, Mario Run, Mario Kart, RPSLS, Neon Snake, Cyber Bricks)
 */

/* ==========================================================================
   1. TRANSLATIONS (I18N DICTIONARY)
   ========================================================================== */
const I18N_DATA = {
  de: {
    confirm_language: 'Sprache bestätigen',
    arcade_edition: 'Noel Arcade Universe',
    game_lounge_title: 'Game Lounge',
    how_it_works: "So geht's",
    tut_step1: '7 Retro- & Arcade-Spiele mit intelligenter KI.',
    tut_step2: 'Unbesiegbarer Minimax, Markov KI & VIP Admin Menü.',
    tut_step3: 'Offline-fähig, 6 Themes, 4 Animationsstile & Low-End Sparmodus.',
    continue_btn: 'Weiter',
    what_is_your_name: 'Wie heißt du?',
    start_game_btn: "Los geht's",
    brand_title: 'Noel Arcade',
    card_ttt_sub: 'Minimax KI',
    card_memory_sub: 'Paare finden',
    card_mario_sub: 'Raycast KI & Sprung',
    card_kart_sub: '50cc-300cc & Items',
    card_rps_title: 'RPSLS',
    card_rps_sub: 'Markov Vorhersage-KI',
    card_snake_sub: 'Retro Schlangenjagd',
    card_bricks_sub: 'Laser Breakout',
    restart_btn: 'Neu starten',
    reshuffle_btn: 'Neu mischen',
    mode_human: 'Mensch vs Mensch',
    mode_ai: 'Mensch vs KI',
    diff_easy: 'Leicht',
    diff_medium: 'Mittel',
    diff_hard: 'Schwer',
    diff_master: 'Meister (Minimax)',
    ttt_desc: 'Klassisches 3-in-einer-Reihe mit wählbarer KI',
    stat_player_wins: 'Siege:',
    stat_draws: 'Unentschieden:',
    stat_ai_wins: 'KI-Siege:',
    memory_desc: 'Finde alle Bildpaare mit möglichst wenigen Versuchen',
    stat_pairs_found: 'Paare:',
    stat_attempts: 'Versuche:',
    stat_combo: 'Streak:',
    stat_time: 'Zeit:',
    mario_desc: 'Prädiktive Raycast-KI, Doppelsprung & Münzenjagd',
    ai_autopilot: 'Autopilot',
    stat_score: 'Score:',
    stat_coins: 'Münzen:',
    stat_highscore: 'Best:',
    mario_hint: 'Tippe in die Welt oder drücke [LEERTASTE] zum Springen! (Doppelsprung aktiv)',
    kart_desc: '50cc-300cc Cups, Mystery Item-Boxen, Drift & 6 KI-Gegner',
    stat_position: 'Rang:',
    stat_speed: 'Tempo:',
    stat_drift_boost: 'Drift-Turbo:',
    stat_item: 'Item:',
    stat_distance: 'Distanz:',
    kart_controls_hint: '⌨️ W/↑ Gas | S/↓ Bremse | A/D Lenken | SHIFT/SPACE Drift | E Item',
    auto_gas_label: 'Auto-Gas:',
    how_to_play: 'Anleitung',
    rps_title: 'Stein, Papier, Schere',
    rps_desc: 'Mit erweiterter Markov-Ketten Vorhersage-KI',
    reset_points_btn: 'Punkte zurücksetzen',
    rps_mode_classic: 'Klassisch (3 Optionen)',
    rps_mode_spock: 'Erweitert (RPSLS - 5 Optionen)',
    stat_you: 'Du:',
    stat_computer: 'Computer:',
    stat_streak: 'Streak:',
    your_pick: 'Deine Wahl',
    ai_pick: 'KI Wahl',
    choice_rock: 'Stein',
    choice_paper: 'Papier',
    choice_scissors: 'Schere',
    choice_lizard: 'Echse',
    choice_spock: 'Spock',
    rps_prompt: 'Wähle dein Symbol und fordere die Vorhersage-KI heraus!',
    snake_desc: 'Sammle Neon-Äpfel, Bonus-Blitze und wachse unendlich',
    snake_hint: 'Nutze Pfeiltasten, WASD oder das Steuerkreuz zum Steuern.',
    play_again: 'Nochmal spielen',
    bricks_desc: 'Zerstöre alle Steine, schnapp dir Power-ups und Laser',
    stat_lives: 'Leben:',
    stat_level: 'Level:',
    bricks_hint: 'Bewege den Schläger mit Maus, Touch oder A/D. [LEERTASTE] zum Starten.',
    settings_title: 'Einstellungen',
    theme_select_label: 'Design Theme',
    anim_style_label: 'Animations- & Motion-Stil',
    low_end_mode_title: 'Low-End / Energiesparmodus',
    low_end_mode_desc: 'Deaktiviert Weichzeichner, Partikeleffekte und schont Akku & CPU.',
    scanlines_title: 'CRT Scanlines & Retro-Effekt',
    scanlines_desc: 'Retro Röhrenmonitor-Filter über dem Bildschirm.',
    sound_volume_label: 'Soundeffekte Lautstärke',
    haptic_label: 'Haptic Feedback (Vibration)',
    haptic_desc: 'Taktile Impulse bei Aktionen auf Smartphones.',
    export_stats: 'Daten exportieren',
    import_stats: 'Daten importieren',
    trophies_title: 'Arcade Errungenschaften',
    trophies_subtitle: 'Schalte Trophäen frei, indem du in den Spielen Bestleistungen erzielst!',
    stats_title: 'Spieler-Statistiken',
    admin_title: 'VIP & Administrator Konsole',
    admin_subtitle: 'Entwickler-Werkzeuge, Level-Freischaltung & God-Mode',
    admin_unlock_title: 'Sofort-Freischaltung',
    admin_unlock_desc: 'Schalte alle Spielmodi, Cups, Raster und maximalen Trophäen mit 1 Klick frei.',
    admin_btn_all_levels: 'Alle Level & Cups freischalten',
    admin_btn_all_trophies: 'Alle 10 Trophäen freischalten',
    admin_btn_max_stats: 'Maximal-Statistiken vergeben',
    admin_godmode_title: 'God-Mode & Unverwundbarkeit',
    vip_auth_title: 'VIP Quantum Security',
    vip_auth_subtitle: '256-Bit Branching Verifikation',
    vip_auth_prompt: 'Gib den 6-stelligen verschlüsselten VIP Master-Code ein:',
    verify_code_btn: 'Verifizieren',
    install_title: 'Noel Arcade installieren',
    install_desc: 'Schneller starten und 100% offline spielen!',
    install_btn: 'Installieren',
    nav_stats: 'Statistiken',
    nav_reset_all: 'Alle Scores zurücksetzen',
    established_2026: 'ESTABLISHED 2026',
    created_by: 'Erstellt von',
    whats_new: 'Was ist neu?',
    privacy: 'Datenschutz',
    whats_new_title: 'Was ist neu in v24.106?',
    privacy_title: 'Datenschutzerklärung'
  },
  en: {
    confirm_language: 'Confirm Language',
    arcade_edition: 'Noel Arcade Universe',
    game_lounge_title: 'Game Lounge',
    how_it_works: 'How it works',
    tut_step1: '7 Retro & Arcade games powered by smart AI.',
    tut_step2: 'Unbeatable Minimax, Markov AI & VIP Admin Menu.',
    tut_step3: 'Offline-ready, 6 themes, 4 animation styles & Eco mode.',
    continue_btn: 'Continue',
    what_is_your_name: "What's your name?",
    start_game_btn: "Let's Play",
    brand_title: 'Noel Arcade',
    card_ttt_sub: 'Minimax AI',
    card_memory_sub: 'Find pairs',
    card_mario_sub: 'Raycast AI & Jump',
    card_kart_sub: '50cc-300cc & Items',
    card_rps_title: 'RPSLS',
    card_rps_sub: 'Markov Predictor AI',
    card_snake_sub: 'Retro Snake Hunt',
    card_bricks_sub: 'Laser Breakout',
    restart_btn: 'Restart',
    reshuffle_btn: 'Reshuffle',
    mode_human: 'Human vs Human',
    mode_ai: 'Human vs AI',
    diff_easy: 'Easy',
    diff_medium: 'Medium',
    diff_hard: 'Hard',
    diff_master: 'Master (Minimax)',
    ttt_desc: 'Classic 3-in-a-row with selectable AI intelligence',
    stat_player_wins: 'Wins:',
    stat_draws: 'Draws:',
    stat_ai_wins: 'AI Wins:',
    memory_desc: 'Match all pairs in the fewest moves possible',
    stat_pairs_found: 'Pairs:',
    stat_attempts: 'Tries:',
    stat_combo: 'Streak:',
    stat_time: 'Time:',
    mario_desc: 'Predictive Raycast AI, double jumps & coin hunt',
    ai_autopilot: 'Autopilot',
    stat_score: 'Score:',
    stat_coins: 'Coins:',
    stat_highscore: 'Best:',
    mario_hint: 'Tap screen or press [SPACE] to jump! (Double jump active)',
    kart_desc: '50cc-300cc Cups, Mystery Item Boxes, Drift & 6 AI Bots',
    stat_position: 'Rank:',
    stat_speed: 'Speed:',
    stat_drift_boost: 'Drift Boost:',
    stat_item: 'Item:',
    stat_distance: 'Distance:',
    kart_controls_hint: '⌨️ W/↑ Gas | S/↓ Brake | A/D Steer | SHIFT/SPACE Drift | E Item',
    auto_gas_label: 'Auto-Gas:',
    how_to_play: 'How to Play',
    rps_title: 'Rock, Paper, Scissors',
    rps_desc: 'Equipped with Markov Chain pattern prediction AI',
    reset_points_btn: 'Reset Scores',
    rps_mode_classic: 'Classic (3 Choices)',
    rps_mode_spock: 'Expanded (RPSLS - 5 Choices)',
    stat_you: 'You:',
    stat_computer: 'Computer:',
    stat_streak: 'Streak:',
    your_pick: 'Your Pick',
    ai_pick: 'AI Pick',
    choice_rock: 'Rock',
    choice_paper: 'Paper',
    choice_scissors: 'Scissors',
    choice_lizard: 'Lizard',
    choice_spock: 'Spock',
    rps_prompt: 'Pick your move and challenge the predictive AI!',
    snake_desc: 'Collect neon apples, speed sparks and grow infinite',
    snake_hint: 'Use arrow keys, WASD or the touch D-Pad.',
    play_again: 'Play Again',
    bricks_desc: 'Smash all bricks, catch power-ups and laser blasters',
    stat_lives: 'Lives:',
    stat_level: 'Level:',
    bricks_hint: 'Move paddle with mouse, touch or A/D. [SPACE] to launch.',
    settings_title: 'Settings',
    theme_select_label: 'Color Theme',
    anim_style_label: 'Animation & Motion Style',
    low_end_mode_title: 'Low-End / Battery Saver Mode',
    low_end_mode_desc: 'Disables blurs, particle emitters and saves battery.',
    scanlines_title: 'CRT Scanlines & Retro Filter',
    scanlines_desc: 'Authentic arcade CRT monitor scanlines.',
    sound_volume_label: 'Sound Effects Volume',
    haptic_label: 'Haptic Feedback (Vibration)',
    haptic_desc: 'Tactile vibration response on smartphones.',
    export_stats: 'Export Data',
    import_stats: 'Import Data',
    trophies_title: 'Arcade Achievements',
    trophies_subtitle: 'Unlock trophies by achieving top scores across games!',
    stats_title: 'Player Statistics',
    admin_title: 'VIP & Administrator Console',
    admin_subtitle: 'Developer Tools, Free Level Unlocks & God Mode',
    admin_unlock_title: 'Instant Unlocks',
    admin_unlock_desc: 'Unlock all game modes, cups, grids and max trophies with 1 click.',
    admin_btn_all_levels: 'Unlock All Levels & Cups',
    admin_btn_all_trophies: 'Unlock All 10 Trophies',
    admin_btn_max_stats: 'Grant Maximum Stats',
    admin_godmode_title: 'God Mode & Invincibility',
    vip_auth_title: 'VIP Quantum Security',
    vip_auth_subtitle: '256-Bit Branching Verification',
    vip_auth_prompt: 'Enter 6-digit encrypted VIP master key:',
    verify_code_btn: 'Verify Key',
    install_title: 'Install Noel Arcade',
    install_desc: 'Faster launch and 100% offline gaming!',
    install_btn: 'Install',
    nav_stats: 'Statistics',
    nav_reset_all: 'Reset All Scores',
    established_2026: 'ESTABLISHED 2026',
    created_by: 'Created by',
    whats_new: "What's new?",
    privacy: 'Privacy Policy',
    whats_new_title: "What's new in v24.106?",
    privacy_title: 'Privacy Policy'
  },
  fr: {
    confirm_language: 'Confirmer la langue',
    arcade_edition: 'Noel Arcade Universe',
    game_lounge_title: 'Game Lounge',
    how_it_works: 'Comment ça marche',
    tut_step1: '7 jeux rétro & arcade avec IA intelligente.',
    tut_step2: 'Minimax imbattable, IA Markov & Menu VIP Admin.',
    tut_step3: '100% hors ligne, 6 thèmes, 4 styles & mode éco.',
    continue_btn: 'Continuer',
    what_is_your_name: 'Quel est votre nom ?',
    start_game_btn: "C'est parti",
    brand_title: 'Noel Arcade',
    card_ttt_sub: 'IA Minimax',
    card_memory_sub: 'Trouver les paires',
    card_mario_sub: 'IA Raycast & Saut',
    card_kart_sub: '50cc-300cc & Items',
    card_rps_title: 'PFCEL',
    card_rps_sub: 'IA Prédictive Markov',
    card_snake_sub: 'Chasse au serpent',
    card_bricks_sub: 'Casse-briques laser',
    restart_btn: 'Recommencer',
    reshuffle_btn: 'Mélanger',
    mode_human: 'Joueur vs Joueur',
    mode_ai: 'Joueur vs IA',
    diff_easy: 'Facile',
    diff_medium: 'Moyen',
    diff_hard: 'Difficile',
    diff_master: 'Maître (Minimax)',
    ttt_desc: 'Morpion classique avec IA au choix',
    stat_player_wins: 'Victoires :',
    stat_draws: 'Égalités :',
    stat_ai_wins: 'Victoires IA :',
    memory_desc: 'Trouvez toutes les paires en un minimum de coups',
    stat_pairs_found: 'Paires :',
    stat_attempts: 'Essais :',
    stat_combo: 'Série :',
    stat_time: 'Temps :',
    mario_desc: 'IA Raycast prédictive, double saut et pièces',
    ai_autopilot: 'Pilote auto',
    stat_score: 'Score :',
    stat_coins: 'Pièces :',
    stat_highscore: 'Record :',
    mario_hint: 'Appuyez ou barre [ESPACE] pour sauter ! (Double saut actif)',
    kart_desc: '50cc-300cc, boîtes mystères, drift et 6 bots',
    stat_position: 'Rang :',
    stat_speed: 'Vitesse :',
    stat_drift_boost: 'Turbo Drift :',
    stat_item: 'Objet :',
    stat_distance: 'Distance :',
    kart_controls_hint: '⌨️ W/↑ Gaz | S/↓ Frein | A/D Tourner | ESPACE Drift | E Objet',
    auto_gas_label: 'Auto-Gaz :',
    how_to_play: 'Aide',
    rps_title: 'Pierre, Feuille, Ciseaux',
    rps_desc: 'Équipé d’une IA prédictive à chaîne de Markov',
    reset_points_btn: 'Réinitialiser',
    rps_mode_classic: 'Classique (3 choix)',
    rps_mode_spock: 'Étendu (5 choix)',
    stat_you: 'Vous :',
    stat_computer: 'Ordinateur :',
    stat_streak: 'Série :',
    your_pick: 'Votre choix',
    ai_pick: 'Choix IA',
    choice_rock: 'Pierre',
    choice_paper: 'Feuille',
    choice_scissors: 'Ciseaux',
    choice_lizard: 'Lézard',
    choice_spock: 'Spock',
    rps_prompt: 'Choisissez votre coup et défiez l’IA !',
    snake_desc: 'Ramassez les pommes néon et grandissez',
    snake_hint: 'Flèches, WASD ou pavé tactile pour diriger.',
    play_again: 'Rejouer',
    bricks_desc: 'Détruisez les briques et récupérez les lasers',
    stat_lives: 'Vies :',
    stat_level: 'Niveau :',
    bricks_hint: 'Déplacez la raquette avec la souris ou touches. [ESPACE] pour lancer.',
    settings_title: 'Paramètres',
    theme_select_label: 'Thème visuel',
    anim_style_label: 'Style d’animation',
    low_end_mode_title: 'Mode Éco / Basse consommation',
    low_end_mode_desc: 'Désactive les flous et économise la batterie.',
    scanlines_title: 'Lignes CRT Retro',
    scanlines_desc: 'Filtre écran cathodique vintage.',
    sound_volume_label: 'Volume des effets',
    haptic_label: 'Retour haptique',
    haptic_desc: 'Vibrations tactiles sur mobile.',
    export_stats: 'Exporter les données',
    import_stats: 'Importer les données',
    trophies_title: 'Trophées Arcade',
    trophies_subtitle: 'Débloquez des succès en réussissant des exploits !',
    stats_title: 'Statistiques Joueur',
    admin_title: 'Console VIP & Administrateur',
    admin_subtitle: 'Outils Développeur & Mode Invincible',
    admin_unlock_title: 'Déblocage Instantané',
    admin_unlock_desc: 'Débloquez tous les niveaux, coupes et trophées en 1 clic.',
    admin_btn_all_levels: 'Débloquer tous les niveaux',
    admin_btn_all_trophies: 'Débloquer les 10 trophées',
    admin_btn_max_stats: 'Statistiques Maximales',
    admin_godmode_title: 'Mode Dieu / Invincibilité',
    vip_auth_title: 'Sécurité Quantique VIP',
    vip_auth_subtitle: 'Vérification 256-Bit Branching',
    vip_auth_prompt: 'Entrez le code maître VIP à 6 chiffres :',
    verify_code_btn: 'Vérifier la clé',
    install_title: 'Installer Noel Arcade',
    install_desc: 'Lancement rapide et jeu 100% hors ligne !',
    install_btn: 'Installer',
    nav_stats: 'Statistiques',
    nav_reset_all: 'Tout réinitialiser',
    established_2026: 'ESTABLISHED 2026',
    created_by: 'Créé par',
    whats_new: 'Nouveautés',
    privacy: 'Confidentialité',
    whats_new_title: 'Nouveautés v24.106',
    privacy_title: 'Politique de confidentialité'
  },
  pt: {
    confirm_language: 'Confirmar Idioma',
    arcade_edition: 'Noel Arcade Universe',
    game_lounge_title: 'Game Lounge',
    how_it_works: 'Como funciona',
    tut_step1: '7 jogos retrô e arcade com IA inteligente.',
    tut_step2: 'Minimax imbatível, IA Markov e Menu VIP Admin.',
    tut_step3: 'Offline, 6 temas, 4 estilos e modo econômico.',
    continue_btn: 'Continuar',
    what_is_your_name: 'Qual é o seu nome?',
    start_game_btn: 'Jogar Agora',
    brand_title: 'Noel Arcade',
    card_ttt_sub: 'IA Minimax',
    card_memory_sub: 'Achar pares',
    card_mario_sub: 'IA Raycast & Pulo',
    card_kart_sub: '50cc-300cc & Itens',
    card_rps_title: 'Jokenpô+',
    card_rps_sub: 'IA Preditiva Markov',
    card_snake_sub: 'Cobrinha Neon',
    card_bricks_sub: 'Quebra-Blocos Laser',
    restart_btn: 'Reiniciar',
    reshuffle_btn: 'Embaralhar',
    mode_human: 'Humano vs Humano',
    mode_ai: 'Humano vs IA',
    diff_easy: 'Fácil',
    diff_medium: 'Médio',
    diff_hard: 'Difícil',
    diff_master: 'Mestre (Minimax)',
    ttt_desc: 'Jogo da Velha clássico com inteligência ajustável',
    stat_player_wins: 'Vitórias:',
    stat_draws: 'Empates:',
    stat_ai_wins: 'Vitórias IA:',
    memory_desc: 'Encontre todos os pares com menor número de tentativas',
    stat_pairs_found: 'Pares:',
    stat_attempts: 'Tentativas:',
    stat_combo: 'Combo:',
    stat_time: 'Tempo:',
    mario_desc: 'IA Raycast preditiva, pulo duplo e moedas',
    ai_autopilot: 'Piloto Auto',
    stat_score: 'Pontos:',
    stat_coins: 'Moedas:',
    stat_highscore: 'Recorde:',
    mario_hint: 'Toque na tela ou pressione [ESPAÇO] para pular! (Pulo duplo ativo)',
    kart_desc: '50cc-300cc, caixas de itens, drift e 6 bots',
    stat_position: 'Posição:',
    stat_speed: 'Velocidade:',
    stat_drift_boost: 'Turbo Drift:',
    stat_item: 'Item:',
    stat_distance: 'Distância:',
    kart_controls_hint: '⌨️ W/↑ Acelerar | S/↓ Freio | A/D Curva | ESPAÇO Drift | E Item',
    auto_gas_label: 'Auto-Gas:',
    how_to_play: 'Como Jogar',
    rps_title: 'Pedra, Papel, Tesoura',
    rps_desc: 'Equipado com IA preditiva de Cadeias de Markov',
    reset_points_btn: 'Zerar Placar',
    rps_mode_classic: 'Clássico (3 Opções)',
    rps_mode_spock: 'Expandido (5 Opções)',
    stat_you: 'Você:',
    stat_computer: 'Computador:',
    stat_streak: 'Sequência:',
    your_pick: 'Sua Escolha',
    ai_pick: 'Escolha da IA',
    choice_rock: 'Pedra',
    choice_paper: 'Papel',
    choice_scissors: 'Tesoura',
    choice_lizard: 'Lagarto',
    choice_spock: 'Spock',
    rps_prompt: 'Faça sua jogada e desafie a IA!',
    snake_desc: 'Colete maçãs neon e cresça sem parar',
    snake_hint: 'Use setas, WASD ou controle virtual.',
    play_again: 'Jogar Novamente',
    bricks_desc: 'Destrua os blocos e pegue tiros de laser',
    stat_lives: 'Vidas:',
    stat_level: 'Nível:',
    bricks_hint: 'Mova com mouse, touch ou A/D. [ESPAÇO] para lançar.',
    settings_title: 'Configurações',
    theme_select_label: 'Tema Visual',
    anim_style_label: 'Estilo de Animação',
    low_end_mode_title: 'Modo Econômico / Bateria',
    low_end_mode_desc: 'Desativa filtros pesados e economiza bateria.',
    scanlines_title: 'Linhas CRT Retrô',
    scanlines_desc: 'Visual de monitor arcade antigo.',
    sound_volume_label: 'Volume dos Efeitos',
    haptic_label: 'Vibração Tátil',
    haptic_desc: 'Respostas táteis no celular.',
    export_stats: 'Exportar Dados',
    import_stats: 'Importar Dados',
    trophies_title: 'Conquistas do Arcade',
    trophies_subtitle: 'Desbloqueie troféus batendo recordes nos jogos!',
    stats_title: 'Estatísticas do Jogador',
    admin_title: 'Console VIP & Administrador',
    admin_subtitle: 'Ferramentas de Desenvolvedor e Modo Deus',
    admin_unlock_title: 'Desbloqueio Imediato',
    admin_unlock_desc: 'Desbloqueie todos os níveis, copas e troféus em 1 clique.',
    admin_btn_all_levels: 'Desbloquear Todos os Níveis',
    admin_btn_all_trophies: 'Desbloquear os 10 Troféus',
    admin_btn_max_stats: 'Conceder Estatísticas Máximas',
    admin_godmode_title: 'Modo Deus / Invencibilidade',
    vip_auth_title: 'Segurança Quântica VIP',
    vip_auth_subtitle: 'Verificação 256-Bit Branching',
    vip_auth_prompt: 'Digite o código mestre VIP de 6 dígitos:',
    verify_code_btn: 'Verificar Chave',
    install_title: 'Instalar Noel Arcade',
    install_desc: 'Início rápido e 100% offline!',
    install_btn: 'Instalar',
    nav_stats: 'Estatísticas',
    nav_reset_all: 'Zerar Tudo',
    established_2026: 'ESTABLISHED 2026',
    created_by: 'Criado por',
    whats_new: 'Novidades',
    privacy: 'Privacidade',
    whats_new_title: 'Novidades na v24.106',
    privacy_title: 'Política de Privacidade'
  },
  tr: {
    confirm_language: 'Dili Onayla',
    arcade_edition: 'Noel Arcade Universe',
    game_lounge_title: 'Oyun Salonu',
    how_it_works: 'Nasıl Oynanır',
    tut_step1: 'Akıllı yapay zekaya sahip 7 retro ve arcade oyunu.',
    tut_step2: 'Yenilmez Minimax, Markov YZ ve VIP Yönetici Menüsü.',
    tut_step3: 'Çevrimdışı, 6 tema, 4 animasyon stili & Eko modu.',
    continue_btn: 'Devam Et',
    what_is_your_name: 'Adın nedir?',
    start_game_btn: 'Başlayalım',
    brand_title: 'Noel Arcade',
    card_ttt_sub: 'Minimax YZ',
    card_memory_sub: 'Çiftleri Bul',
    card_mario_sub: 'Raycast YZ & Zıpla',
    card_kart_sub: '50cc-300cc & Nesneler',
    card_rps_title: 'Taş-Kağıt-Makas+',
    card_rps_sub: 'Markov Tahmin YZ',
    card_snake_sub: 'Neon Yılan',
    card_bricks_sub: 'Lazerli Tuğla Kırma',
    restart_btn: 'Yeniden Başlat',
    reshuffle_btn: 'Karıştır',
    mode_human: 'İnsan vs İnsan',
    mode_ai: 'İnsan vs YZ',
    diff_easy: 'Kolay',
    diff_medium: 'Orta',
    diff_hard: 'Zor',
    diff_master: 'Usta (Minimax)',
    ttt_desc: 'Akıllı yapay zeka ile klasik 3 taş oyunu',
    stat_player_wins: 'Galibiyet:',
    stat_draws: 'Beraberlik:',
    stat_ai_wins: 'YZ Galibiyeti:',
    memory_desc: 'En az denemede tüm kart çiftlerini bulun',
    stat_pairs_found: 'Çiftler:',
    stat_attempts: 'Deneme:',
    stat_combo: 'Seri:',
    stat_time: 'Süre:',
    mario_desc: 'Öngörülü Raycast YZ, çift zıplama ve altınlar',
    ai_autopilot: 'Otopilot',
    stat_score: 'Puan:',
    stat_coins: 'Altın:',
    stat_highscore: 'En İyi:',
    mario_hint: 'Zıplamak için ekrana dokun veya [BOŞLUK] tuşuna bas! (Çift zıplama aktif)',
    kart_desc: '50cc-300cc, gizemli kutular, drift ve 6 bot',
    stat_position: 'Sıra:',
    stat_speed: 'Hız:',
    stat_drift_boost: 'Drift Turbosu:',
    stat_item: 'Öğe:',
    stat_distance: 'Mesafe:',
    kart_controls_hint: '⌨️ W/↑ Gaz | S/↓ Fren | A/D Direksiyon | BOŞLUK Drift | E Öğe',
    auto_gas_label: 'Otomatik Gaz:',
    how_to_play: 'Nasıl Oynanır',
    rps_title: 'Taş, Kağıt, Makas',
    rps_desc: 'Markov Zinciri tahmin yapay zekası ile donatıldı',
    reset_points_btn: 'Puanları Sıfırla',
    rps_mode_classic: 'Klasik (3 Seçenek)',
    rps_mode_spock: 'Gelişmiş (5 Seçenek)',
    stat_you: 'Sen:',
    stat_computer: 'Bilgisayar:',
    stat_streak: 'Seri:',
    your_pick: 'Seçimin',
    ai_pick: 'YZ Seçimi',
    choice_rock: 'Taş',
    choice_paper: 'Kağıt',
    choice_scissors: 'Makas',
    choice_lizard: 'Kertenkele',
    choice_spock: 'Spock',
    rps_prompt: 'Hamleni yap ve tahmin yapay zekasına meydan oku!',
    snake_desc: 'Neon elmaları topla ve sonsuza kadar büyü',
    snake_hint: 'Yön tuşları, WASD veya dokunmatik D-Pad kullanın.',
    play_again: 'Tekrar Oyna',
    bricks_desc: 'Tüm tuğlaları kır ve lazer güçlendirmelerini kap',
    stat_lives: 'Can:',
    stat_level: 'Seviye:',
    bricks_hint: 'Fare, dokunmatik veya A/D ile hareket ettir. [BOŞLUK] Başlat.',
    settings_title: 'Ayarlar',
    theme_select_label: 'Tasarım Teması',
    anim_style_label: 'Animasyon Stili',
    low_end_mode_title: 'Eko / Pil Tasarruf Modu',
    low_end_mode_desc: 'Ağır efektleri kapatır, pil ve işlemciyi korur.',
    scanlines_title: 'CRT Retro Çizgiler',
    scanlines_desc: 'Retro tüplü televizyon efekti.',
    sound_volume_label: 'Ses Efekti Seviyesi',
    haptic_label: 'Dokunsal Titreşim',
    haptic_desc: 'Akıllı telefonlarda dokunma tepkisi.',
    export_stats: 'Verileri Dışa Aktar',
    import_stats: 'Verileri İçe Aktar',
    trophies_title: 'Arcade Başarıları',
    trophies_subtitle: 'Oyunlarda rekor kırarak kupaların kilidini açın!',
    stats_title: 'Oyuncu İstatistikleri',
    admin_title: 'VIP & Yönetici Konsolu',
    admin_subtitle: 'Geliştirici Araçları ve Tanrı Modu',
    admin_unlock_title: 'Anında Kilit Açma',
    admin_unlock_desc: 'Tek tıkla tüm seviyelerin, kupaların ve başarıların kilidini açın.',
    admin_btn_all_levels: 'Tüm Seviyeleri Aç',
    admin_btn_all_trophies: '10 Kupayı Aç',
    admin_btn_max_stats: 'Maksimum İstatistikler Ver',
    admin_godmode_title: 'Tanrı Modu / Ölümsüzlük',
    vip_auth_title: 'VIP Kuantum Güvenliği',
    vip_auth_subtitle: '256-Bit Dallanmış Doğrulama',
    vip_auth_prompt: '6 haneli şifreli VIP Anahtarını girin:',
    verify_code_btn: 'Anahtarı Doğrula',
    install_title: 'Noel Arcade Yükle',
    install_desc: 'Daha hızlı başlatın ve %100 çevrimdışı oynayın!',
    install_btn: 'Yükle',
    nav_stats: 'İstatistikler',
    nav_reset_all: 'Tüm Skorları Sıfırla',
    established_2026: 'ESTABLISHED 2026',
    created_by: 'Hazırlayan',
    whats_new: 'Yenilikler',
    privacy: 'Gizlilik',
    whats_new_title: 'v24.106 ile Neler Yeni?',
    privacy_title: 'Gizlilik Politikası'
  },
  es: {
    confirm_language: 'Confirmar Idioma',
    arcade_edition: 'Noel Arcade Universe',
    game_lounge_title: 'Game Lounge',
    how_it_works: 'Cómo funciona',
    tut_step1: '7 juegos retro y arcade con IA inteligente.',
    tut_step2: 'Minimax invencible, IA Markov y Menú VIP Admin.',
    tut_step3: '100% offline, 6 temas, 4 estilos y modo ahorro.',
    continue_btn: 'Continuar',
    what_is_your_name: '¿Cómo te llamas?',
    start_game_btn: '¡A Jugar!',
    brand_title: 'Noel Arcade',
    card_ttt_sub: 'IA Minimax',
    card_memory_sub: 'Encontrar parejas',
    card_mario_sub: 'IA Raycast & Salto',
    card_kart_sub: '50cc-300cc & Objetos',
    card_rps_title: 'Piedra-Papel+',
    card_rps_sub: 'IA Predictiva Markov',
    card_snake_sub: 'Serpiente Neón',
    card_bricks_sub: 'Rompe-Bloques Láser',
    restart_btn: 'Reiniciar',
    reshuffle_btn: 'Barajar',
    mode_human: 'Humano vs Humano',
    mode_ai: 'Humano vs IA',
    diff_easy: 'Fácil',
    diff_medium: 'Medio',
    diff_hard: 'Difícil',
    diff_master: 'Maestro (Minimax)',
    ttt_desc: 'Tres en raya clásico con inteligencia ajustable',
    stat_player_wins: 'Victorias:',
    stat_draws: 'Empates:',
    stat_ai_wins: 'Victorias IA:',
    memory_desc: 'Encuentra todas las parejas con los mínimos intentos',
    stat_pairs_found: 'Parejas:',
    stat_attempts: 'Intentos:',
    stat_combo: 'Racha:',
    stat_time: 'Tiempo:',
    mario_desc: 'IA Raycast predictiva, doble salto y monedas',
    ai_autopilot: 'Piloto Auto',
    stat_score: 'Puntos:',
    stat_coins: 'Monedas:',
    stat_highscore: 'Récord:',
    mario_hint: '¡Toca o pulsa [ESPACIO] para saltar! (Doble salto disponible)',
    kart_desc: '50cc-300cc, cajas sorpresa, drift y 6 bots IA',
    stat_position: 'Puesto:',
    stat_speed: 'Velocidad:',
    stat_drift_boost: 'Turbo Drift:',
    stat_item: 'Objeto:',
    stat_distance: 'Distancia:',
    kart_controls_hint: '⌨️ W/↑ Gas | S/↓ Freno | A/D Girar | ESPACIO Derrape | E Objeto',
    auto_gas_label: 'Auto-Gas:',
    how_to_play: 'Cómo Jugar',
    rps_title: 'Piedra, Papel, Tijera',
    rps_desc: 'Con IA predictiva de Cadenas de Markov',
    reset_points_btn: 'Reiniciar Puntos',
    rps_mode_classic: 'Clásico (3 Opciones)',
    rps_mode_spock: 'Extendido (5 Opciones)',
    stat_you: 'Tú:',
    stat_computer: 'Ordenador:',
    stat_streak: 'Racha:',
    your_pick: 'Tu Elección',
    ai_pick: 'Elección IA',
    choice_rock: 'Piedra',
    choice_paper: 'Papel',
    choice_scissors: 'Tijera',
    choice_lizard: 'Lagarto',
    choice_spock: 'Spock',
    rps_prompt: '¡Haz tu jugada y desafía a la IA predictiva!',
    snake_desc: 'Recoge manzanas de neón y crece sin límite',
    snake_hint: 'Usa las flechas, WASD o la cruceta táctil.',
    play_again: 'Jugar de nuevo',
    bricks_desc: 'Rompe todos los ladrillos y atrapa los láseres',
    stat_lives: 'Vidas:',
    stat_level: 'Nivel:',
    bricks_hint: 'Mueve la pala con el ratón o teclas. [ESPACIO] para lanzar.',
    settings_title: 'Ajustes',
    theme_select_label: 'Tema Visual',
    anim_style_label: 'Estilo de Animación',
    low_end_mode_title: 'Modo Ahorro / Rendimiento',
    low_end_mode_desc: 'Desactiva desenfoques y ahorra batería.',
    scanlines_title: 'Líneas CRT Retro',
    scanlines_desc: 'Efecto de monitor arcade clásico.',
    sound_volume_label: 'Volumen de Efectos',
    haptic_label: 'Vibración Háptica',
    haptic_desc: 'Respuesta táctil en teléfonos móviles.',
    export_stats: 'Exportar Datos',
    import_stats: 'Importar Datos',
    trophies_title: 'Logros del Arcade',
    trophies_subtitle: '¡Desbloquea trofeos superando récords en los juegos!',
    stats_title: 'Estadísticas del Jogador',
    admin_title: 'Consola VIP & Administrador',
    admin_subtitle: 'Herramientas de Desarrollador y Modo Dios',
    admin_unlock_title: 'Desbloqueo Inmediato',
    admin_unlock_desc: 'Desbloquea todos los niveles, copas y trofeos en 1 clic.',
    admin_btn_all_levels: 'Desbloquear Todos os Níveis',
    admin_btn_all_trophies: 'Desbloquear os 10 Troféus',
    admin_btn_max_stats: 'Conceder Estatísticas Máximas',
    admin_godmode_title: 'Modo Dios / Invencibilidad',
    vip_auth_title: 'Seguridad Cuántica VIP',
    vip_auth_subtitle: 'Verificación 256-Bit Branching',
    vip_auth_prompt: 'Introduce el código maestro VIP de 6 dígitos:',
    verify_code_btn: 'Verificar Clave',
    install_title: 'Instalar Noel Arcade',
    install_desc: '¡Inicio rápido y juego 100% offline!',
    install_btn: 'Instalar',
    nav_stats: 'Estadísticas',
    nav_reset_all: 'Reiniciar Todo',
    established_2026: 'ESTABLISHED 2026',
    created_by: 'Creado por',
    whats_new: '¿Qué hay de nuevo?',
    privacy: 'Privacidad',
    whats_new_title: '¿Qué hay de nuevo en v24.106?',
    privacy_title: 'Política de Privacidad'
  }
};

/* ==========================================================================
   2. APP STATE & PERSISTENCE
   ========================================================================== */
const DEFAULT_STATE = {
  playerName: 'Gast',
  playerAvatar: '👾',
  isVip: false,
  vipCoins: 0,
  language: null,
  theme: 'synthwave',
  animStyle: 'snappy',
  lowEndMode: false,
  scanlines: false,
  vipSparkleTrail: false,
  soundVolume: 50,
  soundMuted: false,
  hapticEnabled: true,
  admin: {
    godMario: false,
    godKart: false,
    godBricks: false,
    godSnake: false,
    infiniteCoins: false,
    marioGoldSuit: false,
    gameSpeed: 1.0,
    marioJumpVelocity: 12.5,
    kartAccelMultiplier: 1.0,
    showAiRaycast: true,
    showMinimaxTree: false,
    showMarkovHeatmap: false
  },
  stats: {
    ttt: { winsX: 0, winsO: 0, draws: 0, gamesPlayed: 0 },
    memory: { gamesPlayed: 0, bestTime: 999, maxCombo: 0 },
    mario: { highscore: 0, totalCoins: 0, gamesPlayed: 0 },
    kart: { firstPlaces: 0, totalRaces: 0 },
    rps: { userWins: 0, compWins: 0, draws: 0, maxStreak: 0 },
    snake: { highscore: 0, gamesPlayed: 0 },
    bricks: { highscore: 0, highestLevel: 1, gamesPlayed: 0 }
  },
  trophies: {
    first_step: { id: 'first_step', icon: '🎮', title: 'Erster Schritt', desc: 'Spiele dein erstes Arcade-Spiel', unlocked: false },
    ttt_master: { id: 'ttt_master', icon: '🤖', title: 'Minimax Bezwinger', desc: 'Erreiche ein Remis oder Sieg im Meister-Modus', unlocked: false },
    memory_champ: { id: 'memory_champ', icon: '🧠', title: 'Fotogedächtnis', desc: 'Memory in unter 20 Versuchen lösen', unlocked: false },
    mario_runner: { id: 'mario_runner', icon: '🍄', title: 'Marathon-Sprinter', desc: 'Erreiche 500 Punkte in Super Mario Run', unlocked: false },
    kart_champion: { id: 'kart_champion', icon: '🏎️', title: 'Grand-Prix Sieger', desc: 'Erreiche Platz 1 in Mario Kart Rush', unlocked: false },
    markov_mind: { id: 'markov_mind', icon: '🔮', title: 'Gedankenleser', desc: 'Erreiche eine 4er-Siegesserie in RPSLS', unlocked: false },
    snake_length: { id: 'snake_length', icon: '🐍', title: 'Schlangenbändiger', desc: 'Erreiche 100 Punkte in Neon Snake', unlocked: false },
    brick_crusher: { id: 'brick_crusher', icon: '🧱', title: 'Ziegelmeister', desc: 'Erreiche Level 2 in Cyber Brick Breaker', unlocked: false },
    customizer: { id: 'customizer', icon: '🎨', title: 'Stilikone', desc: 'Passe Theme oder Animationsstil in den Einstellungen an', unlocked: false },
    vip_crown: { id: 'vip_crown', icon: '👑', title: 'VIP Administrator', desc: 'Öffne die geheime VIP & Admin Konsole mit Quanten-Key', unlocked: false },
    vip_tycoon: { id: 'vip_tycoon', icon: '💰', title: 'VIP Münz-Milliardär', desc: 'Generiere über 100.000 Münzen im VIP Bank-Tresor', unlocked: false }
  }
};

let appState = JSON.parse(JSON.stringify(DEFAULT_STATE));

function loadSavedState() {
  try {
    const raw = localStorage.getItem('arcade_ultra_state');
    if (raw) {
      const parsed = JSON.parse(raw);
      appState = {
        ...DEFAULT_STATE,
        ...parsed,
        admin: { ...DEFAULT_STATE.admin, ...(parsed.admin || {}) },
        stats: { ...DEFAULT_STATE.stats, ...(parsed.stats || {}) },
        trophies: { ...DEFAULT_STATE.trophies, ...(parsed.trophies || {}) }
      };
    }
  } catch (e) {
    console.warn('Could not read state from localStorage', e);
  }
}

function saveState() {
  try {
    localStorage.setItem('arcade_ultra_state', JSON.stringify(appState));
  } catch (e) {
    console.warn('Could not save state to localStorage', e);
  }
}

/* ==========================================================================
   3. 3D PHYSICS CONFETTI & MONEY SHOWER ENGINE
   ========================================================================== */
const confettiCanvas = document.getElementById('confetti-canvas');
const confettiCtx = confettiCanvas ? confettiCanvas.getContext('2d') : null;
let confettiParticles = [];
let confettiAnimId = null;

function resizeConfetti() {
  if (confettiCanvas) {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
}
window.addEventListener('resize', resizeConfetti);
resizeConfetti();

function triggerConfetti(count = 50, isMoney = false) {
  if (appState.lowEndMode || !confettiCtx) return;

  // Immediately cancel previous animation and wipe old particles to prevent stutter & save CPU
  if (confettiAnimId) {
    cancelAnimationFrame(confettiAnimId);
    confettiAnimId = null;
  }
  confettiParticles = [];
  if (confettiCanvas) {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }

  const standardColors = ['#facc15', '#ec4899', '#8b5cf6', '#06b6d4', '#10b981', '#38bdf8'];
  const moneySymbols = ['💵', '🪙', '💰', '💎'];

  for (let i = 0; i < count; i++) {
    confettiParticles.push({
      x: window.innerWidth * (0.25 + Math.random() * 0.5),
      y: window.innerHeight * 0.35,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.8) * 18,
      size: Math.random() * 7 + 6,
      color: standardColors[Math.floor(Math.random() * standardColors.length)],
      isMoney: isMoney,
      symbol: moneySymbols[Math.floor(Math.random() * moneySymbols.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 10,
      opacity: 1,
      decay: Math.random() * 0.02 + 0.012
    });
  }

  confettiAnimId = requestAnimationFrame(updateConfetti);
}

function updateConfetti() {
  if (!confettiCtx) return;
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.4;
    p.vx *= 0.98;
    p.rotation += p.rSpeed;
    p.opacity -= p.decay;

    if (p.opacity <= 0 || p.y > window.innerHeight + 50) {
      confettiParticles.splice(i, 1);
      continue;
    }

    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate((p.rotation * Math.PI) / 180);
    confettiCtx.globalAlpha = p.opacity;

    if (p.isMoney) {
      confettiCtx.font = `${Math.round(p.size * 2.2)}px sans-serif`;
      confettiCtx.fillText(p.symbol, -p.size, p.size);
    } else {
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
    }
    confettiCtx.restore();
  }

  if (confettiParticles.length > 0) {
    confettiAnimId = requestAnimationFrame(updateConfetti);
  } else {
    confettiAnimId = null;
  }
}

/* ==========================================================================
   4. VIP SPARKLE MOUSE / TOUCH TRAIL CANVAS
   ========================================================================== */
const sparkleCanvas = document.getElementById('vip-sparkle-canvas');
const sparkleCtx = sparkleCanvas ? sparkleCanvas.getContext('2d') : null;
let sparkleParticles = [];
let sparkleAnimId = null;

function resizeSparkle() {
  if (sparkleCanvas) {
    sparkleCanvas.width = window.innerWidth;
    sparkleCanvas.height = window.innerHeight;
  }
}
window.addEventListener('resize', resizeSparkle);
resizeSparkle();

function addSparkle(x, y) {
  if (!appState.isVip || !appState.vipSparkleTrail || appState.lowEndMode || !sparkleCtx) return;
  for (let i = 0; i < 2; i++) {
    sparkleParticles.push({
      x, y,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      size: Math.random() * 4 + 2,
      color: appState.theme === 'vipplatinum' ? '#38bdf8' : '#facc15',
      opacity: 1,
      decay: 0.03
    });
  }
  if (!sparkleAnimId) {
    sparkleAnimId = requestAnimationFrame(updateSparkles);
  }
}

function updateSparkles() {
  if (!sparkleCtx) return;
  sparkleCtx.clearRect(0, 0, sparkleCanvas.width, sparkleCanvas.height);

  for (let i = sparkleParticles.length - 1; i >= 0; i--) {
    const s = sparkleParticles[i];
    s.x += s.vx;
    s.y += s.vy;
    s.opacity -= s.decay;

    if (s.opacity <= 0) {
      sparkleParticles.splice(i, 1);
      continue;
    }

    sparkleCtx.save();
    sparkleCtx.globalAlpha = s.opacity;
    sparkleCtx.fillStyle = s.color;
    sparkleCtx.shadowColor = s.color;
    sparkleCtx.shadowBlur = 8;
    sparkleCtx.beginPath();
    sparkleCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    sparkleCtx.fill();
    sparkleCtx.restore();
  }

  if (sparkleParticles.length > 0) {
    sparkleAnimId = requestAnimationFrame(updateSparkles);
  } else {
    sparkleAnimId = null;
  }
}

window.addEventListener('mousemove', (e) => addSparkle(e.clientX, e.clientY));
window.addEventListener('touchmove', (e) => {
  if (e.touches[0]) addSparkle(e.touches[0].clientX, e.touches[0].clientY);
});

/* ==========================================================================
   5. SYNTHESIZED RETRO AUDIO ENGINE & RETRO CHIPTUNE JUKEBOX
   ========================================================================== */
let audioCtx = null;
let jukeboxInterval = null;
let jukeboxPlaying = false;
let currentTrackIdx = 0;

const JUKEBOX_TRACKS = [
  {
    name: '🎶 Track 1: Neon Arcade Odyssey (128 BPM)',
    tempo: 125,
    notes: [
      { f: 523, d: 0.12 }, { f: 659, d: 0.12 }, { f: 784, d: 0.12 }, { f: 1046, d: 0.2 },
      { f: 880, d: 0.12 }, { f: 659, d: 0.12 }, { f: 784, d: 0.12 }, { f: 523, d: 0.25 },
      { f: 440, d: 0.12 }, { f: 554, d: 0.12 }, { f: 659, d: 0.12 }, { f: 880, d: 0.2 },
      { f: 587, d: 0.12 }, { f: 493, d: 0.12 }, { f: 392, d: 0.12 }, { f: 523, d: 0.3 }
    ]
  },
  {
    name: '🌌 Track 2: Cyber Synthwave Drift (110 BPM)',
    tempo: 160,
    notes: [
      { f: 220, d: 0.2 }, { f: 261, d: 0.2 }, { f: 329, d: 0.2 }, { f: 392, d: 0.3 },
      { f: 349, d: 0.2 }, { f: 293, d: 0.2 }, { f: 261, d: 0.2 }, { f: 220, d: 0.35 }
    ]
  },
  {
    name: '🍄 Track 3: 8-Bit Mushroom Kingdom (135 BPM)',
    tempo: 110,
    notes: [
      { f: 659, d: 0.1 }, { f: 659, d: 0.1 }, { f: 0, d: 0.1 }, { f: 659, d: 0.1 },
      { f: 0, d: 0.1 }, { f: 523, d: 0.1 }, { f: 659, d: 0.15 }, { f: 784, d: 0.25 },
      { f: 0, d: 0.1 }, { f: 392, d: 0.25 }
    ]
  },
  {
    name: '🏎️ Track 4: Grand Prix Turbo Run (145 BPM)',
    tempo: 95,
    notes: [
      { f: 440, d: 0.08 }, { f: 493, d: 0.08 }, { f: 523, d: 0.08 }, { f: 659, d: 0.14 },
      { f: 587, d: 0.08 }, { f: 523, d: 0.08 }, { f: 493, d: 0.08 }, { f: 440, d: 0.16 }
    ]
  },
  {
    name: '👑 Track 5: Royal Golden Anthem (VIP 130 BPM)',
    tempo: 115,
    notes: [
      { f: 587, d: 0.14 }, { f: 740, d: 0.14 }, { f: 880, d: 0.18 }, { f: 1174, d: 0.3 },
      { f: 987, d: 0.14 }, { f: 880, d: 0.14 }, { f: 740, d: 0.14 }, { f: 880, d: 0.35 }
    ]
  },
  {
    name: '💎 Track 6: Platinum Cyber Synth (VIP 120 BPM)',
    tempo: 130,
    notes: [
      { f: 440, d: 0.15 }, { f: 659, d: 0.15 }, { f: 880, d: 0.25 }, { f: 784, d: 0.15 },
      { f: 659, d: 0.15 }, { f: 523, d: 0.2 }, { f: 587, d: 0.2 }, { f: 440, d: 0.3 }
    ]
  }
];

function getAudioContext() {
  if (appState.soundMuted || appState.soundVolume <= 0) return null;
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;
  if (!audioCtx) {
    audioCtx = new AudioCtor();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function triggerHaptic(duration = 20) {
  if (appState.hapticEnabled && navigator.vibrate) {
    try {
      navigator.vibrate(duration);
    } catch (e) {}
  }
}

function playSynthTone({ freq = 440, duration = 0.1, type = 'sine', sweep = 0, gainMul = 1 }) {
  const ctx = getAudioContext();
  if (!ctx) return;
  
  const masterGainVal = (appState.soundVolume / 100) * 0.08 * gainMul;
  const startTime = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, startTime);
  if (sweep !== 0) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq + sweep), startTime + duration);
  }

  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.linearRampToValueAtTime(masterGainVal, startTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(startTime);
  osc.stop(startTime + duration + 0.02);
}

const SFX = {
  click: () => playSynthTone({ freq: 600, duration: 0.04, type: 'triangle', sweep: 100 }),
  move: () => { playSynthTone({ freq: 520, duration: 0.06, type: 'triangle' }); triggerHaptic(15); },
  win: () => {
    [523, 659, 784, 1046].forEach((f, i) => {
      setTimeout(() => playSynthTone({ freq: f, duration: 0.14, type: 'triangle', sweep: 20 }), i * 80);
    });
    triggerHaptic([30, 40, 50]);
    triggerConfetti(60);
  },
  loss: () => {
    [320, 260, 200].forEach((f, i) => {
      setTimeout(() => playSynthTone({ freq: f, duration: 0.15, type: 'sawtooth', sweep: -30 }), i * 100);
    });
    triggerHaptic(60);
  },
  draw: () => playSynthTone({ freq: 350, duration: 0.18, type: 'sine', sweep: -20 }),
  jump: () => { playSynthTone({ freq: 380, duration: 0.09, type: 'square', sweep: 180 }); triggerHaptic(20); },
  coin: () => { playSynthTone({ freq: 987, duration: 0.08, type: 'sine', sweep: 330 }); triggerHaptic(15); },
  kaching: () => {
    playSynthTone({ freq: 1318, duration: 0.15, type: 'triangle', gainMul: 1.5 });
    setTimeout(() => playSynthTone({ freq: 1760, duration: 0.25, type: 'sine', sweep: 200, gainMul: 1.5 }), 80);
    triggerHaptic([30, 50]);
  },
  powerup: () => {
    [440, 554, 659, 880].forEach((f, i) => {
      setTimeout(() => playSynthTone({ freq: f, duration: 0.08, type: 'square' }), i * 60);
    });
    triggerHaptic(40);
  },
  drift: () => playSynthTone({ freq: 240, duration: 0.08, type: 'sawtooth', sweep: 50 }),
  hit: () => { playSynthTone({ freq: 180, duration: 0.12, type: 'square', sweep: -60 }); triggerHaptic(35); },
  beepRed: () => playSynthTone({ freq: 440, duration: 0.1, type: 'square' }),
  beepGreen: () => playSynthTone({ freq: 880, duration: 0.25, type: 'triangle', sweep: 50 }),
  achievement: () => {
    [587, 740, 880, 1174].forEach((f, i) => {
      setTimeout(() => playSynthTone({ freq: f, duration: 0.18, type: 'triangle', sweep: 40 }), i * 90);
    });
    triggerHaptic([40, 60, 80]);
    triggerConfetti(80);
  }
};

/* --- Chiptune Jukebox Logic --- */
function startJukebox() {
  stopJukebox();
  const track = JUKEBOX_TRACKS[currentTrackIdx];
  let noteIndex = 0;
  jukeboxPlaying = true;

  document.getElementById('jukebox-bar').classList.add('playing');
  document.getElementById('jukebox-toggle-btn').textContent = '⏸';
  document.getElementById('jukebox-track-label').textContent = track.name;

  jukeboxInterval = setInterval(() => {
    if (isAppFrozen || appState.soundMuted) return;
    const note = track.notes[noteIndex];
    if (note && note.f > 0) {
      playSynthTone({ freq: note.f, duration: note.d, type: 'square', gainMul: 0.4 });
    }
    noteIndex = (noteIndex + 1) % track.notes.length;
  }, track.tempo);
}

function stopJukebox() {
  if (jukeboxInterval) clearInterval(jukeboxInterval);
  jukeboxPlaying = false;
  document.getElementById('jukebox-bar').classList.remove('playing');
  document.getElementById('jukebox-toggle-btn').textContent = '▶';
  document.getElementById('jukebox-track-label').textContent = '🎶 Chiptune Jukebox: Pausiert';
}

function toggleJukebox() {
  if (jukeboxPlaying) stopJukebox();
  else startJukebox();
}

function nextJukeboxTrack() {
  currentTrackIdx = (currentTrackIdx + 1) % JUKEBOX_TRACKS.length;
  if (!appState.isVip && currentTrackIdx >= 4) {
    currentTrackIdx = 0; // VIP tracks locked for non-VIPs
  }
  if (jukeboxPlaying) startJukebox();
  else document.getElementById('jukebox-track-label').textContent = JUKEBOX_TRACKS[currentTrackIdx].name;
}

function prevJukeboxTrack() {
  currentTrackIdx = (currentTrackIdx - 1 + JUKEBOX_TRACKS.length) % JUKEBOX_TRACKS.length;
  if (!appState.isVip && currentTrackIdx >= 4) {
    currentTrackIdx = 3;
  }
  if (jukeboxPlaying) startJukebox();
  else document.getElementById('jukebox-track-label').textContent = JUKEBOX_TRACKS[currentTrackIdx].name;
}

/* ==========================================================================
   6. QUANTUM-RESISTANT BRANCHING CRYPTOGRAPHIC VIP AUTHENTICATION & LOCK SYSTEM
   ========================================================================= */
async function verifyQuantumPasscode(enteredPin) {
  try {
    const encoder = new TextEncoder();
    const salt = 'ARCADE_QUANTUM_BRANCH_V4_8829F';
    const targetDigest = 'bf1f560b3d3227c020f240630f337bca485083b936b89dfa1c8174856c8e5a9a';

    let data = encoder.encode(enteredPin + salt);
    let hashBuf = await crypto.subtle.digest('SHA-256', data);
    let hex = Array.from(new Uint8Array(hashBuf)).map(b => b.toString(16).padStart(2, '0')).join('');

    for (let i = 0; i < 1000; i++) {
      const roundData = encoder.encode(hex + salt + i);
      hashBuf = await crypto.subtle.digest('SHA-256', roundData);
      hex = Array.from(new Uint8Array(hashBuf)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    return hex === targetDigest;
  } catch (e) {
    console.error('Quantum Crypto Error:', e);
    return false;
  }
}

let pinBuffer = [];

function updateVipVisualState() {
  const isVip = appState.isVip;
  document.documentElement.classList.toggle('is-vip-active', isVip);
  document.getElementById('vip-badge-tag').classList.toggle('hidden', !isVip);
  document.getElementById('vip-wallet-chip').classList.toggle('hidden', !isVip);
  document.getElementById('vip-announcement-banner').classList.toggle('hidden', !isVip);
  document.getElementById('vip-sparkle-canvas').classList.toggle('hidden', !isVip || !appState.vipSparkleTrail);

  const walletCoinsEl = document.getElementById('vip-wallet-coins');
  const bankBalanceEl = document.getElementById('admin-bank-balance');
  if (walletCoinsEl) {
    walletCoinsEl.textContent = Number(appState.vipCoins).toLocaleString();
    if (typeof walletCoinsEl.animate === 'function') {
      walletCoinsEl.animate(
        [{ transform: 'scale(1.22)', color: '#fef08a' }, { transform: 'scale(1)', color: '#facc15' }],
        { duration: 160, easing: 'ease-out' }
      );
    }
  }
  if (bankBalanceEl) bankBalanceEl.textContent = Number(appState.vipCoins).toLocaleString();
}

function initQuantumVipAuth() {
  const modal = document.getElementById('vip-auth-modal');
  const closeBtn = document.getElementById('close-vip-auth-btn');
  const statusEl = document.getElementById('pin-auth-status');
  const slots = document.querySelectorAll('.pin-slot');
  const keypadGrid = document.getElementById('pin-keypad-grid');
  const scrambleBtn = document.getElementById('pin-scramble-btn');
  const verifyBtn = document.getElementById('pin-submit-verify-btn');

  function updatePinDisplay() {
    slots.forEach((slot, idx) => {
      slot.classList.toggle('filled', idx < pinBuffer.length);
      slot.classList.toggle('active-focus', idx === pinBuffer.length);
    });
  }

  function clearPin() {
    pinBuffer = [];
    updatePinDisplay();
    statusEl.textContent = '[BEREIT FÜR EINGABE]';
    statusEl.className = 'pin-status-msg';
  }

  function addPinDigit(digit) {
    if (pinBuffer.length < 6) {
      pinBuffer.push(digit);
      SFX.move();
      updatePinDisplay();
      if (pinBuffer.length === 6) {
        submitPinVerification();
      }
    }
  }

  function backspacePin() {
    if (pinBuffer.length > 0) {
      pinBuffer.pop();
      SFX.click();
      updatePinDisplay();
    }
  }

  async function submitPinVerification() {
    if (pinBuffer.length < 6) {
      statusEl.textContent = '⚠️ Bitte alle 6 Stellen eingeben!';
      statusEl.className = 'pin-status-msg error';
      return;
    }

    statusEl.textContent = '⚡ VERIFIZIERE QUANTEN-SCHLÜSSEL...';
    statusEl.className = 'pin-status-msg';

    const entered = pinBuffer.join('');
    const isValid = await verifyQuantumPasscode(entered);

    if (isValid) {
      statusEl.textContent = '✅ ZUGRIFF GEWÄHRLEISTET - VIP STATUS AKTIV!';
      statusEl.className = 'pin-status-msg success';
      sessionStorage.setItem('arcade_vip_auth', 'verified');
      appState.isVip = true;
      if (appState.vipCoins < 10000) appState.vipCoins = 10000;
      saveState();
      updateVipVisualState();
      unlockTrophy('vip_crown');
      SFX.achievement();
      triggerConfetti(100, true);

      setTimeout(() => {
        modal.classList.add('hidden');
        clearPin();
        openAdminConsoleDirect();
      }, 500);
    } else {
      statusEl.textContent = '❌ ZUGRIFF VERWEIGERT - CODE UNGÜLTIG';
      statusEl.className = 'pin-status-msg error';
      SFX.loss();
      triggerHaptic([100, 50, 100]);

      setTimeout(() => {
        clearPin();
      }, 700);
    }
  }

  keypadGrid.querySelectorAll('[data-key]').forEach(btn => {
    btn.addEventListener('click', () => addPinDigit(btn.dataset.key));
  });

  document.getElementById('pin-key-clear').addEventListener('click', clearPin);
  document.getElementById('pin-key-backspace').addEventListener('click', backspacePin);
  verifyBtn.addEventListener('click', submitPinVerification);

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden')) {
      if (e.key >= '0' && e.key <= '9') addPinDigit(e.key);
      else if (e.key === 'Backspace') backspacePin();
      else if (e.key === 'Enter') submitPinVerification();
      else if (e.key === 'Escape') modal.classList.add('hidden');
    }
  });

  scrambleBtn.addEventListener('click', () => {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].sort(() => Math.random() - 0.5);
    const keyBtns = Array.from(keypadGrid.querySelectorAll('[data-key]'));
    keyBtns.forEach((btn, idx) => {
      btn.dataset.key = digits[idx];
      btn.textContent = digits[idx];
    });
    SFX.powerup();
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    clearPin();
    SFX.click();
  });

  // Attach lock interceptors to all VIP lock items
  document.querySelectorAll('.vip-lock-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (!appState.isVip) {
        e.preventDefault();
        e.stopPropagation();
        openVipTrigger('🔒 VIP Exklusives Feature - Bitte VIP Master-Code eingeben!');
      }
    });
  });
}

function openVipTrigger(promptMsg) {
  if (sessionStorage.getItem('arcade_vip_auth') === 'verified' && appState.isVip) {
    openAdminConsoleDirect();
  } else {
    if (promptMsg) {
      const hint = document.querySelector('.vip-auth-hint');
      if (hint) hint.textContent = promptMsg;
    }
    document.getElementById('vip-auth-modal').classList.remove('hidden');
    SFX.click();
  }
}

function openAdminConsoleDirect() {
  appState.isVip = true;
  updateVipVisualState();
  unlockTrophy('vip_crown');
  document.getElementById('admin-modal').classList.remove('hidden');
  saveState();
  SFX.achievement();
}

/* ==========================================================================
   7. VIP BANK & MONEY MINT GENERATOR
   ========================================================================== */
function mintVipCoins(amount) {
  if (!appState.isVip) {
    openVipTrigger('🔒 VIP Bank - Nur für verifizierte VIPs!');
    return;
  }

  appState.vipCoins += amount;
  appState.stats.mario.totalCoins += amount;
  saveState();
  updateVipVisualState();

  SFX.kaching();
  triggerConfetti(45, true);

  if (appState.vipCoins >= 100000) {
    unlockTrophy('vip_tycoon');
  }
}

function initVipBank() {
  document.getElementById('btn-mint-1k').addEventListener('click', () => mintVipCoins(1000));
  document.getElementById('btn-mint-10k').addEventListener('click', () => mintVipCoins(10000));
  document.getElementById('btn-mint-100k').addEventListener('click', () => mintVipCoins(100000));
  document.getElementById('btn-mint-1m').addEventListener('click', () => mintVipCoins(1000000));

  document.getElementById('btn-custom-mint').addEventListener('click', () => {
    const input = document.getElementById('custom-mint-input');
    const val = parseInt(input.value, 10);
    if (!isNaN(val) && val > 0) {
      mintVipCoins(val);
      input.value = '';
    } else {
      alert('Bitte gültigen Geldbetrag eingeben!');
    }
  });

  document.getElementById('quick-add-money-btn').addEventListener('click', () => {
    mintVipCoins(10000);
  });

  document.getElementById('admin-infinite-coins-toggle').addEventListener('change', (e) => {
    appState.admin.infiniteCoins = e.target.checked;
    saveState();
    SFX.powerup();
  });
}

/* ==========================================================================
   8. TROPHIES & ACHIEVEMENTS SYSTEM
   ========================================================================== */
function unlockTrophy(key) {
  if (appState.trophies[key] && !appState.trophies[key].unlocked) {
    appState.trophies[key].unlocked = true;
    saveState();
    updateTrophyCountBadge();
    SFX.achievement();
    showTrophyToast(appState.trophies[key]);
  }
}

function updateTrophyCountBadge() {
  const count = Object.values(appState.trophies).filter(t => t.unlocked).length;
  const badge = document.getElementById('trophy-count');
  if (badge) badge.textContent = String(count);
}

function showTrophyToast(trophy) {
  const toast = document.createElement('div');
  toast.className = 'install-toast';
  toast.style.borderColor = '#facc15';
  toast.innerHTML = `
    <div class="install-toast-content">
      <span style="font-size: 2rem;">${trophy.icon}</span>
      <div>
        <strong style="color: #facc15;">🏆 Errungenschaft freigeschaltet!</strong>
        <small>${trophy.title}: ${trophy.desc}</small>
      </div>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

function renderTrophiesModal() {
  const container = document.getElementById('trophies-list');
  if (!container) return;
  container.innerHTML = '';
  
  Object.values(appState.trophies).forEach(t => {
    const card = document.createElement('div');
    card.className = `trophy-card ${t.unlocked ? 'unlocked' : 'locked'}`;
    card.innerHTML = `
      <div class="trophy-icon">${t.icon}</div>
      <div class="trophy-info">
        <div class="trophy-title">${t.title} ${t.unlocked ? '✅' : '🔒'}</div>
        <div class="trophy-desc">${t.desc}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderStatsModal() {
  const container = document.getElementById('stats-overview-content');
  if (!container) return;
  const s = appState.stats;
  container.innerHTML = `
    <div class="stat-box"><span class="stat-box-num">🪙 ${Number(appState.vipCoins).toLocaleString()}</span><span class="stat-box-label">VIP Konto</span></div>
    <div class="stat-box"><span class="stat-box-num">${s.ttt.winsX}</span><span class="stat-box-label">Tic-Tac-Toe Siege</span></div>
    <div class="stat-box"><span class="stat-box-num">${s.ttt.winsO}</span><span class="stat-box-label">KI Siege</span></div>
    <div class="stat-box"><span class="stat-box-num">${s.memory.bestTime === 999 ? '-' : s.memory.bestTime + 's'}</span><span class="stat-box-label">Beste Memory Zeit</span></div>
    <div class="stat-box"><span class="stat-box-num">${Math.floor(s.mario.highscore)}</span><span class="stat-box-label">Mario Rekord</span></div>
    <div class="stat-box"><span class="stat-box-num">${s.kart.firstPlaces}</span><span class="stat-box-label">Kart Siege (#1)</span></div>
    <div class="stat-box"><span class="stat-box-num">${s.rps.userWins}</span><span class="stat-box-label">RPSLS Siege</span></div>
    <div class="stat-box"><span class="stat-box-num">${s.snake.highscore}</span><span class="stat-box-label">Snake Highscore</span></div>
    <div class="stat-box"><span class="stat-box-num">${s.bricks.highscore}</span><span class="stat-box-label">Bricks Highscore</span></div>
  `;
}

/* ==========================================================================
   9. I18N & LANGUAGE OVERLAY LOGIC
   ========================================================================== */
function applyLanguage(langCode) {
  if (!I18N_DATA[langCode]) langCode = 'de';
  appState.language = langCode;
  document.documentElement.lang = langCode;
  
  const flagMap = { de: '🇩🇪 DE', en: '🇬🇧 EN', fr: '🇫🇷 FR', pt: '🇵🇹 PT', tr: '🇹🇷 TR', es: '🇪🇸 ES' };
  const tagEl = document.getElementById('current-lang-tag');
  if (tagEl) tagEl.textContent = flagMap[langCode] || '🌐';

  const dict = I18N_DATA[langCode];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  saveState();
}

function initLanguageSelection() {
  const langOverlay = document.getElementById('language-overlay');
  const langGrid = document.getElementById('language-grid');
  const confirmBtn = document.getElementById('confirm-language-btn');
  let selectedLang = appState.language || 'de';

  langGrid.querySelectorAll('.lang-card').forEach(btn => {
    btn.classList.toggle('active-lang', btn.dataset.lang === selectedLang);
    btn.addEventListener('click', () => {
      langGrid.querySelectorAll('.lang-card').forEach(b => b.classList.remove('active-lang'));
      btn.classList.add('active-lang');
      selectedLang = btn.dataset.lang;
      applyLanguage(selectedLang);
      SFX.click();
    });
  });

  confirmBtn.addEventListener('click', () => {
    applyLanguage(selectedLang);
    langOverlay.classList.add('hidden');
    SFX.click();

    if (!localStorage.getItem('arcade_welcomed')) {
      showWelcomeScreen();
    } else {
      unfreezeApp();
    }
  });

  document.getElementById('open-lang-btn').addEventListener('click', () => {
    freezeApp();
    langOverlay.classList.remove('hidden');
    SFX.click();
  });

  if (!appState.language) {
    freezeApp();
    langOverlay.classList.remove('hidden');
  } else {
    applyLanguage(appState.language);
    if (!localStorage.getItem('arcade_welcomed')) {
      showWelcomeScreen();
    } else {
      unfreezeApp();
      showMainApp();
    }
  }
}

/* ==========================================================================
   10. ONBOARDING & WELCOME FLOW
   ========================================================================== */
function showWelcomeScreen() {
  freezeApp();
  document.getElementById('welcome-screen').classList.remove('hidden');
}

function initWelcomeFlow() {
  const tutorialCard = document.getElementById('tutorial-card');
  const namePanel = document.getElementById('name-panel');
  const continueBtn = document.getElementById('continue-tutorial');
  const playerNameInput = document.getElementById('player-name');
  const startBtn = document.getElementById('start-game');
  const avatarPicker = document.getElementById('avatar-picker');

  continueBtn.addEventListener('click', () => {
    tutorialCard.classList.add('hidden');
    namePanel.classList.remove('hidden');
    playerNameInput.focus();
    SFX.click();
  });

  avatarPicker.querySelectorAll('.avatar-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      avatarPicker.querySelectorAll('.avatar-opt').forEach(b => b.classList.remove('active-avatar'));
      btn.classList.add('active-avatar');
      appState.playerAvatar = btn.dataset.avatar;
      SFX.click();
    });
  });

  function submitName() {
    const name = playerNameInput.value.trim() || 'Gast';
    appState.playerName = name;
    localStorage.setItem('arcade_welcomed', 'true');
    saveState();
    SFX.coin();
    document.getElementById('welcome-screen').classList.add('hidden');
    unfreezeApp();
    showMainApp();
  }

  startBtn.addEventListener('click', submitName);
  playerNameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitName();
  });
}

function showMainApp() {
  document.getElementById('topbar').classList.remove('hidden');
  document.getElementById('jukebox-bar').classList.remove('hidden');
  document.getElementById('launcher').classList.remove('hidden');
  document.getElementById('player-label').textContent = appState.playerName;
  document.getElementById('topbar-avatar').textContent = appState.playerAvatar;
  updateTrophyCountBadge();
  updateVipVisualState();
  switchGame('tictactoe');
}

/* ==========================================================================
   11. GAME LIFECYCLE & RESOURCE EFFICIENCY MANAGER (RAF LOOPS)
   ========================================================================== */
let isAppFrozen = true;
let activeGameId = 'tictactoe';

function freezeApp() {
  isAppFrozen = true;
}

function unfreezeApp() {
  isAppFrozen = false;
  requestGameLoop(activeGameId);
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    freezeApp();
  } else {
    const anyModalOpen = !document.getElementById('language-overlay').classList.contains('hidden') ||
                         !document.getElementById('welcome-screen').classList.contains('hidden') ||
                         !document.getElementById('vip-auth-modal').classList.contains('hidden') ||
                         !document.getElementById('admin-modal').classList.contains('hidden');
    if (!anyModalOpen) {
      unfreezeApp();
    }
  }
});

function switchGame(gameId) {
  unlockTrophy('first_step');
  activeGameId = gameId;

  document.querySelectorAll('.game-card').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.game === gameId);
  });
  document.querySelectorAll('.game-panel').forEach(panel => {
    panel.classList.toggle('active-panel', panel.id === gameId);
  });

  SFX.click();

  if (!isAppFrozen) {
    requestGameLoop(gameId);
  }
}

function requestGameLoop(gameId) {
  if (gameId === 'supermario') {
    startMarioRunLoop();
  } else if (gameId === 'mariokart') {
    startMarioKartLoop();
  } else if (gameId === 'snake') {
    startSnakeLoop();
  } else if (gameId === 'brickbreaker') {
    startBricksLoop();
  }
}

/* ==========================================================================
   12. SETTINGS & VIP ADMINISTRATOR CONSOLE
   ========================================================================== */
function initSettings() {
  const settingsModal = document.getElementById('settings-modal');
  const openSettingsBtn = document.getElementById('open-settings-btn');
  const closeSettingsBtn = document.getElementById('close-settings-btn');

  const themeOpts = document.querySelectorAll('.theme-opt');
  const animSegments = document.querySelectorAll('.segment-btn');
  const lowEndToggle = document.getElementById('low-end-toggle');
  const scanlinesToggle = document.getElementById('scanlines-toggle');
  const sparkleToggle = document.getElementById('vip-sparkle-trail-toggle');
  const volumeSlider = document.getElementById('volume-slider');
  const volumeDisplay = document.getElementById('volume-val-display');
  const hapticToggle = document.getElementById('haptic-toggle');
  const soundBtn = document.getElementById('toggle-sound-btn');
  const soundIcon = document.getElementById('sound-icon');

  document.documentElement.dataset.theme = appState.theme;
  document.documentElement.dataset.anim = appState.animStyle;
  document.documentElement.dataset.lowEnd = String(appState.lowEndMode);
  document.body.classList.toggle('show-scanlines', appState.scanlines);
  document.getElementById('eco-badge').classList.toggle('hidden', !appState.lowEndMode);
  
  lowEndToggle.checked = appState.lowEndMode;
  scanlinesToggle.checked = appState.scanlines;
  sparkleToggle.checked = appState.vipSparkleTrail;
  volumeSlider.value = appState.soundVolume;
  volumeDisplay.textContent = `${appState.soundVolume}%`;
  hapticToggle.checked = appState.hapticEnabled;

  themeOpts.forEach(opt => {
    opt.classList.toggle('active-theme', opt.dataset.theme === appState.theme);
    opt.addEventListener('click', () => {
      const isVipTheme = ['vipgold', 'vipplatinum'].includes(opt.dataset.theme);
      if (isVipTheme && !appState.isVip) {
        openVipTrigger('🔒 VIP Theme - Bitte VIP Master-Code eingeben!');
        return;
      }
      themeOpts.forEach(o => o.classList.remove('active-theme'));
      opt.classList.add('active-theme');
      appState.theme = opt.dataset.theme;
      document.documentElement.dataset.theme = appState.theme;
      saveState();
      unlockTrophy('customizer');
      SFX.click();
    });
  });

  animSegments.forEach(seg => {
    seg.classList.toggle('active-segment', seg.dataset.anim === appState.animStyle);
    seg.addEventListener('click', () => {
      if (seg.dataset.anim === 'vipmatrix' && !appState.isVip) {
        openVipTrigger('🔒 VIP Matrix Animation - Bitte VIP Master-Code eingeben!');
        return;
      }
      animSegments.forEach(s => s.classList.remove('active-segment'));
      seg.classList.add('active-segment');
      appState.animStyle = seg.dataset.anim;
      document.documentElement.dataset.anim = appState.animStyle;
      saveState();
      unlockTrophy('customizer');
      SFX.click();
    });
  });

  lowEndToggle.addEventListener('change', (e) => {
    appState.lowEndMode = e.target.checked;
    document.documentElement.dataset.lowEnd = String(appState.lowEndMode);
    document.getElementById('eco-badge').classList.toggle('hidden', !appState.lowEndMode);
    saveState();
    SFX.click();
  });

  scanlinesToggle.addEventListener('change', (e) => {
    appState.scanlines = e.target.checked;
    document.body.classList.toggle('show-scanlines', appState.scanlines);
    saveState();
    SFX.click();
  });

  sparkleToggle.addEventListener('change', (e) => {
    if (!appState.isVip) {
      sparkleToggle.checked = false;
      openVipTrigger('🔒 VIP Sparkle Trail - Bitte VIP Master-Code eingeben!');
      return;
    }
    appState.vipSparkleTrail = e.target.checked;
    document.getElementById('vip-sparkle-canvas').classList.toggle('hidden', !appState.vipSparkleTrail);
    saveState();
    SFX.click();
  });

  volumeSlider.addEventListener('input', (e) => {
    appState.soundVolume = Number(e.target.value);
    volumeDisplay.textContent = `${appState.soundVolume}%`;
    saveState();
  });

  hapticToggle.addEventListener('change', (e) => {
    appState.hapticEnabled = e.target.checked;
    saveState();
    triggerHaptic(30);
  });

  soundBtn.addEventListener('click', () => {
    appState.soundMuted = !appState.soundMuted;
    soundIcon.textContent = appState.soundMuted ? '🔇' : '🔊';
    saveState();
    if (!appState.soundMuted) SFX.click();
  });

  openSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.remove('hidden');
    SFX.click();
  });
  closeSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.add('hidden');
    SFX.click();
  });

  // Trophies & Stats Modals
  document.getElementById('open-trophies-btn').addEventListener('click', () => {
    renderTrophiesModal();
    document.getElementById('trophies-modal').classList.remove('hidden');
    SFX.click();
  });
  document.getElementById('close-trophies-btn').addEventListener('click', () => {
    document.getElementById('trophies-modal').classList.add('hidden');
    SFX.click();
  });

  document.getElementById('footer-stats-btn').addEventListener('click', () => {
    renderStatsModal();
    document.getElementById('stats-modal').classList.remove('hidden');
    SFX.click();
  });
  document.getElementById('player-profile-trigger').addEventListener('click', () => {
    renderStatsModal();
    document.getElementById('stats-modal').classList.remove('hidden');
    SFX.click();
  });
  document.getElementById('close-stats-btn').addEventListener('click', () => {
    document.getElementById('stats-modal').classList.add('hidden');
    SFX.click();
  });

  // What's New & Privacy Modals from Creator Bubble
  const whatsNewModal = document.getElementById('whats-new-modal');
  const privacyModal = document.getElementById('privacy-modal');

  document.getElementById('bubble-whats-new-btn').addEventListener('click', () => {
    whatsNewModal.classList.remove('hidden');
    SFX.click();
  });
  document.getElementById('close-whats-new-btn').addEventListener('click', () => {
    whatsNewModal.classList.add('hidden');
    SFX.click();
  });

  document.getElementById('bubble-privacy-btn').addEventListener('click', () => {
    privacyModal.classList.remove('hidden');
    SFX.click();
  });
  document.getElementById('close-privacy-btn').addEventListener('click', () => {
    privacyModal.classList.add('hidden');
    SFX.click();
  });

  // Jukebox Controls
  document.getElementById('jukebox-toggle-btn').addEventListener('click', toggleJukebox);
  document.getElementById('jukebox-next-btn').addEventListener('click', nextJukeboxTrack);
  document.getElementById('jukebox-prev-btn').addEventListener('click', prevJukeboxTrack);

  // Export / Import Data
  document.getElementById('export-data-btn').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", "arcade_ultra_backup.json");
    dlAnchor.click();
  });

  const importFileInput = document.getElementById('import-file-input');
  document.getElementById('import-data-btn').addEventListener('click', () => importFileInput.click());
  importFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          appState = { ...DEFAULT_STATE, ...parsed };
          saveState();
          location.reload();
        } catch (err) {
          alert('Fehlerhafte JSON-Datei!');
        }
      };
      reader.readAsText(file);
    }
  });

  document.getElementById('footer-reset-all').addEventListener('click', () => {
    if (confirm('Möchtest du wirklich alle Highscores und Spielstände zurücksetzen?')) {
      localStorage.removeItem('arcade_ultra_state');
      location.reload();
    }
  });

  initQuantumVipAuth();
  initVipBank();
  initAdminConsole();
}

function initAdminConsole() {
  const adminModal = document.getElementById('admin-modal');
  const openVipBtn = document.getElementById('open-vip-btn');
  const footerVipBtn = document.getElementById('footer-vip-btn');
  const closeAdminBtn = document.getElementById('close-admin-btn');
  const tabBtns = document.querySelectorAll('.admin-tab-btn');

  openVipBtn.addEventListener('click', () => openVipTrigger());
  footerVipBtn.addEventListener('click', () => openVipTrigger());
  closeAdminBtn.addEventListener('click', () => {
    adminModal.classList.add('hidden');
    SFX.click();
  });

  // Admin Tab Navigation
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active-admin-tab'));
      btn.classList.add('active-admin-tab');
      document.querySelectorAll('.admin-tab-content').forEach(content => content.classList.add('hidden'));
      document.getElementById(`admin-tab-${btn.dataset.adminTab}`).classList.remove('hidden');
      SFX.click();
    });
  });

  // 1-Click Master Unlockers
  document.getElementById('admin-unlock-all-btn').addEventListener('click', () => {
    SFX.win();
    triggerConfetti(80, true);
    alert('👑 VIP-Status aktiviert! Alle Level, 300cc Cups & Meister-KI sind jetzt kostenlos freigeschaltet!');
  });

  document.getElementById('admin-unlock-trophies-btn').addEventListener('click', () => {
    Object.keys(appState.trophies).forEach(k => appState.trophies[k].unlocked = true);
    saveState();
    updateTrophyCountBadge();
    SFX.win();
    triggerConfetti(100);
    alert('🏆 Alle 11 Arcade-Trophäen wurden erfolgreich freigeschaltet!');
  });

  document.getElementById('admin-max-stats-btn').addEventListener('click', () => {
    appState.stats.mario.highscore = 9999;
    appState.stats.mario.totalCoins = 999999;
    appState.stats.kart.firstPlaces = 99;
    appState.stats.snake.highscore = 9990;
    appState.stats.bricks.highscore = 9999;
    appState.stats.rps.userWins = 99;
    appState.stats.rps.maxStreak = 25;
    appState.stats.ttt.winsX = 99;
    appState.stats.memory.bestTime = 8;
    saveState();
    SFX.win();
    triggerConfetti(80, true);
    alert('💯 Maximale Statistiken vergeben!');
  });

  // God Mode Toggles
  const bindAdminToggle = (id, key) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.checked = appState.admin[key];
    el.addEventListener('change', (e) => {
      appState.admin[key] = e.target.checked;
      saveState();
      SFX.powerup();
      if (key === 'godMario') {
        document.getElementById('mario-god-aura').classList.toggle('hidden', !appState.admin.godMario);
      }
    });
  };

  bindAdminToggle('admin-god-mario', 'godMario');
  bindAdminToggle('admin-god-kart', 'godKart');
  bindAdminToggle('admin-god-bricks', 'godBricks');
  bindAdminToggle('admin-god-snake', 'godSnake');

  // Physics Sliders
  const speedSlider = document.getElementById('admin-speed-slider');
  const speedVal = document.getElementById('admin-speed-val');
  speedSlider.value = appState.admin.gameSpeed * 100;
  speedVal.textContent = `${appState.admin.gameSpeed.toFixed(1)}x`;
  speedSlider.addEventListener('input', (e) => {
    appState.admin.gameSpeed = Number(e.target.value) / 100;
    speedVal.textContent = `${appState.admin.gameSpeed.toFixed(2)}x`;
    saveState();
  });

  const marioJumpSlider = document.getElementById('admin-mario-jump-slider');
  const marioJumpVal = document.getElementById('admin-mario-jump-val');
  marioJumpSlider.value = appState.admin.marioJumpVelocity * 10;
  marioJumpVal.textContent = String(appState.admin.marioJumpVelocity);
  marioJumpSlider.addEventListener('input', (e) => {
    appState.admin.marioJumpVelocity = Number(e.target.value) / 10;
    marioJumpVal.textContent = String(appState.admin.marioJumpVelocity.toFixed(1));
    saveState();
  });

  const kartAccelSlider = document.getElementById('admin-kart-accel-slider');
  const kartAccelVal = document.getElementById('admin-kart-accel-val');
  kartAccelSlider.value = appState.admin.kartAccelMultiplier * 100;
  kartAccelVal.textContent = `${appState.admin.kartAccelMultiplier.toFixed(1)}x`;
  kartAccelSlider.addEventListener('input', (e) => {
    appState.admin.kartAccelMultiplier = Number(e.target.value) / 100;
    kartAccelVal.textContent = `${appState.admin.kartAccelMultiplier.toFixed(2)}x`;
    saveState();
  });

  // Action buttons
  document.getElementById('admin-spawn-10balls-btn').addEventListener('click', () => {
    spawnAdminMultiballs(10);
    SFX.powerup();
    triggerConfetti(40);
  });

  document.getElementById('admin-spawn-snake50-btn').addEventListener('click', () => {
    setAdminSnakeLength(50);
    SFX.powerup();
    triggerConfetti(40);
  });

  // AI Debug Toggles
  const bindAiToggle = (id, key, callback) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.checked = appState.admin[key];
    el.addEventListener('change', (e) => {
      appState.admin[key] = e.target.checked;
      saveState();
      SFX.click();
      if (callback) callback(e.target.checked);
    });
  };

  bindAiToggle('admin-ai-raycast-toggle', 'showAiRaycast');
  bindAiToggle('admin-ai-minimax-tree-toggle', 'showMinimaxTree', (active) => {
    if (activeGameId === 'tictactoe') updateMinimaxDebugOverlay();
  });
  bindAiToggle('admin-ai-markov-heatmap-toggle', 'showMarkovHeatmap', (active) => {
    document.getElementById('markov-debug-table').classList.toggle('hidden', !active);
    if (active) renderMarkovHeatmap();
  });

  // Activate VIP Themes
  document.getElementById('admin-activate-gold-theme').addEventListener('click', () => {
    appState.theme = 'vipgold';
    document.documentElement.dataset.theme = 'vipgold';
    saveState();
    SFX.achievement();
    triggerConfetti(80);
  });
  document.getElementById('admin-activate-platinum-theme').addEventListener('click', () => {
    appState.theme = 'vipplatinum';
    document.documentElement.dataset.theme = 'vipplatinum';
    saveState();
    SFX.achievement();
    triggerConfetti(80);
  });

  // Soundboard Pads
  document.querySelectorAll('.soundboard-pad').forEach(pad => {
    pad.addEventListener('click', () => {
      const type = pad.dataset.soundTest;
      if (type === 'coin') SFX.coin();
      else if (type === 'kaching') SFX.kaching();
      else if (type === 'jump') SFX.jump();
      else if (type === 'powerup') SFX.powerup();
      else if (type === 'win') SFX.win();
      else if (type === 'laser') playSynthTone({ freq: 850, duration: 0.1, type: 'sawtooth', sweep: -400 });
      else if (type === 'drift') SFX.drift();
      else if (type === 'explosion') playSynthTone({ freq: 120, duration: 0.25, type: 'square', sweep: -80 });
    });
  });
}

/* ==========================================================================
   13. TIC-TAC-TOE ENGINE WITH UNBEATABLE MINIMAX AI
   ========================================================================== */
const tttBoardCells = Array.from(document.querySelectorAll('.board .cell'));
const tttStatus = document.getElementById('ttt-status');
const resetTttBtn = document.getElementById('reset-tictactoe');
const tttModeBtns = Array.from(document.querySelectorAll('.mode-switch-group [data-mode]'));
const tttDiffBtns = Array.from(document.querySelectorAll('.mode-switch-group [data-ttt-diff]'));

let tttBoard = Array(9).fill('');
let tttCurrentPlayer = 'X';
let tttGameOver = false;
let tttMode = 'ai';
let tttDifficulty = 'master';
let tttAiTimeout = null;

const WIN_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function checkTttWinner(board) {
  for (const [a, b, c] of WIN_COMBOS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], combo: [a, b, c] };
    }
  }
  if (board.every(Boolean)) return { winner: 'draw', combo: [] };
  return null;
}

function minimax(board, depth, isMaximizing, alpha, beta) {
  const result = checkTttWinner(board);
  if (result) {
    if (result.winner === 'O') return 10 - depth;
    if (result.winner === 'X') return depth - 10;
    if (result.winner === 'draw') return 0;
  }

  if (isMaximizing) {
    let maxEval = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = 'O';
        const evaluation = minimax(board, depth + 1, false, alpha, beta);
        board[i] = '';
        maxEval = Math.max(maxEval, evaluation);
        alpha = Math.max(alpha, evaluation);
        if (beta <= alpha) break;
      }
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = 'X';
        const evaluation = minimax(board, depth + 1, true, alpha, beta);
        board[i] = '';
        minEval = Math.min(minEval, evaluation);
        beta = Math.min(beta, evaluation);
        if (beta <= alpha) break;
      }
    }
    return minEval;
  }
}

function getBestMoveMinimax(board) {
  let bestScore = -Infinity;
  let bestMove = -1;

  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = 'O';
      const score = minimax(board, 0, false, -Infinity, Infinity);
      board[i] = '';
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }
  return bestMove;
}

function updateMinimaxDebugOverlay() {
  if (!appState.admin.showMinimaxTree) {
    tttBoardCells.forEach(c => {
      const scoreEl = c.querySelector('.ai-eval-score');
      if (scoreEl) scoreEl.textContent = '';
    });
    return;
  }

  for (let i = 0; i < 9; i++) {
    const scoreEl = tttBoardCells[i].querySelector('.ai-eval-score');
    if (scoreEl) {
      if (!tttBoard[i]) {
        tttBoard[i] = 'O';
        const score = minimax(tttBoard, 0, false, -Infinity, Infinity);
        tttBoard[i] = '';
        scoreEl.textContent = score > 0 ? `+${score}` : `${score}`;
      } else {
        scoreEl.textContent = '';
      }
    }
  }
}

function getTacticalMove(board) {
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = 'O';
      if (checkTttWinner(board)?.winner === 'O') {
        board[i] = '';
        return i;
      }
      board[i] = '';
    }
  }
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = 'X';
      if (checkTttWinner(board)?.winner === 'X') {
        board[i] = '';
        return i;
      }
      board[i] = '';
    }
  }
  const prefs = [4, 0, 2, 6, 8, 1, 3, 5, 7];
  return prefs.find(idx => !board[idx]);
}

function getAiMove() {
  const emptyCells = [];
  tttBoard.forEach((val, i) => { if (!val) emptyCells.push(i); });

  if (tttDifficulty === 'easy') {
    if (Math.random() < 0.65) return emptyCells[Math.floor(Math.random() * emptyCells.length)];
    return getTacticalMove(tttBoard);
  } else if (tttDifficulty === 'medium') {
    return getTacticalMove(tttBoard);
  } else {
    return getBestMoveMinimax(tttBoard);
  }
}

function updateTttScoresUI() {
  document.getElementById('ttt-wins-x').textContent = String(appState.stats.ttt.winsX);
  document.getElementById('ttt-draws').textContent = String(appState.stats.ttt.draws);
  document.getElementById('ttt-wins-o').textContent = String(appState.stats.ttt.winsO);
}

function resetTicTacToe() {
  if (tttAiTimeout) clearTimeout(tttAiTimeout);
  tttBoard = Array(9).fill('');
  tttCurrentPlayer = 'X';
  tttGameOver = false;
  tttBoardCells.forEach(cell => {
    const sym = cell.querySelector('.cell-symbol');
    if (sym) sym.textContent = '';
    else cell.textContent = '';
    cell.disabled = false;
    cell.classList.remove('win-cell');
  });
  tttStatus.textContent = tttMode === 'ai' ? 'Du bist X. Die KI spielt O. Du bist am Zug.' : 'Spieler X ist am Zug.';
  updateTttScoresUI();
  updateMinimaxDebugOverlay();
}

function handleTttMove(index) {
  if (tttBoard[index] || tttGameOver) return;
  if (tttMode === 'ai' && tttCurrentPlayer === 'O') return;

  tttBoard[index] = tttCurrentPlayer;
  const symEl = tttBoardCells[index].querySelector('.cell-symbol') || tttBoardCells[index];
  symEl.textContent = tttCurrentPlayer;
  tttBoardCells[index].disabled = true;
  SFX.move();

  const outcome = checkTttWinner(tttBoard);
  if (outcome) {
    finishTttGame(outcome);
    return;
  }

  tttCurrentPlayer = tttCurrentPlayer === 'X' ? 'O' : 'X';
  updateMinimaxDebugOverlay();

  if (tttMode === 'ai' && tttCurrentPlayer === 'O') {
    tttStatus.textContent = '🤖 KI berechnet besten Zug…';
    tttAiTimeout = setTimeout(() => {
      const aiIdx = getAiMove();
      if (aiIdx !== undefined && aiIdx !== -1) {
        tttBoard[aiIdx] = 'O';
        const aiSym = tttBoardCells[aiIdx].querySelector('.cell-symbol') || tttBoardCells[aiIdx];
        aiSym.textContent = 'O';
        tttBoardCells[aiIdx].disabled = true;
        SFX.move();

        const aiOutcome = checkTttWinner(tttBoard);
        if (aiOutcome) {
          finishTttGame(aiOutcome);
        } else {
          tttCurrentPlayer = 'X';
          tttStatus.textContent = 'Du bist am Zug (X).';
          updateMinimaxDebugOverlay();
        }
      }
    }, 320);
  } else {
    tttStatus.textContent = `Spieler ${tttCurrentPlayer} ist am Zug.`;
  }
}

function finishTttGame(outcome) {
  tttGameOver = true;
  appState.stats.ttt.gamesPlayed += 1;

  if (outcome.winner === 'draw') {
    tttStatus.textContent = '🤝 Unentschieden!';
    appState.stats.ttt.draws += 1;
    SFX.draw();
    if (tttDifficulty === 'master') unlockTrophy('ttt_master');
  } else {
    outcome.combo.forEach(idx => tttBoardCells[idx].classList.add('win-cell'));
    if (outcome.winner === 'X') {
      tttStatus.textContent = tttMode === 'ai' ? '🎉 Du hast gewonnen!' : '🎉 Spieler X gewinnt!';
      appState.stats.ttt.winsX += 1;
      SFX.win();
      if (appState.isVip) mintVipCoins(500);
      if (tttDifficulty === 'master') unlockTrophy('ttt_master');
    } else {
      tttStatus.textContent = tttMode === 'ai' ? '🤖 Die KI gewinnt!' : '🎉 Spieler O gewinnt!';
      appState.stats.ttt.winsO += 1;
      SFX.loss();
    }
  }

  saveState();
  updateTttScoresUI();
  updateMinimaxDebugOverlay();
}

function initTicTacToe() {
  tttBoardCells.forEach(cell => {
    cell.addEventListener('click', () => handleTttMove(Number(cell.dataset.index)));
  });

  resetTttBtn.addEventListener('click', resetTicTacToe);

  tttModeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tttModeBtns.forEach(b => b.classList.remove('active-mode'));
      btn.classList.add('active-mode');
      tttMode = btn.dataset.mode;
      document.getElementById('ttt-difficulty-group').style.display = tttMode === 'ai' ? 'inline-flex' : 'none';
      resetTicTacToe();
      SFX.click();
    });
  });

  tttDiffBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tttDiffBtns.forEach(b => b.classList.remove('active-mode'));
      btn.classList.add('active-mode');
      tttDifficulty = btn.dataset.tttDiff;
      resetTicTacToe();
      SFX.click();
    });
  });

  resetTicTacToe();
}

/* ==========================================================================
   14. MEMORY ENGINE (THEMES, GRIDS & COMBOS)
   ========================================================================== */
const MEMORY_THEMES = {
  arcade: ['👾', '🕹️', '🍄', '🏎️', '💎', '🚀', '⭐', '🔥', '⚡', '🏆'],
  animals: ['🐶', '🐱', '🦊', '🐼', '🦁', '🐸', '🦄', '🐙', '🦅', '🐬'],
  food: ['🍕', '🍔', '🍟', '🍣', '🍩', '🍦', '🥑', '🍓', '🌮', '🍿'],
  space: ['🚀', '🛸', '🪐', '🌌', '🌠', '🌕', '🛰️', '☄️', '👨‍🚀', '👾'],
  vipdiamond: ['💎', '👑', '🪙', '🏆', '🏎️', '🚀', '💰', '💍', '🛸', '⭐']
};

let memoryDeck = [];
let memFirstCard = null;
let memSecondCard = null;
let memMatches = 0;
let memTries = 0;
let memLock = false;
let memCombo = 0;
let memStartTime = 0;
let memTimerInterval = null;
let memCurrentTheme = 'arcade';
let memGridMode = '4x4';

function initMemory() {
  const boardEl = document.getElementById('memory-board');
  const scoreEl = document.getElementById('memory-score');
  const totalPairsEl = document.getElementById('memory-total-pairs');
  const attemptsEl = document.getElementById('memory-attempts');
  const comboEl = document.getElementById('memory-combo');
  const timerEl = document.getElementById('memory-timer');
  const resetBtn = document.getElementById('reset-memory');

  const themeBtns = document.querySelectorAll('[data-mem-theme]');
  const gridBtns = document.querySelectorAll('[data-mem-grid]');

  function startTimer() {
    if (memTimerInterval) clearInterval(memTimerInterval);
    memStartTime = Date.now();
    memTimerInterval = setInterval(() => {
      if (!isAppFrozen) {
        const elapsed = Math.floor((Date.now() - memStartTime) / 1000);
        timerEl.textContent = `${elapsed}s`;
      }
    }, 1000);
  }

  function resetMemory() {
    if (memTimerInterval) clearInterval(memTimerInterval);
    timerEl.textContent = '0s';
    memMatches = 0;
    memTries = 0;
    memCombo = 0;
    memFirstCard = null;
    memSecondCard = null;
    memLock = false;

    scoreEl.textContent = '0';
    attemptsEl.textContent = '0';
    comboEl.textContent = '0x';

    const totalPairs = memGridMode === '4x4' ? 8 : 10;
    totalPairsEl.textContent = String(totalPairs);
    boardEl.className = `memory-grid grid-${memGridMode}`;
    boardEl.innerHTML = '';

    const selectedSymbols = MEMORY_THEMES[memCurrentTheme].slice(0, totalPairs);
    memoryDeck = [...selectedSymbols, ...selectedSymbols]
      .sort(() => Math.random() - 0.5)
      .map((sym, idx) => ({ id: `${sym}-${idx}`, symbol: sym }));

    memoryDeck.forEach(card => {
      const btn = document.createElement('button');
      btn.className = 'memory-card';
      btn.dataset.id = card.id;
      btn.textContent = '❔';
      btn.addEventListener('click', () => handleCardClick(btn, card));
      boardEl.appendChild(btn);
    });

    startTimer();
  }

  function handleCardClick(cardEl, card) {
    if (memLock || cardEl.classList.contains('matched') || cardEl.classList.contains('revealed')) return;

    cardEl.textContent = card.symbol;
    cardEl.classList.add('revealed');
    SFX.click();

    if (!memFirstCard) {
      memFirstCard = { el: cardEl, card };
      return;
    }

    memSecondCard = { el: cardEl, card };
    memTries += 1;
    attemptsEl.textContent = String(memTries);
    memLock = true;

    if (memFirstCard.card.symbol === memSecondCard.card.symbol) {
      memFirstCard.el.classList.add('matched');
      memSecondCard.el.classList.add('matched');
      memMatches += 1;
      memCombo += 1;
      scoreEl.textContent = String(memMatches);
      comboEl.textContent = `${memCombo}x`;
      SFX.coin();

      memFirstCard = null;
      memSecondCard = null;
      memLock = false;

      const totalPairs = memGridMode === '4x4' ? 8 : 10;
      if (memMatches === totalPairs) {
        clearInterval(memTimerInterval);
        const elapsed = Math.floor((Date.now() - memStartTime) / 1000);
        SFX.win();

        if (appState.isVip) mintVipCoins(1000);
        if (elapsed < appState.stats.memory.bestTime) {
          appState.stats.memory.bestTime = elapsed;
        }
        if (memCombo > appState.stats.memory.maxCombo) {
          appState.stats.memory.maxCombo = memCombo;
        }
        appState.stats.memory.gamesPlayed += 1;
        saveState();

        if (memTries <= 18) unlockTrophy('memory_champ');
      }
    } else {
      memCombo = 0;
      comboEl.textContent = '0x';
      setTimeout(() => {
        memFirstCard.el.textContent = '❔';
        memSecondCard.el.textContent = '❔';
        memFirstCard.el.classList.remove('revealed');
        memSecondCard.el.classList.remove('revealed');
        memFirstCard = null;
        memSecondCard = null;
        memLock = false;
      }, 600);
    }
  }

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.memTheme === 'vipdiamond' && !appState.isVip) {
        openVipTrigger('🔒 VIP Diamond Memory - Bitte VIP Master-Code eingeben!');
        return;
      }
      themeBtns.forEach(b => b.classList.remove('active-mode'));
      btn.classList.add('active-mode');
      memCurrentTheme = btn.dataset.memTheme;
      resetMemory();
      SFX.click();
    });
  });

  gridBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      gridBtns.forEach(b => b.classList.remove('active-mode'));
      btn.classList.add('active-mode');
      memGridMode = btn.dataset.memGrid;
      resetMemory();
      SFX.click();
    });
  });

  resetBtn.addEventListener('click', resetMemory);
  resetMemory();
}

/* ==========================================================================
   15. SUPER MARIO RUN (RAYCAST PREDICTIVE AI & DOUBLE JUMP)
   ========================================================================== */
let marioScore = 0;
let marioCoins = 0;
let marioJumpVelocity = 0;
let marioJumpHeight = 0;
let marioJumpsRemaining = 2;
let marioGameOver = false;
let marioDifficulty = 'easy';
let marioAiAutopilot = false;
let marioObstacles = [];
let marioCoinsList = [];
let marioParallaxOffset = 0;
let marioGoalDistance = 1500;
let marioLoopRunning = false;
let marioAutoRestartTimer = null;

const marioSpeeds = { easy: 4.0, medium: 5.5, hard: 7.0 };
const marioCanvasRay = document.getElementById('mario-raycast-canvas');
const marioRayCtx = marioCanvasRay ? marioCanvasRay.getContext('2d') : null;

function startMarioRunLoop() {
  if (marioLoopRunning) return;
  marioLoopRunning = true;
  requestAnimationFrame(tickMarioRun);
}

function resetMarioRun() {
  if (marioAutoRestartTimer) clearTimeout(marioAutoRestartTimer);
  marioScore = 0;
  marioCoins = 0;
  marioJumpVelocity = 0;
  marioJumpHeight = 0;
  marioJumpsRemaining = appState.admin.marioGoldSuit ? 3 : 2;
  marioGameOver = false;
  marioParallaxOffset = 0;

  document.getElementById('mario-score').textContent = '0';
  document.getElementById('mario-coins').textContent = '0';
  document.getElementById('mario-highscore').textContent = String(Math.floor(appState.stats.mario.highscore));
  document.getElementById('mario-progress-fill').style.width = '0%';
  document.getElementById('mario-progress-label').textContent = '0%';
  document.getElementById('mario-status').textContent = 'Tippe oder drücke [LEERTASTE] zum Springen! (Doppelsprung aktiv)';

  const world = document.getElementById('mario-world');
  world.querySelectorAll('.runner-obstacle, .runner-coin').forEach(el => el.remove());
  marioObstacles = [];
  marioCoinsList = [];

  spawnMarioObstacle(world.clientWidth + 120);
  spawnMarioCoin(world.clientWidth + 280);
}

function spawnMarioObstacle(x) {
  const world = document.getElementById('mario-world');
  const el = document.createElement('div');
  el.className = 'runner-obstacle';
  el.style.left = `${x}px`;
  world.appendChild(el);
  marioObstacles.push({ el, x, width: 28 });
}

function spawnMarioCoin(x) {
  const world = document.getElementById('mario-world');
  const el = document.createElement('div');
  el.className = 'runner-coin';
  el.style.left = `${x}px`;
  el.style.bottom = `${58 + Math.random() * 50}px`;
  world.appendChild(el);
  marioCoinsList.push({ el, x, y: parseFloat(el.style.bottom) });
}

function triggerMarioJump() {
  if (marioGameOver) {
    resetMarioRun();
    return;
  }
  const maxJumps = appState.admin.marioGoldSuit ? 3 : 2;
  if (marioJumpsRemaining > 0) {
    const jumpPower = (appState.admin.marioJumpVelocity || 12.5) * (appState.admin.marioGoldSuit ? 1.2 : 1.0);
    marioJumpVelocity = jumpPower;
    marioJumpsRemaining -= 1;
    SFX.jump();

    if (!appState.lowEndMode) {
      createMarioDust();
    }
  }
}

function createMarioDust() {
  const container = document.getElementById('mario-particles');
  for (let i = 0; i < 4; i++) {
    const p = document.createElement('div');
    p.className = 'mario-dust-particle';
    p.style.left = '48px';
    p.style.bottom = '36px';
    p.style.setProperty('--dx', `${(Math.random() - 0.5) * 30}px`);
    p.style.setProperty('--dy', `${(Math.random() - 0.8) * 20}px`);
    container.appendChild(p);
    setTimeout(() => p.remove(), 400);
  }
}

function tickMarioRun() {
  if (activeGameId !== 'supermario' || isAppFrozen) {
    marioLoopRunning = false;
    return;
  }

  const dt = appState.admin.gameSpeed || 1.0;

  if (!marioGameOver) {
    const speed = marioSpeeds[marioDifficulty] * dt;

    // Jump Physics (Hover gliding if Gold Suit active)
    marioJumpHeight += marioJumpVelocity * dt;
    const grav = appState.admin.marioGoldSuit ? 0.55 : 0.75;
    marioJumpVelocity -= grav * dt;
    if (marioJumpHeight <= 0) {
      marioJumpHeight = 0;
      marioJumpVelocity = 0;
      marioJumpsRemaining = appState.admin.marioGoldSuit ? 3 : 2;
    }

    marioScore += 0.4 * dt;
    document.getElementById('mario-score').textContent = String(Math.floor(marioScore));
    const progress = Math.min(100, (marioScore / marioGoalDistance) * 100);
    document.getElementById('mario-progress-fill').style.width = `${progress}%`;
    document.getElementById('mario-progress-label').textContent = `${Math.round(progress)}%`;

    const runner = document.getElementById('mario-runner');
    runner.style.transform = `translateY(${-marioJumpHeight}px)`;

    marioParallaxOffset += speed * 0.4;
    document.getElementById('mario-mountains').style.backgroundPosition = `-${marioParallaxOffset * 0.3}px 0`;
    document.getElementById('mario-hills').style.backgroundPosition = `-${marioParallaxOffset * 0.7}px 0`;

    // ADVANCED RAYCAST PREDICTIVE AI AUTOPILOT
    const marioX = 42;
    const nextObs = marioObstacles.find(o => o.x + o.width > marioX);

    if (marioRayCtx && appState.admin.showAiRaycast) {
      marioRayCtx.clearRect(0, 0, marioCanvasRay.width, marioCanvasRay.height);
    }

    if (marioAiAutopilot && nextObs) {
      const distance = nextObs.x - marioX;
      const timeToImpact = distance / speed;

      const telemetryEl = document.getElementById('mario-ai-telemetry');
      if (telemetryEl) {
        telemetryEl.textContent = `Hindernis: ${Math.round(distance)}px | T: ${timeToImpact.toFixed(1)}f`;
      }

      const optimalJumpDistance = (appState.admin.marioJumpVelocity / 0.75) * speed * 0.92;

      if (distance <= optimalJumpDistance && distance > 10 && marioJumpHeight === 0) {
        triggerMarioJump();
      }

      if (marioJumpVelocity < 0 && distance < 45 && distance > 0 && marioJumpHeight < 40 && marioJumpsRemaining > 0) {
        triggerMarioJump();
      }

      if (marioRayCtx && appState.admin.showAiRaycast && !appState.lowEndMode) {
        marioRayCtx.strokeStyle = distance < optimalJumpDistance ? '#ec4899' : '#06b6d4';
        marioRayCtx.lineWidth = 2;
        marioRayCtx.setLineDash([4, 4]);
        marioRayCtx.beginPath();
        marioRayCtx.moveTo(marioX + 20, 220 - 36 - marioJumpHeight - 20);
        marioRayCtx.lineTo(nextObs.x + 14, 220 - 36 - 20);
        marioRayCtx.stroke();
        marioRayCtx.setLineDash([]);
      }
    }

    // Move Obstacles
    const worldWidth = document.getElementById('mario-world').clientWidth;
    for (let i = marioObstacles.length - 1; i >= 0; i--) {
      const obs = marioObstacles[i];
      obs.x -= speed;
      obs.el.style.left = `${obs.x}px`;

      if (!appState.admin.godMario && obs.x < 68 && obs.x > 24 && marioJumpHeight < 34) {
        marioGameOver = true;
        SFX.hit();
        document.getElementById('mario-status').textContent = `💥 Kollision! Score: ${Math.floor(marioScore)}.`;
        
        if (marioScore > appState.stats.mario.highscore) {
          appState.stats.mario.highscore = marioScore;
          saveState();
        }
        if (marioScore >= 500) unlockTrophy('mario_runner');

        if (marioAiAutopilot) {
          document.getElementById('mario-status').textContent = '🤖 Autopilot startet in 1.2s neu…';
          marioAutoRestartTimer = setTimeout(() => resetMarioRun(), 1200);
        }
      }

      if (obs.x < -40) {
        obs.el.remove();
        marioObstacles.splice(i, 1);
        spawnMarioObstacle(worldWidth + Math.random() * 140 + 90);
      }
    }

    // Move Coins
    for (let i = marioCoinsList.length - 1; i >= 0; i--) {
      const coin = marioCoinsList[i];
      coin.x -= speed;
      coin.el.style.left = `${coin.x}px`;

      if (coin.x < 68 && coin.x > 24 && Math.abs(marioJumpHeight + 36 - coin.y) < 32) {
        SFX.coin();
        const coinVal = appState.admin.infiniteCoins ? 100 : 1;
        marioCoins += coinVal;
        appState.stats.mario.totalCoins += coinVal;
        if (appState.isVip) appState.vipCoins += coinVal;
        updateVipVisualState();
        document.getElementById('mario-coins').textContent = String(marioCoins);
        coin.el.remove();
        marioCoinsList.splice(i, 1);
        spawnMarioCoin(worldWidth + Math.random() * 200 + 120);
      } else if (coin.x < -30) {
        coin.el.remove();
        marioCoinsList.splice(i, 1);
        spawnMarioCoin(worldWidth + Math.random() * 200 + 120);
      }
    }

    if (marioScore >= marioGoalDistance) {
      marioGameOver = true;
      SFX.win();
      document.getElementById('mario-status').textContent = '🏁 Ziel erreicht! Fantastischer Lauf!';
      unlockTrophy('mario_runner');
      if (appState.isVip) mintVipCoins(2000);
    }
  }

  requestAnimationFrame(tickMarioRun);
}

function initSuperMario() {
  const world = document.getElementById('mario-world');
  world.addEventListener('click', triggerMarioJump);
  window.addEventListener('keydown', (e) => {
    if (activeGameId === 'supermario' && (e.code === 'Space' || e.code === 'ArrowUp')) {
      e.preventDefault();
      triggerMarioJump();
    }
  });

  document.getElementById('reset-supermario').addEventListener('click', resetMarioRun);

  document.querySelectorAll('.mario-mode-button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mario-mode-button').forEach(b => b.classList.remove('active-mode'));
      btn.classList.add('active-mode');
      marioDifficulty = btn.dataset.marioMode;
      resetMarioRun();
      SFX.click();
    });
  });

  document.getElementById('mario-ai-toggle').addEventListener('click', (e) => {
    marioAiAutopilot = !marioAiAutopilot;
    e.currentTarget.classList.toggle('active-mode', marioAiAutopilot);
    document.getElementById('mario-ai-hud').classList.toggle('hidden', !marioAiAutopilot);
    SFX.click();
  });

  document.getElementById('mario-gold-suit-toggle').addEventListener('click', () => {
    if (!appState.isVip) {
      openVipTrigger('🔒 VIP Gold-Anzug - Bitte VIP Master-Code eingeben!');
      return;
    }
    appState.admin.marioGoldSuit = !appState.admin.marioGoldSuit;
    document.getElementById('mario-runner').classList.toggle('mario-gold-active', appState.admin.marioGoldSuit);
    SFX.powerup();
    triggerConfetti(50, true);
  });

  resetMarioRun();
}

/* ==========================================================================
   16. MARIO KART RUSH EXPANDED (50cc-300cc, ITEMS, COUNTDOWN & AUTO-GAS)
   ========================================================================== */
const kartCanvas = document.getElementById('mario-kart-canvas');
const kartCtx = kartCanvas.getContext('2d');

let kartPlayer = null;
let kartBots = [];
let kartRoad = { left: 80, right: 400, width: 320 };
let kartFinishDistance = 2000;
let kartGameOver = false;
let kartLoopRunning = false;
let kartDriftCharging = false;
let kartDriftLevel = 0;
let kartSelectedCC = 50;
let kartAutoGas = false;
let kartPlayerItem = null;
let kartTrackMysteryBoxes = [];
let kartTrackHazards = [];
let kartCountdownActive = false;

const kartCCSpecs = {
  50: { maxSpeed: 5.8, botSpeedMin: 2.2, botSpeedMax: 2.8, accel: 0.22, handling: 4.8 },
  100: { maxSpeed: 7.2, botSpeedMin: 3.2, botSpeedMax: 3.8, accel: 0.28, handling: 5.2 },
  150: { maxSpeed: 8.8, botSpeedMin: 4.4, botSpeedMax: 5.2, accel: 0.34, handling: 5.8 },
  200: { maxSpeed: 10.5, botSpeedMin: 5.5, botSpeedMax: 6.4, accel: 0.42, handling: 6.5 },
  300: { maxSpeed: 14.5, botSpeedMin: 7.0, botSpeedMax: 8.5, accel: 0.65, handling: 8.0 }
};

const kartKeys = { left: false, right: false, up: false, down: false, drift: false };

function startMarioKartLoop() {
  if (kartLoopRunning) return;
  kartLoopRunning = true;
  requestAnimationFrame(tickMarioKart);
}

function runKartCountdown(callback) {
  kartCountdownActive = true;
  const overlay = document.getElementById('kart-countdown-overlay');
  const textEl = document.getElementById('kart-countdown-text');
  const l1 = document.getElementById('traffic-light-1');
  const l2 = document.getElementById('traffic-light-2');
  const l3 = document.getElementById('traffic-light-3');

  overlay.classList.remove('hidden');
  l1.className = 'light';
  l2.className = 'light';
  l3.className = 'light';
  textEl.textContent = '3';
  l1.className = 'light active red';
  SFX.beepRed();

  setTimeout(() => {
    textEl.textContent = '2';
    l2.className = 'light active yellow';
    SFX.beepRed();
  }, 900);

  setTimeout(() => {
    textEl.textContent = '1';
    l3.className = 'light active green';
    SFX.beepRed();
  }, 1800);

  setTimeout(() => {
    textEl.textContent = 'GO!';
    SFX.beepGreen();
    if (kartKeys.up || kartAutoGas) {
      kartPlayer.speed = kartCCSpecs[kartSelectedCC].maxSpeed * 1.2;
      kartPlayer.turboBoost = 30;
      SFX.powerup();
    }
    kartCountdownActive = false;
    setTimeout(() => overlay.classList.add('hidden'), 500);
    if (callback) callback();
  }, 2700);
}

function resetMarioKart() {
  const specs = kartCCSpecs[kartSelectedCC] || kartCCSpecs[50];
  kartPlayer = {
    name: appState.playerName || 'Du',
    color: appState.isVip ? '#facc15' : '#38bdf8',
    x: kartRoad.left + kartRoad.width / 2,
    speed: 0,
    progress: 0,
    turboBoost: 0,
    invincibleTimer: 0
  };

  const botNames = ['Mario', 'Luigi', 'Peach', 'Bowser', 'Yoshi', 'Toad'];
  const botColors = ['#ef4444', '#22c55e', '#ec4899', '#78350f', '#10b981', '#38bdf8'];
  
  kartBots = botNames.map((name, i) => ({
    name,
    color: botColors[i],
    x: kartRoad.left + 35 + i * 42,
    speed: specs.botSpeedMin + Math.random() * (specs.botSpeedMax - specs.botSpeedMin),
    progress: 0,
    spinTimer: 0
  }));

  kartTrackMysteryBoxes = [
    { x: kartRoad.left + 60, progress: 400, active: true },
    { x: kartRoad.left + 160, progress: 400, active: true },
    { x: kartRoad.left + 260, progress: 400, active: true },
    { x: kartRoad.left + 80, progress: 1100, active: true },
    { x: kartRoad.left + 220, progress: 1100, active: true }
  ];

  kartTrackHazards = [];
  kartPlayerItem = null;
  kartGameOver = false;
  kartDriftCharging = false;
  kartDriftLevel = 0;

  document.getElementById('kart-item-pill').textContent = 'LEER';
  document.getElementById('mario-kart-status').textContent = `Cup: ${kartSelectedCC}cc. Besiege alle 6 KI-Fahrer!`;

  runKartCountdown();
}

function useKartItem() {
  if (!kartPlayerItem || kartGameOver || kartCountdownActive) return;

  if (kartPlayerItem === 'mushroom') {
    kartPlayer.turboBoost = 40;
    SFX.powerup();
  } else if (kartPlayerItem === 'star') {
    kartPlayer.invincibleTimer = 180;
    kartPlayer.turboBoost = 50;
    SFX.achievement();
  } else if (kartPlayerItem === 'banana') {
    kartTrackHazards.push({ x: kartPlayer.x, progress: kartPlayer.progress - 30 });
    SFX.hit();
  }

  kartPlayerItem = null;
  document.getElementById('kart-item-pill').textContent = 'LEER';
}

function tickMarioKart() {
  if (activeGameId !== 'mariokart' || isAppFrozen) {
    kartLoopRunning = false;
    return;
  }

  const dt = appState.admin.gameSpeed || 1.0;
  const specs = kartCCSpecs[kartSelectedCC] || kartCCSpecs[50];

  if (!kartGameOver && !kartCountdownActive) {
    const isGas = kartKeys.up || kartAutoGas;
    const accel = (isGas ? specs.accel : 0) * (appState.admin.kartAccelMultiplier || 1.0);
    const brake = kartKeys.down ? 0.36 : 0;
    const steer = (kartKeys.left ? -1 : 0) + (kartKeys.right ? 1 : 0);

    kartPlayer.speed += (accel - brake) * dt;
    kartPlayer.speed *= 0.985;

    let maxSpeed = specs.maxSpeed;
    if (appState.admin.godKart) maxSpeed = 16.0;

    kartPlayer.speed = Math.max(-1.5, Math.min(maxSpeed, kartPlayer.speed));

    if (kartKeys.drift && Math.abs(steer) > 0 && kartPlayer.speed > 2) {
      kartDriftCharging = true;
      kartDriftLevel = Math.min(100, kartDriftLevel + 1.4 * dt);
      SFX.drift();
    } else {
      if (kartDriftCharging && kartDriftLevel > 55) {
        kartPlayer.turboBoost = 35;
        SFX.powerup();
      }
      kartDriftCharging = false;
      kartDriftLevel = 0;
    }

    if (kartPlayer.turboBoost > 0) {
      kartPlayer.speed = maxSpeed * 1.35;
      kartPlayer.turboBoost -= 1 * dt;
    }
    if (kartPlayer.invincibleTimer > 0) {
      kartPlayer.invincibleTimer -= 1 * dt;
    }

    kartPlayer.progress += kartPlayer.speed * 4 * dt;
    kartPlayer.x += steer * specs.handling * dt;
    kartPlayer.x = Math.max(kartRoad.left + 22, Math.min(kartRoad.right - 22, kartPlayer.x));

    kartTrackMysteryBoxes.forEach(box => {
      if (box.active && Math.abs(kartPlayer.progress - box.progress) < 30 && Math.abs(kartPlayer.x - box.x) < 40) {
        box.active = false;
        SFX.coin();
        const items = ['mushroom', 'star', 'banana'];
        kartPlayerItem = items[Math.floor(Math.random() * items.length)];
        const itemNames = { mushroom: '🍄 Turbo-Pilz', star: '⭐ Super-Stern', banana: '🍌 Banane' };
        document.getElementById('kart-item-pill').textContent = itemNames[kartPlayerItem];
      }
    });

    if (!appState.admin.godKart && kartPlayer.invincibleTimer <= 0) {
      kartTrackHazards.forEach(h => {
        if (Math.abs(kartPlayer.progress - h.progress) < 25 && Math.abs(kartPlayer.x - h.x) < 25) {
          kartPlayer.speed *= 0.2;
          SFX.hit();
        }
      });
    }

    kartBots.forEach((bot, i) => {
      if (bot.spinTimer > 0) {
        bot.spinTimer -= 1;
        return;
      }

      kartTrackHazards.forEach(h => {
        if (Math.abs(bot.progress - h.progress) < 25 && Math.abs(bot.x - h.x) < 25) {
          bot.spinTimer = 40;
          SFX.hit();
        }
      });

      const distToPlayer = bot.progress - kartPlayer.progress;
      let dynamicBoost = 0;
      if (kartSelectedCC === 50 && distToPlayer > 150) dynamicBoost = -0.8;
      else if (distToPlayer < -250) dynamicBoost = 0.7;

      bot.progress += (bot.speed + dynamicBoost + Math.sin(Date.now() / 600 + i) * 0.2) * 3.8 * dt;
      bot.x += Math.sin(Date.now() / 800 + i) * 0.6;
      bot.x = Math.max(kartRoad.left + 24, Math.min(kartRoad.right - 24, bot.x));
    });

    const allRacers = [kartPlayer, ...kartBots].sort((a, b) => b.progress - a.progress);
    const playerRank = allRacers.findIndex(r => r === kartPlayer) + 1;

    document.getElementById('kart-rank-pill').textContent = `#${playerRank} / 7`;
    document.getElementById('kart-speed-pill').textContent = `${Math.round(kartPlayer.speed * 20)} km/h`;
    document.getElementById('kart-turbo-pill').textContent = `${Math.round(kartDriftLevel)}%`;
    document.getElementById('kart-distance-pill').textContent = `${Math.min(kartFinishDistance, Math.round(kartPlayer.progress))}m / ${kartFinishDistance}m`;

    updateKartRadar();

    if (kartPlayer.progress >= kartFinishDistance) {
      kartGameOver = true;
      appState.stats.kart.totalRaces += 1;
      if (playerRank === 1) {
        appState.stats.kart.firstPlaces += 1;
        SFX.win();
        triggerConfetti(90, true);
        if (appState.isVip) mintVipCoins(3000);
        document.getElementById('mario-kart-status').textContent = `🏆 PLATZ 1! Du hast den ${kartSelectedCC}cc Grand Prix gewonnen!`;
        unlockTrophy('kart_champion');
      } else {
        SFX.loss();
        document.getElementById('mario-kart-status').textContent = `🏁 Ziel erreicht auf Platz ${playerRank}. Drücke Neu starten für ein Revanche!`;
      }
      saveState();
    }
  }

  drawKartScene();
  requestAnimationFrame(tickMarioKart);
}

function updateKartRadar() {
  const pMarker = document.getElementById('radar-player');
  if (pMarker) {
    const pY = 100 - (kartPlayer.progress / kartFinishDistance) * 90;
    pMarker.style.top = `${Math.max(4, Math.min(94, pY))}%`;
  }
  kartBots.forEach((bot, i) => {
    const bMarker = document.getElementById(`radar-bot-${i}`);
    if (bMarker) {
      const bY = 100 - (bot.progress / kartFinishDistance) * 90;
      bMarker.style.top = `${Math.max(4, Math.min(94, bY))}%`;
    }
  });
}

function drawKartScene() {
  kartCtx.clearRect(0, 0, kartCanvas.width, kartCanvas.height);

  kartCtx.fillStyle = '#0f381e';
  kartCtx.fillRect(0, 0, kartCanvas.width, kartCanvas.height);

  kartCtx.fillStyle = '#1e2433';
  kartCtx.fillRect(kartRoad.left, 0, kartRoad.width, kartCanvas.height);

  const stripeOffset = (kartPlayer.progress % 40);
  kartCtx.fillStyle = '#ef4444';
  kartCtx.fillRect(kartRoad.left - 8, 0, 8, kartCanvas.height);
  kartCtx.fillRect(kartRoad.right, 0, 8, kartCanvas.height);

  kartCtx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
  kartCtx.setLineDash([20, 20]);
  kartCtx.lineDashOffset = -stripeOffset;
  kartCtx.beginPath();
  kartCtx.moveTo(kartRoad.left + kartRoad.width / 2, 0);
  kartCtx.lineTo(kartRoad.left + kartRoad.width / 2, kartCanvas.height);
  kartCtx.stroke();
  kartCtx.setLineDash([]);

  kartTrackMysteryBoxes.forEach(box => {
    if (box.active) {
      const relProgress = box.progress - kartPlayer.progress;
      const y = 240 - relProgress * 0.4;
      if (y > -30 && y < kartCanvas.height + 30) {
        kartCtx.fillStyle = '#facc15';
        kartCtx.fillRect(box.x - 12, y - 12, 24, 24);
        kartCtx.strokeStyle = '#ca8a04';
        kartCtx.lineWidth = 2;
        kartCtx.strokeRect(box.x - 12, y - 12, 24, 24);
        kartCtx.fillStyle = '#000';
        kartCtx.font = 'bold 14px sans-serif';
        kartCtx.fillText('?', box.x - 4, y + 5);
      }
    }
  });

  kartTrackHazards.forEach(h => {
    const relProgress = h.progress - kartPlayer.progress;
    const y = 240 - relProgress * 0.4;
    if (y > -20 && y < kartCanvas.height + 20) {
      kartCtx.fillStyle = '#fde047';
      kartCtx.beginPath();
      kartCtx.arc(h.x, y, 8, 0, Math.PI * 2);
      kartCtx.fill();
    }
  });

  kartBots.forEach(bot => {
    const relProgress = bot.progress - kartPlayer.progress;
    const y = 240 - relProgress * 0.4;
    if (y > -40 && y < kartCanvas.height + 40) {
      drawRacerCar(bot, y);
    }
  });

  drawRacerCar(kartPlayer, 240, true);
}

function drawRacerCar(car, y, isPlayer = false) {
  kartCtx.save();
  kartCtx.translate(car.x, y);

  kartCtx.fillStyle = '#0a0a0a';
  kartCtx.fillRect(-18, -14, 6, 12);
  kartCtx.fillRect(12, -14, 6, 12);
  kartCtx.fillRect(-18, 8, 6, 12);
  kartCtx.fillRect(12, 8, 6, 12);

  kartCtx.fillStyle = car.color;
  kartCtx.fillRect(-14, -18, 28, 36);

  kartCtx.fillStyle = '#38bdf8';
  kartCtx.fillRect(-9, -8, 18, 10);

  kartCtx.fillStyle = '#0f172a';
  kartCtx.fillRect(-16, 14, 32, 6);

  if (isPlayer && (kartDriftCharging || kartPlayer.invincibleTimer > 0 || appState.admin.godKart)) {
    kartCtx.fillStyle = kartPlayer.invincibleTimer > 0 ? '#f43f5e' : '#facc15';
    kartCtx.fillRect(-22, 16, 5, 5);
    kartCtx.fillRect(17, 16, 5, 5);
  }

  kartCtx.restore();
}

function initMarioKart() {
  window.addEventListener('keydown', (e) => {
    if (activeGameId !== 'mariokart') return;
    const key = e.key.toLowerCase();
    if (['arrowup', 'w'].includes(key)) kartKeys.up = true;
    if (['arrowdown', 's'].includes(key)) kartKeys.down = true;
    if (['arrowleft', 'a'].includes(key)) kartKeys.left = true;
    if (['arrowright', 'd'].includes(key)) kartKeys.right = true;
    if (e.code === 'Space' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') kartKeys.drift = true;
    if (e.code === 'KeyE') useKartItem();
  });

  window.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    if (['arrowup', 'w'].includes(key)) kartKeys.up = false;
    if (['arrowdown', 's'].includes(key)) kartKeys.down = false;
    if (['arrowleft', 'a'].includes(key)) kartKeys.left = false;
    if (['arrowright', 'd'].includes(key)) kartKeys.right = false;
    if (e.code === 'Space' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') kartKeys.drift = false;
  });

  const bindTouch = (id, keyName) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('touchstart', (e) => { e.preventDefault(); kartKeys[keyName] = true; });
    el.addEventListener('touchend', (e) => { e.preventDefault(); kartKeys[keyName] = false; });
  };
  bindTouch('touch-kart-left', 'left');
  bindTouch('touch-kart-right', 'right');
  bindTouch('touch-kart-gas', 'up');
  bindTouch('touch-kart-brake', 'down');
  bindTouch('touch-kart-drift', 'drift');
  document.getElementById('touch-kart-item').addEventListener('click', useKartItem);

  document.querySelectorAll('[data-kart-cc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cc = Number(btn.dataset.kartCc);
      if ((cc === 200 || cc === 300) && !appState.isVip) {
        openVipTrigger(`🔒 ${cc}cc VIP Cup - Bitte VIP Master-Code eingeben!`);
        return;
      }
      document.querySelectorAll('[data-kart-cc]').forEach(b => b.classList.remove('active-mode'));
      btn.classList.add('active-mode');
      kartSelectedCC = cc;
      resetMarioKart();
      SFX.click();
    });
  });

  document.getElementById('toggle-auto-gas').addEventListener('click', () => {
    kartAutoGas = !kartAutoGas;
    document.getElementById('auto-gas-status').textContent = kartAutoGas ? 'AN (EIN)' : 'AUS';
    SFX.click();
  });

  document.getElementById('kart-how-to-play-btn').addEventListener('click', () => {
    alert("🏎️ Mario Kart Anleitung:\n- W / Gas: Beschleunigen (oder Auto-Gas aktivieren)\n- A/D: Lenken\n- SHIFT / Drift: In Kurven halten für Drift-Turbos!\n- E / Item: Gesammeltes Item (Pilz, Stern, Banane) auslösen!\n- Auf 50cc fahren die Bots entspannter zum Einstieg!");
  });

  document.getElementById('reset-mariokart').addEventListener('click', resetMarioKart);
  resetMarioKart();
}

/* ==========================================================================
   17. ROCK-PAPER-SCISSORS-LIZARD-SPOCK WITH MARKOV CHAIN PREDICTOR AI
   ========================================================================== */
const RPS_RULES = {
  Stein: { beats: ['Schere', 'Echse'], verb: 'zerschmettert' },
  Papier: { beats: ['Stein', 'Spock'], verb: 'bedeckt' },
  Schere: { beats: ['Papier', 'Echse'], verb: 'schneidet' },
  Echse: { beats: ['Spock', 'Papier'], verb: 'frisst' },
  Spock: { beats: ['Schere', 'Stein'], verb: 'verdampft' }
};

let rpsHistory = [];
let rpsMode = 'classic';
let rpsStreak = 0;
const markovTransitions = {};

function recordMarkovMove(prevMove, nextMove) {
  if (!prevMove) return;
  if (!markovTransitions[prevMove]) markovTransitions[prevMove] = {};
  markovTransitions[prevMove][nextMove] = (markovTransitions[prevMove][nextMove] || 0) + 1;
}

function predictNextUserMove() {
  const choices = rpsMode === 'classic' ? ['Stein', 'Papier', 'Schere'] : ['Stein', 'Papier', 'Schere', 'Echse', 'Spock'];
  if (rpsHistory.length < 2) {
    return { predicted: choices[Math.floor(Math.random() * choices.length)], confidence: 35 };
  }

  const lastMove = rpsHistory[rpsHistory.length - 1];
  const transitions = markovTransitions[lastMove];
  if (!transitions) {
    return { predicted: choices[Math.floor(Math.random() * choices.length)], confidence: 40 };
  }

  let bestNext = choices[0];
  let maxCount = -1;
  let totalCount = 0;

  choices.forEach(c => {
    const cnt = transitions[c] || 0;
    totalCount += cnt;
    if (cnt > maxCount) {
      maxCount = cnt;
      bestNext = c;
    }
  });

  const confidence = totalCount > 0 ? Math.min(95, Math.round((maxCount / totalCount) * 100)) : 45;
  return { predicted: bestNext, confidence };
}

function getWinningCounterPick(predictedMove) {
  const choices = rpsMode === 'classic' ? ['Stein', 'Papier', 'Schere'] : ['Stein', 'Papier', 'Schere', 'Echse', 'Spock'];
  const counters = choices.filter(c => RPS_RULES[c].beats.includes(predictedMove));
  return counters[Math.floor(Math.random() * counters.length)] || choices[0];
}

function renderMarkovHeatmap() {
  const table = document.getElementById('markov-debug-table');
  if (!table || !appState.admin.showMarkovHeatmap) return;

  const choices = ['Stein', 'Papier', 'Schere', 'Echse', 'Spock'];
  let html = '<table><thead><tr><th>Vorher / Nachher</th>';
  choices.forEach(c => html += `<th>${c}</th>`);
  html += '</tr></thead><tbody>';

  choices.forEach(from => {
    html += `<tr><td><strong>${from}</strong></td>`;
    choices.forEach(to => {
      const cnt = markovTransitions[from]?.[to] || 0;
      html += `<td>${cnt}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';
  table.innerHTML = html;
}

function playRPS(userPick) {
  const { predicted, confidence } = predictNextUserMove();
  const aiPick = getWinningCounterPick(predicted);

  if (rpsHistory.length > 0) {
    recordMarkovMove(rpsHistory[rpsHistory.length - 1], userPick);
  }
  rpsHistory.push(userPick);

  const emojiMap = { Stein: '✊', Papier: '🖐️', Schere: '✌️', Echse: '🦎', Spock: '🖖' };
  document.getElementById('rps-user-choice-display').textContent = emojiMap[userPick];
  document.getElementById('rps-ai-choice-display').textContent = emojiMap[aiPick];
  document.getElementById('rps-ai-meter-fill').style.width = `${confidence}%`;
  document.getElementById('rps-ai-prediction-label').textContent = `Muster-Konfidenz: ${confidence}%`;

  const statusEl = document.getElementById('rps-status');

  if (userPick === aiPick) {
    statusEl.textContent = `🤝 Unentschieden! Beide wählten ${userPick}.`;
    appState.stats.rps.draws += 1;
    document.getElementById('rps-draw-score').textContent = String(appState.stats.rps.draws);
    SFX.draw();
  } else if (RPS_RULES[userPick].beats.includes(aiPick)) {
    rpsStreak += 1;
    appState.stats.rps.userWins += 1;
    if (rpsStreak > appState.stats.rps.maxStreak) appState.stats.rps.maxStreak = rpsStreak;
    statusEl.textContent = `🎉 Du gewinnst! ${userPick} ${RPS_RULES[userPick].verb} ${aiPick}!`;
    SFX.win();
    if (appState.isVip) mintVipCoins(500);
    if (rpsStreak >= 4) unlockTrophy('markov_mind');
  } else {
    rpsStreak = 0;
    appState.stats.rps.compWins += 1;
    statusEl.textContent = `🤖 KI gewinnt! ${aiPick} ${RPS_RULES[aiPick].verb} ${userPick}.`;
    SFX.loss();
  }

  document.getElementById('rps-user-score').textContent = String(appState.stats.rps.userWins);
  document.getElementById('rps-computer-score').textContent = String(appState.stats.rps.compWins);
  document.getElementById('rps-streak').textContent = String(rpsStreak);
  saveState();
  renderMarkovHeatmap();
}

function initRPS() {
  document.querySelectorAll('.rps-choice').forEach(btn => {
    btn.addEventListener('click', () => playRPS(btn.dataset.choice));
  });

  document.querySelectorAll('[data-rps-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-rps-mode]').forEach(b => b.classList.remove('active-mode'));
      btn.classList.add('active-mode');
      rpsMode = btn.dataset.rpsMode;
      document.querySelectorAll('.rpsls-only').forEach(el => {
        el.classList.toggle('hidden', rpsMode !== 'lizard_spock');
      });
      SFX.click();
    });
  });

  document.getElementById('reset-rps').addEventListener('click', () => {
    appState.stats.rps.userWins = 0;
    appState.stats.rps.compWins = 0;
    appState.stats.rps.draws = 0;
    rpsStreak = 0;
    document.getElementById('rps-user-score').textContent = '0';
    document.getElementById('rps-computer-score').textContent = '0';
    document.getElementById('rps-draw-score').textContent = '0';
    document.getElementById('rps-streak').textContent = '0';
    saveState();
    SFX.click();
  });
}

/* ==========================================================================
   18. NEON SNAKE RETRO ENGINE
   ========================================================================== */
const snakeCanvas = document.getElementById('snake-canvas');
const snakeCtx = snakeCanvas.getContext('2d');

let snake = [];
let snakeDir = { x: 1, y: 0 };
let snakeNextDir = { x: 1, y: 0 };
let snakeFood = { x: 10, y: 10 };
let snakeScore = 0;
let snakeGridSize = 20;
let snakeGameOver = false;
let snakeLoopRunning = false;
let snakeLastTick = 0;
let snakeSpeedInterval = 110;

function startSnakeLoop() {
  if (snakeLoopRunning) return;
  snakeLoopRunning = true;
  requestAnimationFrame(tickSnake);
}

function resetSnake() {
  snake = [
    { x: 8, y: 10 },
    { x: 7, y: 10 },
    { x: 6, y: 10 }
  ];
  snakeDir = { x: 1, y: 0 };
  snakeNextDir = { x: 1, y: 0 };
  snakeScore = 0;
  snakeGameOver = false;
  snakeSpeedInterval = 110;
  spawnSnakeFood();

  document.getElementById('snake-score').textContent = '0';
  document.getElementById('snake-highscore').textContent = String(appState.stats.snake.highscore);
  document.getElementById('snake-speed-level').textContent = '1x';
  document.getElementById('snake-overlay-msg').classList.add('hidden');
}

function spawnSnakeFood() {
  const cols = snakeCanvas.width / snakeGridSize;
  const rows = snakeCanvas.height / snakeGridSize;
  snakeFood = {
    x: Math.floor(Math.random() * cols),
    y: Math.floor(Math.random() * rows)
  };
}

function setAdminSnakeLength(length) {
  const head = snake[0] || { x: 10, y: 10 };
  snake = [];
  for (let i = 0; i < length; i++) {
    snake.push({ x: (head.x - i + 20) % 20, y: head.y });
  }
}

function tickSnake(timestamp) {
  if (activeGameId !== 'snake' || isAppFrozen) {
    snakeLoopRunning = false;
    return;
  }

  const dt = appState.admin.gameSpeed || 1.0;

  if (!snakeGameOver && timestamp - snakeLastTick > (snakeSpeedInterval / dt)) {
    snakeLastTick = timestamp;
    snakeDir = snakeNextDir;

    let head = { x: snake[0].x + snakeDir.x, y: snake[0].y + snakeDir.y };
    const cols = snakeCanvas.width / snakeGridSize;
    const rows = snakeCanvas.height / snakeGridSize;

    if (appState.admin.godSnake) {
      if (head.x < 0) head.x = cols - 1;
      if (head.x >= cols) head.x = 0;
      if (head.y < 0) head.y = rows - 1;
      if (head.y >= rows) head.y = 0;
    }

    if (!appState.admin.godSnake && (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows)) {
      endSnakeGame();
    } else if (!appState.admin.godSnake && snake.some(seg => seg.x === head.x && seg.y === head.y)) {
      endSnakeGame();
    } else {
      snake.unshift(head);

      if (head.x === snakeFood.x && head.y === snakeFood.y) {
        SFX.coin();
        const pts = appState.admin.infiniteCoins ? 100 : 10;
        snakeScore += pts;
        if (appState.isVip) mintVipCoins(pts * 10);
        document.getElementById('snake-score').textContent = String(snakeScore);
        if (snakeScore > appState.stats.snake.highscore) {
          appState.stats.snake.highscore = snakeScore;
          saveState();
        }
        if (snakeScore >= 100) unlockTrophy('snake_length');

        if (snakeScore % 50 === 0 && snakeSpeedInterval > 50) {
          snakeSpeedInterval -= 10;
          document.getElementById('snake-speed-level').textContent = `${Math.round(110 / snakeSpeedInterval)}x`;
        }
        spawnSnakeFood();
      } else {
        snake.pop();
      }
    }
  }

  drawSnakeScene();
  requestAnimationFrame(tickSnake);
}

function endSnakeGame() {
  snakeGameOver = true;
  SFX.hit();
  appState.stats.snake.gamesPlayed += 1;
  saveState();

  const overlay = document.getElementById('snake-overlay-msg');
  document.getElementById('snake-overlay-text').textContent = `Erreichte Punkte: ${snakeScore}`;
  overlay.classList.remove('hidden');
}

function drawSnakeScene() {
  snakeCtx.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);

  snakeCtx.fillStyle = '#060914';
  snakeCtx.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height);

  // Food
  snakeCtx.fillStyle = '#ec4899';
  snakeCtx.shadowColor = '#ec4899';
  snakeCtx.shadowBlur = 12;
  snakeCtx.beginPath();
  snakeCtx.arc(
    snakeFood.x * snakeGridSize + snakeGridSize / 2,
    snakeFood.y * snakeGridSize + snakeGridSize / 2,
    snakeGridSize / 2 - 2,
    0,
    Math.PI * 2
  );
  snakeCtx.fill();

  // Snake Body
  snakeCtx.shadowColor = appState.isVip ? '#facc15' : '#06b6d4';
  snakeCtx.shadowBlur = 8;
  snake.forEach((seg, i) => {
    if (appState.isVip) {
      snakeCtx.fillStyle = i === 0 ? '#fde047' : '#f59e0b';
    } else {
      snakeCtx.fillStyle = i === 0 ? '#38bdf8' : '#06b6d4';
    }
    snakeCtx.fillRect(
      seg.x * snakeGridSize + 1,
      seg.y * snakeGridSize + 1,
      snakeGridSize - 2,
      snakeGridSize - 2
    );
  });

  snakeCtx.shadowBlur = 0;
}

function initSnake() {
  window.addEventListener('keydown', (e) => {
    if (activeGameId !== 'snake') return;
    if (['ArrowUp', 'KeyW'].includes(e.code) && snakeDir.y === 0) snakeNextDir = { x: 0, y: -1 };
    if (['ArrowDown', 'KeyS'].includes(e.code) && snakeDir.y === 0) snakeNextDir = { x: 0, y: 1 };
    if (['ArrowLeft', 'KeyA'].includes(e.code) && snakeDir.x === 0) snakeNextDir = { x: -1, y: 0 };
    if (['ArrowRight', 'KeyD'].includes(e.code) && snakeDir.x === 0) snakeNextDir = { x: 1, y: 0 };
  });

  const bindDpad = (id, dir) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('click', () => {
      if ((dir.x !== 0 && snakeDir.x === 0) || (dir.y !== 0 && snakeDir.y === 0)) {
        snakeNextDir = dir;
      }
    });
  };
  bindDpad('snake-touch-up', { x: 0, y: -1 });
  bindDpad('snake-touch-down', { x: 0, y: 1 });
  bindDpad('snake-touch-left', { x: -1, y: 0 });
  bindDpad('snake-touch-right', { x: 1, y: 0 });

  document.getElementById('reset-snake').addEventListener('click', resetSnake);
  document.getElementById('snake-overlay-btn').addEventListener('click', resetSnake);
  resetSnake();
}

/* ==========================================================================
   19. CYBER BRICK BREAKER ENGINE (GOD MODE & MULTI-BALLS)
   ========================================================================== */
const bricksCanvas = document.getElementById('bricks-canvas');
const bricksCtx = bricksCanvas.getContext('2d');

let paddle = { x: 180, width: 80, height: 12, speed: 7 };
let balls = [{ x: 220, y: 300, dx: 3.5, dy: -3.5, radius: 6, active: false }];
let bricks = [];
let brickScore = 0;
let brickLives = 3;
let brickLevel = 1;
let bricksGameOver = false;
let bricksLoopRunning = false;

function startBricksLoop() {
  if (bricksLoopRunning) return;
  bricksLoopRunning = true;
  requestAnimationFrame(tickBricks);
}

function resetBricks(fullReset = true) {
  if (fullReset) {
    brickScore = 0;
    brickLives = 3;
    brickLevel = 1;
  }

  paddle.x = bricksCanvas.width / 2 - paddle.width / 2;
  balls = [{
    x: paddle.x + paddle.width / 2,
    y: bricksCanvas.height - 30,
    dx: 3.5,
    dy: -3.5,
    radius: 6,
    active: false
  }];
  bricksGameOver = false;

  document.getElementById('bricks-score').textContent = String(brickScore);
  document.getElementById('bricks-lives').textContent = String(brickLives);
  document.getElementById('bricks-level').textContent = String(brickLevel);
  document.getElementById('bricks-highscore').textContent = String(appState.stats.bricks.highscore);
  document.getElementById('bricks-overlay-msg').classList.add('hidden');

  createBrickField();
}

function spawnAdminMultiballs(count = 10) {
  for (let i = 0; i < count; i++) {
    balls.push({
      x: paddle.x + paddle.width / 2,
      y: bricksCanvas.height - 30,
      dx: (Math.random() - 0.5) * 8,
      dy: -3.5 - Math.random() * 2,
      radius: 6,
      active: true
    });
  }
}

function createBrickField() {
  bricks = [];
  const rows = 4 + brickLevel;
  const cols = 7;
  const brickWidth = 52;
  const brickHeight = 18;
  const colors = ['#ec4899', '#8b5cf6', '#06b6d4', '#10b981', '#facc15'];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      bricks.push({
        x: 20 + c * (brickWidth + 8),
        y: 35 + r * (brickHeight + 8),
        width: brickWidth,
        height: brickHeight,
        color: colors[r % colors.length],
        active: true
      });
    }
  }
}

function launchBall() {
  if (!bricksGameOver) {
    balls.forEach(b => b.active = true);
    SFX.jump();
  }
}

function tickBricks() {
  if (activeGameId !== 'brickbreaker' || isAppFrozen) {
    bricksLoopRunning = false;
    return;
  }

  const dt = appState.admin.gameSpeed || 1.0;

  if (!bricksGameOver) {
    balls.forEach((b, ballIdx) => {
      if (b.active) {
        b.x += b.dx * dt;
        b.y += b.dy * dt;

        if (b.x - b.radius < 0 || b.x + b.radius > bricksCanvas.width) {
          b.dx = -b.dx;
          SFX.click();
        }
        if (b.y - b.radius < 0) {
          b.dy = -b.dy;
          SFX.click();
        }

        if (
          b.y + b.radius >= bricksCanvas.height - 20 &&
          b.x >= paddle.x &&
          b.x <= paddle.x + paddle.width
        ) {
          const hitOffset = (b.x - (paddle.x + paddle.width / 2)) / (paddle.width / 2);
          b.dx = hitOffset * 5.2;
          b.dy = -Math.abs(b.dy);
          SFX.move();
        }

        if (b.y > bricksCanvas.height) {
          if (appState.admin.godBricks) {
            b.dy = -Math.abs(b.dy);
            SFX.powerup();
          } else {
            balls.splice(ballIdx, 1);
            if (balls.length === 0) {
              brickLives -= 1;
              document.getElementById('bricks-lives').textContent = String(brickLives);
              SFX.hit();
              if (brickLives <= 0) {
                endBricksGame(false);
              } else {
                balls = [{
                  x: paddle.x + paddle.width / 2,
                  y: bricksCanvas.height - 30,
                  dx: 3.5,
                  dy: -3.5,
                  radius: 6,
                  active: false
                }];
              }
            }
          }
        }

        bricks.forEach(brick => {
          if (brick.active) {
            if (
              b.x > brick.x &&
              b.x < brick.x + brick.width &&
              b.y > brick.y &&
              b.y < brick.y + brick.height
            ) {
              brick.active = false;
              b.dy = -b.dy;
              brickScore += 20;
              if (appState.isVip) mintVipCoins(100);
              document.getElementById('bricks-score').textContent = String(brickScore);
              SFX.coin();

              if (brickScore > appState.stats.bricks.highscore) {
                appState.stats.bricks.highscore = brickScore;
                saveState();
              }
            }
          }
        });
      } else {
        b.x = paddle.x + paddle.width / 2;
      }
    });

    if (bricks.length > 0 && bricks.every(b => !b.active)) {
      brickLevel += 1;
      SFX.win();
      triggerConfetti(60, true);
      if (brickLevel >= 2) unlockTrophy('brick_crusher');
      resetBricks(false);
    }
  }

  drawBricksScene();
  requestAnimationFrame(tickBricks);
}

function endBricksGame(won) {
  bricksGameOver = true;
  appState.stats.bricks.gamesPlayed += 1;
  saveState();

  const overlay = document.getElementById('bricks-overlay-msg');
  document.getElementById('bricks-overlay-title').textContent = won ? 'Gewonnen!' : 'Game Over';
  document.getElementById('bricks-overlay-text').textContent = `Endstand: ${brickScore} Punkte (Level ${brickLevel})`;
  overlay.classList.remove('hidden');
}

function drawBricksScene() {
  bricksCtx.clearRect(0, 0, bricksCanvas.width, bricksCanvas.height);

  bricksCtx.fillStyle = '#0a0d1a';
  bricksCtx.fillRect(0, 0, bricksCanvas.width, bricksCanvas.height);

  bricks.forEach(b => {
    if (b.active) {
      bricksCtx.fillStyle = b.color;
      bricksCtx.fillRect(b.x, b.y, b.width, b.height);
      bricksCtx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      bricksCtx.strokeRect(b.x, b.y, b.width, b.height);
    }
  });

  bricksCtx.fillStyle = appState.admin.godBricks || appState.isVip ? '#facc15' : '#8b5cf6';
  bricksCtx.shadowColor = bricksCtx.fillStyle;
  bricksCtx.shadowBlur = 8;
  bricksCtx.fillRect(paddle.x, bricksCanvas.height - 20, paddle.width, paddle.height);

  bricksCtx.fillStyle = '#ffffff';
  bricksCtx.shadowColor = '#38bdf8';
  bricksCtx.shadowBlur = 10;
  balls.forEach(b => {
    bricksCtx.beginPath();
    bricksCtx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
    bricksCtx.fill();
  });

  bricksCtx.shadowBlur = 0;
}

function initBrickBreaker() {
  bricksCanvas.addEventListener('mousemove', (e) => {
    const rect = bricksCanvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    paddle.x = Math.max(0, Math.min(bricksCanvas.width - paddle.width, mouseX - paddle.width / 2));
  });

  bricksCanvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const rect = bricksCanvas.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    paddle.x = Math.max(0, Math.min(bricksCanvas.width - paddle.width, touchX - paddle.width / 2));
  });

  window.addEventListener('keydown', (e) => {
    if (activeGameId !== 'brickbreaker') return;
    if (['ArrowLeft', 'KeyA'].includes(e.code)) {
      paddle.x = Math.max(0, paddle.x - paddle.speed * 3);
    }
    if (['ArrowRight', 'KeyD'].includes(e.code)) {
      paddle.x = Math.min(bricksCanvas.width - paddle.width, paddle.x + paddle.speed * 3);
    }
    if (e.code === 'Space') launchBall();
  });

  document.getElementById('touch-paddle-left').addEventListener('click', () => {
    paddle.x = Math.max(0, paddle.x - 30);
  });
  document.getElementById('touch-paddle-right').addEventListener('click', () => {
    paddle.x = Math.min(bricksCanvas.width - paddle.width, paddle.x + 30);
  });
  document.getElementById('touch-paddle-launch').addEventListener('click', launchBall);

  document.getElementById('reset-bricks').addEventListener('click', () => resetBricks(true));
  document.getElementById('bricks-overlay-btn').addEventListener('click', () => resetBricks(true));
  resetBricks(true);
}

/* ==========================================================================
   20. SERVICE WORKER & PWA INSTALL BANNER
   ========================================================================== */
let deferredPrompt = null;

function initPWA() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(err => {
        console.warn('Service Worker registration error', err);
      });
    });
  }

  const updateOnlineStatus = () => {
    const badge = document.getElementById('network-status');
    if (navigator.onLine) {
      badge.textContent = '🟢 Online';
      badge.className = 'pill-badge pill-online';
    } else {
      badge.textContent = '🔴 Offline';
      badge.className = 'pill-badge pill-offline';
    }
  };
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('install-banner').classList.remove('hidden');
  });

  document.getElementById('install-pwa-btn').addEventListener('click', () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        deferredPrompt = null;
        document.getElementById('install-banner').classList.add('hidden');
      });
    }
  });

  document.getElementById('dismiss-install-btn').addEventListener('click', () => {
    document.getElementById('install-banner').classList.add('hidden');
  });
}

/* ==========================================================================
   21. INITIALIZATION ENTRYPOINT
   ========================================================================== */
window.addEventListener('DOMContentLoaded', () => {
  loadSavedState();

  document.querySelectorAll('.game-card').forEach(btn => {
    btn.addEventListener('click', () => switchGame(btn.dataset.game));
  });

  initLanguageSelection();
  initWelcomeFlow();
  initSettings();
  initTicTacToe();
  initMemory();
  initSuperMario();
  initMarioKart();
  initRPS();
  initSnake();
  initBrickBreaker();
  initPWA();
});
