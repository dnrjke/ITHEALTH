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
        if (window.innerWidth > 768) return; // PC에서는 실행 안 함
        
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
        
        if (targetItem && navCarouselContainer && window.innerWidth <= 768) {
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
            
            navCarouselContainer.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
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
            // 모바일에서만 스크롤
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    scrollToTab(activeIndex);
                }, 100);
            }
            // PC에서는 스크롤 불필요 (모든 탭이 보임)
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
                const tabId = targetNavItem.dataset.tab + '-content';
                showContent(tabId);
                updateHeaderNav('guide');
            }
        });
    });
    
    // 모바일 스와이프 힌트 (첫 로드 시)
    function showSwipeHint() {
        if (window.innerWidth <= 768 && navCarousel) {
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

            // 휴식 가이드 탭으로 이동 시 타이머 상태 초기화
            if (tabId === 'rest-guide-content') {
                document.dispatchEvent(new CustomEvent('resetRestGuide'));
            }

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
            const tabId = item.dataset.tab + '-content';
            showContent(tabId);
            // 섹션 네비게이션 클릭 시 헤더 네비게이션을 "건강 가이드"로 설정
            updateHeaderNav('guide');
        });
    });

    // 메인 타이틀 클릭 이벤트
    if (mainTitle) {
    mainTitle.addEventListener('click', () => {
        showContent(mainContentId);
        navItems.forEach(item => {
            item.classList.remove('active');
        });
        if (navIndicator) {
            navIndicator.style.opacity = '0';
        }
        // 헤더 네비게이션 상태 업데이트
        updateHeaderNav('home');
    });
    }
    
    // 헤더 내비게이션 클릭 이벤트
    headerNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const nav = link.dataset.nav;
            
            // 헤더 네비게이션 활성 상태 업데이트
            updateHeaderNav(nav);
            
            // 콘텐츠 표시
            if (nav === 'home') {
                showContent(mainContentId);
            } else if (nav === 'intro') {
                showContent('intro-content');
            } else if (nav === 'guide') {
                // 첫 번째 건강 가이드(두통/무기력)로 이동
                showContent('headache-content');
            } else if (nav === 'rest-guide') {
                showContent('rest-guide-content');
            } else if (nav === 'checklist') {
                showContent('health-checklist-content');
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

    /**
     * 메인 화면 버튼 초기화
     */
    function initMainScreenButtons() {
        // feature badges 제거됨 - 더 이상 필요 없음
        
        // 시작하기 버튼 (메인 → 가이드 소개)
        const startGuideBtn = document.getElementById('start-guide-btn');
        if (startGuideBtn) {
            startGuideBtn.addEventListener('click', () => {
                showContent('intro-content');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        
        const checklistBtn = document.getElementById('health-checklist-btn');
        if (checklistBtn) {
            checklistBtn.addEventListener('click', () => {
                showContent('health-checklist-content');
                updateHeaderNav('checklist');
            });
        }
        
        // 가이드 소개 CTA 버튼
        const introCta = document.getElementById('intro-cta');
        if (introCta) {
            introCta.addEventListener('click', () => {
                showContent('headache-content');
                updateHeaderNav('guide');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        
        // 가이드 소개 페이지 빠른 접근 버튼들
        const quickAccessBtns = document.querySelectorAll('.quick-access-btn');
        quickAccessBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.target;
                if (target === 'guide') {
                    showContent('headache-content');
                    updateHeaderNav('guide');
                } else if (target === 'rest-guide') {
                    showContent('rest-guide-content');
                    updateHeaderNav('rest-guide');
                } else if (target === 'checklist') {
                    showContent('health-checklist-content');
                    updateHeaderNav('checklist');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
        
        const quickBreakStartBtn = document.getElementById('quick-break-start-btn');
        if (quickBreakStartBtn) {
            quickBreakStartBtn.addEventListener('click', () => {
                // 커스텀 이벤트로 전체 휴식 가이드 시작
                document.dispatchEvent(new CustomEvent('startRestGuide', { 
                    detail: { guideType: 'rest-all' } 
                }));
            });
        }
        
        // 다음 스텝 버튼들
        const nextButtonHeadache = document.getElementById('next-button');
        if (nextButtonHeadache) {
            nextButtonHeadache.addEventListener('click', () => {
                showContent('turtle-neck-content');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        
        const nextButtonTurtle = document.getElementById('next-button-tn');
        if (nextButtonTurtle) {
            nextButtonTurtle.addEventListener('click', () => {
                showContent('hand-pain-content');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        
        const nextButtonHand = document.getElementById('next-button-hp');
        if (nextButtonHand) {
            nextButtonHand.addEventListener('click', () => {
                showContent('eye-health-content');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        
        // 눈 건강 → 허리 건강
        const nextButtonEye = document.getElementById('next-button-eye');
        if (nextButtonEye) {
            nextButtonEye.addEventListener('click', () => {
                showContent('back-health-content');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        
        // 허리 건강 → 얼굴 긴장
        const nextButtonBack = document.getElementById('next-button-back');
        if (nextButtonBack) {
            nextButtonBack.addEventListener('click', () => {
                showContent('face-tension-content');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        
        // 얼굴 긴장 → 마무리
        const nextButtonFace = document.getElementById('next-button-face');
        if (nextButtonFace) {
            nextButtonFace.addEventListener('click', () => {
                showContent('guide-complete-content');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        
        // 마무리 페이지 버튼들
        const goChecklistBtn = document.getElementById('go-checklist-btn');
        if (goChecklistBtn) {
            goChecklistBtn.addEventListener('click', () => {
                showContent('health-checklist-content');
                updateHeaderNav('checklist');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        
        const goBreakBtn = document.getElementById('go-break-btn');
        if (goBreakBtn) {
            goBreakBtn.addEventListener('click', () => {
                // 커스텀 이벤트로 전체 휴식 가이드 시작
                document.dispatchEvent(new CustomEvent('startRestGuide', { 
                    detail: { guideType: 'rest-all' } 
                }));
            });
        }
        
        // 휴식 가이드 카드 버튼들 - 모든 가이드 타입 지원
        const guideCardBtns = document.querySelectorAll('.guide-card-btn');
        guideCardBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const guideType = btn.dataset.guide;
                
                // 커스텀 이벤트로 가이드 시작 요청
                const event = new CustomEvent('startRestGuide', { detail: { guideType } });
                document.dispatchEvent(event);
            });
        });
    }

    // 초기 화면 설정
    showContent(mainContentId);
    initMainScreenButtons();
    
    // 초기 탭 인디케이터 설정
    updateTabIndicators(0);
    
    // 모바일 스와이프 힌트 (첫 방문 시)
    if (!sessionStorage.getItem('swipeHintShown') && window.innerWidth <= 768) {
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
                
                // 모바일 뷰에서 활성 탭으로 스크롤
                if (window.innerWidth <= 768 && navCarouselContainer) {
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
        if (!text) return;
        const element = typeof selector === 'string' && (selector.startsWith('.') || selector.startsWith('['))
            ? document.querySelector(selector)
            : document.getElementById(selector);
        if (element) element.textContent = text;
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
            if (value) el.textContent = value;
        });

        // data-i18n-html 속성 처리 (innerHTML)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const value = getNestedValue(t, key);
            if (value) el.innerHTML = value;
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
        // 병명 세부 정보 데이터
        const diseaseInfo = {
            "거북목증후군": "목이 앞으로 쭉 빠진 자세로 인해 경추의 정상적인 C자 곡선이 일자로 변형되는 증상입니다. 두통, 어깨 결림, 목 통증을 유발합니다.",
            "경추디스크": "목뼈 사이의 디스크가 튀어나와 신경을 압박하여 팔 저림, 어깨 통증, 손 저림 등의 증상을 일으킵니다.",
            "근막통증증후군": "근육과 근막에 압통점이 생겨 통증을 일으키는 질환입니다. 장시간 같은 자세 유지 시 발생하기 쉽습니다.",
            "어깨충돌증후군": "어깨를 들 때 어깨뼈와 힘줄이 부딪혀 염증과 통증을 유발하는 질환입니다. 팔을 들거나 뒤로 젖힐 때 통증이 심합니다.",
            "척추측만증": "척추가 좌우로 휘어지는 질환으로, 자세 불균형이 주요 원인입니다. 허리 통증과 체형 변형을 초래합니다.",
            "요추디스크": "허리뼈 사이의 디스크가 튀어나와 신경을 압박하는 질환입니다. 다리 저림, 허리 통증이 주요 증상입니다.",
            "심부정맥혈전증": "다리 깊숙한 정맥에 혈전(피떡)이 생기는 질환입니다. 장시간 앉아있을 때 발생 위험이 높아집니다.",
            "하지정맥류": "다리 정맥의 판막 기능 이상으로 혈액이 역류해 정맥이 부풀어 오르는 질환입니다. 오래 서있거나 앉아있을 때 악화됩니다.",
            "손목터널증후군": "손목의 정중신경이 압박되어 손저림, 손목 통증, 감각 이상을 일으키는 질환입니다. 반복적인 손목 사용이 주요 원인입니다.",
            "건초염": "힘줄을 감싸는 건초에 염증이 생기는 질환입니다. 손목이나 손가락의 반복적인 움직임으로 발생합니다.",
            "드퀘르뱅병": "엄지손가락 쪽 힘줄과 건초에 생기는 염증성 질환입니다. 엄지를 사용할 때 손목 통증이 심합니다.",
            "VDT증후군": "컴퓨터 등 영상표시단말기를 장시간 사용하여 발생하는 눈의 피로, 시력 저하, 안구 건조 등의 증상입니다.",
            "안구건조증": "눈물 분비가 부족하거나 눈물이 빨리 증발하여 눈이 건조해지는 질환입니다. 화면을 오래 볼 때 악화됩니다.",
            "긴장성두통": "머리 주변 근육의 긴장으로 인해 발생하는 두통입니다. 스트레스와 잘못된 자세가 주요 원인입니다.",
            "편두통": "머리 한쪽이 욱신거리는 박동성 두통으로, 구토나 빛·소리에 대한 민감성을 동반할 수 있습니다.",
            "만성피로증후군": "충분한 휴식에도 개선되지 않는 지속적인 피로 상태입니다. 수면 부족, 스트레스, 영양 불균형이 원인입니다.",
            "집중력저하": "주의력과 집중력이 떨어지는 상태로, 산소 부족, 피로, 스트레스가 주요 원인입니다.",
            "저혈당증": "혈당이 정상 이하로 떨어지는 상태입니다. 식사를 거르거나 불규칙한 식사 패턴이 주요 원인이며, 어지러움, 피로, 집중력 저하를 유발합니다."
        };

        const healthTipsData = {
            water: {
                title: "수분 보충이 필요해요",
                tips: ["지금 당장 물 한 컵을 마셔보세요", "1시간마다 알람을 설정해 물을 마시는 습관을 만들어보세요", "카페인 음료보다는 물이나 허브차를 선택하세요"],
                diseases: ["만성피로증후군", "집중력저하"]
            },
            meal: {
                title: "규칙적인 식사가 필요해요",
                tips: ["바쁘더라도 식사를 거르지 마세요", "간단한 간식이라도 챙겨 드세요", "아침 식사는 뇌 활동과 집중력에 중요합니다", "과식보다는 소량씩 자주 먹는 것이 좋습니다"],
                diseases: ["저혈당증", "집중력저하", "만성피로증후군"]
            },
            'neck-forward': {
                title: "목 자세 교정이 필요해요",
                tips: ["턱을 살짝 당기고 목을 길게 늘려보세요", "모니터 높이를 눈높이와 맞춰주세요", "30분마다 목을 좌우로 천천히 돌려주세요"],
                diseases: ["거북목증후군", "경추디스크"]
            },
            'shoulder-tension': {
                title: "어깨 긴장 완화가 필요해요",
                tips: ["어깨를 위로 올렸다가 뒤로 돌리며 내려주세요", "깊게 숨을 들이마시며 어깨 힘을 빼보세요", "목과 어깨 마사지를 5분간 해보세요"],
                diseases: ["근막통증증후군", "어깨충돌증후군"]
            },
            'back-curved': {
                title: "허리 자세 개선이 필요해요",
                tips: ["등받이에 허리를 밀착시켜 앉아보세요", "발을 바닥에 평평하게 놓고 앉으세요", "허리 뒤에 쿠션을 놓아 곡선을 유지해보세요"],
                diseases: ["척추측만증", "요추디스크"]
            },
            'sitting-long': {
                title: "움직임이 필요한 시간이에요",
                tips: ["지금 당장 자리에서 일어나 2-3분 걸어보세요", "제자리에서 스트레칭을 5분간 해보세요", "50분 일하고 10분 휴식하는 패턴을 만들어보세요"],
                diseases: ["심부정맥혈전증", "하지정맥류"]
            },
            'hand-pain': {
                title: "손목 케어가 필요해요",
                tips: ["손목을 원을 그리며 천천히 돌려주세요", "손가락을 쫙 펼쳤다가 주먹을 쥐는 운동을 반복하세요", "손목 받침대를 사용해 타이핑하세요"],
                diseases: ["손목터널증후군", "건초염"]
            },
            'wrist-angle': {
                title: "손목 각도 조정이 필요해요",
                tips: ["키보드와 손목이 일직선이 되도록 조정하세요", "마우스 패드에 손목 받침대를 사용하세요", "팔꿈치가 90도가 되도록 의자 높이를 조절하세요"],
                diseases: ["손목터널증후군", "드퀘르뱅병"]
            },
            'eye-strain': {
                title: "눈 휴식이 필요해요",
                tips: ["20-20-20 법칙: 20분마다 20피트(6m) 거리를 20초간 바라보세요", "눈을 감고 10초간 휴식을 취하세요", "인공눈물을 사용해 눈을 촉촉하게 해주세요"],
                diseases: ["VDT증후군", "안구건조증"]
            },
            headache: {
                title: "두통 완화가 필요해요",
                tips: ["깊은 호흡을 5분간 해보세요", "목과 어깨 마사지를 부드럽게 해주세요", "충분한 수분 섭취와 잠깐의 휴식을 취하세요"],
                diseases: ["긴장성두통", "편두통"]
            }
        };
        
        function updateCheckCount() {
            const checkedInputs = document.querySelectorAll('.check-input:checked');
        const checkedCountSpan = document.getElementById('checked-count');
        const healthTips = document.getElementById('health-tips');
            const count = checkedInputs.length;
            
        if (checkedCountSpan) checkedCountSpan.textContent = count;
        
        if (!healthTips) return;
        
            if (count === 0) {
                healthTips.innerHTML = '<p>항목을 체크하면 맞춤 건강 팁을 제공합니다!</p>';
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
                    
                    // 병명 태그에 툴팁 기능 추가
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
            'shoulder-tension': 'rest-neck',
            'back-curved': 'rest-waist',
            'sitting-long': 'rest-waist',
            'hand-pain': 'rest-hand',
            'wrist-angle': 'rest-hand',
            'eye-strain': 'rest-eye',
            'headache': 'rest-face',
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
            'rest-waist': '🧍'
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
            
            // 카드 클릭으로 가이드 시작
            recommendedGuidesContainer.querySelectorAll('.recommended-guide-card').forEach(card => {
                card.addEventListener('click', () => {
                    const guideType = card.dataset.guide;
                    document.dispatchEvent(new CustomEvent('startRestGuide', { 
                        detail: { guideType } 
                    }));
                });
            });
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
        'rest-waist': { icon: '🧍', steps: [{ step: 1, duration: 60 }, { step: 2, duration: 90 }, { step: 3, duration: 60 }] }
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
                
                if (timerState.mode === 'global' && timerState.isRunning) {
                    // 전체 타이머 모드: 해당 단계로 시간 이동
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
        if (timerState.mode !== 'global' || !timerState.isRunning) return;
        
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
        
        // 가이드 데이터로 상태 초기화
        timerState.mode = 'global';
        timerState.guideType = guideType;
        timerState.isRunning = true;
        timerState.isPaused = false;
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
            pauseBtn.querySelector('span:last-child').textContent = '계속하기';
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
            pauseBtn.querySelector('span:last-child').textContent = '일시정지';
        } else if (timerState.mode === 'individual') {
            const playBtn = document.querySelector(`.step-play-btn[data-step="${timerState.currentStep}"]`);
            playBtn.querySelector('span').textContent = '⏸️';
            playBtn.classList.add('playing');
        }
        
        updateCardStates(timerState.currentStep);
    }

    function resetTimer() {
        clearInterval(timerState.intervalId);
        const wasGlobalMode = timerState.mode === 'global';
        timerState.isRunning = false;
        timerState.isPaused = false;
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
            
            // 일시정지 버튼 텍스트 리셋
            const pauseBtn = document.getElementById('sticky-timer-pause');
            if (pauseBtn) {
                pauseBtn.querySelector('span:last-child').textContent = '일시정지';
            }
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
        
        // 이전 단계 추적 변수 초기화
        previousStepNum = null;
        
        document.getElementById('timer-complete-message').classList.remove('hidden');
        
        if (timerState.mode === 'global') {
            // 스크롤 잠금 해제 (모달 닫기)
            unlockScroll();
            
            document.getElementById('timer-sticky-progress').classList.add('hidden');
            document.getElementById('sticky-card-display').classList.add('hidden');
            const globalStartBtn = document.getElementById('global-timer-start');
            if (globalStartBtn) globalStartBtn.classList.remove('hidden');
            document.body.classList.remove('global-timer-active');
            
            document.querySelectorAll('.break-step').forEach(card => {
                card.classList.add('completed', 'collapsed');
                card.classList.remove('active', 'waiting');
            });
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
        
        setTimeout(() => {
            document.getElementById('timer-complete-message').classList.add('hidden');
            if (timerState.mode === 'global') {
                // 일시정지 버튼 텍스트 리셋
                const pauseBtn = document.getElementById('sticky-timer-pause');
                if (pauseBtn) {
                    pauseBtn.querySelector('span:last-child').textContent = '일시정지';
                }
            }
        }, 3000);
    }

    function setupProgressBarSeek() {
        // 진행바 드래그/슬라이드 공통 함수
        function setupProgressBarDrag(container, mode, onSeek) {
            let isDragging = false;

            function handleSeek(clientX) {
                if (!timerState.isRunning && !timerState.isPaused) return;

                const rect = container.getBoundingClientRect();
                const seekX = Math.max(0, Math.min(clientX - rect.left, rect.width));
                const percentage = seekX / rect.width;
                const newTime = Math.floor(percentage * timerState.totalTime);

                timerState.currentTime = Math.max(0, Math.min(newTime, timerState.totalTime));
                onSeek();
            }

            // 마우스 이벤트 (데스크톱)
            container.addEventListener('mousedown', (e) => {
                if (mode === 'global' && timerState.mode !== 'global') return;
                e.preventDefault();
                isDragging = true;
                handleSeek(e.clientX);
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                if (mode === 'global' && timerState.mode !== 'global') return;
                handleSeek(e.clientX);
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
            });

            // 터치 이벤트 (모바일)
            container.addEventListener('touchstart', (e) => {
                if (mode === 'global' && timerState.mode !== 'global') return;
                isDragging = true;
                handleSeek(e.touches[0].clientX);
            }, { passive: true });

            container.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                if (mode === 'global' && timerState.mode !== 'global') return;
                e.preventDefault();
                handleSeek(e.touches[0].clientX);
            }, { passive: false });

            container.addEventListener('touchend', () => {
                isDragging = false;
            });

            // 클릭 이벤트도 유지
            container.addEventListener('click', (e) => {
                if (mode === 'global' && timerState.mode !== 'global') return;
                if (!timerState.isRunning && !timerState.isPaused) return;
                handleSeek(e.clientX);
            });

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
                startGlobalTimer('rest-all');
            } else if (timerState.isPaused) {
                resumeTimer();
            } else if (timerState.mode === 'individual') {
                // 개별 타이머 실행 중이면 전체 타이머로 전환
                resetTimer();
                startGlobalTimer('rest-all');
            }
        });
    }
    
    // 커스텀 이벤트로 모든 가이드 시작 지원
    document.addEventListener('startRestGuide', (e) => {
        const guideType = e.detail?.guideType || 'rest-all';
        
        if (timerState.isRunning) {
            resetTimer();
        }
        
        startGlobalTimer(guideType);
    });
    
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
            resetTimer();
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
            } else {
                pauseTimer();
                pauseBtn.querySelector('span:last-child').textContent = '계속하기';
            }
        });
        
        resetBtn.addEventListener('click', () => {
            resetTimer();
        });
    });
    
    setupProgressBarSeek();
    setupCardToggle();
    setupStepsBarClickHandlers();

    // 휴식 가이드 탭으로 이동 시 전체 UI 초기화
    document.addEventListener('resetRestGuide', () => {
        // 타이머가 실행 중이면 중지
        if (timerState.isRunning || timerState.isPaused) {
            clearInterval(timerState.intervalId);
        }

        // 타이머 상태 초기화
        timerState.isRunning = false;
        timerState.isPaused = false;
        timerState.currentTime = 0;
        timerState.mode = null;
        timerState.guideType = null;
        timerState.currentStep = null;
        timerState.steps = [];
        previousStepNum = null;

        // UI 요소 초기화
        const stickyProgress = document.getElementById('timer-sticky-progress');
        const stickyCardDisplay = document.getElementById('sticky-card-display');
        const globalStartBtn = document.getElementById('global-timer-start');
        const completeMessage = document.getElementById('timer-complete-message');

        if (stickyProgress) stickyProgress.classList.add('hidden');
        if (stickyCardDisplay) stickyCardDisplay.classList.add('hidden');
        if (globalStartBtn) globalStartBtn.classList.remove('hidden');
        if (completeMessage) completeMessage.classList.add('hidden');

        // 진행률 바 초기화
        const progressBar = document.getElementById('sticky-progress-bar');
        if (progressBar) progressBar.style.width = '0%';

        // 시간 표시 초기화
        const currentTimeEl = document.getElementById('sticky-current-time');
        if (currentTimeEl) currentTimeEl.textContent = '0:00';

        // 일시정지 버튼 텍스트 리셋
        const pauseBtn = document.getElementById('sticky-timer-pause');
        if (pauseBtn) {
            const btnText = pauseBtn.querySelector('span:last-child');
            if (btnText) btnText.textContent = '일시정지';
        }

        // 스텝 카드 상태 초기화
        document.querySelectorAll('.break-step').forEach(card => {
            card.classList.remove('completed', 'active', 'waiting', 'collapsed', 'individual-mode');
        });

        // 개별 타이머 UI 초기화
        document.querySelectorAll('[data-step-timer]').forEach(timer => {
            timer.classList.add('hidden');
        });

        // 개별 재생 버튼 초기화
        document.querySelectorAll('.step-play-btn').forEach(btn => {
            btn.classList.remove('playing');
            const icon = btn.querySelector('span');
            if (icon) icon.textContent = '▶️';
        });

        // body 클래스 정리
        document.body.classList.remove('global-timer-active');

        // 스크롤 잠금 해제
        if (typeof unlockScroll === 'function') {
            unlockScroll();
        }

        // 스텝바 상태 초기화
        document.querySelectorAll('.step-box').forEach(box => {
            box.classList.remove('active', 'completed');
        });
    });
}


