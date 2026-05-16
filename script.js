/* ================== DOM ================== */
const output = document.getElementById("output");
const loadingWindow = document.getElementById("loadingWindow");
const mhText = document.querySelector(".mh-text");
const mhBar = document.querySelector(".mh-bar");
const mhContainer = document.querySelector(".mh-container");
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
const skillBar = document.getElementById("skill-bar");
const skillChargeText = document.getElementById("skill-charge-text");
const skillMeterFill = document.getElementById("skill-meter-fill");
const skillBurstBtn = document.getElementById("skill-burst-btn");
const updateCatalogBtn = document.getElementById("update-catalog-btn");
const updateCatalogPanel = document.getElementById("update-catalog-panel");
const updateCatalogCloseBtn = document.getElementById("update-catalog-close-btn");
const dailyBtn = document.getElementById("daily-btn");
const dailyPanel = document.getElementById("daily-panel");
const dailyCloseBtn = document.getElementById("daily-close-btn");
const dailyDateText = document.getElementById("daily-date-text");
const dailyList = document.getElementById("daily-list");
const dailyRewardText = document.getElementById("daily-reward-text");
const dailyClaimBtn = document.getElementById("daily-claim-btn");
const shopBtn = document.getElementById("shop-btn");
const shopPanel = document.getElementById("shop-panel");
const shopCloseBtn = document.getElementById("shop-close-btn");
const currencyText = document.getElementById("currency-text");
const inventoryList = document.getElementById("inventory-list");
const shopItemButtons = Array.from(document.querySelectorAll(".shop-item-btn"));
const useSandwichBtn = document.getElementById("use-sandwich-btn");
const raidBtn = document.getElementById("raid-btn");
const raidPanel = document.getElementById("raid-panel");
const raidCloseBtn = document.getElementById("raid-close-btn");
const raidStatusText = document.getElementById("raid-status-text");
const raidHpFill = document.getElementById("raid-hp-fill");
const raidLog = document.getElementById("raid-log");
const raidAttackBtn = document.getElementById("raid-attack-btn");
const raidDefendBtn = document.getElementById("raid-defend-btn");
const raidAnalyzeBtn = document.getElementById("raid-analyze-btn");
const raidBurstBtn = document.getElementById("raid-burst-btn");
const guardBtn = document.getElementById("guard-btn");
const guardPanel = document.getElementById("guard-panel");
const guardCloseBtn = document.getElementById("guard-close-btn");
const guardStatusText = document.getElementById("guard-status-text");
const guardTerminal = document.getElementById("guard-terminal");
const guardCommandInput = document.getElementById("guard-command-input");
const guardSubmitBtn = document.getElementById("guard-submit-btn");

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
const profileSaveBtn = document.getElementById('profile-save-btn');
const profileSettingsBtn = document.getElementById('profile-settings-btn');
const profileSettingsMenu = document.getElementById('profile-settings-menu');
const graphicsToggleBtn = document.getElementById('graphics-toggle-btn');
const graphicsOptions = document.getElementById('graphics-options');
const graphicsOptionButtons = Array.from(document.querySelectorAll('.graphics-option-btn'));
const eraseSaveBtn = document.getElementById('erase-save-btn');
const rankPopup = document.getElementById('rank-popup');
const rankPopupText = document.getElementById('rank-popup-text');
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
const adminRankSelector = document.getElementById('admin-rank-selector');
const adminMHInput = document.getElementById('admin-mh');
const adminApplyBtn = document.getElementById('admin-apply-btn');
const adminToggleBtn = document.getElementById('admin-toggle-btn');
const lockedControls = Array.from(document.querySelectorAll('.controls button'));
const ADMIN_SECRET_PEPPER = 'kf-secure-v1';
const ADMIN_PASSWORD_SIGNATURES = {
    'ALFA YUUKI': '5dd84939',
    'SEA DUST': '0865bb06',
    'KITTY YUKINO': '461f7935'
};
const ROOT_ADMIN_NAMES = ["ALFA YUUKI", "SEA DUST"];
const ADMIN_RANKS = ["ROOT ADMIN", "ADMIN", "S", "A", "B", "C", "D"];
const RANK_CLASS_MAP = {
    "ROOT ADMIN": "rank-root-admin",
    "ADMIN": "rank-admin",
    "S": "rank-s",
    "A": "rank-a",
    "B": "rank-b",
    "C": "rank-c",
    "D": "rank-d"
};
const RANK_ORDER = {
    "D": 1,
    "C": 2,
    "B": 3,
    "A": 4,
    "S": 5,
    "ADMIN": 6,
    "ROOT ADMIN": 7
};
const RANK_POPUP_BACKGROUNDS = {
    "ROOT ADMIN": "linear-gradient(135deg, #7b2d9f, #fdd82e, #7b2d9f)",
    "ADMIN": "linear-gradient(135deg, #6b2dff, #ff4dff)",
    "S": "linear-gradient(135deg, #ffb300, #fff176, #ff8f00)",
    "A": "linear-gradient(135deg, #00e5ff, #00bcd4)",
    "B": "linear-gradient(135deg, #2196f3, #0d47a1)",
    "C": "linear-gradient(135deg, #ff9800, #ef6c00)",
    "D": "linear-gradient(135deg, #ff5252, #b71c1c)"
};
const ADMIN_RECOVERY_SIGNATURE = '3d417aea';
const ADMIN_ACCOUNT_LOCK_THRESHOLD = 10;
const ADMIN_INITIAL_MAX_ATTEMPTS = 3;
const ADMIN_MIN_MAX_ATTEMPTS = 1;
const ADMIN_BASE_LOCK_MS = 30000;
const ADMIN_SECURITY_STORAGE_KEY = 'kitsune_admin_security_v1';
const PROFILE_SAVE_STORAGE_KEY = 'kitsune_profile_save_v1';
const GAMEPLAY_SYSTEMS_STORAGE_KEY = 'kitsune_gameplay_systems_v1';
const SPECIAL_MOVE_MAX = 100;
const RAID_MAX_HP = 5000;
const CLEAN_ARCHITECTURE_MS = 10 * 60 * 1000;
const COMBO_STANDBY_MS = 3000;
const REWARD_MULTIPLIER_MS = 30000;
const MH_LOCK_MS = 3 * 60 * 1000;
const OVERDRIVE_MS = 10000;
const ROGUE_FILE_INTERVAL_MS = 45000;
const GRAPHICS_STORAGE_KEY = 'kitsune_graphics_level_v1';
const GRAPHICS_LEVELS = ["lowest", "low", "medium", "highest"];
const DEFAULT_GRAPHICS_LEVEL = "lowest";
const NO_BRAIN_TEXT = 'Error404: Brain not found';
const MISSION_EXP_REWARDS = {
    1: 25,
    2: 50,
    3: 75,
    4: 100,
    5: 250
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
let currentGraphicsLevel = getStoredGraphicsLevel();
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
let lastTypingInterval = null;
let hasUnsavedProfileChanges = false;
let specialMoveCharge = 0;
let specialMoveStocks = 0;
let lastRenderedMentalHealth = null;
let currency = 0;
let inventory = {
    memoryLeakBuffer: false,
    sandwich: 0,
    overclockChip: false
};
let dailyState = {
    date: '',
    chaosClicks: 0,
    completedLevel2: false,
    maintainedMH: false,
    claimed: false
};
let raidState = {
    bossHp: RAID_MAX_HP,
    bossCharge: 0,
    analyzed: false,
    lastActionAt: 0
};
let guardState = {
    intrusionActive: false,
    expectedCommand: '',
    threatType: '',
    threatValue: '',
    intrusionExpiresAt: 0,
    cleanArchitectureUntil: 0,
    lastIntrusionDate: ''
};
let comboStandbyUntil = 0;
let comboStandbyTimer = null;
let rewardMultiplierUntil = 0;
let mentalHealthLockUntil = 0;
let overdriveUntil = 0;
let overdriveTimer = null;
let glitchTimer = null;
let rogueFileTimer = null;
let activeRogueFile = null;
const baseControlLabels = {};
const glitchActionMap = { joke: 'joke', chaos: 'chaos', fakeAI: 'fakeAI' };

function getStoredGraphicsLevel() {
    try {
        const savedLevel = window.localStorage.getItem(GRAPHICS_STORAGE_KEY);
        return GRAPHICS_LEVELS.includes(savedLevel) ? savedLevel : DEFAULT_GRAPHICS_LEVEL;
    } catch (error) {
        return DEFAULT_GRAPHICS_LEVEL;
    }
}

function getGraphicsConfig(level = currentGraphicsLevel) {
    const resolvedLevel = GRAPHICS_LEVELS.includes(level) ? level : DEFAULT_GRAPHICS_LEVEL;
    const configs = {
        lowest: { particleDpr: 1, baseParticles: 22, linkLimit: 0, maxParticles: 48, burstCap: 8, pointer: false, shadows: false, linkEvery: 0 },
        low: { particleDpr: 1, baseParticles: 36, linkLimit: 18, maxParticles: 80, burstCap: 16, pointer: false, shadows: false, linkEvery: 5 },
        medium: { particleDpr: 1.25, baseParticles: 62, linkLimit: 38, maxParticles: 130, burstCap: 36, pointer: true, shadows: true, linkEvery: 3 },
        highest: { particleDpr: 1.5, baseParticles: 96, linkLimit: 72, maxParticles: 220, burstCap: 90, pointer: true, shadows: true, linkEvery: 2 }
    };
    return configs[resolvedLevel];
}

function applyGraphicsLevel(level, { persist = true, announce = false } = {}) {
    const nextLevel = GRAPHICS_LEVELS.includes(level) ? level : DEFAULT_GRAPHICS_LEVEL;
    currentGraphicsLevel = nextLevel;

    document.documentElement.classList.remove(
        ...GRAPHICS_LEVELS.map((graphicsLevel) => `graphics-${graphicsLevel}`),
        'performance-lite'
    );
    document.documentElement.classList.add(`graphics-${nextLevel}`);

    graphicsOptionButtons.forEach((btn) => {
        const selected = btn.dataset.graphicsLevel === nextLevel;
        btn.classList.toggle('active', selected);
        btn.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });

    if (persist) {
        try {
            window.localStorage.setItem(GRAPHICS_STORAGE_KEY, nextLevel);
        } catch (error) {
            // Storage can be unavailable in restricted preview contexts.
        }
    }

    window.dispatchEvent(new CustomEvent('kitsune:graphics-change', { detail: { level: nextLevel } }));
    if (announce) typeText(`Graphics set to ${nextLevel}.`);
}

function restartAnimation(element, className) {
    if (!element || prefersReducedMotion) return;
    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
}

function pulseElement(element, className, durationMs = 520) {
    if (!element || prefersReducedMotion) return;
    restartAnimation(element, className);
    window.setTimeout(() => element.classList.remove(className), durationMs);
}

function burstFromElement(element, color = "0,255,200", amount = 24) {
    if (!element || prefersReducedMotion) return;
    const rect = element.getBoundingClientRect();
    particleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, color, amount);
}

