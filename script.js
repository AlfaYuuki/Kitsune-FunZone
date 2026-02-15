/* ================== DOM ================== */
const output = document.getElementById("output");
const loadingWindow = document.getElementById("loadingWindow");
const mhText = document.querySelector(".mh-text");
const mhBar = document.querySelector(".mh-bar");
const increaseBtn = document.getElementById("increaseMHBtn");
const missionsBtn = document.getElementById("missions-btn");

const quizContainer = document.getElementById("quiz-container");
const quizQuestion = document.getElementById("quiz-question");
const quizAnswers = document.getElementById("quiz-answers");
const missionSelector = document.getElementById("mission-selector");
const missionHint = document.getElementById("mission-hint");
const missionCloseBtn = document.getElementById("mission-close-btn");
const missionOptionButtons = Array.from(document.querySelectorAll(".mission-btn"));
const missionGameWindow = document.getElementById("mission-game-window");
const missionGameTitle = document.getElementById("mission-game-title");
const missionGameSubtitle = document.getElementById("mission-game-subtitle");
const missionGameStatus = document.getElementById("mission-game-status");
const missionGameContent = document.getElementById("mission-game-content");
const missionGameCloseBtn = document.getElementById("mission-game-close-btn");

/* ================== USER PROFILE (Upgrade 1) ================== */
const userProfile = {
    username: "",
    level: 1,
    exp: 0,
    rank: "D",
    mentalHealth: 0
};

/* ===== Profile UI Bindings ===== */
const profileUsername = document.getElementById('profile-username');
const profileRank = document.getElementById('profile-rank');
const profileLevel = document.getElementById('profile-level');
const profileExp = document.getElementById('profile-exp');
const profileExpNeeded = document.getElementById('profile-exp-needed');
const expBar = document.getElementById('exp-bar');
// Registration elements
const usernameInput = document.getElementById('username-input');
const setUsernameBtn = document.getElementById('set-username-btn');
const registerPanel = document.getElementById('register-panel');
const changeUsernameBtn = document.getElementById('change-username-btn');
const adminAuthPanel = document.getElementById('admin-auth-panel');
const adminPasswordInput = document.getElementById('admin-password-input');
const verifyAdminBtn = document.getElementById('verify-admin-btn');
const adminAuthHint = document.querySelector('.admin-auth-hint');
const adminRecoveryWrap = document.getElementById('admin-recovery-wrap');
const adminRecoveryInput = document.getElementById('admin-recovery-input');
const verifyRecoveryBtn = document.getElementById('verify-recovery-btn');
const adminPanel = document.getElementById('admin-panel');
const adminUsernameInput = document.getElementById('admin-username');
const adminLevelInput = document.getElementById('admin-level');
const adminExpInput = document.getElementById('admin-exp');
const adminRankInput = document.getElementById('admin-rank');
const adminMHInput = document.getElementById('admin-mh');
const adminApplyBtn = document.getElementById('admin-apply-btn');
const adminToggleBtn = document.getElementById('admin-toggle-btn');
const lockedControls = Array.from(document.querySelectorAll('.controls button'));
const ADMIN_CREDENTIALS = {
    'ALFA YUUKI': '1622',
    'KITTY YUKINO': '2216'
};
const ADMIN_RECOVERY_ID = '22122010ak16122014ka22042021jak';
const ADMIN_ACCOUNT_LOCK_THRESHOLD = 10;
const ADMIN_INITIAL_MAX_ATTEMPTS = 3;
const ADMIN_MIN_MAX_ATTEMPTS = 1;
const ADMIN_BASE_LOCK_MS = 30000;
const ADMIN_SECURITY_STORAGE_KEY = 'kitsune_admin_security_v1';
const NO_BRAIN_TEXT = 'Error404: No Brain Found';
const MISSION_EXP_REWARDS = {
    1: 25,
    2: 50,
    3: 75,
    4: 100
};
const MISSION_REQUIREMENTS = {
    1: 25,
    2: 50,
    3: 70,
    4: 85
};
let adminCustomRank = '';
let isAdminPanelHiddenByUser = false;
let hasBrain = false;
let isAdminVerified = false;
let adminFailedAttempts = 0;
let adminAllowedAttempts = ADMIN_INITIAL_MAX_ATTEMPTS;
let adminTotalFailedAttempts = 0;
let adminLockedUntil = 0;
let adminLockMultiplier = 1;
let adminPermanentlyLocked = false;
let adminLockTicker = null;
const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const UI_ENTER_CLASSES = ['ui-enter-pop', 'ui-enter-rise', 'ui-enter-slide-left', 'ui-enter-fade', 'yui-dialogue-enter', 'yui-avatar-enter'];
const UI_EXIT_CLASSES = ['ui-exit-pop', 'ui-exit-drop', 'ui-exit-slide-left', 'ui-exit-fade', 'yui-dialogue-exit'];
const ADMIN_LAYOUT_STORAGE_KEY = 'kitsune_admin_layout_v1';
const ADMIN_DRAG_HOLD_MS = 280;
const ADMIN_DRAG_CANCEL_DISTANCE = 12;
const ADMIN_DRAG_INTERACTIVE_SELECTOR = 'input, textarea, select, button, a, [contenteditable], [role="button"]';
const ADMIN_DRAGGABLE_TARGETS = [
    { id: 'mh-container', selector: '.mh-container' },
    { id: 'profile-panel', selector: '#profile-panel' },
    { id: 'register-panel', selector: '#register-panel' },
    { id: 'admin-auth-panel', selector: '#admin-auth-panel' },
    { id: 'admin-panel', selector: '#admin-panel' },
    { id: 'main-panel', selector: '.panel' },
    { id: 'controls', selector: '.controls' },
    { id: 'owner-signature', selector: '.owner-signature' }
];
let pendingAdminDragHold = null;
let activeAdminDrag = null;
let adminDragEventsBound = false;
let activeMissionGame = null;

function clearUiAnimationClasses(element) {
    if (!element) return;
    element.classList.remove(...UI_ENTER_CLASSES, ...UI_EXIT_CLASSES);
}

function showWithAnimation(element, enterClass = 'ui-enter-fade') {
    if (!element) return;
    if (!element.classList.contains('hidden')) return;
    clearUiAnimationClasses(element);
    element.classList.remove('hidden');
    if (prefersReducedMotion) return;
    void element.offsetWidth;
    element.classList.add(enterClass);
}

function hideWithAnimation(element, exitClass = 'ui-exit-fade', onDone) {
    if (!element) {
        if (onDone) onDone();
        return;
    }
    if (element.classList.contains('hidden')) {
        if (onDone) onDone();
        return;
    }
    if (prefersReducedMotion) {
        clearUiAnimationClasses(element);
        element.classList.add('hidden');
        if (onDone) onDone();
        return;
    }

    clearUiAnimationClasses(element);
    void element.offsetWidth;
    element.classList.add(exitClass);

    let done = false;
    const finish = () => {
        if (done) return;
        done = true;
        clearUiAnimationClasses(element);
        element.classList.add('hidden');
        if (onDone) onDone();
    };

    element.addEventListener('animationend', finish, { once: true });
    setTimeout(finish, 450);
}

function hasUsername() {
    return Boolean(userProfile.username && userProfile.username.trim().length);
}

function getMissionRequiredMentalHealth(level) {
    return MISSION_REQUIREMENTS[level] || 100;
}

function getMaxUnlockedMissionLevel() {
    if (!hasBrain) return 0;
    const mh = Math.max(0, Math.min(100, Number.parseInt(userProfile.mentalHealth, 10) || 0));
    if (mh >= MISSION_REQUIREMENTS[4]) return 4;
    if (mh >= MISSION_REQUIREMENTS[3]) return 3;
    if (mh >= MISSION_REQUIREMENTS[2]) return 2;
    if (mh >= MISSION_REQUIREMENTS[1]) return 1;
    return 0;
}

function getMissionAccessHint(maxLevel = getMaxUnlockedMissionLevel()) {
    if (maxLevel >= 4) return 'All mission levels unlocked.';
    if (maxLevel === 3) return 'Unlocked: Level 1-3. Reach 85% mental health for Level 4.';
    if (maxLevel === 2) return 'Unlocked: Level 1-2. Reach 70% mental health for Level 3.';
    if (maxLevel === 1) return 'Unlocked: Level 1. Reach 50% mental health for Level 2.';
    return 'Missions are locked. Reach at least 25% mental health.';
}

