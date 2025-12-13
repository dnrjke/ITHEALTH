/* ================================================
   IT&HEALTH - 통합 스크립트 (I18n & Logic Refactoring)
   ================================================ */

// 전역 상태 관리
let currentLang = 'KR';
const timerState = {
    mode: null,
    guideType: null,
    isRunning: false,
    isPaused: false,
    currentStep: null,
    currentTime: 0,
    totalTime: 0,
    intervalId: null,
    scrollPosition: 0,
    steps: [] // 현재 언어의 텍스트와 지속시간이 병합된 데이터
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 IT&HEALTH 초기화 시작...');
    
    // 1. 기본 UI 및 기능 초기화
    initNavigation();
    initTheme();
    initScrollToTop();
    
    // 2. 다국어 초기화 (가장 중요: 여기서 초기 텍스트를 모두 렌더링)
    initI18n(); 
    
    // 3. 기능 모듈 초기화 (I18n 데이터 로드 후 이벤트 바인딩)
    initChecklist(); 
    initTimerEvents(); 

    console.log('🎉 모든 초기화 완료!');
});

/* ================================================
   I18N - 다국어 지원 시스템 (Core)
   ================================================ */

function initI18n() {
    // HTML 요소 텍스트 업데이트 헬퍼
    function updateText(id, text) {
        if (!text) return;
        const el = document.getElementById(id);
        if (el) el.innerHTML = text; // 태그 포함 텍스트 지원
    }

    // 언어 변경 메인 함수
    function setLang(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        const t = translations[lang];

        // --- 1. 헤더 & 공통 ---
        updateText('nav-guide-text', t.header.guide);
        updateText('nav-rest-text', t.header.rest);
        updateText('nav-check-text', t.header.check);
        
        // --- 2. 히어로 섹션 ---
        updateText('poster-title', t.hero.title);
        updateText('poster-subtitle', t.hero.subtitle);
        updateText('poster-description', t.hero.description);
        updateText('btn-start-text', t.hero.btnStart);
        updateText('btn-break-text', t.hero.btnBreak);
        updateText('btn-check-text', t.hero.btnCheck);

        // --- 3. 네비게이션 탭 이름 & 설명 ---
        const tabMap = {
            'headache': 'headache', 'turtle-neck': 'turtle', 'hand-pain': 'hand',
            'eye-health': 'eye', 'back-health': 'back', 'face-tension': 'face'
        };
        Object.keys(tabMap).forEach(domKey => {
            const dataKey = tabMap[domKey];
            const navItem = document.querySelector(`.nav-item[data-tab="${domKey}"]`);
            if (navItem) {
                navItem.querySelector('.nav-text').textContent = t.tabs[dataKey];
                navItem.querySelector('.nav-description').textContent = t.navDesc[dataKey];
            }
        });

        // --- 4. 건강 가이드 각 섹션 ---
        updateGuideContent('headache', t.headache);
        updateGuideContent('turtle-neck', t.turtle, 'tn'); 
        updateGuideContent('hand-pain', t.hand, 'hp');
        updateGuideContent('eye-health', t.eye, 'eye');
        updateGuideContent('back-health', t.back, 'back');
        updateGuideContent('face-tension', t.face, 'face');

        // --- 5. 가이드 소개 페이지 ---
        updateText('intro-main-title', t.intro.mainTitle);
        updateText('intro-lead-1', t.intro.lead1);
        updateText('intro-lead-2', t.intro.lead2);
        updateText('intro-purpose-title', t.intro.purposeTitle);
        updateText('intro-purpose-1', t.intro.purpose1);
        updateText('intro-purpose-2', t.intro.purpose2);
        updateText('intro-purpose-3', t.intro.purpose3);
        
        updateText('intro-content-title', t.intro.contentTitle);
        updateText('intro-card1-title', t.intro.card1Title);
        updateText('intro-card1-desc', t.intro.card1Desc);
        updateText('intro-card2-title', t.intro.card2Title);
        updateText('intro-card2-desc', t.intro.card2Desc);
        updateText('intro-card3-title', t.intro.card3Title);
        updateText('intro-card3-desc', t.intro.card3Desc);

        updateText('intro-howto-title', t.intro.howtoTitle);
        updateText('intro-howto-1', t.intro.howto1);
        updateText('intro-howto-2', t.intro.howto2);
        updateText('intro-howto-3', t.intro.howto3);
        updateText('intro-howto-4', t.intro.howto4);

        updateText('intro-workspace-title', t.intro.workspaceTitle);
        updateText('intro-workspace-desc', t.intro.workspaceDesc);
        updateText('climate-temp-title', t.intro.tempTitle);
        updateText('climate-temp-desc', t.intro.tempDesc);
        updateText('climate-hydration-title', t.intro.waterTitle);
        updateText('climate-hydration-desc', t.intro.waterDesc);
        updateText('climate-air-title', t.intro.airTitle);
        updateText('climate-air-desc', t.intro.airDesc);

        updateText('intro-message-title', t.intro.msgTitle);
        updateText('intro-message-1', t.intro.msg1);
        updateText('intro-cta', t.intro.cta);

        updateText('qa-guide-label', t.intro.quickGuide);
        updateText('qa-rest-label', t.intro.quickRest);
        updateText('qa-check-label', t.intro.quickCheck);

        // --- 6. 완료 페이지 ---
        updateText('comp-title', t.complete.title);
        updateText('comp-sub', t.complete.sub);
        updateText('comp-summary-title', t.complete.summary);
        updateText('comp-action-title', t.complete.action);
        updateText('btn-comp-check', t.complete.btnCheck);
        updateText('btn-comp-rest', t.complete.btnRest);

        // --- 7. 휴식 가이드 메인 ---
        updateText('rg-title', t.restGuide.pageTitle);
        updateText('rg-sub', t.restGuide.pageSubtitle);
        updateText('rg-intro-title', t.restGuide.introTitle);
        updateText('rg-intro-1', t.restGuide.introDesc1);
        updateText('rg-intro-2', t.restGuide.introDesc2);
        
        // 휴식 가이드 카드 텍스트 업데이트
        const cards = ['all', 'neck', 'face', 'eye', 'hand', 'waist'];
        cards.forEach(key => {
            updateText(`card-${key}-title`, t.restGuide.cards[key].title);
            updateText(`card-${key}-desc`, t.restGuide.cards[key].desc);
        });

        // --- 8. 체크리스트 정적 텍스트 ---
        updateText('chk-title', t.checklist.title);
        updateText('chk-subtitle', t.checklist.subtitle);
        
        updateText('chk-sec-hydration', t.checklist.sections.hydration);
        updateText('chk-sec-neck', t.checklist.sections.neck);
        updateText('chk-sec-posture', t.checklist.sections.posture);
        updateText('chk-sec-hand', t.checklist.sections.hand);
        updateText('chk-sec-fatigue', t.checklist.sections.fatigue);

        updateText('chk-q-water', t.checklist.questions.water);
        updateText('chk-q-meal', t.checklist.questions.meal);
        updateText('chk-q-neckForward', t.checklist.questions.neckForward);
        updateText('chk-q-shoulder', t.checklist.questions.shoulder);
        updateText('chk-q-backCurved', t.checklist.questions.backCurved);
        updateText('chk-q-sitting', t.checklist.questions.sitting);
        updateText('chk-q-handPain', t.checklist.questions.handPain);
        updateText('chk-q-wristAngle', t.checklist.questions.wristAngle);
        updateText('chk-q-eyes', t.checklist.questions.eyes);
        updateText('chk-q-headache', t.checklist.questions.headache);

        updateText('chk-res-title', t.checklist.resultTitle);
        updateText('chk-count-label', t.checklist.checkedCount);
        updateText('chk-default-msg', t.checklist.defaultMsg);
        updateText('chk-reset-btn', t.checklist.reset);

        // --- 9. 타이머 UI ---
        updateText('btn-pause-text', t.common.pause);
        updateText('btn-close-text', t.common.close);
        updateText('msg-complete', t.common.complete);

        // 공통 버튼 텍스트 (클래스 기반)
        document.querySelectorAll('.next-step-button').forEach(btn => btn.textContent = t.common.next);
        document.querySelectorAll('.guide-card-btn').forEach(btn => btn.textContent = t.common.start);

        // --- 동적 상태 업데이트 ---
        updateChecklistResults();
        
        // 타이머가 실행 중이라면 실시간 언어 변경
        if (timerState.isRunning && timerState.guideType) {
            updateRunningTimerLanguage();
        }

        try { localStorage.setItem('lang', lang); } catch (_) {}
    }

    // 가이드 섹션 업데이트 로직
    function updateGuideContent(sectionId, data, prefix) {
        if (!data) return;
        const p = prefix || sectionId; 
        
        // 제목
        updateText(`${sectionId.replace('-content','')}-title`, data.title); 
        
        // 소개글
        updateText(`${p === 'headache' ? '' : p + '-'}intro1`, data.intro1);
        updateText(`${p === 'headache' ? '' : p + '-'}intro2`, data.intro2);
        
        // 증상, 원인 제목
        updateText(`${p === 'headache' ? '' : p + '-'}symptom-title`, data.symptomTitle);
        updateText(`${p === 'headache' ? '' : p + '-'}cause-title`, data.causeTitle);
        updateText(`${p === 'headache' ? '' : p + '-'}tip-title`, data.tipTitle);
        
        // 리스트 아이템
        updateText(`${p === 'headache' ? '' : p + '-'}symptom-item1`, data.symptom1);
        updateText(`${p === 'headache' ? '' : p + '-'}symptom-item2`, data.symptom2);
        updateText(`${p === 'headache' ? '' : p + '-'}cause-item1`, data.cause1);
        updateText(`${p === 'headache' ? '' : p + '-'}cause-item2`, data.cause2);
        
        // 팁
        updateText(`${p === 'headache' ? '' : p + '-'}tip-item1`, data.tip1);
        updateText(`${p === 'headache' ? '' : p + '-'}tip-item2`, data.tip2);
        updateText(`${p === 'headache' ? '' : p + '-'}tip-detail1`, data.tipDetail1);
        updateText(`${p === 'headache' ? '' : p + '-'}tip-detail2`, data.tipDetail2);
        
        // 키워드 칩 업데이트
        if (data.chipBreath) updateText(`${p === 'headache' ? '' : p + '-'}chip-breath-text`, data.chipBreath);
        if (data.chipPosture) updateText(`${p === 'headache' ? '' : p + '-'}chip-posture-text`, data.chipPosture);
        if (data.chipMindfulness) updateText(`${p === 'headache' ? '' : p + '-'}chip-mindfulness-text`, data.chipMindfulness);
        
        if (data.chipHeight) updateText('chip-neck-height', data.chipHeight);
        if (data.chipStretch) updateText(prefix === 'tn' ? 'chip-neck-stretch' : 'chip-hand-stretch', data.chipStretch);
        if (data.chipAngle) updateText('chip-wrist-angle', data.chipAngle);
    }

    // 언어 버튼 이벤트 연결
    const langButtons = document.querySelectorAll('.lang-option');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            langButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            setLang(btn.dataset.lang);
        });
    });

    // 초기 언어 설정 (저장된 값 확인)
    const stored = localStorage.getItem('lang');
    const browserLang = (navigator.language || 'ko').slice(0,2).toLowerCase();
    const initial = stored || (browserLang === 'ja' ? 'JP' : browserLang === 'en' ? 'EN' : 'KR');
    
    // UI 동기화 및 언어 설정
    langButtons.forEach(btn => {
        if(btn.dataset.lang === initial) {
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            setLang(initial);
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        }
    });
}