function addButtonRipple(event) {
    const button = event.target.closest('button');
    if (!button || button.disabled || prefersReducedMotion) return;

    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'button-ripple';
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    button.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
}

function setProfileDirty(isDirty) {
    hasUnsavedProfileChanges = Boolean(isDirty);
    if (profileSaveBtn) {
        profileSaveBtn.classList.toggle('dirty', hasUnsavedProfileChanges);
        profileSaveBtn.title = hasUnsavedProfileChanges ? 'Save user data' : 'User data saved';
    }
}

function markProfileDirty() {
    if (hasUsername()) setProfileDirty(true);
}

function getProfileSavePayload() {
    return {
        version: 1,
        savedAt: new Date().toISOString(),
        profile: {
            username: userProfile.username,
            level: userProfile.level,
            exp: userProfile.exp,
            rank: userProfile.rank,
            mentalHealth: userProfile.mentalHealth
        },
        state: {
            hasBrain,
            adminCustomRank,
            isAdminVerified: isAdminUser(),
            isAdminPanelHiddenByUser,
            currency,
            inventory,
            dailyState,
            raidState,
            guardState,
            specialMoveStocks,
            specialMoveCharge,
            rewardMultiplierUntil,
            mentalHealthLockUntil,
            overdriveUntil,
            activeRogueFile
        }
    };
}

function saveProfile() {
    if (!hasUsername()) {
        typeText('Set your username before saving user data.');
        showRegisterPanel();
        return false;
    }

    try {
        localStorage.setItem(PROFILE_SAVE_STORAGE_KEY, JSON.stringify(getProfileSavePayload()));
        setProfileDirty(false);
        typeText('Data Link Start: user data saved.');
        return true;
    } catch {
        typeText('Data Link failed. Browser storage is unavailable.');
        return false;
    }
}

function eraseSavedProfile() {
    const confirmed = window.confirm('Erase saved user data from this browser? Current on-screen data will stay until you refresh or change it.');
    if (!confirmed) return;

    try {
        localStorage.removeItem(PROFILE_SAVE_STORAGE_KEY);
        localStorage.removeItem(GAMEPLAY_SYSTEMS_STORAGE_KEY);
        setProfileDirty(hasUsername());
        typeText('Saved user data erased from localStorage.');
    } catch {
        typeText('Could not erase saved data. Browser storage is unavailable.');
    }
}

function loadSavedProfile() {
    try {
        const rawSave = localStorage.getItem(PROFILE_SAVE_STORAGE_KEY);
        if (!rawSave) return false;
        const saved = JSON.parse(rawSave);
        const savedProfile = saved && saved.profile;
        if (!savedProfile || typeof savedProfile !== 'object') return false;

        const savedUsername = String(savedProfile.username || '').trim().slice(0, 20);
        if (!savedUsername) return false;

        const savedLevel = Math.max(1, Number.parseInt(savedProfile.level, 10) || 1);
        const savedExp = Math.max(0, Number.parseInt(savedProfile.exp, 10) || 0);
        const savedMentalHealth = Math.max(0, Math.min(100, Number.parseInt(savedProfile.mentalHealth, 10) || 0));
        const savedRank = ADMIN_RANKS.includes(savedProfile.rank) ? savedProfile.rank : "D";

        userProfile.username = savedUsername;
        userProfile.level = savedLevel;
        userProfile.exp = savedExp;
        userProfile.mentalHealth = savedMentalHealth;
        userProfile.rank = savedRank;

        hasBrain = Boolean(saved.state && saved.state.hasBrain);
        adminCustomRank = ADMIN_RANKS.includes(saved.state && saved.state.adminCustomRank) ? saved.state.adminCustomRank : '';
        isAdminPanelHiddenByUser = Boolean(saved.state && saved.state.isAdminPanelHiddenByUser);
        if (saved.state) restoreGameplaySystems(saved.state);
        applyAdminSecurityStateFor(savedUsername);
        isAdminVerified = Boolean(saved.state && saved.state.isAdminVerified && isAdminName(savedUsername) && !isAdminAccountLocked());

        if (!isAdminName(savedUsername)) {
            isAdminVerified = false;
            adminCustomRank = '';
            updateRank();
        } else if (isAdminVerified && !adminCustomRank) {
            adminCustomRank = isRootAdminName(savedUsername) ? "ROOT ADMIN" : "ADMIN";
            userProfile.rank = adminCustomRank;
        }

        setProfileDirty(false);
        return true;
    } catch {
        return false;
    }
}

function getTodayKey() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getDefaultDailyState(date = getTodayKey()) {
    return {
        date,
        chaosClicks: 0,
        completedLevel2: false,
        maintainedMH: userProfile.mentalHealth >= 50,
        claimed: false
    };
}

function normalizeGameplayNumber(value, fallback = 0, min = 0, max = Number.MAX_SAFE_INTEGER) {
    const parsed = Number.parseInt(value, 10);
    if (!Number.isFinite(parsed)) return fallback;
    return Math.max(min, Math.min(max, parsed));
}

function restoreGameplaySystems(source = {}) {
    currency = normalizeGameplayNumber(source.currency, currency, 0);
    inventory = {
        memoryLeakBuffer: Boolean(source.inventory && source.inventory.memoryLeakBuffer),
        sandwich: normalizeGameplayNumber(source.inventory && source.inventory.sandwich, inventory.sandwich, 0, 99),
        overclockChip: Boolean(source.inventory && source.inventory.overclockChip)
    };
    specialMoveStocks = normalizeGameplayNumber(source.specialMoveStocks, specialMoveStocks, 0, 99);
    specialMoveCharge = normalizeGameplayNumber(source.specialMoveCharge, specialMoveCharge, 0, SPECIAL_MOVE_MAX - 1);

    const savedRaid = source.raidState || {};
    raidState = {
        bossHp: normalizeGameplayNumber(savedRaid.bossHp, raidState.bossHp, 0, RAID_MAX_HP),
        bossCharge: normalizeGameplayNumber(savedRaid.bossCharge, 0, 0, 3),
        analyzed: Boolean(savedRaid.analyzed),
        lastActionAt: 0
    };

    const savedGuard = source.guardState || {};
    guardState = {
        intrusionActive: Boolean(savedGuard.intrusionActive),
        expectedCommand: typeof savedGuard.expectedCommand === 'string' ? savedGuard.expectedCommand : '',
        threatType: typeof savedGuard.threatType === 'string' ? savedGuard.threatType : '',
        threatValue: typeof savedGuard.threatValue === 'string' ? savedGuard.threatValue : '',
        intrusionExpiresAt: normalizeGameplayNumber(savedGuard.intrusionExpiresAt, 0, 0),
        cleanArchitectureUntil: normalizeGameplayNumber(savedGuard.cleanArchitectureUntil, 0, 0),
        lastIntrusionDate: typeof savedGuard.lastIntrusionDate === 'string' ? savedGuard.lastIntrusionDate : ''
    };
    rewardMultiplierUntil = normalizeGameplayNumber(source.rewardMultiplierUntil, 0, 0);
    mentalHealthLockUntil = normalizeGameplayNumber(source.mentalHealthLockUntil, 0, 0);
    overdriveUntil = normalizeGameplayNumber(source.overdriveUntil, 0, 0);
    activeRogueFile = source.activeRogueFile && typeof source.activeRogueFile === 'object' ? source.activeRogueFile : null;

    const savedDaily = source.dailyState || {};
    dailyState = {
        date: typeof savedDaily.date === 'string' ? savedDaily.date : '',
        chaosClicks: normalizeGameplayNumber(savedDaily.chaosClicks, 0, 0, 3),
        completedLevel2: Boolean(savedDaily.completedLevel2),
        maintainedMH: Boolean(savedDaily.maintainedMH),
        claimed: Boolean(savedDaily.claimed)
    };
    ensureDailyState();
}

function persistGameplaySystems() {
    try {
        localStorage.setItem(GAMEPLAY_SYSTEMS_STORAGE_KEY, JSON.stringify({
            currency,
            inventory,
            dailyState,
            raidState,
            guardState,
            specialMoveStocks,
            specialMoveCharge,
            rewardMultiplierUntil,
            mentalHealthLockUntil,
            overdriveUntil,
            activeRogueFile
        }));
    } catch {
        // Gameplay state is still usable for the current session if storage is blocked.
    }
}

function loadGameplaySystems() {
    try {
        const raw = localStorage.getItem(GAMEPLAY_SYSTEMS_STORAGE_KEY);
        if (!raw) {
            ensureDailyState();
            return;
        }
        restoreGameplaySystems(JSON.parse(raw));
    } catch {
        ensureDailyState();
    }
}

function ensureDailyState() {
    const today = getTodayKey();
    if (dailyState.date !== today) {
        dailyState = getDefaultDailyState(today);
        persistGameplaySystems();
    }
}

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

function showUpdateCatalog() {
    showWithAnimation(updateCatalogPanel, 'ui-enter-pop');
    if (profileSettingsMenu) profileSettingsMenu.classList.add('hidden');
    if (profileSettingsBtn) profileSettingsBtn.setAttribute('aria-expanded', 'false');
}

function hideUpdateCatalog() {
    hideWithAnimation(updateCatalogPanel, 'ui-exit-pop');
}

function closeSystemPanel(panel) {
    hideWithAnimation(panel, 'ui-exit-pop');
    if (panel === raidPanel) document.body.classList.remove('raid-active');
}

function getMissionTimerBonusSeconds() {
    return inventory.memoryLeakBuffer ? 5 : 0;
}

function getSkillChargeMultiplier() {
    return inventory.overclockChip ? 1.5 : 1;
}

function getRewardMultiplier() {
    let multiplier = Date.now() < rewardMultiplierUntil ? 3 : 1;
    if (Date.now() < overdriveUntil) multiplier *= 3;
    return multiplier;
}

function getMissionDurationMultiplier() {
    return Date.now() < overdriveUntil ? 2 : 1;
}

function isMentalHealthLocked() {
    return Date.now() < mentalHealthLockUntil;
}

function playSynthCue(type = 'chime') {
    if (prefersReducedMotion) return;
    try {
        const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextCtor) return;
        const ctx = new AudioContextCtor();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const now = ctx.currentTime;
        const freq = type === 'hum' ? 90 : type === 'ring' ? 740 : type === 'overdrive' ? 520 : 980;
        osc.type = type === 'hum' ? 'sawtooth' : 'square';
        osc.frequency.setValueAtTime(freq, now);
        if (type === 'overdrive') osc.frequency.exponentialRampToValueAtTime(1320, now + 0.45);
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(type === 'hum' ? 0.035 : 0.08, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + (type === 'hum' ? 0.9 : 0.28));
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + (type === 'hum' ? 1 : 0.5));
    } catch {
        // Audio is optional and may be blocked until the first user gesture.
    }
}

