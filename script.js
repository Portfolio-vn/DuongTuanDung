const BASE = {
  iot: '2. Hoạt động ngoại khóa/a. Sản phẩm cá nhân_ Chậu cây IOT',
  iotImgs: '2. Hoạt động ngoại khóa/a. Sản phẩm cá nhân_ Chậu cây IOT/Hình ảnh công việc trên lớp',
  awards: '2. Hoạt động ngoại khóa/c. Giải thưởng thành tích (Academic)',
  other: '2. Hoạt động ngoại khóa/d. Hoạt động khác',
  academic: '3. Tình trạng hồ sơ học thuật',
};

const DRIVE_VIDEO = {
  type: 'video',
  label: 'Video thuyết trình sản phẩm',
  path: 'https://drive.google.com/file/d/1abtqK1Jlvaz77dkorzl0op7XGQEhzO5h/view?usp=drive_link',
  preview: 'https://drive.google.com/file/d/1abtqK1Jlvaz77dkorzl0op7XGQEhzO5h/preview'
};

const classroomNames = [
  'Bản sao của z7154446046733_fa2ee7634fda3ca7603f492cf812d932.jpg',
  'Bản sao của z7181762222313_1fc217959303a99aa200a5f4e0257f84.jpg',
  'Bản sao của z7355963914338_65b320564fb472f88da1f73f9336b85d.jpg',
  'Bản sao của z7355963915727_e995b661fae0e82f90e67df05dcbd078.jpg',
  'Bản sao của z7355963917142_e57aafa30bdb5533f8e85992b76735fc.jpg',
  'Bản sao của z7355963979279_452972ba61c31c0544ed9779502400be.jpg',
  'Bản sao của z7355963981002_cd271a8c7a900da423afd29a64398738.jpg',
  'Bản sao của z7355963986951_b55fc35154fca852bce231bf72e62f1f.jpg',
  'Bản sao của z7355963998885_3500b48a1bc1e57a0cf4f8fb437e315d.jpg',
  'Bản sao của z7355964068561_777b00980d0acb1aad2403bd256f6f06.jpg',
  'Bản sao của z7355964068679_f28fb7723e8e5cc59e5875f7caeaf390.jpg'
];

function img(label, path, candidates = []) {
  return { type: 'image', label, path, candidates: [path, ...candidates] };
}