/* ================================================
   CHECKLIST - 건강 체크리스트 (Logic)
   ================================================ */

function initChecklist() {
    // 체크박스 변경 이벤트
    const checkInputs = document.querySelectorAll('.check-input');
    checkInputs.forEach(input => {
        input.addEventListener('change', () => {
            updateChecklistResults();
            updateRecommendedGuides();
        });
    });

    // 초기화 버튼
    const resetBtn = document.getElementById('chk-reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            checkInputs.forEach(input => input.checked = false);
            updateChecklistResults();
            updateRecommendedGuides();
        });
    }
}

// 체크리스트 결과 업데이트 (I18n 대응)
function updateChecklistResults() {
    const t = translations[currentLang].checklist;
    const checkedInputs = document.querySelectorAll('.check-input:checked');
    const countSpan = document.getElementById('checked-count');
    const tipsContainer = document.getElementById('health-tips');
    
    if (countSpan) countSpan.textContent = checkedInputs.length;
    if (!tipsContainer) return;

    if (checkedInputs.length === 0) {
        tipsContainer.innerHTML = `<p>${t.defaultMsg}</p>`;
        return;
    }

    let tipsHtml = '<div class="active-tips">';
    
    checkedInputs.forEach(input => {
        const item = input.closest('.check-item');
        const tipKey = item.dataset.tip; 
        
        let transKey = tipKey;
        if(tipKey === 'neck-forward') transKey = 'neck';
        else if(tipKey === 'shoulder-tension') transKey = 'shoulder';
        else if(tipKey === 'back-curved') transKey = 'back';
        else if(tipKey === 'sitting-long') transKey = 'sitting';
        else if(tipKey === 'hand-pain') transKey = 'hand';
        else if(tipKey === 'wrist-angle') transKey = 'wrist';
        else if(tipKey === 'eye-strain') transKey = 'eye';
        else if(tipKey === 'eye-fatigue') transKey = 'eye';
        
        const tipData = t.tips[transKey];
        
        if (tipData) {
            tipsHtml += `
                <div class="tip-group">
                    <div class="tip-header"><h4>${tipData.title}</h4></div>
                    <ul>${tipData.desc.map(text => `<li>${text}</li>`).join('')}</ul>
                </div>
            `;
        }
    });
    
    tipsHtml += '</div>';
    tipsContainer.innerHTML = tipsHtml;
}

