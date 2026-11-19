(() => {
  'use strict';

  const CATEGORIES = ['家常菜', '荤菜', '素菜', '汤羹', '主食', '凉菜', '烘焙甜品', '其他'];

  const CATEGORY_THEMES = {
    全部: {
      color: '#23734E',
      bg: '#FFFFFF',
      border: '#DCE9E1',
      grad: 'linear-gradient(135deg, #35A672, #247B54)',
      softGrad: 'linear-gradient(135deg, #E8F7EE, #F4FCF7)',
      shadow: 'rgba(45, 142, 98, 0.28)'
    },
    家常菜: {
      color: '#D66524',
      bg: '#FFF4EB',
      border: '#FADBC4',
      grad: 'linear-gradient(135deg, #F58F4B, #DE6724)',
      softGrad: 'linear-gradient(135deg, #FFE8D4, #FFF5EC)',
      shadow: 'rgba(232, 122, 62, 0.28)'
    },
    荤菜: {
      color: '#C94444',
      bg: '#FDEFEF',
      border: '#F7D0D0',
      grad: 'linear-gradient(135deg, #EB6868, #CC4343)',
      softGrad: 'linear-gradient(135deg, #FCDCDC, #FFF1F1)',
      shadow: 'rgba(217, 78, 78, 0.26)'
    },
    素菜: {
      color: '#258052',
      bg: '#EBF8F0',
      border: '#CAEBD7',
      grad: 'linear-gradient(135deg, #43B479, #278855)',
      softGrad: 'linear-gradient(135deg, #D5F3E2, #EFFBF4)',
      shadow: 'rgba(46, 139, 87, 0.26)'
    },
    汤羹: {
      color: '#B87A14',
      bg: '#FEF7E6',
      border: '#F7E2B2',
      grad: 'linear-gradient(135deg, #F0B43A, #CF8B16)',
      softGrad: 'linear-gradient(135deg, #FCEAC2, #FFF9EB)',
      shadow: 'rgba(212, 148, 30, 0.26)'
    },
    主食: {
      color: '#955B2B',
      bg: '#F9F1E8',
      border: '#EAD6C0',
      grad: 'linear-gradient(135deg, #C78950, #9D612D)',
      softGrad: 'linear-gradient(135deg, #F0DEC9, #FAF4ED)',
      shadow: 'rgba(166, 107, 55, 0.26)'
    },
    凉菜: {
      color: '#1C7F92',
      bg: '#E9F8FA',
      border: '#C4EAF0',
      grad: 'linear-gradient(135deg, #35B0C5, #1B869B)',
      softGrad: 'linear-gradient(135deg, #CEF0F5, #EFFBFC)',
      shadow: 'rgba(32, 148, 168, 0.26)'
    },
    烘焙甜品: {
      color: '#B8427D',
      bg: '#FCEFF6',
      border: '#F5CEE2',
      grad: 'linear-gradient(135deg, #E46CA6, #BE447F)',
      softGrad: 'linear-gradient(135deg, #FAD7E9, #FFF2F8)',
      shadow: 'rgba(194, 82, 139, 0.26)'
    },
    其他: {
      color: '#6752B8',
      bg: '#F3F0FC',
      border: '#DDD5F7',
      grad: 'linear-gradient(135deg, #8F7AE0, #6953BD)',
      softGrad: 'linear-gradient(135deg, #E5DDFB, #F6F3FE)',
      shadow: 'rgba(117, 96, 200, 0.26)'
    }
  };

  function getCatTheme(cat) {
    return CATEGORY_THEMES[cat] || CATEGORY_THEMES.家常菜;
  }

  function getCatIconPath(cat) {
    const icons = {
      家常菜: '<path d="M3 11h18"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 4v3"/><path d="M8.5 5.5 10 7.5"/><path d="M15.5 5.5 14 7.5"/>',
      荤菜: '<path d="M15.4 7.4c-1.8-1.8-4.7-1.9-6.6-.2L6.5 9.3c-1.7 1.5-1.9 4.2-.3 5.8 1.6 1.6 4.3 1.4 5.8-.3l2.1-2.3c1.7-1.9 1.6-4.8-.2-6.6Z"/><path d="m16.5 16.5 3 3"/><circle cx="19.5" cy="19.5" r="1.5"/>',
      素菜: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
      汤羹: '<path d="M4 11h16a8 8 0 0 1-16 0Z"/><path d="M7 20h10"/><path d="M9 6c0-1.1.9-2 1-3"/><path d="M14 6c0-1.1.9-2 1-3"/>',
      主食: '<path d="M4 12h16a8 8 0 0 1-16 0Z"/><path d="M6 12c0-2.5 2.7-4.5 6-4.5s6 2 6 4.5"/><path d="M8 20h8"/>',
      凉菜: '<path d="M12 2v20"/><path d="m19 9-7 7-7-7"/><path d="m5 15 7-7 7 7"/>',
      烘焙甜品: '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M12 7v4"/><path d="M12 3a1.5 1.5 0 0 1 1 2.6c-.6.5-1 .9-1 1.4 0-.5-.4-.9-1-1.4A1.5 1.5 0 0 1 12 3Z"/>',
      其他: '<path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/>'
    };
    return icons[cat] || icons.其他;
  }
  const DB_NAME = 'dachu_xiaoji_db';
  const DB_VERSION = 1;
  const STORE_NAME = 'dishes';
  const LEGACY_LS_KEY = 'my-dishes-v1';
  const FALLBACK_LS_KEY = 'dachu_xiaoji_fallback_v4';
  const PREFS_KEY = 'dachu_xiaoji_prefs_v4';

  const state = {
    dishes: [],
    activeTab: 'dishes',
    search: '',
    category: '全部',
    sort: 'recentCook',
    viewMode: 'grid', // 'grid' | 'list'
    calYear: new Date().getFullYear(),
    calMonth: new Date().getMonth(), // 0-11
    selectedDate: todayStr(),
    editingId: null,
    editingPhoto: null,
    editingCategory: '家常菜',
    detailId: null,
    randomCategory: '全部',
    randomDishId: null,
    useFallbackStorage: false,
    db: null,
    toastTimer: null,
    undoAction: null
  };

  // ===== Helpers =====
  const $ = (id) => document.getElementById(id);

  function todayStr() {
    return formatDate(new Date());
  }

  function formatDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function formatPrettyDate(str) {
    if (!str) return '尚未记录';
    const today = todayStr();
    const yest = formatDate(new Date(Date.now() - 86400000));
    if (str === today) return '今天';
    if (str === yest) return '昨天';
    const [y, m, d] = str.split('-');
    const curY = String(new Date().getFullYear());
    return y === curY ? `${Number(m)}月${Number(d)}日` : `${y}年${Number(m)}月${Number(d)}日`;
  }

  function escapeHtml(s) {
    return String(s ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function uid() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return 'dish_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 9);
  }

  function getLastCookDate(dish) {
    if (!dish.logs || dish.logs.length === 0) return '';
    return [...dish.logs].sort().at(-1) || '';
  }

  function normalizeDish(raw) {
    const logs = Array.isArray(raw.logs)
      ? raw.logs.filter((x) => typeof x === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x)).sort()
      : [];
    const countNum = Number.isFinite(Number(raw.count)) ? Math.max(0, Math.floor(Number(raw.count))) : logs.length;
    const count = Math.max(countNum, logs.length);
    const cat = CATEGORIES.includes(raw.category) ? raw.category : '家常菜';
    let ingredients = [];
    if (Array.isArray(raw.ingredients)) {
      ingredients = raw.ingredients
        .map((item) => {
          if (typeof item === 'string') {
            return { name: item.trim(), amount: '', checked: false };
          }
          return {
            name: String(item?.name || '').trim(),
            amount: String(item?.amount || '').trim(),
            checked: Boolean(item?.checked)
          };
        })
        .filter((i) => i.name);
    }
    const createdAt = Number(raw.createdAt || raw.created || Date.now());
    const updatedAt = Number(raw.updatedAt || createdAt);

    return {
      id: String(raw.id || uid()),
      name: String(raw.name || '未命名菜品').trim(),
      category: cat,
      photo: typeof raw.photo === 'string' && raw.photo.startsWith('data:image/') ? raw.photo : null,
      count,
      logs,
      ingredients,
      steps: String(raw.steps || raw.recipe || '').trim(),
      note: String(raw.note || '').trim(),
      createdAt,
      updatedAt
    };
  }

  function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  // ===== IndexedDB Storage =====
  function openDB() {
    return new Promise((resolve, reject) => {
      if (!('indexedDB' in window)) {
        reject(new Error('IndexedDB unavailable'));
        return;
      }
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function initStorage() {
    try {
      state.db = await openDB();
    } catch {
      state.useFallbackStorage = true;
    }

    let list = await loadAllDishes();

    // Auto-migrate legacy localStorage data (from V1-V3 if present on same origin)
    if (list.length === 0) {
      try {
        const legacyRaw = localStorage.getItem(LEGACY_LS_KEY);
        if (legacyRaw) {
          const parsed = JSON.parse(legacyRaw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            list = parsed.map(normalizeDish);
            await saveAllDishes(list);
            showToast(`已自动迁移旧版 ${list.length} 道菜品`);
          }
        }
      } catch {
        // ignore invalid legacy data
      }
    }

    state.dishes = list;
  }

  function loadAllDishes() {
    if (state.useFallbackStorage || !state.db) {
      try {
        const raw = localStorage.getItem(FALLBACK_LS_KEY);
        return Promise.resolve(raw ? JSON.parse(raw).map(normalizeDish) : []);
      } catch {
        return Promise.resolve([]);
      }
    }
    return new Promise((resolve) => {
      const tx = state.db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();
      req.onsuccess = () => resolve((req.result || []).map(normalizeDish));
      req.onerror = () => resolve([]);
    });
  }

  function putDish(dish) {
    if (state.useFallbackStorage || !state.db) {
      try {
        localStorage.setItem(FALLBACK_LS_KEY, JSON.stringify(state.dishes));
      } catch {
        showToast('存储空间不足，请先导出备份并清理部分大图');
      }
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      const tx = state.db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).put(dish);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  function removeDishFromStore(id) {
    if (state.useFallbackStorage || !state.db) {
      localStorage.setItem(FALLBACK_LS_KEY, JSON.stringify(state.dishes));
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      const tx = state.db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  function saveAllDishes(list) {
    if (state.useFallbackStorage || !state.db) {
      localStorage.setItem(FALLBACK_LS_KEY, JSON.stringify(list));
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      const tx = state.db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.clear();
      for (const item of list) {
        store.put(item);
      }
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  function loadPrefs() {
    try {
      const p = JSON.parse(localStorage.getItem(PREFS_KEY) || '{}');
      if (p.viewMode === 'list' || p.viewMode === 'grid') state.viewMode = p.viewMode;
      if (p.sort) state.sort = p.sort;
      if (p.dismissInstall) return true;
    } catch {
      // ignore
    }
    return false;
  }

  function savePrefs(extra = {}) {
    try {
      const prev = JSON.parse(localStorage.getItem(PREFS_KEY) || '{}');
      localStorage.setItem(PREFS_KEY, JSON.stringify({
        ...prev,
        viewMode: state.viewMode,
        sort: state.sort,
        ...extra
      }));
    } catch {
      // ignore
    }
  }

  // ===== Toast =====
  function showToast(msg, undoFn = null) {
    clearTimeout(state.toastTimer);
    $('toastText').textContent = msg;
    const undoBtn = $('toastUndoBtn');
    state.undoAction = undoFn;
    if (undoFn) {
      undoBtn.classList.remove('hidden');
    } else {
      undoBtn.classList.add('hidden');
    }
    const toast = $('toast');
    toast.classList.add('show');
    state.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
      state.undoAction = null;
    }, undoFn ? 4200 : 2500);
  }

  // ===== Image Compression =====
  function compressImage(file, maxSide = 1080, quality = 0.82) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error('读取图片失败'));
      reader.onload = () => {
        const img = new Image();
        img.onerror = () => reject(new Error('解析图片失败'));
        img.onload = () => {
          let { width, height } = img;
          const scale = Math.min(1, maxSide / Math.max(width, height));
          width = Math.max(1, Math.round(width * scale));
          height = Math.max(1, Math.round(height * scale));
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  // ===== SVG Placeholder for dishes without photo =====
  function dishPlaceholderSvg(cat) {
    const t = getCatTheme(cat);
    return `
      <div class="dish-placeholder" style="background:${t.softGrad};color:${t.color}">
        <div class="dish-placeholder-icon" style="color:${t.color}">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
            ${getCatIconPath(cat)}
          </svg>
        </div>
        <span>${escapeHtml(cat)}</span>
      </div>`;
  }

  function dishMiniThumbIcon(cat) {
    const t = getCatTheme(cat);
    return `<div style="width:100%;height:100%;display:grid;place-items:center;background:${t.softGrad};color:${t.color}">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
        ${getCatIconPath(cat)}
      </svg>
    </div>`;
  }

  // ===== Core Mutations =====
  async function incrementDishCook(dishId, dateStr = todayStr(), allowUndo = true) {
    const dish = state.dishes.find((d) => d.id === dishId);
    if (!dish) return;
    const prevCount = dish.count;
    const prevLogs = [...dish.logs];
    const prevUpdated = dish.updatedAt;

    dish.count += 1;
    dish.logs.push(dateStr);
    dish.logs.sort();
    dish.updatedAt = Date.now();
    await putDish(dish);
    renderAll();
    if (state.detailId === dish.id && $('detailBackdrop').classList.contains('open')) {
      renderDetail(dish);
    }

    const label = dateStr === todayStr()
      ? `已记录「${dish.name}」第 ${dish.count} 次`
      : `已补记 ${formatPrettyDate(dateStr)} 做了「${dish.name}」`;

    showToast(label, allowUndo ? async () => {
      dish.count = prevCount;
      dish.logs = prevLogs;
      dish.updatedAt = prevUpdated;
      await putDish(dish);
      renderAll();
      if (state.detailId === dish.id && $('detailBackdrop').classList.contains('open')) {
        renderDetail(dish);
      }
      showToast('已撤销刚才的记录');
    } : null);
  }

  async function removeCookLogAt(dishId, logIndex) {
    const dish = state.dishes.find((d) => d.id === dishId);
    if (!dish || logIndex < 0 || logIndex >= dish.logs.length) return;
    dish.logs.splice(logIndex, 1);
    dish.count = Math.max(dish.logs.length, dish.count - 1);
    dish.updatedAt = Date.now();
    await putDish(dish);
    renderAll();
    renderDetail(dish);
    showToast('已删除该次制作日期');
  }

  // ===== Render: Header & Categories & Dishes =====
  function renderHeader() {
    const totalDishes = state.dishes.length;
    const totalCooks = state.dishes.reduce((sum, d) => sum + d.count, 0);
    $('headerSummary').textContent = `${totalDishes} 道菜 · 累计 ${totalCooks} 次`;
  }

  function renderCategoryBar() {
    const counts = { 全部: state.dishes.length };
    for (const c of CATEGORIES) counts[c] = 0;
    for (const d of state.dishes) {
      counts[d.category] = (counts[d.category] || 0) + 1;
    }

    const cats = ['全部', ...CATEGORIES];
    $('categoryBar').innerHTML = cats.map((cat) => {
      const t = getCatTheme(cat);
      const style = `--chip-bg:${t.bg};--chip-border:${t.border};--chip-color:${t.color};--chip-dot:${t.color};--chip-active-bg:${t.grad};--chip-shadow:${t.shadow}`;
      return `
      <button
        type="button"
        class="cat-chip ${state.category === cat ? 'active' : ''}"
        style="${style}"
        data-cat="${escapeHtml(cat)}"
        role="tab"
        aria-selected="${state.category === cat}"
      >
        <span class="cat-dot"></span>
        <span>${escapeHtml(cat)}</span>
        <span class="cat-count">${counts[cat] || 0}</span>
      </button>
    `;
    }).join('');
  }

  function getFilteredDishes() {
    const q = state.search.trim().toLowerCase();
    let list = state.dishes.filter((d) => {
      if (state.category !== '全部' && d.category !== state.category) return false;
      if (!q) return true;
      const hay = [
        d.name,
        d.category,
        d.note,
        d.steps,
        ...(d.ingredients || []).map((i) => `${i.name} ${i.amount}`)
      ].join(' ').toLowerCase();
      return hay.includes(q);
    });

    list = [...list];
    if (state.sort === 'count') {
      list.sort((a, b) => b.count - a.count || b.updatedAt - a.updatedAt);
    } else if (state.sort === 'newest') {
      list.sort((a, b) => b.createdAt - a.createdAt);
    } else if (state.sort === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
    } else {
      // recentCook
      list.sort((a, b) => {
        const da = getLastCookDate(a);
        const db = getLastCookDate(b);
        if (da !== db) return db.localeCompare(da);
        return b.updatedAt - a.updatedAt;
      });
    }
    return list;
  }

  function renderDishes() {
    const grid = $('dishGrid');
    const empty = $('dishEmpty');
    grid.classList.toggle('list-mode', state.viewMode === 'list');
    $('viewGridBtn').classList.toggle('active', state.viewMode === 'grid');
    $('viewListBtn').classList.toggle('active', state.viewMode === 'list');

    document.querySelectorAll('#sortPills .sort-pill').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.sort === state.sort);
    });

    const filtered = getFilteredDishes();
    if (filtered.length === 0) {
      grid.innerHTML = '';
      empty.classList.remove('hidden');
      if (state.dishes.length === 0) {
        empty.innerHTML = `
          <div class="empty-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
              <line x1="6" y1="17" x2="18" y2="17"/>
            </svg>
          </div>
          <h3>开始你的专属厨房记录吧</h3>
          <p>导入做过的菜品照片、记录制作次数、食材清单与做法心得，让每一顿好饭都有迹可循。</p>
          <div class="empty-actions">
            <button type="button" class="btn btn-primary btn-sm" id="emptyAddBtn">＋ 记下第一道菜</button>
            <button type="button" class="btn btn-soft btn-sm" id="emptyDemoBtn">先导入 3 道示例菜体验</button>
          </div>`;
        $('emptyAddBtn').onclick = () => openEditor();
        $('emptyDemoBtn').onclick = () => addDemoDishes();
      } else {
        empty.innerHTML = `
          <div class="empty-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="7.5"/><line x1="20" y1="20" x2="16.4" y2="16.4"/>
            </svg>
          </div>
          <h3>没有找到匹配的菜品</h3>
          <p>试试更换关键词或切换回「全部」分类看看。</p>
          <div class="empty-actions">
            <button type="button" class="btn btn-soft btn-sm" id="resetFilterBtn">重置筛选条件</button>
          </div>`;
        $('resetFilterBtn').onclick = () => {
          state.search = '';
          state.category = '全部';
          $('searchInput').value = '';
          $('searchClearBtn').classList.remove('show');
          renderAll();
        };
      }
      return;
    }

    empty.classList.add('hidden');
    grid.innerHTML = filtered.map((d) => {
      const lastDate = getLastCookDate(d);
      const t = getCatTheme(d.category);
      const subText = d.note || (d.ingredients.length ? `食材：${d.ingredients.slice(0, 3).map((i) => i.name).join('、')}` : '点击查看做法或补充食材');
      return `
        <article class="dish-card" data-dish-id="${escapeHtml(d.id)}">
          <div class="dish-cover">
            ${d.photo ? `<img src="${d.photo}" alt="${escapeHtml(d.name)}" loading="lazy">` : dishPlaceholderSvg(d.category)}
            <span class="dish-cat-badge" style="--badge-color:${t.color}">${escapeHtml(d.category)}</span>
            <span class="dish-count-pill">做过 ${d.count} 次</span>
          </div>
          <div class="dish-body">
            <div class="dish-name">${escapeHtml(d.name)}</div>
            <div class="dish-note">${escapeHtml(subText)}</div>
            <div class="dish-footer">
              <span class="dish-last-date">${lastDate ? formatPrettyDate(lastDate) : '还没做过'}</span>
              <button type="button" class="quick-plus-btn" style="--plus-bg:${t.bg};--plus-color:${t.color}" data-quick-add="${escapeHtml(d.id)}" aria-label="记录做了一次 ${escapeHtml(d.name)}">
                ＋1
              </button>
            </div>
          </div>
        </article>`;
    }).join('');
  }

  // ===== Render: Calendar =====
  function buildDateLogMap() {
    const map = new Map(); // YYYY-MM-DD -> [{ dish, countOnDay }]
    for (const dish of state.dishes) {
      const perDay = new Map();
      for (const dt of dish.logs) {
        perDay.set(dt, (perDay.get(dt) || 0) + 1);
      }
      for (const [dt, cnt] of perDay.entries()) {
        if (!map.has(dt)) map.set(dt, []);
        map.get(dt).push({ dish, countOnDay: cnt });
      }
    }
    return map;
  }

  function renderCalendar() {
    const y = state.calYear;
    const m = state.calMonth;
    $('calMonthLabel').textContent = `${y}年${m + 1}月`;

    const logMap = buildDateLogMap();
    const monthPrefix = `${y}-${String(m + 1).padStart(2, '0')}-`;
    let activeDays = 0;
    let totalCooks = 0;
    for (const [dt, entries] of logMap.entries()) {
      if (dt.startsWith(monthPrefix)) {
        activeDays += 1;
        totalCooks += entries.reduce((s, e) => s + e.countOnDay, 0);
      }
    }
    $('calMonthDays').textContent = `${activeDays} 天`;
    $('calMonthCooks').textContent = `${totalCooks} 次`;

    const firstDay = new Date(y, m, 1);
    const startOffset = (firstDay.getDay() + 6) % 7; // Monday = 0
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const today = todayStr();

    let cells = '';
    for (let i = 0; i < startOffset; i++) {
      cells += `<div class="cal-cell empty"></div>`;
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const dt = `${y}-${String(m + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const entries = logMap.get(dt) || [];
      const dayCooks = entries.reduce((s, e) => s + e.countOnDay, 0);
      const cls = [
        'cal-cell',
        dayCooks > 0 ? 'has-cook' : '',
        dt === today ? 'today' : '',
        dt === state.selectedDate ? 'selected' : ''
      ].filter(Boolean).join(' ');
      const dotCount = Math.min(3, dayCooks);
      const dots = dotCount > 0 ? `<div class="cal-dot-row">${'<span class="cal-dot"></span>'.repeat(dotCount)}</div>` : '<div class="cal-dot-row"></div>';
      cells += `<button type="button" class="${cls}" data-cal-date="${dt}"><span>${day}</span>${dots}</button>`;
    }
    $('calDaysGrid').innerHTML = cells;

    renderSelectedDayLogs(logMap);
  }

  function renderSelectedDayLogs(logMap) {
    const dt = state.selectedDate;
    $('selectedDayTitle').textContent = `${formatPrettyDate(dt)}的做菜记录`;
    const entries = logMap.get(dt) || [];
    const container = $('dayLogList');
    if (entries.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="padding:26px 16px;margin-top:0">
          <p style="margin-bottom:12px">这一天还没有做菜记录</p>
          <button type="button" class="btn btn-soft btn-sm" id="dayEmptyBackfillBtn">＋ 为这一天补记一道菜</button>
        </div>`;
      $('dayEmptyBackfillBtn').onclick = () => openBackfillSheet(dt);
      return;
    }

    container.innerHTML = entries.map(({ dish, countOnDay }) => `
      <div class="day-log-item" data-open-detail="${escapeHtml(dish.id)}">
        <div class="day-log-thumb">
          ${dish.photo
            ? `<img src="${dish.photo}" alt="${escapeHtml(dish.name)}">`
            : dishMiniThumbIcon(dish.category)}
        </div>
        <div class="day-log-info">
          <strong>${escapeHtml(dish.name)}</strong>
          <span>${escapeHtml(dish.category)} · 累计做过 ${dish.count} 次</span>
        </div>
        <span class="day-log-badge">${countOnDay > 1 ? `当天 ${countOnDay} 次` : '已打卡'}</span>
      </div>
    `).join('');
  }

  // ===== Render: Ranking & Stats =====
  function renderRanking() {
    const totalDishes = state.dishes.length;
    const totalCooks = state.dishes.reduce((s, d) => s + d.count, 0);
    const curMonthPrefix = todayStr().slice(0, 7);
    const monthCooks = state.dishes.reduce(
      (s, d) => s + d.logs.filter((l) => l.startsWith(curMonthPrefix)).length,
      0
    );

    const catMap = {};
    for (const d of state.dishes) {
      catMap[d.category] = (catMap[d.category] || 0) + 1;
    }
    const sortedCats = Object.entries(catMap).sort((a, b) => b[1] - a[1]);

    $('statTotalCooks').innerHTML = `${totalCooks}<small>次</small>`;
    $('statTotalDishes').innerHTML = `${totalDishes}<small>道</small>`;
    $('statMonthCooks').innerHTML = `${monthCooks}<small>次</small>`;
    $('statTopCat').textContent = sortedCats.length ? sortedCats[0][0] : '—';

    const top10 = [...state.dishes]
      .filter((d) => d.count > 0)
      .sort((a, b) => b.count - a.count || b.updatedAt - a.updatedAt)
      .slice(0, 10);

    const rankEl = $('rankList');
    if (top10.length === 0) {
      rankEl.innerHTML = `<div style="text-align:center;padding:24px 0;color:var(--text-muted);font-size:13px">记录制作次数后，这里会自动展示你最常做的前十道拿手菜</div>`;
    } else {
      const maxCount = top10[0].count || 1;
      rankEl.innerHTML = top10.map((d, idx) => {
        const t = getCatTheme(d.category);
        const medalCls = idx === 0 ? 'top1' : idx === 1 ? 'top2' : idx === 2 ? 'top3' : '';
        const pct = Math.max(8, Math.round((d.count / maxCount) * 100));
        return `
          <div class="rank-item" data-open-detail="${escapeHtml(d.id)}">
            <div class="rank-medal ${medalCls}">${idx + 1}</div>
            <div class="rank-thumb">
              ${d.photo
                ? `<img src="${d.photo}" alt="${escapeHtml(d.name)}">`
                : dishMiniThumbIcon(d.category)}
            </div>
            <div class="rank-main">
              <div class="rank-top-line">
                <strong>${escapeHtml(d.name)}</strong>
                <span style="color:${t.color}">${d.count} 次</span>
              </div>
              <div class="rank-bar-track">
                <div class="rank-bar-fill" style="width:${pct}%;--bar-bg:${t.grad}"></div>
              </div>
            </div>
          </div>`;
      }).join('');
    }

    const catEl = $('catDistList');
    if (sortedCats.length === 0) {
      catEl.innerHTML = `<div style="text-align:center;padding:18px 0;color:var(--text-muted);font-size:13px">暂无分类数据</div>`;
    } else {
      const maxCat = sortedCats[0][1] || 1;
      catEl.innerHTML = sortedCats.map(([cat, num]) => {
        const t = getCatTheme(cat);
        return `
        <div class="cat-dist-row">
          <span class="cat-dist-name" style="color:${t.color}">${escapeHtml(cat)}</span>
          <div class="cat-dist-bar"><div style="width:${Math.round((num / maxCat) * 100)}%;background:${t.grad}"></div></div>
          <span class="cat-dist-val">${num} 道</span>
        </div>
      `;
      }).join('');
    }
  }

  // ===== Render: Backup Page =====
  function renderBackupStats() {
    const approxBytes = new Blob([JSON.stringify(state.dishes)]).size;
    $('storageSummary').textContent = `${state.dishes.length} 道菜 · 约 ${formatBytes(approxBytes)}`;
    renderDoubaoConfigForm();
  }

  function renderAll() {
    renderHeader();
    renderCategoryBar();
    renderDishes();
    renderCalendar();
    renderRanking();
    renderBackupStats();
  }

  // ===== Sheets Helper =====
  function openSheet(id) {
    $(id).classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeSheet(id) {
    $(id).classList.remove('open');
    if (!document.querySelector('.sheet-backdrop.open')) {
      document.body.style.overflow = '';
    }
  }

  // ===== Add / Edit Dish Sheet =====
  function renderEditorCategories() {
    $('editorCatGrid').innerHTML = CATEGORIES.map((c) => {
      const t = getCatTheme(c);
      const style = `--opt-bg:${t.bg};--opt-border:${t.border};--opt-color:${t.color};--opt-active:${t.grad}`;
      return `
      <button type="button" class="cat-option ${state.editingCategory === c ? 'active' : ''}" style="${style}" data-edit-cat="${escapeHtml(c)}">
        ${escapeHtml(c)}
      </button>
    `;
    }).join('');
  }

  function updatePhotoPreview() {
    const picker = $('photoPicker');
    const preview = $('photoPreview');
    const hint = $('photoEmptyHint');
    const overlay = $('photoOverlay');
    if (state.editingPhoto) {
      picker.classList.add('has-image');
      preview.src = state.editingPhoto;
      preview.classList.remove('hidden');
      hint.classList.add('hidden');
      overlay.classList.remove('hidden');
    } else {
      picker.classList.remove('has-image');
      preview.src = '';
      preview.classList.add('hidden');
      hint.classList.remove('hidden');
      overlay.classList.add('hidden');
    }
  }

  function addIngredientRow(name = '', amount = '') {
    const row = document.createElement('div');
    row.className = 'ing-editor-row';
    row.innerHTML = `
      <input type="text" class="ing-name-input" placeholder="食材名（如 排骨）" value="${escapeHtml(name)}" maxlength="30">
      <input type="text" class="ing-amount-input" placeholder="用量（如 500g）" value="${escapeHtml(amount)}" maxlength="24">
      <button type="button" class="ing-del-btn" aria-label="删除食材">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>`;
    row.querySelector('.ing-del-btn').onclick = () => row.remove();
    $('ingEditorList').appendChild(row);
  }

  function openEditor(dish = null) {
    state.editingId = dish ? dish.id : null;
    state.editingPhoto = dish ? dish.photo : null;
    state.editingCategory = dish ? dish.category : (state.category !== '全部' ? state.category : '家常菜');

    $('editorTitle').textContent = dish ? '编辑菜品' : '记一道新菜';
    $('dishNameInput').value = dish ? dish.name : '';
    $('dishCountInput').value = dish ? dish.count : 1;
    $('dishDateInput').value = dish ? (getLastCookDate(dish) || todayStr()) : todayStr();
    $('dishStepsInput').value = dish ? dish.steps : '';
    $('dishNoteInput').value = dish ? dish.note : '';
    $('photoFileInput').value = '';

    renderEditorCategories();
    updatePhotoPreview();

    const list = $('ingEditorList');
    list.innerHTML = '';
    if (dish && dish.ingredients.length > 0) {
      dish.ingredients.forEach((i) => addIngredientRow(i.name, i.amount));
    } else {
      addIngredientRow();
      addIngredientRow();
    }

    openSheet('editorBackdrop');
  }

  async function saveDishFromEditor() {
    const name = $('dishNameInput').value.trim();
    if (!name) {
      showToast('请先填写菜品名称');
      $('dishNameInput').focus();
      return;
    }

    const countInput = Math.max(0, Math.floor(Number($('dishCountInput').value) || 0));
    const dateInput = $('dishDateInput').value || todayStr();
    const steps = $('dishStepsInput').value.trim();
    const note = $('dishNoteInput').value.trim();

    const ingredients = [];
    document.querySelectorAll('#ingEditorList .ing-editor-row').forEach((row) => {
      const iName = row.querySelector('.ing-name-input').value.trim();
      const iAmt = row.querySelector('.ing-amount-input').value.trim();
      if (iName) {
        ingredients.push({ name: iName, amount: iAmt, checked: false });
      }
    });

    const now = Date.now();
    if (state.editingId) {
      const dish = state.dishes.find((d) => d.id === state.editingId);
      if (!dish) return;
      // Preserve checked state for unchanged ingredient names
      const checkedMap = new Map(dish.ingredients.map((i) => [i.name, Boolean(i.checked)]));
      dish.name = name;
      dish.category = state.editingCategory;
      dish.photo = state.editingPhoto;
      dish.steps = steps;
      dish.note = note;
      dish.ingredients = ingredients.map((i) => ({ ...i, checked: checkedMap.get(i.name) || false }));
      dish.count = countInput;
      if (countInput === 0) {
        dish.logs = [];
      } else {
        if (dish.logs.length === 0 && dateInput) {
          dish.logs = [dateInput];
        } else if (dish.logs.length > countInput) {
          dish.logs = dish.logs.slice(-countInput);
        }
        // Update latest date if user explicitly changed it
        if (dish.logs.length > 0 && dateInput && getLastCookDate(dish) !== dateInput) {
          dish.logs[dish.logs.length - 1] = dateInput;
          dish.logs.sort();
        }
      }
      dish.updatedAt = now;
      await putDish(dish);
      closeSheet('editorBackdrop');
      renderAll();
      if (state.detailId === dish.id && $('detailBackdrop').classList.contains('open')) {
        renderDetail(dish);
      }
      showToast(`已更新「${dish.name}」`);
    } else {
      const logs = countInput > 0 && dateInput ? [dateInput] : [];
      const newDish = normalizeDish({
        id: uid(),
        name,
        category: state.editingCategory,
        photo: state.editingPhoto,
        count: countInput,
        logs,
        ingredients,
        steps,
        note,
        createdAt: now,
        updatedAt: now
      });
      state.dishes.unshift(newDish);
      await putDish(newDish);
      closeSheet('editorBackdrop');
      renderAll();
      showToast(`已添加「${newDish.name}」`);
    }
  }

  // ===== Dish Detail Sheet =====
  function openDetail(dishId) {
    const dish = state.dishes.find((d) => d.id === dishId);
    if (!dish) return;
    state.detailId = dish.id;
    renderDetail(dish);
    openSheet('detailBackdrop');
  }

  function renderDetail(dish) {
    $('detailTitle').textContent = dish.name;
    const lastDate = getLastCookDate(dish);
    const hasChecked = dish.ingredients.some((i) => i.checked);

    const ingredientsHtml = dish.ingredients.length > 0
      ? `
        <div class="detail-block">
          <div class="detail-block-head">
            <h4>食材清单（${dish.ingredients.length}项）</h4>
            <div style="display:flex;gap:12px">
              ${hasChecked ? '<button type="button" class="text-link-btn" id="resetIngCheckBtn">取消勾选</button>' : ''}
              <button type="button" class="text-link-btn" id="copyIngBtn">复制清单</button>
            </div>
          </div>
          <div class="ing-check-list">
            ${dish.ingredients.map((ing, idx) => `
              <div class="ing-check-item ${ing.checked ? 'checked' : ''}" data-ing-idx="${idx}">
                <div class="ing-check-left">
                  <span class="ing-checkbox">
                    ${ing.checked ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
                  </span>
                  <span class="ing-name">${escapeHtml(ing.name)}</span>
                </div>
                <span class="ing-amount">${escapeHtml(ing.amount || '适量')}</span>
              </div>
            `).join('')}
          </div>
        </div>`
      : `
        <div class="detail-block">
          <div class="detail-block-head">
            <h4>食材清单</h4>
            <button type="button" class="text-link-btn" id="quickAddIngBtn">去补充</button>
          </div>
          <p class="recipe-text" style="color:var(--text-muted)">还没记录食材，点击右上角或底部「编辑菜品」随时补充。</p>
        </div>`;

    const stepsHtml = `
      <div class="detail-block">
        <div class="detail-block-head">
          <h4>制作教程与心得</h4>
          ${!dish.steps ? '<button type="button" class="text-link-btn" id="quickAddStepsBtn">去补充</button>' : ''}
        </div>
        <p class="recipe-text" style="${dish.steps ? '' : 'color:var(--text-muted)'}">${dish.steps ? escapeHtml(dish.steps) : '暂未填写详细步骤，可以把调料用量、火候和下次改进点记在这里。'}</p>
      </div>`;

    const noteHtml = dish.note
      ? `<div class="detail-block"><div class="detail-block-head"><h4>简短备注</h4></div><p class="recipe-text">${escapeHtml(dish.note)}</p></div>`
      : '';

    const historyItems = dish.logs
      .map((dt, idx) => ({ dt, idx }))
      .reverse();

    const historyHtml = `
      <div class="detail-block">
        <div class="detail-block-head">
          <h4>制作日期记录（${dish.logs.length}条）</h4>
          <button type="button" class="text-link-btn" id="detailBackfillBtn">＋ 补记过去日期</button>
        </div>
        ${historyItems.length > 0
          ? `<div class="history-chips">
              ${historyItems.map(({ dt, idx }) => `
                <span class="history-chip">
                  <span>${escapeHtml(dt)}</span>
                  <button type="button" data-del-log="${idx}" aria-label="删除记录">×</button>
                </span>
              `).join('')}
            </div>`
          : `<p class="recipe-text" style="color:var(--text-muted)">还没有具体日期记录，点击上方「刚做过 +1」即可记下今天。</p>`}
      </div>`;

    $('detailBody').innerHTML = `
      <div class="detail-hero">
        ${dish.photo ? `<img src="${dish.photo}" alt="${escapeHtml(dish.name)}">` : dishPlaceholderSvg(dish.category)}
      </div>
      <div class="detail-title-row">
        <h2>${escapeHtml(dish.name)}</h2>
      </div>
      <div class="detail-tags">
        <span class="tag" style="background:${getCatTheme(dish.category).bg};color:${getCatTheme(dish.category).color}">${escapeHtml(dish.category)}</span>
        <span class="tag">累计做过 ${dish.count} 次</span>
        <span class="tag">最近：${lastDate ? formatPrettyDate(lastDate) : '未记录'}</span>
      </div>
      <div class="detail-cook-bar">
        <button type="button" class="btn btn-primary" id="detailCookAgainBtn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span>刚做过，次数 +1</span>
        </button>
        <input type="date" id="detailQuickDate" class="form-control" style="width:142px;padding:0 10px;height:44px" value="${todayStr()}" aria-label="记录日期">
      </div>
      ${ingredientsHtml}
      ${stepsHtml}
      ${noteHtml}
      ${historyHtml}
    `;

    $('detailCookAgainBtn').onclick = () => {
      const dt = $('detailQuickDate').value || todayStr();
      incrementDishCook(dish.id, dt, true);
    };

    const quickAddIng = $('quickAddIngBtn');
    if (quickAddIng) quickAddIng.onclick = () => { closeSheet('detailBackdrop'); openEditor(dish); };
    const quickAddSteps = $('quickAddStepsBtn');
    if (quickAddSteps) quickAddSteps.onclick = () => { closeSheet('detailBackdrop'); openEditor(dish); };

    const detailBackfill = $('detailBackfillBtn');
    if (detailBackfill) {
      detailBackfill.onclick = () => {
        const input = $('detailQuickDate');
        input.focus();
        if (input.showPicker) {
          try { input.showPicker(); } catch { /* Safari fallback */ }
        }
        showToast('选择上方日期后，点击「刚做过，次数 +1」即可补记');
      };
    }

    const copyBtn = $('copyIngBtn');
    if (copyBtn) {
      copyBtn.onclick = async () => {
        const lines = [`【${dish.name} 食材清单】`];
        dish.ingredients.forEach((i) => lines.push(`- ${i.name}${i.amount ? '：' + i.amount : ''}`));
        const txt = lines.join('\n');
        try {
          await navigator.clipboard.writeText(txt);
          showToast('食材清单已复制，可直接发微信或粘贴到备忘录');
        } catch {
          showToast('当前环境不支持自动复制，请手动长按复制');
        }
      };
    }

    const resetBtn = $('resetIngCheckBtn');
    if (resetBtn) {
      resetBtn.onclick = async () => {
        dish.ingredients.forEach((i) => { i.checked = false; });
        await putDish(dish);
        renderDetail(dish);
      };
    }

    $('detailBody').querySelectorAll('.ing-check-item').forEach((el) => {
      el.onclick = async () => {
        const idx = Number(el.dataset.ingIdx);
        if (!dish.ingredients[idx]) return;
        dish.ingredients[idx].checked = !dish.ingredients[idx].checked;
        await putDish(dish);
        renderDetail(dish);
      };
    });

    $('detailBody').querySelectorAll('[data-del-log]').forEach((btn) => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const idx = Number(btn.dataset.delLog);
        if (confirm(`删除 ${dish.logs[idx]} 这条做菜记录吗？`)) {
          removeCookLogAt(dish.id, idx);
        }
      };
    });
  }

  // ===== Random Recommendation Sheet =====
  function renderRandomCatBar() {
    const cats = ['全部', ...CATEGORIES.filter((c) => state.dishes.some((d) => d.category === c))];
    if (!cats.includes(state.randomCategory)) state.randomCategory = '全部';
    $('randomCatBar').innerHTML = cats.map((c) => {
      const t = getCatTheme(c);
      const style = `--chip-bg:${t.bg};--chip-border:${t.border};--chip-color:${t.color};--chip-dot:${t.color};--chip-active-bg:${t.grad};--chip-shadow:${t.shadow}`;
      return `
      <button type="button" class="cat-chip ${state.randomCategory === c ? 'active' : ''}" style="${style}" data-rand-cat="${escapeHtml(c)}">
        <span class="cat-dot"></span>
        <span>${escapeHtml(c)}</span>
      </button>
    `;
    }).join('');
  }

  function rollRandomDish(avoidCurrent = true) {
    const pool = state.dishes.filter((d) => state.randomCategory === '全部' || d.category === state.randomCategory);
    const stage = $('randomStage');
    if (pool.length === 0) {
      state.randomDishId = null;
      stage.innerHTML = `
        <div style="padding:28px 10px;color:var(--text-secondary)">
          <p style="margin:0 0 14px">当前还没有收录菜品，先记下几道你做过的菜再来抽签吧！</p>
          <button type="button" class="btn btn-primary btn-sm" id="randGoAddBtn">＋ 去记一道菜</button>
        </div>`;
      $('randGoAddBtn').onclick = () => { closeSheet('randomBackdrop'); openEditor(); };
      $('cookRandomBtn').disabled = true;
      $('rerollRandomBtn').disabled = true;
      return;
    }

    $('cookRandomBtn').disabled = false;
    $('rerollRandomBtn').disabled = false;
    let candidates = pool;
    if (avoidCurrent && pool.length > 1 && state.randomDishId) {
      candidates = pool.filter((d) => d.id !== state.randomDishId);
    }
    const picked = candidates[Math.floor(Math.random() * candidates.length)];
    state.randomDishId = picked.id;
    const lastDate = getLastCookDate(picked);

    stage.innerHTML = `
      <div style="font-size:13px;color:var(--text-secondary)">今天就做这道怎么样？</div>
      <div class="random-card" id="randomResultCard" style="cursor:pointer">
        <div class="random-card-img">
          ${picked.photo ? `<img src="${picked.photo}" alt="${escapeHtml(picked.name)}">` : dishPlaceholderSvg(picked.category)}
        </div>
        <div class="random-card-info">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
            <h4>${escapeHtml(picked.name)}</h4>
            <span class="tag green">${escapeHtml(picked.category)}</span>
          </div>
          <p>
            已做过 ${picked.count} 次 · 最近制作：${lastDate ? formatPrettyDate(lastDate) : '还没做过'}
            ${picked.ingredients.length ? `<br>食材：${escapeHtml(picked.ingredients.slice(0, 5).map((i) => i.name).join('、'))}` : ''}
          </p>
        </div>
      </div>
      <button type="button" class="text-link-btn" id="randomViewDetailBtn">查看完整做法与食材清单 ›</button>
    `;

    const goDetail = () => {
      closeSheet('randomBackdrop');
      openDetail(picked.id);
    };
    $('randomResultCard').onclick = goDetail;
    $('randomViewDetailBtn').onclick = goDetail;
  }

  function openRandomSheet() {
    renderRandomCatBar();
    rollRandomDish(false);
    openSheet('randomBackdrop');
  }

  // ===== Backfill Date Sheet =====
  function openBackfillSheet(dateStr = state.selectedDate) {
    $('backfillDateInput').value = dateStr || todayStr();
    const listEl = $('backfillList');
    if (state.dishes.length === 0) {
      listEl.innerHTML = `
        <div style="text-align:center;padding:24px 0;color:var(--text-secondary);font-size:13px">
          还没有收录菜品，先添加一道菜吧。
          <div style="margin-top:12px">
            <button type="button" class="btn btn-primary btn-sm" id="bfAddDishBtn">＋ 记一道新菜</button>
          </div>
        </div>`;
      $('bfAddDishBtn').onclick = () => { closeSheet('backfillBackdrop'); openEditor(); };
    } else {
      const sorted = [...state.dishes].sort((a, b) => b.count - a.count);
      listEl.innerHTML = sorted.map((d) => `
        <div class="backfill-row">
          <div>
            <strong>${escapeHtml(d.name)}</strong>
            <small>${escapeHtml(d.category)} · 已做 ${d.count} 次</small>
          </div>
          <button type="button" class="btn btn-soft btn-sm" data-bf-dish="${escapeHtml(d.id)}">补记 +1</button>
        </div>
      `).join('');
    }
    openSheet('backfillBackdrop');
  }

  // ===== Backup Export & Import =====
  async function exportBackup() {
    if (state.dishes.length === 0) {
      showToast('当前还没有可导出的菜品记录');
      return;
    }
    const payload = {
      app: '大厨小记',
      version: 4,
      exportedAt: new Date().toISOString(),
      dishes: state.dishes
    };
    const jsonText = JSON.stringify(payload, null, 2);
    const filename = `大厨小记-备份-${todayStr()}.json`;

    // Native iOS App shell bridge: open native UIActivityViewController directly
    if (isNativeIOS()) {
      try {
        await callNative('shareFile', { filename, content: jsonText, mimeType: 'application/json' });
        showToast('已打开系统分享，可直接存至 iCloud Drive');
        return;
      } catch {
        // fall through to web share
      }
    }

    const blob = new Blob([jsonText], { type: 'application/json' });

    // On iOS Safari, navigator.share with a File lets the user tap "存储到文件 -> iCloud Drive" directly!
    try {
      const file = new File([blob], filename, { type: 'application/json' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: '大厨小记备份文件',
          text: `共 ${state.dishes.length} 道菜品，建议存储到「文件」→ iCloud Drive`,
          files: [file]
        });
        showToast('备份已分享，记得存到 iCloud Drive 哦');
        return;
      }
    } catch (err) {
      if (err && err.name === 'AbortError') return;
      // Fallback to direct download below
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast(`已导出 ${state.dishes.length} 道菜品备份`);
  }

  async function importBackupFile(file) {
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const rawList = Array.isArray(parsed) ? parsed : (Array.isArray(parsed?.dishes) ? parsed.dishes : null);
      if (!rawList) {
        showToast('备份文件格式不正确，请选择有效的 JSON 备份');
        return;
      }

      let added = 0;
      let merged = 0;
      let skipped = 0;

      for (const item of rawList) {
        const incoming = normalizeDish(item);
        const existing = state.dishes.find(
          (d) => d.id === incoming.id || (d.name === incoming.name && d.category === incoming.category)
        );
        if (!existing) {
          state.dishes.push(incoming);
          added += 1;
        } else {
          // Smart merge: keep existing photo/steps if present, fill missing fields, union new dates
          let changed = false;
          if (!existing.photo && incoming.photo) { existing.photo = incoming.photo; changed = true; }
          if (!existing.steps && incoming.steps) { existing.steps = incoming.steps; changed = true; }
          if (!existing.note && incoming.note) { existing.note = incoming.note; changed = true; }
          if (existing.ingredients.length === 0 && incoming.ingredients.length > 0) {
            existing.ingredients = incoming.ingredients;
            changed = true;
          }
          const existingSet = new Set(existing.logs);
          let newLogs = 0;
          for (const dt of incoming.logs) {
            if (!existingSet.has(dt)) {
              existing.logs.push(dt);
              existingSet.add(dt);
              newLogs += 1;
            }
          }
          if (newLogs > 0) {
            existing.logs.sort();
            existing.count = Math.max(existing.count + newLogs, incoming.count, existing.logs.length);
            changed = true;
          } else if (incoming.count > existing.count) {
            existing.count = incoming.count;
            changed = true;
          }
          if (changed) {
            existing.updatedAt = Date.now();
            merged += 1;
          } else {
            skipped += 1;
          }
        }
      }

      await saveAllDishes(state.dishes);
      renderAll();
      showToast(`导入完成：新增 ${added} 道，合并 ${merged} 道，跳过重复 ${skipped} 道`);
    } catch {
      showToast('读取备份失败，请确认文件未损坏');
    }
  }

  // ===== Demo Data =====
  async function addDemoDishes() {
    const today = todayStr();
    const d2 = formatDate(new Date(Date.now() - 86400000 * 2));
    const d5 = formatDate(new Date(Date.now() - 86400000 * 5));
    const d9 = formatDate(new Date(Date.now() - 86400000 * 9));

    const demos = [
      {
        name: '番茄炒蛋',
        category: '家常菜',
        count: 5,
        logs: [d9, d5, d2, today],
        ingredients: [
          { name: '番茄', amount: '2个' },
          { name: '鸡蛋', amount: '3个' },
          { name: '小葱', amount: '1根' },
          { name: '白糖', amount: '半勺' }
        ],
        steps: '1. 鸡蛋加少许盐和温水打散，热油滑炒嫩蛋盛出。\n2. 番茄去皮切块，少油炒出沙，加半勺白糖和少许盐。\n3. 倒回鸡蛋快速翻匀，撒葱花出锅。',
        note: '加一点点白糖提鲜，拌米饭绝配'
      },
      {
        name: '红烧排骨',
        category: '荤菜',
        count: 3,
        logs: [d9, d2],
        ingredients: [
          { name: '猪肋排', amount: '500g' },
          { name: '冰糖', amount: '15g' },
          { name: '生姜', amount: '4片' },
          { name: '生抽 / 老抽', amount: '2勺 / 半勺' }
        ],
        steps: '1. 排骨冷水下锅，放姜片、料酒焯水洗净沥干。\n2. 小火炒融冰糖至枣红色，下排骨翻炒均匀上色。\n3. 加生抽、老抽、热水没过排骨，小火慢炖40分钟，最后大火收汁。',
        note: '收汁时注意翻动，不要糊锅'
      },
      {
        name: '蒜蓉清炒西兰花',
        category: '素菜',
        count: 4,
        logs: [d5, today],
        ingredients: [
          { name: '西兰花', amount: '1颗' },
          { name: '大蒜', amount: '4瓣' },
          { name: '蚝油', amount: '1勺' }
        ],
        steps: '1. 西兰花切小朵，淡盐水泡5分钟后焯水1分钟捞出。\n2. 蒜末爆香，下西兰花大火翻炒30秒。\n3. 沿锅边淋一勺蚝油和少许盐炒匀即可。',
        note: '焯水加几滴油颜色更翠绿'
      }
    ];

    let added = 0;
    for (const item of demos) {
      if (!state.dishes.some((d) => d.name === item.name)) {
        state.dishes.unshift(normalizeDish(item));
        added += 1;
      }
    }
    if (added === 0) {
      showToast('示例菜品已经在列表中了');
      return;
    }
    await saveAllDishes(state.dishes);
    renderAll();
    showToast(`已添加 ${added} 道示例家常菜，可点击卡片查看详情`);
  }

  // ===== Native iOS Bridge =====
  const nativeCallbacks = new Map();
  let nativeReqSeq = 1;

  function isNativeIOS() {
    return Boolean(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.dachuBridge);
  }

  function callNative(action, payload = {}) {
    return new Promise((resolve, reject) => {
      if (!isNativeIOS()) {
        reject(new Error('not native'));
        return;
      }
      const id = String(nativeReqSeq++);
      nativeCallbacks.set(id, { resolve, reject });
      window.webkit.messageHandlers.dachuBridge.postMessage({ id, action, payload });
      setTimeout(() => {
        if (nativeCallbacks.has(id)) {
          nativeCallbacks.delete(id);
          reject(new Error('native timeout'));
        }
      }, 20000);
    });
  }

  window.__dachuNativeResolve = (id, ok, data, error) => {
    const cb = nativeCallbacks.get(String(id));
    if (!cb) return;
    nativeCallbacks.delete(String(id));
    if (ok) cb.resolve(data);
    else cb.reject(new Error(error || 'native error'));
  };

  // ===== Discover: Online Recipe Search & Smart Importer =====
  const discoverState = {
    mode: 'search', // 'search' | 'import'
    items: [],
    loading: false
  };

  function mapOnlineCategory(rawCat) {
    const s = String(rawCat || '').toLowerCase();
    if (/dessert|cake|sweet/.test(s)) return '烘焙甜品';
    if (/vegetarian|vegan|side/.test(s)) return '素菜';
    if (/soup|stew/.test(s)) return '汤羹';
    if (/pasta|rice|breakfast/.test(s)) return '主食';
    if (/salad|starter/.test(s)) return '凉菜';
    if (/beef|pork|chicken|lamb|seafood|goat/.test(s)) return '荤菜';
    return '家常菜';
  }

  function mealDbToRecipe(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const name = (meal[`strIngredient${i}`] || '').trim();
      const amount = (meal[`strMeasure${i}`] || '').trim();
      if (name) ingredients.push({ name, amount });
    }
    const area = meal.strArea ? `${meal.strArea}风味` : '在线菜谱';
    return {
      id: `mealdb_${meal.idMeal}`,
      name: meal.strMeal || '在线菜谱',
      category: mapOnlineCategory(meal.strCategory),
      photoUrl: meal.strMealThumb || null,
      ingredients,
      steps: (meal.strInstructions || '').replace(/\r\n/g, '\n').trim(),
      note: `${area} · 来自 TheMealDB 在线菜谱库`,
      isOnline: true
    };
  }

  async function searchOnlineRecipes(query = '') {
    const q = query.trim();
    const builtin = (window.BUILTIN_RECIPES || []).map((r) => ({ ...r, isOnline: false }));
    let localMatches = builtin;
    if (q) {
      const ql = q.toLowerCase();
      localMatches = builtin.filter((r) => {
        const hay = [
          r.name, r.category, r.note, r.steps,
          ...(r.tags || []),
          ...(r.ingredients || []).map((i) => i.name)
        ].join(' ').toLowerCase();
        return hay.includes(ql);
      });
    }

    discoverState.items = localMatches;
    discoverState.loading = Boolean(q);
    renderDiscoverList(q ? `正在联网搜索「${q}」…` : `共 ${localMatches.length} 道精选家常菜谱，输入关键词或点 🌐 词条可联网搜更多`);

    if (!q) return;

    // Also query TheMealDB online API over HTTPS
    const enHintMap = {
      鸡: 'chicken', 鸡翅: 'chicken', 鸡肉: 'chicken',
      牛: 'beef', 牛肉: 'beef', 牛腩: 'beef',
      猪: 'pork', 排骨: 'pork', 肉: 'pork',
      鱼: 'fish', 虾: 'shrimp', 海鲜: 'seafood',
      豆腐: 'tofu', 土豆: 'potato', 番茄: 'tomato',
      面: 'pasta', 饭: 'rice', 汤: 'soup', 甜品: 'cake', 蛋糕: 'cake'
    };
    let apiTerm = q;
    if (/[\u4e00-\u9fa5]/.test(q)) {
      const matchedKey = Object.keys(enHintMap).find((k) => q.includes(k));
      apiTerm = matchedKey ? enHintMap[matchedKey] : '';
    }

    if (!apiTerm) {
      discoverState.loading = false;
      renderDiscoverList(`找到 ${localMatches.length} 道相关中文菜谱（输入英文如 pasta / chicken 可搜国际在线库）`);
      return;
    }

    try {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(apiTerm)}`;
      let data = null;
      if (isNativeIOS()) {
        const text = await callNative('fetchUrl', { url });
        data = JSON.parse(text);
      } else {
        const resp = await fetch(url);
        if (resp.ok) data = await resp.json();
      }
      const onlineMatches = Array.isArray(data?.meals) ? data.meals.slice(0, 12).map(mealDbToRecipe) : [];
      discoverState.items = [...localMatches, ...onlineMatches];
      discoverState.loading = false;
      renderDiscoverList(`共找到 ${discoverState.items.length} 道菜谱（含 ${onlineMatches.length} 道联网菜谱）`);
    } catch {
      discoverState.loading = false;
      renderDiscoverList(`本地精选 ${localMatches.length} 道（当前未联网或在线接口超时）`);
    }
  }

  async function fetchRandomOnlineRecipe() {
    discoverState.loading = true;
    renderDiscoverList('正在联网获取随机美食灵感…');
    try {
      const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
      let data = null;
      if (isNativeIOS()) {
        const text = await callNative('fetchUrl', { url });
        data = JSON.parse(text);
      } else {
        const resp = await fetch(url);
        if (resp.ok) data = await resp.json();
      }
      if (Array.isArray(data?.meals) && data.meals[0]) {
        const item = mealDbToRecipe(data.meals[0]);
        discoverState.items = [item, ...(window.BUILTIN_RECIPES || []).slice(0, 5)];
        discoverState.loading = false;
        renderDiscoverList(`联网为你推荐：${item.name}`);
        return;
      }
    } catch {
      // fallback below
    }
    discoverState.loading = false;
    const builtin = window.BUILTIN_RECIPES || [];
    const pick = builtin[Math.floor(Math.random() * builtin.length)];
    discoverState.items = pick ? [pick] : [];
    renderDiscoverList('离线模式：从精选家常菜库随机挑了一道');
  }

  async function imageUrlToDataUrl(url) {
    if (!url) return null;
    if (isNativeIOS()) {
      try {
        return await callNative('fetchImage', { url });
      } catch {
        return null;
      }
    }
    try {
      const resp = await fetch(url, { mode: 'cors' });
      if (!resp.ok) return null;
      const blob = await resp.blob();
      return await compressImage(blob);
    } catch {
      return null;
    }
  }

  async function importDiscoverRecipe(item) {
    if (state.dishes.some((d) => d.name === item.name)) {
      showToast(`「${item.name}」已经在你的菜谱里了`);
      return;
    }
    showToast(`正在导入「${item.name}」…`);
    let photo = item.photo || null;
    if (!photo && item.photoUrl) {
      photo = await imageUrlToDataUrl(item.photoUrl);
    }
    const dish = normalizeDish({
      id: uid(),
      name: item.name,
      category: item.category || '家常菜',
      photo,
      count: 0,
      logs: [],
      ingredients: item.ingredients || [],
      steps: item.steps || '',
      note: item.note || '',
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
    state.dishes.unshift(dish);
    await putDish(dish);
    renderAll();
    renderDiscoverList();
    showToast(`已收入「${dish.name}」到我的菜谱`);
  }

  function renderDiscoverList(statusText = null) {
    if (statusText !== null) {
      $('discoverStatus').innerHTML = `<span>${escapeHtml(statusText)}</span>${isNativeIOS() ? '<span class="online-badge">iOS 联网就绪</span>' : ''}`;
    }
    const listEl = $('discoverList');
    if (discoverState.loading && discoverState.items.length === 0) {
      listEl.innerHTML = `<div class="empty-state" style="padding:30px"><p style="margin:0">正在联网搜索菜谱…</p></div>`;
      return;
    }
    if (discoverState.items.length === 0) {
      listEl.innerHTML = `
        <div class="empty-state" style="padding:30px">
          <h3>没有搜到匹配的菜谱</h3>
          <p>试试搜「排骨」「豆腐」「鸡翅」或英文词「chicken」「pasta」，也可以切换到「链接 / 文本导入」粘贴任意菜谱。</p>
        </div>`;
      return;
    }

    listEl.innerHTML = discoverState.items.map((item, idx) => {
      const t = getCatTheme(item.category);
      const saved = state.dishes.some((d) => d.name === item.name);
      const ingPreview = (item.ingredients || []).slice(0, 4).map((i) => i.name).join('、');
      return `
        <article class="discover-card">
          <div class="discover-thumb">
            ${item.photoUrl
              ? `<img src="${escapeHtml(item.photoUrl)}" alt="${escapeHtml(item.name)}" loading="lazy">`
              : dishMiniThumbIcon(item.category)}
          </div>
          <div class="discover-info">
            <div class="discover-title-line">
              <strong>${escapeHtml(item.name)}</strong>
              <span class="tag" style="background:${t.bg};color:${t.color};flex-shrink:0">${escapeHtml(item.category)}</span>
            </div>
            <div class="discover-sub">${escapeHtml(ingPreview ? `食材：${ingPreview}` : item.note || '点击导入查看完整步骤')}</div>
            <div class="discover-actions">
              ${item.isOnline ? '<span class="online-badge">🌐 在线</span>' : ''}
              <button type="button" class="btn ${saved ? 'btn-secondary' : 'btn-soft'} btn-sm" style="height:30px;padding:0 11px;font-size:12px;margin-left:auto" data-import-discover="${idx}" ${saved ? 'disabled' : ''}>
                ${saved ? '已收录' : '＋ 收入菜谱'}
              </button>
              <button type="button" class="btn btn-secondary btn-sm" style="height:30px;padding:0 10px;font-size:12px" data-edit-discover="${idx}">编辑后存</button>
            </div>
          </div>
        </article>`;
    }).join('');
  }

  // ===== Doubao AI (Volcengine Ark) & Xiaohongshu Integration =====
  const DOUBAO_CFG_KEY = 'dachu_doubao_cfg_v1';
  const DEFAULT_DOUBAO_URL = 'https://ark.cn-beijing.volces.com/api/v3/chat/completions';
  const DEFAULT_DOUBAO_MODEL = 'doubao-1-5-pro-32k-250115';

  function loadDoubaoConfig() {
    try {
      const c = JSON.parse(localStorage.getItem(DOUBAO_CFG_KEY) || '{}');
      return {
        apiKey: String(c.apiKey || '').trim(),
        model: String(c.model || DEFAULT_DOUBAO_MODEL).trim(),
        url: String(c.url || DEFAULT_DOUBAO_URL).trim()
      };
    } catch {
      return { apiKey: '', model: DEFAULT_DOUBAO_MODEL, url: DEFAULT_DOUBAO_URL };
    }
  }

  function renderDoubaoConfigForm() {
    const cfg = loadDoubaoConfig();
    if ($('doubaoKeyInput')) $('doubaoKeyInput').value = cfg.apiKey;
    if ($('doubaoModelInput')) $('doubaoModelInput').value = cfg.model;
    if ($('doubaoUrlInput')) $('doubaoUrlInput').value = cfg.url;
  }

  async function callDoubaoJSON(systemPrompt, userPrompt) {
    const cfg = loadDoubaoConfig();
    if (!cfg.apiKey) {
      throw new Error('NO_KEY');
    }
    const bodyObj = {
      model: cfg.model || DEFAULT_DOUBAO_MODEL,
      temperature: 0.5,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ]
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cfg.apiKey}`
    };
    let text = '';
    if (isNativeIOS()) {
      text = await callNative('fetchUrl', {
        url: cfg.url || DEFAULT_DOUBAO_URL,
        method: 'POST',
        headers,
        body: JSON.stringify(bodyObj)
      });
    } else {
      const resp = await fetch(cfg.url || DEFAULT_DOUBAO_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(bodyObj)
      });
      text = await resp.text();
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    }
    const data = JSON.parse(text);
    const content = data?.choices?.[0]?.message?.content || '';
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('BAD_JSON');
    return JSON.parse(jsonMatch[0]);
  }

  async function askDoubaoRecipe(query) {
    const q = query.trim();
    if (!q) {
      showToast('先在搜索框输入菜名或手里有的食材，再点豆包生成');
      $('onlineQueryInput').focus();
      return;
    }
    const cfg = loadDoubaoConfig();
    if (!cfg.apiKey) {
      showToast('请先在「备份」页填入你的火山方舟豆包 API Key（免费体验额度）');
      switchTab('backup');
      setTimeout(() => $('doubaoKeyInput')?.focus(), 180);
      return;
    }

    discoverState.loading = true;
    renderDiscoverList(`✨ 豆包 AI 正在为你生成「${q}」的做法…`);
    try {
      const sys = `你是专业中餐家常菜厨师助手。只输出一个合法 JSON 对象，不要多余文字，格式：
{"name":"菜名","category":"家常菜|荤菜|素菜|汤羹|主食|凉菜|烘焙甜品|其他","ingredients":[{"name":"食材名","amount":"用量"}],"steps":"1. 第一步\\n2. 第二步","note":"一句火候或调味小贴士"}`;
      const rec = await callDoubaoJSON(sys, `请为「${q}」生成一道家庭易做、用量精准的美味菜谱。`);
      const item = {
        id: `doubao_${Date.now()}`,
        name: String(rec.name || q).trim().slice(0, 40),
        category: CATEGORIES.includes(rec.category) ? rec.category : '家常菜',
        ingredients: Array.isArray(rec.ingredients) ? rec.ingredients : [],
        steps: String(rec.steps || '').trim(),
        note: `${rec.note ? rec.note + ' · ' : ''}由豆包 AI 生成`,
        isOnline: true
      };
      discoverState.items = [item, ...discoverState.items.filter((x) => x.name !== item.name)];
      discoverState.loading = false;
      renderDiscoverList(`✨ 豆包 AI 已生成「${item.name}」，点「＋ 收入菜谱」即可保存`);
    } catch (err) {
      discoverState.loading = false;
      renderDiscoverList('豆包调用失败，请检查「备份」页里的 API Key、模型 ID 与网络状态');
      showToast(`豆包调用失败：${err.message || '请检查配置'}`);
    }
  }

  async function openXiaohongshuSearch(keyword) {
    const q = (keyword || '家常菜菜谱').trim();
    const schemeUrl = `xhsdiscover://search/result?keyword=${encodeURIComponent(q)}`;
    const webUrl = `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(q)}&source=web_explore_feed`;
    if (isNativeIOS()) {
      try {
        await callNative('openExternal', { url: schemeUrl, fallbackUrl: webUrl });
        return;
      } catch {
        // fallback below
      }
    }
    window.open(webUrl, '_blank', 'noopener');
  }

  function cleanXiaohongshuNoise(raw) {
    return raw
      .replace(/复制打开小红书[^。\n]*[。\n]?/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/#[^\s#]+(?:\[话题\])?/g, '')
      .replace(/小红书号[:：]?\s*\S+/g, '')
      .trim();
  }

  function parseRecipeText(raw) {
    const cleanedRaw = cleanXiaohongshuNoise(raw);
    const lines = cleanedRaw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    if (lines.length === 0) return null;
    const name = lines[0].replace(/^[【\[#*\s]+|[】\]\s]+$/g, '').slice(0, 40) || '网络导入菜谱';
    const ingredients = [];
    const stepsLines = [];
    let section = 'auto';

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (/^(食材|用料|主料|辅料|配料|材料)[:：]?$/.test(line)) { section = 'ing'; continue; }
      if (/^(步骤|做法|制作步骤|教程|方法)[:：]?$/.test(line)) { section = 'step'; continue; }

      if (section === 'step' || /^\d+[.、)）]/.test(line) || line.length > 26) {
        section = 'step';
        stepsLines.push(line);
      } else {
        const cleaned = line.replace(/^[-•·*]\s*/, '');
        const m = cleaned.match(/^(.+?)(?:[\s:：]+)(\d+.*|适量|少许|半.*|一.*|两.*)$/);
        if (m) {
          ingredients.push({ name: m[1].trim(), amount: m[2].trim() });
        } else if (cleaned.length <= 18) {
          ingredients.push({ name: cleaned, amount: '适量' });
        } else {
          stepsLines.push(line);
        }
      }
    }

    return {
      name,
      category: '家常菜',
      count: 0,
      logs: [],
      ingredients,
      steps: stepsLines.join('\n'),
      note: /小红书|xhslink/i.test(raw) ? '来自小红书笔记导入' : '来自文本智能导入'
    };
  }

  function extractRecipeFromHtml(html, sourceUrl) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    // 1. Try Schema.org JSON-LD Recipe
    const scripts = Array.from(doc.querySelectorAll('script[type="application/ld+json"]'));
    for (const s of scripts) {
      try {
        const parsed = JSON.parse(s.textContent || '');
        const list = Array.isArray(parsed) ? parsed : (parsed['@graph'] ? parsed['@graph'] : [parsed]);
        const rec = list.find((x) => {
          const t = x && x['@type'];
          return t === 'Recipe' || (Array.isArray(t) && t.includes('Recipe'));
        });
        if (rec) {
          const img = Array.isArray(rec.image) ? rec.image[0] : (typeof rec.image === 'object' ? rec.image?.url : rec.image);
          const ings = Array.isArray(rec.recipeIngredient)
            ? rec.recipeIngredient.map((line) => {
                const m = String(line).trim().match(/^(.+?)\s+(\d+.*|适量|少许)$/);
                return m ? { name: m[1], amount: m[2] } : { name: String(line).trim(), amount: '' };
              })
            : [];
          let steps = '';
          if (Array.isArray(rec.recipeInstructions)) {
            steps = rec.recipeInstructions
              .map((st, idx) => `${idx + 1}. ${typeof st === 'string' ? st : (st.text || st.name || '')}`)
              .filter(Boolean)
              .join('\n');
          } else if (typeof rec.recipeInstructions === 'string') {
            steps = rec.recipeInstructions;
          }
          return {
            name: String(rec.name || doc.title || '网页菜谱').trim().slice(0, 40),
            category: mapOnlineCategory(rec.recipeCategory),
            photoUrl: typeof img === 'string' ? img : null,
            ingredients: ings,
            steps: steps.trim(),
            note: `导入自 ${new URL(sourceUrl).hostname}`
          };
        }
      } catch {
        // continue
      }
    }
    // 2. Fallback to OpenGraph meta
    const ogTitle = doc.querySelector('meta[property="og:title"]')?.content || doc.title || '网页菜谱';
    const ogImg = doc.querySelector('meta[property="og:image"]')?.content || null;
    const ogDesc = doc.querySelector('meta[property="og:description"]')?.content || doc.querySelector('meta[name="description"]')?.content || '';
    return {
      name: ogTitle.split(/[-_|｜]/)[0].trim().slice(0, 40),
      category: '家常菜',
      photoUrl: ogImg,
      ingredients: [],
      steps: ogDesc.trim(),
      note: `导入自 ${new URL(sourceUrl).hostname}`
    };
  }

  async function importRecipeFromUrl(rawInput) {
    const urlMatch = rawInput.trim().match(/https?:\/\/[^\s，。！!]+/i);
    if (!urlMatch) {
      showToast('未识别到以 http:// 或 https:// 开头的菜谱链接');
      return;
    }
    const url = urlMatch[0];
    showToast('正在联网抓取菜谱页面…');
    try {
      let html = '';
      if (isNativeIOS()) {
        html = await callNative('fetchUrl', { url });
      } else {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('fetch failed');
        html = await resp.text();
      }
      const parsed = extractRecipeFromHtml(html, url);
      let photo = null;
      if (parsed.photoUrl) {
        photo = await imageUrlToDataUrl(parsed.photoUrl);
      }
      openEditor(normalizeDish({ ...parsed, id: '', photo, count: 0, logs: [] }));
      state.editingId = null;
      $('editorTitle').textContent = '确认导入菜谱';
      showToast('已抓取网页菜谱，确认后点击保存即可');
    } catch {
      showToast(isNativeIOS()
        ? '该网页暂时无法抓取，可复制菜谱文字用下方「智能识别」导入'
        : '浏览器受跨域限制无法直抓该网页，装成 iOS App 后支持直抓，或直接复制文字粘贴导入');
    }
  }

  // ===== Tab Switching =====
  function switchTab(tab) {
    state.activeTab = tab;
    document.querySelectorAll('.tab-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    const map = {
      dishes: 'pageDishes',
      discover: 'pageDiscover',
      calendar: 'pageCalendar',
      rank: 'pageRank',
      backup: 'pageBackup'
    };
    Object.entries(map).forEach(([k, id]) => {
      $(id).classList.toggle('active', k === tab);
    });
    $('searchBarWrap').classList.toggle('hidden', tab !== 'dishes');
    if (tab === 'discover' && discoverState.items.length === 0) searchOnlineRecipes('');
    if (tab === 'calendar') renderCalendar();
    if (tab === 'rank') renderRanking();
    if (tab === 'backup') renderBackupStats();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // ===== Event Wiring =====
  function bindEvents() {
    // Bottom tab bar
    document.querySelectorAll('.tab-btn').forEach((btn) => {
      btn.onclick = () => switchTab(btn.dataset.tab);
    });

    // Topbar actions
    $('openAddBtn').onclick = () => openEditor();
    $('openRandomBtn').onclick = () => openRandomSheet();

    // Search
    $('searchInput').oninput = (e) => {
      state.search = e.target.value;
      $('searchClearBtn').classList.toggle('show', state.search.length > 0);
      renderDishes();
    };
    $('searchClearBtn').onclick = () => {
      state.search = '';
      $('searchInput').value = '';
      $('searchClearBtn').classList.remove('show');
      renderDishes();
      $('searchInput').focus();
    };

    // Categories
    $('categoryBar').onclick = (e) => {
      const chip = e.target.closest('[data-cat]');
      if (!chip) return;
      state.category = chip.dataset.cat;
      renderCategoryBar();
      renderDishes();
    };

    // Sort & View toggle
    $('sortPills').onclick = (e) => {
      const btn = e.target.closest('[data-sort]');
      if (!btn) return;
      state.sort = btn.dataset.sort;
      savePrefs();
      renderDishes();
    };
    $('viewGridBtn').onclick = () => {
      state.viewMode = 'grid';
      savePrefs();
      renderDishes();
    };
    $('viewListBtn').onclick = () => {
      state.viewMode = 'list';
      savePrefs();
      renderDishes();
    };

    // Dish grid click delegation
    $('dishGrid').onclick = (e) => {
      const plusBtn = e.target.closest('[data-quick-add]');
      if (plusBtn) {
        e.stopPropagation();
        incrementDishCook(plusBtn.dataset.quickAdd, todayStr(), true);
        return;
      }
      const card = e.target.closest('[data-dish-id]');
      if (card) {
        openDetail(card.dataset.dishId);
      }
    };

    // Calendar navigation & click
    $('calPrevBtn').onclick = () => {
      if (state.calMonth === 0) { state.calYear -= 1; state.calMonth = 11; }
      else state.calMonth -= 1;
      renderCalendar();
    };
    $('calNextBtn').onclick = () => {
      if (state.calMonth === 11) { state.calYear += 1; state.calMonth = 0; }
      else state.calMonth += 1;
      renderCalendar();
    };
    $('calTodayBtn').onclick = () => {
      const now = new Date();
      state.calYear = now.getFullYear();
      state.calMonth = now.getMonth();
      state.selectedDate = todayStr();
      renderCalendar();
    };
    $('calDaysGrid').onclick = (e) => {
      const cell = e.target.closest('[data-cal-date]');
      if (!cell) return;
      state.selectedDate = cell.dataset.calDate;
      renderCalendar();
    };
    $('dayLogList').onclick = (e) => {
      const item = e.target.closest('[data-open-detail]');
      if (item) openDetail(item.dataset.openDetail);
    };
    $('openBackfillBtn').onclick = () => openBackfillSheet(state.selectedDate);

    // Rank click
    $('rankList').onclick = (e) => {
      const item = e.target.closest('[data-open-detail]');
      if (item) openDetail(item.dataset.openDetail);
    };

    // Editor controls
    $('editorCatGrid').onclick = (e) => {
      const btn = e.target.closest('[data-edit-cat]');
      if (!btn) return;
      state.editingCategory = btn.dataset.editCat;
      renderEditorCategories();
    };

    const triggerPhotoSelect = () => $('photoFileInput').click();
    $('photoPicker').onclick = (e) => {
      if (e.target.closest('#removePhotoBtn')) return;
      triggerPhotoSelect();
    };
    $('changePhotoBtn').onclick = (e) => {
      e.stopPropagation();
      triggerPhotoSelect();
    };
    $('removePhotoBtn').onclick = (e) => {
      e.stopPropagation();
      state.editingPhoto = null;
      $('photoFileInput').value = '';
      updatePhotoPreview();
    };
    $('photoFileInput').onchange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      if (file.size > 20 * 1024 * 1024) {
        showToast('照片过大，请选择 20MB 以内的图片');
        return;
      }
      try {
        showToast('正在优化照片尺寸…');
        state.editingPhoto = await compressImage(file);
        updatePhotoPreview();
        showToast('照片已导入');
      } catch {
        showToast('照片导入失败，请换一张试试');
      }
    };

    $('addIngRowBtn').onclick = () => addIngredientRow();
    $('saveDishBtn').onclick = () => saveDishFromEditor();
    $('dishForm').onsubmit = (e) => {
      e.preventDefault();
      saveDishFromEditor();
    };

    // Detail actions
    $('detailEditBtn').onclick = () => {
      const dish = state.dishes.find((d) => d.id === state.detailId);
      if (!dish) return;
      closeSheet('detailBackdrop');
      openEditor(dish);
    };
    $('detailDeleteBtn').onclick = async () => {
      const dish = state.dishes.find((d) => d.id === state.detailId);
      if (!dish) return;
      if (!confirm(`确定删除「${dish.name}」吗？删除后无法恢复。`)) return;
      state.dishes = state.dishes.filter((d) => d.id !== dish.id);
      await removeDishFromStore(dish.id);
      closeSheet('detailBackdrop');
      renderAll();
      showToast(`已删除「${dish.name}」`);
    };

    // Random sheet actions
    $('randomCatBar').onclick = (e) => {
      const chip = e.target.closest('[data-rand-cat]');
      if (!chip) return;
      state.randomCategory = chip.dataset.randCat;
      renderRandomCatBar();
      rollRandomDish(false);
    };
    $('rerollRandomBtn').onclick = () => rollRandomDish(true);
    $('cookRandomBtn').onclick = () => {
      if (!state.randomDishId) return;
      const id = state.randomDishId;
      closeSheet('randomBackdrop');
      incrementDishCook(id, todayStr(), true);
    };

    // Backfill sheet actions
    $('backfillList').onclick = async (e) => {
      const btn = e.target.closest('[data-bf-dish]');
      if (!btn) return;
      const dt = $('backfillDateInput').value || todayStr();
      state.selectedDate = dt;
      const [yy, mm] = dt.split('-').map(Number);
      state.calYear = yy;
      state.calMonth = mm - 1;
      closeSheet('backfillBackdrop');
      await incrementDishCook(btn.dataset.bfDish, dt, true);
    };

    // Backup & settings
    $('exportBackupBtn').onclick = () => exportBackup();
    $('importBackupBtn').onclick = () => $('importFileInput').click();
    $('importFileInput').onchange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      await importBackupFile(file);
      e.target.value = '';
    };
    $('loadDemoBtn').onclick = () => addDemoDishes();
    $('clearAllBtn').onclick = async () => {
      if (state.dishes.length === 0) {
        showToast('当前已经是空的了');
        return;
      }
      if (!confirm(`确定清空全部 ${state.dishes.length} 道菜品记录吗？建议先导出备份！`)) return;
      state.dishes = [];
      await saveAllDishes([]);
      renderAll();
      showToast('已清空全部本地数据');
    };

    // Sheet backdrop close & buttons
    document.querySelectorAll('[data-close-sheet]').forEach((btn) => {
      btn.onclick = () => closeSheet(btn.dataset.closeSheet);
    });
    document.querySelectorAll('.sheet-backdrop').forEach((backdrop) => {
      backdrop.onclick = (e) => {
        if (e.target === backdrop) closeSheet(backdrop.id);
      };
    });

    // Toast undo
    $('toastUndoBtn').onclick = () => {
      if (state.undoAction) {
        const fn = state.undoAction;
        state.undoAction = null;
        fn();
      }
    };

    // Install banner
    $('closeInstallBanner').onclick = () => {
      $('installBanner').classList.add('hidden');
      savePrefs({ dismissInstall: true });
    };

    // Discover tab events
    document.querySelectorAll('[data-discover-mode]').forEach((btn) => {
      btn.onclick = () => {
        discoverState.mode = btn.dataset.discoverMode;
        document.querySelectorAll('[data-discover-mode]').forEach((b) => b.classList.toggle('active', b === btn));
        $('discoverSearchPanel').classList.toggle('hidden', discoverState.mode !== 'search');
        $('discoverImportPanel').classList.toggle('hidden', discoverState.mode !== 'import');
      };
    });
    $('onlineSearchBtn').onclick = () => searchOnlineRecipes($('onlineQueryInput').value);
    $('onlineQueryInput').onkeydown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        searchOnlineRecipes($('onlineQueryInput').value);
      }
    };
    $('discoverHotTags').onclick = (e) => {
      const btn = e.target.closest('[data-hot]');
      if (!btn) return;
      $('onlineQueryInput').value = btn.dataset.hot;
      searchOnlineRecipes(btn.dataset.hot);
    };
    $('onlineRandomDiscoverBtn').onclick = () => fetchRandomOnlineRecipe();
    $('discoverList').onclick = async (e) => {
      const impBtn = e.target.closest('[data-import-discover]');
      if (impBtn) {
        const item = discoverState.items[Number(impBtn.dataset.importDiscover)];
        if (item) await importDiscoverRecipe(item);
        return;
      }
      const editBtn = e.target.closest('[data-edit-discover]');
      if (editBtn) {
        const item = discoverState.items[Number(editBtn.dataset.editDiscover)];
        if (!item) return;
        let photo = item.photo || null;
        if (!photo && item.photoUrl) {
          showToast('正在加载菜品图片…');
          photo = await imageUrlToDataUrl(item.photoUrl);
        }
        openEditor(normalizeDish({ ...item, id: '', photo, count: 0, logs: [] }));
        state.editingId = null;
        $('editorTitle').textContent = '编辑并保存菜谱';
      }
    };
    $('fetchUrlRecipeBtn').onclick = () => importRecipeFromUrl($('recipeUrlInput').value);
    $('doubaoAskBtn').onclick = () => askDoubaoRecipe($('onlineQueryInput').value);
    $('xhsSearchBtn').onclick = () => openXiaohongshuSearch($('onlineQueryInput').value || '家常菜菜谱');
    $('saveDoubaoCfgBtn').onclick = () => {
      const apiKey = $('doubaoKeyInput').value.trim();
      const model = $('doubaoModelInput').value.trim() || DEFAULT_DOUBAO_MODEL;
      const url = $('doubaoUrlInput').value.trim() || DEFAULT_DOUBAO_URL;
      localStorage.setItem(DOUBAO_CFG_KEY, JSON.stringify({ apiKey, model, url }));
      showToast(apiKey ? '豆包 AI 配置已保存，去「发现」页试试吧' : '已保存配置（尚未填写 API Key）');
    };
    $('clearDoubaoCfgBtn').onclick = () => {
      localStorage.removeItem(DOUBAO_CFG_KEY);
      renderDoubaoConfigForm();
      showToast('已清除豆包 AI 配置');
    };
    $('parseTextRecipeBtn').onclick = async () => {
      const raw = $('recipeTextInput').value.trim();
      if (!raw) {
        showToast('请先粘贴菜谱文字');
        return;
      }
      const cfg = loadDoubaoConfig();
      let parsed = null;
      if (cfg.apiKey) {
        showToast('✨ 正在用豆包 AI 整理菜谱内容…');
        try {
          const sys = `将用户粘贴的小红书或下厨房菜谱整理成标准 JSON，仅输出 JSON：
{"name":"菜名","category":"家常菜|荤菜|素菜|汤羹|主食|凉菜|烘焙甜品|其他","ingredients":[{"name":"食材","amount":"用量"}],"steps":"1. 步骤一\\n2. 步骤二","note":"备注或小贴士"}`;
          const rec = await callDoubaoJSON(sys, raw.slice(0, 3000));
          parsed = {
            name: String(rec.name || '导入菜谱').slice(0, 40),
            category: CATEGORIES.includes(rec.category) ? rec.category : '家常菜',
            count: 0,
            logs: [],
            ingredients: Array.isArray(rec.ingredients) ? rec.ingredients : [],
            steps: String(rec.steps || '').trim(),
            note: String(rec.note || '由豆包 AI 整理导入').trim()
          };
        } catch {
          parsed = parseRecipeText(raw);
        }
      } else {
        parsed = parseRecipeText(raw);
      }
      if (!parsed) return;
      openEditor(normalizeDish({ ...parsed, id: '' }));
      state.editingId = null;
      $('editorTitle').textContent = '确认导入菜谱';
      showToast('已识别菜名、食材与步骤，确认后点击保存');
    };
  }

  function maybeShowInstallBanner(dismissed) {
    if (isNativeIOS()) return;
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (!isStandalone && !dismissed && isIOS) {
      $('installBanner').classList.remove('hidden');
    }
  }

  function registerSW() {
    if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
  }

  // ===== Boot =====
  async function boot() {
    const dismissed = loadPrefs();
    bindEvents();
    await initStorage();
    renderAll();
    maybeShowInstallBanner(dismissed);
    registerSW();
  }

  document.addEventListener('DOMContentLoaded', boot);
})();
