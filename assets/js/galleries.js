/* ════════════════════════════════════════════════════════════════════
 * 게임 갤러리 데이터 — 이 파일만 편집하면 됩니다.
 *
 * 📝 사용법:
 *
 *  1. 이미지 추가:
 *     - assets/images/game/<게임폴더>/ 안에 새 파일 넣기 (예: 080.jpg)
 *     - 아래 해당 게임의 `files` 배열에 파일명 한 줄 추가
 *
 *  2. 이미지 삭제:
 *     - `files` 배열에서 해당 파일명 줄 지우기
 *     - (파일은 폴더에 남아있어도 사이트에는 안 나옴)
 *
 *  3. 순서 변경:
 *     - `files` 배열 안에서 줄 순서만 바꾸기
 *
 *  4. 게임 카드 썸네일 변경:
 *     - 각 게임의 `thumb` 값을 원하는 파일명으로 교체
 *
 *  5. 새 게임/카테고리 추가:
 *     - GAME_GALLERIES 객체에 새 키 한 덩어리 추가 (기존 항목 복사 후 수정)
 *     - 그 키를 index.html 의 data-gallery-id 에 연결
 *
 *  ⚠️ 주의: 따옴표 ' " , {} [] 등은 절대 지우지 말 것!
 *  ⚠️ 한글 파일명도 OK, 공백/대소문자 모두 OK (단, 실제 파일과 똑같이 적어야 함)
 * ════════════════════════════════════════════════════════════════════ */

