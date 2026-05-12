(() => {
  // 1) 모바일 메뉴 토글
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      navToggle.textContent = mobileMenu.classList.contains('hidden') ? '≡' : '×';
    });
    mobileMenu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        navToggle.textContent = '≡';
      })
    );
  }

  // 2) 스크롤 리빌 애니메이션
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // 3) 헤더 스크롤 시 진해지기
  const header = document.querySelector('header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 8) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 4) 게임 카드 썸네일 + 카운트 자동 주입
  //    galleries.js 의 thumb / files 를 읽어서 카드 안 .gallery-thumb img와 .gallery-count 노드에 채워넣음
  document.querySelectorAll('[data-gallery-id]').forEach((card) => {
    const key = card.getAttribute('data-gallery-id');
    const g = window.GAME_GALLERIES && window.GAME_GALLERIES[key];
    if (!g) return;
    const thumb = card.querySelector('img.gallery-thumb');
    if (thumb && !thumb.getAttribute('src')) {
      thumb.src = `assets/images/game/${g.folder}/${g.thumb}`;
      thumb.alt = `${g.title} 대표 이미지`;
    }
    const countBadge = card.querySelector('.gallery-count');
    if (countBadge && !countBadge.textContent.trim()) {
      const n = g.files.length;
      const hasGif = g.files.some(f => /\.gif$/i.test(f.name));
      countBadge.textContent = hasGif ? `${n} GIF 보기 ↗` : `${n}장 보기 ↗`;
    }
  });

  // 5) 이미지 라이트박스 (멀티 갤러리 + 줌/팬)
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('.lightbox-img');
    const lbCaption = lightbox.querySelector('.lightbox-caption');
    const lbCounter = lightbox.querySelector('.lightbox-counter');
    const lbClose = lightbox.querySelector('.lightbox-close');
    const lbPrev = lightbox.querySelector('.lightbox-prev');
    const lbNext = lightbox.querySelector('.lightbox-next');
    const stage = lightbox.querySelector('.lightbox-stage');

    // 콘텐츠 figure 안 이미지 자동 수집 (라이트박스 자체 figure 제외)
    const figureImgs = Array.from(document.querySelectorAll('figure:not(.lightbox-stage) img'));
    figureImgs.forEach((img) => img.classList.add('zoomable'));

    let items = [];
    let currentIndex = -1;

    // ─ 줌/팬 상태 ─
    const ZOOM_MIN = 1;
    const ZOOM_MAX = 5;
    const ZOOM_STEP = 0.4;
    const ZOOM_CLICK = 2.2;
    let scale = 1, panX = 0, panY = 0;
    let isDragging = false, didDrag = false;
    let dragStartX = 0, dragStartY = 0, dragStartPanX = 0, dragStartPanY = 0;

    const applyTransform = () => {
      lbImg.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
    };

    const clampPan = () => {
      if (scale <= 1) { panX = 0; panY = 0; return; }
      const r = lbImg.getBoundingClientRect();
      const overX = Math.max(0, (r.width - window.innerWidth) / 2 + 80);
      const overY = Math.max(0, (r.height - window.innerHeight) / 2 + 80);
      panX = Math.max(-overX, Math.min(overX, panX));
      panY = Math.max(-overY, Math.min(overY, panY));
    };

    const setZoom = (next, focusX, focusY) => {
      const prev = scale;
      const newScale = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, next));
      if (newScale === prev) return;
      if (typeof focusX === 'number' && typeof focusY === 'number' && prev > 0) {
        const rect = lbImg.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const offsetX = focusX - cx;
        const offsetY = focusY - cy;
        const ratio = newScale / prev;
        panX = panX - offsetX * (ratio - 1);
        panY = panY - offsetY * (ratio - 1);
      }
      scale = newScale;
      if (scale <= 1) {
        scale = 1; panX = 0; panY = 0;
        lightbox.classList.remove('is-zoomed');
      } else {
        lightbox.classList.add('is-zoomed');
        clampPan();
      }
      applyTransform();
    };

    const resetZoom = () => {
      scale = 1; panX = 0; panY = 0;
      lightbox.classList.remove('is-zoomed');
      lightbox.classList.remove('is-panning');
      const prevTransition = lbImg.style.transition;
      lbImg.style.transition = 'none';
      applyTransform();
      requestAnimationFrame(() => { lbImg.style.transition = prevTransition; });
    };

    const renderAt = (idx) => {
      if (idx < 0 || idx >= items.length) return;
      currentIndex = idx;
      const item = items[idx];
      resetZoom();
      lbImg.src = item.src;
      lbImg.alt = item.alt || '';
      lbCaption.textContent = item.caption || '';
      lbCounter.textContent = `${idx + 1} / ${items.length}`;
      lbPrev.style.visibility = idx === 0 ? 'hidden' : 'visible';
      lbNext.style.visibility = idx === items.length - 1 ? 'hidden' : 'visible';
    };

    const open = (newItems, idx) => {
      items = newItems;
      renderAt(idx);
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
    };

    const close = () => {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
      resetZoom();
      lbImg.src = '';
      items = [];
      currentIndex = -1;
    };

    // figure 썸네일 갤러리 (페이지 전체)
    const buildFigureItems = () => figureImgs.map((img) => {
      const fig = img.closest('figure');
      const cap = fig ? fig.querySelector('figcaption') : null;
      return {
        src: img.currentSrc || img.src,
        alt: img.alt || '',
        caption: cap ? (cap.textContent || '').trim().replace(/\s+/g, ' ') : '',
      };
    });
    figureImgs.forEach((img, idx) => {
      img.addEventListener('click', (e) => {
        e.preventDefault();
        open(buildFigureItems(), idx);
      });
    });

    // 게임 카드 → 해당 갤러리 오픈
    document.querySelectorAll('[data-gallery-id]').forEach((card) => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const key = card.getAttribute('data-gallery-id');
        const gallery = window.GAME_GALLERY_ITEMS && window.GAME_GALLERY_ITEMS[key];
        if (gallery && gallery.length) open(gallery, 0);
      });
    });

    // 버튼 핸들러
    lbClose.addEventListener('click', (e) => { e.stopPropagation(); close(); });
    lbPrev.addEventListener('click', (e) => { e.stopPropagation(); if (currentIndex > 0) renderAt(currentIndex - 1); });
    lbNext.addEventListener('click', (e) => { e.stopPropagation(); if (currentIndex < items.length - 1) renderAt(currentIndex + 1); });

    // 배경 클릭 → 닫기, stage 클릭 → 차단
    stage.addEventListener('click', (e) => e.stopPropagation());
    lightbox.addEventListener('click', () => close());

    // 이미지 클릭 → 확대/축소 토글
    lbImg.addEventListener('click', (e) => {
      e.stopPropagation();
      if (didDrag) { didDrag = false; return; }
      if (scale === 1) {
        setZoom(ZOOM_CLICK, e.clientX, e.clientY);
      } else {
        setZoom(1);
      }
    });
    lbImg.addEventListener('dblclick', (e) => e.preventDefault());

    // 휠 줌
    lightbox.addEventListener('wheel', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      e.preventDefault();
      const dir = e.deltaY < 0 ? 1 : -1;
      setZoom(scale + dir * ZOOM_STEP, e.clientX, e.clientY);
    }, { passive: false });

    // 마우스 팬
    lbImg.addEventListener('mousedown', (e) => {
      if (scale === 1) return;
      e.preventDefault();
      isDragging = true; didDrag = false;
      dragStartX = e.clientX; dragStartY = e.clientY;
      dragStartPanX = panX; dragStartPanY = panY;
      lightbox.classList.add('is-panning');
    });
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;
      if (Math.abs(dx) + Math.abs(dy) > 4) didDrag = true;
      panX = dragStartPanX + dx; panY = dragStartPanY + dy;
      clampPan(); applyTransform();
    });
    window.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      lightbox.classList.remove('is-panning');
    });

    // 터치 팬 (모바일)
    let touchStartX = 0, touchStartY = 0, touchStartPanX = 0, touchStartPanY = 0, isTouching = false;
    lbImg.addEventListener('touchstart', (e) => {
      if (scale === 1) return;
      if (e.touches.length !== 1) return;
      isTouching = true; didDrag = false;
      const t = e.touches[0];
      touchStartX = t.clientX; touchStartY = t.clientY;
      touchStartPanX = panX; touchStartPanY = panY;
    }, { passive: true });
    lbImg.addEventListener('touchmove', (e) => {
      if (!isTouching || e.touches.length !== 1) return;
      const t = e.touches[0];
      const dx = t.clientX - touchStartX;
      const dy = t.clientY - touchStartY;
      if (Math.abs(dx) + Math.abs(dy) > 4) didDrag = true;
      panX = touchStartPanX + dx; panY = touchStartPanY + dy;
      clampPan(); applyTransform();
      e.preventDefault();
    }, { passive: false });
    lbImg.addEventListener('touchend', () => { isTouching = false; });

    // 키보드
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft' && currentIndex > 0 && scale === 1) renderAt(currentIndex - 1);
      else if (e.key === 'ArrowRight' && currentIndex < items.length - 1 && scale === 1) renderAt(currentIndex + 1);
      else if (e.key === '+' || e.key === '=') setZoom(scale + ZOOM_STEP);
      else if (e.key === '-' || e.key === '_') setZoom(scale - ZOOM_STEP);
      else if (e.key === '0') setZoom(1);
    });
  }
})();