const DATA = {
  iot: {
    type: 'project',
    cat: 'Personal Project',
    year: '2025',
    title: 'Smart IoT Plant Pot — Automated Watering System',
    org: 'Personal Project · Hanoi-Amsterdam High School',
    desc: 'Built an ESP32-based plant monitoring and watering prototype. The project uses a soil-moisture sensor, temperature reading, relay-pump control, classroom build evidence, a technical report, a poster, and a presentation video.',
    media: [
      img('Main product photo', BASE.iot + '/z7207205101980_851c111fb7c26c851da7b670436d453b.jpg',
          [BASE.iot + '/z7207205101980_851c111fb7c26c851da7b670436d453b.png']),
      ...classroomNames.map((n, i) => img(`Classroom evidence ${i + 1}`, BASE.iotImgs + '/' + n))
    ],
    docs: [
      { type: 'pdf', label: 'Technical report', path: BASE.iot + '/BAO_CAO_CHAU_CAY_THONG_MINH.pdf' },
      { type: 'file', label: 'Presentation poster', path: BASE.iot + '/Poster Tuấn Dũng.pptx' },
      DRIVE_VIDEO
    ]
  },

  icpc: {
    cat: 'Academic Award',
    year: '2026',
    title: 'ICPC 2026 Achievement',
    org: 'Programming / AI project evidence',
    desc: 'Evidence for the ICPC 2026 award item in the academic achievements folder.',
    media: [img('ICPC 2026 certificate/photo', BASE.awards + '/ICPC 2026.jpg', [BASE.awards + '/ICPC 2026.png'])]
  },

  math: {
    cat: 'Academic Award',
    year: '2024–2025',
    title: 'Mathematics Awards & Excellent Student Certificates',
    org: 'District / City academic achievements',
    desc: 'A compact academic evidence set: city-level mathematics prize, district prize, excellent student certificate, and related transcript scan.',
    media: [
      img('City excellent student Mathematics certificate', BASE.awards + '/HS giỏi cấp thành phố.png', [BASE.awards + '/HS giỏi cấp thành phố.jpg']),
      img('Excellent student certificate', BASE.awards + '/HS xuất sắc.png', [BASE.awards + '/HS xuất sắc.jpg']),
      img('District Mathematics second prize', BASE.awards + '/Nhì toán cấp quận.png', [BASE.awards + '/Nhì toán cấp quận.jpg']),
      img('District & City Mathematics second prize', BASE.awards + '/Nhì toán Quận & Thành phố.png', [BASE.awards + '/Nhì toán Quận & Thành phố.jpg']),
      img('Academic scan', BASE.awards + '/Bản quét lúc1212.png', [BASE.awards + '/Bản quét lúc1212.jpg'])
    ]
  },

  tests: {
    cat: 'Academic Certificate',
    year: '2024–2026',
    title: 'SAT / IELTS Academic Test Evidence',
    org: 'SAT / IELTS academic profile',
    desc: 'Standardized test evidence for international university preparation. This section is separated into SAT and IELTS image evidence so reviewers can scan the profile quickly.',
    media: [
      img('SAT score image', BASE.awards + '/sat.png', [BASE.awards + '/sat.jpg', BASE.academic + '/b. IELTS, SAT, AP/sat.png', BASE.academic + '/b. IELTS, SAT, AP/sat.jpg']),
      img('IELTS score image', BASE.academic + '/b. IELTS, SAT, AP/ielts.png', [BASE.academic + '/b. IELTS, SAT, AP/ielts.jpg', BASE.academic + '/b. IELTS, SAT, AP/ielts.jpeg', BASE.awards + '/ielts.png', BASE.awards + '/ielts.jpg'])
    ]
  },

  chess: {
    cat: 'Sports',
    year: '2024',
    title: 'North Vietnam Chess Championship',
    org: 'Regional chess competition',
    desc: 'Evidence for the 2024 Northern Vietnam chess championship award.',
    media: [img('Chess championship certificate', BASE.other + '/giải vô địch cờ vua miền bắc 2024.png', [BASE.other + '/giải vô địch cờ vua miền bắc 2024.jpg'])]
  },

  stem: {
    cat: 'STEM / Clubs',
    year: '2025',
    title: 'Vice-head — STEM Hoa Binh',
    org: 'STEM outreach activity',
    desc: 'Leadership and organizing contribution in a STEM-oriented school activity.',
    media: [img('Vice-head STEM Hoa Binh evidence', BASE.other + '/Vice-head-Stem-hòa bình.jpg',
      [BASE.other + '/Vice-head-Stem-hòa bình.png', BASE.other + '/Vice-head-Stem-hòa bình.jpeg', BASE.other + '/Vice-head-Stem-hòa bình.webp'])]
  },

  warm: {
    cat: 'Volunteering',
    year: '2025',
    title: 'Warm Winter 2025 Charity Campaign',
    org: 'Community service',
    desc: 'Charity activity supporting students and communities through donated goods and organized support.',
    media: [img('Warm Winter 2025 photo', BASE.other + '/Muadongam_2025.jpg', [BASE.other + '/Muadongam_2025.png'])]
  },

  leprosy: {
    cat: 'Volunteering',
    year: '2025',
    title: 'Gift Programme for Leprosy Patients',
    org: 'Community service',
    desc: 'Volunteer evidence for a charity gift-giving programme supporting leprosy patients.',
    media: [img('Gift programme certificate', BASE.other + '/chương trình quà tặng bệnh nhân phong 2025.png', [BASE.other + '/chương trình quà tặng bệnh nhân phong 2025.jpg'])]
  },

  candle: {
    cat: 'Volunteering',
    year: '2025',
    title: 'Candle-lighting Gratitude Activity',
    org: 'Community service',
    desc: 'Volunteer evidence for a memorial and gratitude activity.',
    media: [img('Candle-lighting gratitude certificate', BASE.other + '/thiện nguyện thắp nến tri ân 2025.png', [BASE.other + '/thiện nguyện thắp nến tri ân 2025.jpg'])]
  },

  mid: {
    cat: 'Volunteering',
    year: '2023–2024',
    title: 'Mid-Autumn Love — Connecting Hearts',
    org: 'Community service',
    desc: 'Volunteer evidence for a Mid-Autumn charity and community activity.',
    media: [img('Mid-Autumn charity certificate', BASE.other + '/trung thu yêu thương kết nối trái tim 2023-24.png', [BASE.other + '/trung thu yêu thương kết nối trái tim 2023-24.jpg'])]
  }
};