function formatMissionTime(totalSeconds) {
    const clamped = Math.max(0, Number.parseInt(totalSeconds, 10) || 0);
    const minutes = Math.floor(clamped / 60);
    const seconds = clamped % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function normalizeMissionAnswer(value) {
    return String(value || '').trim().toUpperCase().replace(/\s+/g, '');
}

function setMissionGameStatus(text) {
    if (!missionGameStatus) return;
    missionGameStatus.textContent = text;
}

function clearMissionGameContent() {
    if (!missionGameContent) return;
    missionGameContent.innerHTML = '';
}

function createMissionRuntime(level) {
    return {
        level,
        active: true,
        ended: false,
        timeouts: [],
        intervals: []
    };
}

function runtimeSetTimeout(runtime, callback, delayMs) {
    if (!runtime || !runtime.active) return null;
    const timeoutId = window.setTimeout(() => {
        if (!runtime.active) return;
        callback();
    }, delayMs);
    runtime.timeouts.push(timeoutId);
    return timeoutId;
}

function runtimeSetInterval(runtime, callback, delayMs) {
    if (!runtime || !runtime.active) return null;
    const intervalId = window.setInterval(() => {
        if (!runtime.active) return;
        callback();
    }, delayMs);
    runtime.intervals.push(intervalId);
    return intervalId;
}

function clearMissionRuntime(runtime) {
    if (!runtime) return;
    runtime.active = false;
    runtime.timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    runtime.intervals.forEach((intervalId) => clearInterval(intervalId));
    runtime.timeouts = [];
    runtime.intervals = [];
}

function getActiveMissionRuntime(level) {
    if (!activeMissionGame) return null;
    if (typeof level === 'number' && activeMissionGame.level !== level) return null;
    return activeMissionGame;
}

function closeMissionGameWindow({ silent = false } = {}) {
    const wasVisible = Boolean(missionGameWindow && !missionGameWindow.classList.contains('hidden'));
    if (activeMissionGame) {
        clearMissionRuntime(activeMissionGame);
        activeMissionGame = null;
    }
    if (wasVisible && missionGameWindow) hideWithAnimation(missionGameWindow, 'ui-exit-pop');
    if (!silent && wasVisible) typeText('Mission closed.');
}

function openMissionGameWindow(level, title, subtitle = '') {
    if (!missionGameWindow || !missionGameContent) return null;
    if (activeMissionGame) {
        clearMissionRuntime(activeMissionGame);
        activeMissionGame = null;
    }
    const runtime = createMissionRuntime(level);
    activeMissionGame = runtime;
    if (missionGameTitle) missionGameTitle.textContent = title;
    if (missionGameSubtitle) missionGameSubtitle.textContent = subtitle;
    setMissionGameStatus('Initializing mission...');
    clearMissionGameContent();
    clearUiAnimationClasses(missionGameWindow);
    missionGameWindow.classList.remove('hidden');
    if (!prefersReducedMotion) {
        void missionGameWindow.offsetWidth;
        missionGameWindow.classList.add('ui-enter-pop');
    }
    return runtime;
}

function endMissionRun(level, passed, detailText = '') {
    const runtime = getActiveMissionRuntime(level);
    if (!runtime || runtime.ended) return;
    runtime.ended = true;
    clearMissionRuntime(runtime);

    const reward = MISSION_EXP_REWARDS[level] || 0;
    if (passed) {
        addExp(reward);
        setMissionGameStatus(`Mission Level ${level} clear. +${reward} EXP${detailText ? ` | ${detailText}` : ''}`);
        typeText(`Mission Level ${level} complete! +${reward} EXP`);
    } else {
        const failNote = detailText ? ` ${detailText}` : '';
        setMissionGameStatus(`Mission Level ${level} failed.${failNote}`);
        typeText(`Mission Level ${level} failed.${failNote}`);
    }
    updateMissionSelectorAvailability();
    window.setTimeout(() => {
        if (activeMissionGame === runtime) closeMissionGameWindow({ silent: true });
    }, 1300);
}

function updateMissionSelectorAvailability() {
    const usernameReady = hasUsername();
    const maxLevel = getMaxUnlockedMissionLevel();

    if (missionsBtn) missionsBtn.disabled = !usernameReady || maxLevel <= 0;
    missionOptionButtons.forEach((btn) => {
        const level = Number.parseInt(btn.dataset.missionLevel || '0', 10);
        const unlocked = usernameReady && level > 0 && level <= maxLevel;
        btn.disabled = !unlocked;
        btn.classList.toggle('locked', !unlocked);
    });
    if (missionHint) missionHint.textContent = getMissionAccessHint(maxLevel);

    if ((!usernameReady || maxLevel <= 0) && activeMissionGame) {
        closeMissionGameWindow({ silent: true });
    }
}

function hideMissionSelector() {
    if (!missionSelector) return;
    hideWithAnimation(missionSelector, 'ui-exit-pop');
}

function showMissionSelector() {
    if (!requireUsername()) return;
    updateMissionSelectorAvailability();
    const maxLevel = getMaxUnlockedMissionLevel();
    if (maxLevel <= 0) {
        typeText('Missions are locked until you reach 25% mental health.');
        return;
    }
    showWithAnimation(missionSelector, 'ui-enter-pop');
}

function runReflexChallenge(runtime, options, onComplete) {
    if (!runtime || !runtime.active || !missionGameContent) return;
    const symbols = ['▲', '■', '●', '◆'];
    const durationSec = Math.max(5, Number.parseInt(options.durationSec, 10) || 30);
    const reactionMs = Math.max(500, Number.parseInt(options.reactionMs, 10) || 1500);
    const passScore = Math.max(1, Number.parseInt(options.passScore, 10) || 15);
    const minSpawnMs = Math.max(240, Number.parseInt(options.minSpawnMs, 10) || 650);
    const maxSpawnMs = Math.max(minSpawnMs + 40, Number.parseInt(options.maxSpawnMs, 10) || 1100);

    clearMissionGameContent();
    const gameWrap = document.createElement('div');
    gameWrap.className = 'reflex-game';
    const hint = document.createElement('div');
    hint.className = 'reflex-hint';
    hint.textContent = options.hint || 'Press the matching symbol as fast as possible.';
    const symbolDisplay = document.createElement('div');
    symbolDisplay.className = 'reflex-symbol';
    symbolDisplay.textContent = '?';
    const buttonGrid = document.createElement('div');
    buttonGrid.className = 'reflex-buttons';
    gameWrap.appendChild(hint);
    gameWrap.appendChild(symbolDisplay);
    gameWrap.appendChild(buttonGrid);
    missionGameContent.appendChild(gameWrap);

    let ended = false;
    let timeLeft = durationSec;
    let score = 0;
    let awaiting = false;
    let currentSymbol = '';
    let responseToken = 0;

    const buildStatus = () => {
        const prefix = typeof options.getStatusPrefix === 'function' ? options.getStatusPrefix() : '';
        const lead = prefix ? `${prefix} | ` : '';
        return `${lead}Time ${timeLeft}s | Score ${score}/${passScore}`;
    };

    const finish = () => {
        if (ended || !runtime.active) return;
        ended = true;
        onComplete({
            passed: score >= passScore,
            score,
            passScore
        });
    };

    const scheduleNextFlash = () => {
        if (ended || !runtime.active || timeLeft <= 0) return;
        const delay = Math.floor(Math.random() * (maxSpawnMs - minSpawnMs + 1)) + minSpawnMs;
        runtimeSetTimeout(runtime, flashSymbol, delay);
    };

    const flashSymbol = () => {
        if (ended || !runtime.active || timeLeft <= 0) return;
        responseToken++;
        const myToken = responseToken;
        awaiting = true;
        currentSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        symbolDisplay.textContent = currentSymbol;
        symbolDisplay.classList.remove('hit', 'wrong', 'miss');
        symbolDisplay.classList.add('active');
        setMissionGameStatus(buildStatus());

        runtimeSetTimeout(runtime, () => {
            if (ended || !runtime.active || !awaiting || myToken !== responseToken) return;
            awaiting = false;
            symbolDisplay.classList.remove('active');
            symbolDisplay.classList.add('miss');
            runtimeSetTimeout(runtime, () => symbolDisplay.classList.remove('miss'), 170);
            scheduleNextFlash();
        }, reactionMs);
    };

    symbols.forEach((symbol) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'reflex-btn';
        btn.textContent = symbol;
        btn.addEventListener('click', () => {
            if (ended || !runtime.active || !awaiting || timeLeft <= 0) return;
            responseToken++;
            awaiting = false;
            symbolDisplay.classList.remove('active');
            if (symbol === currentSymbol) {
                score++;
                symbolDisplay.classList.remove('wrong', 'miss');
                symbolDisplay.classList.add('hit');
                runtimeSetTimeout(runtime, () => symbolDisplay.classList.remove('hit'), 170);
            } else {
                symbolDisplay.classList.remove('hit', 'miss');
                symbolDisplay.classList.add('wrong');
                runtimeSetTimeout(runtime, () => symbolDisplay.classList.remove('wrong'), 170);
            }
            setMissionGameStatus(buildStatus());
            scheduleNextFlash();
        });
        buttonGrid.appendChild(btn);
    });

    runtimeSetInterval(runtime, () => {
        if (ended || !runtime.active) return;
        timeLeft--;
        if (timeLeft <= 0) {
            timeLeft = 0;
            setMissionGameStatus(buildStatus());
            finish();
            return;
        }
        setMissionGameStatus(buildStatus());
    }, 1000);

    setMissionGameStatus(buildStatus());
    runtimeSetTimeout(runtime, flashSymbol, 380);
}

function runMemoryChallenge(runtime, options, onComplete) {
    if (!runtime || !runtime.active || !missionGameContent) return;
    const gridSize = Math.max(2, Number.parseInt(options.gridSize, 10) || 4);
    const rounds = Math.max(1, Number.parseInt(options.rounds, 10) || 3);
    const baseLength = Math.max(2, Number.parseInt(options.baseLength, 10) || 5);
    const roundIncrement = Number.parseInt(options.roundIncrement, 10) || 1;
    const showDurationMs = Math.max(1500, Number.parseInt(options.showDurationMs, 10) || 5000);
    const failOnMistake = Boolean(options.failOnMistake);
    const tilesCount = gridSize * gridSize;

    clearMissionGameContent();
    const gameWrap = document.createElement('div');
    gameWrap.className = 'memory-game';
    const hint = document.createElement('div');
    hint.className = 'memory-hint';
    hint.textContent = options.hint || 'Watch the pattern, then click tiles in the same order.';
    const grid = document.createElement('div');
    grid.className = `memory-grid ${gridSize >= 6 ? 'memory-grid-6' : 'memory-grid-4'}`;
    grid.style.setProperty('--grid-size', String(gridSize));
    gameWrap.appendChild(hint);
    gameWrap.appendChild(grid);
    missionGameContent.appendChild(gameWrap);

    const tiles = [];
    let ended = false;
    let round = 1;
    let pattern = [];
    let playerIndex = 0;
    let acceptingInput = false;

    const buildStatus = (extra = '') => {
        const prefix = typeof options.getStatusPrefix === 'function' ? options.getStatusPrefix() : '';
        const lead = prefix ? `${prefix} | ` : '';
        const base = `${lead}Round ${round}/${rounds}`;
        return extra ? `${base} | ${extra}` : base;
    };

    const clearTileStates = () => {
        tiles.forEach((tile) => tile.classList.remove('preview', 'correct', 'wrong'));
    };

    const finish = (passed, reason = '') => {
        if (ended || !runtime.active) return;
        ended = true;
        onComplete({
            passed,
            reason
        });
    };

    const startRound = () => {
        if (ended || !runtime.active) return;
        acceptingInput = false;
        playerIndex = 0;
        clearTileStates();

        const patternLength = Math.max(2, baseLength + (round - 1) * roundIncrement);
        pattern = Array.from({ length: patternLength }, () => Math.floor(Math.random() * tilesCount));
        const stepMs = Math.max(210, Math.floor(showDurationMs / Math.max(pattern.length, 1)));

        setMissionGameStatus(buildStatus(`Memorize ${patternLength} tiles`));
        pattern.forEach((tileIndex, sequenceIndex) => {
            runtimeSetTimeout(runtime, () => {
                if (ended || !runtime.active) return;
                const tile = tiles[tileIndex];
                if (!tile) return;
                tile.classList.add('preview');
                runtimeSetTimeout(runtime, () => {
                    if (tile) tile.classList.remove('preview');
                }, Math.max(120, Math.floor(stepMs * 0.65)));
            }, sequenceIndex * stepMs);
        });

        runtimeSetTimeout(runtime, () => {
            if (ended || !runtime.active) return;
            acceptingInput = true;
            setMissionGameStatus(buildStatus(`Repeat the full pattern`));
        }, showDurationMs + 80);
    };

    for (let i = 0; i < tilesCount; i++) {
        const tile = document.createElement('button');
        tile.type = 'button';
        tile.className = 'memory-tile';
        tile.textContent = String(i + 1);
        tile.addEventListener('click', () => {
            if (!acceptingInput || ended || !runtime.active) return;
            const expected = pattern[playerIndex];
            if (i === expected) {
                tile.classList.add('correct');
                runtimeSetTimeout(runtime, () => tile.classList.remove('correct'), 180);
                playerIndex++;
                if (playerIndex >= pattern.length) {
                    acceptingInput = false;
                    if (round >= rounds) {
                        finish(true);
                        return;
                    }
                    setMissionGameStatus(buildStatus('Round clear'));
                    round++;
                    runtimeSetTimeout(runtime, startRound, 700);
                }
            } else {
                tile.classList.add('wrong');
                runtimeSetTimeout(runtime, () => tile.classList.remove('wrong'), 240);
                acceptingInput = false;
                if (failOnMistake) {
                    finish(false, `Mistake on round ${round}`);
                    return;
                }
                setMissionGameStatus(buildStatus('Wrong tile. Round reset.'));
                runtimeSetTimeout(runtime, startRound, 1000);
            }
        });
        tiles.push(tile);
        grid.appendChild(tile);
    }

    setMissionGameStatus(buildStatus('Get ready'));
    runtimeSetTimeout(runtime, startRound, 320);
}