// 추천 가이드 업데이트
function updateRecommendedGuides() {
    const guideMap = {
        'neck-forward': 'rest-neck', 'shoulder-tension': 'rest-neck',
        'back-curved': 'rest-waist', 'sitting-long': 'rest-waist',
        'hand-pain': 'rest-hand', 'wrist-angle': 'rest-hand',
        'eye-strain': 'rest-eye', 'headache': 'rest-face',
        'water': 'rest-all', 'meal': 'rest-all'
    };

    const checkedInputs = document.querySelectorAll('.check-input:checked');
    const container = document.getElementById('recommended-guides');
    if (!container) return;

    if (checkedInputs.length === 0) {
        container.innerHTML = '';
        container.classList.remove('has-guides');
        return;
    }

    const recommended = new Set();
    checkedInputs.forEach(input => {
        const tipKey = input.closest('.check-item').dataset.tip;
        if (guideMap[tipKey]) recommended.add(guideMap[tipKey]);
    });

    if (recommended.size === 0) return;

    const t = translations[currentLang].restGuide.cards;
    const tCommon = translations[currentLang].checklist;

    let html = `
        <div class="recommended-guides-header">
            <h3>${tCommon.recommendTitle}</h3>
        </div>
        <div class="recommended-guides-grid">
    `;

    recommended.forEach(guideType => {
        const key = guideType.replace('rest-', '');
        const info = t[key] || t.all;
        const iconMap = { all: '🎬', neck: '🦴', face: '😌', eye: '👁️', hand: '✋', waist: '🧍' };

        html += `
            <div class="recommended-guide-card" data-guide="${guideType}">
                <div class="guide-card-icon">${iconMap[key] || '🎬'}</div>
                <div class="guide-card-content">
                    <h4 class="guide-card-title">${info.title}</h4>
                    <p class="guide-card-desc">${info.desc}</p>
                </div>
                <div class="guide-play-icon">›</div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
    container.classList.add('has-guides');

    container.querySelectorAll('.recommended-guide-card').forEach(card => {
        card.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('startRestGuide', { 
                detail: { guideType: card.dataset.guide } 
            }));
        });
    });
}

/* ================================================
   TIMER - 휴식 가이드 타이머 (Logic)
   ================================================ */

function initTimerEvents() {
    // 가이드 시작 이벤트 리스너
    document.addEventListener('startRestGuide', (e) => {
        const guideType = e.detail?.guideType || 'rest-all';
        startGlobalTimer(guideType);
    });

    // 버튼 클릭 리스너들
    document.getElementById('quick-break-start-btn')?.addEventListener('click', () => {
        startGlobalTimer('rest-all');
    });

    // 타이머 컨트롤
    document.getElementById('sticky-timer-pause')?.addEventListener('click', toggleTimer);
    document.getElementById('sticky-timer-reset')?.addEventListener('click', resetTimer);
    
    // 프로그레스바 클릭 (Seek)
    const progressContainer = document.getElementById('sticky-progress-container');
    if (progressContainer) {
        progressContainer.addEventListener('click', (e) => {
            if (!timerState.isRunning) return;
            const rect = progressContainer.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            timerState.currentTime = Math.floor(percent * timerState.totalTime);
            updateTimerUI();
        });
    }
}

// 현재 언어에 맞는 가이드 데이터 생성
function buildGuideData(guideType) {
    const t = translations[currentLang].restGuide;
    const key = guideType.replace('rest-', '');
    
    const textSteps = t.steps[key] || t.steps.all;
    const cardInfo = t.cards[key] || t.cards.all;

    // 단계별 시간 설정 (초 단위)
    const durationsMap = {
        all: [60, 120, 120],    // 5분
        neck: [60, 90, 60],     // 3.5분
        face: [60, 90, 60],
        eye: [60, 90, 60],
        hand: [60, 90, 60],
        waist: [60, 90, 60]
    };
    const durations = durationsMap[key] || [60, 60, 60];

    // 텍스트와 시간 병합
    const steps = textSteps.map((step, index) => ({
        step: index + 1,
        title: step.title,
        description: step.desc,
        duration: durations[index] || 60,
        tips: [] 
    }));

    return {
        label: cardInfo.title,
        steps: steps
    };
}

function startGlobalTimer(guideType) {
    resetTimer(); 

    timerState.guideType = guideType;
    timerState.mode = 'global';
    
    const data = buildGuideData(guideType);
    timerState.steps = data.steps;
    timerState.totalTime = data.steps.reduce((acc, s) => acc + s.duration, 0);
    timerState.currentTime = 0;
    timerState.currentStep = 1;
    timerState.isRunning = true;
    timerState.isPaused = false;

    // UI 표시
    document.body.classList.add('global-timer-active');
    document.getElementById('timer-sticky-progress').classList.remove('hidden');
    document.getElementById('sticky-card-display').classList.remove('hidden');
    
    // 라벨 업데이트
    const runningText = currentLang === 'EN' ? 'Running' : (currentLang === 'JP' ? '進行中' : '진행 중');
    document.getElementById('sticky-timer-label').textContent = `${data.label} ${runningText}`;

    // 스크롤 잠금
    timerState.scrollPosition = window.scrollY;
    document.body.style.top = `-${timerState.scrollPosition}px`;
    document.body.classList.add('rest-modal-active');

    updateStickyCard(1);
    runTimerLoop();
}

function runTimerLoop() {
    clearInterval(timerState.intervalId);
    timerState.intervalId = setInterval(() => {
        if (timerState.isPaused) return;

        timerState.currentTime++;
        updateTimerUI();

        // 단계 전환 체크
        let elapsed = 0;
        let newStep = 1;
        for (const step of timerState.steps) {
            elapsed += step.duration;
            if (timerState.currentTime < elapsed) {
                newStep = step.step;
                break;
            } else if (timerState.currentTime === elapsed && step.step < timerState.steps.length) {
                newStep = step.step + 1;
            } else if (timerState.currentTime >= timerState.totalTime) {
                completeTimer();
                return;
            }
        }

        if (timerState.currentStep !== newStep) {
            timerState.currentStep = newStep;
            updateStickyCard(newStep);
        }

    }, 1000);
}

function updateTimerUI() {
    const format = (s) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m}:${sec.toString().padStart(2, '0')}`;
    };
    
    document.getElementById('sticky-current-time').textContent = format(timerState.currentTime);
    document.getElementById('sticky-total-time').textContent = format(timerState.totalTime);
    
    const pct = (timerState.currentTime / timerState.totalTime) * 100;
    document.querySelector('.progress-bar').style.width = `${pct}%`;
}

// 타이머 실행 중 언어 변경 대응
function updateRunningTimerLanguage() {
    const savedStep = timerState.currentStep;
    const data = buildGuideData(timerState.guideType);
    timerState.steps = data.steps; 
    
    const runningText = currentLang === 'EN' ? 'Running' : (currentLang === 'JP' ? '進行中' : '진행 중');
    document.getElementById('sticky-timer-label').textContent = `${data.label} ${runningText}`;
    
    updateStickyCard(savedStep);
}

function updateStickyCard(stepNum) {
    const stepData = timerState.steps.find(s => s.step === stepNum);
    if (!stepData) return;

    document.getElementById('sticky-card-number').textContent = stepNum;
    document.getElementById('sticky-card-title').textContent = stepData.title;
    
    const mins = Math.floor(stepData.duration / 60);
    const secs = stepData.duration % 60;
    let timeText = '';
    if (currentLang === 'EN') timeText = `${mins}m ${secs > 0 ? secs + 's' : ''}`;
    else if (currentLang === 'JP') timeText = `${mins}分 ${secs > 0 ? secs + '秒' : ''}`;
    else timeText = `${mins}분 ${secs > 0 ? secs + '초' : ''}`;
    
    document.getElementById('sticky-card-time').textContent = timeText;
    document.getElementById('sticky-card-description').textContent = stepData.description;
    
    // 팁 리스트 초기화 (현재 I18n 구조상 리스트는 따로 없으므로 비움, 필요시 translations에 추가)
    const list = document.getElementById('sticky-card-tips');
    list.innerHTML = '';
}

function toggleTimer() {
    timerState.isPaused = !timerState.isPaused;
    const btn = document.getElementById('sticky-timer-pause');
    const span = btn.querySelector('span:last-child');
    
    if (timerState.isPaused) {
        btn.querySelector('span:first-child').textContent = '▶️';
        span.textContent = translations[currentLang].common.resume;
    } else {
        btn.querySelector('span:first-child').textContent = '⏸️';
        span.textContent = translations[currentLang].common.pause;
    }
}

function resetTimer() {
    clearInterval(timerState.intervalId);
    timerState.isRunning = false;
    timerState.isPaused = false;
    timerState.currentTime = 0;
    
    document.body.classList.remove('global-timer-active');
    document.getElementById('timer-sticky-progress').classList.add('hidden');
    document.getElementById('sticky-card-display').classList.add('hidden');
    document.getElementById('timer-complete-message').classList.add('hidden');
    
    document.body.classList.remove('rest-modal-active');
    document.body.style.top = '';
    window.scrollTo({ top: timerState.scrollPosition, behavior: 'instant' });
}

function completeTimer() {
    clearInterval(timerState.intervalId);
    timerState.isRunning = false;
    
    const msgBox = document.getElementById('timer-complete-message');
    msgBox.classList.remove('hidden');
    
    setTimeout(() => {
        resetTimer();
    }, 3000);
}

/* ================================================
   NAVIGATION - 네비게이션 및 탭 전환
   ================================================ */

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    const headerNavLinks = document.querySelectorAll('.header-nav-link');
    const navIndicator = document.querySelector('.nav-indicator');

    function updateNavIndicator(activeItem) {
        if (!navIndicator) return;
        if (!activeItem) {
            navIndicator.style.opacity = '0';
            return;
        }
        const sectionNav = document.querySelector('.section-nav');
        if (!sectionNav) return;
        const navRect = sectionNav.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        
        navIndicator.style.left = `${itemRect.left - navRect.left}px`;
        navIndicator.style.width = `${itemRect.width}px`;
        navIndicator.style.opacity = '1';
    }

    function showContent(tabId) {
        tabContents.forEach(c => c.classList.remove('active'));
        navItems.forEach(i => i.classList.remove('active'));

        const target = document.getElementById(tabId);
        if (target) target.classList.add('active');
        
        if (tabId === 'main-content') {
            document.body.classList.add('main-view');
            updateNavIndicator(null);
        } else {
            document.body.classList.remove('main-view');
        }

        const baseId = tabId.replace('-content', '');
        const activeNav = document.querySelector(`.nav-item[data-tab="${baseId}"]`);
        if (activeNav) {
            activeNav.classList.add('active');
            updateNavIndicator(activeNav);
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            showContent(item.dataset.tab + '-content');
        });
    });

    headerNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const nav = link.dataset.nav;
            
            // 헤더 활성 상태 업데이트
            headerNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            if (nav === 'guide') showContent('headache-content');
            else if (nav === 'rest-guide') showContent('rest-guide-content');
            else if (nav === 'checklist') showContent('health-checklist-content');
            else showContent('main-content');
        });
    });

    // 메인 로고 클릭
    document.getElementById('main-title')?.addEventListener('click', () => {
        showContent('main-content');
        headerNavLinks.forEach(l => l.classList.remove('active'));
    });

    // 버튼 연결
    document.getElementById('start-guide-btn')?.addEventListener('click', () => showContent('intro-content'));
    document.getElementById('health-checklist-btn')?.addEventListener('click', () => {
        showContent('health-checklist-content');
        updateHeaderNavLink('checklist');
    });
    document.getElementById('intro-cta')?.addEventListener('click', () => {
        showContent('headache-content');
        updateHeaderNavLink('guide');
    });
    document.getElementById('go-checklist-btn')?.addEventListener('click', () => {
        showContent('health-checklist-content');
        updateHeaderNavLink('checklist');
    });
    document.getElementById('go-break-btn')?.addEventListener('click', () => {
        showContent('rest-guide-content');
        updateHeaderNavLink('rest-guide');
    });
    
    // 퀵 액세스
    document.querySelectorAll('.quick-access-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const t = btn.dataset.target;
            if(t === 'guide') { showContent('headache-content'); updateHeaderNavLink('guide'); }
            else if(t === 'rest-guide') { showContent('rest-guide-content'); updateHeaderNavLink('rest-guide'); }
            else if(t === 'checklist') { showContent('health-checklist-content'); updateHeaderNavLink('checklist'); }
        });
    });
    
    // 다음 버튼
    const nextMap = {
        'next-button': 'turtle-neck-content',
        'next-button-tn': 'hand-pain-content',
        'next-button-hp': 'eye-health-content',
        'next-button-eye': 'back-health-content',
        'next-button-back': 'face-tension-content',
        'next-button-face': 'guide-complete-content'
    };
    Object.keys(nextMap).forEach(btnId => {
        document.getElementById(btnId)?.addEventListener('click', () => showContent(nextMap[btnId]));
    });

    // 헬퍼: 헤더 링크 상태 업데이트
    function updateHeaderNavLink(navType) {
        headerNavLinks.forEach(l => l.classList.remove('active'));
        const target = document.querySelector(`.header-nav-link[data-nav="${navType}"]`);
        if (target) target.classList.add('active');
    }

    // 초기 화면
    showContent('main-content');
    
    // 리사이즈 시 인디케이터 조정
    window.addEventListener('resize', () => {
        const activeNav = document.querySelector('.nav-item.active');
        if (activeNav) updateNavIndicator(activeNav);
    });
}