function addCurrency(amount, reason = '') {
    const gained = Math.max(0, Number.parseInt(amount, 10) || 0);
    if (gained <= 0) return;
    if (activeRogueFile && activeRogueFile.type === 'shardCollector') {
        if (reason) typeText('Shard Collector.bin froze currency gain. Execute a clean Sword Skill Combo.');
        return;
    }
    const finalGain = Math.ceil(gained * getRewardMultiplier());
    currency += finalGain;
    renderShop();
    persistGameplaySystems();
    markProfileDirty();
    if (reason) typeText(`${reason} +${finalGain} Kitsune Shards.`);
}

function renderDaily() {
    ensureDailyState();
    if (dailyDateText) dailyDateText.textContent = `Rotation: ${dailyState.date}`;
    if (dailyList) {
        const rows = [
            { label: 'Click Chaos 3 times', value: `${dailyState.chaosClicks}/3`, done: dailyState.chaosClicks >= 3 },
            { label: 'Complete a Level 2 Mission', value: dailyState.completedLevel2 ? 'Done' : 'Pending', done: dailyState.completedLevel2 },
            { label: 'Keep Mental Health above 50%', value: dailyState.maintainedMH ? 'Stable' : 'Need 50%+', done: dailyState.maintainedMH }
        ];
        dailyList.innerHTML = rows.map((row) => (
            `<div class="system-row${row.done ? ' done' : ''}"><span>${row.label}</span><strong>${row.value}</strong></div>`
        )).join('');
    }
    const complete = dailyState.chaosClicks >= 3 && dailyState.completedLevel2 && dailyState.maintainedMH;
    if (dailyRewardText) {
        dailyRewardText.textContent = dailyState.claimed
            ? 'Daily reward claimed. Come back after the next calendar day.'
            : 'Reward: +300 EXP and +1 Sword Skill Stock.';
    }
    if (dailyClaimBtn) dailyClaimBtn.disabled = !complete || dailyState.claimed;
}

function showDailyPanel() {
    if (!requireUsername()) return;
    renderDaily();
    showWithAnimation(dailyPanel, 'ui-enter-pop');
}

function markDailyProgress(type) {
    ensureDailyState();
    if (type === 'chaos') dailyState.chaosClicks = Math.min(3, dailyState.chaosClicks + 1);
    if (type === 'level2') dailyState.completedLevel2 = true;
    if (type === 'mh50' && userProfile.mentalHealth >= 50) dailyState.maintainedMH = true;
    renderDaily();
    persistGameplaySystems();
}

function claimDailyReward() {
    ensureDailyState();
    const complete = dailyState.chaosClicks >= 3 && dailyState.completedLevel2 && dailyState.maintainedMH;
    if (!complete || dailyState.claimed) return;
    dailyState.claimed = true;
    addExp(300);
    specialMoveStocks++;
    updateSkillBar();
    renderDaily();
    persistGameplaySystems();
    markProfileDirty();
    typeText('Daily Checklist complete! +300 EXP and +1 Sword Skill Stock.');
}

function renderShop() {
    if (currencyText) currencyText.textContent = `Kitsune Shards: ${currency}`;
    if (inventoryList) {
        inventoryList.innerHTML = [
            `<div class="system-row${inventory.memoryLeakBuffer ? ' done' : ''}"><span>Memory Leak Buffer</span><strong>${inventory.memoryLeakBuffer ? 'Owned' : 'Not owned'}</strong></div>`,
            `<div class="system-row"><span>Yui's Homemade Sandwich</span><strong>x${inventory.sandwich}</strong></div>`,
            `<div class="system-row${inventory.overclockChip ? ' done' : ''}"><span>Overclock Chip</span><strong>${inventory.overclockChip ? 'Owned' : 'Not owned'}</strong></div>`
        ].join('');
    }
    if (useSandwichBtn) useSandwichBtn.disabled = inventory.sandwich <= 0 || !hasBrain;
}

function showShopPanel() {
    if (!requireUsername()) return;
    renderShop();
    showWithAnimation(shopPanel, 'ui-enter-pop');
}

function buyShopItem(itemId) {
    const shopItems = {
        memoryLeakBuffer: { cost: 120, passive: true },
        sandwich: { cost: 60 },
        overclockChip: { cost: 180, passive: true }
    };
    const item = shopItems[itemId];
    if (!item) return;
    if (item.passive && inventory[itemId]) {
        typeText('Item already owned.');
        return;
    }
    if (currency < item.cost) {
        typeText('Not enough Kitsune Shards.');
        return;
    }
    currency -= item.cost;
    if (itemId === 'sandwich') inventory.sandwich++;
    else inventory[itemId] = true;
    renderShop();
    persistGameplaySystems();
    markProfileDirty();
    typeText('Shop purchase complete.');
}

function useSandwich() {
    if (!hasBrain || inventory.sandwich <= 0) return;
    inventory.sandwich--;
    changeMentalHealth(20);
    clearGlitchState();
    renderShop();
    persistGameplaySystems();
    markProfileDirty();
    typeText("Yui's Homemade Sandwich restored +20% Mental Health.");
}

function renderRaid() {
    raidState.bossHp = Math.max(0, Math.min(RAID_MAX_HP, raidState.bossHp));
    const hpPct = (raidState.bossHp / RAID_MAX_HP) * 100;
    if (raidHpFill) raidHpFill.style.width = `${hpPct}%`;
    if (raidStatusText) raidStatusText.textContent = `Floor Boss HP: ${raidState.bossHp}/${RAID_MAX_HP} | Charge ${raidState.bossCharge}/3`;
    const canRaid = isAdminUser() || userProfile.level >= 10;
    [raidAttackBtn, raidDefendBtn, raidAnalyzeBtn, raidBurstBtn].forEach((btn) => {
        if (btn) btn.disabled = !canRaid || raidState.bossHp <= 0;
    });
    if (raidBurstBtn) raidBurstBtn.disabled = !canRaid || raidState.bossHp <= 0 || specialMoveStocks <= 0;
    document.body.classList.toggle('raid-active', Boolean(raidPanel && !raidPanel.classList.contains('hidden') && raidState.bossHp > 0));
}

function showRaidPanel() {
    if (!requireUsername()) return;
    if (!isAdminUser() && userProfile.level < 10) {
        typeText('Aincrad Floor Boss unlocks at Level 10 or verified Admin access.');
        return;
    }
    renderRaid();
    showWithAnimation(raidPanel, 'ui-enter-pop');
}

function setRaidLog(text) {
    if (raidLog) raidLog.textContent = text;
}

function finishRaidIfCleared() {
    if (raidState.bossHp > 0) return false;
    raidState.bossHp = 0;
    addExp(1000);
    addCurrency(300);
    setRaidLog('Floor Boss defeated. +1000 EXP and +300 Kitsune Shards awarded.');
    renderRaid();
    persistGameplaySystems();
    markProfileDirty();
    return true;
}

function handleBossCounter(playerDefended = false) {
    if (playerDefended) {
        raidState.bossCharge = Math.min(3, raidState.bossCharge + 1);
        return 'Boss studies your guard and charges its ultimate.';
    }
    raidState.bossCharge++;
    if (raidState.bossCharge >= 3) {
        raidState.bossCharge = 0;
        changeMentalHealth(-15);
        return 'Boss ultimate released. Mental Health -15%.';
    }
    return 'Boss pressure rises.';
}

function runRaidAction(action) {
    if (raidState.bossHp <= 0) {
        setRaidLog('The boss is already defeated.');
        return;
    }
    const now = Date.now();
    if (Date.now() >= overdriveUntil && now - raidState.lastActionAt < 1800) {
        setRaidLog('Action cooling down. Wait a moment.');
        return;
    }
    raidState.lastActionAt = now;

    if (action === 'attack') {
        const damage = raidState.analyzed ? 380 : 260;
        raidState.bossHp = Math.max(0, raidState.bossHp - damage);
        raidState.analyzed = false;
        changeMentalHealth(-5);
        setRaidLog(`Attack landed for ${damage} damage. Stress cost: -5% Mental Health. ${handleBossCounter(false)}`);
    } else if (action === 'defend') {
        changeMentalHealth(8);
        setRaidLog(`You defended and recovered +8% Mental Health. ${handleBossCounter(true)}`);
    } else if (action === 'analyze') {
        raidState.analyzed = true;
        setRaidLog(`Weak point traced. Next attack deals bonus damage. ${handleBossCounter(false)}`);
    }

    finishRaidIfCleared();
    renderRaid();
    persistGameplaySystems();
    markProfileDirty();
}

function burstRaidBoss() {
    if (raidState.bossHp <= 0) return;
    if (specialMoveStocks <= 0) {
        typeText('Sword Skill is still charging.');
        renderRaid();
        return;
    }
    specialMoveStocks = Math.max(0, specialMoveStocks - 1);
    const damage = Math.ceil(RAID_MAX_HP * 0.15);
    raidState.bossHp = Math.max(0, raidState.bossHp - damage);
    updateSkillBar();
    if (typeof particleBurst === 'function') particleBurst(window.innerWidth / 2, window.innerHeight * 0.45, '255,70,110', 90);
    setRaidLog(`Sword Skill Burst carved off ${damage} boss HP.`);
    finishRaidIfCleared();
    renderRaid();
    persistGameplaySystems();
    markProfileDirty();
}

function createGuardThreat() {
    if (Math.random() < 0.5) {
        const port = String(4000 + Math.floor(Math.random() * 900));
        return { type: 'port', value: port, command: `kill ${port}`, label: `PORT: ${port} [MALWARE ATTACHED]` };
    }
    const hex = Math.random().toString(16).slice(2, 8).toUpperCase();
    return { type: 'hex', value: hex, command: `bypass ${hex}`, label: `HEX_KEY: ${hex} [INVERTED LOGIC]` };
}

function startSecurityIntrusion(manual = false) {
    if (!requireUsername()) return;
    if (!manual && guardState.intrusionActive) return;
    const threat = createGuardThreat();
    guardState.intrusionActive = true;
    guardState.expectedCommand = threat.command;
    guardState.threatType = threat.type;
    guardState.threatValue = threat.value;
    guardState.intrusionExpiresAt = Date.now() + 20000;
    guardState.lastIntrusionDate = getTodayKey();
    document.body.classList.add('intrusion-alert');
    playSynthCue('hum');
    if (guardStatusText) guardStatusText.textContent = 'System Intrusion Alert';
    if (guardTerminal) {
        guardTerminal.textContent = [
            'INTRUSION ALERT: active rogue signature detected.',
            threat.label,
            'Run command before collapse:',
            guardState.expectedCommand
        ].join('\n');
    }
    showWithAnimation(guardPanel, 'ui-enter-pop');
    if (guardCommandInput) guardCommandInput.focus();
    persistGameplaySystems();
}