function runLogicChallenge(runtime, options, onComplete) {
    if (!runtime || !runtime.active || !missionGameContent) return;
    const puzzles = Array.isArray(options.puzzles) ? options.puzzles : [];
    if (!puzzles.length) {
        onComplete({ passed: false, reason: 'No puzzles configured' });
        return;
    }
    const totalSeconds = Number.parseInt(options.totalSeconds, 10);
    const hasTimer = Number.isFinite(totalSeconds) && totalSeconds > 0;
    const maxWrongAttemptsRaw = Number.parseInt(options.maxWrongAttempts, 10);
    const maxWrongAttempts = Number.isFinite(maxWrongAttemptsRaw) && maxWrongAttemptsRaw > 0
        ? maxWrongAttemptsRaw
        : Number.POSITIVE_INFINITY;

    clearMissionGameContent();
    const gameWrap = document.createElement('div');
    gameWrap.className = 'logic-game';
    const prompt = document.createElement('div');
    prompt.className = 'logic-prompt';
    const inputRow = document.createElement('div');
    inputRow.className = 'logic-input-row';
    const answerInput = document.createElement('input');
    answerInput.id = 'mission-game-answer-input';
    answerInput.type = 'text';
    answerInput.placeholder = 'Enter answer';
    const submitBtn = document.createElement('button');
    submitBtn.id = 'mission-game-submit-btn';
    submitBtn.type = 'button';
    submitBtn.textContent = 'Submit';
    const feedback = document.createElement('div');
    feedback.className = 'logic-feedback';
    inputRow.appendChild(answerInput);
    inputRow.appendChild(submitBtn);
    gameWrap.appendChild(prompt);
    gameWrap.appendChild(inputRow);
    gameWrap.appendChild(feedback);
    missionGameContent.appendChild(gameWrap);

    let ended = false;
    let index = 0;
    let wrongAttempts = 0;
    let timeLeft = hasTimer ? totalSeconds : 0;

    const buildStatus = () => {
        const prefix = typeof options.getStatusPrefix === 'function' ? options.getStatusPrefix() : '';
        const lead = prefix ? `${prefix} | ` : '';
        const puzzleLabel = `Puzzle ${Math.min(index + 1, puzzles.length)}/${puzzles.length}`;
        if (!hasTimer) return `${lead}${puzzleLabel}`;
        return `${lead}${puzzleLabel} | Time ${formatMissionTime(timeLeft)}`;
    };

    const finish = (passed, reason = '') => {
        if (ended || !runtime.active) return;
        ended = true;
        onComplete({
            passed,
            reason
        });
    };

    const renderPuzzle = () => {
        if (ended || !runtime.active) return;
        const current = puzzles[index];
        prompt.textContent = current.prompt;
        feedback.textContent = '';
        answerInput.value = '';
        setMissionGameStatus(buildStatus());
        answerInput.focus();
    };

    const isCorrectAnswer = (puzzle, value) => {
        if (typeof puzzle.validate === 'function') return puzzle.validate(value);
        return normalizeMissionAnswer(value) === normalizeMissionAnswer(puzzle.answer);
    };

    const submit = () => {
        if (ended || !runtime.active) return;
        const current = puzzles[index];
        const value = answerInput.value.trim();
        if (!value.length) {
            feedback.textContent = 'Enter an answer first.';
            return;
        }

        if (isCorrectAnswer(current, value)) {
            index++;
            if (index >= puzzles.length) {
                finish(true);
                return;
            }
            feedback.textContent = 'Correct. Next lock opened.';
            renderPuzzle();
            return;
        }

        wrongAttempts++;
        if (wrongAttempts >= maxWrongAttempts) {
            finish(false, 'Too many wrong answers');
            return;
        }
        feedback.textContent = `Wrong answer. Try again (${wrongAttempts}/${maxWrongAttempts === Number.POSITIVE_INFINITY ? 'INF' : maxWrongAttempts}).`;
        answerInput.focus();
        answerInput.select();
    };

    submitBtn.addEventListener('click', submit);
    answerInput.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter') return;
        event.preventDefault();
        submit();
    });

    if (hasTimer) {
        runtimeSetInterval(runtime, () => {
            if (ended || !runtime.active) return;
            timeLeft--;
            if (timeLeft <= 0) {
                timeLeft = 0;
                setMissionGameStatus(buildStatus());
                finish(false, 'Time limit reached');
                return;
            }
            setMissionGameStatus(buildStatus());
        }, 1000);
    }

    renderPuzzle();
}

function startMissionLevel1() {
    const runtime = openMissionGameWindow(
        1,
        'Level 1 - Quick Reflex Trial',
        'Easy | 30s timer | React in under 1.5s | Need 15 points'
    );
    if (!runtime) return;
    runReflexChallenge(runtime, {
        durationSec: 30,
        reactionMs: 1500,
        passScore: 15,
        minSpawnMs: 680,
        maxSpawnMs: 1060,
        hint: 'Tap the button that matches the flashing symbol.'
    }, (result) => {
        if (!result) return;
        if (result.passed) endMissionRun(1, true, `Reflex score ${result.score}/${result.passScore}`);
        else endMissionRun(1, false, `Reflex score ${result.score}/${result.passScore}. Need at least 15.`);
    });
}

function startMissionLevel2() {
    const runtime = openMissionGameWindow(
        2,
        'Level 2 - Memory Grid Challenge',
        'Medium | 4x4 grid | Pattern shown for 5s | Clear 3 rounds'
    );
    if (!runtime) return;
    runMemoryChallenge(runtime, {
        gridSize: 4,
        rounds: 3,
        baseLength: 5,
        roundIncrement: 1,
        showDurationMs: 5000,
        failOnMistake: false,
        hint: 'Repeat the highlighted tiles in exact order. One mistake resets the round.'
    }, (result) => {
        if (!result) return;
        if (result.passed) endMissionRun(2, true, 'All 3 rounds completed');
        else endMissionRun(2, false, result.reason || 'Memory challenge failed');
    });
}

function startMissionLevel3() {
    const runtime = openMissionGameWindow(
        3,
        'Level 3 - Logic Lock System',
        'Hard | Solve 3 puzzles in 5 minutes'
    );
    if (!runtime) return;
    runLogicChallenge(runtime, {
        totalSeconds: 300,
        puzzles: [
            {
                prompt: 'Math Lock: ((12 + 6) x 2) - 5 = ?',
                answer: '31'
            },
            {
                prompt: 'Pattern Lock: 2, 6, 12, 20, 30, ?',
                answer: '42'
            },
            {
                prompt: 'Code Lock: A1Z26 -> 11-9-20-19-21-14-5. Enter the word.',
                validate: (value) => normalizeMissionAnswer(value) === 'KITSUNE'
            }
        ]
    }, (result) => {
        if (!result) return;
        if (result.passed) endMissionRun(3, true, 'Digital vault unlocked');
        else endMissionRun(3, false, result.reason || 'Vault lock failed');
    });
}

function startMissionLevel4() {
    const runtime = openMissionGameWindow(
        4,
        'Level 4 - Elite Survival Gauntlet',
        'Extreme | 3 stages | 10-minute total timer | 2 mistakes max'
    );
    if (!runtime) return;

    const state = {
        stage: 1,
        mistakes: 0,
        totalTimeLeft: 600
    };

    const getPrefix = () => `Stage ${state.stage}/3 | Mistakes ${state.mistakes}/2 | Total ${formatMissionTime(state.totalTimeLeft)}`;

    runtimeSetInterval(runtime, () => {
        const active = getActiveMissionRuntime(4);
        if (!active || active.ended) return;
        state.totalTimeLeft--;
        if (state.totalTimeLeft <= 0) {
            state.totalTimeLeft = 0;
            endMissionRun(4, false, 'Time limit reached');
            return;
        }
        setMissionGameStatus(`${getPrefix()} | In progress`);
    }, 1000);

    const handleStageResult = (result) => {
        const active = getActiveMissionRuntime(4);
        if (!active || active.ended || !result) return;
        if (result.passed) {
            state.stage++;
            if (state.stage > 3) {
                endMissionRun(4, true, 'All stages cleared');
                return;
            }
            runtimeSetTimeout(runtime, launchStage, 640);
            return;
        }
        state.mistakes++;
        if (state.mistakes >= 2) {
            endMissionRun(4, false, 'Failed twice. Gauntlet restart required.');
            return;
        }
        setMissionGameStatus(`${getPrefix()} | Stage failed. One retry left.`);
        runtimeSetTimeout(runtime, launchStage, 900);
    };

    const launchStage = () => {
        const active = getActiveMissionRuntime(4);
        if (!active || active.ended) return;
        if (state.stage === 1) {
            runReflexChallenge(runtime, {
                durationSec: 20,
                reactionMs: 1000,
                passScore: 14,
                minSpawnMs: 420,
                maxSpawnMs: 760,
                getStatusPrefix: getPrefix,
                hint: 'Stage 1: Advanced Reflex. Faster symbols than Level 1.'
            }, handleStageResult);
            return;
        }
        if (state.stage === 2) {
            runMemoryChallenge(runtime, {
                gridSize: 6,
                rounds: 1,
                baseLength: 10,
                roundIncrement: 0,
                showDurationMs: 6000,
                failOnMistake: true,
                getStatusPrefix: getPrefix,
                hint: 'Stage 2: 6x6 Memory Grid. One mistake fails this stage.'
            }, handleStageResult);
            return;
        }
        runLogicChallenge(runtime, {
            totalSeconds: 0,
            maxWrongAttempts: 2,
            getStatusPrefix: getPrefix,
            puzzles: [
                {
                    prompt: 'Hidden Clue A: A1Z26 -> 11-9-20',
                    answer: 'KIT'
                },
                {
                    prompt: 'Hidden Clue B: Reverse the text "ENUS".',
                    answer: 'SUNE'
                },
                {
                    prompt: 'Final Tactical Code: Combine Clue A + Clue B.',
                    validate: (value) => normalizeMissionAnswer(value) === 'KITSUNE'
                }
            ]
        }, handleStageResult);
    };

    setMissionGameStatus(`${getPrefix()} | Initializing`);
    launchStage();
}

function launchMissionLevel(level) {
    if (level === 1) startMissionLevel1();
    else if (level === 2) startMissionLevel2();
    else if (level === 3) startMissionLevel3();
    else if (level === 4) startMissionLevel4();
}

function completeSelectedMission(level) {
    if (!requireUsername()) return;
    const parsedLevel = Number.parseInt(level, 10);
    if (!Number.isFinite(parsedLevel) || parsedLevel < 1 || parsedLevel > 4) return;

    const maxLevel = getMaxUnlockedMissionLevel();
    if (parsedLevel > maxLevel) {
        const requiredMh = getMissionRequiredMentalHealth(parsedLevel);
        typeText(`Mission Level ${parsedLevel} is locked. Reach ${requiredMh}% mental health.`);
        return;
    }
    hideMissionSelector();
    launchMissionLevel(parsedLevel);
}

