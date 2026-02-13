/* ================== DOM ================== */
const output = document.getElementById("output");
const loadingWindow = document.getElementById("loadingWindow");
const mhText = document.querySelector(".mh-text");
const mhBar = document.querySelector(".mh-bar");
const increaseBtn = document.getElementById("increaseMHBtn");

const quizContainer = document.getElementById("quiz-container");
const quizQuestion = document.getElementById("quiz-question");
const quizAnswers = document.getElementById("quiz-answers");

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
        if (btn.disabled !== shouldDisable && btn !== increaseBtn) {
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

    // Keep admin surfaces in sync.
    toggleAdminPanel();
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
    hideAdminPasswordPanel();
    toggleAdminPanel();
}

function unlockFeatures() {
    lockedControls.forEach((btn) => {
        btn.disabled = false;
    });
    // Keep mission flow intact for normal users; verified ADMIN gets full access.
    if (increaseBtn) increaseBtn.disabled = !isAdminUser();
    toggleAdminPanel();
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

function getPoseForDialogue(dialogArray, index) {
    if (dialogArray === initialDialogues) return initialDialoguePoses[index] || "pose-neutral";
    if (dialogArray === warningDialogues) return warningDialoguePoses[index] || "pose-neutral";
    return "pose-neutral";
}

increaseBtn.addEventListener("click", () => {
    if (!requireUsername()) return;
    showYuiDialogue(warningDialogues);
});

/* ================== Mission System (Upgrade 3) ================== */
function completeMission() {
    if (!requireUsername()) return;
    addExp(50);
    changeMentalHealth(10);
    typeText("MISSION COMPLETE ✔ +50 EXP +10% Mental Health");
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