function showGuardPanel() {
    if (!requireUsername()) return;
    if (!guardState.intrusionActive) {
        if (guardStatusText) guardStatusText.textContent = getCleanArchitectureActive() ? 'Clean Architecture active' : 'System stable';
        if (guardTerminal) guardTerminal.textContent = getCleanArchitectureActive()
            ? 'Clean Architecture is active. Mental Health decay is blocked for this window.'
            : 'No active intrusion. Manual scan can trigger a security drill.';
    }
    showWithAnimation(guardPanel, 'ui-enter-pop');
}

function getCleanArchitectureActive() {
    return Date.now() < guardState.cleanArchitectureUntil;
}

function submitGuardCommand() {
    if (guardState.intrusionActive && Date.now() > guardState.intrusionExpiresAt) {
        failSecurityIntrusion();
        return;
    }
    const command = guardCommandInput ? guardCommandInput.value.trim() : '';
    if (!guardState.intrusionActive) {
        startSecurityIntrusion(true);
        return;
    }
    if (command !== guardState.expectedCommand) {
        if (guardTerminal) guardTerminal.textContent += '\nEVALUATION FAILED. Command mismatch.';
        return;
    }
    guardState.intrusionActive = false;
    guardState.cleanArchitectureUntil = Date.now() + CLEAN_ARCHITECTURE_MS;
    clearRogueFile('logicJammer');
    clearGlitchState();
    renderGuardState();
    if (guardCommandInput) guardCommandInput.value = '';
    if (guardStatusText) guardStatusText.textContent = 'Clean Architecture active';
    if (guardTerminal) guardTerminal.textContent = 'Quarantine complete. Clean Architecture active for 10 minutes.';
    addCurrency(40);
    persistGameplaySystems();
    markProfileDirty();
}

function failSecurityIntrusion() {
    guardState.intrusionActive = false;
    document.body.classList.remove('intrusion-alert');
    document.body.classList.add('screen-glitch');
    changeMentalHealth(-15);
    activateGlitchState('intrusion failure');
    if (guardTerminal) guardTerminal.textContent = 'QUARANTINE FAILED. System instability increased.';
    setTimeout(() => document.body.classList.remove('screen-glitch'), 900);
    persistGameplaySystems();
}

function maybeTriggerSecurityIntrusion() {
    if (!hasUsername() || guardState.intrusionActive || getCleanArchitectureActive()) return;
    if (guardState.lastIntrusionDate === getTodayKey()) return;
    if (Math.random() < 0.18) startSecurityIntrusion(false);
}

function renderGuardState() {
    document.body.classList.toggle('intrusion-alert', guardState.intrusionActive);
    if (guardState.intrusionActive && Date.now() > guardState.intrusionExpiresAt) failSecurityIntrusion();
    if (guardStatusText) {
        guardStatusText.textContent = guardState.intrusionActive
            ? 'System Intrusion Alert'
            : (getCleanArchitectureActive() ? 'Clean Architecture active' : 'System stable');
    }
}

function getGlitchResolvedAction(action) {
    if (!document.body.classList.contains('glitch-state')) return action;
    return glitchActionMap[action] || action;
}

function activateGlitchState(reason = 'low Mental Health') {
    if (document.body.classList.contains('glitch-state')) return;
    document.body.classList.add('glitch-state');
    typeText(`System Corruption active: ${reason}. Use Sandwich or quarantine to stabilize.`);
    shuffleGlitchActions();
    glitchTimer = setInterval(shuffleGlitchActions, 4000);
}

function clearGlitchState() {
    document.body.classList.remove('glitch-state');
    if (glitchTimer) clearInterval(glitchTimer);
    glitchTimer = null;
    restoreControlLabels();
    glitchActionMap.joke = 'joke';
    glitchActionMap.chaos = 'chaos';
    glitchActionMap.fakeAI = 'fakeAI';
}

function updateGlitchState() {
    if (userProfile.mentalHealth < 35 && hasBrain) activateGlitchState('Mental Health below 35%');
    if (userProfile.mentalHealth >= 45) clearGlitchState();
}

function cacheControlLabels() {
    const controls = [
        ['joke', document.querySelector('button[onclick="randomJoke()"]')],
        ['chaos', document.querySelector('button[onclick="chaos()"]')],
        ['fakeAI', document.querySelector('button[onclick="fakeAI()"]')]
    ];
    controls.forEach(([key, btn]) => {
        if (btn && !baseControlLabels[key]) baseControlLabels[key] = btn.textContent;
    });
}

function restoreControlLabels() {
    const buttons = {
        joke: document.querySelector('button[onclick="randomJoke()"]'),
        chaos: document.querySelector('button[onclick="chaos()"]'),
        fakeAI: document.querySelector('button[onclick="fakeAI()"]')
    };
    Object.keys(buttons).forEach((key) => {
        if (buttons[key] && baseControlLabels[key]) buttons[key].textContent = baseControlLabels[key];
    });
}

function shuffleGlitchActions() {
    cacheControlLabels();
    const actions = ['joke', 'chaos', 'fakeAI'].sort(() => Math.random() - 0.5);
    glitchActionMap.joke = actions[0];
    glitchActionMap.chaos = actions[1];
    glitchActionMap.fakeAI = actions[2];
    const buttons = {
        joke: document.querySelector('button[onclick="randomJoke()"]'),
        chaos: document.querySelector('button[onclick="chaos()"]'),
        fakeAI: document.querySelector('button[onclick="fakeAI()"]')
    };
    const labels = { joke: '😂 Joke', chaos: '🎲 Chaos', fakeAI: '🤖 Fake AI' };
    Object.keys(buttons).forEach((key) => {
        if (buttons[key]) buttons[key].textContent = labels[glitchActionMap[key]];
    });
}

function clearRogueFile(type) {
    if (!activeRogueFile || (type && activeRogueFile.type !== type)) return false;
    activeRogueFile = null;
    document.body.classList.remove('rogue-file-active');
    typeText('Rogue File neutralized.');
    persistGameplaySystems();
    return true;
}

function maybeTriggerRogueFile() {
    if (!hasUsername() || activeRogueFile) return;
    if (Math.random() > 0.22) return;
    const options = [
        { type: 'memoryDrain', name: 'Memory Drain.exe' },
        { type: 'logicJammer', name: 'Logic Jammer.sys' },
        { type: 'shardCollector', name: 'Shard Collector.bin' }
    ];
    activeRogueFile = options[Math.floor(Math.random() * options.length)];
    document.body.classList.add('rogue-file-active');
    showYuiDialogue([`Yui: Warning. ${activeRogueFile.name} executed in the background.`, 'Yui: Change strategy and neutralize it quickly.']);
    persistGameplaySystems();
}