function readAdminLayoutMap() {
    try {
        const raw = localStorage.getItem(ADMIN_LAYOUT_STORAGE_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
        return {};
    }
}

function writeAdminLayoutMap(map) {
    try {
        localStorage.setItem(ADMIN_LAYOUT_STORAGE_KEY, JSON.stringify(map));
    } catch {
        // Ignore storage write issues.
    }
}

function sanitizeAdminLayoutEntry(rawEntry) {
    if (!rawEntry || typeof rawEntry !== 'object') return null;
    const left = Number.parseFloat(rawEntry.left);
    const top = Number.parseFloat(rawEntry.top);
    const width = Number.parseFloat(rawEntry.width);
    if (!Number.isFinite(left) || !Number.isFinite(top)) return null;
    return {
        left: Math.round(left),
        top: Math.round(top),
        width: Number.isFinite(width) && width > 0 ? Math.round(width) : null
    };
}

function getAdminDraggableElements() {
    return ADMIN_DRAGGABLE_TARGETS
        .map(({ id, selector }) => {
            const element = document.querySelector(selector);
            if (!element) return null;
            return { id, element };
        })
        .filter(Boolean);
}

function initializeAdminDragTargets() {
    getAdminDraggableElements().forEach(({ id, element }) => {
        element.dataset.adminDragId = id;
        element.classList.add('admin-draggable-target');
    });
}

function clampDragCoordinates(element, left, top) {
    const inlineWidth = Number.parseFloat(element.style.width);
    const inlineHeight = Number.parseFloat(element.style.height);
    const width = Math.max(
        40,
        Math.round(element.offsetWidth || (Number.isFinite(inlineWidth) ? inlineWidth : 0))
    );
    const height = Math.max(
        30,
        Math.round(element.offsetHeight || (Number.isFinite(inlineHeight) ? inlineHeight : 0))
    );
    const maxLeft = Math.max(0, window.innerWidth - width);
    const maxTop = Math.max(0, window.innerHeight - height);
    return {
        left: Math.min(maxLeft, Math.max(0, Math.round(left))),
        top: Math.min(maxTop, Math.max(0, Math.round(top)))
    };
}

function applyFixedDragLayout(element, left, top, width) {
    if (!element) return;
    const safeWidth = Number.isFinite(width) && width > 0 ? Math.round(width) : null;
    element.style.position = 'fixed';
    element.style.left = `${Math.round(left)}px`;
    element.style.top = `${Math.round(top)}px`;
    element.style.right = 'auto';
    element.style.bottom = 'auto';
    element.style.margin = '0';
    if (safeWidth !== null) {
        element.style.width = `${safeWidth}px`;
        element.style.maxWidth = 'none';
    }
    element.style.transform = 'none';
}

function prepareElementForDragging(element) {
    const rect = element.getBoundingClientRect();
    const computedZ = Number.parseInt(window.getComputedStyle(element).zIndex, 10);
    if (!element.dataset.adminDragBaseZ) {
        element.dataset.adminDragBaseZ = Number.isFinite(computedZ) ? String(computedZ) : '1200';
    }
    applyFixedDragLayout(element, rect.left, rect.top, rect.width);
    element.style.zIndex = '2600';
}

function persistDraggedElementLayout(element) {
    const dragId = element ? element.dataset.adminDragId : '';
    if (!dragId) return;
    const map = readAdminLayoutMap();
    const rect = element.getBoundingClientRect();
    map[dragId] = {
        left: Math.round(rect.left),
        top: Math.round(rect.top),
        width: Math.round(rect.width)
    };
    writeAdminLayoutMap(map);
}

function restoreAdminLayout() {
    const map = readAdminLayoutMap();
    let changed = false;
    getAdminDraggableElements().forEach(({ id, element }) => {
        const entry = sanitizeAdminLayoutEntry(map[id]);
        if (!entry) return;
        applyFixedDragLayout(element, entry.left, entry.top, entry.width);
        const clamped = clampDragCoordinates(element, entry.left, entry.top);
        element.style.left = `${clamped.left}px`;
        element.style.top = `${clamped.top}px`;
        if (clamped.left !== entry.left || clamped.top !== entry.top) {
            map[id] = {
                left: clamped.left,
                top: clamped.top,
                width: Math.round(element.getBoundingClientRect().width)
            };
            changed = true;
        }
    });
    if (changed) writeAdminLayoutMap(map);
}

function syncAdminDragPrivilegeState() {
    const allowDrag = isAdminUser();
    document.body.classList.toggle('admin-draggable-enabled', allowDrag);
    if (!allowDrag) {
        cancelPendingAdminDragHold();
        endActiveAdminDrag({ persist: true });
    }
}

function resolveAdminDragTarget(target) {
    if (!(target instanceof Element)) return null;
    const draggable = target.closest('.admin-draggable-target');
    if (!draggable || draggable.classList.contains('hidden')) return null;
    return draggable;
}

function isInteractiveDragChild(target, draggableRoot) {
    if (!(target instanceof Element) || !(draggableRoot instanceof Element)) return false;
    const interactive = target.closest(ADMIN_DRAG_INTERACTIVE_SELECTOR);
    return Boolean(interactive && draggableRoot.contains(interactive));
}

function cancelPendingAdminDragHold() {
    if (!pendingAdminDragHold) return;
    clearTimeout(pendingAdminDragHold.timerId);
    pendingAdminDragHold.element.classList.remove('drag-hold-pending');
    pendingAdminDragHold = null;
}

function moveActiveAdminDrag(clientX, clientY) {
    if (!activeAdminDrag) return;
    const left = clientX - activeAdminDrag.offsetX;
    const top = clientY - activeAdminDrag.offsetY;
    const clamped = clampDragCoordinates(activeAdminDrag.element, left, top);
    activeAdminDrag.element.style.left = `${clamped.left}px`;
    activeAdminDrag.element.style.top = `${clamped.top}px`;
}

function beginAdminDragFromHold() {
    if (!pendingAdminDragHold || !isAdminUser()) {
        cancelPendingAdminDragHold();
        return;
    }
    const holdState = pendingAdminDragHold;
    clearTimeout(holdState.timerId);
    pendingAdminDragHold = null;
    holdState.element.classList.remove('drag-hold-pending');
    prepareElementForDragging(holdState.element);
    activeAdminDrag = {
        pointerId: holdState.pointerId,
        element: holdState.element,
        offsetX: holdState.offsetX,
        offsetY: holdState.offsetY
    };
    holdState.element.classList.add('dragging');
    try {
        holdState.element.setPointerCapture(holdState.pointerId);
    } catch {
        // Ignore capture issues.
    }
    moveActiveAdminDrag(holdState.lastClientX, holdState.lastClientY);
}

function endActiveAdminDrag({ persist = true } = {}) {
    if (!activeAdminDrag) return;
    const { element, pointerId } = activeAdminDrag;
    if (persist) persistDraggedElementLayout(element);
    element.classList.remove('dragging');
    const baseZ = Number.parseInt(element.dataset.adminDragBaseZ, 10);
    if (Number.isFinite(baseZ)) element.style.zIndex = String(baseZ);
    else element.style.removeProperty('z-index');
    try {
        if (element.hasPointerCapture(pointerId)) element.releasePointerCapture(pointerId);
    } catch {
        // Ignore release issues.
    }
    activeAdminDrag = null;
}

function handleAdminDragPointerDown(event) {
    if (!isAdminUser()) return;
    if (event.isPrimary === false) return;
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    const draggable = resolveAdminDragTarget(event.target);
    if (!draggable) return;
    if (isInteractiveDragChild(event.target, draggable)) return;
    cancelPendingAdminDragHold();
    if (activeAdminDrag) endActiveAdminDrag({ persist: true });

    const rect = draggable.getBoundingClientRect();
    pendingAdminDragHold = {
        pointerId: event.pointerId,
        element: draggable,
        startX: event.clientX,
        startY: event.clientY,
        lastClientX: event.clientX,
        lastClientY: event.clientY,
        offsetX: event.clientX - rect.left,
        offsetY: event.clientY - rect.top,
        timerId: window.setTimeout(beginAdminDragFromHold, ADMIN_DRAG_HOLD_MS)
    };
    draggable.classList.add('drag-hold-pending');
}

function handleAdminDragPointerMove(event) {
    if (pendingAdminDragHold && event.pointerId === pendingAdminDragHold.pointerId) {
        pendingAdminDragHold.lastClientX = event.clientX;
        pendingAdminDragHold.lastClientY = event.clientY;
        const deltaX = event.clientX - pendingAdminDragHold.startX;
        const deltaY = event.clientY - pendingAdminDragHold.startY;
        if (Math.hypot(deltaX, deltaY) > ADMIN_DRAG_CANCEL_DISTANCE) {
            cancelPendingAdminDragHold();
        }
    }

    if (!activeAdminDrag || event.pointerId !== activeAdminDrag.pointerId) return;
    event.preventDefault();
    moveActiveAdminDrag(event.clientX, event.clientY);
}

function handleAdminDragPointerEnd(event) {
    if (pendingAdminDragHold && event.pointerId === pendingAdminDragHold.pointerId) {
        cancelPendingAdminDragHold();
        return;
    }
    if (!activeAdminDrag || event.pointerId !== activeAdminDrag.pointerId) return;
    event.preventDefault();
    endActiveAdminDrag({ persist: true });
}

function bindAdminDragEvents() {
    if (adminDragEventsBound) return;
    adminDragEventsBound = true;
    document.addEventListener('pointerdown', handleAdminDragPointerDown, true);
    document.addEventListener('pointermove', handleAdminDragPointerMove, { capture: true, passive: false });
    document.addEventListener('pointerup', handleAdminDragPointerEnd, true);
    document.addEventListener('pointercancel', handleAdminDragPointerEnd, true);
    window.addEventListener('blur', () => {
        cancelPendingAdminDragHold();
        endActiveAdminDrag({ persist: true });
    });
    window.addEventListener('resize', () => {
        if (!activeAdminDrag) restoreAdminLayout();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        cancelPendingAdminDragHold();
        endActiveAdminDrag({ persist: true });
    }, true);
}

function initAdminDragSystem() {
    try {
        localStorage.removeItem(ADMIN_LAYOUT_STORAGE_KEY);
    } catch {
        // Ignore storage cleanup errors.
    }
    document.body.classList.remove('admin-draggable-enabled');
    ADMIN_DRAGGABLE_TARGETS.forEach(({ selector }) => {
        const element = document.querySelector(selector);
        if (!element) return;
        element.removeAttribute('data-admin-drag-id');
        element.classList.remove('admin-draggable-target', 'drag-hold-pending', 'dragging');
        element.style.removeProperty('position');
        element.style.removeProperty('left');
        element.style.removeProperty('top');
        element.style.removeProperty('right');
        element.style.removeProperty('bottom');
        element.style.removeProperty('margin');
        element.style.removeProperty('width');
        element.style.removeProperty('max-width');
        element.style.removeProperty('transform');
        element.style.removeProperty('z-index');
    });
}

function normalizeAdminName(name = userProfile.username) {
    return String(name || '').trim().toUpperCase();
}

function getDefaultAdminSecurityState() {
    return {
        failedAttempts: 0,
        allowedAttempts: ADMIN_INITIAL_MAX_ATTEMPTS,
        totalFailedAttempts: 0,
        lockMultiplier: 1,
        lockedUntil: 0,
        permanentlyLocked: false
    };
}

function sanitizeAdminSecurityState(rawState = {}) {
    const defaults = getDefaultAdminSecurityState();
    const failedAttempts = Math.max(0, Number.parseInt(rawState.failedAttempts, 10) || 0);
    const allowedAttemptsRaw = Number.parseInt(rawState.allowedAttempts, 10);
    const allowedAttempts = Number.isNaN(allowedAttemptsRaw)
        ? defaults.allowedAttempts
        : Math.max(ADMIN_MIN_MAX_ATTEMPTS, Math.min(ADMIN_INITIAL_MAX_ATTEMPTS, allowedAttemptsRaw));
    const totalFailedAttempts = Math.max(0, Number.parseInt(rawState.totalFailedAttempts, 10) || 0);
    const lockMultiplier = Math.max(1, Number.parseInt(rawState.lockMultiplier, 10) || 1);
    const lockedUntil = Math.max(0, Number.parseInt(rawState.lockedUntil, 10) || 0);
    const permanentlyLocked = Boolean(rawState.permanentlyLocked);

    return {
        failedAttempts: Math.min(failedAttempts, allowedAttempts),
        allowedAttempts,
        totalFailedAttempts,
        lockMultiplier,
        lockedUntil,
        permanentlyLocked
    };
}

function readAdminSecurityMap() {
    try {
        const raw = localStorage.getItem(ADMIN_SECURITY_STORAGE_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
        return {};
    }
}

function writeAdminSecurityMap(map) {
    try {
        localStorage.setItem(ADMIN_SECURITY_STORAGE_KEY, JSON.stringify(map));
    } catch {
        // Ignore storage errors and continue with in-memory behavior.
    }
}

function applyAdminSecurityStateFor(name = userProfile.username) {
    if (!isAdminName(name)) {
        adminFailedAttempts = 0;
        adminAllowedAttempts = ADMIN_INITIAL_MAX_ATTEMPTS;
        adminTotalFailedAttempts = 0;
        adminLockedUntil = 0;
        adminLockMultiplier = 1;
        adminPermanentlyLocked = false;
        stopAdminLockTicker();
        return;
    }
    const key = normalizeAdminName(name);
    const map = readAdminSecurityMap();
    const state = sanitizeAdminSecurityState(map[key]);
    adminFailedAttempts = state.failedAttempts;
    adminAllowedAttempts = state.allowedAttempts;
    adminTotalFailedAttempts = state.totalFailedAttempts;
    adminLockedUntil = state.lockedUntil;
    adminLockMultiplier = state.lockMultiplier;
    adminPermanentlyLocked = state.permanentlyLocked;
    if (adminPermanentlyLocked) isAdminVerified = false;
}

function persistAdminSecurityStateFor(name = userProfile.username) {
    if (!isAdminName(name)) return;
    const key = normalizeAdminName(name);
    const map = readAdminSecurityMap();
    map[key] = sanitizeAdminSecurityState({
        failedAttempts: adminFailedAttempts,
        allowedAttempts: adminAllowedAttempts,
        totalFailedAttempts: adminTotalFailedAttempts,
        lockMultiplier: adminLockMultiplier,
        lockedUntil: adminLockedUntil,
        permanentlyLocked: adminPermanentlyLocked
    });
    writeAdminSecurityMap(map);
}

function getAdminPasswordFor(name = userProfile.username) {
    const normalized = normalizeAdminName(name);
    return ADMIN_CREDENTIALS[normalized] || null;
}

function isAdminName(name = userProfile.username) {
    return Boolean(getAdminPasswordFor(name));
}

function isAdminUser() {
    return hasUsername() && isAdminName() && isAdminVerified;
}

function isAdminAuthLocked() {
    return !adminPermanentlyLocked && Date.now() < adminLockedUntil;
}

function isAdminAccountLocked() {
    return adminPermanentlyLocked || isAdminAuthLocked();
}

function getAdminLockSecondsLeft() {
    return Math.max(0, Math.ceil((adminLockedUntil - Date.now()) / 1000));
}

function getAdminAttemptsLeft() {
    return Math.max(0, adminAllowedAttempts - adminFailedAttempts);
}

function getAdminRemainingBeforePermanentLock() {
    return Math.max(0, ADMIN_ACCOUNT_LOCK_THRESHOLD - adminTotalFailedAttempts);
}

function stopAdminLockTicker() {
    if (!adminLockTicker) return;
    clearInterval(adminLockTicker);
    adminLockTicker = null;
}

function updateAdminAuthLockUi() {
    const locked = isAdminAuthLocked();
    const secondsLeft = getAdminLockSecondsLeft();
    const permanentlyLocked = adminPermanentlyLocked;
    const remainingBeforePermanent = getAdminRemainingBeforePermanentLock();

    if (adminPasswordInput) adminPasswordInput.disabled = locked || permanentlyLocked;
    if (verifyAdminBtn) {
        verifyAdminBtn.disabled = locked || permanentlyLocked;
        if (permanentlyLocked) verifyAdminBtn.textContent = 'Account Locked';
        else verifyAdminBtn.textContent = locked ? `Locked (${secondsLeft}s)` : 'Verify Password';
    }
    if (adminRecoveryWrap) {
        if (permanentlyLocked) adminRecoveryWrap.classList.remove('hidden');
        else adminRecoveryWrap.classList.add('hidden');
    }
    if (verifyRecoveryBtn) verifyRecoveryBtn.disabled = !permanentlyLocked;
    if (adminRecoveryInput) adminRecoveryInput.disabled = !permanentlyLocked;

    if (adminAuthHint) {
        if (permanentlyLocked) {
            adminAuthHint.textContent = 'Account permanently locked. Verify the required recovery ID.';
        } else if (locked) {
            adminAuthHint.textContent = `Too many attempts. Retry in ${secondsLeft}s.`;
        } else {
            adminAuthHint.textContent = `Required only for admin accounts (${adminAllowedAttempts} attempt max, ${remainingBeforePermanent} before permanent lock)`;
        }
    }

}

function startAdminLockTicker() {
    if (adminPermanentlyLocked || !isAdminAuthLocked()) {
        stopAdminLockTicker();
        updateAdminAuthLockUi();
        return;
    }
    updateAdminAuthLockUi();
    if (adminLockTicker) return;

    adminLockTicker = setInterval(() => {
        if (adminPermanentlyLocked || !isAdminAuthLocked()) {
            stopAdminLockTicker();
        }
        updateAdminAuthLockUi();
    }, 250);
}

function triggerAdminLockout() {
    const lockDurationMs = ADMIN_BASE_LOCK_MS * adminLockMultiplier;
    adminLockMultiplier *= 2;
    adminFailedAttempts = 0;
    adminAllowedAttempts = Math.max(ADMIN_MIN_MAX_ATTEMPTS, adminAllowedAttempts - 1);
    adminLockedUntil = Date.now() + lockDurationMs;
    startAdminLockTicker();
    return lockDurationMs;
}

function syncAdminPanelFromProfile() {
    if (!adminPanel) return;
    if (adminUsernameInput) adminUsernameInput.value = userProfile.username;
    if (adminLevelInput) adminLevelInput.value = String(userProfile.level);
    if (adminExpInput) adminExpInput.value = String(userProfile.exp);
    if (adminRankInput) adminRankInput.value = adminCustomRank || userProfile.rank;
    if (adminMHInput) adminMHInput.value = String(userProfile.mentalHealth);
}

function updateAdminToggleButton() {
    if (!adminToggleBtn) return;
    adminToggleBtn.textContent = isAdminPanelHiddenByUser ? 'Show Admin Panel' : 'Hide Admin Panel';
}

function showAdminPasswordPanel() {
    if (!adminAuthPanel) return;
    applyAdminSecurityStateFor();
    showWithAnimation(adminAuthPanel, 'ui-enter-rise');
    updateAdminAuthLockUi();
    if (isAdminAuthLocked()) {
        startAdminLockTicker();
        return;
    }
    if (adminPermanentlyLocked) {
        setTimeout(() => {
            if (adminRecoveryInput) adminRecoveryInput.focus();
        }, 60);
        return;
    }
    setTimeout(() => {
        if (adminPasswordInput) adminPasswordInput.focus();
    }, 60);
}

function hideAdminPasswordPanel() {
    if (!adminAuthPanel) return;
    hideWithAnimation(adminAuthPanel, 'ui-exit-drop');
    if (adminPasswordInput) adminPasswordInput.value = '';
    if (adminRecoveryInput) adminRecoveryInput.value = '';
}

function verifyAdminPassword() {
    if (!isAdminName()) {
        hideAdminPasswordPanel();
        return;
    }
    applyAdminSecurityStateFor();
    if (adminPermanentlyLocked) {
        updateAdminAuthLockUi();
        typeText('Admin account is permanently locked. Verify recovery ID to unlock.');
        return;
    }
    if (isAdminAuthLocked()) {
        startAdminLockTicker();
        typeText(`Admin verification locked. Try again in ${getAdminLockSecondsLeft()}s.`);
        return;
    }

    const entered = adminPasswordInput ? adminPasswordInput.value.trim() : '';
    const expectedPassword = getAdminPasswordFor();
    if (!expectedPassword || entered !== expectedPassword) {
        isAdminVerified = false;
        adminFailedAttempts++;
        adminTotalFailedAttempts++;

        if (adminTotalFailedAttempts >= ADMIN_ACCOUNT_LOCK_THRESHOLD) {
            adminPermanentlyLocked = true;
            adminLockedUntil = 0;
            adminFailedAttempts = 0;
            persistAdminSecurityStateFor();
            stopAdminLockTicker();
            updateAdminAuthLockUi();
            updateRank();
            renderProfile();
            unlockFeatures();
            typeText('Admin account permanently locked. Verify recovery ID to unlock.');
            return;
        }

        updateRank();
        renderProfile();
        unlockFeatures();

        if (adminFailedAttempts >= adminAllowedAttempts) {
            const lockDuration = triggerAdminLockout();
            persistAdminSecurityStateFor();
            if (adminPasswordInput) adminPasswordInput.value = '';
            typeText(`Too many wrong attempts. Locked for ${Math.ceil(lockDuration / 1000)}s.`);
            return;
        }

        persistAdminSecurityStateFor();
        const attemptsLeft = getAdminAttemptsLeft();
        typeText(`Access denied. Wrong admin password. ${attemptsLeft} attempt(s) left.`);
        if (adminPasswordInput) {
            adminPasswordInput.focus();
            adminPasswordInput.select();
        }
        return;
    }

    isAdminVerified = true;
    adminFailedAttempts = 0;
    adminLockedUntil = 0;
    persistAdminSecurityStateFor();
    updateAdminAuthLockUi();
    hideAdminPasswordPanel();
    updateRank();
    renderProfile();
    unlockFeatures();
    typeText('ADMIN ACCESS GRANTED: Full control enabled.');
}

function verifyRecoveryId() {
    if (!isAdminName()) return;
    applyAdminSecurityStateFor();
    if (!adminPermanentlyLocked) {
        typeText('Recovery ID is only needed for permanently locked admin accounts.');
        return;
    }

    const entered = adminRecoveryInput ? adminRecoveryInput.value.trim() : '';
    if (entered !== ADMIN_RECOVERY_ID) {
        typeText('Invalid recovery ID.');
        if (adminRecoveryInput) {
            adminRecoveryInput.focus();
            adminRecoveryInput.select();
        }
        return;
    }

    adminPermanentlyLocked = false;
    isAdminVerified = false;
    adminFailedAttempts = 0;
    adminAllowedAttempts = ADMIN_INITIAL_MAX_ATTEMPTS;
    adminTotalFailedAttempts = 0;
    adminLockedUntil = 0;
    adminLockMultiplier = 1;
    stopAdminLockTicker();
    persistAdminSecurityStateFor();
    updateAdminAuthLockUi();
    if (adminRecoveryInput) adminRecoveryInput.value = '';
    if (adminPasswordInput) {
        adminPasswordInput.value = '';
        adminPasswordInput.focus();
    }
    typeText('Admin account unlocked. Enter password again.');
}

function toggleAdminPanel() {
    if (!adminPanel) return;
    if (isAdminUser()) {
        if (adminToggleBtn) showWithAnimation(adminToggleBtn, 'ui-enter-fade');
        updateAdminToggleButton();
        if (isAdminPanelHiddenByUser) {
            hideWithAnimation(adminPanel, 'ui-exit-slide-left');
            return;
        }
        syncAdminPanelFromProfile();
        showWithAnimation(adminPanel, 'ui-enter-slide-left');
    } else {
        isAdminPanelHiddenByUser = false;
        hideWithAnimation(adminPanel, 'ui-exit-slide-left');
        if (adminToggleBtn) hideWithAnimation(adminToggleBtn, 'ui-exit-fade');
        updateAdminToggleButton();
    }
}

function toggleAdminPanelVisibility() {
    if (!isAdminUser()) return;
    isAdminPanelHiddenByUser = !isAdminPanelHiddenByUser;
    toggleAdminPanel();
}

function parseIntSafe(value, fallback, min, max) {
    const parsed = Number.parseInt(value, 10);
    if (Number.isNaN(parsed)) return fallback;
    if (typeof min === 'number' && parsed < min) return min;
    if (typeof max === 'number' && parsed > max) return max;
    return parsed;
}

/* ================== Auto Bug Fix API ================== */
const AUTO_BUG_FIX_INTERVAL_MS = 8000;
let autoBugFixTimer = null;
let autoBugFixIntervalMs = AUTO_BUG_FIX_INTERVAL_MS;
const BUG_REPORT_STORAGE_KEY = 'kitsune_bug_reports_v1';
const BUG_REPORT_LIMIT = 120;
let bugReports = [];
let bugReportCounter = 0;
let bugReporterAutoCaptureEnabled = false;
let bugReporterErrorHandler = null;
let bugReporterRejectionHandler = null;
let bugReporterReentryGuard = false;

function runAutoBugFix({ silent = true } = {}) {
    const fixes = [];

    // Normalize username to a safe string.
    if (typeof userProfile.username !== 'string') {
        userProfile.username = String(userProfile.username ?? '');
        fixes.push('Normalized username type');
    }
    const trimmedUsername = userProfile.username.trim();
    if (trimmedUsername !== userProfile.username) {
        userProfile.username = trimmedUsername;
        fixes.push('Trimmed username');
    }
    if (isAdminName(userProfile.username)) applyAdminSecurityStateFor(userProfile.username);
    else applyAdminSecurityStateFor('');
    if (!isAdminName(userProfile.username) && isAdminVerified) {
        isAdminVerified = false;
        fixes.push('Reset stale admin verification');
    }
    if (!isAdminName(userProfile.username) && adminAuthPanel && !adminAuthPanel.classList.contains('hidden')) {
        hideAdminPasswordPanel();
        fixes.push('Closed admin password panel');
    }
    if (!isAdminAuthLocked()) stopAdminLockTicker();
    updateAdminAuthLockUi();

    // Normalize level/exp/mental health bounds.
    const safeLevel = Number.isFinite(userProfile.level) ? Math.floor(userProfile.level) : 1;
    if (userProfile.level !== safeLevel || userProfile.level < 1) {
        userProfile.level = Math.max(1, safeLevel || 1);
        fixes.push('Fixed invalid level');
    }

    const safeExp = Number.isFinite(userProfile.exp) ? Math.floor(userProfile.exp) : 0;
    if (userProfile.exp !== safeExp || userProfile.exp < 0) {
        userProfile.exp = Math.max(0, safeExp || 0);
        fixes.push('Fixed invalid exp');
    }

    const safeMh = Number.isFinite(userProfile.mentalHealth) ? Math.floor(userProfile.mentalHealth) : 0;
    const clampedMh = Math.max(0, Math.min(100, safeMh));
    if (userProfile.mentalHealth !== clampedMh) {
        userProfile.mentalHealth = clampedMh;
        fixes.push('Clamped mental health');
    }

    // Carry overflow EXP into proper level-ups.
    let leveledFromOverflow = false;
    while (userProfile.exp >= userProfile.level * 100) {
        userProfile.exp -= userProfile.level * 100;
        userProfile.level++;
        leveledFromOverflow = true;
    }
    if (leveledFromOverflow) fixes.push('Resolved exp overflow');

    // Keep admin/non-admin rank logic consistent.
    if (!isAdminUser() && adminCustomRank) {
        adminCustomRank = '';
        fixes.push('Cleared admin-only rank override');
    }
    updateRank();

    // Sync control accessibility with current state.
    const usernameReady = hasUsername();
    lockedControls.forEach((btn) => {
        if (!btn) return;
        const shouldDisable = !usernameReady;
        if (btn.disabled !== shouldDisable && btn !== increaseBtn && btn !== missionsBtn) {
            btn.disabled = shouldDisable;
            fixes.push('Synced control lock state');
        }
    });

    if (increaseBtn) {
        const shouldDisableMh = !usernameReady || (!isAdminUser() && !hasBrain);
        if (increaseBtn.disabled !== shouldDisableMh) {
            increaseBtn.disabled = shouldDisableMh;
            fixes.push('Synced MH button state');
        }
    }

    if (missionsBtn) {
        const shouldDisableMissions = !usernameReady || getMaxUnlockedMissionLevel() <= 0;
        if (missionsBtn.disabled !== shouldDisableMissions) {
            missionsBtn.disabled = shouldDisableMissions;
            fixes.push('Synced Missions button state');
        }
    }
    if ((!usernameReady || getMaxUnlockedMissionLevel() <= 0) && activeMissionGame) {
        closeMissionGameWindow({ silent: true });
        fixes.push('Closed inaccessible mission game');
    }

    // Keep admin surfaces in sync.
    toggleAdminPanel();
    updateMissionSelectorAvailability();
    renderProfile();
    updateMHBar();

    if (!silent && fixes.length > 0) {
        typeText(`Auto Bug Fix API: ${fixes.join(' | ')}`);
    }

    return {
        fixedCount: fixes.length,
        fixes
    };
}

const autoBugFixAPI = {
    run(options = {}) {
        return runAutoBugFix(options);
    },
    start(intervalMs = AUTO_BUG_FIX_INTERVAL_MS) {
        const parsedInterval = Number.parseInt(intervalMs, 10);
        autoBugFixIntervalMs = Number.isNaN(parsedInterval) ? AUTO_BUG_FIX_INTERVAL_MS : Math.max(1000, parsedInterval);
        if (autoBugFixTimer) clearInterval(autoBugFixTimer);
        autoBugFixTimer = setInterval(() => {
            runAutoBugFix({ silent: true });
        }, autoBugFixIntervalMs);
        return this.status();
    },
    stop() {
        if (autoBugFixTimer) clearInterval(autoBugFixTimer);
        autoBugFixTimer = null;
        return this.status();
    },
    status() {
        return {
            running: Boolean(autoBugFixTimer),
            intervalMs: autoBugFixIntervalMs
        };
    }
};

window.autoBugFixAPI = autoBugFixAPI;

function safeSerializeBugDetails(value) {
    if (typeof value === 'undefined') return '';
    try {
        return JSON.parse(JSON.stringify(value));
    } catch {
        return String(value);
    }
}

function sanitizeBugReportEntry(rawEntry) {
    if (!rawEntry || typeof rawEntry !== 'object') return null;
    const id = Math.max(1, Number.parseInt(rawEntry.id, 10) || 0);
    const timestamp = typeof rawEntry.timestamp === 'string' && rawEntry.timestamp
        ? rawEntry.timestamp
        : new Date().toISOString();
    const message = typeof rawEntry.message === 'string' && rawEntry.message.trim()
        ? rawEntry.message.trim()
        : 'Unspecified bug report';
    const source = typeof rawEntry.source === 'string' && rawEntry.source.trim()
        ? rawEntry.source.trim()
        : 'manual';
    const severity = typeof rawEntry.severity === 'string' && rawEntry.severity.trim()
        ? rawEntry.severity.trim().toUpperCase()
        : 'MEDIUM';
    const details = safeSerializeBugDetails(rawEntry.details);
    const profile = rawEntry.profile && typeof rawEntry.profile === 'object'
        ? safeSerializeBugDetails(rawEntry.profile)
        : {};
    const autoFix = rawEntry.autoFix && typeof rawEntry.autoFix === 'object'
        ? {
            fixedCount: Math.max(0, Number.parseInt(rawEntry.autoFix.fixedCount, 10) || 0),
            fixes: Array.isArray(rawEntry.autoFix.fixes) ? rawEntry.autoFix.fixes.slice(0, 50) : [],
            ranAt: typeof rawEntry.autoFix.ranAt === 'string' ? rawEntry.autoFix.ranAt : ''
        }
        : null;

    return {
        id,
        timestamp,
        source,
        severity,
        message,
        details,
        profile,
        autoFix
    };
}

function readBugReportsFromStorage() {
    try {
        const raw = localStorage.getItem(BUG_REPORT_STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
            .map(sanitizeBugReportEntry)
            .filter(Boolean)
            .slice(-BUG_REPORT_LIMIT);
    } catch {
        return [];
    }
}

function writeBugReportsToStorage() {
    try {
        const trimmed = bugReports.slice(-BUG_REPORT_LIMIT);
        localStorage.setItem(BUG_REPORT_STORAGE_KEY, JSON.stringify(trimmed));
    } catch {
        // Ignore storage errors.
    }
}

function getBugReportProfileSnapshot() {
    return {
        username: userProfile.username || '',
        level: userProfile.level,
        exp: userProfile.exp,
        rank: userProfile.rank,
        mentalHealth: userProfile.mentalHealth,
        hasBrain,
        isAdminVerified,
        maxUnlockedMissionLevel: getMaxUnlockedMissionLevel(),
        activeMissionLevel: activeMissionGame ? activeMissionGame.level : null
    };
}

function normalizeBugReportPayload(input) {
    if (typeof input === 'string') {
        return {
            message: input,
            source: 'manual',
            severity: 'MEDIUM',
            details: {}
        };
    }

    if (input instanceof Error) {
        return {
            message: input.message || input.name || 'Error object reported',
            source: 'error-object',
            severity: 'HIGH',
            details: {
                name: input.name || 'Error',
                stack: input.stack || ''
            }
        };
    }

    if (input && typeof input === 'object') {
        const payload = input;
        return {
            message: typeof payload.message === 'string' && payload.message.trim()
                ? payload.message.trim()
                : 'Unspecified bug report',
            source: typeof payload.source === 'string' && payload.source.trim()
                ? payload.source.trim()
                : 'manual',
            severity: typeof payload.severity === 'string' && payload.severity.trim()
                ? payload.severity.trim().toUpperCase()
                : 'MEDIUM',
            details: typeof payload.details !== 'undefined' ? payload.details : payload
        };
    }

    return {
        message: 'Unknown bug report payload',
        source: 'manual',
        severity: 'LOW',
        details: { payloadType: typeof input }
    };
}

function pushBugReportEntry(entry) {
    bugReports.push(entry);
    if (bugReports.length > BUG_REPORT_LIMIT) {
        bugReports = bugReports.slice(-BUG_REPORT_LIMIT);
    }
    writeBugReportsToStorage();
}

function reportBugToAutoFix(input, options = {}) {
    const normalized = normalizeBugReportPayload(input);
    bugReportCounter++;

    const entry = sanitizeBugReportEntry({
        id: bugReportCounter,
        timestamp: new Date().toISOString(),
        source: normalized.source,
        severity: normalized.severity,
        message: normalized.message,
        details: normalized.details,
        profile: getBugReportProfileSnapshot(),
        autoFix: null
    });
    if (!entry) return { report: null, fixResult: null };
    pushBugReportEntry(entry);

    let fixResult = null;
    const shouldAutoFix = options.autoFix !== false;
    if (shouldAutoFix) {
        const fixSilent = options.fixSilent !== false;
        fixResult = autoBugFixAPI.run({ silent: fixSilent });
        entry.autoFix = {
            fixedCount: fixResult.fixedCount,
            fixes: Array.isArray(fixResult.fixes) ? fixResult.fixes.slice(0, 50) : [],
            ranAt: new Date().toISOString()
        };
        writeBugReportsToStorage();
    }

    if (!options.silent) {
        const fixedCount = fixResult ? fixResult.fixedCount : 0;
        typeText(`Bug Reporter API: Report #${entry.id} logged. Auto fix ran (${fixedCount} fix(es)).`);
    }

    return {
        report: entry,
        fixResult
    };
}

function reportRuntimeBug(input) {
    if (bugReporterReentryGuard) return null;
    bugReporterReentryGuard = true;
    try {
        return reportBugToAutoFix(input, {
            silent: true,
            autoFix: true,
            fixSilent: true
        });
    } finally {
        bugReporterReentryGuard = false;
    }
}

function enableBugReporterAutoCapture() {
    if (bugReporterAutoCaptureEnabled) return;

    bugReporterErrorHandler = (event) => {
        try {
            const message = event && typeof event.message === 'string' && event.message.trim()
                ? event.message.trim()
                : 'Unhandled runtime error';
            reportRuntimeBug({
                source: 'window.error',
                severity: 'HIGH',
                message,
                details: {
                    filename: event ? event.filename || '' : '',
                    line: event ? event.lineno || 0 : 0,
                    column: event ? event.colno || 0 : 0,
                    stack: event && event.error ? String(event.error.stack || '') : ''
                }
            });
        } catch {
            // Ignore reporter handler errors.
        }
    };

    bugReporterRejectionHandler = (event) => {
        try {
            const reason = event ? event.reason : '';
            let message = 'Unhandled promise rejection';
            let details = {};

            if (reason instanceof Error) {
                message = reason.message || message;
                details = {
                    name: reason.name || 'Error',
                    stack: reason.stack || ''
                };
            } else if (typeof reason === 'string') {
                message = reason;
                details = { reason };
            } else {
                details = safeSerializeBugDetails(reason);
            }

            reportRuntimeBug({
                source: 'window.unhandledrejection',
                severity: 'HIGH',
                message,
                details
            });
        } catch {
            // Ignore reporter handler errors.
        }
    };

    window.addEventListener('error', bugReporterErrorHandler);
    window.addEventListener('unhandledrejection', bugReporterRejectionHandler);
    bugReporterAutoCaptureEnabled = true;
}

function disableBugReporterAutoCapture() {
    if (!bugReporterAutoCaptureEnabled) return;
    if (bugReporterErrorHandler) window.removeEventListener('error', bugReporterErrorHandler);
    if (bugReporterRejectionHandler) window.removeEventListener('unhandledrejection', bugReporterRejectionHandler);
    bugReporterErrorHandler = null;
    bugReporterRejectionHandler = null;
    bugReporterAutoCaptureEnabled = false;
}

function getBugReporterStatus() {
    return {
        reportCount: bugReports.length,
        autoCaptureEnabled: bugReporterAutoCaptureEnabled,
        lastReportId: bugReports.length ? bugReports[bugReports.length - 1].id : null,
        storageKey: BUG_REPORT_STORAGE_KEY
    };
}

const bugReporterAPI = {
    report(input, options = {}) {
        return reportBugToAutoFix(input, {
            autoFix: true,
            fixSilent: true,
            ...options
        });
    },
    reportOnly(input, options = {}) {
        return reportBugToAutoFix(input, {
            autoFix: false,
            ...options
        });
    },
    list(limit = bugReports.length) {
        const parsedLimit = Number.parseInt(limit, 10);
        const safeLimit = Number.isNaN(parsedLimit)
            ? bugReports.length
            : Math.max(1, Math.min(BUG_REPORT_LIMIT, parsedLimit));
        return bugReports.slice(-safeLimit);
    },
    last() {
        return bugReports.length ? bugReports[bugReports.length - 1] : null;
    },
    clear() {
        const cleared = bugReports.length;
        bugReports = [];
        writeBugReportsToStorage();
        return { cleared };
    },
    fixNow(options = {}) {
        return autoBugFixAPI.run(options);
    },
    status() {
        return getBugReporterStatus();
    },
    enableAutoCapture() {
        enableBugReporterAutoCapture();
        return this.status();
    },
    disableAutoCapture() {
        disableBugReporterAutoCapture();
        return this.status();
    }
};

bugReports = readBugReportsFromStorage();
bugReportCounter = bugReports.reduce((maxId, report) => {
    const id = Number.parseInt(report.id, 10) || 0;
    return Math.max(maxId, id);
}, 0);

window.bugReporterAPI = bugReporterAPI;
window.bugReportingAPI = bugReporterAPI;
enableBugReporterAutoCapture();

function applyAdminChanges() {
    if (!isAdminUser()) {
        typeText('Admin access is required for this panel.');
        toggleAdminPanel();
        return;
    }

    const previousAdminName = normalizeAdminName(userProfile.username);
    const nextUsername = adminUsernameInput ? adminUsernameInput.value.trim() : userProfile.username;
    if (!nextUsername) {
        typeText('Username cannot be empty.');
        return;
    }

    userProfile.username = nextUsername;
    const currentAdminName = normalizeAdminName(userProfile.username);
    if (previousAdminName !== currentAdminName) {
        isAdminVerified = false;
    }
    if (!isAdminName()) {
        isAdminVerified = false;
        hideAdminPasswordPanel();
        applyAdminSecurityStateFor('');
    } else {
        applyAdminSecurityStateFor(userProfile.username);
        if (!isAdminUser()) showAdminPasswordPanel();
    }
    userProfile.level = parseIntSafe(adminLevelInput ? adminLevelInput.value : userProfile.level, userProfile.level, 1);
    userProfile.exp = parseIntSafe(adminExpInput ? adminExpInput.value : userProfile.exp, userProfile.exp, 0);
    userProfile.mentalHealth = parseIntSafe(adminMHInput ? adminMHInput.value : userProfile.mentalHealth, userProfile.mentalHealth, 0, 100);

    const typedRank = adminRankInput ? adminRankInput.value.trim().toUpperCase() : '';
    adminCustomRank = isAdminUser() ? typedRank : '';

    updateRank();
    renderProfile();
    updateMHBar();
    unlockFeatures();
    toggleAdminPanel();

    if (isAdminUser()) typeText('Admin changes applied.');
    else typeText(`Profile updated. Admin mode disabled for ${userProfile.username}.`);
}

function lockFeatures() {
    lockedControls.forEach((btn) => {
        btn.disabled = true;
    });
    hideMissionSelector();
    closeMissionGameWindow({ silent: true });
    hideAdminPasswordPanel();
    toggleAdminPanel();
    updateMissionSelectorAvailability();
}

function unlockFeatures() {
    lockedControls.forEach((btn) => {
        btn.disabled = false;
    });
    // Keep mission flow intact for normal users; verified ADMIN gets full access.
    if (increaseBtn) increaseBtn.disabled = !isAdminUser();
    toggleAdminPanel();
    updateMissionSelectorAvailability();
}

function requireUsername() {
    if (hasUsername()) return true;
    typeText('Set your username first to unlock all features.');
    showRegisterPanel();
    return false;
}

function renderProfile() {
    if (!profileUsername) return; // graceful fallback
    const name = userProfile.username || 'input user name';
    profileUsername.textContent = name;
    if (!userProfile.username) profileUsername.classList.add('placeholder');
    else profileUsername.classList.remove('placeholder');
    profileRank.textContent = userProfile.rank;
    profileLevel.textContent = userProfile.level;

    const needed = userProfile.level * 100;
    profileExpNeeded.textContent = needed;
    profileExp.textContent = userProfile.exp;

    const pct = needed > 0 ? Math.min(100, Math.round((userProfile.exp / needed) * 100)) : 0;
    if (expBar) expBar.style.width = pct + "%";

    // rank color hints
    if (profileRank) {
        if (userProfile.rank === 'ADMIN') profileRank.style.color = '#ff4dff';
        else if (userProfile.rank === 'S') profileRank.style.color = '#ffd700';
        else if (userProfile.rank === 'A') profileRank.style.color = '#00ff99';
        else if (userProfile.rank === 'B') profileRank.style.color = '#66ccff';
        else if (userProfile.rank === 'C') profileRank.style.color = '#ffb86b';
        else profileRank.style.color = '#ff6b6b';
    }
}

function showRegisterPanel() {
    if (!registerPanel) return;
    hideMissionSelector();
    closeMissionGameWindow({ silent: true });
    hideAdminPasswordPanel();
    showWithAnimation(registerPanel, 'ui-enter-rise');
    // small delay to allow it to appear then focus
    setTimeout(() => { if (usernameInput) usernameInput.focus(); }, 60);
}

function setUsernameFromInput() {
    if (!usernameInput) return;
    const val = usernameInput.value.trim();
    if (!val) {
        typeText('Please enter a username.');
        return;
    }
    const adminAttempt = isAdminName(val);
    userProfile.username = val;
    adminCustomRank = '';
    isAdminPanelHiddenByUser = false;
    isAdminVerified = false;
    if (adminAttempt) applyAdminSecurityStateFor(val);
    else applyAdminSecurityStateFor('');
    updateRank();
    renderProfile();
    unlockFeatures();
    if (adminAttempt) {
        if (adminPermanentlyLocked) {
            typeText('Admin account locked. Verify recovery ID to unlock.');
        } else {
            typeText('Admin username detected. Enter password to continue.');
        }
        showAdminPasswordPanel();
    } else {
        hideAdminPasswordPanel();
        typeText(`Welcome, ${val}!`);
    }
    if (registerPanel) hideWithAnimation(registerPanel, 'ui-exit-drop');
    usernameInput.value = '';
}


if (setUsernameBtn) setUsernameBtn.addEventListener('click', setUsernameFromInput);
if (usernameInput) usernameInput.addEventListener('keydown', (e)=>{ if (e.key === 'Enter') setUsernameFromInput(); });
if (changeUsernameBtn) changeUsernameBtn.addEventListener('click', showRegisterPanel);
if (verifyAdminBtn) verifyAdminBtn.addEventListener('click', verifyAdminPassword);
if (adminPasswordInput) adminPasswordInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') verifyAdminPassword(); });
if (verifyRecoveryBtn) verifyRecoveryBtn.addEventListener('click', verifyRecoveryId);
if (adminRecoveryInput) adminRecoveryInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') verifyRecoveryId(); });
if (adminApplyBtn) adminApplyBtn.addEventListener('click', applyAdminChanges);
if (adminToggleBtn) adminToggleBtn.addEventListener('click', toggleAdminPanelVisibility);
if (missionsBtn) missionsBtn.addEventListener('click', showMissionSelector);
if (missionCloseBtn) missionCloseBtn.addEventListener('click', hideMissionSelector);
if (missionGameCloseBtn) missionGameCloseBtn.addEventListener('click', () => closeMissionGameWindow());
missionOptionButtons.forEach((btn) => {
    btn.addEventListener('click', () => completeSelectedMission(btn.dataset.missionLevel));
});
if (adminPanel) adminPanel.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        applyAdminChanges();
    }
});

