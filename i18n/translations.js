// IT&HEALTH 가이드 번역 파일
// 지원 언어: KR (한국어), EN (영어), JP (일본어)

const translations = {
    KR: {
        common: {
            start: '시작하기',
            next: '다음 스텝',
            complete: '완료',
            close: '닫기',
            pause: '일시정지',
            resume: '계속하기'
        },
        header: {
            guide: '건강 가이드',
            rest: '휴식 가이드',
            check: '체크리스트'
        },
        hero: {
            title: '건강한 IT 라이프',
            subtitle: '매일의 작은 변화가 당신의 일상을 바꿉니다',
            description: '지속 가능한 건강 습관으로 더 나은 내일을 만나보세요',
            btnStart: '시작하기',
            btnBreak: '5분 휴식하기',
            btnCheck: '건강 체크리스트'
        },
        theme: {
            label: '테마',
            anime: '애니메',
            modern: '모던'
        },
        // --- 건강 가이드 탭 ---
        tabs: {
            headache: '두통/무기력',
            turtle: '거북목',
            hand: '손의 통증',
            eye: '눈 건강',
            back: '허리 건강',
            face: '얼굴 긴장'
        },
        navDesc: {
            headache: '깊은 호흡과 자세 개선',
            turtle: '목과 어깨 건강',
            hand: '손목과 손가락 케어',
            eye: '눈의 피로와 건조함',
            back: '앉은 자세와 코어',
            face: '표정근과 턱 이완'
        },
        // 각 증상별 상세 내용
        headache: {
            title: '두통과 무기력 해결하기',
            intro1: '장시간의 데스크워크에 의해 <span class="problem-keyword">얕은 호흡</span>이 습관화되면, 뇌로의 산소 공급이 부족하며, 두통이나 집중력 저하로 이어질 수 있습니다.',
            intro2: '<span class="problem-keyword">무너진 자세</span>는 혈액순환을 방해하며, 피로감과 무기력증을 불러일으키는 원인이 됩니다.',
            symptomTitle: '[증상 특징]',
            symptom1: '오후가 되면 머리가 무거워짐',
            symptom2: '왠지 모르게 의욕이 나지 않음',
            causeTitle: '[원인과 메커니즘]',
            cause1: '얕은 호흡으로 인한 산소 부족',
            cause2: '자세 불균형으로 인한 혈류 장애',
            tipTitle: '[개선의 힌트]',
            tip1: '깊은 호흡을 의식합니다.',
            tip2: '데스크 환경을 재정비합니다.',
            tipDetail1: '3초 들이마시고 4초 내쉬는 리듬으로',
            tipDetail2: '자연스러운 자세가 되도록',
            chipBreath: '깊은 호흡',
            chipPosture: '자연스러운 자세',
            chipMindfulness: '마음챙김'
        },
        turtle: {
            title: '거북목 증상 개선',
            intro1: '스마트폰이나 모니터를 장시간 내려다보는 자세는 목 근육에 과도한 부담을 주어, <span class="problem-keyword">"거북목"</span>이라고 불리는 증상을 일으킵니다.',
            intro2: '<span class="problem-keyword">잘못된 시선 위치</span>와 장시간 고정된 자세는 목의 긴장과 어깨 결림의 원인이 됩니다.',
            symptomTitle: '[증상 특징]',
            symptom1: '목과 어깨에 지속적인 긴장감',
            symptom2: '고개를 돌릴 때 불편함',
            causeTitle: '[원인과 메커니즘]',
            cause1: '잘못된 시선 위치로 인한 목의 긴장',
            cause2: '장시간 고정된 자세',
            tipTitle: '[개선의 힌트]',
            tip1: '시선의 높이를 조절합니다.',
            tip2: '규칙적인 스트레칭을 합니다.',
            tipDetail1: '목을 똑바로 유지하여 어깨 결림 예방',
            tipDetail2: '1시간에 1회 목을 돌리는 운동',
            chipHeight: '시선 높이',
            chipStretch: '목 스트레칭',
            chipPosture: '올바른 자세'
        },
        hand: {
            title: '손목과 손가락 건강관리',
            intro1: '키보드나 마우스의 사용에 따른 <span class="problem-keyword">반복 동작</span>은, 건초염이나 손목 통증의 원인이 됩니다.',
            intro2: '<span class="problem-keyword">손목의 각도</span>와 힘 조절 미흡은 손과 손가락에 지속적인 부담을 주게 됩니다.',
            symptomTitle: '[증상 특징]',
            symptom1: '손목과 손가락의 통증과 저림',
            symptom2: '장시간 타이핑 시 불편함 증가',
            causeTitle: '[원인과 메커니즘]',
            cause1: '손목의 각도와 힘 조절 미흡',
            cause2: '반복적인 손목 및 손가락 동작',
            tipTitle: '[개선의 힌트]',
            tip1: '손목 각도를 재검토합니다.',
            tip2: '손가락 스트레칭을 합니다.',
            tipDetail1: '자연스러운 손목 위치로 부담 감소',
            tipDetail2: '손을 펴고 접는 운동으로 통증 예방',
            chipAngle: '손목 각도',
            chipStretch: '손 스트레칭',
            chipErgonomics: '인체공학'
        },
        eye: {
            title: '눈 건강 관리',
            intro1: '장시간 <span class="problem-keyword">화면 응시</span>는 눈의 피로와 건조함을 유발하며, 시력 저하와 두통의 원인이 됩니다.',
            intro2: '<span class="problem-keyword">깜빡임 감소</span>와 근거리 집중은 눈 근육의 긴장과 안구 건조증을 악화시킵니다.',
            symptomTitle: '[증상 특징]',
            symptom1: '눈이 뻑뻑하고 건조함',
            symptom2: '눈의 피로와 침침함',
            causeTitle: '[원인과 메커니즘]',
            cause1: '화면 집중으로 인한 깜빡임 횟수 감소',
            cause2: '근거리 집중으로 인한 눈 근육 긴장',
            tipTitle: '[개선의 힌트]',
            tip1: '20-20-20 규칙을 실천합니다.',
            tip2: '의식적으로 눈을 깜빡입니다.',
            tipDetail1: '20분마다 20피트(6m) 거리를 20초간 바라보기',
            tipDetail2: '인공눈물을 활용해 눈 촉촉하게 유지',
            chip1: '20-20-20',
            chip2: '눈 깜빡임',
            chip3: '눈 휴식'
        },
        back: {
            title: '허리 건강 관리',
            intro1: '장시간 <span class="problem-keyword">앉은 자세</span>는 허리 근육과 디스크에 지속적인 부담을 주어 요통과 척추 문제를 유발합니다.',
            intro2: '<span class="problem-keyword">코어 근육 약화</span>와 구부정한 자세는 허리 통증의 주요 원인이 됩니다.',
            symptomTitle: '[증상 특징]',
            symptom1: '허리 뻐근함과 통증',
            symptom2: '오래 앉아있을 때 불편함 증가',
            causeTitle: '[원인과 메커니즘]',
            cause1: '장시간 앉은 자세로 인한 디스크 압박',
            cause2: '코어 근육 약화로 인한 자세 불안정',
            tipTitle: '[개선의 힌트]',
            tip1: '1시간마다 일어나 스트레칭합니다.',
            tip2: '올바른 앉은 자세를 유지합니다.',
            tipDetail1: '허리를 뒤로 젖히고 좌우로 비틀기',
            tipDetail2: '등받이 활용, 발은 바닥에 평평하게',
            chip1: '허리 스트레칭',
            chip2: '올바른 자세',
            chip3: '코어 강화'
        },
        face: {
            title: '얼굴 긴장 완화',
            intro1: '무의식적인 <span class="problem-keyword">이 악물기</span>와 표정 긴장은 턱관절 장애와 두통을 유발할 수 있습니다.',
            intro2: '<span class="problem-keyword">표정근의 지속적인 긴장</span>은 얼굴 피로와 긴장성 두통의 원인이 됩니다.',
            symptomTitle: '[증상 특징]',
            symptom1: '턱과 관자놀이의 긴장감',
            symptom2: '얼굴 피로와 두통',
            causeTitle: '[원인과 메커니즘]',
            cause1: '스트레스로 인한 무의식적 이 악물기',
            cause2: '집중 시 표정 근육의 지속적 긴장',
            tipTitle: '[개선의 힌트]',
            tip1: '턱에 힘을 빼고 이완합니다.',
            tip2: '표정근 스트레칭을 합니다.',
            tipDetail1: '입을 살짝 벌려 자연스러운 상태 유지',
            tipDetail2: '눈을 크게 뜨고, 입을 크게 벌리는 운동',
            chip1: '턱 이완',
            chip2: '표정근 스트레칭',
            chip3: '얼굴 마사지'
        },
        // --- 가이드 소개 페이지 ---
        intro: {
            mainTitle: 'IT&HEALTH 가이드에 오신 것을 환영합니다',
            lead1: '장시간 데스크워크로 몸에 무리가 가고 있지는 않나요?',
            lead2: '자세가 무너지고 있지는 않나요?',
            purposeTitle: '우리의 미션',
            purpose1: 'IT 작업은 현대인에게 피할 수 없는 일입니다.',
            purpose2: '그렇기에 몸을 지키는 지식이 필요합니다.',
            purpose3: '당신이 궁금해할 건강 정보를 여기 모았습니다.',
            contentTitle: '주요 건강 정보',
            card1Title: '두통과 무기력',
            card1Desc: '장시간의 얕은 호흡과 무너진 자세로 인한 두통과 집중력 저하를 예방하는 방법을 알아보세요.',
            card2Title: '거북목 증상',
            card2Desc: '모니터를 장시간 내려다보는 자세로 인한 목과 어깨의 부담을 줄이는 실용적인 팁을 제공합니다.',
            card3Title: '손목과 손가락',
            card3Desc: '키보드와 마우스 사용으로 인한 건초염과 손목 통증을 예방하고 관리하는 방법을 소개합니다.',
            howtoTitle: '이 가이드 활용하기',
            howto1: '<span class="feature-icon">📋</span> <strong>건강 체크리스트</strong>로 지금 바로 내 상태를 점검하세요',
            howto2: '<span class="feature-icon">🎬</span> <strong>5분 휴식 가이드</strong>를 통해 즉시 실천 가능한 스트레칭을 경험하세요',
            howto3: '<span class="feature-icon">🌿</span> <strong>증상별 가이드</strong>에서 내게 필요한 건강 정보를 찾아보세요',
            howto4: '<span class="feature-icon">🔄</span> <strong>규칙적인 실천</strong>으로 장기적인 건강 개선을 이루세요',
            workspaceTitle: '건강한 작업 환경 만들기',
            workspaceDesc: '쾌적한 작업 공간은 신체 건강과 업무 효율에 직접적인 영향을 미칩니다.',
            tempTitle: '적절한 온습도',
            tempDesc: '작업 공간의 온도는 18~24°C, 습도는 40~60%가 적절하며 쾌적한 환경 유지가 중요합니다.',
            waterTitle: '충분한 수분 섭취',
            waterDesc: '하루 1.5~2리터의 물을 마시며 장시간 작업 시 수분 보충을 잊지 마세요.',
            airTitle: '실내 공기 질',
            airDesc: '2~3시간마다 환기하여 신선한 공기를 순환시키고 쾌적한 작업 환경을 유지하세요.',
            quickAccessTitle: '🚀 바로가기',
            quickGuide: '건강 가이드',
            quickGuideDesc: '증상별 건강 정보',
            quickRest: '휴식 가이드',
            quickRestDesc: '부위별 스트레칭',
            quickCheck: '체크리스트',
            quickCheckDesc: '내 상태 점검하기',
            msgTitle: '건강한 IT 라이프를 시작하세요',
            msg1: '심각한 증상이 지속되거나 악화된다면 반드시 의료 전문가와 상담하세요.',
            msg2: '작은 습관의 변화가 큰 건강의 차이를 만듭니다. 오늘부터 시작해보세요!',
            cta: '건강 가이드 둘러보기 →'
        },
        // --- 체크리스트 ---
        checklist: {
            title: '건강 체크리스트',
            subtitle: '지금 이 순간, 나의 상태를 점검해보세요',
            resultTitle: '체크 결과',
            checkedCount: '체크된 항목:',
            countUnit: '개',
            defaultMsg: '항목을 체크하면 맞춤 건강 팁을 제공합니다!',
            reset: '전체 초기화',
            sections: {
                hydration: '🍽️ 수분 & 식사',
                neck: '🐢 목과 어깨',
                posture: '🪑 자세',
                hand: '✋ 손과 손목',
                fatigue: '😴 피로도'
            },
            questions: {
                water: '지난 1시간 내에 물을 마셨나요?',
                meal: '오늘 식사를 거르지 않았나요?',
                neckForward: '목이 앞으로 나와있나요?',
                shoulder: '어깨에 긴장이나 결림이 있나요?',
                backCurved: '허리가 구부정하게 굽어있나요?',
                sitting: '1시간 이상 같은 자세로 앉아있었나요?',
                handPain: '손목이나 손가락에 통증이 있나요?',
                wristAngle: '손목이 꺾인 상태로 타이핑하고 있나요?',
                eyes: '눈이 피로하거나 건조한가요?',
                headache: '머리가 무겁거나 두통이 있나요?'
            },
            tips: {
                water: { title: "수분 보충 필요", desc: ["물 한 컵 마시기", "1시간마다 알람", "카페인 줄이기"] },
                meal: { title: "규칙적 식사 필요", desc: ["식사 거르지 않기", "간단한 간식", "아침 챙겨먹기"] },
                neck: { title: "목 자세 교정", desc: ["턱 당기기", "모니터 높이 조절", "목 좌우 스트레칭"] },
                shoulder: { title: "어깨 긴장 완화", desc: ["어깨 돌리기", "심호흡하며 힘 빼기", "마사지 하기"] },
                back: { title: "허리 자세 개선", desc: ["등받이 밀착", "발은 바닥에", "허리 쿠션 사용"] },
                sitting: { title: "움직임 필요", desc: ["일어나서 걷기", "제자리 스트레칭", "50분 일하고 10분 휴식"] },
                hand: { title: "손목 케어", desc: ["손목 돌리기", "잼잼 운동", "손목 받침대 사용"] },
                wrist: { title: "손목 각도 조정", desc: ["키보드와 일직선 유지", "의자 높이 조절"] },
                eye: { title: "눈 휴식", desc: ["20-20-20 규칙", "눈 감고 휴식", "인공눈물 사용"] },
                headache: { title: "두통 완화", desc: ["깊은 호흡 5분", "관자놀이 마사지", "잠시 휴식"] }
            },
            diseases: {
                turtle: { name: "거북목증후군", desc: "목이 앞으로 빠져 경추가 변형되는 증상" },
                disk: { name: "경추/요추디스크", desc: "디스크가 신경을 압박해 통증 유발" },
                vdt: { name: "VDT증후군", desc: "영상기기 장시간 사용으로 인한 건강 장애" },
                dryeye: { name: "안구건조증", desc: "눈물 부족으로 눈이 뻑뻑한 증상" },
                tunnel: { name: "손목터널증후군", desc: "신경 압박으로 인한 손저림 및 통증" }
            },
            recommendTitle: '🎯 맞춤 휴식 가이드',
            recommendSubtitle: '체크하신 항목에 따라 추천하는 휴식 가이드입니다',
            guideRecommend: {
                'rest-neck': { desc: '목 근육을 풀어주는 집중 스트레칭' },
                'rest-waist': { desc: '허리 부담을 줄이고 코어를 활성화' },
                'rest-hand': { desc: '손목과 손가락의 피로를 풀어주세요' },
                'rest-eye': { desc: '화면 응시로 피로한 눈을 쉬게 해주세요' },
                'rest-face': { desc: '표정근과 턱 긴장을 풀어 두통 완화' },
                'rest-all': { desc: '5분간 전신 스트레칭과 휴식' },
                'rest-breathing': { desc: '깊은 호흡으로 산소 공급과 스트레스 해소' },
                'rest-meditation': { desc: '마음을 가라앉히는 짧은 명상 가이드' },
                'rest-shoulder': { desc: '승모근과 어깨 긴장을 풀어주는 스트레칭' }
            }
        },
        // --- 휴식 가이드 ---
        restGuide: {
            pageTitle: '휴식 가이드',
            pageSubtitle: '몸과 마음을 위한 간단한 스트레칭과 이완법',
            introTitle: '휴식 가이드 소개',
            introDesc1: '장시간 업무로 지친 몸과 마음을 위한 간단하고 효과적인 휴식법을 소개합니다.',
            introDesc2: '각 부위별로 특화된 스트레칭과 이완 기법을 통해 즉각적인 피로 회복을 경험해보세요.',
            introDesc3: '하루 몇 분만 투자해도 장기적인 건강 개선 효과를 얻을 수 있습니다.',
            tipsTitle: '💡 효과적인 휴식을 위한 팁',
            tip1: '50분 집중 후 10분 휴식 패턴을 유지하세요',
            tip2: '스트레칭 시 통증이 느껴지면 즉시 중단하고 강도를 낮추세요',
            tip3: '깊고 편안한 호흡과 함께 천천히 동작하세요',
            tip4: '하루에 여러 번 짧게 하는 것이 한 번 길게 하는 것보다 효과적입니다',
            tip5: '스트레칭 전후로 충분한 수분을 섭취하세요',
            cards: {
                all: { title: '전체 휴식 가이드', desc: '목, 어깨, 허리를 포함한 전신 스트레칭으로 전체적인 피로를 해소합니다. 약 5분 소요됩니다.' },
                neck: { title: '뒷목 휴식 가이드', desc: '장시간 모니터를 보며 긴장된 목 뒷근육을 풀어주는 집중 스트레칭입니다.' },
                face: { title: '얼굴 휴식 가이드', desc: '표정근과 턱 근육의 긴장을 풀어 두통 예방과 얼굴 피로 해소에 도움을 줍니다.' },
                eye: { title: '눈 휴식 가이드', desc: '화면 응시로 인한 눈의 피로와 건조함을 완화하는 눈 운동과 이완법입니다.' },
                hand: { title: '손 휴식 가이드', desc: '키보드와 마우스 사용으로 지친 손목과 손가락을 위한 스트레칭입니다.' },
                waist: { title: '허리 휴식 가이드', desc: '앉아서 일하는 자세로 인한 허리 부담을 줄이고 코어 근육을 활성화합니다.' },
                breathing: { title: '호흡 휴식 가이드', desc: '깊은 호흡법으로 산소 공급을 늘리고 스트레스를 해소하는 호흡 운동입니다.' },
                meditation: { title: '명상 휴식 가이드', desc: '짧은 시간 마음을 가라앉히고 집중력을 회복하는 마음챙김 명상입니다.' },
                shoulder: { title: '어깨 휴식 가이드', desc: '승모근과 어깨 근육의 긴장을 풀어 어깨 결림과 통증을 완화합니다.' }
            },
            steps: {
                all: [
                    { title: '일어나기', desc: '자리에서 일어나 몸을 쭉 펴주세요.' },
                    { title: '목/어깨', desc: '목을 돌리고 어깨를 풀어줍니다.' },
                    { title: '호흡', desc: '눈을 감고 깊게 호흡하세요.' }
                ],
                neck: [
                    { title: '목 풀기', desc: '힘을 빼고 고개를 천천히 돌리세요.' },
                    { title: '스트레칭', desc: '손으로 머리를 지그시 눌러줍니다.' },
                    { title: '이완', desc: '어깨를 털며 마무리합니다.' }
                ],
                face: [
                    { title: '인식', desc: '얼굴에 들어간 힘을 확인하세요.' },
                    { title: '표정 운동', desc: '아-에-이-오-우를 크게 하세요.' },
                    { title: '턱 이완', desc: '턱을 좌우로 가볍게 움직이세요.' }
                ],
                eye: [
                    { title: '눈 감기', desc: '눈을 감고 어둠을 느끼세요.' },
                    { title: '눈 운동', desc: '눈동자를 상하좌우로 굴리세요.' },
                    { title: '먼 곳 보기', desc: '먼 곳을 20초간 바라보세요.' }
                ],
                hand: [
                    { title: '손목 돌리기', desc: '손목을 부드럽게 돌려주세요.' },
                    { title: '손가락', desc: '주먹을 쥐었다 쫙 펴세요.' },
                    { title: '마사지', desc: '손바닥을 꾹꾹 눌러주세요.' }
                ],
                waist: [
                    { title: '허리 젖히기', desc: '서서 허리를 뒤로 젖히세요.' },
                    { title: '비틀기', desc: '상체를 좌우로 비틀어주세요.' },
                    { title: '바른 자세', desc: '허리를 펴고 바르게 앉으세요.' }
                ],
                breathing: [
                    { title: '준비', desc: '편안한 자세로 눈을 감으세요.' },
                    { title: '복식호흡', desc: '배를 부풀리며 깊게 호흡합니다.' },
                    { title: '마무리', desc: '천천히 일상 호흡으로 돌아옵니다.' }
                ],
                meditation: [
                    { title: '자세 잡기', desc: '허리를 펴고 편안하게 앉으세요.' },
                    { title: '집중', desc: '호흡에만 주의를 기울입니다.' },
                    { title: '마음챙김', desc: '현재 순간을 느끼며 마무리합니다.' }
                ],
                shoulder: [
                    { title: '어깨 으쓱', desc: '어깨를 귀 쪽으로 올렸다 내립니다.' },
                    { title: '승모근 스트레칭', desc: '고개를 기울여 승모근을 늘립니다.' },
                    { title: '어깨 돌리기', desc: '어깨를 크게 원을 그리며 돌립니다.' }
                ]
            }
        },
        // --- 가이드 완료 ---
        complete: {
            title: '건강 가이드를 모두 살펴보셨습니다!',
            sub: '작은 습관이 큰 변화를 만듭니다',
            summary: '핵심 요약',
            summaryTitle: '📋 핵심 요약',
            action: '🚀 다음 단계',
            btnCheck: '건강 체크리스트로 상태 점검하기',
            btnRest: '5분 휴식 가이드 시작하기',
            remind: '<strong>기억하세요!</strong> 50분 작업 후 10분 휴식, 하루 1.5~2L 수분 섭취, 정기적인 스트레칭이 건강한 IT 라이프의 핵심입니다.',
            headache1: '깊은 호흡 실천하기',
            headache2: '올바른 자세 유지하기',
            headache3: '규칙적인 휴식 취하기',
            turtle1: '모니터 높이 조절하기',
            turtle2: '목 스트레칭 자주 하기',
            turtle3: '시선 높이 의식하기',
            hand1: '손목 각도 점검하기',
            hand2: '손가락 스트레칭하기',
            hand3: '손목 받침대 활용하기'
        },
        // --- 푸터 ---
        footer: {
            note: '본 프로젝트는 대학 과제 목적의 비상업적 웹사이트입니다.',
            imageSource: '스톡 이미지 출처:'
        },
        // --- 타이머 ---
        timer: {
            completeMessage: '🎉 휴식 완료! 수고하셨습니다! 🎉',
            inProgress: '전체 휴식 가이드 진행 중',
            inProgressSuffix: '진행 중',
            step1: '1. 일어나기',
            step2: '2. 목/어깨',
            step3: '3. 깊은호흡',
            minute: '분',
            cardTitle1: '자리에서 일어나기',
            cardDesc1: '천천히 자리에서 일어나 몸을 펴보세요. 발끝부터 머리까지 쭉 늘려주며 혈액순환을 도와주세요.',
            cardTip1_1: '팔을 위로 뻗어 온몸을 스트레칭',
            cardTip1_2: '제자리에서 가볍게 걸어보기',
            cardTip1_3: '발가락을 들었다 내렸다 반복'
        },
        // --- 휴식 가이드 데이터 ---
        restGuideData: {
            'rest-all': {
                label: '전체 휴식 가이드',
                steps: [
                    { title: '자리에서 일어나기', time: '1분', description: '천천히 자리에서 일어나 몸을 펴보세요. 발끝부터 머리까지 쭉 늘려주며 혈액순환을 도와주세요.', tips: ['팔을 위로 뻗어 온몸을 스트레칭', '제자리에서 가볍게 걸어보기', '발가락을 들었다 내렸다 반복'] },
                    { title: '목과 어깨 스트레칭', time: '2분', description: '목과 어깨의 긴장을 풀어주는 스트레칭으로 뭉친 근육을 이완시켜주세요.', tips: ['목을 좌우로 천천히 돌리기 (각 방향 5회)', '어깨를 위로 올렸다가 뒤로 돌리며 내리기', '고개를 좌우로 기울여 목 옆근육 늘리기', '턱을 가슴 쪽으로 당겨 목 뒷근육 스트레칭'] },
                    { title: '깊은 호흡과 명상', time: '2분', description: '마음을 차분히 하고 깊은 호흡으로 스트레스를 해소해보세요.', tips: ['편안한 자세로 앉거나 서기', '4초 들이마시고 6초 내쉬기 반복', '눈을 감고 현재 순간에 집중하기', '몸의 긴장 부위를 의식적으로 이완시키기'] }
                ]
            },
            'rest-neck': {
                label: '뒷목 휴식 가이드',
                steps: [
                    { title: '목 풀어주기', time: '1분', description: '긴장된 목 근육을 부드럽게 풀어주는 준비 동작입니다.', tips: ['어깨를 내리고 목에 힘을 빼기', '턱을 살짝 당겨 목 뒤를 길게 늘리기', '고개를 천천히 좌우로 돌리기 (각 5회)'] },
                    { title: '뒷목 스트레칭', time: '1분 30초', description: '목 뒤쪽 근육을 집중적으로 늘려주는 스트레칭입니다.', tips: ['양손을 깍지 끼고 머리 뒤에 대기', '턱을 가슴 쪽으로 부드럽게 당기기', '15초 유지 후 천천히 돌아오기 (3회 반복)', '통증이 있으면 강도를 줄이세요'] },
                    { title: '목 근육 이완', time: '1분', description: '스트레칭한 근육을 이완시키고 마무리합니다.', tips: ['어깨를 위로 올렸다가 떨어뜨리기 (5회)', '목을 좌우로 기울여 옆 근육 늘리기', '깊은 호흡과 함께 긴장 풀기'] }
                ]
            },
            'rest-face': {
                label: '얼굴 휴식 가이드',
                steps: [
                    { title: '얼굴 근육 인식', time: '1분', description: '평소 긴장하고 있던 얼굴 근육을 인식하고 의식적으로 풀어줍니다.', tips: ['이마에 주름이 잡혀있지 않은지 확인', '눈썹 사이 힘 빼기', '턱에 힘이 들어가 있지 않은지 체크'] },
                    { title: '표정근 스트레칭', time: '1분 30초', description: '얼굴의 다양한 근육을 움직여 긴장을 해소합니다.', tips: ['눈을 크게 떴다가 꽉 감기 (5회)', '입을 크게 벌려 "아" 하기', '볼을 부풀렸다가 오므리기 (5회)', '혀를 입 안에서 돌리기 (좌우 각 5회)'] },
                    { title: '턱 이완 및 마무리', time: '1분', description: '긴장이 모이기 쉬운 턱 근육을 집중적으로 이완합니다.', tips: ['입을 살짝 벌려 턱에 힘 빼기', '턱을 좌우로 부드럽게 움직이기', '관자놀이를 부드럽게 원을 그리며 마사지'] }
                ]
            },
            'rest-eye': {
                label: '눈 휴식 가이드',
                steps: [
                    { title: '눈 감고 휴식', time: '1분', description: '화면에서 눈을 떼고 눈의 피로를 회복시킵니다.', tips: ['눈을 감고 편안하게 휴식', '손바닥을 비벼 따뜻하게 한 후 눈 위에 올리기', '깊은 호흡과 함께 눈 주변 긴장 풀기'] },
                    { title: '눈 운동', time: '1분 30초', description: '눈 근육을 움직여 피로를 풀고 혈액순환을 돕습니다.', tips: ['눈을 위-아래로 천천히 움직이기 (10회)', '눈을 좌-우로 천천히 움직이기 (10회)', '눈을 시계 방향으로 크게 돌리기 (5회)', '반시계 방향으로도 돌리기 (5회)'] },
                    { title: '원거리 응시', time: '1분', description: '20-20-20 규칙으로 눈의 초점 근육을 이완시킵니다.', tips: ['창밖이나 먼 곳(6m 이상)을 바라보기', '20초 이상 먼 곳에 초점 맞추기', '눈을 깜빡여 눈물로 눈 촉촉하게 유지'] }
                ]
            },
            'rest-hand': {
                label: '손 휴식 가이드',
                steps: [
                    { title: '손목 풀기', time: '1분', description: '키보드와 마우스 사용으로 긴장된 손목을 풀어줍니다.', tips: ['손목을 시계/반시계 방향으로 돌리기 (각 10회)', '손목을 위아래로 꺾어 스트레칭', '손을 털어 긴장 풀기'] },
                    { title: '손가락 스트레칭', time: '1분 30초', description: '손가락 관절과 힘줄을 늘려주는 스트레칭입니다.', tips: ['손가락을 쫙 펴고 5초 유지', '주먹을 꽉 쥐고 5초 유지 (5회 반복)', '각 손가락을 하나씩 뒤로 젖혀 스트레칭', '손바닥을 마주보고 손목 꺾기'] },
                    { title: '손 마사지', time: '1분', description: '손 전체의 피로를 풀어주는 마사지입니다.', tips: ['엄지로 손바닥 가운데를 누르며 마사지', '손등을 부드럽게 문지르기', '손가락 사이사이를 가볍게 눌러주기'] }
                ]
            },
            'rest-waist': {
                label: '허리 휴식 가이드',
                steps: [
                    { title: '허리 풀기', time: '1분', description: '오래 앉아있어 굳은 허리 근육을 부드럽게 풀어줍니다.', tips: ['의자에서 일어나 허리에 손을 대고 뒤로 젖히기', '상체를 좌우로 천천히 비틀기 (각 5회)', '골반을 좌우로 돌려 허리 풀기'] },
                    { title: '코어 스트레칭', time: '1분 30초', description: '허리를 지지하는 코어 근육을 활성화하고 스트레칭합니다.', tips: ['서서 양팔을 위로 뻗어 옆으로 기울이기 (좌우 각 15초)', '상체를 앞으로 숙여 손끝이 바닥에 닿게 하기', '무릎을 살짝 구부린 채 허리 스트레칭', '고양이-소 자세로 척추 움직이기 (가능한 경우)'] },
                    { title: '자세 리셋', time: '1분', description: '올바른 자세를 확인하고 허리에 부담을 줄이는 자세로 돌아갑니다.', tips: ['발을 어깨 너비로 벌리고 바르게 서기', '어깨를 뒤로 당기고 가슴 펴기', '앉을 때 엉덩이를 의자 깊숙이 넣고 등받이 활용'] }
                ]
            },
            'rest-breathing': {
                label: '호흡 휴식 가이드',
                steps: [
                    { title: '호흡 준비', time: '1분', description: '편안한 자세를 잡고 몸의 긴장을 풀어 깊은 호흡을 준비합니다.', tips: ['편안하게 앉거나 서서 어깨 힘 빼기', '눈을 감고 현재 호흡 상태 인식하기', '턱과 어깨에 들어간 힘 풀기'] },
                    { title: '복식호흡 연습', time: '1분 30초', description: '배를 이용한 깊은 호흡으로 산소 공급을 늘리고 부교감신경을 활성화합니다.', tips: ['코로 4초간 천천히 들이마시기', '배가 부풀어 오르는 것을 느끼기', '입으로 6초간 천천히 내쉬기', '배가 자연스럽게 들어가는 것을 느끼기 (5회 반복)'] },
                    { title: '호흡 마무리', time: '1분', description: '깊은 호흡의 효과를 느끼며 일상 호흡으로 자연스럽게 돌아갑니다.', tips: ['점차 호흡 깊이를 줄여가기', '몸 전체의 이완된 느낌 인식하기', '눈을 뜨고 천천히 주변을 둘러보기'] }
                ]
            },
            'rest-meditation': {
                label: '명상 휴식 가이드',
                steps: [
                    { title: '명상 자세 잡기', time: '1분', description: '안정적인 자세를 잡고 마음을 가라앉힐 준비를 합니다.', tips: ['허리를 펴고 편안하게 앉기', '손은 무릎 위에 가볍게 올려놓기', '눈을 감거나 시선을 아래로 부드럽게 내리기'] },
                    { title: '마음챙김 집중', time: '1분 30초', description: '호흡에 주의를 기울이며 현재 순간에 집중합니다.', tips: ['들숨과 날숨에만 주의를 기울이기', '잡념이 떠오르면 부드럽게 호흡으로 돌아오기', '판단 없이 현재 상태를 있는 그대로 받아들이기', '몸의 감각을 부드럽게 느끼기'] },
                    { title: '명상 마무리', time: '1분', description: '명상의 고요함을 유지하며 일상으로 부드럽게 돌아갑니다.', tips: ['천천히 주변 소리를 인식하기', '손가락과 발가락을 가볍게 움직이기', '눈을 천천히 뜨고 잠시 멈추기', '새로운 에너지와 집중력을 느끼기'] }
                ]
            },
            'rest-shoulder': {
                label: '어깨 휴식 가이드',
                steps: [
                    { title: '어깨 풀기', time: '1분', description: '굳어있는 승모근과 어깨 근육의 긴장을 풀어주는 준비 운동입니다.', tips: ['어깨를 귀 쪽으로 올렸다가 힘을 빼며 떨어뜨리기 (5회)', '어깨를 앞으로 돌렸다 뒤로 돌리기 (각 5회)', '양팔을 흔들어 어깨 긴장 풀기'] },
                    { title: '승모근 스트레칭', time: '1분 30초', description: '목에서 어깨로 이어지는 승모근을 집중적으로 늘려줍니다.', tips: ['오른손으로 머리 왼쪽을 잡고 오른쪽으로 부드럽게 당기기', '15초 유지 후 반대쪽도 동일하게 (각 2회)', '턱을 가슴 쪽으로 당겨 목 뒤 승모근 스트레칭', '통증이 있으면 강도를 줄이세요'] },
                    { title: '어깨 이완', time: '1분', description: '스트레칭한 어깨 근육을 이완시키고 마무리합니다.', tips: ['양손을 깍지 끼고 앞으로 쭉 밀어 견갑골 벌리기', '뒤로 깍지 끼고 가슴을 펴며 어깨 모으기', '어깨를 크게 원을 그리며 천천히 돌리기 (5회)', '깊은 호흡과 함께 어깨 힘 완전히 빼기'] }
                ]
            }
        },
        // --- 질병 정보 ---
        diseases: {
            '거북목증후군': '목이 앞으로 쭉 빠진 자세로 인해 경추의 정상적인 C자 곡선이 일자로 변형되는 증상입니다. 두통, 어깨 결림, 목 통증을 유발합니다.',
            '경추디스크': '목뼈 사이의 디스크가 튀어나와 신경을 압박하여 팔 저림, 어깨 통증, 손 저림 등의 증상을 일으킵니다.',
            '근막통증증후군': '근육과 근막에 압통점이 생겨 통증을 일으키는 질환입니다. 장시간 같은 자세 유지 시 발생하기 쉽습니다.',
            '어깨충돌증후군': '어깨를 들 때 어깨뼈와 힘줄이 부딪혀 염증과 통증을 유발하는 질환입니다.',
            '척추측만증': '척추가 좌우로 휘어지는 질환으로, 자세 불균형이 주요 원인입니다.',
            '요추디스크': '허리뼈 사이의 디스크가 튀어나와 신경을 압박하는 질환입니다.',
            '심부정맥혈전증': '다리 깊숙한 정맥에 혈전(피떡)이 생기는 질환입니다.',
            '하지정맥류': '다리 정맥의 판막 기능 이상으로 혈액이 역류해 정맥이 부풀어 오르는 질환입니다.',
            '손목터널증후군': '손목의 정중신경이 압박되어 손저림, 손목 통증을 일으키는 질환입니다.',
            '건초염': '힘줄을 감싸는 건초에 염증이 생기는 질환입니다.',
            '드퀘르뱅병': '엄지손가락 쪽 힘줄과 건초에 생기는 염증성 질환입니다.',
            'VDT증후군': '영상표시단말기를 장시간 사용하여 발생하는 눈의 피로, 시력 저하 등의 증상입니다.',
            '안구건조증': '눈물 분비가 부족하거나 눈물이 빨리 증발하여 눈이 건조해지는 질환입니다.',
            '긴장성두통': '머리 주변 근육의 긴장으로 인해 발생하는 두통입니다.',
            '편두통': '머리 한쪽이 욱신거리는 박동성 두통으로, 구토나 빛·소리에 대한 민감성을 동반할 수 있습니다.',
            '만성피로증후군': '충분한 휴식에도 개선되지 않는 지속적인 피로 상태입니다.',
            '집중력저하': '주의력과 집중력이 떨어지는 상태로, 산소 부족, 피로, 스트레스가 주요 원인입니다.',
            '저혈당증': '혈당이 정상 이하로 떨어지는 상태입니다.'
        },
        // --- 건강 팁 ---
        healthTips: {
            water: { title: '수분 보충이 필요해요', tips: ['지금 당장 물 한 컵을 마셔보세요', '1시간마다 알람을 설정해 물을 마시는 습관을 만들어보세요', '카페인 음료보다는 물이나 허브차를 선택하세요'], diseases: ['만성피로증후군', '집중력저하'] },
            meal: { title: '규칙적인 식사가 필요해요', tips: ['바쁘더라도 식사를 거르지 마세요', '간단한 간식이라도 챙겨 드세요', '아침 식사는 뇌 활동과 집중력에 중요합니다', '과식보다는 소량씩 자주 먹는 것이 좋습니다'], diseases: ['저혈당증', '집중력저하', '만성피로증후군'] },
            'neck-forward': { title: '목 자세 교정이 필요해요', tips: ['턱을 살짝 당기고 목을 길게 늘려보세요', '모니터 높이를 눈높이와 맞춰주세요', '30분마다 목을 좌우로 천천히 돌려주세요'], diseases: ['거북목증후군', '경추디스크'] },
            'shoulder-tension': { title: '어깨 긴장 완화가 필요해요', tips: ['어깨를 위로 올렸다가 뒤로 돌리며 내려주세요', '깊게 숨을 들이마시며 어깨 힘을 빼보세요', '목과 어깨 마사지를 5분간 해보세요'], diseases: ['근막통증증후군', '어깨충돌증후군'] },
            'back-curved': { title: '허리 자세 개선이 필요해요', tips: ['등받이에 허리를 밀착시켜 앉아보세요', '발을 바닥에 평평하게 놓고 앉으세요', '허리 뒤에 쿠션을 놓아 곡선을 유지해보세요'], diseases: ['척추측만증', '요추디스크'] },
            'sitting-long': { title: '움직임이 필요한 시간이에요', tips: ['지금 당장 자리에서 일어나 2-3분 걸어보세요', '제자리에서 스트레칭을 5분간 해보세요', '50분 일하고 10분 휴식하는 패턴을 만들어보세요'], diseases: ['심부정맥혈전증', '하지정맥류'] },
            'hand-pain': { title: '손목 케어가 필요해요', tips: ['손목을 원을 그리며 천천히 돌려주세요', '손가락을 쫙 펼쳤다가 주먹을 쥐는 운동을 반복하세요', '손목 받침대를 사용해 타이핑하세요'], diseases: ['손목터널증후군', '건초염'] },
            'wrist-angle': { title: '손목 각도 조정이 필요해요', tips: ['키보드와 손목이 일직선이 되도록 조정하세요', '마우스 패드에 손목 받침대를 사용하세요', '팔꿈치가 90도가 되도록 의자 높이를 조절하세요'], diseases: ['손목터널증후군', '드퀘르뱅병'] },
            'eye-strain': { title: '눈 휴식이 필요해요', tips: ['20-20-20 법칙: 20분마다 20피트(6m) 거리를 20초간 바라보세요', '눈을 감고 10초간 휴식을 취하세요', '인공눈물을 사용해 눈을 촉촉하게 해주세요'], diseases: ['VDT증후군', '안구건조증'] },
            headache: { title: '두통 완화가 필요해요', tips: ['깊은 호흡을 5분간 해보세요', '목과 어깨 마사지를 부드럽게 해주세요', '충분한 수분 섭취와 잠깐의 휴식을 취하세요'], diseases: ['긴장성두통', '편두통'] }
        }
    },
    // ========== ENGLISH ==========
    EN: {
        common: { start: 'Start', next: 'Next Step', complete: 'Complete', close: 'Close', pause: 'Pause', resume: 'Resume' },
        header: { guide: 'Health Guide', rest: 'Rest Guide', check: 'Checklist' },
        hero: {
            title: 'Healthy IT Life',
            subtitle: 'Small changes transform your daily routine',
            description: 'Sustainable habits for a better tomorrow',
            btnStart: 'Start Now',
            btnBreak: '5-min Break',
            btnCheck: 'Health Checklist'
        },
        theme: { label: 'Theme', anime: 'Anime', modern: 'Modern' },
        tabs: { headache: 'Headache', turtle: 'Text Neck', hand: 'Hand Pain', eye: 'Eye Health', back: 'Back Health', face: 'Facial Tension' },
        navDesc: { headache: 'Breathing & Posture', turtle: 'Neck & Shoulder', hand: 'Wrist Care', eye: 'Eye Fatigue', back: 'Sitting Posture', face: 'Jaw Relax' },
        headache: {
            title: 'Headache & Fatigue Solution',
            intro1: 'Long desk work leads to <span class="problem-keyword">shallow breathing</span>, causing oxygen deficiency, headaches and reduced concentration.',
            intro2: '<span class="problem-keyword">Poor posture</span> impairs blood circulation, causing fatigue and lethargy.',
            symptomTitle: '[Symptoms]', symptom1: 'Heavy head in the afternoon', symptom2: 'Lack of motivation',
            causeTitle: '[Causes]', cause1: 'Lack of Oxygen from shallow breathing', cause2: 'Poor circulation from posture imbalance',
            tipTitle: '[Tips]', tip1: 'Practice deep breathing.', tip2: 'Reorganize your desk setup.',
            tipDetail1: 'Inhale 3s, exhale 4s rhythm', tipDetail2: 'Maintain natural posture',
            chipBreath: 'Deep Breathing', chipPosture: 'Natural Posture', chipMindfulness: 'Mindfulness'
        },
        turtle: {
            title: 'Text Neck Relief',
            intro1: 'Looking down at screens causes <span class="problem-keyword">"text neck"</span> and excessive strain on neck muscles.',
            intro2: '<span class="problem-keyword">Wrong eye level</span> and prolonged fixed posture cause neck tension and shoulder stiffness.',
            symptomTitle: '[Symptoms]', symptom1: 'Persistent neck and shoulder tension', symptom2: 'Discomfort when turning head',
            causeTitle: '[Causes]', cause1: 'Neck tension from wrong eye position', cause2: 'Prolonged fixed posture',
            tipTitle: '[Tips]', tip1: 'Adjust your eye level.', tip2: 'Do regular stretching.',
            tipDetail1: 'Keep neck straight to prevent shoulder stiffness', tipDetail2: 'Rotate neck once per hour',
            chipHeight: 'Eye Height', chipStretch: 'Neck Stretch', chipPosture: 'Correct Posture'
        },
        hand: {
            title: 'Wrist & Finger Health',
            intro1: '<span class="problem-keyword">Repetitive motions</span> from keyboard/mouse cause tendinitis and wrist pain.',
            intro2: 'Poor <span class="problem-keyword">wrist angle</span> and force control put continuous strain on hands.',
            symptomTitle: '[Symptoms]', symptom1: 'Wrist and finger pain/numbness', symptom2: 'Increased discomfort during typing',
            causeTitle: '[Causes]', cause1: 'Poor wrist angle and force control', cause2: 'Repetitive wrist and finger movements',
            tipTitle: '[Tips]', tip1: 'Review your wrist angle.', tip2: 'Do finger stretching.',
            tipDetail1: 'Reduce strain with natural wrist position', tipDetail2: 'Open and close hand exercises',
            chipAngle: 'Wrist Angle', chipStretch: 'Hand Stretch', chipErgonomics: 'Ergonomics'
        },
        eye: {
            title: 'Eye Health Care',
            intro1: 'Prolonged <span class="problem-keyword">screen gazing</span> causes eye fatigue and dryness, leading to vision problems and headaches.',
            intro2: '<span class="problem-keyword">Reduced blinking</span> and close-up focus worsen eye muscle tension and dry eye syndrome.',
            symptomTitle: '[Symptoms]', symptom1: 'Dry and gritty eyes', symptom2: 'Eye fatigue and blurriness',
            causeTitle: '[Causes]', cause1: 'Reduced blinking from screen focus', cause2: 'Eye muscle tension from close focus',
            tipTitle: '[Tips]', tip1: 'Practice the 20-20-20 rule.', tip2: 'Blink consciously.',
            tipDetail1: 'Every 20min, look 20ft away for 20sec', tipDetail2: 'Use artificial tears to keep eyes moist',
            chip1: '20-20-20', chip2: 'Blinking', chip3: 'Eye Rest'
        },
        back: {
            title: 'Back Health Care',
            intro1: 'Prolonged <span class="problem-keyword">sitting</span> puts continuous strain on back muscles and discs, causing back pain.',
            intro2: '<span class="problem-keyword">Weak core muscles</span> and slouching are main causes of back pain.',
            symptomTitle: '[Symptoms]', symptom1: 'Back stiffness and pain', symptom2: 'Increased discomfort when sitting long',
            causeTitle: '[Causes]', cause1: 'Disc compression from prolonged sitting', cause2: 'Postural instability from weak core',
            tipTitle: '[Tips]', tip1: 'Stand and stretch every hour.', tip2: 'Maintain proper sitting posture.',
            tipDetail1: 'Lean back and twist side to side', tipDetail2: 'Use backrest, feet flat on floor',
            chip1: 'Back Stretch', chip2: 'Good Posture', chip3: 'Core Strength'
        },
        face: {
            title: 'Facial Tension Relief',
            intro1: 'Unconscious <span class="problem-keyword">jaw clenching</span> and facial tension can cause TMJ disorders and headaches.',
            intro2: '<span class="problem-keyword">Continuous facial muscle tension</span> causes facial fatigue and tension headaches.',
            symptomTitle: '[Symptoms]', symptom1: 'Jaw and temple tension', symptom2: 'Facial fatigue and headache',
            causeTitle: '[Causes]', cause1: 'Unconscious clenching from stress', cause2: 'Sustained facial muscle tension when focusing',
            tipTitle: '[Tips]', tip1: 'Relax your jaw.', tip2: 'Do facial muscle stretching.',
            tipDetail1: 'Slightly open mouth to maintain natural state', tipDetail2: 'Open eyes wide, open mouth wide',
            chip1: 'Jaw Relax', chip2: 'Facial Stretch', chip3: 'Face Massage'
        },
        intro: {
            mainTitle: 'Welcome to IT&HEALTH Guide',
            lead1: 'Is your body strained from long desk work?',
            lead2: 'Is your posture collapsing?',
            purposeTitle: 'Our Mission',
            purpose1: 'IT work is unavoidable for modern people.',
            purpose2: 'Therefore, knowledge to protect your body is needed.',
            purpose3: 'We gathered health information you might wonder about.',
            contentTitle: 'Key Health Topics',
            card1Title: 'Headache & Fatigue',
            card1Desc: 'Learn how to prevent headaches and reduced concentration from shallow breathing and poor posture.',
            card2Title: 'Text Neck',
            card2Desc: 'Practical tips to reduce neck and shoulder strain from looking at monitors.',
            card3Title: 'Wrist & Fingers',
            card3Desc: 'How to prevent and manage tendinitis and wrist pain from keyboard and mouse use.',
            howtoTitle: 'How to Use This Guide',
            howto1: '<span class="feature-icon">📋</span> <strong>Health Checklist</strong> - Check your current condition right now',
            howto2: '<span class="feature-icon">🎬</span> <strong>5-min Break Guide</strong> - Experience stretches you can do immediately',
            howto3: '<span class="feature-icon">🌿</span> <strong>Symptom Guides</strong> - Find health info you need',
            howto4: '<span class="feature-icon">🔄</span> <strong>Regular Practice</strong> - Achieve long-term health improvement',
            workspaceTitle: 'Creating Healthy Workspace',
            workspaceDesc: 'A comfortable workspace directly affects physical health and work efficiency.',
            tempTitle: 'Temperature & Humidity',
            tempDesc: 'Maintain 18-24°C temperature and 40-60% humidity for a comfortable environment.',
            waterTitle: 'Hydration',
            waterDesc: 'Drink 1.5-2L of water daily and remember to hydrate during long work sessions.',
            airTitle: 'Air Quality',
            airDesc: 'Ventilate every 2-3 hours to circulate fresh air and maintain a comfortable workspace.',
            quickAccessTitle: '🚀 Quick Access',
            quickGuide: 'Health Guide',
            quickGuideDesc: 'Symptom-specific info',
            quickRest: 'Rest Guide',
            quickRestDesc: 'Body part stretches',
            quickCheck: 'Checklist',
            quickCheckDesc: 'Check your condition',
            msgTitle: 'Start Your Healthy IT Life',
            msg1: 'Consult a medical professional if symptoms persist or worsen.',
            msg2: 'Small habit changes make big health differences. Start today!',
            cta: 'Explore Health Guide →'
        },
        checklist: {
            title: 'Health Checklist', subtitle: 'Check your current condition right now', resultTitle: 'Results', checkedCount: 'Checked items:', countUnit: '', defaultMsg: 'Check items to see personalized health tips!', reset: 'Reset All',
            sections: { hydration: '🍽️ Hydration & Meals', neck: '🐢 Neck & Shoulders', posture: '🪑 Posture', hand: '✋ Hands & Wrists', fatigue: '😴 Fatigue' },
            questions: { water: 'Did you drink water in the last hour?', meal: "Didn't you skip a meal today?", neckForward: 'Is your neck leaning forward?', shoulder: 'Do you have shoulder tension or stiffness?', backCurved: 'Is your back slouching?', sitting: 'Have you been sitting in the same position for over an hour?', handPain: 'Do you have wrist or finger pain?', wristAngle: 'Are you typing with bent wrists?', eyes: 'Are your eyes tired or dry?', headache: 'Do you have a heavy head or headache?' },
            tips: {
                water: { title: "Need Hydration", desc: ["Drink a glass of water", "Set hourly alarms", "Reduce caffeine"] },
                meal: { title: "Regular Meals Needed", desc: ["Don't skip meals", "Have light snacks", "Eat breakfast"] },
                neck: { title: "Neck Posture Fix", desc: ["Tuck chin in", "Adjust monitor height", "Neck side stretches"] },
                shoulder: { title: "Shoulder Tension Relief", desc: ["Roll shoulders", "Deep breath and relax", "Massage"] },
                back: { title: "Back Posture Fix", desc: ["Press against backrest", "Feet on floor", "Use lumbar cushion"] },
                sitting: { title: "Movement Needed", desc: ["Stand and walk", "Stretch in place", "50min work, 10min rest"] },
                hand: { title: "Wrist Care", desc: ["Rotate wrists", "Open/close hands", "Use wrist rest"] },
                wrist: { title: "Wrist Angle Adjustment", desc: ["Keep straight with keyboard", "Adjust chair height"] },
                eye: { title: "Eye Rest", desc: ["20-20-20 rule", "Close eyes and rest", "Use eye drops"] },
                headache: { title: "Headache Relief", desc: ["Deep breathing 5min", "Temple massage", "Take a break"] }
            },
            diseases: {
                turtle: { name: "Text Neck Syndrome", desc: "Cervical spine deformation from forward neck position" },
                disk: { name: "Disc Herniation", desc: "Pain from disc pressing on nerves" },
                vdt: { name: "VDT Syndrome", desc: "Health disorders from prolonged screen use" },
                dryeye: { name: "Dry Eye Syndrome", desc: "Gritty eyes from lack of tears" },
                tunnel: { name: "Carpal Tunnel Syndrome", desc: "Hand numbness and pain from nerve compression" }
            },
            recommendTitle: '🎯 Recommended Rest Guides',
            recommendSubtitle: 'Based on your checked items, we recommend these rest guides',
            guideRecommend: {
                'rest-neck': { desc: 'Focused stretching to relax neck muscles' },
                'rest-waist': { desc: 'Reduce back strain and activate your core' },
                'rest-hand': { desc: 'Relieve fatigue in wrists and fingers' },
                'rest-eye': { desc: 'Rest your eyes tired from screen gazing' },
                'rest-face': { desc: 'Relieve facial tension to ease headaches' },
                'rest-all': { desc: '5-minute full body stretching and rest' },
                'rest-breathing': { desc: 'Deep breathing for oxygen supply and stress relief' },
                'rest-meditation': { desc: 'Short mindfulness meditation to calm your mind' },
                'rest-shoulder': { desc: 'Stretching to relieve trapezius and shoulder tension' }
            }
        },
        restGuide: {
            pageTitle: 'Rest Guide', pageSubtitle: 'Simple stretching and relaxation for body and mind',
            introTitle: 'About Rest Guide',
            introDesc1: 'We introduce simple and effective rest methods for tired body and mind from long work.',
            introDesc2: 'Experience immediate fatigue recovery through specialized stretching for each body part.',
            introDesc3: 'Just a few minutes a day can bring long-term health improvement.',
            tipsTitle: '💡 Tips for Effective Rest',
            tip1: 'Maintain a 50min focus, 10min rest pattern',
            tip2: 'Stop immediately and reduce intensity if you feel pain during stretching',
            tip3: 'Move slowly with deep, comfortable breathing',
            tip4: 'Short multiple sessions per day are more effective than one long session',
            tip5: 'Stay hydrated before and after stretching',
            cards: {
                all: { title: 'Full Body Rest Guide', desc: 'Full body stretching including neck, shoulders, and waist to relieve overall fatigue. About 5 minutes.' },
                neck: { title: 'Neck Rest Guide', desc: 'Focused stretching to relax tense back neck muscles from long monitor viewing.' },
                face: { title: 'Face Rest Guide', desc: 'Helps prevent headaches and relieve facial fatigue by relaxing facial and jaw muscles.' },
                eye: { title: 'Eye Rest Guide', desc: 'Eye exercises and relaxation techniques to relieve eye fatigue and dryness from screen gazing.' },
                hand: { title: 'Hand Rest Guide', desc: 'Stretching for wrists and fingers tired from keyboard and mouse use.' },
                waist: { title: 'Back Rest Guide', desc: 'Reduces back strain from sitting and activates core muscles.' },
                breathing: { title: 'Breathing Rest Guide', desc: 'Deep breathing exercises to increase oxygen supply and relieve stress.' },
                meditation: { title: 'Meditation Rest Guide', desc: 'Short mindfulness meditation to calm your mind and restore focus.' },
                shoulder: { title: 'Shoulder Rest Guide', desc: 'Stretching to relieve trapezius and shoulder muscle tension and pain.' }
            },
            steps: {
                all: [{ title: 'Stand Up', desc: 'Stand up and stretch your body.' }, { title: 'Neck/Shoulders', desc: 'Rotate neck and relax shoulders.' }, { title: 'Breathing', desc: 'Close eyes and breathe deeply.' }],
                neck: [{ title: 'Loosen', desc: 'Relax and slowly rotate head.' }, { title: 'Stretch', desc: 'Gently press head with hand.' }, { title: 'Relax', desc: 'Shake shoulders to finish.' }],
                face: [{ title: 'Awareness', desc: 'Check facial tension.' }, { title: 'Exercise', desc: 'Say A-E-I-O-U widely.' }, { title: 'Jaw', desc: 'Move jaw side to side gently.' }],
                eye: [{ title: 'Close', desc: 'Close eyes and feel darkness.' }, { title: 'Exercise', desc: 'Roll eyes up/down/left/right.' }, { title: 'Far Look', desc: 'Look far away for 20 seconds.' }],
                hand: [{ title: 'Rotate', desc: 'Gently rotate wrists.' }, { title: 'Fingers', desc: 'Make fist then spread open.' }, { title: 'Massage', desc: 'Press palms firmly.' }],
                waist: [{ title: 'Lean Back', desc: 'Stand and lean back.' }, { title: 'Twist', desc: 'Twist upper body side to side.' }, { title: 'Posture', desc: 'Straighten back and sit properly.' }],
                breathing: [{ title: 'Prepare', desc: 'Close eyes in comfortable position.' }, { title: 'Deep Breath', desc: 'Breathe deeply with belly.' }, { title: 'Finish', desc: 'Return to normal breathing.' }],
                meditation: [{ title: 'Position', desc: 'Sit comfortably with straight back.' }, { title: 'Focus', desc: 'Focus only on your breath.' }, { title: 'Mindfulness', desc: 'Feel the present moment.' }],
                shoulder: [{ title: 'Shrug', desc: 'Raise shoulders toward ears.' }, { title: 'Stretch', desc: 'Tilt head to stretch trapezius.' }, { title: 'Roll', desc: 'Roll shoulders in circles.' }]
            }
        },
        complete: {
            title: "You've completed all health guides!",
            sub: 'Small habits make big changes',
            summary: 'Key Summary',
            summaryTitle: '📋 Key Summary',
            action: '🚀 Next Steps',
            btnCheck: 'Check your status with Health Checklist',
            btnRest: 'Start 5-min Rest Guide',
            remind: '<strong>Remember!</strong> 50min work then 10min rest, 1.5-2L water daily, regular stretching are keys to healthy IT life.',
            headache1: 'Practice deep breathing',
            headache2: 'Maintain proper posture',
            headache3: 'Take regular breaks',
            turtle1: 'Adjust monitor height',
            turtle2: 'Do neck stretches often',
            turtle3: 'Be aware of eye level',
            hand1: 'Check wrist angle',
            hand2: 'Do finger stretches',
            hand3: 'Use wrist rest'
        },
        footer: {
            note: 'This project is a non-commercial website for university assignment purposes.',
            imageSource: 'Stock image source:'
        },
        timer: {
            completeMessage: '🎉 Rest complete! Great job! 🎉',
            inProgress: 'Full Rest Guide in progress',
            inProgressSuffix: 'in progress',
            step1: '1. Stand Up',
            step2: '2. Neck/Shoulders',
            step3: '3. Deep Breathing',
            minute: 'min',
            cardTitle1: 'Stand Up from Seat',
            cardDesc1: 'Slowly stand up and stretch your body. Stretch from toes to head to help blood circulation.',
            cardTip1_1: 'Stretch arms up to stretch whole body',
            cardTip1_2: 'Walk lightly in place',
            cardTip1_3: 'Raise and lower toes repeatedly'
        },
        restGuideData: {
            'rest-all': {
                label: 'Full Rest Guide',
                steps: [
                    { title: 'Stand Up', time: '1 min', description: 'Slowly stand up and stretch your body from toes to head to help blood circulation.', tips: ['Stretch arms up for full body stretch', 'Walk lightly in place', 'Raise and lower toes repeatedly'] },
                    { title: 'Neck & Shoulder Stretch', time: '2 min', description: 'Release tension in neck and shoulders through stretching to relax tight muscles.', tips: ['Rotate neck slowly left and right (5 times each)', 'Raise shoulders up then roll back and down', 'Tilt head side to side to stretch neck muscles', 'Tuck chin to chest to stretch back of neck'] },
                    { title: 'Deep Breathing & Meditation', time: '2 min', description: 'Calm your mind and relieve stress through deep breathing.', tips: ['Sit or stand in comfortable position', 'Inhale 4 seconds, exhale 6 seconds', 'Close eyes and focus on present moment', 'Consciously relax tense areas'] }
                ]
            },
            'rest-neck': {
                label: 'Neck Rest Guide',
                steps: [
                    { title: 'Loosen Neck', time: '1 min', description: 'Gently loosen tense neck muscles as preparation.', tips: ['Lower shoulders and relax neck', 'Tuck chin slightly to lengthen back of neck', 'Slowly turn head left and right (5 times each)'] },
                    { title: 'Back of Neck Stretch', time: '1 min 30 sec', description: 'Focus on stretching the back neck muscles.', tips: ['Clasp hands behind head', 'Gently pull chin toward chest', 'Hold 15 sec then slowly release (repeat 3 times)', 'Reduce intensity if there is pain'] },
                    { title: 'Neck Relaxation', time: '1 min', description: 'Relax stretched muscles and finish.', tips: ['Raise shoulders then drop them (5 times)', 'Tilt neck side to side', 'Release tension with deep breathing'] }
                ]
            },
            'rest-face': {
                label: 'Face Rest Guide',
                steps: [
                    { title: 'Facial Awareness', time: '1 min', description: 'Become aware of and consciously relax tense facial muscles.', tips: ['Check if forehead has wrinkles', 'Relax between eyebrows', 'Check if jaw is clenched'] },
                    { title: 'Facial Muscle Stretch', time: '1 min 30 sec', description: 'Move various facial muscles to release tension.', tips: ['Open eyes wide then squeeze shut (5 times)', 'Open mouth wide and say "ah"', 'Puff up cheeks then pucker (5 times)', 'Roll tongue inside mouth (5 times each direction)'] },
                    { title: 'Jaw Relaxation', time: '1 min', description: 'Focus on relaxing jaw muscles where tension often accumulates.', tips: ['Slightly open mouth to release jaw tension', 'Gently move jaw side to side', 'Massage temples in circular motion'] }
                ]
            },
            'rest-eye': {
                label: 'Eye Rest Guide',
                steps: [
                    { title: 'Rest with Eyes Closed', time: '1 min', description: 'Take eyes off screen and recover from eye fatigue.', tips: ['Close eyes and relax', 'Rub palms to warm then place over eyes', 'Release eye area tension with deep breathing'] },
                    { title: 'Eye Exercises', time: '1 min 30 sec', description: 'Move eye muscles to relieve fatigue and improve circulation.', tips: ['Move eyes slowly up and down (10 times)', 'Move eyes slowly left and right (10 times)', 'Roll eyes clockwise in big circles (5 times)', 'Roll counterclockwise as well (5 times)'] },
                    { title: 'Distance Gazing', time: '1 min', description: 'Relax eye focus muscles with 20-20-20 rule.', tips: ['Look out window or at distant point (6m+)', 'Focus on far distance for 20+ seconds', 'Blink to keep eyes moist'] }
                ]
            },
            'rest-hand': {
                label: 'Hand Rest Guide',
                steps: [
                    { title: 'Wrist Loosening', time: '1 min', description: 'Release wrist tension from keyboard and mouse use.', tips: ['Rotate wrists clockwise/counterclockwise (10 times each)', 'Bend wrists up and down to stretch', 'Shake hands to release tension'] },
                    { title: 'Finger Stretching', time: '1 min 30 sec', description: 'Stretch finger joints and tendons.', tips: ['Spread fingers wide and hold 5 sec', 'Make tight fist and hold 5 sec (repeat 5 times)', 'Bend each finger back one at a time', 'Press palms together and bend wrists'] },
                    { title: 'Hand Massage', time: '1 min', description: 'Massage to relieve overall hand fatigue.', tips: ['Press center of palm with thumb while massaging', 'Gently rub back of hands', 'Lightly press between fingers'] }
                ]
            },
            'rest-waist': {
                label: 'Back Rest Guide',
                steps: [
                    { title: 'Back Loosening', time: '1 min', description: 'Gently loosen back muscles stiff from prolonged sitting.', tips: ['Stand up and place hands on lower back, lean backward', 'Slowly twist upper body left and right (5 times each)', 'Rotate hips to loosen lower back'] },
                    { title: 'Core Stretching', time: '1 min 30 sec', description: 'Activate and stretch core muscles that support the back.', tips: ['Stand with arms up, lean to each side (15 sec each)', 'Bend forward to touch toes', 'Stretch back with slightly bent knees', 'Cat-cow pose to move spine (if possible)'] },
                    { title: 'Posture Reset', time: '1 min', description: 'Check proper posture and return to a position that reduces back strain.', tips: ['Stand with feet shoulder-width apart', 'Pull shoulders back and open chest', 'When sitting, push hips deep into chair and use backrest'] }
                ]
            },
            'rest-breathing': {
                label: 'Breathing Rest Guide',
                steps: [
                    { title: 'Breathing Preparation', time: '1 min', description: 'Get into a comfortable position and release body tension to prepare for deep breathing.', tips: ['Sit or stand comfortably and relax shoulders', 'Close eyes and notice your current breathing', 'Release tension in jaw and shoulders'] },
                    { title: 'Diaphragmatic Breathing', time: '1 min 30 sec', description: 'Deep belly breathing to increase oxygen supply and activate parasympathetic nervous system.', tips: ['Inhale slowly through nose for 4 seconds', 'Feel your belly expand', 'Exhale slowly through mouth for 6 seconds', 'Feel belly naturally contract (repeat 5 times)'] },
                    { title: 'Breathing Finish', time: '1 min', description: 'Feel the effects of deep breathing and naturally return to normal breathing.', tips: ['Gradually reduce breathing depth', 'Notice the relaxed feeling throughout body', 'Open eyes and slowly look around'] }
                ]
            },
            'rest-meditation': {
                label: 'Meditation Rest Guide',
                steps: [
                    { title: 'Meditation Position', time: '1 min', description: 'Get into a stable position and prepare to calm your mind.', tips: ['Sit comfortably with straight back', 'Place hands gently on knees', 'Close eyes or softly lower gaze'] },
                    { title: 'Mindfulness Focus', time: '1 min 30 sec', description: 'Focus on your breath and be present in the moment.', tips: ['Pay attention only to inhale and exhale', 'When thoughts arise, gently return to breath', 'Accept current state without judgment', 'Gently notice body sensations'] },
                    { title: 'Meditation Finish', time: '1 min', description: 'Maintain meditation calmness and gently return to daily life.', tips: ['Slowly notice surrounding sounds', 'Gently move fingers and toes', 'Open eyes slowly and pause briefly', 'Feel renewed energy and focus'] }
                ]
            },
            'rest-shoulder': {
                label: 'Shoulder Rest Guide',
                steps: [
                    { title: 'Shoulder Loosening', time: '1 min', description: 'Warm-up exercises to release tension in stiff trapezius and shoulder muscles.', tips: ['Raise shoulders toward ears then drop them (5 times)', 'Roll shoulders forward then backward (5 times each)', 'Shake both arms to release shoulder tension'] },
                    { title: 'Trapezius Stretching', time: '1 min 30 sec', description: 'Focused stretching for the trapezius muscle from neck to shoulder.', tips: ['Use right hand on left side of head, gently pull to right', 'Hold 15 sec then do the same on other side (2 times each)', 'Tuck chin to chest to stretch back of neck trapezius', 'Reduce intensity if there is pain'] },
                    { title: 'Shoulder Relaxation', time: '1 min', description: 'Relax stretched shoulder muscles and finish.', tips: ['Clasp hands in front and push forward to spread shoulder blades', 'Clasp hands behind and open chest while pulling shoulders back', 'Slowly roll shoulders in large circles (5 times)', 'Completely release shoulder tension with deep breathing'] }
                ]
            }
        },
        diseases: {
            'Text Neck Syndrome': 'A condition where the normal C-curve of the cervical spine becomes straightened due to forward head posture. Causes headaches, shoulder stiffness, and neck pain.',
            'Cervical Disc': 'The disc between neck vertebrae protrudes and compresses nerves, causing arm numbness, shoulder pain, and hand tingling.',
            'Myofascial Pain Syndrome': 'A condition where trigger points in muscles and fascia cause pain. Common with prolonged static posture.',
            'Shoulder Impingement': 'Inflammation and pain when shoulder bones and tendons collide during arm raising.',
            'Scoliosis': 'Lateral curvature of the spine, mainly caused by postural imbalance.',
            'Lumbar Disc': 'A condition where the disc between lower back vertebrae protrudes and compresses nerves.',
            'Deep Vein Thrombosis': 'Blood clots form in deep leg veins. Risk increases with prolonged sitting.',
            'Varicose Veins': 'Leg veins bulge due to valve dysfunction causing blood to flow backward.',
            'Carpal Tunnel Syndrome': 'Compression of median nerve in wrist causes hand numbness and wrist pain.',
            'Tendinitis': 'Inflammation of the tendon sheath surrounding tendons.',
            'De Quervain Disease': 'Inflammatory condition of thumb-side tendons and sheaths.',
            'VDT Syndrome': 'Eye fatigue, vision problems from prolonged screen use.',
            'Dry Eye': 'Eyes become dry from insufficient tears or rapid tear evaporation.',
            'Tension Headache': 'Headache caused by tension in muscles around the head.',
            'Migraine': 'Pulsating headache on one side, may include nausea and light/sound sensitivity.',
            'Chronic Fatigue Syndrome': 'Persistent fatigue that doesn\'t improve with rest.',
            'Poor Concentration': 'Decreased attention and focus, mainly caused by oxygen deficiency, fatigue, stress.',
            'Hypoglycemia': 'Blood sugar drops below normal levels.'
        },
        healthTips: {
            water: { title: 'You need hydration', tips: ['Drink a glass of water right now', 'Set hourly reminders to drink water', 'Choose water or herbal tea over caffeinated drinks'], diseases: ['Chronic Fatigue Syndrome', 'Poor Concentration'] },
            meal: { title: 'You need regular meals', tips: ['Don\'t skip meals even when busy', 'Have at least a small snack', 'Breakfast is important for brain activity and concentration', 'Small frequent meals are better than overeating'], diseases: ['Hypoglycemia', 'Poor Concentration', 'Chronic Fatigue Syndrome'] },
            'neck-forward': { title: 'You need neck posture correction', tips: ['Tuck chin slightly and lengthen neck', 'Adjust monitor to eye level', 'Slowly rotate neck every 30 minutes'], diseases: ['Tech Neck Syndrome', 'Cervical Disc'] },
            'shoulder-tension': { title: 'You need shoulder tension relief', tips: ['Raise shoulders then roll back and down', 'Take deep breath and relax shoulders', 'Massage neck and shoulders for 5 minutes'], diseases: ['Myofascial Pain Syndrome', 'Shoulder Impingement'] },
            'back-curved': { title: 'You need back posture improvement', tips: ['Sit with back against backrest', 'Keep feet flat on floor while sitting', 'Place cushion behind lower back to maintain curve'], diseases: ['Scoliosis', 'Lumbar Disc'] },
            'sitting-long': { title: 'Time to move', tips: ['Stand up and walk 2-3 minutes right now', 'Do stretching for 5 minutes at your seat', 'Work 50 minutes, rest 10 minutes pattern'], diseases: ['Deep Vein Thrombosis', 'Varicose Veins'] },
            'hand-pain': { title: 'You need wrist care', tips: ['Slowly rotate wrists in circles', 'Repeat spreading fingers then making fists', 'Use wrist rest when typing'], diseases: ['Carpal Tunnel Syndrome', 'Tendinitis'] },
            'wrist-angle': { title: 'You need wrist angle adjustment', tips: ['Adjust keyboard so wrist is straight', 'Use wrist rest on mouse pad', 'Adjust chair height so elbows are at 90 degrees'], diseases: ['Carpal Tunnel Syndrome', 'De Quervain Disease'] },
            'eye-strain': { title: 'You need eye rest', tips: ['20-20-20 rule: Every 20 min, look 20 feet away for 20 sec', 'Close eyes and rest for 10 seconds', 'Use artificial tears to keep eyes moist'], diseases: ['VDT Syndrome', 'Dry Eye'] },
            headache: { title: 'You need headache relief', tips: ['Do deep breathing for 5 minutes', 'Gently massage neck and shoulders', 'Get adequate hydration and brief rest'], diseases: ['Tension Headache', 'Migraine'] }
        }
    },
    // ========== JAPANESE ==========
    JP: {
        common: { start: '始める', next: '次へ', complete: '完了', close: '閉じる', pause: '一時停止', resume: '再開' },
        header: { guide: '健康ガイド', rest: '休憩ガイド', check: 'チェックリスト' },
        hero: {
            title: '健康的なITライフ',
            subtitle: '毎日の小さな変化が日常を変える',
            description: '持続可能な健康習慣を始めましょう',
            btnStart: '始める',
            btnBreak: '5分休憩',
            btnCheck: '健康チェック'
        },
        theme: { label: 'テーマ', anime: 'アニメ', modern: 'モダン' },
        tabs: { headache: '頭痛・無気力', turtle: 'スマホ首', hand: '手の痛み', eye: '目の健康', back: '腰の健康', face: '顔の緊張' },
        navDesc: { headache: '呼吸と姿勢', turtle: '首と肩', hand: '手首ケア', eye: '目の疲れ', back: '座り姿勢', face: '顎の緩和' },
        headache: {
            title: '頭痛・無気力の解決',
            intro1: '長時間のデスクワークで<span class="problem-keyword">浅い呼吸</span>が習慣化すると、脳への酸素供給が不足し、頭痛や集中力低下につながります。',
            intro2: '<span class="problem-keyword">崩れた姿勢</span>は血液循環を妨げ、疲労感や無気力の原因となります。',
            symptomTitle: '[症状]', symptom1: '午後になると頭が重い', symptom2: 'なぜかやる気が出ない',
            causeTitle: '[原因]', cause1: '浅い呼吸による酸素不足', cause2: '姿勢の不均衡による血流障害',
            tipTitle: '[改善のヒント]', tip1: '深い呼吸を意識します。', tip2: 'デスク環境を見直します。',
            tipDetail1: '3秒吸って4秒吐くリズムで', tipDetail2: '自然な姿勢になるように',
            chipBreath: '深い呼吸', chipPosture: '自然な姿勢', chipMindfulness: 'マインドフルネス'
        },
        turtle: {
            title: 'スマホ首の改善',
            intro1: 'スマホやモニターを長時間見下ろす姿勢は、首の筋肉に過度な負担をかけ、<span class="problem-keyword">「スマホ首」</span>を引き起こします。',
            intro2: '<span class="problem-keyword">間違った視線位置</span>と長時間の固定姿勢は、首の緊張と肩こりの原因となります。',
            symptomTitle: '[症状]', symptom1: '首と肩の持続的な緊張感', symptom2: '首を回すときの不快感',
            causeTitle: '[原因]', cause1: '間違った視線位置による首の緊張', cause2: '長時間の固定姿勢',
            tipTitle: '[改善のヒント]', tip1: '視線の高さを調整します。', tip2: '定期的なストレッチをします。',
            tipDetail1: '首をまっすぐに保って肩こり予防', tipDetail2: '1時間に1回首を回す',
            chipHeight: '視線の高さ', chipStretch: '首ストレッチ', chipPosture: '正しい姿勢'
        },
        hand: {
            title: '手首と指の健康管理',
            intro1: 'キーボードやマウスの使用による<span class="problem-keyword">反復動作</span>は、腱鞘炎や手首の痛みの原因となります。',
            intro2: '<span class="problem-keyword">手首の角度</span>と力の調整不足は、手と指に持続的な負担をかけます。',
            symptomTitle: '[症状]', symptom1: '手首と指の痛みとしびれ', symptom2: '長時間タイピング時の不快感増加',
            causeTitle: '[原因]', cause1: '手首の角度と力の調整不足', cause2: '反復的な手首と指の動作',
            tipTitle: '[改善のヒント]', tip1: '手首の角度を見直します。', tip2: '指のストレッチをします。',
            tipDetail1: '自然な手首位置で負担軽減', tipDetail2: '手を開いたり閉じたりする運動',
            chipAngle: '手首角度', chipStretch: '手ストレッチ', chipErgonomics: '人間工学'
        },
        eye: {
            title: '目の健康管理',
            intro1: '長時間の<span class="problem-keyword">画面注視</span>は、目の疲れと乾燥を引き起こし、視力低下と頭痛の原因となります。',
            intro2: '<span class="problem-keyword">まばたき減少</span>と近距離集中は、目の筋肉の緊張とドライアイを悪化させます。',
            symptomTitle: '[症状]', symptom1: '目がゴロゴロして乾燥', symptom2: '目の疲れとかすみ',
            causeTitle: '[原因]', cause1: '画面集中によるまばたき回数の減少', cause2: '近距離集中による目の筋肉緊張',
            tipTitle: '[改善のヒント]', tip1: '20-20-20ルールを実践します。', tip2: '意識的にまばたきします。',
            tipDetail1: '20分ごとに20フィート先を20秒見る', tipDetail2: '目薬で目を潤いに保つ',
            chip1: '20-20-20', chip2: 'まばたき', chip3: '目の休憩'
        },
        back: {
            title: '腰の健康管理',
            intro1: '長時間の<span class="problem-keyword">座り姿勢</span>は、腰の筋肉とディスクに持続的な負担をかけ、腰痛と脊椎問題を引き起こします。',
            intro2: '<span class="problem-keyword">コア筋力の低下</span>と猫背は腰痛の主な原因となります。',
            symptomTitle: '[症状]', symptom1: '腰のこわばりと痛み', symptom2: '長時間座っていると不快感増加',
            causeTitle: '[原因]', cause1: '長時間座りによるディスク圧迫', cause2: 'コア筋力低下による姿勢不安定',
            tipTitle: '[改善のヒント]', tip1: '1時間ごとに立ってストレッチします。', tip2: '正しい座り姿勢を維持します。',
            tipDetail1: '腰を後ろに反らして左右にひねる', tipDetail2: '背もたれ活用、足は床に平らに',
            chip1: '腰ストレッチ', chip2: '正しい姿勢', chip3: 'コア強化'
        },
        face: {
            title: '顔の緊張緩和',
            intro1: '無意識の<span class="problem-keyword">食いしばり</span>と表情の緊張は、顎関節障害と頭痛を引き起こす可能性があります。',
            intro2: '<span class="problem-keyword">表情筋の持続的な緊張</span>は、顔の疲労と緊張性頭痛の原因となります。',
            symptomTitle: '[症状]', symptom1: '顎とこめかみの緊張感', symptom2: '顔の疲労と頭痛',
            causeTitle: '[原因]', cause1: 'ストレスによる無意識の食いしばり', cause2: '集中時の表情筋の持続的緊張',
            tipTitle: '[改善のヒント]', tip1: '顎の力を抜いてリラックスします。', tip2: '表情筋ストレッチをします。',
            tipDetail1: '口を少し開けて自然な状態を維持', tipDetail2: '目を大きく開け、口を大きく開ける運動',
            chip1: '顎リラックス', chip2: '表情筋ストレッチ', chip3: '顔マッサージ'
        },
        intro: {
            mainTitle: 'IT&HEALTHガイドへようこそ',
            lead1: '長時間のデスクワークで体に無理をしていませんか？',
            lead2: '姿勢が崩れていませんか？',
            purposeTitle: '私たちのミッション',
            purpose1: 'IT作業は現代人にとって避けられないことです。',
            purpose2: 'だからこそ体を守る知識が必要です。',
            purpose3: 'あなたが気になる健康情報をここに集めました。',
            contentTitle: '主な健康情報',
            card1Title: '頭痛と無気力',
            card1Desc: '長時間の浅い呼吸と崩れた姿勢による頭痛と集中力低下を予防する方法を学びましょう。',
            card2Title: 'スマホ首',
            card2Desc: 'モニターを長時間見下ろす姿勢による首と肩の負担を減らす実用的なヒントを提供します。',
            card3Title: '手首と指',
            card3Desc: 'キーボードとマウス使用による腱鞘炎と手首の痛みを予防・管理する方法を紹介します。',
            howtoTitle: 'このガイドの活用法',
            howto1: '<span class="feature-icon">📋</span> <strong>健康チェックリスト</strong>で今すぐ自分の状態をチェック',
            howto2: '<span class="feature-icon">🎬</span> <strong>5分休憩ガイド</strong>ですぐに実践できるストレッチを体験',
            howto3: '<span class="feature-icon">🌿</span> <strong>症状別ガイド</strong>で必要な健康情報を見つける',
            howto4: '<span class="feature-icon">🔄</span> <strong>定期的な実践</strong>で長期的な健康改善を実現',
            workspaceTitle: '健康的な作業環境づくり',
            workspaceDesc: '快適な作業空間は身体の健康と業務効率に直接影響します。',
            tempTitle: '適切な温湿度',
            tempDesc: '作業空間の温度は18〜24°C、湿度は40〜60%が適切で、快適な環境維持が重要です。',
            waterTitle: '十分な水分摂取',
            waterDesc: '1日1.5〜2Lの水を飲み、長時間作業時は水分補給を忘れずに。',
            airTitle: '室内空気質',
            airDesc: '2〜3時間ごとに換気して新鮮な空気を循環させ、快適な作業環境を維持しましょう。',
            quickAccessTitle: '🚀 クイックアクセス',
            quickGuide: '健康ガイド',
            quickGuideDesc: '症状別健康情報',
            quickRest: '休憩ガイド',
            quickRestDesc: '部位別ストレッチ',
            quickCheck: 'チェックリスト',
            quickCheckDesc: '状態をチェック',
            msgTitle: '健康的なITライフを始めましょう',
            msg1: '症状が持続または悪化する場合は、必ず医療専門家に相談してください。',
            msg2: '小さな習慣の変化が大きな健康の違いを生みます。今日から始めましょう！',
            cta: '健康ガイドを見る →'
        },
        checklist: {
            title: '健康チェックリスト', subtitle: '今この瞬間、自分の状態をチェックしましょう', resultTitle: '結果', checkedCount: 'チェック項目:', countUnit: '個', defaultMsg: '項目をチェックするとカスタマイズされた健康ヒントが表示されます！', reset: 'リセット',
            sections: { hydration: '🍽️ 水分と食事', neck: '🐢 首と肩', posture: '🪑 姿勢', hand: '✋ 手と手首', fatigue: '😴 疲労度' },
            questions: { water: '過去1時間以内に水を飲みましたか？', meal: '今日食事を抜いていませんか？', neckForward: '首が前に出ていますか？', shoulder: '肩に緊張やこりがありますか？', backCurved: '背中が丸まっていますか？', sitting: '1時間以上同じ姿勢で座っていましたか？', handPain: '手首や指に痛みがありますか？', wristAngle: '手首を曲げた状態でタイピングしていますか？', eyes: '目が疲れたり乾燥していますか？', headache: '頭が重かったり頭痛がありますか？' },
            tips: {
                water: { title: "水分補給が必要", desc: ["コップ1杯の水を飲む", "1時間ごとにアラーム", "カフェインを減らす"] },
                meal: { title: "規則的な食事が必要", desc: ["食事を抜かない", "軽いスナック", "朝食を食べる"] },
                neck: { title: "首の姿勢修正", desc: ["顎を引く", "モニターの高さを調整", "首の左右ストレッチ"] },
                shoulder: { title: "肩の緊張緩和", desc: ["肩を回す", "深呼吸してリラックス", "マッサージ"] },
                back: { title: "腰の姿勢改善", desc: ["背もたれに密着", "足は床に", "腰クッション使用"] },
                sitting: { title: "動きが必要", desc: ["立って歩く", "その場でストレッチ", "50分作業、10分休憩"] },
                hand: { title: "手首ケア", desc: ["手首を回す", "グーパー運動", "手首レスト使用"] },
                wrist: { title: "手首角度調整", desc: ["キーボードと一直線に保つ", "椅子の高さを調整"] },
                eye: { title: "目の休憩", desc: ["20-20-20ルール", "目を閉じて休憩", "目薬使用"] },
                headache: { title: "頭痛緩和", desc: ["深呼吸5分", "こめかみマッサージ", "少し休憩"] }
            },
            diseases: {
                turtle: { name: "スマホ首症候群", desc: "首が前に出て頸椎が変形する症状" },
                disk: { name: "椎間板ヘルニア", desc: "椎間板が神経を圧迫して痛みを引き起こす" },
                vdt: { name: "VDT症候群", desc: "画面機器の長時間使用による健康障害" },
                dryeye: { name: "ドライアイ", desc: "涙不足で目がゴロゴロする症状" },
                tunnel: { name: "手根管症候群", desc: "神経圧迫による手のしびれと痛み" }
            },
            recommendTitle: '🎯 おすすめ休憩ガイド',
            recommendSubtitle: 'チェックした項目に基づいておすすめの休憩ガイドです',
            guideRecommend: {
                'rest-neck': { desc: '首の筋肉をほぐす集中ストレッチ' },
                'rest-waist': { desc: '腰の負担を軽減しコアを活性化' },
                'rest-hand': { desc: '手首と指の疲れを癒します' },
                'rest-eye': { desc: '画面を見て疲れた目を休ませましょう' },
                'rest-face': { desc: '表情筋の緊張をほぐして頭痛緩和' },
                'rest-all': { desc: '5分間の全身ストレッチと休憩' },
                'rest-breathing': { desc: '深い呼吸で酸素供給とストレス解消' },
                'rest-meditation': { desc: '心を落ち着かせる短い瞑想ガイド' },
                'rest-shoulder': { desc: '僧帽筋と肩の緊張をほぐすストレッチ' }
            }
        },
        restGuide: {
            pageTitle: '休憩ガイド', pageSubtitle: '心と体のためのシンプルなストレッチとリラクゼーション',
            introTitle: '休憩ガイド紹介',
            introDesc1: '長時間の仕事で疲れた体と心のための簡単で効果的な休憩法を紹介します。',
            introDesc2: '各部位に特化したストレッチとリラクゼーション技法で即座に疲労回復を体験してください。',
            introDesc3: '1日数分の投資だけで長期的な健康改善効果が得られます。',
            tipsTitle: '💡 効果的な休憩のためのヒント',
            tip1: '50分集中、10分休憩のパターンを維持しましょう',
            tip2: 'ストレッチ中に痛みを感じたらすぐに中止し、強度を下げましょう',
            tip3: '深く楽な呼吸とともにゆっくり動作しましょう',
            tip4: '1日に短く何回かする方が1回長くするより効果的です',
            tip5: 'ストレッチの前後に十分な水分を摂取しましょう',
            cards: {
                all: { title: '全身休憩ガイド', desc: '首、肩、腰を含む全身ストレッチで全体的な疲労を解消します。約5分かかります。' },
                neck: { title: '首休憩ガイド', desc: '長時間モニターを見て緊張した首の後ろの筋肉をほぐす集中ストレッチです。' },
                face: { title: '顔休憩ガイド', desc: '表情筋と顎の筋肉の緊張をほぐし、頭痛予防と顔の疲労解消に役立ちます。' },
                eye: { title: '目休憩ガイド', desc: '画面注視による目の疲れと乾燥を緩和する目の運動とリラクゼーション法です。' },
                hand: { title: '手休憩ガイド', desc: 'キーボードとマウス使用で疲れた手首と指のためのストレッチです。' },
                waist: { title: '腰休憩ガイド', desc: '座って作業する姿勢による腰の負担を減らし、コア筋を活性化します。' },
                breathing: { title: '呼吸休憩ガイド', desc: '深い呼吸法で酸素供給を増やしストレスを解消する呼吸運動です。' },
                meditation: { title: '瞑想休憩ガイド', desc: '短時間で心を落ち着かせ集中力を回復するマインドフルネス瞑想です。' },
                shoulder: { title: '肩休憩ガイド', desc: '僧帽筋と肩の筋肉の緊張をほぐして肩こりと痛みを緩和します。' }
            },
            steps: {
                all: [{ title: '立つ', desc: '席を立って体を伸ばしてください。' }, { title: '首/肩', desc: '首を回して肩をほぐします。' }, { title: '呼吸', desc: '目を閉じて深く呼吸してください。' }],
                neck: [{ title: 'ほぐす', desc: '力を抜いてゆっくり頭を回してください。' }, { title: 'ストレッチ', desc: '手で頭をそっと押さえます。' }, { title: 'リラックス', desc: '肩を振って仕上げます。' }],
                face: [{ title: '意識', desc: '顔の緊張を確認してください。' }, { title: '運動', desc: 'ア・エ・イ・オ・ウを大きく。' }, { title: '顎', desc: '顎を左右に軽く動かしてください。' }],
                eye: [{ title: '閉じる', desc: '目を閉じて暗さを感じてください。' }, { title: '運動', desc: '目を上下左右に回してください。' }, { title: '遠く', desc: '遠くを20秒間見てください。' }],
                hand: [{ title: '回す', desc: '手首を優しく回してください。' }, { title: '指', desc: 'グーパーを繰り返してください。' }, { title: 'マッサージ', desc: '手のひらをしっかり押してください。' }],
                waist: [{ title: '反らす', desc: '立って腰を後ろに反らしてください。' }, { title: 'ひねる', desc: '上体を左右にひねってください。' }, { title: '姿勢', desc: '腰を伸ばして正しく座ってください。' }],
                breathing: [{ title: '準備', desc: '楽な姿勢で目を閉じてください。' }, { title: '腹式呼吸', desc: 'お腹を膨らませて深く呼吸します。' }, { title: '仕上げ', desc: 'ゆっくり通常の呼吸に戻ります。' }],
                meditation: [{ title: '姿勢', desc: '背筋を伸ばして楽に座ってください。' }, { title: '集中', desc: '呼吸だけに注意を向けます。' }, { title: 'マインドフルネス', desc: '今の瞬間を感じて終わります。' }],
                shoulder: [{ title: '肩上げ', desc: '肩を耳に向けて上げて下ろします。' }, { title: 'ストレッチ', desc: '頭を傾けて僧帽筋を伸ばします。' }, { title: '回す', desc: '肩を大きく円を描いて回します。' }]
            }
        },
        complete: {
            title: '健康ガイドをすべてご覧になりました！',
            sub: '小さな習慣が大きな変化を生みます',
            summary: '要約',
            summaryTitle: '📋 要約',
            action: '🚀 次のステップ',
            btnCheck: '健康チェックリストで状態をチェック',
            btnRest: '5分休憩ガイドを開始',
            remind: '<strong>覚えておいてください！</strong>50分作業後10分休憩、1日1.5〜2L水分摂取、定期的なストレッチが健康的なITライフの鍵です。',
            headache1: '深い呼吸を実践',
            headache2: '正しい姿勢を維持',
            headache3: '定期的に休憩',
            turtle1: 'モニターの高さを調整',
            turtle2: '首ストレッチを頻繁に',
            turtle3: '視線の高さを意識',
            hand1: '手首角度をチェック',
            hand2: '指ストレッチ',
            hand3: '手首レストを活用'
        },
        footer: {
            note: 'このプロジェクトは大学の課題目的の非商用ウェブサイトです。',
            imageSource: 'ストック画像出典:'
        },
        timer: {
            completeMessage: '🎉 休憩完了！お疲れ様でした！🎉',
            inProgress: '全身休憩ガイド進行中',
            inProgressSuffix: '進行中',
            step1: '1. 立つ',
            step2: '2. 首/肩',
            step3: '3. 深呼吸',
            minute: '分',
            cardTitle1: '席を立つ',
            cardDesc1: 'ゆっくり席を立って体を伸ばしてください。つま先から頭まで伸ばして血液循環を助けましょう。',
            cardTip1_1: '腕を上に伸ばして全身ストレッチ',
            cardTip1_2: 'その場で軽く歩く',
            cardTip1_3: 'つま先を上げ下げを繰り返す'
        },
        restGuideData: {
            'rest-all': {
                label: '全身休憩ガイド',
                steps: [
                    { title: '席を立つ', time: '1分', description: 'ゆっくり席を立って体を伸ばしてください。つま先から頭まで伸ばして血液循環を助けましょう。', tips: ['腕を上に伸ばして全身ストレッチ', 'その場で軽く歩く', 'つま先を上げ下げを繰り返す'] },
                    { title: '首と肩のストレッチ', time: '2分', description: '首と肩の緊張をほぐすストレッチで凝った筋肉をリラックスさせましょう。', tips: ['首をゆっくり左右に回す(各5回)', '肩を上げて後ろに回しながら下ろす', '頭を左右に傾けて首の横の筋肉を伸ばす', '顎を胸に向けて首の後ろの筋肉をストレッチ'] },
                    { title: '深呼吸と瞑想', time: '2分', description: '心を落ち着かせ、深呼吸でストレスを解消しましょう。', tips: ['楽な姿勢で座るか立つ', '4秒吸って6秒吐くを繰り返す', '目を閉じて今の瞬間に集中する', '緊張している部位を意識的にリラックスさせる'] }
                ]
            },
            'rest-neck': {
                label: '首の休憩ガイド',
                steps: [
                    { title: '首をほぐす', time: '1分', description: '緊張した首の筋肉を優しくほぐす準備運動です。', tips: ['肩を下げて首の力を抜く', '顎を軽く引いて首の後ろを長く伸ばす', '頭をゆっくり左右に回す(各5回)'] },
                    { title: '首の後ろのストレッチ', time: '1分30秒', description: '首の後ろの筋肉を集中的に伸ばすストレッチです。', tips: ['両手を組んで頭の後ろに当てる', '顎を胸に向けて優しく引く', '15秒維持してゆっくり戻る(3回繰り返す)', '痛みがあれば強度を下げてください'] },
                    { title: '首の筋肉のリラックス', time: '1分', description: 'ストレッチした筋肉をリラックスさせて終了します。', tips: ['肩を上げて落とす(5回)', '首を左右に傾けて横の筋肉を伸ばす', '深呼吸と共に緊張を解く'] }
                ]
            },
            'rest-face': {
                label: '顔の休憩ガイド',
                steps: [
                    { title: '顔の筋肉を意識', time: '1分', description: '普段緊張している顔の筋肉を意識して解きほぐします。', tips: ['額にしわが寄っていないか確認', '眉間の力を抜く', '顎に力が入っていないかチェック'] },
                    { title: '表情筋ストレッチ', time: '1分30秒', description: '顔のさまざまな筋肉を動かして緊張を解消します。', tips: ['目を大きく開けてギュッと閉じる(5回)', '口を大きく開けて「あ」と言う', '頬を膨らませてすぼめる(5回)', '舌を口の中で回す(左右各5回)'] },
                    { title: '顎のリラックスと仕上げ', time: '1分', description: '緊張が溜まりやすい顎の筋肉を集中的にリラックスさせます。', tips: ['口を軽く開けて顎の力を抜く', '顎を左右に優しく動かす', 'こめかみを円を描くように優しくマッサージ'] }
                ]
            },
            'rest-eye': {
                label: '目の休憩ガイド',
                steps: [
                    { title: '目を閉じて休憩', time: '1分', description: '画面から目を離して目の疲れを回復させます。', tips: ['目を閉じてリラックス', '手のひらを擦って温めてから目の上に当てる', '深呼吸と共に目の周りの緊張を解く'] },
                    { title: '目の運動', time: '1分30秒', description: '目の筋肉を動かして疲れを取り血液循環を助けます。', tips: ['目をゆっくり上下に動かす(10回)', '目をゆっくり左右に動かす(10回)', '目を時計回りに大きく回す(5回)', '反時計回りにも回す(5回)'] },
                    { title: '遠くを見る', time: '1分', description: '20-20-20ルールで目のピント筋肉をリラックスさせます。', tips: ['窓の外や遠く(6m以上)を見る', '20秒以上遠くに焦点を合わせる', '瞬きをして涙で目を潤す'] }
                ]
            },
            'rest-hand': {
                label: '手の休憩ガイド',
                steps: [
                    { title: '手首をほぐす', time: '1分', description: 'キーボードとマウスの使用で緊張した手首をほぐします。', tips: ['手首を時計/反時計回りに回す(各10回)', '手首を上下に曲げてストレッチ', '手を振って緊張を解く'] },
                    { title: '指のストレッチ', time: '1分30秒', description: '指の関節と腱を伸ばすストレッチです。', tips: ['指を大きく開いて5秒維持', 'ギュッと握って5秒維持(5回繰り返す)', '各指を一本ずつ後ろに反らせてストレッチ', '手のひらを合わせて手首を曲げる'] },
                    { title: '手のマッサージ', time: '1分', description: '手全体の疲れを取るマッサージです。', tips: ['親指で手のひらの中央を押しながらマッサージ', '手の甲を優しくさする', '指の間を軽く押す'] }
                ]
            },
            'rest-waist': {
                label: '腰の休憩ガイド',
                steps: [
                    { title: '腰をほぐす', time: '1分', description: '長時間座って固くなった腰の筋肉を優しくほぐします。', tips: ['椅子から立って腰に手を当てて後ろに反る', '上体を左右にゆっくりひねる(各5回)', '骨盤を左右に回して腰をほぐす'] },
                    { title: 'コアストレッチ', time: '1分30秒', description: '腰を支えるコア筋肉を活性化してストレッチします。', tips: ['立って両腕を上に伸ばして横に傾ける(左右各15秒)', '上体を前に倒して指先を床につける', '膝を軽く曲げた状態で腰をストレッチ', 'キャット・カウのポーズで背骨を動かす(可能な場合)'] },
                    { title: '姿勢リセット', time: '1分', description: '正しい姿勢を確認し、腰への負担を減らす姿勢に戻ります。', tips: ['足を肩幅に開いて正しく立つ', '肩を後ろに引いて胸を開く', '座る時はお尻を椅子の奥深くに入れて背もたれを活用'] }
                ]
            },
            'rest-breathing': {
                label: '呼吸休憩ガイド',
                steps: [
                    { title: '呼吸の準備', time: '1分', description: '楽な姿勢をとり、体の緊張をほぐして深い呼吸の準備をします。', tips: ['楽に座るか立って肩の力を抜く', '目を閉じて現在の呼吸状態を認識する', '顎と肩に入った力を抜く'] },
                    { title: '腹式呼吸の練習', time: '1分30秒', description: 'お腹を使った深い呼吸で酸素供給を増やし副交感神経を活性化します。', tips: ['鼻から4秒かけてゆっくり吸う', 'お腹が膨らむのを感じる', '口から6秒かけてゆっくり吐く', 'お腹が自然に凹むのを感じる(5回繰り返す)'] },
                    { title: '呼吸の仕上げ', time: '1分', description: '深呼吸の効果を感じながら自然に通常の呼吸に戻ります。', tips: ['徐々に呼吸の深さを減らしていく', '体全体のリラックスした感覚を認識する', '目を開けてゆっくり周りを見回す'] }
                ]
            },
            'rest-meditation': {
                label: '瞑想休憩ガイド',
                steps: [
                    { title: '瞑想の姿勢', time: '1分', description: '安定した姿勢をとり、心を落ち着ける準備をします。', tips: ['背筋を伸ばして楽に座る', '手は膝の上に軽く置く', '目を閉じるか視線を下に向ける'] },
                    { title: 'マインドフルネス集中', time: '1分30秒', description: '呼吸に注意を向けて今の瞬間に集中します。', tips: ['吸う息と吐く息だけに注意を向ける', '雑念が浮かんだら優しく呼吸に戻る', '判断せずに今の状態をそのまま受け入れる', '体の感覚を優しく感じる'] },
                    { title: '瞑想の仕上げ', time: '1分', description: '瞑想の静けさを維持しながら日常に優しく戻ります。', tips: ['ゆっくり周りの音を認識する', '指と足の指を軽く動かす', 'ゆっくり目を開けて少し止まる', '新しいエネルギーと集中力を感じる'] }
                ]
            },
            'rest-shoulder': {
                label: '肩休憩ガイド',
                steps: [
                    { title: '肩をほぐす', time: '1分', description: '固くなった僧帽筋と肩の筋肉の緊張をほぐす準備運動です。', tips: ['肩を耳に向けて上げて力を抜いて落とす(5回)', '肩を前に回して後ろに回す(各5回)', '両腕を振って肩の緊張をほぐす'] },
                    { title: '僧帽筋ストレッチ', time: '1分30秒', description: '首から肩につながる僧帽筋を集中的に伸ばします。', tips: ['右手で頭の左側を持って右に優しく引く', '15秒維持後、反対側も同様に(各2回)', '顎を胸に向けて引いて首の後ろの僧帽筋をストレッチ', '痛みがあれば強度を下げてください'] },
                    { title: '肩のリラックス', time: '1分', description: 'ストレッチした肩の筋肉をリラックスさせて仕上げます。', tips: ['両手を前で組んで前に押し出して肩甲骨を広げる', '後ろで手を組んで胸を開きながら肩を寄せる', '肩を大きく円を描くようにゆっくり回す(5回)', '深呼吸と共に肩の力を完全に抜く'] }
                ]
            }
        },
        diseases: {
            'ストレートネック': '前に突き出した姿勢により頸椎の正常なC字カーブが直線化する症状です。頭痛、肩こり、首の痛みを引き起こします。',
            '頸椎椎間板ヘルニア': '首の骨の間の椎間板が飛び出して神経を圧迫し、腕のしびれ、肩の痛み、手のしびれなどを引き起こします。',
            '筋膜性疼痛症候群': '筋肉と筋膜にトリガーポイントができて痛みを引き起こす疾患です。長時間同じ姿勢で発生しやすいです。',
            '肩インピンジメント症候群': '腕を上げる時に肩の骨と腱がぶつかり炎症と痛みを引き起こす疾患です。',
            '脊柱側弯症': '背骨が左右に曲がる疾患で、姿勢の不均衡が主な原因です。',
            '腰椎椎間板ヘルニア': '腰の骨の間の椎間板が飛び出して神経を圧迫する疾患です。',
            '深部静脈血栓症': '足の深い静脈に血栓ができる疾患です。長時間座っていると発生リスクが高まります。',
            '下肢静脈瘤': '足の静脈の弁機能異常により血液が逆流して静脈が膨れる疾患です。',
            '手根管症候群': '手首の正中神経が圧迫されて手のしびれ、手首の痛みを引き起こす疾患です。',
            '腱鞘炎': '腱を包む腱鞘に炎症が起こる疾患です。',
            'ドケルバン病': '親指側の腱と腱鞘に起こる炎症性疾患です。',
            'VDT症候群': '画面を長時間見ることで発生する目の疲れ、視力低下などの症状です。',
            'ドライアイ': '涙の分泌が不足したり涙がすぐ蒸発して目が乾く疾患です。',
            '緊張型頭痛': '頭の周りの筋肉の緊張により発生する頭痛です。',
            '偏頭痛': '頭の片側がズキズキする拍動性の頭痛で、吐き気や光・音への過敏を伴うことがあります。',
            '慢性疲労症候群': '十分な休息でも改善しない持続的な疲労状態です。',
            '集中力低下': '注意力と集中力が低下した状態で、酸素不足、疲労、ストレスが主な原因です。',
            '低血糖症': '血糖値が正常以下に下がる状態です。'
        },
        healthTips: {
            water: { title: '水分補給が必要です', tips: ['今すぐコップ一杯の水を飲んでください', '1時間ごとにアラームを設定して水を飲む習慣を作りましょう', 'カフェイン飲料より水やハーブティーを選びましょう'], diseases: ['慢性疲労症候群', '集中力低下'] },
            meal: { title: '規則的な食事が必要です', tips: ['忙しくても食事を抜かないでください', '簡単なおやつでも食べてください', '朝食は脳の活動と集中力に重要です', '過食より少量ずつ頻繁に食べる方が良いです'], diseases: ['低血糖症', '集中力低下', '慢性疲労症候群'] },
            'neck-forward': { title: '首の姿勢矯正が必要です', tips: ['顎を軽く引いて首を長く伸ばしてください', 'モニターの高さを目の高さに合わせてください', '30分ごとに首をゆっくり左右に回してください'], diseases: ['ストレートネック', '頸椎椎間板'] },
            'shoulder-tension': { title: '肩の緊張緩和が必要です', tips: ['肩を上げて後ろに回しながら下ろしてください', '深く息を吸いながら肩の力を抜いてください', '首と肩を5分間マッサージしてください'], diseases: ['筋膜性疼痛症候群', '肩峰下インピンジメント'] },
            'back-curved': { title: '腰の姿勢改善が必要です', tips: ['背もたれに腰を密着させて座ってください', '足を床に平らに置いて座ってください', '腰の後ろにクッションを置いてカーブを維持してください'], diseases: ['脊柱側弯症', '腰椎椎間板'] },
            'sitting-long': { title: '動く時間です', tips: ['今すぐ席を立って2〜3分歩いてください', 'その場でストレッチを5分間してください', '50分仕事して10分休むパターンを作りましょう'], diseases: ['深部静脈血栓症', '下肢静脈瘤'] },
            'hand-pain': { title: '手首のケアが必要です', tips: ['手首を円を描くようにゆっくり回してください', '指を広げて握る運動を繰り返してください', '手首レストを使ってタイピングしてください'], diseases: ['手根管症候群', '腱鞘炎'] },
            'wrist-angle': { title: '手首の角度調整が必要です', tips: ['キーボードと手首が一直線になるように調整してください', 'マウスパッドに手首レストを使用してください', '肘が90度になるように椅子の高さを調節してください'], diseases: ['手根管症候群', 'ドケルバン病'] },
            'eye-strain': { title: '目の休憩が必要です', tips: ['20-20-20ルール：20分ごとに20フィート(6m)先を20秒見てください', '目を閉じて10秒休憩してください', '人工涙液を使って目を潤してください'], diseases: ['VDT症候群', 'ドライアイ'] },
            headache: { title: '頭痛緩和が必要です', tips: ['深呼吸を5分間してください', '首と肩を優しくマッサージしてください', '十分な水分摂取と短い休憩を取ってください'], diseases: ['緊張型頭痛', '偏頭痛'] }
        }
    }
};

// 브라우저 환경에서 전역으로 노출
if (typeof window !== 'undefined') {
    window.translations = translations;
}

// Node.js 환경에서 export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations };
}