function applyRogueFileTick() {
    if (!activeRogueFile) return;
    if (activeRogueFile.type === 'memoryDrain' && userProfile.exp > 0) {
        userProfile.exp = Math.max(0, userProfile.exp - 2);
        renderProfile();
    }
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

function updateSkillBar() {
    const charge = Math.max(0, Math.min(SPECIAL_MOVE_MAX, Math.round(specialMoveCharge)));
    const ready = specialMoveStocks > 0;
    const hasActiveMission = Boolean(activeMissionGame && activeMissionGame.active && !activeMissionGame.ended);

    if (skillChargeText) {
        skillChargeText.textContent = specialMoveStocks > 0
            ? `Ready x${specialMoveStocks}${charge > 0 ? ` + ${charge}%` : ''}`
            : `${charge}%`;
    }
    if (skillMeterFill) skillMeterFill.style.width = `${ready && charge === 0 ? SPECIAL_MOVE_MAX : charge}%`;
    if (skillBurstBtn) {
        skillBurstBtn.disabled = !ready;
        skillBurstBtn.title = ready ? `Burst stock ready: ${specialMoveStocks}` : 'Charge with Joke, Chaos, or Fake AI';
    }
    if (skillBar) {
        skillBar.classList.toggle('skill-ready', ready);
        skillBar.classList.toggle('skill-active', hasActiveMission);
    }
}

function chargeSpecialMove(amount) {
    if (!hasUsername()) return;
    const previousStocks = specialMoveStocks;
    specialMoveCharge += Math.ceil(amount * getSkillChargeMultiplier());
    while (specialMoveCharge >= SPECIAL_MOVE_MAX) {
        specialMoveCharge -= SPECIAL_MOVE_MAX;
        specialMoveStocks++;
    }
    updateSkillBar();

    if (specialMoveStocks > previousStocks) {
        if (skillBar) burstFromElement(skillBar, '0,255,204', 28);
        playSynthCue('ring');
        typeText(`Sword Skill ready x${specialMoveStocks}. Start a mission and press Burst.`);
        if (specialMoveStocks >= 3) {
            typeText('Dual Wield Overdrive ready. Double-tap Burst to activate.');
        }
    }
    persistGameplaySystems();
}

function burstActiveMission() {
    const now = Date.now();
    if (specialMoveStocks >= 3 && now - lastBurstClickAt < 550) {
        activateOverdrive();
        return;
    }
    lastBurstClickAt = now;
    if (specialMoveStocks <= 0) {
        typeText('Sword Skill is still charging.');
        updateSkillBar();
        return;
    }
    enterComboStandby();
}

let lastBurstClickAt = 0;

function fireLegacyBurstMission() {
    if (!activeMissionGame || !activeMissionGame.active || activeMissionGame.ended) {
        typeText('Burst needs an active mission.');
        updateSkillBar();
        return;
    }
    if (specialMoveStocks <= 0) {
        typeText('Sword Skill is still charging.');
        updateSkillBar();
        return;
    }

    const level = activeMissionGame.level;
    specialMoveStocks = Math.max(0, specialMoveStocks - 1);
    updateSkillBar();
    persistGameplaySystems();
    if (typeof particleBurst === 'function') {
        particleBurst(window.innerWidth / 2, window.innerHeight * 0.72, '0,255,204', 84);
    }
    setMissionGameStatus('Sword Skill Burst activated. Difficult stage cleared.');
    endMissionRun(level, true, 'Sword Skill Burst');
}

function enterComboStandby() {
    comboStandbyUntil = Date.now() + COMBO_STANDBY_MS;
    document.body.classList.add('combo-standby');
    if (comboStandbyTimer) clearTimeout(comboStandbyTimer);
    comboStandbyTimer = setTimeout(() => {
        if (Date.now() >= comboStandbyUntil) {
            document.body.classList.remove('combo-standby');
            comboStandbyUntil = 0;
            typeText('Combo Standby expired.');
        }
    }, COMBO_STANDBY_MS + 50);
    typeText('Combo Standby: press Joke, Chaos, or Fake AI within 3 seconds.');
}

function consumeComboStock() {
    specialMoveStocks = Math.max(0, specialMoveStocks - 1);
    comboStandbyUntil = 0;
    document.body.classList.remove('combo-standby');
    updateSkillBar();
    persistGameplaySystems();
}

function handleSwordCombo(action) {
    if (Date.now() >= comboStandbyUntil) return false;
    consumeComboStock();
    if (action === 'joke') {
        rewardMultiplierUntil = Date.now() + REWARD_MULTIPLIER_MS;
        clearRogueFile('shardCollector');
        typeText('Star Burst Stream active: EXP and Shards x3 for 30 seconds.');
        playSynthCue('chime');
    } else if (action === 'chaos') {
        const damage = Math.ceil(RAID_MAX_HP * 0.25);
        raidState.bossHp = Math.max(0, raidState.bossHp - damage);
        renderRaid();
        typeText(`The Eclipse hit the Floor Boss for ${damage} HP.`);
        playSynthCue('overdrive');
    } else if (action === 'fakeAI') {
        guardState.intrusionActive = false;
        mentalHealthLockUntil = Date.now() + MH_LOCK_MS;
        userProfile.mentalHealth = 100;
        updateMHBar();
        renderGuardState();
        typeText('System Overload purged intrusions and locked Mental Health at 100% for 3 minutes.');
        playSynthCue('ring');
    }
    persistGameplaySystems();
    markProfileDirty();
    return true;
}

function activateOverdrive() {
    if (specialMoveStocks < 3) return;
    specialMoveStocks -= 3;
    comboStandbyUntil = 0;
    document.body.classList.remove('combo-standby');
    overdriveUntil = Date.now() + OVERDRIVE_MS;
    document.body.classList.add('dual-wield-overdrive');
    updateSkillBar();
    playSynthCue('overdrive');
    typeText('Dual Wield Overdrive activated for 10 seconds.');
    if (overdriveTimer) clearTimeout(overdriveTimer);
    overdriveTimer = setTimeout(() => {
        document.body.classList.remove('dual-wield-overdrive');
        overdriveUntil = 0;
        typeText('Dual Wield Overdrive ended.');
        persistGameplaySystems();
    }, OVERDRIVE_MS);
    persistGameplaySystems();
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
    updateSkillBar();
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
    updateSkillBar();
    return runtime;
}

function endMissionRun(level, passed, detailText = '') {
    const runtime = getActiveMissionRuntime(level);
    if (!runtime || runtime.ended) return;
    runtime.ended = true;
    clearMissionRuntime(runtime);
    updateSkillBar();

    const reward = MISSION_EXP_REWARDS[level] || 0;
    if (passed) {
        const shards = Math.max(10, Math.ceil(reward * 0.4));
        addExp(reward);
        addCurrency(shards);
        if (level === 2) markDailyProgress('level2');
        if (level === 1 || level === 2) clearRogueFile('memoryDrain');
        maybeTriggerSecurityIntrusion();
        setMissionGameStatus(`Mission Level ${level} clear. +${reward} EXP, +${shards} Shards${detailText ? ` | ${detailText}` : ''}`);
        typeText(`Mission Level ${level} complete! +${reward} EXP, +${shards} Kitsune Shards`);
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
    const adminReady = usernameReady && isAdminUser();

    if (missionsBtn) missionsBtn.disabled = !usernameReady || (maxLevel <= 0 && !adminReady);
    missionOptionButtons.forEach((btn) => {
        const level = Number.parseInt(btn.dataset.missionLevel || '0', 10);
        const adminOnly = level === 5;
        const unlocked = adminOnly ? adminReady : usernameReady && level > 0 && level <= maxLevel;
        btn.classList.toggle('hidden', adminOnly && !adminReady);
        btn.disabled = !unlocked;
        btn.classList.toggle('locked', !unlocked);
    });
    if (missionHint) {
        missionHint.textContent = adminReady && maxLevel <= 0
            ? 'Admin Exclusive mission available.'
            : getMissionAccessHint(maxLevel);
    }

    if ((!usernameReady || (maxLevel <= 0 && !adminReady)) && activeMissionGame) {
        closeMissionGameWindow({ silent: true });
    }
}

function hideMissionSelector() {
    if (!missionSelector) return;
    hideWithAnimation(missionSelector, 'ui-exit-pop');
}

function showMissionSelector() {
    if (!requireUsername()) return;
    if (activeRogueFile && activeRogueFile.type === 'logicJammer') {
        typeText('Logic Jammer.sys locked Missions. Run Guard and bypass the active threat.');
        return;
    }
    updateMissionSelectorAvailability();
    const maxLevel = getMaxUnlockedMissionLevel();
    if (maxLevel <= 0 && !isAdminUser()) {
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

function runSystemDebugChallenge(runtime, onComplete) {
    if (!runtime || !runtime.active || !missionGameContent) return;

    clearMissionGameContent();
    const gameWrap = document.createElement('div');
    gameWrap.className = 'debug-game';
    const hint = document.createElement('div');
    hint.className = 'debug-hint';
    hint.textContent = 'Click moving bug icons before the system timer reaches zero.';
    const arena = document.createElement('div');
    arena.className = 'debug-arena';
    const readout = document.createElement('div');
    readout.className = 'debug-readout';
    gameWrap.appendChild(hint);
    gameWrap.appendChild(arena);
    gameWrap.appendChild(readout);
    missionGameContent.appendChild(gameWrap);

    const totalSeconds = (35 + getMissionTimerBonusSeconds()) * getMissionDurationMultiplier();
    const requiredFixes = 18;
    const maxLeaks = 6;
    let timeLeft = totalSeconds;
    let fixed = 0;
    let leaks = 0;
    let ended = false;
    let spawnDelay = 720;

    const updateStatus = () => {
        const status = `Admin Debug | Time ${timeLeft}s | Fixed ${fixed}/${requiredFixes} | Escaped ${leaks}/${maxLeaks}`;
        setMissionGameStatus(status);
        readout.textContent = status;
    };

    const finish = (passed, reason = '') => {
        if (ended || !runtime.active) return;
        ended = true;
        onComplete({ passed, reason, fixed, requiredFixes });
    };

    const spawnBug = () => {
        if (ended || !runtime.active) return;
        const bug = document.createElement('button');
        bug.type = 'button';
        bug.className = 'debug-bug';
        bug.textContent = 'BUG';
        const arenaRect = arena.getBoundingClientRect();
        const size = 48;
        const maxX = Math.max(0, arenaRect.width - size);
        const maxY = Math.max(0, arenaRect.height - size);
        const startX = Math.random() * maxX;
        const startY = Math.random() * maxY;
        const driftX = (Math.random() - 0.5) * Math.min(160, arenaRect.width * 0.38);
        const driftY = (Math.random() - 0.5) * Math.min(120, arenaRect.height * 0.34);
        bug.style.left = `${startX}px`;
        bug.style.top = `${startY}px`;
        bug.style.setProperty('--bug-x', `${driftX}px`);
        bug.style.setProperty('--bug-y', `${driftY}px`);
        arena.appendChild(bug);

        let resolved = false;
        const removeBug = (wasFixed) => {
            if (resolved) return;
            resolved = true;
            bug.remove();
            if (wasFixed) {
                fixed++;
                if (fixed >= requiredFixes) {
                    finish(true, 'All bugs patched');
                    return;
                }
            } else {
                leaks++;
                if (leaks >= maxLeaks) {
                    finish(false, 'Too many bugs escaped');
                    return;
                }
            }
            updateStatus();
        };

        bug.addEventListener('click', () => removeBug(true), { once: true });
        runtimeSetTimeout(runtime, () => removeBug(false), 1600);
        spawnDelay = Math.max(360, spawnDelay - 18);
        runtimeSetTimeout(runtime, spawnBug, spawnDelay);
    };

    runtimeSetInterval(runtime, () => {
        if (ended || !runtime.active) return;
        timeLeft--;
        if (timeLeft <= 0) {
            timeLeft = 0;
            updateStatus();
            finish(fixed >= requiredFixes, fixed >= requiredFixes ? 'Debug complete' : 'Debug timer expired');
            return;
        }
        updateStatus();
    }, 1000);

    updateStatus();
    runtimeSetTimeout(runtime, spawnBug, 420);
}

function startMissionLevel1() {
    const runtime = openMissionGameWindow(
        1,
        'Level 1 - Quick Reflex Trial',
        'Easy | 30s timer | React in under 1.5s | Need 15 points'
    );
    if (!runtime) return;
    runReflexChallenge(runtime, {
        durationSec: (30 + getMissionTimerBonusSeconds()) * getMissionDurationMultiplier(),
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
        showDurationMs: (5000 + (getMissionTimerBonusSeconds() * 1000)) * getMissionDurationMultiplier(),
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
        totalSeconds: (300 + getMissionTimerBonusSeconds()) * getMissionDurationMultiplier(),
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
        totalTimeLeft: (600 + getMissionTimerBonusSeconds()) * getMissionDurationMultiplier()
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

function startAdminDebugMission() {
    const runtime = openMissionGameWindow(
        5,
        'Admin Exclusive - System Debug',
        'Admin Only | Click moving bugs | Patch 18 before 6 escape'
    );
    if (!runtime) return;
    runSystemDebugChallenge(runtime, (result) => {
        if (!result) return;
        if (result.passed) endMissionRun(5, true, `Patched ${result.fixed}/${result.requiredFixes} bugs`);
        else endMissionRun(5, false, result.reason || `Patched ${result.fixed}/${result.requiredFixes} bugs`);
    });
}

function validateRankChange(requestedRank) {
    const isRoot = isRootAdminName(userProfile.username);
    const isAdmin = isAdminUser();

    if (!ADMIN_RANKS.includes(requestedRank)) {
        return { allowed: false, error: "Unknown rank selected" };
    }

    // Rule: Only Root Admin can access the "ROOT ADMIN" rank
    if (requestedRank === "ROOT ADMIN" && !isRoot) {
        return { allowed: false, error: "Access Denied: Root Only" };
    }

    // Rule: Admins can access Admin and all letter ranks (S, A, B, C, D)
    const standardTiers = ["ADMIN", "S", "A", "B", "C", "D"];
    if (isAdmin && standardTiers.includes(requestedRank)) {
        return { allowed: true };
    }

    // Rule: Root Admin can access everything
    if (isRoot) {
        return { allowed: true };
    }

    return { allowed: false, error: "Unauthorized Tier" };
}

function launchMissionLevel(level) {
    if (level === 1) startMissionLevel1();
    else if (level === 2) startMissionLevel2();
    else if (level === 3) startMissionLevel3();
    else if (level === 4) startMissionLevel4();
    else if (level === 5) startAdminDebugMission();
}

function completeSelectedMission(level) {
    if (!requireUsername()) return;
    const parsedLevel = Number.parseInt(level, 10);
    if (!Number.isFinite(parsedLevel) || parsedLevel < 1 || parsedLevel > 5) return;

    if (parsedLevel === 5) {
        if (!isAdminUser()) {
            typeText('Admin Exclusive mission locked. Verify admin access first.');
            return;
        }
        hideMissionSelector();
        launchMissionLevel(parsedLevel);
        return;
    }

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

function isRootAdminName(name = userProfile.username) {
    return ROOT_ADMIN_NAMES.includes(normalizeAdminName(name));
}

function computeAdminSecretSignature(scope, value = '') {
    const input = `${String(scope)}|${String(value).trim()}|${ADMIN_SECRET_PEPPER}`;
    let hash = 2166136261;
    for (let i = 0; i < input.length; i++) {
        hash ^= input.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }
    hash ^= hash >>> 13;
    hash = Math.imul(hash, 0x5bd1e995);
    hash ^= hash >>> 15;
    return (hash >>> 0).toString(16).padStart(8, '0');
}

function secureStringEqual(left, right) {
    if (typeof left !== 'string' || typeof right !== 'string') return false;
    if (left.length !== right.length) return false;
    let mismatch = 0;
    for (let i = 0; i < left.length; i++) {
        mismatch |= left.charCodeAt(i) ^ right.charCodeAt(i);
    }
    return mismatch === 0;
}

function verifyAdminPasswordInput(name, password) {
    const normalized = normalizeAdminName(name);
    const expected = ADMIN_PASSWORD_SIGNATURES[normalized];
    if (!expected) return false;
    const actual = computeAdminSecretSignature(normalized, String(password));
    return secureStringEqual(expected, actual);
}

function verifyRecoveryIdInput(recoveryId) {
    const actual = computeAdminSecretSignature('RECOVERY', String(recoveryId));
    return secureStringEqual(ADMIN_RECOVERY_SIGNATURE, actual);
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

function isAdminName(name = userProfile.username) {
    const normalized = normalizeAdminName(name);
    return Boolean(ADMIN_PASSWORD_SIGNATURES[normalized]);
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
    populateRankMenu();
    if (adminRankSelector) {
        const profileRank = adminCustomRank || userProfile.rank;
        adminRankSelector.value = ADMIN_RANKS.includes(profileRank) ? profileRank : "D";
    }
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

    const entered = adminPasswordInput ? adminPasswordInput.value : '';
    if (!verifyAdminPasswordInput(userProfile.username, entered)) {
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
    markProfileDirty();
    typeText('ADMIN ACCESS GRANTED: Full control enabled.');
}

function verifyRecoveryId() {
    if (!isAdminName()) return;
    applyAdminSecurityStateFor();
    if (!adminPermanentlyLocked) {
        typeText('Recovery ID is only needed for permanently locked admin accounts.');
        return;
    }

    const entered = adminRecoveryInput ? adminRecoveryInput.value : '';
    if (!verifyRecoveryIdInput(entered)) {
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
    markProfileDirty();
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

    if (adminCustomRank && !ADMIN_RANKS.includes(adminCustomRank)) {
        adminCustomRank = '';
        fixes.push('Cleared invalid rank override');
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
        const shouldDisableMissions = !usernameReady || (getMaxUnlockedMissionLevel() <= 0 && !isAdminUser());
        if (missionsBtn.disabled !== shouldDisableMissions) {
            missionsBtn.disabled = shouldDisableMissions;
            fixes.push('Synced Missions button state');
        }
    }

    if ((!usernameReady || (getMaxUnlockedMissionLevel() <= 0 && !isAdminUser())) && activeMissionGame) {
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

    const requestedRank = adminRankSelector ? adminRankSelector.value : '';
    const validation = validateRankChange(requestedRank);

    if (!validation.allowed) {
        alert(validation.error);
        return;
    }

    userProfile.level = parseIntSafe(adminLevelInput ? adminLevelInput.value : userProfile.level, userProfile.level, 1);
    userProfile.exp = parseIntSafe(adminExpInput ? adminExpInput.value : userProfile.exp, userProfile.exp, 0);
    userProfile.mentalHealth = parseIntSafe(adminMHInput ? adminMHInput.value : userProfile.mentalHealth, userProfile.mentalHealth, 0, 100);
    userProfile.username = nextUsername;
    const nextIsAdminName = isAdminName(userProfile.username);
    if (nextIsAdminName) {
        userProfile.rank = requestedRank;
        adminCustomRank = requestedRank;
    } else {
        userProfile.rank = "D";
        adminCustomRank = "D";
    }

    updateRank();
    renderProfile();
    updateMHBar();
    markDailyProgress('mh50');
    markProfileDirty();

    if (previousAdminName !== normalizeAdminName(userProfile.username)) {
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

    unlockFeatures();
    toggleAdminPanel();

    if (isAdminUser()) typeText('Admin changes applied.');
    else typeText(`Profile updated. Admin mode disabled for ${userProfile.username}.`);
}

function populateRankMenu() {
    const menu = document.getElementById('admin-rank-selector');
    if (!menu) return;
    const isRoot = isRootAdminName();
    
    // Filter the list: If not Root, remove the Root option
    const visibleRanks = isRoot ? ADMIN_RANKS : ADMIN_RANKS.filter(r => r !== "ROOT ADMIN");

    menu.innerHTML = visibleRanks.map(rank => 
        `<option value="${rank}">${getRankDisplayName(rank)}</option>`
    ).join('');
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
    updateProfileRankDisplay();
    profileLevel.textContent = userProfile.level;

    const needed = userProfile.level * 100;
    profileExpNeeded.textContent = needed;
    profileExp.textContent = userProfile.exp;

    const pct = needed > 0 ? Math.min(100, Math.round((userProfile.exp / needed) * 100)) : 0;
    if (expBar) expBar.style.width = pct + "%";

}

function getRankDisplayName(rank = userProfile.rank) {
    if (rank === "ROOT ADMIN" || rank === "ADMIN") return rank;
    if (["S", "A", "B", "C", "D"].includes(rank)) return `${rank} RANK`;
    return "D RANK";
}

let rankPopupTimer = null;
let rankPopupHideTimer = null;
let particleBurst = () => {};

function showRankPopup(oldRank, newRank) {
    if (!rankPopup || !rankPopupText || oldRank === newRank) return;

    const direction = (RANK_ORDER[newRank] || 0) > (RANK_ORDER[oldRank] || 0) ? "UP" : "DOWN";
    const icon = direction === "UP" ? "⬆" : "⬇";

    rankPopupText.textContent = `${icon} RANK ${direction}! ${getRankDisplayName(oldRank)} → ${getRankDisplayName(newRank)}`;
    rankPopup.style.background = RANK_POPUP_BACKGROUNDS[newRank] || RANK_POPUP_BACKGROUNDS.D;

    let burstColor = "0,255,200";
    if (newRank === "S") burstColor = "255,215,0";
    else if (newRank === "A") burstColor = "0,255,200";
    else if (newRank === "B") burstColor = "0,150,255";
    else if (newRank === "C") burstColor = "255,150,0";
    else if (newRank === "D") burstColor = "255,50,50";
    else if (newRank === "ADMIN" || newRank === "ROOT ADMIN") burstColor = "180,80,255";
    particleBurst(window.innerWidth / 2, window.innerHeight / 2, burstColor, 90);

    clearTimeout(rankPopupTimer);
    clearTimeout(rankPopupHideTimer);
    rankPopup.classList.remove('hidden');
    void rankPopup.offsetWidth;
    rankPopup.classList.add('show');

    rankPopupTimer = window.setTimeout(() => {
        rankPopup.classList.remove('show');
        rankPopupHideTimer = window.setTimeout(() => {
            rankPopup.classList.add('hidden');
        }, 500);
    }, 2500);
}

function updateProfileRankDisplay() {
    if (!profileRank) return;
    profileRank.textContent = getRankDisplayName();
    profileRank.classList.remove(...Object.values(RANK_CLASS_MAP));
    profileRank.classList.add(RANK_CLASS_MAP[userProfile.rank] || RANK_CLASS_MAP.D);
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
    burstFromElement(registerPanel, adminAttempt ? "180,80,255" : "0,255,200", 34);
    markProfileDirty();
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

// Expose only UI handlers required by inline HTML attributes.
window.randomJoke = randomJoke;
window.chaos = chaos;
window.fakeAI = fakeAI;
window.addBrain = addBrain;


if (setUsernameBtn) setUsernameBtn.addEventListener('click', setUsernameFromInput);
if (usernameInput) usernameInput.addEventListener('keydown', (e)=>{ if (e.key === 'Enter') setUsernameFromInput(); });
if (changeUsernameBtn) changeUsernameBtn.addEventListener('click', showRegisterPanel);
if (verifyAdminBtn) verifyAdminBtn.addEventListener('click', verifyAdminPassword);
if (adminPasswordInput) adminPasswordInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') verifyAdminPassword(); });
if (verifyRecoveryBtn) verifyRecoveryBtn.addEventListener('click', verifyRecoveryId);
if (adminRecoveryInput) adminRecoveryInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') verifyRecoveryId(); });
if (adminApplyBtn) adminApplyBtn.addEventListener('click', applyAdminChanges);
if (adminToggleBtn) adminToggleBtn.addEventListener('click', toggleAdminPanelVisibility);
if (profileSaveBtn) profileSaveBtn.addEventListener('click', saveProfile);
if (eraseSaveBtn) eraseSaveBtn.addEventListener('click', eraseSavedProfile);
if (updateCatalogBtn) updateCatalogBtn.addEventListener('click', showUpdateCatalog);
if (updateCatalogCloseBtn) updateCatalogCloseBtn.addEventListener('click', hideUpdateCatalog);
if (dailyBtn) dailyBtn.addEventListener('click', showDailyPanel);
if (dailyCloseBtn) dailyCloseBtn.addEventListener('click', () => closeSystemPanel(dailyPanel));
if (dailyClaimBtn) dailyClaimBtn.addEventListener('click', claimDailyReward);
if (shopBtn) shopBtn.addEventListener('click', showShopPanel);
if (shopCloseBtn) shopCloseBtn.addEventListener('click', () => closeSystemPanel(shopPanel));
if (useSandwichBtn) useSandwichBtn.addEventListener('click', useSandwich);
shopItemButtons.forEach((btn) => btn.addEventListener('click', () => buyShopItem(btn.dataset.shopItem)));
if (raidBtn) raidBtn.addEventListener('click', showRaidPanel);
if (raidCloseBtn) raidCloseBtn.addEventListener('click', () => closeSystemPanel(raidPanel));
if (raidAttackBtn) raidAttackBtn.addEventListener('click', () => runRaidAction('attack'));
if (raidDefendBtn) raidDefendBtn.addEventListener('click', () => runRaidAction('defend'));
if (raidAnalyzeBtn) raidAnalyzeBtn.addEventListener('click', () => runRaidAction('analyze'));
if (raidBurstBtn) raidBurstBtn.addEventListener('click', burstRaidBoss);
if (guardBtn) guardBtn.addEventListener('click', showGuardPanel);
if (guardCloseBtn) guardCloseBtn.addEventListener('click', () => closeSystemPanel(guardPanel));
if (guardSubmitBtn) guardSubmitBtn.addEventListener('click', submitGuardCommand);
if (guardCommandInput) guardCommandInput.addEventListener('keydown', (event) => { if (event.key === 'Enter') submitGuardCommand(); });
if (missionsBtn) missionsBtn.addEventListener('click', showMissionSelector);
if (skillBurstBtn) skillBurstBtn.addEventListener('click', burstActiveMission);
if (missionCloseBtn) missionCloseBtn.addEventListener('click', hideMissionSelector);
if (missionGameCloseBtn) missionGameCloseBtn.addEventListener('click', () => closeMissionGameWindow());
missionOptionButtons.forEach((btn) => {
    btn.addEventListener('click', () => completeSelectedMission(btn.dataset.missionLevel));
});
if (profileSettingsBtn && profileSettingsMenu) {
    profileSettingsBtn.addEventListener('click', () => {
        const willShow = profileSettingsMenu.classList.contains('hidden');
        profileSettingsMenu.classList.toggle('hidden', !willShow);
        profileSettingsBtn.setAttribute('aria-expanded', willShow ? 'true' : 'false');
    });
}
if (graphicsToggleBtn && graphicsOptions) {
    graphicsToggleBtn.addEventListener('click', () => {
        graphicsOptions.classList.toggle('hidden');
    });
}
graphicsOptionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        applyGraphicsLevel(btn.dataset.graphicsLevel, { announce: true });
    });
});
if (adminPanel) adminPanel.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        applyAdminChanges();
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && updateCatalogPanel && !updateCatalogPanel.classList.contains('hidden')) {
        hideUpdateCatalog();
    }
    if (event.key === 'Escape') {
        [dailyPanel, shopPanel, raidPanel, guardPanel].forEach((panel) => {
            if (panel && !panel.classList.contains('hidden')) closeSystemPanel(panel);
        });
    }
});
document.addEventListener('pointerdown', addButtonRipple, { passive: true });
document.addEventListener('pointerdown', (event) => {
    if (!profileSettingsMenu || profileSettingsMenu.classList.contains('hidden')) return;
    if (event.target.closest('#profile-panel')) return;
    profileSettingsMenu.classList.add('hidden');
    if (profileSettingsBtn) profileSettingsBtn.setAttribute('aria-expanded', 'false');
}, { passive: true });
window.addEventListener('beforeunload', (event) => {
    if (!hasUnsavedProfileChanges) return;
    event.preventDefault();
    event.returnValue = 'Save User Data Before Leaving';
});

// show or hide registration panel depending on username
const restoredProfile = loadSavedProfile();
loadGameplaySystems();
if (registerPanel) {
    if (userProfile.username && userProfile.username.length) {
        hideWithAnimation(registerPanel, 'ui-exit-drop');
        unlockFeatures();
        if (restoredProfile) typeText('Data Link Start: saved user data restored.');
    } else {
        lockFeatures();
        // if no username, focus input for convenience
        showRegisterPanel();
    }
}
updateSkillBar();
renderDaily();
renderShop();
renderRaid();
renderGuardState();
cacheControlLabels();
updateGlitchState();
if (Date.now() < overdriveUntil) {
    document.body.classList.add('dual-wield-overdrive');
    overdriveTimer = setTimeout(() => {
        document.body.classList.remove('dual-wield-overdrive');
        overdriveUntil = 0;
        persistGameplaySystems();
    }, overdriveUntil - Date.now());
}
rogueFileTimer = setInterval(() => {
    maybeTriggerRogueFile();
    applyRogueFileTick();
}, ROGUE_FILE_INTERVAL_MS);
setInterval(() => {
    applyRogueFileTick();
    renderGuardState();
}, 1000);

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
    const finalAmount = Math.ceil(amount * getRewardMultiplier());

    userProfile.exp += finalAmount;

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

    updateProfileRankDisplay();

    // notify player
    if (levelUps > 1) {
        playSynthCue('chime');
        typeText(`LEVEL UP x${levelUps}! You are now Level ${newLevel}`);
    } else if (levelUps === 1) {
        playSynthCue('chime');
        typeText(`LEVEL UP! You are now Level ${newLevel}`);
    }
    markProfileDirty();

}

function updateRank() {
    const oldRank = userProfile.rank;
    let newRank;

    if (adminCustomRank && ADMIN_RANKS.includes(adminCustomRank)) {
        newRank = adminCustomRank;
    } else if (isAdminUser()) {
        // Check if the user is a verified Admin
        const normalizedName = normalizeAdminName(userProfile.username);
        
        if (isRootAdminName(normalizedName)) {
            newRank = "ROOT ADMIN";
        } else {
            // Default rank for other admins or custom set ranks
            newRank = adminCustomRank || "ADMIN";
        }
    } else if (userProfile.level >= 20) {
        newRank = "S";
    } else if (userProfile.level >= 15) {
        newRank = "A";
    } else if (userProfile.level >= 10) {
        newRank = "B";
    } else if (userProfile.level >= 5) {
        newRank = "C";
    } else {
        newRank = "D";
    }

    userProfile.rank = newRank;
    if (newRank !== oldRank) showRankPopup(oldRank, newRank);
}

/* ================== Mental Health System (Upgrade 2) ================== */
function updateMHBar() {
    const hp = userProfile.mentalHealth;
    const didMentalHealthChange = lastRenderedMentalHealth !== hp;
    let mhGlow = "rgba(255,0,0,0.75)";
    if (!hasBrain) {
        mhBar.style.width = "0%";
        mhText.textContent = NO_BRAIN_TEXT;
        mhText.style.color = "#ffd1d1";
        mhText.style.textShadow = "0 0 6px rgba(0,0,0,0.9), 0 0 8px rgba(255,45,45,0.65)";
        mhBar.style.background = "linear-gradient(to right, #ff4c4c,#ff0000)";
        mhBar.style.boxShadow = `0 0 15px ${mhGlow}`;
        updateMissionSelectorAvailability();
        resetYuiEmergencyTracking();
        lastRenderedMentalHealth = null;
        return;
    }

    mhBar.style.width = hp + "%";
    mhText.textContent = `Mental Health: ${hp}%`;
    mhText.style.color = hp <= 25 ? "#ffe8e8" : "#001412";
    mhText.style.textShadow = hp <= 25 ? "0 0 6px rgba(0,0,0,0.9), 0 0 8px rgba(255,45,45,0.65)" : "0 1px 2px rgba(255,255,255,0.45)";

    if (hp <= 25) {
        mhBar.style.background = "linear-gradient(to right, #ff4c4c,#ff0000)";
        mhGlow = "rgba(255,0,0,0.75)";
    } else if (hp <= 50) {
        mhBar.style.background = "linear-gradient(to right, #ff8c00,#ffaa00)";
        mhGlow = "rgba(255,170,0,0.75)";
    } else if (hp <= 75) {
        mhBar.style.background = "linear-gradient(to right, #ffff00,#aaff00)";
        mhGlow = "rgba(220,255,0,0.75)";
    } else {
        mhBar.style.background = "linear-gradient(to right, #00ff00,#00cc00)";
        mhGlow = "rgba(0,255,0,0.75)";
    }
    mhBar.style.boxShadow = `0 0 15px ${mhGlow}`;
    if (didMentalHealthChange) pulseElement(mhContainer, 'mh-pulse', 440);
    checkYuiEmergencyDialogue(hp);
    lastRenderedMentalHealth = hp;

    updateMissionSelectorAvailability();
}

function changeMentalHealth(amount) {
    if (amount < 0 && isMentalHealthLocked()) {
        userProfile.mentalHealth = 100;
        updateMHBar();
        typeText('System Overload locked Mental Health at 100%.');
        return;
    }
    if (amount < 0 && getCleanArchitectureActive()) {
        typeText('Clean Architecture blocked Mental Health decay.');
        return;
    }
    userProfile.mentalHealth += amount;

    if (userProfile.mentalHealth < 0) userProfile.mentalHealth = 0;
    if (userProfile.mentalHealth > 100) userProfile.mentalHealth = 100;

    updateMHBar();
    updateGlitchState();
    markProfileDirty();

    if (userProfile.mentalHealth === 0) {
        triggerSystemLock();
    }
}

function triggerSystemLock() {
    alert("⚠ SYSTEM LOCKED ⚠\nMental Health Critical\nForced Rest Required");
}

/* ================== Typing Effect ================== */
function typeText(text) {
    if (lastTypingInterval) clearInterval(lastTypingInterval);
    output.textContent = "";
    restartAnimation(output, 'output-refresh');
    let i = 0;
    lastTypingInterval = setInterval(() => {
        output.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(lastTypingInterval);
            lastTypingInterval = null;
        }
    }, 25);
}

/* ================== Fun Buttons ================== */
function randomJoke() {
    if (!requireUsername()) return;
    if (handleSwordCombo('joke')) return;
    const resolvedAction = getGlitchResolvedAction('joke');
    if (resolvedAction !== 'joke') return runCoreAction(resolvedAction);
    const jokes = [
        "Why are you smiling? Nothing changed 😏",
        "This app is working harder than you.",
        "Congratulations. You clicked a button.",
        "Error 404: Motivation not found."
    ];
    typeText(jokes[Math.floor(Math.random() * jokes.length)]);
    chargeSpecialMove(22);
}

function chaos() {
    if (!requireUsername()) return;
    if (handleSwordCombo('chaos')) return;
    const resolvedAction = getGlitchResolvedAction('chaos');
    if (resolvedAction !== 'chaos') return runCoreAction(resolvedAction);
    const chaos = [
        "System scanning brain... 12% 🧠",
        "Loading common sense... failed ❌",
        "Do not press buttons randomly.",
        "Chaos level increased by +1 🔥"
    ];
    typeText(chaos[Math.floor(Math.random() * chaos.length)]);
    markDailyProgress('chaos');
    chargeSpecialMove(28);
}

function fakeAI() {
    if (!requireUsername()) return;
    if (handleSwordCombo('fakeAI')) return;
    const resolvedAction = getGlitchResolvedAction('fakeAI');
    if (resolvedAction !== 'fakeAI') return runCoreAction(resolvedAction);
    const ai = [
        "I am an AI. Trust me.",
        "The answer is yes. Or no.",
        "Have you tried rebooting yourself?",
        "Studying is good. Memes are better."
    ];
    typeText(ai[Math.floor(Math.random() * ai.length)]);
    chargeSpecialMove(25);
}

function runCoreAction(action) {
    if (action === 'joke') {
        const jokes = [
            "Why are you smiling? Nothing changed.",
            "This app is working harder than you.",
            "Congratulations. You clicked a button.",
            "Error 404: Motivation not found."
        ];
        typeText(jokes[Math.floor(Math.random() * jokes.length)]);
        chargeSpecialMove(22);
    } else if (action === 'chaos') {
        const lines = [
            "System scanning brain... 12%",
            "Loading common sense... failed",
            "Do not press buttons randomly.",
            "Chaos level increased by +1"
        ];
        typeText(lines[Math.floor(Math.random() * lines.length)]);
        markDailyProgress('chaos');
        chargeSpecialMove(28);
    } else {
        const lines = [
            "I am an AI. Trust me.",
            "The answer is yes. Or no.",
            "Have you tried rebooting yourself?",
            "Studying is good. Memes are better."
        ];
        typeText(lines[Math.floor(Math.random() * lines.length)]);
        chargeSpecialMove(25);
    }
    if (Date.now() < overdriveUntil) {
        addExp(9);
        addCurrency(6);
    }
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
                markProfileDirty();
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
let lastYuiEmergencyMh = null;
let yuiEmergencyShown = false;

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

const emergencyDialogues = [
    "Yui: Emergency alert. Your Mental Health is below 10%.",
    "Yui: Stop pushing forward for a moment.",
    "Yui: Use Increase Mental Health before the system locks you out."
];

const emergencyDialoguePoses = [
    "pose-warning",
    "pose-serious",
    "pose-guide"
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
    if (dialogArray === emergencyDialogues) return emergencyDialoguePoses[index] || "pose-warning";
    if (dialogArray === postQuizDialogues) return postQuizDialoguePoses[index] || "pose-neutral";
    return "pose-neutral";
}

function resetYuiEmergencyTracking() {
    lastYuiEmergencyMh = null;
    yuiEmergencyShown = false;
}

function checkYuiEmergencyDialogue(currentMh) {
    const mh = Math.max(0, Math.min(100, Number.parseInt(currentMh, 10) || 0));
    const droppedIntoCritical = lastYuiEmergencyMh !== null && lastYuiEmergencyMh >= 10 && mh < 10;

    if (mh >= 10) {
        yuiEmergencyShown = false;
    } else if (droppedIntoCritical && !yuiEmergencyShown) {
        yuiEmergencyShown = true;
        showYuiDialogue(emergencyDialogues);
    }

    lastYuiEmergencyMh = mh;
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
    { question: "2+2?", options: ["3","4","5","22"], answer: 2 },
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
    const buttons = Array.from(quizAnswers.querySelectorAll('.quiz-answer-btn'));
    buttons.forEach((btn) => {
        btn.disabled = true;
    });
    if (buttons[correct]) buttons[correct].classList.add('answer-correct');
    if (selected !== correct && buttons[selected]) buttons[selected].classList.add('answer-wrong');
    burstFromElement(buttons[selected], selected === correct ? "80,255,140" : "255,70,110", selected === correct ? 28 : 16);

    window.setTimeout(() => {
        if(currentQ===quizData.length-1 && selected!==correct){
            changeMentalHealth(-100);
        } else {
            if(selected===correct) changeMentalHealth(10);
            else changeMentalHealth(-5);
        }

        currentQ++;
        if(currentQ<quizData.length) showQuestion();
        else finishQuiz();
    }, prefersReducedMotion ? 0 : 520);
}

function finishQuiz(){
    hideWithAnimation(quizContainer, 'ui-exit-pop', completeMission);
}

// Initialize UI bindings
applyGraphicsLevel(currentGraphicsLevel, { persist: false });
initAdminDragSystem();
renderProfile();
updateMHBar();
runAutoBugFix({ silent: true });
autoBugFixAPI.start();

const particleCanvas = document.getElementById("particles");
const particleCtx = particleCanvas ? particleCanvas.getContext("2d") : null;

if (particleCanvas && particleCtx) {
    const particlePointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };
    let particleConfig = getGraphicsConfig();
    let particleDpr = Math.min(window.devicePixelRatio || 1, particleConfig.particleDpr);
    let particleAnimationId = null;
    let particleFrame = 0;
    let isParticleLoopPaused = document.hidden || prefersReducedMotion;
    let resizeParticleRaf = null;

    function resizeParticleCanvas() {
        particleDpr = Math.min(window.devicePixelRatio || 1, particleConfig.particleDpr);
        particleCanvas.width = Math.floor(window.innerWidth * particleDpr);
        particleCanvas.height = Math.floor(window.innerHeight * particleDpr);
        particleCanvas.style.width = `${window.innerWidth}px`;
        particleCanvas.style.height = `${window.innerHeight}px`;
        particleCtx.setTransform(particleDpr, 0, 0, particleDpr, 0, 0);
    }

    resizeParticleCanvas();
    window.addEventListener("resize", () => {
        if (resizeParticleRaf) return;
        resizeParticleRaf = requestAnimationFrame(() => {
            resizeParticleRaf = null;
            resizeParticleCanvas();
        });
    });
    window.addEventListener("pointermove", (event) => {
        if (!particleConfig.pointer || prefersReducedMotion) return;
        particlePointer.x = event.clientX;
        particlePointer.y = event.clientY;
        particlePointer.active = true;
    }, { passive: true });
    window.addEventListener("pointerleave", () => {
        particlePointer.active = false;
    });

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.size = Math.random() * (currentGraphicsLevel === "highest" ? 2.8 : 2.2) + 0.7;
            this.speedY = Math.random() * 0.55 + 0.16;
            this.speedX = (Math.random() - 0.5) * 0.18;
            this.opacity = Math.random() * 0.65 + 0.25;
            this.phase = Math.random() * Math.PI * 2;
        }

        update() {
            const speedMultiplier = document.body.classList.contains('glitch-state') ? 3 : 1;
            this.phase += 0.018;
            this.x += (this.speedX + Math.sin(this.phase) * 0.08) * speedMultiplier;
            this.y -= this.speedY * speedMultiplier;

            if (particlePointer.active) {
                const dx = this.x - particlePointer.x;
                const dy = this.y - particlePointer.y;
                const distanceSq = dx * dx + dy * dy;
                if (distanceSq < 16000 && distanceSq > 1) {
                    const force = (16000 - distanceSq) / 16000;
                    this.x += (dx / Math.sqrt(distanceSq)) * force * 1.2;
                    this.y += (dy / Math.sqrt(distanceSq)) * force * 1.2;
                }
            }

            if (this.y < -8 || this.x < -8 || this.x > window.innerWidth + 8) {
                this.reset();
                this.y = window.innerHeight + 8;
            }
        }

        draw() {
            particleCtx.beginPath();
            particleCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            const mentalHealth = userProfile.mentalHealth;
            let color;

            if (mentalHealth <= 25) {
                color = `rgba(255,50,50,${this.opacity})`;
            } else if (mentalHealth <= 50) {
                color = `rgba(255,150,0,${this.opacity})`;
            } else if (mentalHealth <= 75) {
                color = `rgba(255,255,100,${this.opacity})`;
            } else {
                color = `rgba(0,255,180,${this.opacity})`;
            }

            particleCtx.fillStyle = color;
            if (particleConfig.shadows && !prefersReducedMotion) {
                particleCtx.shadowColor = color;
                particleCtx.shadowBlur = 8;
            }
            particleCtx.fill();
            particleCtx.shadowBlur = 0;
        }
    }

    const particlesArray = [];
    function syncBaseParticles() {
        if (prefersReducedMotion) {
            particlesArray.length = 0;
            return;
        }
        while (particlesArray.length < particleConfig.baseParticles) {
            particlesArray.push(new Particle());
        }
        while (particlesArray.length > particleConfig.baseParticles) {
            particlesArray.pop();
        }
    }

    for (let i = 0; i < particleConfig.baseParticles; i++) {
        particlesArray.push(new Particle());
    }

    particleBurst = function burstParticles(x, y, color, amount = 40) {
        if (prefersReducedMotion || document.hidden) return;
        const cappedAmount = Math.min(amount, particleConfig.burstCap, Math.max(0, particleConfig.maxParticles - particlesArray.length));
        for (let i = 0; i < cappedAmount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * (currentGraphicsLevel === "highest" ? 4.4 : 2.8) + 0.6;
            particlesArray.push({
                x,
                y,
                size: Math.random() * (currentGraphicsLevel === "highest" ? 3.4 : 2.4) + 1,
                speedX: Math.cos(angle) * speed,
                speedY: Math.sin(angle) * speed,
                life: Math.floor(Math.random() * 28) + 46,
                maxLife: 74,
                opacity: 1,
                color
            });
        }
    };

    function animateParticles() {
        if (isParticleLoopPaused) {
            particleAnimationId = null;
            return;
        }
        particleFrame++;
        particleCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for (let i = particlesArray.length - 1; i >= 0; i--) {
            const particle = particlesArray[i];

            if (particle.life !== undefined) {
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                particle.speedX *= 0.982;
                particle.speedY *= 0.982;
                particle.life--;
                particle.opacity = Math.max(0, particle.life / particle.maxLife);

                particleCtx.beginPath();
                particleCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                if (particleConfig.shadows && !prefersReducedMotion) {
                    particleCtx.shadowColor = `rgba(${particle.color},${Math.max(0, particle.opacity)})`;
                    particleCtx.shadowBlur = 14;
                }
                particleCtx.fillStyle = `rgba(${particle.color},${Math.max(0, particle.opacity)})`;
                particleCtx.fill();
                particleCtx.shadowBlur = 0;

                if (particle.life <= 0 || particle.opacity <= 0) {
                    particlesArray.splice(i, 1);
                }
            } else {
                particle.update();
                particle.draw();
            }
        }

        if (particlePointer.active && particleConfig.pointer && !prefersReducedMotion) {
            particleCtx.beginPath();
            particleCtx.arc(particlePointer.x, particlePointer.y, 38, 0, Math.PI * 2);
            particleCtx.strokeStyle = "rgba(0,255,204,0.09)";
            particleCtx.lineWidth = 1;
            particleCtx.stroke();
        }

        if (particleConfig.linkEvery > 0 && particleFrame % particleConfig.linkEvery === 0 && particlesArray.length > 1 && !prefersReducedMotion) {
            const linkLimit = Math.min(particlesArray.length, particleConfig.linkLimit);
            for (let i = 0; i < linkLimit; i++) {
                const a = particlesArray[i];
                if (a.life !== undefined) continue;
                for (let j = i + 1; j < linkLimit; j++) {
                    const b = particlesArray[j];
                    if (b.life !== undefined) continue;
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 92) {
                        particleCtx.beginPath();
                        particleCtx.moveTo(a.x, a.y);
                        particleCtx.lineTo(b.x, b.y);
                        particleCtx.strokeStyle = `rgba(0,255,204,${(1 - distance / 92) * 0.13})`;
                        particleCtx.lineWidth = 0.7;
                        particleCtx.stroke();
                    }
                }
            }
        }

        particleAnimationId = requestAnimationFrame(animateParticles);
    }

    function startParticleLoop() {
        if (prefersReducedMotion || particleAnimationId) return;
        isParticleLoopPaused = false;
        particleAnimationId = requestAnimationFrame(animateParticles);
    }

    function stopParticleLoop() {
        isParticleLoopPaused = true;
        if (particleAnimationId) {
            cancelAnimationFrame(particleAnimationId);
            particleAnimationId = null;
        }
    }

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) stopParticleLoop();
        else startParticleLoop();
    });

    window.addEventListener('kitsune:graphics-change', () => {
        particleConfig = getGraphicsConfig();
        particlePointer.active = false;
        resizeParticleCanvas();
        syncBaseParticles();
        if (document.hidden || prefersReducedMotion) stopParticleLoop();
        else startParticleLoop();
    });

    startParticleLoop();
}