// show or hide registration panel depending on username
if (registerPanel) {
    if (userProfile.username && userProfile.username.length) {
        hideWithAnimation(registerPanel, 'ui-exit-drop');
        unlockFeatures();
    } else {
        lockFeatures();
        // if no username, focus input for convenience
        showRegisterPanel();
    }
}

function animateValue(element, start, end, duration = 700, formatter) {
    if (!element) return;
    element.classList.add('bump');
    const range = end - start;
    const startTime = performance.now();

    function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.round(start + range * progress);
        element.textContent = formatter ? formatter(value) : value;
        if (progress < 1) requestAnimationFrame(step);
        else element.classList.remove('bump');
    }

    requestAnimationFrame(step);
}

function addExp(amount) {
    const oldLevel = userProfile.level;
    const oldExp = userProfile.exp;

    userProfile.exp += amount;

    let levelUps = 0;
    // handle multiple level-ups in one add
    while (true) {
        const needed = userProfile.level * 100;
        if (userProfile.exp >= needed) {
            userProfile.exp -= needed;
            userProfile.level++;
            levelUps++;
            updateRank();
        } else break;
    }

    const newLevel = userProfile.level;
    const newExp = userProfile.exp;
    const newNeeded = newLevel * 100;

    // update static parts (rank, next-needed)
    if (profileUsername) profileUsername.textContent = userProfile.username;
    if (profileRank) profileRank.textContent = userProfile.rank;
    if (profileLevel) profileLevel.textContent = oldLevel; // start value for animation
    if (profileExpNeeded) profileExpNeeded.textContent = newNeeded;

    // update exp bar to final pct (CSS transition will animate width)
    const oldPct = oldLevel > 0 ? Math.min(100, Math.round((oldExp / (oldLevel * 100)) * 100)) : 0;
    const newPct = newNeeded > 0 ? Math.min(100, Math.round((newExp / newNeeded) * 100)) : 0;
    if (expBar) {
        expBar.style.width = oldPct + "%"; // ensure starts from old
        // force a reflow so transition occurs when we set the new width next
        void expBar.offsetWidth;
        expBar.style.width = newPct + "%";
    }

    // animate numeric displays
    if (profileExp) profileExp.textContent = oldExp;
    animateValue(profileExp, oldExp, newExp, 900);
    if (newLevel !== oldLevel) animateValue(profileLevel, oldLevel, newLevel, 700);

    // color update for rank
    if (profileRank) {
        if (userProfile.rank === 'ADMIN') profileRank.style.color = '#ff4dff';
        else if (userProfile.rank === 'S') profileRank.style.color = '#ffd700';
        else if (userProfile.rank === 'A') profileRank.style.color = '#00ff99';
        else if (userProfile.rank === 'B') profileRank.style.color = '#66ccff';
        else if (userProfile.rank === 'C') profileRank.style.color = '#ffb86b';
        else profileRank.style.color = '#ff6b6b';
    }

    // notify player
    if (levelUps > 1) typeText(`LEVEL UP x${levelUps}! You are now Level ${newLevel}`);
    else if (levelUps === 1) typeText(`LEVEL UP! You are now Level ${newLevel}`);

}

