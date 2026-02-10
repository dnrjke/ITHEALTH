/* ================================================
   IT&HEALTH - 통합 스크립트
   모듈화된 구조를 단일 파일로 통합 (브라우저 호환성)
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 IT&HEALTH 초기화 시작...');
    
    // 1. 네비게이션 초기화
    initNavigation();
    console.log('✅ 네비게이션 초기화 완료');
    
    // 2. 다국어 시스템 초기화
    initI18n();
    console.log('✅ 다국어 시스템 초기화 완료');
    
    // 3. 테마 시스템 초기화
    initTheme();
    console.log('✅ 테마 시스템 초기화 완료');
    
    // 4. 맨 위로 버튼 초기화
    initScrollToTop();
    console.log('✅ 맨 위로 버튼 초기화 완료');

    // 5. 타이머 초기화 (버튼 이벤트보다 먼저 초기화 필요)
    initTimer();
    console.log('✅ 타이머 초기화 완료');

    // 6. 체크리스트 초기화
    setTimeout(() => {
        initChecklist();
        console.log('✅ 체크리스트 초기화 완료');
    }, 200);

    // 7. 섹션별 추천 가이드 초기화 (모바일 전용)
    initSectionGuides();
    console.log('✅ 섹션별 추천 가이드 초기화 완료');

    // 8. 배경 이미지 blur-up 효과 초기화
    initBackgroundBlurUp();
    console.log('✅ 배경 이미지 blur-up 초기화 완료');

    console.log('🎉 모든 초기화 완료!');
});

/* ================================================
   NAVIGATION - 네비게이션 및 탭 전환
   ================================================ */

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    const mainTitle = document.getElementById('main-title');
    const navIndicator = document.querySelector('.nav-indicator');
    const mainContentId = 'main-content';
    // CSS(responsive.css)에서 건강 가이드 내비게이션 캐러셀/도트 UI가 활성화되는 기준과 동일하게 맞춤
    // (태블릿 가로도 도트가 보이는데 JS는 768px 기준이라 갱신이 안 되는 문제 방지)
    const NAV_COMPACT_MAX_WIDTH = 1200;
    
    // 헤더 내비게이션
    const headerNavLinks = document.querySelectorAll('.header-nav-link');
    
    // 캐러셀 관련 요소
    const navCarousel = document.querySelector('.nav-carousel');
    const navCarouselContainer = document.querySelector('.nav-carousel-container');
    const navArrowLeft = document.querySelector('.nav-arrow-left');
    const navArrowRight = document.querySelector('.nav-arrow-right');
    const pageDots = document.querySelectorAll('.page-dot');
    
    // 현재 활성 탭 인덱스
    let currentTabIndex = 0;

    // 상단 탭에서 텍스트 선택/드래그가 발생하지 않도록 (스크롤/스와이프는 유지)
    function preventNavDragIssues() {
        const els = [];
        const sectionNav = document.querySelector('.section-nav');
        if (sectionNav) els.push(sectionNav);
        if (navCarouselContainer) els.push(navCarouselContainer);
        if (navCarousel) els.push(navCarousel);
        headerNavLinks.forEach(a => els.push(a));
        navItems.forEach(it => els.push(it));
        document.querySelectorAll('.page-dot').forEach(dot => els.push(dot));

        els.forEach(el => {
            if (!el) return;
            el.setAttribute('draggable', 'false');
            // dragstart/drag 관련 기본 동작 차단 (텍스트 드래그, 드래그 이미지 등)
            el.addEventListener('dragstart', (e) => e.preventDefault());
        });
    }
    preventNavDragIssues();

    /**
     * 네비게이션 인디케이터 업데이트
     */
    function updateNavIndicator(activeItem) {
        if (!navIndicator) return;
        
        if (!activeItem) {
            navIndicator.style.opacity = '0';
            return;
        }
        
        // section-nav를 기준으로 위치 계산
        const sectionNav = document.querySelector('.section-nav');
        if (!sectionNav) return;
        
        const navRect = sectionNav.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        const offsetLeft = itemRect.left - navRect.left;
        const width = itemRect.width;
        
        navIndicator.style.left = `${offsetLeft}px`;
        navIndicator.style.width = `${width}px`;
        navIndicator.style.opacity = '1';
    }
    
