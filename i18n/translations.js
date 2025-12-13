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
            intro1: '장시간의 데스크워크에 의해 <span class="problem-keyword">얕은 호흡</span>이 습관화되면 산소 공급이 부족해집니다.',
            intro2: '<span class="problem-keyword">무너진 자세</span>는 혈액순환을 방해하여 피로감을 유발합니다.',
            symptomTitle: '[증상 특징]',
            symptom1: '오후가 되면 머리가 무거워짐',
            symptom2: '왠지 모르게 의욕이 나지 않음',
            causeTitle: '[원인과 메커니즘]',
            cause1: '얕은 호흡으로 인한 산소 부족',
            cause2: '자세 불균형으로 인한 혈류 장애',
            tipTitle: '[개선의 힌트]',
            tip1: '깊은 호흡을 의식합니다.',
            tip2: '데스크 환경을 재정비합니다.',
            tipDetail1: '3초 들이마시고 4초 내쉬는 리듬',
            tipDetail2: '자연스러운 자세가 되도록',
            chipBreath: '깊은 호흡',
            chipPosture: '자연스러운 자세',
            chipMindfulness: '마음챙김'
        },
        turtle: {
            title: '거북목 증상 개선',
            intro1: '스마트폰이나 모니터를 내려다보는 자세는 <span class="problem-keyword">"거북목"</span>을 유발합니다.',
            intro2: '<span class="problem-keyword">잘못된 시선</span>은 목 긴장과 어깨 결림의 원인입니다.',
            symptomTitle: '[증상 특징]',
            symptom1: '목과 어깨에 지속적인 긴장감',
            symptom2: '고개를 돌릴 때 불편함',
            causeTitle: '[원인과 메커니즘]',
            cause1: '잘못된 시선 위치로 인한 목 긴장',
            cause2: '장시간 고정된 자세',
            tipTitle: '[개선의 힌트]',
            tip1: '시선의 높이를 조절합니다.',
            tip2: '규칙적인 스트레칭을 합니다.',
            tipDetail1: '목을 똑바로 유지하여 예방',
            tipDetail2: '1시간에 1회 목 돌리기',
            chipHeight: '시선 높이',
            chipStretch: '목 스트레칭',
            chipPosture: '올바른 자세'
        },
        hand: {
            title: '손목과 손가락 건강관리',
            intro1: '키보드/마우스의 <span class="problem-keyword">반복 동작</span>은 건초염의 원인이 됩니다.',
            intro2: '<span class="problem-keyword">손목 각도</span> 불량은 지속적인 부담을 줍니다.',
            symptomTitle: '[증상 특징]',
            symptom1: '손목과 손가락의 통증/저림',
            symptom2: '타이핑 시 불편함 증가',
            causeTitle: '[원인과 메커니즘]',
            cause1: '손목 각도와 힘 조절 미흡',
            cause2: '반복적인 손가락 동작',
            tipTitle: '[개선의 힌트]',
            tip1: '손목 각도를 재검토합니다.',
            tip2: '손가락 스트레칭을 합니다.',
            tipDetail1: '자연스러운 위치로 부담 감소',
            tipDetail2: '주먹을 쥐었다 펴는 운동',
            chipAngle: '손목 각도',
            chipStretch: '손 스트레칭',
            chipErgonomics: '인체공학'
        },
        eye: {
            title: '눈 건강 관리',
            intro1: '장시간 <span class="problem-keyword">화면 응시</span>는 안구 건조와 두통을 유발합니다.',
            intro2: '<span class="problem-keyword">깜빡임 감소</span>는 눈의 피로를 가중시킵니다.',
            symptomTitle: '[증상 특징]',
            symptom1: '눈이 뻑뻑하고 건조함',
            symptom2: '눈의 피로와 침침함',
            causeTitle: '[원인과 메커니즘]',
            cause1: '화면 집중으로 인한 깜빡임 감소',
            cause2: '근거리 초점 유지로 인한 긴장',
            tipTitle: '[개선의 힌트]',
            tip1: '20-20-20 규칙 실천',
            tip2: '의식적으로 눈 깜빡이기',
            tipDetail1: '20분마다 20피트 밖을 20초간 응시',
            tipDetail2: '인공눈물 활용하기',
            chip1: '20-20-20',
            chip2: '눈 깜빡임',
            chip3: '눈 휴식'
        },
        back: {
            title: '허리 건강 관리',
            intro1: '장시간 <span class="problem-keyword">앉은 자세</span>는 척추와 디스크에 부담을 줍니다.',
            intro2: '<span class="problem-keyword">코어 약화</span>는 요통의 주요 원인입니다.',
            symptomTitle: '[증상 특징]',
            symptom1: '허리 뻐근함과 통증',
            symptom2: '오래 앉아있을 때 불편함',
            causeTitle: '[원인과 메커니즘]',
            cause1: '디스크 압박 지속',
            cause2: '자세 불안정',
            tipTitle: '[개선의 힌트]',
            tip1: '1시간마다 일어나기',
            tip2: '올바른 자세 유지하기',
            tipDetail1: '허리 젖히기 및 비틀기',
            tipDetail2: '등받이 밀착, 발은 바닥에',
            chip1: '허리 스트레칭',
            chip2: '올바른 자세',
            chip3: '코어 강화'
        },
        face: {
            title: '얼굴 긴장 완화',
            intro1: '무의식적인 <span class="problem-keyword">이 악물기</span>는 두통을 유발합니다.',
            intro2: '<span class="problem-keyword">표정근 긴장</span>은 얼굴 피로의 원인입니다.',
            symptomTitle: '[증상 특징]',
            symptom1: '턱과 관자놀이 긴장',
            symptom2: '얼굴 피로와 두통',
            causeTitle: '[원인과 메커니즘]',
            cause1: '스트레스로 인한 이 악물기',
            cause2: '집중 시 표정 굳음',
            tipTitle: '[개선의 힌트]',
            tip1: '턱 힘 빼고 이완하기',
            tip2: '표정근 스트레칭',
            tipDetail1: '입을 살짝 벌려 힘 빼기',
            tipDetail2: '입을 크게 벌리는 운동',
            chip1: '턱 이완',
            chip2: '표정근 이완',
            chip3: '얼굴 마사지'
        },
        // --- 가이드 소개 페이지 ---
        intro: {
            mainTitle: 'IT&HEALTH 가이드에 오신 것을 환영합니다',
            lead1: '장시간 데스크워크로 몸에 무리가 가고 있지는 않나요?',
            lead2: '자세가 무너지고 있지는 않나요?',
            purposeTitle: '우리의 미션',
            purpose1: 'IT 작업은 피할 수 없지만, 몸을 지키는 지식은 필요합니다.',
            purpose2: '당신이 궁금해할 건강 정보를 여기 모았습니다.',
            contentTitle: '주요 건강 정보',
            card1Title: '두통과 무기력',
            card1Desc: '호흡과 자세로 두통 예방하기',
            card2Title: '거북목',
            card2Desc: '목과 어깨 부담 줄이기',
            card3Title: '손목/손가락',
            card3Desc: '건초염과 통증 관리',
            howtoTitle: '활용 방법',
            howto1: '건강 체크리스트 활용',
            howto2: '5분 휴식 가이드 실천',
            howto3: '증상별 가이드 탐색',
            howto4: '꾸준한 실천',
            workspaceTitle: '건강한 작업 환경',
            workspaceDesc: '환경이 건강을 만듭니다.',
            tempTitle: '온습도',
            tempDesc: '18~24°C / 40~60%',
            waterTitle: '수분',
            waterDesc: '하루 1.5~2L',
            airTitle: '환기',
            airDesc: '2~3시간마다',
            msgTitle: '건강한 라이프 시작',
            msg1: '증상이 심하면 전문의와 상담하세요.',
            cta: '가이드 둘러보기 →',
            quickGuide: '건강 가이드',
            quickRest: '휴식 가이드',
            quickCheck: '체크리스트'
        },
        // --- 체크리스트 (데이터화) ---
        checklist: {
            title: '건강 체크리스트',
            subtitle: '지금 이 순간, 나의 상태를 점검해보세요',
            resultTitle: '체크 결과',
            checkedCount: '체크된 항목:',
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
            // 동적 팁 데이터
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
            recommendTitle: '🎯 맞춤 휴식 가이드'
        },
        // --- 휴식 가이드 (카드 및 타이머) ---
        restGuide: {
            pageTitle: '휴식 가이드',
            pageSubtitle: '몸과 마음을 위한 간단한 스트레칭',
            introTitle: '가이드 소개',
            introDesc1: '지친 몸을 위한 효과적인 휴식법입니다.',
            introDesc2: '부위별 스트레칭으로 피로를 풀어보세요.',
            tipsTitle: '💡 효과적인 휴식 팁',
            tip1: '50분 집중, 10분 휴식',
            tip2: '통증이 있으면 중단하세요',
            tip3: '호흡은 편안하게',
            cards: {
                all: { title: '전체 휴식', desc: '전신 스트레칭 (5분)' },
                neck: { title: '뒷목 휴식', desc: '목 근육 집중 케어' },
                face: { title: '얼굴 휴식', desc: '표정근과 턱 이완' },
                eye: { title: '눈 휴식', desc: '눈 피로 해소' },
                hand: { title: '손 휴식', desc: '손목/손가락 케어' },
                waist: { title: '허리 휴식', desc: '허리/코어 스트레칭' }
            },
            // 타이머 단계별 데이터
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
                ]
            }
        },
        complete: {
            title: '가이드를 모두 보셨습니다!',
            sub: '작은 습관이 큰 변화를 만듭니다',
            summary: '핵심 요약',
            action: '다음 단계',
            btnCheck: '체크리스트로 이동',
            btnRest: '휴식 가이드 시작',
            remind: '기억하세요! 50분 작업, 10분 휴식.'
        }
    },
    // 영어와 일본어도 위와 동일한 키 구조를 가집니다. (공간 절약을 위해 KR 기반으로 구조만 맞춤 예시)
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
        headache: { /* ... (Content translated similarly) ... */ title: 'Headache Solution', intro1: 'Shallow breathing...', intro2: 'Bad posture...', symptomTitle: '[Symptoms]', symptom1: 'Heavy head', symptom2: 'Low energy', causeTitle: '[Causes]', cause1: 'Lack of Oxygen', cause2: 'Poor Circulation', tipTitle: '[Tips]', tip1: 'Deep Breathing', tip2: 'Fix Desk Setup', tipDetail1: '3s In, 4s Out', tipDetail2: 'Natural Posture', chipBreath: 'Breathing', chipPosture: 'Posture', chipMindfulness: 'Mindfulness' },
        turtle: { title: 'Text Neck Relief', intro1: 'Looking down causes...', intro2: 'Eye level matters...', symptomTitle: '[Symptoms]', symptom1: 'Neck tension', symptom2: 'Stiffness', causeTitle: '[Causes]', cause1: 'Wrong eye level', cause2: 'Fixed posture', tipTitle: '[Tips]', tip1: 'Adjust Screen', tip2: 'Stretch', tipDetail1: 'Keep neck straight', tipDetail2: 'Rotate neck hourly', chipHeight: 'Height', chipStretch: 'Stretch', chipPosture: 'Posture' },
        hand: { title: 'Wrist & Finger Care', intro1: 'Repetitive motion...', intro2: 'Wrist angle...', symptomTitle: '[Symptoms]', symptom1: 'Pain & Numbness', symptom2: 'Discomfort', causeTitle: '[Causes]', cause1: 'Bad angle', cause2: 'Repetitive use', tipTitle: '[Tips]', tip1: 'Check Angle', tip2: 'Finger Stretch', tipDetail1: 'Neutral position', tipDetail2: 'Open/Close hand', chipAngle: 'Angle', chipStretch: 'Stretch', chipErgonomics: 'Ergonomics' },
        eye: { title: 'Eye Health', intro1: 'Screen time...', intro2: 'Less blinking...', symptomTitle: '[Symptoms]', symptom1: 'Dryness', symptom2: 'Fatigue', causeTitle: '[Causes]', cause1: 'Less blinking', cause2: 'Close focus', tipTitle: '[Tips]', tip1: '20-20-20 Rule', tip2: 'Blink More', tipDetail1: 'Look away every 20m', tipDetail2: 'Use eye drops', chip1: '20-20-20', chip2: 'Blinking', chip3: 'Rest' },
        back: { title: 'Back Health', intro1: 'Sitting long...', intro2: 'Weak core...', symptomTitle: '[Symptoms]', symptom1: 'Stiffness', symptom2: 'Pain', causeTitle: '[Causes]', cause1: 'Disc pressure', cause2: 'Instability', tipTitle: '[Tips]', tip1: 'Stand hourly', tip2: 'Good Posture', tipDetail1: 'Twist & Lean', tipDetail2: 'Use backrest', chip1: 'Stretch', chip2: 'Posture', chip3: 'Core' },
        face: { title: 'Facial Tension', intro1: 'Clenching...', intro2: 'Expression...', symptomTitle: '[Symptoms]', symptom1: 'Jaw tension', symptom2: 'Headache', causeTitle: '[Causes]', cause1: 'Stress', cause2: 'Focusing', tipTitle: '[Tips]', tip1: 'Relax Jaw', tip2: 'Face Stretch', tipDetail1: 'Mouth open slightly', tipDetail2: 'Open mouth wide', chip1: 'Relax', chip2: 'Stretch', chip3: 'Massage' },
        intro: {
            mainTitle: 'Welcome to IT&HEALTH Guide',
            lead1: 'Overworking your body?',
            lead2: 'Is your posture okay?',
            purposeTitle: 'Our Mission',
            purpose1: 'IT work is inevitable.',
            purpose2: 'You need knowledge to protect your body.',
            contentTitle: 'Topics',
            card1Title: 'Headache', card1Desc: 'Preventing fatigue',
            card2Title: 'Text Neck', card2Desc: 'Neck care tips',
            card3Title: 'Wrist', card3Desc: 'Pain management',
            howtoTitle: 'How to Use',
            howto1: 'Checklist', howto2: '5-min Break', howto3: 'Symptom Guides', howto4: 'Routine',
            workspaceTitle: 'Workspace', workspaceDesc: 'Environment matters.',
            tempTitle: 'Temp', tempDesc: '18~24°C',
            waterTitle: 'Water', waterDesc: '1.5~2L daily',
            airTitle: 'Air', airDesc: 'Ventilate often',
            msgTitle: 'Start Today', msg1: 'Consult doctor if needed.',
            cta: 'Explore Guide →',
            quickGuide: 'Health Guide', quickRest: 'Rest Guide', quickCheck: 'Checklist'
        },
        checklist: {
            title: 'Health Checklist', subtitle: 'Check your condition now', resultTitle: 'Results', checkedCount: 'Checked:', defaultMsg: 'Check items to see tips!', reset: 'Reset All',
            sections: { hydration: '🍽️ Hydration & Meal', neck: '🐢 Neck & Shoulder', posture: '🪑 Posture', hand: '✋ Hand & Wrist', fatigue: '😴 Fatigue' },
            questions: { water: 'Drank water in last hour?', meal: 'Skipped meal today?', neckForward: 'Is neck forward?', shoulder: 'Shoulder tension?', backCurved: 'Back slouched?', sitting: 'Sat for 1+ hour?', handPain: 'Hand/Wrist pain?', wristAngle: 'Wrist bent?', eyes: 'Eyes dry?', headache: 'Headache?' },
            tips: {
                water: { title: "Hydrate", desc: ["Drink water", "Set alarm", "Less caffeine"] },
                meal: { title: "Regular Meals", desc: ["Don't skip", "Light snack", "Eat breakfast"] },
                neck: { title: "Neck Posture", desc: ["Chin tuck", "Adjust monitor", "Stretch"] },
                shoulder: { title: "Relax Shoulders", desc: ["Roll shoulders", "Deep breath", "Massage"] },
                back: { title: "Back Posture", desc: ["Use backrest", "Feet flat", "Cushion"] },
                sitting: { title: "Move Now", desc: ["Walk around", "Stretch", "50/10 Rule"] },
                hand: { title: "Hand Care", desc: ["Rotate wrist", "Clench/Open", "Wrist rest"] },
                wrist: { title: "Wrist Angle", desc: ["Keep straight", "Adjust chair"] },
                eye: { title: "Eye Rest", desc: ["20-20-20 Rule", "Close eyes", "Eye drops"] },
                headache: { title: "Headache Relief", desc: ["Breathe deep", "Massage temples", "Rest"] }
            },
            diseases: {
                turtle: { name: "Text Neck", desc: "Strain from looking down" },
                disk: { name: "Herniated Disc", desc: "Nerve compression" },
                vdt: { name: "VDT Syndrome", desc: "Screen-related disorders" },
                dryeye: { name: "Dry Eye", desc: "Lack of tears" },
                tunnel: { name: "Carpal Tunnel", desc: "Nerve pinch in wrist" }
            },
            recommendTitle: '🎯 Recommended Guides'
        },
        restGuide: {
            pageTitle: 'Rest Guide', pageSubtitle: 'Simple stretches for body & mind', introTitle: 'Intro', introDesc1: 'Effective rest methods.', introDesc2: 'Relieve fatigue by area.', tipsTitle: '💡 Tips', tip1: '50/10 Rule', tip2: 'Stop if painful', tip3: 'Breathe deeply',
            cards: { all: { title: 'Full Body', desc: 'Total stretch (5m)' }, neck: { title: 'Neck', desc: 'Neck care' }, face: { title: 'Face', desc: 'Jaw relax' }, eye: { title: 'Eye', desc: 'Eye relief' }, hand: { title: 'Hand', desc: 'Wrist care' }, waist: { title: 'Back', desc: 'Core stretch' } },
            steps: {
                all: [{ title: 'Stand Up', desc: 'Stretch whole body.' }, { title: 'Neck/Shoulder', desc: 'Roll and relax.' }, { title: 'Breathe', desc: 'Deep breathing.' }],
                neck: [{ title: 'Loosen', desc: 'Rotate head.' }, { title: 'Stretch', desc: 'Press head gently.' }, { title: 'Relax', desc: 'Drop shoulders.' }],
                face: [{ title: 'Awareness', desc: 'Check tension.' }, { title: 'Exercise', desc: 'Open mouth wide.' }, { title: 'Jaw', desc: 'Move jaw gently.' }],
                eye: [{ title: 'Close', desc: 'Rest eyes.' }, { title: 'Move', desc: 'Look around.' }, { title: 'Focus', desc: 'Look far away.' }],
                hand: [{ title: 'Rotate', desc: 'Spin wrists.' }, { title: 'Fingers', desc: 'Clench and open.' }, { title: 'Massage', desc: 'Press palms.' }],
                waist: [{ title: 'Lean Back', desc: 'Arch back.' }, { title: 'Twist', desc: 'Twist torso.' }, { title: 'Posture', desc: 'Sit straight.' }]
            }
        },
        complete: { title: 'All Guides Completed!', sub: 'Small habits matter', summary: 'Summary', action: 'Next', btnCheck: 'Go to Checklist', btnRest: 'Start Rest Guide', remind: 'Remember! 50/10 Rule.' }
    },
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
        headache: { title: '頭痛・無気力の解決', intro1: '浅い呼吸...', intro2: '姿勢の崩れ...', symptomTitle: '[症状]', symptom1: '頭が重い', symptom2: 'やる気が出ない', causeTitle: '[原因]', cause1: '酸素不足', cause2: '血流障害', tipTitle: '[ヒント]', tip1: '深い呼吸', tip2: '環境見直し', tipDetail1: '3秒吸って4秒吐く', tipDetail2: '自然な姿勢', chipBreath: '深い呼吸', chipPosture: '自然な姿勢', chipMindfulness: 'マインドフルネス' },
        turtle: { title: 'スマホ首の改善', intro1: '見下ろす姿勢...', intro2: '視線のずれ...', symptomTitle: '[症状]', symptom1: '首肩の緊張', symptom2: '回しにくい', causeTitle: '[原因]', cause1: '視線の位置', cause2: '固定姿勢', tipTitle: '[ヒント]', tip1: '視線調整', tip2: 'ストレッチ', tipDetail1: '首をまっすぐに', tipDetail2: '1時間に1回回す', chipHeight: '視線高さ', chipStretch: 'ストレッチ', chipPosture: '正しい姿勢' },
        hand: { title: '手首と指のケア', intro1: '反復動作...', intro2: '手首角度...', symptomTitle: '[症状]', symptom1: '痛み・しびれ', symptom2: '不快感', causeTitle: '[原因]', cause1: '角度不良', cause2: '指の反復', tipTitle: '[ヒント]', tip1: '角度見直し', tip2: '指ストレッチ', tipDetail1: '自然な位置', tipDetail2: 'グーパー運動', chipAngle: '角度', chipStretch: 'ストレッチ', chipErgonomics: '人間工学' },
        eye: { title: '目の健康管理', intro1: '画面注視...', intro2: '瞬き減少...', symptomTitle: '[症状]', symptom1: '乾燥', symptom2: 'かすみ', causeTitle: '[原因]', cause1: '瞬き不足', cause2: '近距離集中', tipTitle: '[ヒント]', tip1: '20-20-20', tip2: '意識的に瞬き', tipDetail1: '20分ごとに遠くを見る', tipDetail2: '目薬活用', chip1: '20-20-20', chip2: '瞬き', chip3: '休憩' },
        back: { title: '腰の健康管理', intro1: '座りっぱなし...', intro2: 'コア弱化...', symptomTitle: '[症状]', symptom1: 'こわばり', symptom2: '不快感', causeTitle: '[原因]', cause1: '圧迫', cause2: '不安定', tipTitle: '[ヒント]', tip1: '立って動く', tip2: '正しい姿勢', tipDetail1: 'ひねり運動', tipDetail2: '背もたれ活用', chip1: 'ストレッチ', chip2: '姿勢', chip3: 'コア' },
        face: { title: '顔の緊張緩和', intro1: '食いしばり...', intro2: '表情筋...', symptomTitle: '[症状]', symptom1: '顎の緊張', symptom2: '頭痛', causeTitle: '[原因]', cause1: 'ストレス', cause2: '集中', tipTitle: '[ヒント]', tip1: '顎リラックス', tip2: '表情筋運動', tipDetail1: '口を緩める', tipDetail2: '大きく開ける', chip1: 'リラックス', chip2: '運動', chip3: 'マッサージ' },
        intro: {
            mainTitle: 'IT&HEALTHへようこそ',
            lead1: '体に負担をかけていませんか？',
            lead2: '姿勢は大丈夫ですか？',
            purposeTitle: 'ミッション',
            purpose1: 'IT作業は避けられません。',
            purpose2: '体を守る知識が必要です。',
            contentTitle: 'トピック',
            card1Title: '頭痛', card1Desc: '疲労予防',
            card2Title: 'スマホ首', card2Desc: '首のケア',
            card3Title: '手首', card3Desc: '痛み管理',
            howtoTitle: '活用法',
            howto1: 'チェックリスト', howto2: '5分休憩', howto3: '症状別ガイド', howto4: '習慣化',
            workspaceTitle: '作業環境', workspaceDesc: '環境が重要です。',
            tempTitle: '温湿度', tempDesc: '18~24°C',
            waterTitle: '水分', waterDesc: '1日1.5~2L',
            airTitle: '換気', airDesc: 'こまめに',
            msgTitle: '健康ライフ開始', msg1: '不調時は医師へ相談を。',
            cta: 'ガイドを見る →',
            quickGuide: '健康ガイド', quickRest: '休憩ガイド', quickCheck: 'チェックリスト'
        },
        checklist: {
            title: '健康チェックリスト', subtitle: '今の状態を確認しましょう', resultTitle: '結果', checkedCount: 'チェック数:', defaultMsg: 'チェックするとヒントが表示されます', reset: 'リセット',
            sections: { hydration: '🍽️ 水分・食事', neck: '🐢 首・肩', posture: '🪑 姿勢', hand: '✋ 手・手首', fatigue: '😴 疲労' },
            questions: { water: '1時間以内に水を飲みましたか？', meal: '食事を抜いていませんか？', neckForward: '首が前に出ていますか？', shoulder: '肩が凝っていますか？', backCurved: '猫背になっていますか？', sitting: '1時間以上座っていますか？', handPain: '手首に痛みがありますか？', wristAngle: '手首が折れ曲がっていますか？', eyes: '目が乾きますか？', headache: '頭痛がしますか？' },
            tips: {
                water: { title: "水分補給", desc: ["水を飲む", "アラーム設定", "カフェイン控える"] },
                meal: { title: "規則的な食事", desc: ["抜かない", "軽食をとる", "朝食を食べる"] },
                neck: { title: "首の姿勢", desc: ["顎を引く", "モニター調整", "ストレッチ"] },
                shoulder: { title: "肩リラックス", desc: ["肩回し", "深呼吸", "マッサージ"] },
                back: { title: "腰の姿勢", desc: ["背もたれ使用", "足は床に", "クッション"] },
                sitting: { title: "動きましょう", desc: ["歩く", "ストレッチ", "50分作業10分休憩"] },
                hand: { title: "手首ケア", desc: ["手首回し", "グーパー", "リストレスト"] },
                wrist: { title: "角度調整", desc: ["水平に保つ", "椅子調整"] },
                eye: { title: "目の休憩", desc: ["20-20-20", "目を閉じる", "目薬"] },
                headache: { title: "頭痛緩和", desc: ["深呼吸", "こめかみマッサージ", "休憩"] }
            },
            diseases: {
                turtle: { name: "スマホ首", desc: "首への過負荷" },
                disk: { name: "椎間板ヘルニア", desc: "神経圧迫による痛み" },
                vdt: { name: "VDT症候群", desc: "画面作業による障害" },
                dryeye: { name: "ドライアイ", desc: "目の乾燥" },
                tunnel: { name: "手根管症候群", desc: "手首の神経圧迫" }
            },
            recommendTitle: '🎯 おすすめ休憩ガイド'
        },
        restGuide: {
            pageTitle: '休憩ガイド', pageSubtitle: '心と体のためのストレッチ', introTitle: '紹介', introDesc1: '効果的な休憩法です。', introDesc2: '部位別に疲れを癒します。', tipsTitle: '💡 ヒント', tip1: '50/10ルール', tip2: '痛みがあれば中止', tip3: '呼吸は楽に',
            cards: { all: { title: '全身休憩', desc: '全身ストレッチ(5分)' }, neck: { title: '首休憩', desc: '首ケア' }, face: { title: '顔休憩', desc: '顎リラックス' }, eye: { title: '目休憩', desc: '目の疲れ' }, hand: { title: '手休憩', desc: '手首ケア' }, waist: { title: '腰休憩', desc: '腰ストレッチ' } },
            steps: {
                all: [{ title: '立つ', desc: '全身を伸ばします。' }, { title: '首・肩', desc: '回してほぐします。' }, { title: '呼吸', desc: '深く呼吸します。' }],
                neck: [{ title: 'ほぐす', desc: '首を回します。' }, { title: '伸ばす', desc: '手で押さえます。' }, { title: '緩める', desc: '肩を落とします。' }],
                face: [{ title: '意識', desc: '力を抜きます。' }, { title: '運動', desc: '口を大きく開けます。' }, { title: '顎', desc: '顎を動かします。' }],
                eye: [{ title: '閉じる', desc: '目を休めます。' }, { title: '運動', desc: '目を動かします。' }, { title: '遠く', desc: '遠くを見ます。' }],
                hand: [{ title: '回す', desc: '手首を回します。' }, { title: '指', desc: 'グーパーします。' }, { title: 'マッサージ', desc: '手のひらを押します。' }],
                waist: [{ title: '反らす', desc: '腰を反らします。' }, { title: 'ひねる', desc: '体をねじります。' }, { title: '姿勢', desc: '正しく座ります。' }]
            }
        },
        complete: { title: 'ガイド完了！', sub: '習慣が大切です', summary: '要約', action: '次へ', btnCheck: 'チェックリストへ', btnRest: '休憩ガイド開始', remind: '50分作業・10分休憩を忘れずに。' }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations };
}