function updateRank() {
    if (isAdminUser()) {
        userProfile.rank = adminCustomRank || "ADMIN";
        return;
    }
    if (userProfile.level >= 20) userProfile.rank = "S";
    else if (userProfile.level >= 15) userProfile.rank = "A";
    else if (userProfile.level >= 10) userProfile.rank = "B";
    else if (userProfile.level >= 5) userProfile.rank = "C";
    else userProfile.rank = "D";
}

/* ================== Mental Health System (Upgrade 2) ================== */
function updateMHBar() {
    const hp = userProfile.mentalHealth;
    if (!hasBrain) {
        mhBar.style.width = "0%";
        mhText.textContent = NO_BRAIN_TEXT;
        mhBar.style.background = "linear-gradient(to right, #ff4c4c,#ff0000)";
        updateMissionSelectorAvailability();
        return;
    }

    mhBar.style.width = hp + "%";
    mhText.textContent = `Mental Health: ${hp}%`;

    if (hp <= 25)
        mhBar.style.background = "linear-gradient(to right, #ff4c4c,#ff0000)";
    else if (hp <= 50)
        mhBar.style.background = "linear-gradient(to right, #ff8c00,#ffaa00)";
    else if (hp <= 75)
        mhBar.style.background = "linear-gradient(to right, #ffff00,#aaff00)";
    else
        mhBar.style.background = "linear-gradient(to right, #00ff00,#00cc00)";

    updateMissionSelectorAvailability();
}