/**
     * 탭 인디케이터 업데이트 (모바일 전용)
     */
    function updateTabIndicators(activeIndex) {
        if (window.innerWidth > NAV_COMPACT_MAX_WIDTH) return; // 넓은 화면(데스크탑)에서는 실행 안 함
        
        pageDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }

    /**
     * 특정 탭으로 스크롤 (모바일)
     * - CSS 중앙 정렬을 위해 양 끝 항목은 예외 처리함.
     */
    function scrollToTab(tabIndex) {
        if (tabIndex < 0 || tabIndex >= navItems.length) return;
        
        const targetItem = navItems[tabIndex];
        const numItems = navItems.length;
        
        if (targetItem && navCarouselContainer && window.innerWidth <= NAV_COMPACT_MAX_WIDTH) {
            let scrollLeft;

            // 첫 번째 항목: 왼쪽 끝 정렬
            if (tabIndex === 0) {
                scrollLeft = 0;
            }
            // 마지막 항목: 오른쪽 끝 정렬
            else if (tabIndex === numItems - 1) {
                scrollLeft = navCarouselContainer.scrollWidth - navCarouselContainer.offsetWidth;
            }
            // 중간 항목: 중앙 정렬
            else {
                scrollLeft = targetItem.offsetLeft - (navCarouselContainer.offsetWidth / 2) + (targetItem.offsetWidth / 2);
            }

            // 탭 클릭 시에만 smooth scroll 적용
            navCarouselContainer.classList.add('snapping');
            navCarouselContainer.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });

            // 스크롤 완료 후 snapping 클래스 제거
            setTimeout(() => {
                navCarouselContainer.classList.remove('snapping');
            }, 500);
        }
        
        currentTabIndex = tabIndex;
        updateTabIndicators(tabIndex);
    }
    
    /**
     * 활성 탭이 보이도록 스크롤 (외부 호출용)
     */
    function scrollToActiveTab(tabId) {
        const tabName = tabId.replace('-content', '');
        const activeIndex = Array.from(navItems).findIndex(item => item.dataset.tab === tabName);
        
        if (activeIndex >= 0) {
            // 캐러셀(모바일/태블릿)에서만 스크롤
            if (window.innerWidth <= NAV_COMPACT_MAX_WIDTH) {
                setTimeout(() => {
                    scrollToTab(activeIndex);
                }, 100);
            }
            // 데스크탑에서는 스크롤 불필요 (모든 탭이 보임)
        }
    }
    
    // 탭 인디케이터 클릭 이벤트 (모바일)
    pageDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // 해당 탭으로 스크롤 및 도트 업데이트
            scrollToTab(index);
            
            // 해당 탭의 콘텐츠 표시
            const targetNavItem = navItems[index];
            if (targetNavItem) {
                const tabName = targetNavItem.dataset.tab;
                navigate({ view: 'guide', guideTab: tabName });
            }
        });
    });
    
    // 모바일 스와이프 힌트 (첫 로드 시)
    function showSwipeHint() {
        if (window.innerWidth <= NAV_COMPACT_MAX_WIDTH && navCarousel) {
            setTimeout(() => {
                navCarousel.classList.add('swipe-hint');
                setTimeout(() => {
                    navCarousel.classList.remove('swipe-hint');
                }, 1500);
            }, 500);
        }
    }

    /**
     * 콘텐츠 탭 전환
     */
    function showContent(tabId) {
        // 모든 탭/내비 상태 초기화
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        navItems.forEach(item => {
            item.classList.remove('active');
        });

        // 건강 가이드 탭인지 확인 (모든 건강 가이드 탭들)
        const guideTabIds = [
            'headache-content', 'turtle-neck-content', 'hand-pain-content',
            'eye-health-content', 'back-health-content', 'face-tension-content'
        ];
        const isGuideTab = guideTabIds.includes(tabId);

        // 메인 화면 처리: 내비 숨김(body.main-view 적용)
        if (tabId === mainContentId) {
            const main = document.getElementById(mainContentId);
            if (main) main.classList.add('active');
            updateNavIndicator(null);
            document.body.classList.add('main-view');
            document.body.classList.remove('guide-view');
            return;
        }

        // 기타 섹션 처리
        const targetContent = document.getElementById(tabId);
        if (targetContent) {
            targetContent.classList.add('active');
            document.body.classList.remove('main-view');

            // 건강 가이드 탭일 때만 섹션 네비게이션 표시
            if (isGuideTab) {
                document.body.classList.add('guide-view');
                const activeNavItem = document.querySelector(`.nav-item[data-tab="${tabId.replace('-content', '')}"]`);
                if (activeNavItem) {
                    activeNavItem.classList.add('active');
                    
                    // 탭 인덱스 찾기
                    const tabIndex = Array.from(navItems).indexOf(activeNavItem);
                    if (tabIndex >= 0) {
                        currentTabIndex = tabIndex;
                        updateTabIndicators(tabIndex);
                    }
                    
                    // 인디케이터 업데이트를 약간 지연시켜 DOM이 준비되도록
                    setTimeout(() => {
                        updateNavIndicator(activeNavItem);
                        scrollToActiveTab(tabId);
                    }, 50);
                }
            } else {
                document.body.classList.remove('guide-view');
                updateNavIndicator(null);
            }
        }
    }

    // 네비게이션 아이템 클릭 이벤트
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navigate({ view: 'guide', guideTab: item.dataset.tab });
        });
    });

    // 메인 타이틀 클릭 이벤트
    if (mainTitle) {
    mainTitle.addEventListener('click', () => {
        navigate({ view: 'home' });
    });
    }
    
    // 헤더 내비게이션 클릭 이벤트
    headerNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const nav = link.dataset.nav;

            // 라우터 기반 이동 (뒤로/앞으로가기 지원)
            if (nav === 'home') {
                navigate({ view: 'home' });
            } else if (nav === 'intro') {
                navigate({ view: 'intro' });
            } else if (nav === 'guide') {
                navigate({ view: 'guide', guideTab: 'headache' });
            } else if (nav === 'rest-guide') {
                navigate({ view: 'rest-guide' });
            } else if (nav === 'checklist') {
                navigate({ view: 'checklist' });
            }
        });
    });
    
    // 헤더 네비게이션 활성 상태 업데이트 함수
    function updateHeaderNav(activeNav) {
        headerNavLinks.forEach(link => {
            if (link.dataset.nav === activeNav) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    /* ================================================
       ROUTER (History API + hash) - 뒤로/앞으로가기 지원
       ================================================ */

    const allowedGuideTabs = new Set([
        'headache',
        'turtle-neck',
        'hand-pain',
        'eye-health',
        'back-health',
        'face-tension',
        'complete'
    ]);

    function normalizeRoute(route) {
        const r = route && typeof route === 'object' ? { ...route } : { view: 'home' };
        if (!r.view) r.view = 'home';

        // guideTab 정규화
        if (r.view === 'guide') {
            r.guideTab = r.guideTab || 'headache';
            if (!allowedGuideTabs.has(r.guideTab)) r.guideTab = 'headache';
        } else {
            delete r.guideTab;
        }

        // timer는 문자열 또는 null
        if (r.timer == null || r.timer === '') {
            delete r.timer;
        } else {
            r.timer = String(r.timer);
        }

        // 허용 view만
        const allowedViews = new Set(['home', 'intro', 'guide', 'rest-guide', 'checklist']);
        if (!allowedViews.has(r.view)) r.view = 'home';

        return r;
    }

    function parseRouteFromHash(hash) {
        const raw = (hash || '').replace(/^#/, '');
        if (!raw) return normalizeRoute({ view: 'home' });

        const [pathRaw, queryRaw] = raw.startsWith('/') ? raw.slice(1).split('?') : raw.split('?');
        const pathParts = (pathRaw || '').split('/').filter(Boolean);

        let route;
        if (pathParts.length === 0 || pathParts[0] === 'home') {
            route = { view: 'home' };
        } else if (pathParts[0] === 'intro') {
            route = { view: 'intro' };
        } else if (pathParts[0] === 'rest-guide') {
            route = { view: 'rest-guide' };
        } else if (pathParts[0] === 'checklist') {
            route = { view: 'checklist' };
        } else if (pathParts[0] === 'guide') {
            const tab = pathParts[1] ? decodeURIComponent(pathParts[1]) : 'headache';
            route = { view: 'guide', guideTab: tab };
        } else {
            route = { view: 'home' };
        }

        if (queryRaw) {
            const params = new URLSearchParams(queryRaw);
            const timer = params.get('timer');
            if (timer) route.timer = timer;
        }

        return normalizeRoute(route);
    }

    function buildHashFromRoute(route) {
        const r = normalizeRoute(route);

        let path = '#/home';
        if (r.view === 'intro') path = '#/intro';
        else if (r.view === 'rest-guide') path = '#/rest-guide';
        else if (r.view === 'checklist') path = '#/checklist';
        else if (r.view === 'guide') path = `#/guide/${encodeURIComponent(r.guideTab || 'headache')}`;

        const params = new URLSearchParams();
        if (r.timer) params.set('timer', r.timer);
        const qs = params.toString();
        return qs ? `${path}?${qs}` : path;
    }

    function routeToTabId(route) {
        const r = normalizeRoute(route);
        if (r.view === 'home') return mainContentId;
        if (r.view === 'intro') return 'intro-content';
        if (r.view === 'rest-guide') return 'rest-guide-content';
        if (r.view === 'checklist') return 'health-checklist-content';
        if (r.view === 'guide') {
            if (r.guideTab === 'complete') return 'guide-complete-content';
            return `${r.guideTab}-content`;
        }
        return mainContentId;
    }

    function applyRoute(route, { source } = {}) {
        const r = normalizeRoute(route);

        // 탭 전환
        const tabId = routeToTabId(r);
        showContent(tabId);

        // 헤더 네비 상태
        if (r.view === 'home') updateHeaderNav('home');
        else if (r.view === 'intro') updateHeaderNav('intro');
        else if (r.view === 'guide') updateHeaderNav('guide');
        else if (r.view === 'rest-guide') updateHeaderNav('rest-guide');
        else if (r.view === 'checklist') updateHeaderNav('checklist');

        // 타이머 오버레이 라우트 적용 (initTimer 준비 전이면 pending)
        window.ITHealth = window.ITHealth || {};
        if (typeof window.ITHealth._applyTimerRoute === 'function') {
            window.ITHealth._applyTimerRoute(r.timer || null, { source: source || 'router' });
        } else {
            window.ITHealth._pendingTimerRoute = r.timer || null;
        }
    }

    function navigate(route, { replace = false } = {}) {
        const r = normalizeRoute(route);
        const url = buildHashFromRoute(r);
        const state = { ithealth: { route: r } };

        if (replace) {
            history.replaceState(state, '', url);
        } else {
            history.pushState(state, '', url);
        }
        applyRoute(r, { source: 'navigate' });
    }

    // 라우터 전역 노출 (타이머 등 다른 모듈에서 사용)
    window.ITHealth = window.ITHealth || {};
    window.ITHealth.navigate = navigate;
    window.ITHealth.getCurrentRoute = () => parseRouteFromHash(location.hash);
    window.ITHealth._parseRouteFromHash = parseRouteFromHash;
    window.ITHealth._buildHashFromRoute = buildHashFromRoute;

    // 뒤로/앞으로가기
    window.addEventListener('popstate', () => {
        const r = parseRouteFromHash(location.hash);
        applyRoute(r, { source: 'popstate' });
    });

    /**
     * 메인 화면 버튼 초기화
     * 타이머 함수들을 전역 스코프에 노출하여 직접 호출 가능하도록 함
     */
    function initMainScreenButtons() {
        // feature badges 제거됨 - 더 이상 필요 없음

        // 공통: 클릭/키보드로 "화면 이동" 가능한 요소 세팅
        function makeNavigable(el, onActivate) {
            if (!el || typeof onActivate !== 'function') return;
            el.classList.add('is-clickable');
            el.setAttribute('role', 'button');
            el.setAttribute('tabindex', '0');
            el.addEventListener('click', (e) => {
                e.preventDefault();
                onActivate();
            });
            el.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onActivate();
                }
            });
        }

        // 시작하기 버튼 (메인 → 가이드 소개)
        const startGuideBtn = document.getElementById('start-guide-btn');
        if (startGuideBtn) {
            startGuideBtn.addEventListener('click', () => {
                navigate({ view: 'intro' });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        const checklistBtn = document.getElementById('health-checklist-btn');
        if (checklistBtn) {
            checklistBtn.addEventListener('click', () => {
                navigate({ view: 'checklist' });
            });
        }

        // 가이드 소개 CTA 버튼
        const introCta = document.getElementById('intro-cta');
        if (introCta) {
            introCta.addEventListener('click', () => {
                navigate({ view: 'guide', guideTab: 'headache' });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // 가이드 소개 페이지 빠른 접근 버튼들
        const quickAccessBtns = document.querySelectorAll('.quick-access-btn');
        quickAccessBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.target;
                if (target === 'guide') {
                    navigate({ view: 'guide', guideTab: 'headache' });
                } else if (target === 'rest-guide') {
                    navigate({ view: 'rest-guide' });
                } else if (target === 'checklist') {
                    navigate({ view: 'checklist' });
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        // ==================== 가이드 소개(최초 페이지) 내 빠른 이동 ====================
        // 1) "주요 건강 정보" 카드 → 해당 건강 가이드 탭으로 이동
        const introInfoCards = document.querySelectorAll('.info-cards-grid .info-card-intro');
        const introCardTargets = [
            { view: 'guide', guideTab: 'headache' },
            { view: 'guide', guideTab: 'turtle-neck' },
            { view: 'guide', guideTab: 'hand-pain' }
        ];
        introInfoCards.forEach((card, idx) => {
            const target = introCardTargets[idx];
            if (!target) return;
            makeNavigable(card, () => {
                navigate(target);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        // 2) "이 가이드 활용하기" 항목(순서 변경) → 적절한 화면으로 이동
        const howto1 = document.getElementById('intro-howto-1'); // 5분 휴식 가이드
        const howto2 = document.getElementById('intro-howto-2'); // 증상별 가이드
        const howto3 = document.getElementById('intro-howto-3'); // 휴식 루틴 만들기
        const howto4 = document.getElementById('intro-howto-4'); // 건강 체크리스트

        makeNavigable(howto1, () => {
            // 휴식 가이드로 이동 + 타이머 시작 (히스토리로 추적)
            navigate({ view: 'rest-guide', timer: 'rest-all' });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        makeNavigable(howto2, () => {
            navigate({ view: 'guide', guideTab: 'headache' });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        makeNavigable(howto3, () => {
            navigate({ view: 'rest-guide' });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        makeNavigable(howto4, () => {
            navigate({ view: 'checklist' });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // 다음 스텝 버튼들
        const nextButtonHeadache = document.getElementById('next-button');
        if (nextButtonHeadache) {
            nextButtonHeadache.addEventListener('click', () => {
                navigate({ view: 'guide', guideTab: 'turtle-neck' });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        const nextButtonTurtle = document.getElementById('next-button-tn');
        if (nextButtonTurtle) {
            nextButtonTurtle.addEventListener('click', () => {
                navigate({ view: 'guide', guideTab: 'hand-pain' });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        const nextButtonHand = document.getElementById('next-button-hp');
        if (nextButtonHand) {
            nextButtonHand.addEventListener('click', () => {
                navigate({ view: 'guide', guideTab: 'eye-health' });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // 눈 건강 → 허리 건강
        const nextButtonEye = document.getElementById('next-button-eye');
        if (nextButtonEye) {
            nextButtonEye.addEventListener('click', () => {
                navigate({ view: 'guide', guideTab: 'back-health' });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // 허리 건강 → 얼굴 긴장
        const nextButtonBack = document.getElementById('next-button-back');
        if (nextButtonBack) {
            nextButtonBack.addEventListener('click', () => {
                navigate({ view: 'guide', guideTab: 'face-tension' });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // 얼굴 긴장 → 마무리
        const nextButtonFace = document.getElementById('next-button-face');
        if (nextButtonFace) {
            nextButtonFace.addEventListener('click', () => {
                navigate({ view: 'guide', guideTab: 'complete' });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // 마무리 페이지 버튼들
        const goChecklistBtn = document.getElementById('go-checklist-btn');
        if (goChecklistBtn) {
            goChecklistBtn.addEventListener('click', () => {
                navigate({ view: 'checklist' });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    // 초기 화면 설정
    initMainScreenButtons();

    // 초기 라우트 적용 (hash가 없으면 홈으로 고정)
    if (!location.hash) {
        history.replaceState({ ithealth: { route: { view: 'home' } } }, '', '#/home');
    }
    const initialRoute = parseRouteFromHash(location.hash);
    // URL/State를 정규화해서 새로고침/직접 접근에서도 일관성 유지
    history.replaceState({ ithealth: { route: initialRoute } }, '', buildHashFromRoute(initialRoute));
    applyRoute(initialRoute, { source: 'init' });
    
    // 모바일 스와이프 힌트 (첫 방문 시)
    if (!sessionStorage.getItem('swipeHintShown') && window.innerWidth <= NAV_COMPACT_MAX_WIDTH) {
        showSwipeHint();
        sessionStorage.setItem('swipeHintShown', 'true');
    }

    // 윈도우 리사이즈 시 네비게이션 업데이트
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const activeNavItem = document.querySelector('.nav-item.active');
            if (activeNavItem) {
                updateNavIndicator(activeNavItem);
                
                // 캐러셀(모바일/태블릿) 뷰에서 활성 탭으로 스크롤
                if (window.innerWidth <= NAV_COMPACT_MAX_WIDTH && navCarouselContainer) {
                    const tabIndex = Array.from(navItems).indexOf(activeNavItem);
                    if (tabIndex >= 0) {
                        scrollToTab(tabIndex);
                    }
                }
            }
        }, 200);
    });

    // 초기 네비게이션 인디케이터 설정
    setTimeout(() => {
        const firstActiveItem = document.querySelector('.nav-item.active');
        if (firstActiveItem) {
            updateNavIndicator(firstActiveItem);
        }
    }, 100);
}

/* ================================================
   I18N - 다국어 지원
   ================================================ */

function initI18n() {
    // 외부 번역 파일(i18n/translations.js)에서 로드된 translations 객체 사용
    // translations 객체는 전역 스코프에서 사용 가능

    function updateElement(selector, text) {
        // 빈 문자열도 허용 (EN countUnit 등)
        if (text === undefined || text === null) return;
        const element = typeof selector === 'string' && (selector.startsWith('.') || selector.startsWith('['))
            ? document.querySelector(selector)
            : document.getElementById(selector);
        if (!element) return;

        // data-i18n-html 요소는 innerHTML로 업데이트 (wbr 등 HTML 지원)
        if (element.hasAttribute('data-i18n-html')) {
            element.innerHTML = String(text);
        } else {
            element.textContent = String(text);
        }
    }

    function setLang(lang) {
        const t = translations[lang];
        if (!t) return;

        // HTML lang 속성 설정 (CSS에서 언어별 스타일링에 사용)
        const htmlLang = lang === 'JP' ? 'ja' : lang === 'EN' ? 'en' : 'ko';
        document.documentElement.lang = htmlLang;
        document.documentElement.dataset.langCode = lang;

        // data-i18n 속성을 가진 요소들 처리
        function getNestedValue(obj, path) {
            return path.split('.').reduce((current, key) => current && current[key], obj);
        }

        // data-i18n 속성 처리 (textContent)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = getNestedValue(t, key);
            // 빈 문자열도 허용 (영어의 countUnit 같은 경우)
            if (value !== undefined && value !== null) el.textContent = value;
        });

        // data-i18n-html 속성 처리 (innerHTML)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const value = getNestedValue(t, key);
            // 빈 문자열도 허용
            if (value !== undefined && value !== null) el.innerHTML = value;
        });

        // 네비게이션
        const navHeadache = document.getElementById('nav-headache');
        const navTurtle = document.getElementById('nav-turtle');
        const navHand = document.getElementById('nav-hand');
        
        if (navHeadache) {
            navHeadache.querySelector('.nav-text').textContent = t.tabs.headache;
            navHeadache.querySelector('.nav-description').textContent = t.navDesc.headache;
        }
        if (navTurtle) {
            navTurtle.querySelector('.nav-text').textContent = t.tabs.turtle;
            navTurtle.querySelector('.nav-description').textContent = t.navDesc.turtle;
        }
        if (navHand) {
            navHand.querySelector('.nav-text').textContent = t.tabs.hand;
            navHand.querySelector('.nav-description').textContent = t.navDesc.hand;
        }
        
        const navEye = document.getElementById('nav-eye');
        const navBack = document.getElementById('nav-back');
        const navFace = document.getElementById('nav-face');
        
        if (navEye) {
            navEye.querySelector('.nav-text').textContent = t.tabs.eye;
            navEye.querySelector('.nav-description').textContent = t.navDesc.eye;
        }
        if (navBack) {
            navBack.querySelector('.nav-text').textContent = t.tabs.back;
            navBack.querySelector('.nav-description').textContent = t.navDesc.back;
        }
        if (navFace) {
            navFace.querySelector('.nav-text').textContent = t.tabs.face;
            navFace.querySelector('.nav-description').textContent = t.navDesc.face;
        }
        
        // 히어로 섹션
        updateElement('poster-title', t.hero?.title);
        updateElement('poster-subtitle', t.hero?.subtitle);
        updateElement('poster-description', t.hero?.description);
        updateElement('poster-feature-1', t.hero?.features?.[0]);
        updateElement('poster-feature-2', t.hero?.features?.[1]);
        updateElement('poster-feature-3', t.hero?.features?.[2]);

        // 테마 선택기
        updateElement('.selector-label', t.theme?.label);
        updateElement('[data-theme="anime"]', t.theme?.anime);
        updateElement('[data-theme="modern"]', t.theme?.modern);
        
        // 두통 섹션
        document.getElementById('intro1').innerHTML = t.headache.intro1;
        document.getElementById('intro2').innerHTML = t.headache.intro2;
        updateElement('symptom-title', t.headache.symptomTitle);
        updateElement('symptom-item1', t.headache.symptom1);
        updateElement('symptom-item2', t.headache.symptom2);
        updateElement('cause-title', t.headache.causeTitle);
        updateElement('cause-item1', t.headache.cause1);
        updateElement('cause-item2', t.headache.cause2);
        updateElement('tip-item1', t.headache.tip1);
        updateElement('tip-item2', t.headache.tip2);
        updateElement('chip-breath-text', t.headache.chipBreath);
        updateElement('chip-posture-text', t.headache.chipPosture);
        
        const mindfulnessChip = document.querySelector('.chip-mindfulness');
        if (mindfulnessChip && t.headache.chipMindfulness) {
            mindfulnessChip.textContent = t.headache.chipMindfulness;
        }
        
        // 거북목 섹션
        if (t.turtle.intro1) document.getElementById('tn-intro1').innerHTML = t.turtle.intro1;
        if (t.turtle.intro2) document.getElementById('tn-intro2').innerHTML = t.turtle.intro2;
        updateElement('tn-symptom-title', t.turtle.symptomTitle);
        if (t.turtle.symptom1) updateElement('tn-symptom-item1', t.turtle.symptom1);
        if (t.turtle.symptom2) updateElement('tn-symptom-item2', t.turtle.symptom2);
        updateElement('tn-cause-title', t.turtle.causeTitle);
        updateElement('tn-cause-item1', t.turtle.cause1);
        updateElement('tn-cause-item2', t.turtle.cause2);
        updateElement('tn-tip-title', t.turtle.tipTitle);
        updateElement('tn-tip-item1', t.turtle.tip1);
        updateElement('tn-tip-item2', t.turtle.tip2);
        if (t.turtle.chipHeight) updateElement('chip-neck-height', t.turtle.chipHeight);
        if (t.turtle.chipStretch) updateElement('chip-neck-stretch', t.turtle.chipStretch);

        // 손 통증 섹션
        if (t.hand.intro1) document.getElementById('hp-intro1').innerHTML = t.hand.intro1;
        if (t.hand.intro2) document.getElementById('hp-intro2').innerHTML = t.hand.intro2;
        updateElement('hp-symptom-title', t.hand.symptomTitle);
        if (t.hand.symptom1) updateElement('hp-symptom-item1', t.hand.symptom1);
        if (t.hand.symptom2) updateElement('hp-symptom-item2', t.hand.symptom2);
        updateElement('hp-cause-title', t.hand.causeTitle);
        updateElement('hp-cause-item1', t.hand.cause1);
        updateElement('hp-cause-item2', t.hand.cause2);
        updateElement('hp-tip-title', t.hand.tipTitle);
        updateElement('hp-tip-item1', t.hand.tip1);
        updateElement('hp-tip-item2', t.hand.tip2);
        if (t.hand.chipAngle) updateElement('chip-wrist-angle', t.hand.chipAngle);
        if (t.hand.chipStretch) updateElement('chip-hand-stretch', t.hand.chipStretch);

        // 눈 건강 섹션
        if (t.eye) {
            if (t.eye.intro1) document.getElementById('eye-intro1').innerHTML = t.eye.intro1;
            if (t.eye.intro2) document.getElementById('eye-intro2').innerHTML = t.eye.intro2;
            updateElement('eye-symptom-title', t.eye.symptomTitle);
            updateElement('eye-symptom-item1', t.eye.symptom1);
            updateElement('eye-symptom-item2', t.eye.symptom2);
            updateElement('eye-cause-title', t.eye.causeTitle);
            updateElement('eye-cause-item1', t.eye.cause1);
            updateElement('eye-cause-item2', t.eye.cause2);
            updateElement('eye-tip-title', t.eye.tipTitle);
            updateElement('eye-tip-item1', t.eye.tip1);
            updateElement('eye-tip-item2', t.eye.tip2);
        }

        // 허리 건강 섹션
        if (t.back) {
            if (t.back.intro1) document.getElementById('back-intro1').innerHTML = t.back.intro1;
            if (t.back.intro2) document.getElementById('back-intro2').innerHTML = t.back.intro2;
            updateElement('back-symptom-title', t.back.symptomTitle);
            updateElement('back-symptom-item1', t.back.symptom1);
            updateElement('back-symptom-item2', t.back.symptom2);
            updateElement('back-cause-title', t.back.causeTitle);
            updateElement('back-cause-item1', t.back.cause1);
            updateElement('back-cause-item2', t.back.cause2);
            updateElement('back-tip-title', t.back.tipTitle);
            updateElement('back-tip-item1', t.back.tip1);
            updateElement('back-tip-item2', t.back.tip2);
        }

        // 얼굴 긴장 섹션
        if (t.face) {
            if (t.face.intro1) document.getElementById('face-intro1').innerHTML = t.face.intro1;
            if (t.face.intro2) document.getElementById('face-intro2').innerHTML = t.face.intro2;
            updateElement('face-symptom-title', t.face.symptomTitle);
            updateElement('face-symptom-item1', t.face.symptom1);
            updateElement('face-symptom-item2', t.face.symptom2);
            updateElement('face-cause-title', t.face.causeTitle);
            updateElement('face-cause-item1', t.face.cause1);
            updateElement('face-cause-item2', t.face.cause2);
            updateElement('face-tip-title', t.face.tipTitle);
            updateElement('face-tip-item1', t.face.tip1);
            updateElement('face-tip-item2', t.face.tip2);
        }

        // 버튼
        updateElement('next-button', t.next);
        updateElement('next-button-tn', t.next);
        updateElement('next-button-hp', t.next);
        updateElement('next-button-eye', t.next);
        updateElement('next-button-back', t.next);
        updateElement('next-button-face', t.next);
        
        // 가이드 소개 페이지
        if (t.intro) {
            updateElement('intro-main-title', t.intro.mainTitle);
            updateElement('intro-lead-1', t.intro.lead1);
            updateElement('intro-lead-2', t.intro.lead2);
            updateElement('intro-purpose-title', t.intro.purposeTitle);
            updateElement('intro-purpose-1', t.intro.purpose1);
            updateElement('intro-purpose-2', t.intro.purpose2);
            updateElement('intro-purpose-3', t.intro.purpose3);
            updateElement('intro-content-title', t.intro.contentTitle);
            updateElement('intro-card1-title', t.intro.card1Title);
            updateElement('intro-card1-desc', t.intro.card1Desc);
            updateElement('intro-card2-title', t.intro.card2Title);
            updateElement('intro-card2-desc', t.intro.card2Desc);
            updateElement('intro-card3-title', t.intro.card3Title);
            updateElement('intro-card3-desc', t.intro.card3Desc);
            updateElement('intro-howto-title', t.intro.howtoTitle);
            // howto 1-4는 data-i18n-html로 처리됨 (HTML 포함)
            updateElement('intro-workspace-title', t.intro.workspaceTitle);
            updateElement('intro-workspace-desc', t.intro.workspaceDesc);
            updateElement('climate-temp-title', t.intro.climateTempTitle);
            updateElement('climate-temp-desc', t.intro.climateTempDesc);
            updateElement('climate-hydration-title', t.intro.climateHydrationTitle);
            updateElement('climate-hydration-desc', t.intro.climateHydrationDesc);
            updateElement('climate-air-title', t.intro.climateAirTitle);
            updateElement('climate-air-desc', t.intro.climateAirDesc);
            updateElement('intro-message-title', t.intro.messageTitle);
            updateElement('intro-message-1', t.intro.message1);
            updateElement('intro-message-2', t.intro.message2);
            updateElement('intro-cta', t.intro.cta);
        }

        try { localStorage.setItem('lang', lang); } catch (_) {}

        // 체크리스트가 있으면 업데이트 (언어 변경 시)
        if (typeof window.ITHealth?.updateChecklist === 'function') {
            window.ITHealth.updateChecklist();
        }

        // 섹션 가이드가 있으면 업데이트 (언어 변경 시)
        if (typeof window.ITHealth?.updateSectionGuides === 'function') {
            window.ITHealth.updateSectionGuides();
        }
    }

    const langButtons = document.querySelectorAll('.lang-option');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setLang(btn.dataset.lang);
        langButtons.forEach(b => {
                const active = b.dataset.lang === btn.dataset.lang;
            b.classList.toggle('active', active);
            b.setAttribute('aria-pressed', String(active));
            });
        });
        
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setLang(btn.dataset.lang);
            }
        });
    });

    const stored = (() => { try { return localStorage.getItem('lang'); } catch (_) { return null; } })();
    const browserLang = (navigator.language || 'ko').slice(0,2).toLowerCase();
    const initial = stored || (browserLang === 'ja' ? 'JP' : browserLang === 'en' ? 'EN' : 'KR');
    setLang(initial);

    langButtons.forEach(btn => {
        const active = btn.dataset.lang === initial;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
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
                // 건강 체크리스트인지 확인
                const isChecklistTab = tab.id === 'health-checklist-content';
                
                if (theme === 'modern') {
                    if (isChecklistTab) {
                        // 건강 체크리스트는 원래 필터 유지
                        bgElement.style.filter = 'brightness(0.6) blur(2px) saturate(0.8) grayscale(0.3)';
                        tab.querySelector('.tab-bg-overlay').style.background = 
                            'linear-gradient(45deg, rgba(255, 255, 255, 0.97) 0%, rgba(248, 249, 250, 0.95) 50%, rgba(255, 255, 255, 0.96) 100%)';
                    } else {
                        // 세 탭은 약한 필터
                        bgElement.style.filter = 'brightness(0.65) blur(1px) saturate(1.0) grayscale(0.2)';
                        tab.querySelector('.tab-bg-overlay').style.background = 
                            'linear-gradient(45deg, rgba(255, 255, 255, 0.92) 0%, rgba(248, 249, 250, 0.88) 50%, rgba(255, 255, 255, 0.90) 100%)';
                    }
                } else {
                    if (isChecklistTab) {
                        // 건강 체크리스트는 원래 필터 유지
                        bgElement.style.filter = 'brightness(0.4) blur(1px) saturate(1.1)';
                        tab.querySelector('.tab-bg-overlay').style.background = 
                            'linear-gradient(45deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0.9) 100%)';
                    } else {
                        // 세 탭: 배경 필터만 약하게, 오버레이는 동일하게 (체크리스트에 70% 더 가까이)
                        bgElement.style.filter = 'brightness(0.4) blur(0.7px) saturate(1.8)';
                        tab.querySelector('.tab-bg-overlay').style.background = 
                            'linear-gradient(45deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0.9) 100%)';
                    }
                }
            }
        });
    }

    const themeOptions = document.querySelectorAll('.theme-option');

    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            setTheme(theme);
            
            themeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            currentTheme = theme;
        });
    });

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
        function scrollToTop(e) {
            e.preventDefault();
            e.stopPropagation();
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        scrollToTopBtn.addEventListener('click', scrollToTop);
        scrollToTopBtn.onclick = scrollToTop;
    }
    
}

// 휴식 가이드 모달 활성화 시 헤더/내비게이션 상태 초기화
const header = document.querySelector('header');
const sectionNav = document.querySelector('.section-nav');

if (header) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target.classList.contains('rest-modal-active')) {
                // 모달 활성화 시 헤더 숨김 해제
                header.classList.remove('header-hidden');
                if (sectionNav) {
                    sectionNav.classList.remove('nav-at-top');
                }
            }
        });
    });

    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
    });
}

/* ================================================
   CHECKLIST - 건강 체크리스트
   ================================================ */

function initChecklist() {
        // 하드코딩된 데이터 제거 - translations.js에서 동적으로 가져옴
        
        function updateCheckCount() {
            // 번역 데이터 가져오기
            const lang = localStorage.getItem('lang') || 'KR';
            const t = window.translations?.[lang] || window.translations?.KR;
            const healthTipsData = t?.healthTips || {};
            const diseaseInfo = t?.diseases || {};

            const checkedInputs = document.querySelectorAll('.check-input:checked');
            const checkedCountSpan = document.getElementById('checked-count');
            const healthTips = document.getElementById('health-tips');
            const count = checkedInputs.length;

            if (checkedCountSpan) checkedCountSpan.textContent = count;

            if (!healthTips) return;

            if (count === 0) {
                const defaultMsg = t?.checklist?.defaultMsg || '항목을 체크하면 맞춤 건강 팁을 제공합니다!';
                healthTips.innerHTML = `<p>${defaultMsg}</p>`;
            } else {
                const checkedTips = [];
                checkedInputs.forEach(input => {
                    const tipKey = input.closest('.check-item').dataset.tip;
                    if (healthTipsData[tipKey]) {
                        checkedTips.push(healthTipsData[tipKey]);
                    }
                });

                if (checkedTips.length > 0) {
                    let tipsHtml = '<div class="active-tips">';
                    checkedTips.forEach(tip => {
                        tipsHtml += `<div class="tip-group">
                            <div class="tip-header">
                                <h4>${tip.title}</h4>
                                ${tip.diseases ? `<div class="related-diseases">
                                    ${tip.diseases.map(disease => `<span class="disease-tag" data-disease="${disease}">${disease}</span>`).join('')}
                                </div>` : ''}
                            </div>
                            <ul>`;
                        tip.tips.forEach(tipText => {
                            tipsHtml += `<li>${tipText}</li>`;
                        });
                        tipsHtml += `</ul></div>`;
                    });
                    tipsHtml += '</div>';
                    healthTips.innerHTML = tipsHtml;

                    // 병명 태그에 툴팁 기능 추가 (번역된 diseaseInfo 전달)
                    setupDiseaseTagTooltips(diseaseInfo);
                }
            }
        }
        
        // 병명 태그 툴팁 및 클릭 고정 기능
        function setupDiseaseTagTooltips(diseaseInfo) {
            const diseaseTags = document.querySelectorAll('.disease-tag');
            let activeTag = null;
            let tooltipElement = null;
            
            // 툴팁 엘리먼트 생성
            function createTooltip() {
                if (!tooltipElement) {
                    tooltipElement = document.createElement('div');
                    tooltipElement.className = 'disease-tooltip';
                    document.body.appendChild(tooltipElement);
                }
                return tooltipElement;
            }
            
            // 툴팁 위치 계산 및 표시
            function showTooltip(tag, isPinned = false) {
                const diseaseName = tag.dataset.disease;
                const info = diseaseInfo[diseaseName];

                if (!info) return;

                const tooltip = createTooltip();
                tooltip.textContent = info;
                tooltip.classList.add('visible');

                if (isPinned) {
                    tooltip.classList.add('pinned');
                } else {
                    tooltip.classList.remove('pinned');
                }

                // 위치 계산
                const tagRect = tag.getBoundingClientRect();
                const tooltipRect = tooltip.getBoundingClientRect();

                let left = tagRect.left + (tagRect.width / 2) - (tooltipRect.width / 2);
                let top = tagRect.top - tooltipRect.height - 10;

                // 화면 밖으로 나가는지 체크
                if (left < 10) left = 10;
                if (left + tooltipRect.width > window.innerWidth - 10) {
                    left = window.innerWidth - tooltipRect.width - 10;
                }

                // 위쪽 공간이 부족하면 아래쪽에 표시
                if (top < 10) {
                    top = tagRect.bottom + 10;
                    tooltip.classList.add('bottom');
                } else {
                    tooltip.classList.remove('bottom');
                }

                tooltip.style.left = left + 'px';
                tooltip.style.top = top + 'px';
            }
            
            // 툴팁 숨기기
            function hideTooltip() {
                if (tooltipElement && !tooltipElement.classList.contains('pinned')) {
                    tooltipElement.classList.remove('visible');
                }
            }
            
            diseaseTags.forEach(tag => {
                // Hover 이벤트 (다른 태그가 고정되어 있지 않을 때만 작동)
                tag.addEventListener('mouseenter', () => {
                    if (!activeTag) {
                        showTooltip(tag, false);
                    }
                });
                
                tag.addEventListener('mouseleave', () => {
                    if (!activeTag) {
                        hideTooltip();
                    }
                });
                
                // 클릭 이벤트 (고정 토글)
                tag.addEventListener('click', (e) => {
                    e.stopPropagation();
                    
                    // 이전에 활성화된 태그가 있으면 비활성화
                    if (activeTag && activeTag !== tag) {
                        activeTag.classList.remove('pinned');
                    }
                    
                    // 같은 태그를 다시 클릭하면 토글
                    if (activeTag === tag) {
                        tag.classList.remove('pinned');
                        activeTag = null;
                        hideTooltip();
                        if (tooltipElement) {
                            tooltipElement.classList.remove('visible', 'pinned');
                        }
                    } else {
                        tag.classList.add('pinned');
                        activeTag = tag;
                        showTooltip(tag, true);
                    }
                });
            });
            
            // 외부 클릭 시 고정 해제
            document.addEventListener('click', (e) => {
                if (activeTag && !e.target.closest('.disease-tag') && !e.target.closest('.disease-tooltip')) {
                    activeTag.classList.remove('pinned');
                    activeTag = null;
                    if (tooltipElement) {
                        tooltipElement.classList.remove('visible', 'pinned');
                    }
                }
            });

            // 스크롤 시 툴팁 위치 업데이트
            let scrollRAF = null;
            let scrollEndTimeout = null;

            window.addEventListener('scroll', () => {
                if (activeTag && tooltipElement && tooltipElement.classList.contains('pinned')) {
                    // 스크롤 중 클래스 추가 (transition 비활성화)
                    tooltipElement.classList.add('scrolling');

                    // requestAnimationFrame으로 부드럽게 업데이트
                    if (scrollRAF) {
                        cancelAnimationFrame(scrollRAF);
                    }
                    scrollRAF = requestAnimationFrame(() => {
                        showTooltip(activeTag, true);
                    });

                    // 스크롤 종료 시 scrolling 클래스 제거
                    clearTimeout(scrollEndTimeout);
                    scrollEndTimeout = setTimeout(() => {
                        if (tooltipElement) {
                            tooltipElement.classList.remove('scrolling');
                        }
                    }, 150);
                }
            }, { passive: true });
        }
        
        // 추천 가이드 매핑 데이터 (tipKey -> guideType)
        const guideRecommendationsMap = {
            'neck-forward': 'rest-neck',
            'shoulder-tension': 'rest-shoulder',
            'back-curved': 'rest-waist',
            'sitting-long': 'rest-waist',
            'hand-pain': 'rest-hand',
            'wrist-angle': 'rest-hand',
            'eye-strain': 'rest-eye',
            'headache': 'rest-breathing',
            'overnight': 'rest-overnight',
            'overdrink': 'rest-overdrink',
            'break-irregular': 'rest-balanced',
            'water': 'rest-all',
            'meal': 'rest-all'
        };

        // 가이드 아이콘 데이터
        const guideIcons = {
            'rest-all': '🎬',
            'rest-neck': '🦴',
            'rest-face': '😌',
            'rest-eye': '👁️',
            'rest-hand': '✋',
            'rest-waist': '🧍',
            'rest-breathing': '🌬️',
            'rest-meditation': '🧘',
            'rest-shoulder': '💪',
            'rest-overnight': '🌙',
            'rest-overdrink': '🥤',
            'rest-balanced': '🕒'
        };

        // 추천 가이드 데이터 가져오기 (번역 적용)
        function getGuideRecommendation(guideType) {
            const lang = localStorage.getItem('lang') || 'KR';
            const translations = window.translations?.[lang];
            const restGuideData = translations?.restGuideData?.[guideType];
            const recommendData = translations?.checklist?.guideRecommend?.[guideType];

            return {
                guide: guideType,
                icon: guideIcons[guideType] || '🎬',
                title: restGuideData?.label || guideType,
                desc: recommendData?.desc || ''
            };
        }

        // 추천 가이드 업데이트 함수
        function updateRecommendedGuides() {
            const checkedInputs = document.querySelectorAll('.check-input:checked');
            const recommendedGuidesContainer = document.getElementById('recommended-guides');

            if (!recommendedGuidesContainer) return;

            // 체크된 항목이 없으면 숨김
            if (checkedInputs.length === 0) {
                recommendedGuidesContainer.innerHTML = '';
                recommendedGuidesContainer.classList.remove('has-guides');
                return;
            }

            // 추천 가이드 수집 (중복 제거)
            const recommendedGuides = new Set();

            checkedInputs.forEach(input => {
                const tipKey = input.closest('.check-item').dataset.tip;
                const guideType = guideRecommendationsMap[tipKey];

                if (guideType) {
                    recommendedGuides.add(guideType);
                }
            });

            // 추천 가이드가 없으면 숨김
            if (recommendedGuides.size === 0) {
                recommendedGuidesContainer.innerHTML = '';
                recommendedGuidesContainer.classList.remove('has-guides');
                return;
            }

            // 번역 데이터 가져오기
            const lang = localStorage.getItem('lang') || 'KR';
            const translations = window.translations?.[lang];
            const recommendTitle = translations?.checklist?.recommendTitle || '🎯 맞춤 휴식 가이드';
            const recommendSubtitle = translations?.checklist?.recommendSubtitle || '체크하신 항목에 따라 추천하는 휴식 가이드입니다';

            // 추천 가이드 HTML 생성
            let guidesHtml = `
                <div class="recommended-guides-header">
                    <h3>${recommendTitle}</h3>
                    <p>${recommendSubtitle}</p>
                </div>
                <div class="recommended-guides-grid">
            `;

            recommendedGuides.forEach(guideType => {
                const rec = getGuideRecommendation(guideType);
                guidesHtml += `
                    <div class="recommended-guide-card" data-guide="${guideType}">
                        <div class="guide-card-icon">${rec.icon}</div>
                        <div class="guide-card-content">
                            <h4 class="guide-card-title">${rec.title}</h4>
                            <p class="guide-card-desc">${rec.desc}</p>
                        </div>
                        <div class="guide-play-icon">›</div>
                    </div>
                `;
            });

            guidesHtml += '</div>';
            recommendedGuidesContainer.innerHTML = guidesHtml;
            recommendedGuidesContainer.classList.add('has-guides');

            // 카드 클릭으로 가이드 시작 - 직접 함수 호출 방식
            // MutationObserver가 자동으로 리스너를 연결하므로 여기서는 제거
        }

    const checkInputs = document.querySelectorAll('.check-input');
    const resetBtn = document.querySelector('.reset-checklist-btn');

        checkInputs.forEach(input => {
            input.addEventListener('change', () => {
                updateCheckCount();
                updateRecommendedGuides();
            });
        });

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                checkInputs.forEach(input => {
                    input.checked = false;
                });
                updateCheckCount();
                updateRecommendedGuides();
            });
        }

    // updateCheckCount와 updateRecommendedGuides를 전역으로 노출 (언어 변경 시 호출용)
    window.ITHealth = window.ITHealth || {};
    window.ITHealth.updateChecklist = function() {
        updateCheckCount();
        updateRecommendedGuides();
    };

    // 초기 업데이트
    updateCheckCount();
}

/* ================================================
   SECTION GUIDES - 건강 가이드 섹션별 추천 가이드 (모바일 전용)
   ================================================ */

function initSectionGuides() {
    // 섹션별 추천 가이드 매핑 (섹션 ID → 추천 가이드 타입들)
    const sectionGuideMap = {
        'turtle-neck-recommended-guides': ['rest-neck', 'rest-shoulder'],
        'hand-pain-recommended-guides': ['rest-hand'],
        'eye-health-recommended-guides': ['rest-eye'],
        'back-health-recommended-guides': ['rest-waist'],
        'face-tension-recommended-guides': ['rest-face', 'rest-meditation'],
        'headache-recommended-guides': ['rest-breathing', 'rest-meditation']
    };

    // 가이드 아이콘 매핑
    const guideIcons = {
        'rest-all': '🎬',
        'rest-neck': '🦴',
        'rest-face': '😌',
        'rest-eye': '👁️',
        'rest-hand': '✋',
        'rest-waist': '🧍',
        'rest-breathing': '🌬️',
        'rest-meditation': '🧘',
        'rest-shoulder': '💪',
        'rest-overnight': '🌙',
        'rest-overdrink': '🥤',
        'rest-balanced': '🕒'
    };

    // 각 섹션에 추천 가이드 생성
    Object.entries(sectionGuideMap).forEach(([containerId, guideTypes]) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        // 현재 언어 가져오기
        const lang = localStorage.getItem('lang') || 'KR';
        const translations = window.translations?.[lang];

        // 추천 가이드 HTML 생성
        let guidesHtml = '<div class="recommended-guides-grid">';

        guideTypes.forEach(guideType => {
            const restGuideData = translations?.restGuideData?.[guideType];
            const recommendData = translations?.checklist?.guideRecommend?.[guideType];

            const icon = guideIcons[guideType] || '🎬';
            const title = restGuideData?.label || guideType;
            const desc = recommendData?.desc || '';

            guidesHtml += `
                <div class="recommended-guide-card" data-guide="${guideType}">
                    <div class="guide-card-icon">${icon}</div>
                    <div class="guide-card-content">
                        <h4 class="guide-card-title">${title}</h4>
                        <p class="guide-card-desc">${desc}</p>
                    </div>
                    <div class="guide-play-icon">›</div>
                </div>
            `;
        });

        guidesHtml += '</div>';
        container.innerHTML = guidesHtml;

        // 각 카드에 클릭 이벤트 추가
        container.querySelectorAll('.recommended-guide-card').forEach(card => {
            card.addEventListener('click', () => {
                const guideType = card.dataset.guide;
                if (guideType && window.ITHealth?.startGuide) {
                    window.ITHealth.startGuide(guideType);
                }
            });
        });
    });

    // 언어 변경 시 섹션 가이드 업데이트를 위해 전역에 노출
    window.ITHealth = window.ITHealth || {};
    window.ITHealth.updateSectionGuides = initSectionGuides;
}

/* ================================================
   TIMER - 5분 휴식 가이드 타이머
   ================================================ */

function initTimer() {
    // DOM 요소 존재 확인 - 필수 요소가 없어도 커스텀 이벤트는 지원
    const globalTimerStart = document.getElementById('global-timer-start');
    
    // ==================== 가이드 데이터 정의 ====================
    // 언어 독립적 데이터 (duration, step number, icon)
    const guideDurations = {
        'rest-all': { icon: '🎬', steps: [{ step: 1, duration: 60 }, { step: 2, duration: 120 }, { step: 3, duration: 120 }] },
        'rest-neck': { icon: '🦴', steps: [{ step: 1, duration: 60 }, { step: 2, duration: 90 }, { step: 3, duration: 60 }] },
        'rest-face': { icon: '😌', steps: [{ step: 1, duration: 60 }, { step: 2, duration: 90 }, { step: 3, duration: 60 }] },
        'rest-eye': { icon: '👁️', steps: [{ step: 1, duration: 60 }, { step: 2, duration: 90 }, { step: 3, duration: 60 }] },
        'rest-hand': { icon: '✋', steps: [{ step: 1, duration: 60 }, { step: 2, duration: 90 }, { step: 3, duration: 60 }] },
        'rest-waist': { icon: '🧍', steps: [{ step: 1, duration: 60 }, { step: 2, duration: 90 }, { step: 3, duration: 60 }] },
        'rest-breathing': { icon: '🌬️', steps: [{ step: 1, duration: 60 }, { step: 2, duration: 90 }, { step: 3, duration: 60 }] },
        'rest-meditation': { icon: '🧘', steps: [{ step: 1, duration: 60 }, { step: 2, duration: 90 }, { step: 3, duration: 60 }] },
        'rest-shoulder': { icon: '💪', steps: [{ step: 1, duration: 60 }, { step: 2, duration: 90 }, { step: 3, duration: 60 }] },
        // 특별 상황 휴식 가이드 (3단계, 총 5분)
        'rest-overnight': { icon: '🌙', steps: [{ step: 1, duration: 60 }, { step: 2, duration: 120 }, { step: 3, duration: 120 }] },
        'rest-overdrink': { icon: '🥤', steps: [{ step: 1, duration: 60 }, { step: 2, duration: 120 }, { step: 3, duration: 120 }] },
        'rest-balanced': { icon: '🕒', steps: [{ step: 1, duration: 60 }, { step: 2, duration: 120 }, { step: 3, duration: 120 }] }
    };

    // 번역된 가이드 데이터 가져오기
    function getGuideData(guideType) {
        const lang = localStorage.getItem('lang') || 'KR';
        const translatedData = window.translations?.[lang]?.restGuideData?.[guideType];
        const durations = guideDurations[guideType];

        if (!translatedData || !durations) {
            console.error('가이드 데이터를 찾을 수 없습니다:', guideType);
            return null;
        }

        return {
            label: translatedData.label,
            icon: durations.icon,
            steps: durations.steps.map((stepData, index) => ({
                step: stepData.step,
                duration: stepData.duration,
                title: translatedData.steps[index]?.title || '',
                time: translatedData.steps[index]?.time || '',
                description: translatedData.steps[index]?.description || '',
                tips: translatedData.steps[index]?.tips || []
            }))
        };
    }
    
    const timerState = {
        mode: null,
        guideType: null, // 현재 실행 중인 가이드 타입
        isRunning: false,
        isPaused: false,
        isCompleted: false, // 타이머 완료 상태 (완료 후에도 트랙 바 조작 가능)
        currentStep: null,
        currentTime: 0,
        totalTime: 0,
        intervalId: null,
        scrollPosition: 0, // 스크롤 위치 저장용
        steps: [] // 현재 가이드의 단계들
    };
    
    // 모달 스크롤 잠금/해제 함수
    function lockScroll() {
        timerState.scrollPosition = window.scrollY;
        document.body.style.top = `-${timerState.scrollPosition}px`;
        document.body.classList.add('rest-modal-active');
    }
    
    function unlockScroll() {
        document.body.classList.remove('rest-modal-active');
        document.body.style.top = '';
        // 스크롤 과정이 보이지 않도록 즉시 이동
        window.scrollTo({ top: timerState.scrollPosition, behavior: 'instant' });
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    // Sticky "일시정지" 버튼 UI를 기본 상태로 복구
    // - completeTimer()에서 disabled/아이콘/텍스트를 변경하므로,
    //   재시작/닫기 시 반드시 원복해야 다음 진입에서 비활성화가 남지 않는다.
    function resetStickyPauseButtonUI() {
        const pauseBtn = document.getElementById('sticky-timer-pause');
        if (!pauseBtn) return;

        pauseBtn.disabled = false;
        pauseBtn.classList.remove('is-resume');

        const iconSpan = pauseBtn.querySelector('span:first-child');
        if (iconSpan) iconSpan.textContent = '⏸️';

        const lang = localStorage.getItem('lang') || 'KR';
        const pauseText = window.translations?.[lang]?.common?.pause || '일시정지';
        const textSpan = pauseBtn.querySelector('span:last-child');
        if (textSpan) textSpan.textContent = pauseText;
    }

    function updateProgressBar(container, current, total) {
        const progressBar = container.querySelector('.progress-bar');
        const percentage = (current / total) * 100;
        progressBar.style.width = `${percentage}%`;
        
        if (current >= total) {
            progressBar.classList.add('completed');
        } else {
            progressBar.classList.remove('completed');
        }
    }

    function updateCardStates(currentStepNum) {
        const allCards = document.querySelectorAll('.break-step');
        
        allCards.forEach(card => {
            const stepNum = parseInt(card.dataset.step);
            card.classList.remove('completed', 'active', 'waiting', 'individual-mode');
            
            if (timerState.mode === 'global') {
                // 전체 타이머 모드: 카드는 백그라운드로 (숨김)
                if (stepNum < currentStepNum) {
                    card.classList.add('completed', 'collapsed');
                } else if (stepNum === currentStepNum) {
                    card.classList.add('active');
                    card.classList.remove('collapsed');
                } else {
                    card.classList.add('waiting', 'collapsed');
                }
            } else if (timerState.mode === 'individual') {
                // 개별 타이머 모드: 해당 카드만 확대
                if (stepNum === currentStepNum) {
                    card.classList.add('active', 'individual-mode');
                    card.classList.remove('collapsed');
                } else {
                    card.classList.add('collapsed');
                }
            }
        });
        
        // 진행 단계 바 업데이트
        updateStepsBar(currentStepNum);
        
        // 전체 타이머 모드: sticky 카드 정보 업데이트
        if (timerState.mode === 'global') {
            updateStickyCard(currentStepNum);
        }
        
        // 개별 타이머 모드: 자동 스크롤
        if (timerState.mode === 'individual') {
            setTimeout(() => {
                const activeCard = document.querySelector('.break-step.active');
                if (activeCard) {
                    activeCard.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }
            }, 300);
        }
    }
    
    function updateStepsBar(currentStepNum) {
        const stepBoxes = document.querySelectorAll('.step-box');
        
        stepBoxes.forEach(box => {
            const stepNum = parseInt(box.dataset.step);
            box.classList.remove('completed', 'active');
            
            if (timerState.mode === 'global') {
                if (stepNum < currentStepNum) {
                    box.classList.add('completed');
                } else if (stepNum === currentStepNum) {
                    box.classList.add('active');
                }
            }
        });
    }
    
    // Sticky 카드 정보 업데이트 (전체 타이머 모드) - 슬라이드 애니메이션 포함
    let previousStepNum = null; // 이전 단계 추적용
    
    function updateStickyCard(stepNum) {
        // 현재 가이드의 단계 데이터 가져오기
        const currentGuide = timerState.guideType ? getGuideData(timerState.guideType) : null;
        if (!currentGuide) return;

        const data = currentGuide.steps.find(s => s.step === stepNum);
        if (!data) return;
        
        const cardHeader = document.querySelector('.sticky-card-header');
        const cardBody = document.querySelector('.sticky-card-body');
        
        // 단계 전환 시 슬라이드 애니메이션 적용
        if (previousStepNum !== null && previousStepNum !== stepNum) {
            const isForward = stepNum > previousStepNum; // 다음 단계로 이동?
            
            // 나가는 애니메이션 클래스
            const outClass = isForward ? 'slide-out-left' : 'slide-out-right';
            // 들어오는 애니메이션 클래스
            const inClass = isForward ? 'slide-in-right' : 'slide-in-left';
            
            // 나가는 애니메이션 시작
            cardHeader.classList.add(outClass);
            cardBody.classList.add(outClass);
            
            // 애니메이션 후 내용 업데이트 및 들어오는 애니메이션
            setTimeout(() => {
                // 내용 업데이트
                updateCardContent(stepNum, data);
                
                // 나가는 애니메이션 클래스 제거
                cardHeader.classList.remove(outClass);
                cardBody.classList.remove(outClass);
                
                // 들어오는 애니메이션 클래스 추가
                cardHeader.classList.add(inClass);
                cardBody.classList.add(inClass);
                
                // 들어오는 애니메이션 완료 후 클래스 제거
                setTimeout(() => {
                    cardHeader.classList.remove(inClass);
                    cardBody.classList.remove(inClass);
                }, 300);
            }, 250);
        } else {
            // 첫 로드 시 애니메이션 없이 바로 업데이트
            updateCardContent(stepNum, data);
        }
        
        previousStepNum = stepNum;
    }
    
    // 카드 내용 실제 업데이트 함수
    function updateCardContent(stepNum, data) {
        document.getElementById('sticky-card-number').textContent = stepNum;
        document.getElementById('sticky-card-title').textContent = data.title;
        document.getElementById('sticky-card-time').textContent = data.time;
        document.getElementById('sticky-card-description').textContent = data.description;
        
        const tipsList = document.getElementById('sticky-card-tips');
        tipsList.innerHTML = '';
        data.tips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            tipsList.appendChild(li);
        });
    }
    
    function setupStepsBarClickHandlers() {
        const stepBoxes = document.querySelectorAll('.step-box');
        
        stepBoxes.forEach(box => {
            box.style.cursor = 'pointer';

            box.addEventListener('click', () => {
                const stepNum = parseInt(box.dataset.step);

                // 전체 타이머 모드 (실행 중, 일시정지, 또는 완료 상태): 해당 단계로 시간 이동
                if (timerState.mode === 'global' && (timerState.isRunning || timerState.isPaused || timerState.isCompleted)) {
                    jumpToStep(stepNum);
                } else {
                    // 타이머 비활성 상태: 카드로 스크롤
                    const targetCard = document.querySelector(`.break-step[data-step="${stepNum}"]`);
                    if (targetCard) {
                        if (targetCard.classList.contains('collapsed')) {
                            targetCard.classList.remove('collapsed');
                        }
                        targetCard.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }
                }
            });
        });
    }
    
    // 특정 단계로 이동 (전체 타이머 모드)
    function jumpToStep(targetStepNum) {
        // 전체 타이머 모드이고, 실행 중/일시정지/완료 상태일 때만 동작
        if (timerState.mode !== 'global') return;
        if (!timerState.isRunning && !timerState.isPaused && !timerState.isCompleted) return;
        
        // 해당 단계의 시작 시간 계산
        let stepStartTime = 0;
        for (const step of timerState.steps) {
            if (step.step === targetStepNum) {
                break;
            }
            stepStartTime += step.duration;
        }
        
        // 시간 점프
        timerState.currentTime = stepStartTime;
        timerState.currentStep = targetStepNum;
        
        // UI 업데이트
        updateGlobalTimerUI();
        updateCardStates(targetStepNum);
    }

    function startGlobalTimer(guideType = 'rest-all') {
        const guide = getGuideData(guideType);
        if (!guide) {
            console.error('알 수 없는 가이드 타입:', guideType);
            return;
        }

        // ==================== UI 완전 초기화 (이전 가이드 흔적 제거) ====================
        // 1. 프로그레스 바 초기화
        const progressBar = document.getElementById('sticky-progress-bar');
        if (progressBar) progressBar.style.width = '0%';

        // 2. 시간 표시 초기화
        const currentTimeEl = document.getElementById('sticky-current-time');
        if (currentTimeEl) currentTimeEl.textContent = '0:00';

        // 3. 일시정지 버튼 UI 초기화 (완료 상태/비활성화 흔적 제거 포함)
        resetStickyPauseButtonUI();

        // 4. 모든 step-box 상태 초기화
        document.querySelectorAll('.step-box').forEach(box => {
            box.classList.remove('active', 'completed');
        });

        // 5. 이전 단계 추적 변수 초기화
        previousStepNum = null;

        // ==================== 타이머 상태 초기화 ====================
        // 가이드 데이터로 상태 초기화
        timerState.mode = 'global';
        timerState.guideType = guideType;
        timerState.isRunning = true;
        timerState.isPaused = false;
        timerState.isCompleted = false; // 새 타이머 시작 시 완료 상태 초기화
        timerState.currentStep = 1;
        timerState.currentTime = 0;
        timerState.steps = guide.steps;
        timerState.totalTime = guide.steps.reduce((sum, step) => sum + step.duration, 0);

        // 스크롤 잠금 (모달 모드)
        lockScroll();

        // UI 표시
        const globalStartBtn = document.getElementById('global-timer-start');
        if (globalStartBtn) globalStartBtn.classList.add('hidden');
        document.getElementById('timer-sticky-progress').classList.remove('hidden');
        document.getElementById('sticky-card-display').classList.remove('hidden');
        document.getElementById('timer-complete-message').classList.add('hidden');

        // 가이드 라벨 업데이트
        updateGuideLabel(guide);

        // 프로그레스 바 단계 동적 생성
        generateStepsBar(guide.steps);

        // 전체 시간 업데이트
        document.getElementById('sticky-total-time').textContent = formatTime(timerState.totalTime);

        // body에 전체 타이머 모드 클래스 추가
        document.body.classList.add('global-timer-active');

        updateCardStates(1);
        runTimer();
    }
    
    // 가이드 라벨 업데이트
    function updateGuideLabel(guide) {
        const labelEl = document.getElementById('sticky-timer-label');
        if (labelEl) {
            const lang = localStorage.getItem('lang') || 'KR';
            const suffix = window.translations?.[lang]?.timer?.inProgressSuffix || '진행 중';
            labelEl.textContent = `${guide.label} ${suffix}`;
        }
        
        // 아이콘도 업데이트
        const iconEl = document.querySelector('.sticky-timer-label span:first-child');
        if (iconEl) {
            iconEl.textContent = guide.icon;
        }
    }
    
    // 프로그레스 바 단계 동적 생성
    function generateStepsBar(steps) {
        const stepsBar = document.getElementById('timer-steps-bar');
        if (!stepsBar) return;
        
        // 기존 내용 삭제
        stepsBar.innerHTML = '';
        
        steps.forEach((step, index) => {
            const stepBox = document.createElement('div');
            stepBox.className = 'step-box';
            stepBox.dataset.step = step.step;
            
            // 숫자 뱃지 + 제목
            stepBox.innerHTML = `
                <span class="step-number-badge">
                    <span class="step-number-text">${step.step}</span>
                </span>
                <span class="step-text">${step.title}</span>
            `;
            
            stepsBar.appendChild(stepBox);
        });
        
        // 클릭 핸들러 재설정
        setupStepsBarClickHandlers();
    }

    function startIndividualTimer(stepNum) {
        const stepData = timerState.steps.find(s => s.step === stepNum);
        if (!stepData) return;

        timerState.mode = 'individual';
        timerState.isRunning = true;
        timerState.isPaused = false;
        timerState.isCompleted = false; // 새 타이머 시작 시 완료 상태 초기화
        timerState.currentStep = stepNum;
        timerState.currentTime = 0;
        timerState.totalTime = stepData.duration;
        
        // Sticky 진행률 숨기기
        document.getElementById('timer-sticky-progress').classList.add('hidden');
        
        const stepTimer = document.querySelector(`[data-step-timer="${stepNum}"]`);
        stepTimer.classList.remove('hidden');
        
        const playBtn = document.querySelector(`.step-play-btn[data-step="${stepNum}"]`);
        playBtn.classList.add('playing');
        playBtn.querySelector('span').textContent = '⏸️';
        
        updateCardStates(stepNum);
        runTimer();
    }

    function runTimer() {
        clearInterval(timerState.intervalId);
        
        timerState.intervalId = setInterval(() => {
            if (timerState.isPaused) return;
            
            timerState.currentTime++;
            
            if (timerState.mode === 'global') {
                updateGlobalTimerUI();
                checkGlobalStepTransition();
            } else if (timerState.mode === 'individual') {
                updateIndividualTimerUI();
            }
            
            if (timerState.currentTime >= timerState.totalTime) {
                completeTimer();
            }
        }, 1000);
    }

    function updateGlobalTimerUI() {
        const currentTimeEl = document.getElementById('sticky-current-time');
        const totalTimeEl = document.getElementById('sticky-total-time');
        const progressContainer = document.getElementById('sticky-progress-container');
        
        currentTimeEl.textContent = formatTime(timerState.currentTime);
        totalTimeEl.textContent = formatTime(timerState.totalTime);
        updateProgressBar(progressContainer, timerState.currentTime, timerState.totalTime);
    }

    function updateIndividualTimerUI() {
        const stepTimer = document.querySelector(`[data-step-timer="${timerState.currentStep}"]`);
        const currentTimeEl = stepTimer.querySelector('.step-current-time');
        const totalTimeEl = stepTimer.querySelector('.step-total-time');
        const progressContainer = stepTimer.querySelector('.progress-bar-container');
        
        currentTimeEl.textContent = formatTime(timerState.currentTime);
        totalTimeEl.textContent = formatTime(timerState.totalTime);
        updateProgressBar(progressContainer, timerState.currentTime, timerState.totalTime);
    }

    function checkGlobalStepTransition() {
        let elapsedTime = 0;
        for (const step of timerState.steps) {
            elapsedTime += step.duration;
            if (timerState.currentTime <= elapsedTime) {
                if (timerState.currentStep !== step.step) {
                    timerState.currentStep = step.step;
                    updateCardStates(step.step);
                }
                break;
            }
        }
    }

    function pauseTimer() {
        timerState.isPaused = true;

        if (timerState.mode === 'global') {
            const pauseBtn = document.getElementById('sticky-timer-pause');
            // 번역 적용
            const lang = localStorage.getItem('lang') || 'KR';
            const resumeText = window.translations?.[lang]?.common?.resume || '계속하기';
            pauseBtn.querySelector('span:last-child').textContent = resumeText;
            // "계속하기" 상태 스타일(청록) 적용
            pauseBtn.classList.add('is-resume');
            // 전체 타이머 모드에서는 카드 상태 유지
        } else if (timerState.mode === 'individual') {
            const playBtn = document.querySelector(`.step-play-btn[data-step="${timerState.currentStep}"]`);
            playBtn.querySelector('span').textContent = '▶️';
            playBtn.classList.remove('playing');

            document.querySelectorAll('.break-step').forEach(card => {
                card.classList.remove('collapsed');
            });
        }
    }

    function resumeTimer() {
        timerState.isPaused = false;

        if (timerState.mode === 'global') {
            const pauseBtn = document.getElementById('sticky-timer-pause');
            // 번역 적용
            const lang = localStorage.getItem('lang') || 'KR';
            const pauseText = window.translations?.[lang]?.common?.pause || '일시정지';
            pauseBtn.querySelector('span:last-child').textContent = pauseText;
            // 원래(일시정지) 주황 스타일로 복귀
            pauseBtn.classList.remove('is-resume');
        } else if (timerState.mode === 'individual') {
            const playBtn = document.querySelector(`.step-play-btn[data-step="${timerState.currentStep}"]`);
            playBtn.querySelector('span').textContent = '⏸️';
            playBtn.classList.add('playing');
        }
        
        updateCardStates(timerState.currentStep);
    }

    function resetTimer() {
        clearInterval(timerState.intervalId);
        timerState.isRunning = false;
        timerState.isPaused = false;
        timerState.isCompleted = false; // 완료 상태 초기화
        timerState.currentTime = 0;
        
        // 이전 단계 추적 변수 초기화
        previousStepNum = null;
        
        if (timerState.mode === 'global') {
            // 스크롤 잠금 해제 (모달 닫기)
            unlockScroll();
            
            document.getElementById('timer-sticky-progress').classList.add('hidden');
            document.getElementById('sticky-card-display').classList.add('hidden');
            const globalStartBtn = document.getElementById('global-timer-start');
            if (globalStartBtn) globalStartBtn.classList.remove('hidden');
            document.body.classList.remove('global-timer-active');

            // 일시정지 버튼 UI 리셋 (disabled/아이콘/번역 텍스트)
            resetStickyPauseButtonUI();
        } else if (timerState.mode === 'individual') {
            const stepTimer = document.querySelector(`[data-step-timer="${timerState.currentStep}"]`);
            stepTimer.classList.add('hidden');
            
            const playBtn = document.querySelector(`.step-play-btn[data-step="${timerState.currentStep}"]`);
            playBtn.classList.remove('playing');
            playBtn.querySelector('span').textContent = '▶️';
        }
        
        timerState.mode = null;
        timerState.guideType = null;
        timerState.currentStep = null;
        timerState.steps = [];
        
        document.querySelectorAll('.break-step').forEach(card => {
            card.classList.remove('completed', 'active', 'waiting', 'collapsed', 'individual-mode');
        });
        
        document.getElementById('timer-complete-message').classList.add('hidden');
    }

    function completeTimer() {
        clearInterval(timerState.intervalId);
        timerState.isRunning = false;
        timerState.isCompleted = true; // 완료 상태로 설정 (트랙 바 조작 계속 가능)
        timerState.currentTime = timerState.totalTime; // 진행 바 100% 유지

        // 이전 단계 추적 변수 초기화
        previousStepNum = null;

        document.getElementById('timer-complete-message').classList.remove('hidden');

        if (timerState.mode === 'global') {
            // 타이머 완료 후에도 모달을 유지 (자동 종료 비활성화)
            // 사용자가 직접 닫기 버튼을 눌러야 종료됨

            // 모든 단계를 완료 상태로 표시
            document.querySelectorAll('.break-step').forEach(card => {
                card.classList.add('completed', 'collapsed');
                card.classList.remove('active', 'waiting');
            });

            // 일시정지 버튼을 "완료" 상태로 변경
            const pauseBtn = document.getElementById('sticky-timer-pause');
            if (pauseBtn) {
                pauseBtn.querySelector('span:first-child').textContent = '✓';
                pauseBtn.querySelector('span:last-child').textContent = '완료';
                pauseBtn.classList.remove('is-resume');
                pauseBtn.disabled = true;
            }
        } else if (timerState.mode === 'individual') {
            const stepTimer = document.querySelector(`[data-step-timer="${timerState.currentStep}"]`);
            stepTimer.classList.add('hidden');

            const card = document.querySelector(`.break-step[data-step="${timerState.currentStep}"]`);
            card.classList.add('completed');
            card.classList.remove('active', 'individual-mode');

            const playBtn = document.querySelector(`.step-play-btn[data-step="${timerState.currentStep}"]`);
            playBtn.classList.remove('playing');
            playBtn.querySelector('span').textContent = '▶️';
        }

        // 5초 후 완료 메시지만 숨김 (모달은 유지)
        setTimeout(() => {
            document.getElementById('timer-complete-message').classList.add('hidden');
        }, 5000);
    }

    function setupProgressBarSeek() {
        // 🎬 RAF 기반 유튜브식 드래그: UI 레이어(즉각 반응) + 상태 레이어(지연 반영)
        function setupProgressBarDrag(container, mode, onSeek) {
            const progressBar = container.querySelector('.progress-bar');
            if (!progressBar) return;

            // Thumb 요소 생성
            let thumb = container.querySelector('.progress-thumb');
            if (!thumb) {
                thumb = document.createElement('div');
                thumb.className = 'progress-thumb';
                container.appendChild(thumb);
            }

            // 상태 변수
            let isDragging = false;
            let currentPos = 0; // 픽셀 단위 위치
            let containerWidth = 0;
            let containerLeft = 0;
            let rafId = null;
            let updateDebounceTimer = null;

            // 컨테이너 rect 캐싱
            function updateContainerRect() {
                const rect = container.getBoundingClientRect();
                containerWidth = rect.width;
                containerLeft = rect.left;
            }

            // RAF 렌더링 루프 - 썸과 진행바를 같은 프레임에서 갱신
            function render() {
                if (!isDragging) return;

                const percentage = Math.max(0, Math.min(currentPos / containerWidth, 1));

                // 썸과 진행바 동시 갱신 (같은 프레임)
                progressBar.style.width = (percentage * 100) + '%';
                thumb.style.left = (percentage * 100) + '%';

                // 다음 프레임 예약
                rafId = requestAnimationFrame(render);
            }

            // 실제 타이머 상태 업데이트 (지연 반영)
            function updateTimerState() {
                // 실행 중, 일시정지, 또는 완료 상태일 때만 조작 가능
                if (!timerState.isRunning && !timerState.isPaused && !timerState.isCompleted) return;

                const percentage = Math.max(0, Math.min(currentPos / containerWidth, 1));
                const newTime = Math.floor(percentage * timerState.totalTime);
                // 시간이 총 시간을 초과하지 않도록 보장
                timerState.currentTime = Math.max(0, Math.min(newTime, timerState.totalTime));
                onSeek();
            }

            // 디바운스된 상태 업데이트 스케줄
            function scheduleStateUpdate() {
                clearTimeout(updateDebounceTimer);
                updateDebounceTimer = setTimeout(() => {
                    updateTimerState();
                }, 100);
            }

            // 드래그 시작
            function startDrag(clientX) {
                if (mode === 'global' && timerState.mode !== 'global') return;
                // 실행 중, 일시정지, 또는 완료 상태일 때만 드래그 가능
                if (!timerState.isRunning && !timerState.isPaused && !timerState.isCompleted) return;

                isDragging = true;
                thumb.classList.add('active');
                container.classList.add('dragging'); // transition 제거

                // Rect 업데이트
                updateContainerRect();

                // 초기 위치 설정
                currentPos = Math.max(0, Math.min(clientX - containerLeft, containerWidth));

                // RAF 루프 시작
                render();

                // 드래그 시작 시 즉시 타이머 상태 업데이트
                updateTimerState();
            }

            // 드래그 중 (이벤트에서는 내부 상태만 업데이트)
            function duringDrag(clientX) {
                if (!isDragging) return;

                // 내부 상태만 업데이트 (DOM 갱신은 RAF에서)
                currentPos = Math.max(0, Math.min(clientX - containerLeft, containerWidth));

                // 상태 업데이트는 지연
                scheduleStateUpdate();
            }

            // 드래그 종료
            function endDrag() {
                if (!isDragging) return;

                isDragging = false;
                thumb.classList.remove('active');
                container.classList.remove('dragging'); // transition 복구

                // RAF 루프 정지
                if (rafId) {
                    cancelAnimationFrame(rafId);
                    rafId = null;
                }

                // 디바운스 타이머 클리어
                clearTimeout(updateDebounceTimer);

                // 최종 위치로 즉시 업데이트
                updateTimerState();
            }

            // 마우스 이벤트 (데스크톱)
            container.addEventListener('mousedown', (e) => {
                e.preventDefault();
                startDrag(e.clientX);
            });

            document.addEventListener('mousemove', (e) => {
                duringDrag(e.clientX);
            });

            document.addEventListener('mouseup', () => {
                endDrag();
            });

            // 터치 이벤트 (모바일) - passive: false로 즉시 반응
            container.addEventListener('touchstart', (e) => {
                e.preventDefault();
                startDrag(e.touches[0].clientX);
            }, { passive: false });

            container.addEventListener('touchmove', (e) => {
                if (isDragging) {
                    e.preventDefault(); // 스크롤 방지
                    duringDrag(e.touches[0].clientX);
                }
            }, { passive: false });

            container.addEventListener('touchend', () => {
                endDrag();
            }, { passive: true });

            // 커서 스타일
            container.style.cursor = 'pointer';
        }

        // Sticky 진행률 바 설정
        const stickyProgressContainer = document.getElementById('sticky-progress-container');
        if (stickyProgressContainer) {
            setupProgressBarDrag(stickyProgressContainer, 'global', () => {
                updateGlobalTimerUI();
                checkGlobalStepTransition();
            });
        }

        // 개별 스텝 진행률 바 설정
        document.querySelectorAll('[data-step-timer]').forEach(stepTimer => {
            const progressContainer = stepTimer.querySelector('.progress-bar-container');
            const stepNum = parseInt(stepTimer.dataset.stepTimer);

            setupProgressBarDrag(progressContainer, 'individual', () => {
                if (timerState.mode === 'individual' && timerState.currentStep === stepNum) {
                    updateIndividualTimerUI();
                }
            });
        });
    }

    function setupCardToggle() {
        document.querySelectorAll('.break-step').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.step-play-btn') || e.target.closest('.timer-btn')) {
                    return;
                }
                
                if (!timerState.isRunning || timerState.isPaused) {
                    card.classList.toggle('collapsed');
                }
            });
        });
    }

    // 전체 타이머 버튼 (기본: rest-all) - 버튼이 있을 때만 이벤트 추가
    if (globalTimerStart) {
        globalTimerStart.addEventListener('click', () => {
            if (!timerState.isRunning) {
                // 라우터 연동: 타이머도 히스토리로 추적
                if (typeof window.ITHealth?.startGuide === 'function') {
                    window.ITHealth.startGuide('rest-all');
                } else {
                    startGlobalTimer('rest-all');
                }
            } else if (timerState.isPaused) {
                resumeTimer();
            } else if (timerState.mode === 'individual') {
                // 개별 타이머 실행 중이면 전체 타이머로 전환
                resetTimer();
                if (typeof window.ITHealth?.startGuide === 'function') {
                    window.ITHealth.startGuide('rest-all');
                } else {
                    startGlobalTimer('rest-all');
                }
            }
        });
    }
    
    // 커스텀 이벤트 제거됨 - 직접 함수 호출 방식으로 변경
    // window.ITHealth.startGuide(guideType) 사용

    // Sticky 타이머 버튼들
    const stickyPauseBtn = document.getElementById('sticky-timer-pause');
    const stickyResetBtn = document.getElementById('sticky-timer-reset');
    
    if (stickyPauseBtn) {
        stickyPauseBtn.addEventListener('click', () => {
            if (timerState.isPaused) {
                resumeTimer();
            } else {
                pauseTimer();
            }
        });
    }
    
    if (stickyResetBtn) {
        stickyResetBtn.addEventListener('click', () => {
            console.log('🔄 닫기 버튼 클릭 - 타이머 초기화');
            // 라우터 연동: URL에서 timer 파라미터 제거(뒤로/앞으로가기 동작 일관성)
            if (typeof window.ITHealth?.resetGuide === 'function') {
                window.ITHealth.resetGuide();
            } else {
                // 중복/분기 누락(예: isCompleted, pauseBtn.disabled) 방지를 위해 단일 리셋 로직 사용
                resetTimer();
            }
            console.log('✅ 타이머 초기화 완료');
        });
    }
    
    // 개별 재생 버튼
    document.querySelectorAll('.step-play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const stepNum = parseInt(btn.dataset.step);
            
            if (timerState.mode === 'individual' && timerState.currentStep === stepNum) {
                if (timerState.isPaused) {
                    resumeTimer();
                } else {
                    pauseTimer();
                }
            } else {
                if (timerState.isRunning) {
                    resetTimer();
                }
                startIndividualTimer(stepNum);
            }
        });
    });
    
    // 개별 타이머 버튼
    document.querySelectorAll('[data-step-timer]').forEach(stepTimer => {
        const pauseBtn = stepTimer.querySelector('.timer-btn-pause');
        const resetBtn = stepTimer.querySelector('.timer-btn-reset');
        
        pauseBtn.addEventListener('click', () => {
            if (timerState.isPaused) {
                resumeTimer();
                pauseBtn.querySelector('span:last-child').textContent = '일시정지';
                pauseBtn.classList.remove('is-resume');
            } else {
                pauseTimer();
                pauseBtn.querySelector('span:last-child').textContent = '계속하기';
                pauseBtn.classList.add('is-resume');
            }
        });
        
        resetBtn.addEventListener('click', () => {
            resetTimer();
        });
    });
    
    setupProgressBarSeek();
    setupCardToggle();
    setupStepsBarClickHandlers();

    // ==================== 전역 함수 노출 및 버튼 직접 연결 ====================
    // startGlobalTimer와 resetTimer를 전역으로 노출하여 어디서든 호출 가능하도록 함
    window.ITHealth = window.ITHealth || {};

    // 라우터가 URL(timer 파라미터) 기반으로 타이머를 "적용"할 때 사용하는 내부 함수
    // - 히스토리를 건드리지 않음 (popstate/applyRoute에서 호출)
    window.ITHealth._applyTimerRoute = function(timerGuideType) {
        const next = timerGuideType ? String(timerGuideType) : null;

        if (next) {
            if (timerState.isRunning || timerState.isPaused || timerState.isCompleted) {
                resetTimer();
            }
            startGlobalTimer(next);
        } else {
            // 타이머가 떠 있는 상태면 닫기
            if (timerState.mode || timerState.isRunning || timerState.isPaused || timerState.isCompleted) {
                resetTimer();
            }
        }
    };

    // 외부(사용자 상호작용)에서 호출되는 함수: URL을 갱신하여 뒤로/앞으로가기와 연동
    window.ITHealth.startGuide = function(guideType) {
        console.log('🎬 가이드 시작:', guideType);

        // navigate가 있으면 URL에 timer를 얹고, 라우터가 _applyTimerRoute로 실행하게 함
        const nav = window.ITHealth?.navigate;
        const getRoute = window.ITHealth?.getCurrentRoute;
        if (typeof nav === 'function') {
            const base = typeof getRoute === 'function' ? getRoute() : { view: 'rest-guide' };
            nav({ ...base, timer: guideType });
            return;
        }

        // 라우터가 없는 경우 fallback
        if (timerState.isRunning) {
            console.log('⚠️ 기존 타이머 리셋');
            resetTimer();
        }
        startGlobalTimer(guideType);
    };

    window.ITHealth.resetGuide = function() {
        console.log('🔄 가이드 리셋');

        const nav = window.ITHealth?.navigate;
        const getRoute = window.ITHealth?.getCurrentRoute;
        if (typeof nav === 'function') {
            const base = typeof getRoute === 'function' ? getRoute() : { view: 'rest-guide' };
            nav({ ...base, timer: null }, { replace: true });
            return;
        }

        resetTimer();
    };

    // initNavigation이 먼저 실행되는 구조라, pending timer 라우트가 있으면 여기서 적용
    if (Object.prototype.hasOwnProperty.call(window.ITHealth, '_pendingTimerRoute')) {
        const pending = window.ITHealth._pendingTimerRoute;
        delete window.ITHealth._pendingTimerRoute;
        window.ITHealth._applyTimerRoute(pending || null);
    }

    // 모든 가이드 버튼들에 직접 이벤트 리스너 연결
    function attachGuideButtonListeners() {
        console.log('🔌 가이드 버튼 리스너 연결 중...');

        // 1. 5분 휴식하기 버튼 (메인 페이지)
        const quickBreakStartBtn = document.getElementById('quick-break-start-btn');
        if (quickBreakStartBtn) {
            quickBreakStartBtn.addEventListener('click', () => {
                console.log('클릭: 5분 휴식하기 버튼');
                window.ITHealth.startGuide('rest-all');
            });
            console.log('✅ 5분 휴식하기 버튼 연결됨');
        } else {
            console.log('❌ 5분 휴식하기 버튼 없음');
        }

        // 2. 마무리 페이지 버튼
        const goBreakBtn = document.getElementById('go-break-btn');
        if (goBreakBtn) {
            goBreakBtn.addEventListener('click', () => {
                console.log('클릭: 마무리 페이지 휴식 버튼');
                window.ITHealth.startGuide('rest-all');
            });
            console.log('✅ 마무리 페이지 휴식 버튼 연결됨');
        }

        // 3. 모든 .guide-card-btn 버튼들 (건강 가이드 & 휴식 가이드 탭)
        const guideCardBtns = document.querySelectorAll('.guide-card-btn');
        console.log(`📋 .guide-card-btn 버튼 ${guideCardBtns.length}개 발견`);
        guideCardBtns.forEach((btn, index) => {
            const guideType = btn.dataset.guide;
            if (guideType) {
                btn.addEventListener('click', () => {
                    console.log(`클릭: .guide-card-btn[${index}] - ${guideType}`);
                    window.ITHealth.startGuide(guideType);
                });
                console.log(`✅ .guide-card-btn[${index}] - ${guideType} 연결됨`);
            } else {
                console.log(`⚠️ .guide-card-btn[${index}] - data-guide 속성 없음`);
            }
        });

        // 4. 체크리스트의 동적 가이드 카드들 (MutationObserver로 감지)
        const recommendedGuidesContainer = document.getElementById('recommended-guides');
        if (recommendedGuidesContainer) {
            // 초기 연결
            attachRecommendedGuideListeners();

            // MutationObserver로 동적 변경 감지
            const observer = new MutationObserver(() => {
                attachRecommendedGuideListeners();
            });
            observer.observe(recommendedGuidesContainer, { childList: true, subtree: true });
            console.log('✅ 체크리스트 동적 가이드 감시 활성화');
        }
    }

    function attachRecommendedGuideListeners() {
        const recommendedCards = document.querySelectorAll('.recommended-guide-card');
        console.log(`📋 추천 가이드 카드 ${recommendedCards.length}개 발견`);
        recommendedCards.forEach((card, index) => {
            const guideType = card.dataset.guide;
            if (guideType && !card.dataset.listenerAttached) {
                card.addEventListener('click', () => {
                    console.log(`클릭: 추천 가이드 카드[${index}] - ${guideType}`);
                    window.ITHealth.startGuide(guideType);
                });
                card.dataset.listenerAttached = 'true';
                console.log(`✅ 추천 가이드 카드[${index}] - ${guideType} 연결됨`);
            }
        });
    }

    // 버튼 리스너 연결 실행
    attachGuideButtonListeners();

    console.log('✅ initTimer 초기화 완료');
    console.log('🌐 전역 함수 사용 가능: window.ITHealth.startGuide(guideType), window.ITHealth.resetGuide()');
}

/* ================================================
   BACKGROUND BLUR-UP - 배경 이미지 블러 업 효과
   ================================================ */

function initBackgroundBlurUp() {
    // 1. 탭 배경 이미지에 blur-up 효과 적용
    const bgImages = document.querySelectorAll('.tab-bg-image');

    bgImages.forEach((img) => {
        // 이미 로드된 경우 즉시 loaded 클래스 추가
        if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
        } else {
            // 로드 완료 시 loaded 클래스 추가
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });

            // 에러 발생 시에도 blur 제거 (흐릿한 상태로 남지 않도록)
            img.addEventListener('error', () => {
                img.classList.add('loaded');
            });
        }
    });

    // 2. 메인 hero 배경 이미지 프리로드 및 blur-up
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        const highResImage = new Image();
        highResImage.src = 'image/main_floral_calm.webp';

        highResImage.onload = () => {
            mainContent.classList.add('loaded');
        };

        highResImage.onerror = () => {
            mainContent.classList.add('loaded');
        };
    }
}