window.GAME_GALLERIES = {

  // ─────────────────────────────────────────────────────────────
  '메이플스토리': {
    title: '메이플스토리 · MapleStory',
    studio: 'NEXON · 2024–2025',
    role: '인게임 도트 · 이펙트 애니메이션',
    folder: '메이플스토리',
    thumb: '03_렌_매화검_만리향 시전이펙트.GIF',
    files: [
      { name: '01_제논_어센트스킬_네오테릭트라이스.gif',          caption: '제논 · 어센트 스킬 · 네오테릭 트라이스' },
      { name: '02_제논_어센트스킬_네오테릭트라이스_퀀텀게이트.GIF', caption: '제논 · 네오테릭 트라이스 · 퀀텀 게이트' },
      { name: '03_렌_매화검_만리향 시전이펙트.GIF',                caption: '렌 · 매화검 · 만리향 시전 이펙트' },
      { name: '다크리벤지_개편_시전.GIF',                          caption: '다크리벤지 · 개편 · 시전' },
      { name: '다크리벤지_개편_생성루프소멸.GIF',                  caption: '다크리벤지 · 개편 · 생성→루프→소멸' },
      { name: '다크리벤지_개편_시전생성루프소멸.GIF',              caption: '다크리벤지 · 개편 · 풀 시퀀스' },
      { name: '메생역전이펙트.GIF',                                 caption: '메생역전 이펙트' },
      { name: '메생역전이펙트_루프.GIF',                            caption: '메생역전 이펙트 · 루프' },
      { name: '메이플홈_퍼펙트 달성 이펙트.GIF',                    caption: '메이플 홈 · 퍼펙트 달성 이펙트' },
      { name: '의문의결계_에너지추출.GIF',                          caption: '의문의 결계 · 에너지 추출' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  '테르비스': {
    title: '테르비스 · TERBIS',
    studio: 'WEBZEN NOVA · 2022–2024',
    role: '캐릭터 원화 · 다이얼로그 일러스트 · Spine 분리',
    folder: '테르비스',
    thumb: '020.jpg',
    files: [
      { name: '008.jpg', caption: '테르비스 "미셸" 다이얼로그 일러스트' },
      { name: '009.jpg', caption: '테르비스 "세실리아" 다이얼로그 일러스트' },
      { name: '010.jpg', caption: '테르비스 "유디트" 다이얼로그 일러스트' },
      { name: '011.jpg', caption: '테르비스 "미셸" 인게임 캐릭터 리소스' },
      { name: '012.jpg', caption: '테르비스 "도로시" 인게임 캐릭터 리소스' },
      { name: '013.jpg', caption: '테르비스 "세실리아" 인게임 캐릭터 리소스' },
      { name: '014.jpg', caption: '테르비스 "이자벨" 인게임 캐릭터 리소스' },
      { name: '015.jpg', caption: '테르비스 "유디트" 인게임 캐릭터 리소스' },
      { name: '016.jpg', caption: '테르비스 "니왈레" 인게임 캐릭터 리소스' },
      { name: '017.jpg', caption: '테르비스 "슈벨라" 인게임 캐릭터 리소스' },
      { name: '018.jpg', caption: '테르비스 "레오" 인게임 캐릭터 리소스' },
      { name: '019.jpg', caption: '테르비스 "칼리오페" 인게임 캐릭터 리소스' },
      { name: '020.jpg', caption: '테르비스 "린" 인게임 캐릭터 리소스' },
      { name: '021.jpg', caption: '테르비스 "앨리스" 인게임 캐릭터 리소스' },
      { name: '022.jpg', caption: '테르비스 "로잘린" 인게임 캐릭터 리소스' },
      { name: '023.jpg', caption: '테르비스 "데이지" 인게임 캐릭터 리소스' },
      { name: '024.jpg', caption: '테르비스 "리디아" 인게임 캐릭터 리소스' },
      { name: '025.jpg', caption: '테르비스 "코코" 인게임 캐릭터 리소스' },
      { name: '026.jpg', caption: '테르비스 "플로이드" 인게임 캐릭터 리소스' },
      { name: '027.jpg', caption: '테르비스 "샬롯" 인게임 캐릭터 리소스' },
      { name: '028.jpg', caption: '테르비스 NPC "소년 상인" 인게임 캐릭터 리소스' },
      { name: '029.jpg', caption: '테르비스 NPC "토끼 수인" 인게임 캐릭터 리소스' },
      { name: '030.jpg', caption: '테르비스 엘리트 몬스터 "방랑기사" 인게임 캐릭터 리소스' },
      { name: '031.jpg', caption: '테르비스 "판도라" 인게임 캐릭터 리소스' },
      { name: '032.jpg', caption: '테르비스 "가넷" 인게임 캐릭터 리소스' },
      { name: '032_2.jpg', caption: '테르비스 "수영복 리디아" 인게임 캐릭터 리소스' },
      { name: '033.jpg', caption: '테르비스 "수영복 이자벨" 인게임 캐릭터 리소스' },
      { name: '034.jpg', caption: '테르비스 NPC "그로수스, 루티나 경비병" 인게임 캐릭터 리소스' },
      { name: '035.jpg', caption: '테르비스 몬스터 "해적선원 칼잡이" 인게임 캐릭터 리소스' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  '소울워커': {
    title: '소울워커 · SOULWORKER',
    studio: 'LION GAMES · 2021',
    role: '코스튬 일러스트 · 아카식레코드 · 무기 원화',
    folder: '소울워커',
    thumb: '038.jpg',
    files: [
      { name: '037.jpg', caption: '소울워커 "이나비" 유치원 버전 SD 일러스트' },
      { name: '038.jpg', caption: '소울워커 "릴리" 만우절 코스튬 일러스트' },
      { name: '039.jpg', caption: '소울워커 "치이" 만우절 코스튬 일러스트' },
      { name: '040.jpg', caption: '소울워커 전략전 프로모션 일러스트' },
      { name: '041.jpg', caption: '소울워커 하루와 켄트 컷씬 일러스트' },
      { name: '042.jpg', caption: '소울워커 아카식레코드 아나시스 일러스트' },
      { name: '043.jpg', caption: '소울워커 NPC 스미스 일러스트' },
      { name: '044.jpg', caption: '소울워커 NPC 알피 일러스트' },
      { name: '045.jpg', caption: '소울워커 NPC 하이푸 일러스트' },
      { name: '046.jpg', caption: '소울워커 NPC 별숲리그 병사A 일러스트' },
      { name: '047.jpg', caption: '소울워커 NPC 별숲리그 병사B 일러스트' },
      { name: '048.jpg', caption: '소울워커 레이드기어 아이템 아이콘' },
      { name: '049.jpg', caption: '소울워커 보스데자이어 일러스트1' },
      { name: '050.jpg', caption: '소울워커 보스데자이어 일러스트2' },
      { name: '051.jpg', caption: '소울워커 이나비 여름무기 아바타(스킨 컨셉 작업)' },
      { name: '052.jpg', caption: '소울워커 이나비 프리스트 무기 아바타 원화' },
      { name: '053.jpg', caption: '소울워커 잡몹1 컨셉 원화' },
      { name: '054.jpg', caption: '소울워커 잡몹2 컨셉 원화' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  '섬란카구라 폭유질주': {
    title: '섬란카구라 폭유질주',
    studio: 'GRAVITY · 2017–2020',
    role: '캐릭터 일러스트 · 도트 · 컷씬 원화',
    folder: '섬란카구라 폭유질주',
    thumb: '071.jpg',
    files: [
      { name: '066.jpg', caption: '섬란카구라 폭유질주 "유미" 레이드 컷씬 일러스트' },
      { name: '067.jpg', caption: '섬란카구라 폭유질주 "유미" 파자마 파티 일러스트' },
      { name: '068.jpg', caption: '섬란카구라 폭유질주 "미라이" 소공녀 일러스트' },
      { name: '069.jpg', caption: '섬란카구라 폭유질주 "무라사키" 찜질방 일러스트' },
      { name: '070.jpg', caption: '섬란카구라 폭유질주 "카츠라기" 바캉스 일러스트' },
      { name: '071.jpg', caption: '섬란카구라 폭유질주 "아스카" 각성 일러스트' },
      { name: '072.jpg', caption: '섬란카구라 폭유질주 "유미" 화이트데이 일러스트' },
      { name: '073.jpg', caption: '섬란카구라 폭유질주 "히카게" 절대비전인법 일러스트' },
      { name: '074.jpg', caption: '섬란카구라 폭유질주 "몬스터" 일러스트' },
      { name: '075.jpg', caption: '섬란카구라 폭유질주 "보스 몬스터" 일러스트' },
      { name: '076.jpg', caption: '섬란카구라 폭유질주 "보스" 레이드 컷씬 일러스트' },
      { name: '077.jpg', caption: '섬란카구라 폭유질주 "캐릭터 도트" 작업물 모음' },
      { name: '078.jpg', caption: '섬란카구라 폭유질주 "몬스터 도트" 작업물 모음 ' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  '로봇걸즈': {
    title: '로봇걸즈 · Robot Girls Z',
    studio: 'GRAVITY · R&D',
    role: 'IP 활용 캐릭터 R&D · 모에화 리뉴얼',
    folder: '로봇걸즈',
    thumb: '060.jpg',
    files: [
      { name: '056.jpg', caption: '로봇걸즈z프로젝트 "그레짱" 리뉴얼 일러스트, SD캐릭터' },
      { name: '057.jpg', caption: '로봇걸즈z프로젝트 "겟짱(겟타2)" 리뉴얼 일러스트' },
      { name: '058.jpg', caption: '로봇걸즈z프로젝트 "첩보장관 아르고스" 리뉴얼 일러스트' },
      { name: '059.jpg', caption: '로봇걸즈z프로젝트 "첩보장관 아르고스" SD 버전' },
      { name: '060.jpg', caption: '로봇걸즈z프로젝트 "티저영상 컷씬 원화 속 건물 간판 라면CF 이미지"' },
      { name: '061.jpg', caption: '로봇걸즈z프로젝트 "티저영상" 컷씬 원화 일러스트' },
      { name: '062.jpg', caption: '로봇걸즈z프로젝트 "마징가 주먹 리소스" 일러스트' },
      { name: '063.jpg', caption: '로봇걸즈z프로젝트 "그레이트 마징카이저" 코스튬 콘셉트 R&D' },
      { name: '064.jpg', caption: '로봇걸즈z프로젝트 "그레이트 마징카이저" 콘셉트 R&D' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  'original': {
    title: 'Original Designs',
    studio: 'PERSONAL WORKS',
    role: '오리지널 캐릭터 디자인 · 컨셉 아트',
    folder: 'original',
    thumb: '003.jpg',
    files: [
      { name: '003.jpg',    caption: '캐릭터 포트레이트 일러스트' },
      { name: '004_01.jpg', caption: '캐릭터 시트 디자인' },
      { name: '005_2.jpg',  caption: 'Angel Loves Jesus' },
      { name: '005_3.jpg',  caption: 'Agape' },
      { name: '006_01.jpg', caption: '골목 일러스트' },
      { name: '006_02.jpg', caption: '여우 메이드 린' },
      { name: '082.jpg',    caption: '루비 시트' },
      { name: '084.jpg',    caption: '루비 실루엣 디자인 시안' },
      { name: '089.jpg',    caption: 'Dragon Girl SD' },
      { name: '091.jpg',    caption: '장보고 돌아가는 마법사' },
      { name: '092.jpg',    caption: '마녀 이리스' },
    ],
  },

};

// 갤러리 데이터를 라이트박스가 사용할 수 있는 형태로 변환
// (이 부분은 수정하지 마세요)
window.GAME_GALLERY_ITEMS = (() => {
  const out = {};
  const base = 'assets/images/game';
  for (const key in window.GAME_GALLERIES) {
    const g = window.GAME_GALLERIES[key];
    out[key] = g.files.map(f => ({
      src: `${base}/${g.folder}/${f.name}`,
      caption: f.caption,
      alt: f.caption,
    }));
  }
  return out;
})();