/* ================================================
   THEME - 테마 시스템
   ================================================ */

function initTheme() {
    let currentTheme = 'anime';

    function setTheme(theme) {
        const tabContents = document.querySelectorAll('.tab-content[data-theme-bg]');
        
        tabContents.forEach(tab => {
            const bgElement = tab.querySelector('.tab-bg-image');
            if (bgElement) {
                const isChecklistTab = tab.id === 'health-checklist-content';
                
                if (theme === 'modern') {
                    if (isChecklistTab) {
                        bgElement.style.filter = 'brightness(0.6) blur(2px) saturate(0.8) grayscale(0.3)';
                        tab.querySelector('.tab-bg-overlay').style.background = 
                            'linear-gradient(45deg, rgba(255, 255, 255, 0.97) 0%, rgba(248, 249, 250, 0.95) 50%, rgba(255, 255, 255, 0.96) 100%)';
                    } else {
                        bgElement.style.filter = 'brightness(0.65) blur(1px) saturate(1.0) grayscale(0.2)';
                        tab.querySelector('.tab-bg-overlay').style.background = 
                            'linear-gradient(45deg, rgba(255, 255, 255, 0.92) 0%, rgba(248, 249, 250, 0.88) 50%, rgba(255, 255, 255, 0.90) 100%)';
                    }
                } else {
                    if (isChecklistTab) {
                        bgElement.style.filter = 'brightness(0.4) blur(1px) saturate(1.1)';
                        tab.querySelector('.tab-bg-overlay').style.background = 
                            'linear-gradient(45deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0.9) 100%)';
                    } else {
                        bgElement.style.filter = 'brightness(0.4) blur(0.7px) saturate(1.8)';
                        tab.querySelector('.tab-bg-overlay').style.background = 
                            'linear-gradient(45deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0.9) 100%)';
                    }
                }
            }
        });
    }

    // (필요 시 테마 버튼 이벤트 연결)
    setTimeout(() => {
        setTheme(currentTheme);
    }, 100);
}

/* ================================================
   SCROLL - 맨 위로 버튼
   ================================================ */

function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}