function changeMentalHealth(amount) {
    userProfile.mentalHealth += amount;

    if (userProfile.mentalHealth < 0) userProfile.mentalHealth = 0;
    if (userProfile.mentalHealth > 100) userProfile.mentalHealth = 100;

    updateMHBar();

    if (userProfile.mentalHealth === 0) {
        triggerSystemLock();
    }
}

function triggerSystemLock() {
    alert("⚠ SYSTEM LOCKED ⚠\nMental Health Critical\nForced Rest Required");
}

/* ================== Typing Effect ================== */
function typeText(text) {
    output.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
        output.textContent += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(interval);
    }, 25);
}

/* ================== Fun Buttons ================== */
function randomJoke() {
    if (!requireUsername()) return;
    const jokes = [
        "Why are you smiling? Nothing changed 😏",
        "This app is working harder than you.",
        "Congratulations. You clicked a button.",
        "Error 404: Motivation not found."
    ];
    typeText(jokes[Math.floor(Math.random() * jokes.length)]);
}

function chaos() {
    if (!requireUsername()) return;
    const chaos = [
        "System scanning brain... 12% 🧠",
        "Loading common sense... failed ❌",
        "Do not press buttons randomly.",
        "Chaos level increased by +1 🔥"
    ];
    typeText(chaos[Math.floor(Math.random() * chaos.length)]);
}

