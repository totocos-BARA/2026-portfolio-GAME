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
    title: '테르비스 · TERVIS',
    studio: 'WEBZEN NOVA · 2022–2024',
    role: '캐릭터 원화 · 다이얼로그 일러스트 · Spine 분리',
    folder: '테르비스',
    thumb: '008.jpg',
    files: [
      { name: '008.jpg', caption: '테르비스 · 008' },
      { name: '009.jpg', caption: '테르비스 · 009' },
      { name: '010.jpg', caption: '테르비스 · 010' },
      { name: '011.jpg', caption: '테르비스 · 011' },
      { name: '012.jpg', caption: '테르비스 · 012' },
      { name: '013.jpg', caption: '테르비스 · 013' },
      { name: '014.jpg', caption: '테르비스 · 014' },
      { name: '015.jpg', caption: '테르비스 · 015' },
      { name: '016.jpg', caption: '테르비스 · 016' },
      { name: '017.jpg', caption: '테르비스 · 017' },
      { name: '018.jpg', caption: '테르비스 · 018' },
      { name: '019.jpg', caption: '테르비스 · 019' },
      { name: '020.jpg', caption: '테르비스 · 020' },
      { name: '021.jpg', caption: '테르비스 · 021' },
      { name: '022.jpg', caption: '테르비스 · 022' },
      { name: '023.jpg', caption: '테르비스 · 023' },
      { name: '024.jpg', caption: '테르비스 · 024' },
      { name: '025.jpg', caption: '테르비스 · 025' },
      { name: '026.jpg', caption: '테르비스 · 026' },
      { name: '027.jpg', caption: '테르비스 · 027' },
      { name: '028.jpg', caption: '테르비스 · 028' },
      { name: '029.jpg', caption: '테르비스 · 029' },
      { name: '030.jpg', caption: '테르비스 · 030' },
      { name: '031.jpg', caption: '테르비스 · 031' },
      { name: '032.jpg', caption: '테르비스 · 032' },
      { name: '032_2.jpg', caption: '테르비스 · 032 (variant)' },
      { name: '033.jpg', caption: '테르비스 · 033' },
      { name: '034.jpg', caption: '테르비스 · 034' },
      { name: '035.jpg', caption: '테르비스 · 035' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  '소울워커': {
    title: '소울워커 · SOULWORKER',
    studio: 'LION GAMES · 2021',
    role: '코스튬 일러스트 · 아카식레코드 · 무기 원화',
    folder: '소울워커',
    thumb: '048.jpg',
    files: [
      { name: '037.jpg', caption: '소울워커 · 037' },
      { name: '038.jpg', caption: '소울워커 · 038' },
      { name: '039.jpg', caption: '소울워커 · 039' },
      { name: '040.jpg', caption: '소울워커 · 040' },
      { name: '041.jpg', caption: '소울워커 · 041' },
      { name: '042.jpg', caption: '소울워커 · 042' },
      { name: '043.jpg', caption: '소울워커 · 043' },
      { name: '044.jpg', caption: '소울워커 · 044' },
      { name: '045.jpg', caption: '소울워커 · 045' },
      { name: '046.jpg', caption: '소울워커 · 046' },
      { name: '047.jpg', caption: '소울워커 · 047' },
      { name: '048.jpg', caption: '소울워커 · 048' },
      { name: '049.jpg', caption: '소울워커 · 049' },
      { name: '050.jpg', caption: '소울워커 · 050' },
      { name: '051.jpg', caption: '소울워커 · 051' },
      { name: '052.jpg', caption: '소울워커 · 052' },
      { name: '053.jpg', caption: '소울워커 · 053' },
      { name: '054.jpg', caption: '소울워커 · 054' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  '섬란카구라 폭유질주': {
    title: '섬란카구라 폭유질주',
    studio: 'GRAVITY · 2017–2020',
    role: '캐릭터 일러스트 · 도트 · 컷씬 원화',
    folder: '섬란카구라 폭유질주',
    thumb: '074.jpg',
    files: [
      { name: '066.jpg', caption: '섬란카구라 · 066' },
      { name: '067.jpg', caption: '섬란카구라 · 067' },
      { name: '068.jpg', caption: '섬란카구라 · 068' },
      { name: '069.jpg', caption: '섬란카구라 · 069' },
      { name: '070.jpg', caption: '섬란카구라 · 070' },
      { name: '071.jpg', caption: '섬란카구라 · 071' },
      { name: '072.jpg', caption: '섬란카구라 · 072' },
      { name: '073.jpg', caption: '섬란카구라 · 073' },
      { name: '074.jpg', caption: '섬란카구라 · 074' },
      { name: '075.jpg', caption: '섬란카구라 · 075' },
      { name: '076.jpg', caption: '섬란카구라 · 076' },
      { name: '077.jpg', caption: '섬란카구라 · 077' },
      { name: '078.jpg', caption: '섬란카구라 · 078' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  '로봇걸즈': {
    title: '로봇걸즈 · Robot Girls Z',
    studio: 'GRAVITY · R&D',
    role: 'IP 활용 캐릭터 R&D · 모에화 리뉴얼',
    folder: '로봇걸즈',
    thumb: '056.jpg',
    files: [
      { name: '056.jpg', caption: '로봇걸즈 · 056' },
      { name: '057.jpg', caption: '로봇걸즈 · 057' },
      { name: '058.jpg', caption: '로봇걸즈 · 058' },
      { name: '059.jpg', caption: '로봇걸즈 · 059' },
      { name: '060.jpg', caption: '로봇걸즈 · 060' },
      { name: '061.jpg', caption: '로봇걸즈 · 061' },
      { name: '062.jpg', caption: '로봇걸즈 · 062' },
      { name: '063.jpg', caption: '로봇걸즈 · 063' },
      { name: '064.jpg', caption: '로봇걸즈 · 064' },
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
      { name: '003.jpg',    caption: 'Original · 003' },
      { name: '004_01.jpg', caption: 'Original · 004' },
      { name: '005_2.jpg',  caption: 'Original · 005 (variant 1)' },
      { name: '005_3.jpg',  caption: 'Original · 005 (variant 2)' },
      { name: '006_01.jpg', caption: 'Original · 006 (variant 1)' },
      { name: '006_02.jpg', caption: 'Original · 006 (variant 2)' },
      { name: '082.jpg',    caption: 'Original · 082' },
      { name: '084.jpg',    caption: 'Original · 084' },
      { name: '089.jpg',    caption: 'Original · 089' },
      { name: '091.jpg',    caption: 'Original · 091' },
      { name: '092.jpg',    caption: 'Original · 092' },
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