const AWARDS = ['icpc', 'math', 'tests'];
const ACTIVITIES = ['stem', 'warm', 'leprosy', 'candle', 'mid', 'chess'];
let currentMedia = [];
let currentIndex = 0;

function escapeAttr(v) {
  return String(v ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function fileName(path) {
  return String(path || '').split('/').pop();
}
function candidateAttr(m) {
  return escapeAttr(JSON.stringify(m.candidates || [m.path]));
}
function imageListAttr(list) {
  return escapeAttr(JSON.stringify(list.map(m => ({ label: m.label, path: m.path, candidates: m.candidates || [m.path] }))));
}
function tryNextImageSource(img, fallbackHtml) {
  let list = [];
  try { list = JSON.parse(img.dataset.candidates || '[]'); } catch (e) {}
  const i = Number(img.dataset.tryIndex || '0');
  if (i < list.length - 1) {
    img.dataset.tryIndex = String(i + 1);
    img.src = list[i + 1];
    return true;
  }
  img.outerHTML = fallbackHtml || '<div class="image-missing">Image preview unavailable</div>';
  return false;
}

function ensureModal() {
  if (document.getElementById('evidenceModal')) return;
  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal" id="evidenceModal" aria-hidden="true" onclick="handleBackdrop(event)">
      <div class="modal-card">
        <button class="modal-close" onclick="closeEvidence()">×</button>
        <div class="modal-info">
          <p class="section-kicker" id="modalCategory">Category</p>
          <h2 id="modalTitle">Title</h2>
          <p class="modal-meta" id="modalMeta">Meta</p>
          <div id="modalDesc"></div>
        </div>
        <div class="modal-media">
          <button class="nav-btn prev" onclick="showMedia(currentIndex-1)">‹</button>
          <div id="mediaStage"></div>
          <button class="nav-btn next" onclick="showMedia(currentIndex+1)">›</button>
        </div>
        <div class="thumbs" id="thumbs"></div>
      </div>
    </div>
  `);
}

function evidenceCount(list) {
  return `${list.length} image${list.length > 1 ? 's' : ''}`;
}

function imageCard(media) {
  const images = media.filter(m => m.type === 'image');
  if (!images.length) {
    return `<div class="row-visual"><div class="image-missing"><i class="fa-regular fa-image"></i><span>No image</span></div></div>`;
  }
  const first = images[0];
  const controls = images.length > 1
    ? `<button class="row-nav prev" type="button" onclick="cycleRowImage(event,-1)">‹</button>
       <button class="row-nav next" type="button" onclick="cycleRowImage(event,1)">›</button>
       <div class="row-dots">${images.map((_, i) => `<span class="row-dot ${i === 0 ? 'active' : ''}"></span>`).join('')}</div>`
    : '';
  return `<div class="row-visual" data-images='${imageListAttr(images)}' data-index="0">
    <img src="${escapeAttr(first.path)}" alt="${escapeAttr(first.label)}" data-candidates='${candidateAttr(first)}' data-try-index="0"
      onerror="tryNextImageSource(this, '<div class=&quot;image-missing&quot;><i class=&quot;fa-regular fa-image&quot;></i><span>Image preview unavailable</span></div>')">
    ${controls}
  </div>`;
}

function cycleRowImage(event, step) {
  event.stopPropagation();
  const card = event.currentTarget.closest('.row-visual');
  if (!card) return;
  let items = [];
  try { items = JSON.parse(card.dataset.images || '[]'); } catch (e) {}
  if (!items.length) return;
  const next = (Number(card.dataset.index || '0') + step + items.length) % items.length;
  card.dataset.index = String(next);
  const item = items[next];
  const img = card.querySelector('img');
  img.dataset.tryIndex = '0';
  img.dataset.candidates = JSON.stringify(item.candidates || [item.path]);
  img.src = item.path;
  img.alt = item.label || '';
  card.querySelectorAll('.row-dot').forEach((d, i) => d.classList.toggle('active', i === next));
}

function renderRows() {
  const awardList = document.getElementById('awardList');
  if (awardList) awardList.innerHTML = AWARDS.map(id => rowHTML(id, 'evidence-row')).join('');

  const activityList = document.getElementById('activityList');
  if (activityList) activityList.innerHTML = ACTIVITIES.map(id => activityHTML(id)).join('');
}

function rowHTML(id, cls) {
  const e = DATA[id];
  return `<article class="${cls} visual-row reveal" onclick="openEvidence('${id}')">
    ${imageCard(e.media)}
    <div class="row-content">
      <div class="year-inline">${e.year} · ${e.cat}</div>
      <h3>${e.title}</h3>
      <p>${e.desc}</p>
      <button class="btn ghost inline-action" type="button">Open evidence</button>
    </div>
  </article>`;
}

function activityHTML(id) {
  const e = DATA[id];
  const filter = e.cat.includes('STEM') ? 'stem' : e.cat.includes('Sports') ? 'sports' : 'volunteering';
  return `<article class="activity-row visual-row reveal" data-filter="${filter}" onclick="openEvidence('${id}')">
    ${imageCard(e.media)}
    <div class="row-content">
      <span class="tag">${e.cat}</span>
      <div class="year-inline">${e.year}</div>
      <h3>${e.title}</h3>
      <p><strong>${e.org}</strong> — ${e.desc}</p>
      <button class="btn ghost inline-action" type="button">View evidence</button>
    </div>
  </article>`;
}

function openEvidence(id) {
  ensureModal();
  const e = DATA[id];
  if (!e) return;
  currentMedia = (e.media || []).filter(m => m.type === 'image');
  currentIndex = 0;

  document.getElementById('modalCategory').textContent = e.cat;
  document.getElementById('modalTitle').textContent = e.title;
  document.getElementById('modalMeta').textContent = `${e.org} · ${e.year}`;
  document.getElementById('modalDesc').innerHTML = `<p>${e.desc}</p>`;

  buildThumbs();
  showMedia(0);
  document.getElementById('evidenceModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openProjectDoc(i) {
  ensureModal();
  const project = DATA.iot;
  const doc = (project.docs || [])[i];
  if (!doc) return;
  currentMedia = [doc];
  currentIndex = 0;

  document.getElementById('modalCategory').textContent = doc.type === 'video' ? 'Video Evidence' : doc.type === 'pdf' ? 'Technical Report' : 'Poster File';
  document.getElementById('modalTitle').textContent = doc.label;
  document.getElementById('modalMeta').textContent = `${project.title} · ${project.year}`;
  document.getElementById('modalDesc').innerHTML = `<p>The report, poster, and presentation video are separated from the classroom image gallery so each file is easy to find and review.</p>`;

  buildThumbs();
  showMedia(0);
  document.getElementById('evidenceModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEvidence() {
  const modal = document.getElementById('evidenceModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}
function handleBackdrop(e) {
  if (e.target.id === 'evidenceModal') closeEvidence();
}

function showMedia(i) {
  ensureModal();
  const st = document.getElementById('mediaStage');
  if (!currentMedia.length) {
    st.innerHTML = '<div class="file-card"><i class="fa-solid fa-folder-open"></i><h3>No evidence attached</h3></div>';
    return;
  }

  if (i < 0) i = currentMedia.length - 1;
  if (i >= currentMedia.length) i = 0;
  currentIndex = i;

  const m = currentMedia[i];
  if (m.type === 'image') {
    st.innerHTML = `<img class="media-img" src="${escapeAttr(m.path)}" alt="${escapeAttr(m.label)}" data-candidates='${candidateAttr(m)}' data-try-index="0"
      onclick="openLightbox(this.src)"
      onerror="tryNextImageSource(this, fileFallback('${escapeAttr(m.label)}','${escapeAttr(m.path)}'))">`;
  } else if (m.type === 'video') {
    const preview = escapeAttr(m.preview || m.path);
    st.innerHTML = `<div class="video-stage"><iframe src="${preview}" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <div class="file-side"><h3>${escapeAttr(m.label)}</h3><p>Google Drive presentation video</p><a href="${escapeAttr(m.path)}" target="_blank"><i class="fa-solid fa-up-right-from-square"></i> Open video</a></div></div>`;
  } else {
    const icon = m.type === 'pdf' ? 'fa-file-pdf' : 'fa-file-powerpoint';
    const action = m.type === 'pdf' ? 'Open report' : 'Open poster';
    st.innerHTML = `<div class="file-card separated-file"><i class="fa-regular ${icon}"></i><h3>${escapeAttr(m.label)}</h3><p>${escapeAttr(fileName(m.path))}</p><a href="${escapeAttr(m.path)}" target="_blank"><i class="fa-solid fa-up-right-from-square"></i> ${action}</a></div>`;
  }

  document.querySelectorAll('.thumb').forEach((t, k) => t.classList.toggle('active', k === i));
  const display = currentMedia.length > 1 ? 'grid' : 'none';
  document.querySelectorAll('.nav-btn').forEach(b => b.style.display = display);
}
function fileFallback(label, path) {
  return `<div class="file-card"><i class="fa-regular fa-image"></i><h3>${label}</h3><p>Preview unavailable. Export HEIC to JPG/PNG and keep the file name exactly the same.</p><a href="${path}" target="_blank">Open file</a></div>`;
}

function buildThumbs() {
  const t = document.getElementById('thumbs');
  if (!t) return;
  if (currentMedia.length <= 1) {
    t.innerHTML = '';
    return;
  }
  t.innerHTML = currentMedia.map((m, i) => {
    if (m.type === 'image') {
      return `<button class="thumb" onclick="showMedia(${i})"><img src="${escapeAttr(m.path)}" data-candidates='${candidateAttr(m)}' data-try-index="0" onerror="tryNextImageSource(this,'IMG')"></button>`;
    }
    return `<button class="thumb" onclick="showMedia(${i})">${m.type.toUpperCase()}</button>`;
  }).join('');
}

function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (!lb || !img) return;
  img.src = src;
  lb.classList.add('open');
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
}

function updateSensors() {
  const mEl = document.getElementById('moistureRange');
  const tEl = document.getElementById('tempRange');
  if (!mEl || !tEl) return;
  const m = +mEl.value;
  const t = +tEl.value;
  document.getElementById('moistureValue').textContent = m + '%';
  document.getElementById('tempValue').textContent = t + '°C';
  const on = m < 30;
  const q = document.getElementById('pumpStatus');
  q.textContent = on ? 'PUMP ON' : 'PUMP OFF';
  q.classList.toggle('on', on);
  document.getElementById('pumpDesc').textContent = on ? 'Soil is dry. Relay pump is activated.' : 'Soil moisture is within a safe range.';
  const log = document.getElementById('consoleLog');
  if (log) log.textContent = `[DATA] Moisture:${m}% Temp:${t}°C Pump:${on ? 'ON' : 'OFF'}\n` + log.textContent.slice(0, 240);
}

function bindFilters() {
  document.querySelectorAll('#filters button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.activity-row').forEach(r => r.classList.toggle('hidden', f !== 'all' && r.dataset.filter !== f));
    });
  });
}

function reveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < innerHeight - 70) el.classList.add('visible');
  });
}
function navActive() {
  const sections = ['philosophy', 'awards', 'project', 'skills', 'activities', 'contact', 'overview', 'architecture', 'build', 'gallery', 'files'];
  let cur = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && scrollY >= el.offsetTop - 130) cur = id;
  });
  document.querySelectorAll('.top-nav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  const bar = document.getElementById('scrollbar');
  if (bar) bar.style.width = (scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100 + '%';
}

function projectDocCard(m, i) {
  const icon = m.type === 'pdf' ? 'fa-file-pdf' : m.type === 'video' ? 'fa-circle-play' : 'fa-file-powerpoint';
  const type = m.type === 'pdf' ? 'REPORT FILE' : m.type === 'video' ? 'VIDEO LINK' : 'POSTER FILE';
  const action = m.type === 'pdf' ? 'Open report' : m.type === 'video' ? 'Open video' : 'Open poster';
  const path = escapeAttr(m.path);
  return `<a class="project-doc-card reveal" href="${path}" target="_blank" rel="noopener">
    <div class="doc-mark"><span>${String(i + 1).padStart(2, '0')}</span><i class="fa-regular ${icon}"></i></div>
    <div class="doc-info"><small>${type}</small><h3>${m.label}</h3><p>${fileName(m.path)}</p><strong><i class="fa-solid fa-up-right-from-square"></i> ${action}</strong></div>
  </a>`;
}

function initProjectPage() {
  const project = DATA.iot;
  const gallery = document.getElementById('projectGallery');
  if (gallery) {
    gallery.className = 'gallery-grid';
    gallery.className = 'gallery-grid';
    gallery.innerHTML = project.media.map((m, i) => `<article class="gallery-card reveal">
      <img src="${escapeAttr(m.path)}" alt="${escapeAttr(m.label)}" data-candidates='${candidateAttr(m)}' data-try-index="0" onclick="openLightbox(this.src)" onerror="tryNextImageSource(this,'<div class=&quot;gallery-fallback&quot;><i class=&quot;fa-regular fa-image&quot;></i><span>Image preview unavailable</span><small>${escapeAttr(fileName(m.path))}</small></div>')">
      <div class="gallery-caption"><span>${String(i + 1).padStart(2, '0')}</span><h3>${m.label}</h3></div>
    </article>`).join('');
  }
  const files = document.getElementById('projectFiles');
  if (files) {
    files.className = 'project-doc-grid';
    files.innerHTML = (project.docs || []).map(projectDocCard).join('');
  }
}

window.addEventListener('scroll', () => { reveal(); navActive(); });
document.addEventListener('keydown', e => {
  const modal = document.getElementById('evidenceModal');
  if (e.key === 'Escape') { closeEvidence(); closeLightbox(); }
  if (modal && modal.classList.contains('open') && e.key === 'ArrowRight') showMedia(currentIndex + 1);
  if (modal && modal.classList.contains('open') && e.key === 'ArrowLeft') showMedia(currentIndex - 1);
});
document.addEventListener('DOMContentLoaded', () => {
  renderRows();
  bindFilters();
  updateSensors();
  initProjectPage();
  reveal();
  navActive();
});