function fakeAI() {
    if (!requireUsername()) return;
    const ai = [
        "I am an AI. Trust me.",
        "The answer is yes. Or no.",
        "Have you tried rebooting yourself?",
        "Studying is good. Memes are better."
    ];
    typeText(ai[Math.floor(Math.random() * ai.length)]);
}

/* ================== Add Brain ================== */
function addBrain() {
    if (!requireUsername()) return;
    increaseBtn.disabled = true;
    showWithAnimation(loadingWindow, 'ui-enter-pop');

    const loadingText = loadingWindow.querySelector(".loading-text");
    loadingText.innerText = "Finding Brain...";
    loadingText.classList.remove("success-text");

    setTimeout(() => {
        loadingText.innerText = "Brain Successfully Founded! ✅";
        loadingText.classList.add("success-text");

        setTimeout(() => {
            hideWithAnimation(loadingWindow, 'ui-exit-pop', () => {
                hasBrain = true;
                userProfile.mentalHealth = 0;
                updateMHBar();
                increaseBtn.disabled = false;
                showYuiDialogue(initialDialogues);
            });
        }, 2000);

    }, 5000); // reduced for sanity
}

/* ================== Yui Dialogue ================== */
const yuiDialogue = document.getElementById("yui-dialogue");
const yuiText = document.getElementById("yui-text");
const yuiNext = document.getElementById("yui-next");
const yuiAvatar = document.querySelector(".yui-avatar");
const YUI_POSE_CLASSES = [
    "pose-neutral",
    "pose-wave",
    "pose-think",
    "pose-bye",
    "pose-alert",
    "pose-happy",
    "pose-guide",
    "pose-point",
    "pose-warning",
    "pose-shock",
    "pose-serious",
    "pose-pray",
    "pose-cheer"
];

let dialogues = [];
let dialogueIndex = 0;
let postQuizDialogues = [];
let postQuizDialoguePoses = [];

function setYuiPose(poseClass) {
    if (!yuiAvatar) return;
    yuiAvatar.classList.remove(...YUI_POSE_CLASSES);
    yuiAvatar.classList.add(poseClass || "pose-neutral");
}

function animateYuiText() {
    if (!yuiText) return;
    yuiText.classList.remove('yui-text-refresh');
    void yuiText.offsetWidth;
    yuiText.classList.add('yui-text-refresh');
}

function showYuiDialogue(dialogArray) {
    dialogues = dialogArray;
    dialogueIndex = 0;
    yuiText.innerText = dialogues[0];
    animateYuiText();
    setYuiPose(getPoseForDialogue(dialogues, dialogueIndex));
    showWithAnimation(yuiDialogue, 'yui-dialogue-enter');
    if (yuiAvatar) {
        clearUiAnimationClasses(yuiAvatar);
        yuiAvatar.classList.add('yui-avatar-enter');
    }
    yuiDialogue.style.bottom = "40px";
}

yuiNext.onclick = () => {
    if (!requireUsername()) return;
    dialogueIndex++;
    if (dialogueIndex < dialogues.length) {
        yuiText.innerText = dialogues[dialogueIndex];
        animateYuiText();
        setYuiPose(getPoseForDialogue(dialogues, dialogueIndex));
    } else {
        setYuiPose("pose-neutral");
        const shouldStartQuiz = dialogues === warningDialogues;
        hideWithAnimation(yuiDialogue, 'yui-dialogue-exit', () => {
            yuiDialogue.style.bottom = "-320px";
            if (shouldStartQuiz) startQuiz();
        });
    }
};

    /* ===== Initial Yui Dialogues ===== */
const initialDialogues = [
    "Yui: Hello, I am Yui.",
    "Yui: Alfa is likely my big brother. I am not clear about the true relationship between us two yet, but I know he is Papa's close friend.",
    "Yui: Bye!",
    "Yui: OH~ Wait! I have something important to tell you.",
    "Yui: I heard that you just added a Brain to yourself. That's great!",
    "Yui: Actually, Alfa requests me to help you improve your Mental Health.",
    "Yui: You can increase your Mental Health by clicking on 'Increase Mental Health'. Have a good day.",
    "Yui: Bye bye~"
];

/* ===== Warning Dialogues Before Quiz ===== */
const warningDialogues = [
    "Yui: Oh, I just remembered something I hadn't told you.",
    "Yui: If you choose the right answer, your Mental Health will increase by 10%.",
    "Yui: If you choose the wrong answer, it will decrease by 5%.",
    "Yui: If you choose the wrong answer on the LAST question...",
    "Yui: Your Mental Health will decrease by 100%.",
    "Yui: I hope you are intelligent enough to reach at least 40%.",
    "Yui: Good luck!",
    "Yui: Let's start the quiz now."
];

const initialDialoguePoses = [
    "pose-wave",
    "pose-think",
    "pose-bye",
    "pose-alert",
    "pose-happy",
    "pose-guide",
    "pose-point",
    "pose-bye"
];

const warningDialoguePoses = [
    "pose-alert",
    "pose-guide",
    "pose-serious",
    "pose-warning",
    "pose-shock",
    "pose-serious",
    "pose-pray",
    "pose-cheer"
];

function buildPostQuizDialogueSet() {
    const mh = Math.max(0, Math.min(100, Number.parseInt(userProfile.mentalHealth, 10) || 0));

    if (mh >= 100) {
        return {
            lines: [
                "Yui: Congratulations, you have reached 100% mental health.",
                "Yui: Amazing, looks like you can access Missions tab now, and you can access all levels.",
                "Yui: Best of luck on increasing your level.",
                "Yui: Remember, increasing level also increases your rank."
            ],
            poses: ["pose-cheer", "pose-happy", "pose-guide", "pose-point"]
        };
    }

    if (mh >= 85) {
        return {
            lines: [
                `Yui: Great work. Your mental health is now ${mh}%.`,
                "Yui: Missions are unlocked, and all levels are now available.",
                "Yui: Best of luck on your level grind.",
                "Yui: Higher levels will push your rank up too."
            ],
            poses: ["pose-happy", "pose-cheer", "pose-guide", "pose-point"]
        };
    }

    if (mh >= 70) {
        return {
            lines: [
                `Yui: Nice progress, you are at ${mh}% mental health.`,
                "Yui: You can now access Missions Level 1 to Level 3.",
                "Yui: Reach 85% to unlock Mission Level 4.",
                "Yui: Keep going and your level will rise fast."
            ],
            poses: ["pose-happy", "pose-guide", "pose-alert", "pose-point"]
        };
    }

    if (mh >= 50) {
        return {
            lines: [
                `Yui: Good job. Your mental health is ${mh}%.`,
                "Yui: You can access Mission Level 1 and Level 2 now.",
                "Yui: Reach 70% to unlock Mission Level 3.",
                "Yui: Keep improving to increase your level and rank."
            ],
            poses: ["pose-happy", "pose-guide", "pose-alert", "pose-point"]
        };
    }

    if (mh >= 25) {
        return {
            lines: [
                `Yui: Great, you reached ${mh}% mental health.`,
                "Yui: Missions tab is now unlocked.",
                "Yui: You can start with Mission Level 1.",
                "Yui: Build your level step by step from here."
            ],
            poses: ["pose-cheer", "pose-guide", "pose-point", "pose-happy"]
        };
    }

    return {
        lines: [
            `Yui: Your mental health is ${mh}% now.`,
            "Yui: Missions are still locked.",
            "Yui: Reach at least 25% mental health to unlock Mission Level 1.",
            "Yui: Keep trying, you are getting closer."
        ],
        poses: ["pose-serious", "pose-warning", "pose-guide", "pose-pray"]
    };
}

function getPoseForDialogue(dialogArray, index) {
    if (dialogArray === initialDialogues) return initialDialoguePoses[index] || "pose-neutral";
    if (dialogArray === warningDialogues) return warningDialoguePoses[index] || "pose-neutral";
    if (dialogArray === postQuizDialogues) return postQuizDialoguePoses[index] || "pose-neutral";
    return "pose-neutral";
}

increaseBtn.addEventListener("click", () => {
    if (!requireUsername()) return;
    showYuiDialogue(warningDialogues);
});

/* ================== Mission System (Upgrade 3) ================== */
function completeMission() {
    if (!requireUsername()) return;
    const postQuizSet = buildPostQuizDialogueSet();
    postQuizDialogues = postQuizSet.lines;
    postQuizDialoguePoses = postQuizSet.poses;
    showYuiDialogue(postQuizDialogues);
    typeText("Quiz complete. Mental health has been updated.");
    updateMissionSelectorAvailability();
}

/* ================== Quiz ================== */
const quizData = [
    { question: "2+2?", options: ["3","4","5","22"], answer: 1 },
    { question: "SAO stands for?", options: ["Sword Art Online","Super Anime","Simple Online","None"], answer:0 },
    { question:"Sky color?", options:["Green","Blue","Red","Yellow"],answer:1},
    { question:"HTML is?",options:["Language","Browser","OS","Game"],answer:0},
    { question:"JS stands for?",options:["JavaScript","JustScript","JumpStart","Jelly"],answer:0},
    { question:"Initial MH?",options:["0%","10%","50%","100%"],answer:0},
    { question:"Fun emoji?",options:["😂","🎲","🤖","💊"],answer:0},
    { question:"Wrong penalty?",options:["-5%","-10%","-20%","-50%"],answer:0},
    { question:"Level up gives?",options:["Rank","Nothing","Error","Reset"],answer:0},
    { question:"Last wrong penalty?",options:["-10%","-50%","-100%","-25%"],answer:2}
];

let currentQ = 0;

function startQuiz() {
    if (!requireUsername()) return;
    currentQ = 0;
    showWithAnimation(quizContainer, 'ui-enter-pop');
    showQuestion();
}

function showQuestion() {
    const q = quizData[currentQ];
    quizQuestion.textContent = `Q${currentQ+1}: ${q.question}`;
    quizAnswers.innerHTML = "";

    q.options.forEach((opt,i)=>{
        const btn = document.createElement("button");
        btn.className="quiz-answer-btn";
        btn.textContent=opt;
        btn.onclick = ()=> selectAnswer(i);
        quizAnswers.appendChild(btn);
    });
}

function selectAnswer(selected){
    if (!requireUsername()) return;
    const correct = quizData[currentQ].answer;

    if(currentQ===quizData.length-1 && selected!==correct){
        changeMentalHealth(-100);
    } else {
        if(selected===correct) changeMentalHealth(10);
        else changeMentalHealth(-5);
    }

    currentQ++;
    if(currentQ<quizData.length) showQuestion();
    else finishQuiz();
}

function finishQuiz(){
    hideWithAnimation(quizContainer, 'ui-exit-pop', completeMission);
}

// Initialize UI bindings
initAdminDragSystem();
renderProfile();
updateMHBar();
runAutoBugFix({ silent: true });
autoBugFixAPI.start();
