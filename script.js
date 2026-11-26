/* =========================================================
   1. BANK KARTU
   ========================================================= */
const TRUTHS = [
  "Apa hal paling memalukan yang pernah kamu lakukan di depan umum?",
  "Siapa orang terakhir yang kamu stalking di media sosial?",
  "Pernahkah kamu berbohong pada sahabatmu? Soal apa?",
  "Ceritakan pengalaman kencan paling canggung yang pernah kamu alami.",
  "Apa ketakutan terbesar yang belum pernah kamu ceritakan ke siapa pun?",
  "Siapa orang di ruangan ini yang paling ingin kamu kenal lebih dekat?",
  "Apa hal yang paling kamu sesali sampai sekarang?",
  "Pernahkah kamu pura-pura sakit untuk menghindari sesuatu? Ceritakan.",
  "Kalau harus menghapus satu aplikasi di HP-mu selamanya, aplikasi apa?",
  "Apa kebiasaan anehmu kalau sedang sendirian?",
  "Berapa lama waktu terlama kamu tidak mandi?",
  "Apa hal terakhir yang kamu cari di Google?",
  "Siapa orang yang paling sering kamu pikirkan akhir-akhir ini?",
  "Pernahkah kamu menangis karena film atau lagu? Apa judulnya?",
  "Apa rahasia kecil yang belum pernah kamu ceritakan ke teman-temanmu?",
  "Kalau bisa menukar hidup dengan satu orang di ruangan ini, siapa dan kenapa?",
  "Apa pujian terbaik yang pernah kamu terima?",
  "Kapan terakhir kali kamu tertawa sampai sakit perut? Karena apa?",
  "Apa hal yang bikin kamu langsung ilfeel pada seseorang?",
  "Pernahkah kamu membaca chat orang lain tanpa izin?",
  "Apa hal paling kekanak-kanakan yang masih kamu lakukan?",
  "Kalau kamu punya satu hari tanpa konsekuensi, apa yang akan kamu lakukan?",
  "Siapa guru atau orang dewasa yang paling berkesan buatmu? Kenapa?",
  "Apa mimpi paling aneh yang pernah kamu ingat?",
  "Berapa nilai ujian terburukmu? Bagaimana reaksi orang tuamu?",
  "Apa hal yang membuatmu paling tidak percaya diri?",
  "Siapa yang paling sering kamu pinjamkan uang, dan apakah sudah dibayar?",
  "Apa julukan yang paling tidak kamu sukai?",
  "Pernahkah kamu menyimpan dendam? Kepada siapa?",
  "Apa yang biasanya kamu lakukan saat sedang overthinking?",
  "Kalau hidupmu jadi film, judulnya apa?",
  "Apa yang akan kamu katakan ke dirimu sendiri 5 tahun lalu?",
  "Apa hal yang paling kamu malu akui kalau kamu suka?",
  "Ceritakan kejadian paling salah paham yang pernah kamu alami.",
  "Apa barang yang kamu beli lalu langsung kamu sesali?",
  "Berapa lama waktu terlama kamu bermain HP tanpa henti?",
  "Pernahkah kamu tertidur saat kencan, rapat, atau kelas? Ceritakan.",
  "Siapa orang yang paling berpengaruh dalam hidupmu?",
  "Apa hal yang kamu sembunyikan dari orang tuamu sampai sekarang?",
  "Kalau harus memilih antara uang banyak atau waktu luang banyak, pilih mana?",
  "Apa pencapaian kecil yang paling kamu banggakan?",
  "Hal apa yang paling sering kamu tunda?",
  "Apa komentar terburuk yang pernah kamu terima tentang penampilanmu?",
  "Siapa orang terakhir yang membuatmu tersenyum sendiri?",
  "Apa yang kamu lakukan demi membuat orang lain menyukaimu?",
  "Pernahkah kamu menyesali sesuatu yang tidak kamu lakukan? Apa itu?",
  "Apa lagu yang selalu membuatmu teringat seseorang?",
  "Apa hal yang paling kamu takuti dari menjadi dewasa?",
  "Kalau bisa menghapus satu kenangan, kenangan apa?",
  "Apa hal yang kamu anggap paling berlebihan dari dirimu?",
  "Siapa yang paling sering kamu bandingkan dengan dirimu sendiri?",
  "Pernahkah kamu berbuat curang saat ujian atau bermain? Ceritakan.",
  "Apa hal yang membuatmu merasa dicintai?",
  "Kalau harus memberi satu nasihat ke semua orang di sini, apa itu?",
  "Apa hal yang belum pernah kamu ceritakan ke siapa pun di ruangan ini?"
];

const DARES = [
  "Tirukan suara hewan pilihanmu sampai ada yang bisa menebaknya.",
  "Nyanyikan chorus lagu favoritmu dengan gaya opera.",
  "Kirim pesan \"Aku lagi mikirin kamu\" ke kontak terakhir di chat-mu.",
  "Lakukan 10 push-up sambil menyebutkan nama semua pemain.",
  "Berdiri dan bicara dengan gaya penyanyi dangdut selama 1 menit.",
  "Biarkan pemain di sebelah kananmu mengacak-acak rambutmu.",
  "Telepon seseorang dan bacakan puisi cinta buatanmu sendiri.",
  "Tirukan ekspresi wajah 5 orang di ruangan ini, biar mereka menebak.",
  "Menarilah tanpa musik selama 30 detik.",
  "Bicara dengan logat daerah pilihan pemain lain sampai giliranmu selesai.",
  "Makan sesendok sambal atau makanan pedas yang tersedia.",
  "Buat status atau story paling absurd yang kamu bisa.",
  "Biarkan pemain lain memilih 3 foto di galeri HP-mu untuk diperlihatkan.",
  "Lakukan plank selama 30 detik sambil bercerita.",
  "Tirukan iklan TV yang paling kamu hafal.",
  "Panggil semua pemain dengan sebutan \"Yang Mulia\" sampai giliran berikutnya.",
  "Berpasangan dengan pemain lain dan lakukan foto dengan gaya terbaik.",
  "Rekam voice note menyanyikan lagu anak-anak, lalu kirim ke grup chat.",
  "Berbicara tanpa menggunakan huruf \"a\" selama 1 menit.",
  "Lakukan joget TikTok yang sedang viral.",
  "Biarkan pemain lain menggambar sesuatu di tanganmu dengan pulpen.",
  "Kirim emoji acak ke 3 kontak di WhatsApp-mu tanpa penjelasan.",
  "Tirukan gaya bicara dosen atau guru yang paling kamu ingat.",
  "Berdiri di depan pintu dan sambut setiap orang yang lewat.",
  "Ceritakan lelucon terburukmu, harus bikin minimal satu orang tertawa.",
  "Lakukan aksi dramatis patah hati di depan kamera.",
  "Biarkan pemain di kiri dan kananmu memilih satu filter untuk selfie-mu.",
  "Nyanyikan sebuah lagu sambil menahan tawa sampai selesai.",
  "Tukar satu item pakaian dengan pemain lain selama 2 putaran.",
  "Jadi presenter berita dan bacakan chat terakhirmu dengan serius.",
  "Berbicara dengan suara robot selama 2 putaran.",
  "Minta pemain lain menulis satu kalimat, lalu ucapkan dengan 5 gaya berbeda.",
  "Kontes tatapan dengan pemain pilihanmu, yang kalah traktir minum.",
  "Tirukan gerakan hewan sampai ada yang menebak dengan benar.",
  "Baca bio media sosialmu dengan suara lantang.",
  "Sebutkan 10 nama buah dalam 10 detik.",
  "Berdiri dengan satu kaki sambil menyanyikan lagu kebangsaan.",
  "Biarkan pemain lain mengirim satu chat dari HP-mu (dalam pengawasan).",
  "Wawancarai pemain lain seolah kamu jurnalis dadakan.",
  "Tunjukkan gerakan olahraga paling aneh yang kamu tahu.",
  "Tirukan suara mesin atau benda selama 30 detik sampai ada yang menebak.",
  "Lakukan 15 jumping jack sambil menyebutkan warna.",
  "Ceritakan dongeng versi paling absurd yang bisa kamu buat, minimal 1 menit.",
  "Telepon teman dan minta dia menyanyikan satu lagu untukmu.",
  "Jadi pelayan selama satu putaran: ambilkan minuman untuk semua pemain.",
  "Biarkan pemain lain memilih satu lagu, kamu harus menyanyikannya.",
  "Jalan seperti model di tengah ruangan dengan penuh percaya diri.",
  "Bicara dengan bahasa isyarat buatanmu sendiri selama 1 menit.",
  "Tulis \"Aku sayang kamu\" di kertas, tempel di dahi sampai giliran berikutnya.",
  "Buat 3 petunjuk tentang sesuatu, pemain lain harus menebaknya.",
  "Sebutkan 5 hal yang kamu syukuri hari ini sambil berdiri di atas kursi.",
  "Biarkan pemain lain memberi pose, tahan pose itu selama 1 menit.",
  "Minta seseorang menyebut satu permintaan, lalu lakukan permintaan itu.",
  "Buat rap dadakan tentang orang yang ada di sebelahmu.",
  "Tirukan suara hewan yang dipilih pemain lain sampai giliranmu selesai."
];

/* =========================================================
   2. UTILITAS
   ========================================================= */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const escapeHtml = s => String(s).replace(/[&<>"']/g, c =>
  ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function shuffle(arr){
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createDeck(items){
  return { items, pool: shuffle([...items]), last: null };
}
function drawCard(deck){
  let reshuffled = false;
  if(deck.pool.length === 0){
    deck.pool = shuffle([...deck.items]);
    reshuffled = true;
    if(deck.pool.length > 1 && deck.pool[deck.pool.length - 1] === deck.last){
      [deck.pool[0], deck.pool[deck.pool.length - 1]] =
      [deck.pool[deck.pool.length - 1], deck.pool[0]];
    }
  }
  const card = deck.pool.pop();
  deck.last = card;
  return { card, reshuffled };
}

/* =========================================================
   3. PENGATURAN (tersimpan di localStorage)
   ========================================================= */
const settings = {
  freeMode: false,
  timer: false,
  timerDuration: 30,
  points: false,
  penalty: true,
  darkMode: false,
  customCards: { truth: [], dare: [] }
};

function loadSettings(){
  try{
    const saved = JSON.parse(localStorage.getItem('tod_settings') || '{}');
    Object.assign(settings, saved);
    if (!settings.customCards) settings.customCards = { truth: [], dare: [] };
    if (!Array.isArray(settings.customCards.truth)) settings.customCards.truth = [];
    if (!Array.isArray(settings.customCards.dare))  settings.customCards.dare = [];
  }catch(e){}
}
function saveSettings(){
  try{ localStorage.setItem('tod_settings', JSON.stringify(settings)); }catch(e){}
}

/* =========================================================
   4. SUARA (Web Audio API)
   ========================================================= */
let audioCtx = null;
let soundEnabled = (localStorage.getItem('tod_sound') || 'on') !== 'off';

function initAudio(){
  if(!audioCtx){
    try{ audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch(e){ return false; }
  }
  if(audioCtx.state === 'suspended') audioCtx.resume();
  return true;
}
function playTone(freq, duration, type, volume, delay = 0){
  if(!soundEnabled || !initAudio()) return;
  const t = audioCtx.currentTime + delay;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type || 'sine';
  osc.frequency.setValueAtTime(freq, t);
  gain.gain.setValueAtTime(volume || 0.08, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  osc.connect(gain); gain.connect(audioCtx.destination);
  osc.start(t); osc.stop(t + duration);
}

const Sound = {
  click: () => playTone(700, 0.05, 'square', 0.05),
  tick: () => playTone(1400, 0.025, 'square', 0.035),
  add: () => playTone(880, 0.07, 'sine', 0.07),
  remove: () => playTone(300, 0.09, 'sawtooth', 0.06),
  spinStart: () => {
    playTone(300, 0.12, 'sine', 0.08);
    playTone(420, 0.12, 'sine', 0.08, 0.06);
    playTone(560, 0.18, 'sine', 0.08, 0.12);
  },
  reveal: () => {
    playTone(523.25, 0.13, 'triangle', 0.09, 0);
    playTone(659.25, 0.13, 'triangle', 0.09, 0.09);
    playTone(783.99, 0.13, 'triangle', 0.09, 0.18);
    playTone(1046.5, 0.35, 'triangle', 0.11, 0.27);
  },
  timeTick: (urgent) => playTone(urgent ? 1200 : 900, 0.04, 'square', 0.04),
  timeUp: () => {
    playTone(300, 0.15, 'sawtooth', 0.1);
    playTone(250, 0.15, 'sawtooth', 0.1, 0.15);
    playTone(200, 0.35, 'sawtooth', 0.1, 0.3);
  },
  success: () => {
    playTone(659.25, 0.1, 'sine', 0.09, 0);
    playTone(880, 0.15, 'sine', 0.09, 0.1);
  },
  fail: () => {
    playTone(400, 0.15, 'sawtooth', 0.07);
    playTone(300, 0.2, 'sawtooth', 0.07, 0.13);
  }
};

/* =========================================================
   5. STATE
   ========================================================= */
const state = {
  players: [],
  rotation: 0,
  spinning: false,
  current: null,
  lastPicked: -1,
  round: 1,
  decks: { truth: null, dare: null },
  history: [],
  scores: {}
};

/* =========================================================
   6. LAYAR SETUP
   ========================================================= */
const nameInput = $('#nameInput');
const playerList = $('#playerList');
const startBtn = $('#startBtn');

function renderPlayers(){
  playerList.innerHTML = state.players.map((p, i) =>
    `<span class="chip">${escapeHtml(p)}<button data-remove="${i}" aria-label="Hapus ${escapeHtml(p)}">×</button></span>`
  ).join('');
  startBtn.disabled = state.players.length < 2;
  try{ localStorage.setItem('tod_players', JSON.stringify(state.players)); }catch(e){}
}

function addPlayer(){
  const name = nameInput.value.trim().replace(/\s+/g, ' ');
  if(!name) return;
  if(state.players.length >= 24){ alert('Maksimal 24 pemain ya.'); return; }
  if(state.players.some(p => p.toLowerCase() === name.toLowerCase())){
    alert('Nama itu sudah ada di daftar.');
    return;
  }
  state.players.push(name);
  nameInput.value = '';
  nameInput.focus();
  Sound.add();
  renderPlayers();
}

$('#addBtn').addEventListener('click', addPlayer);
nameInput.addEventListener('keydown', e => { if(e.key === 'Enter') addPlayer(); });
playerList.addEventListener('click', e => {
  const btn = e.target.closest('[data-remove]');
  if(!btn) return;
  Sound.remove();
  state.players.splice(Number(btn.dataset.remove), 1);
  renderPlayers();
});

startBtn.addEventListener('click', () => {
  if(state.players.length < 2) return;
  Sound.click();

  const allTruths = [...TRUTHS, ...settings.customCards.truth];
  const allDares  = [...DARES,  ...settings.customCards.dare];
  state.decks.truth = createDeck(allTruths);
  state.decks.dare  = createDeck(allDares);

  state.round = 1;
  state.rotation = 0;
  state.current = null;
  state.lastPicked = -1;
  state.spinning = false;
  state.history = [];
  state.scores = {};
  state.players.forEach(p => state.scores[p] = 0);

  renderHistory();
  renderScoreboard();
  updateRoundInfo();
  showScreen('game');
  drawWheel();
  resetStage();
});

$('#backBtn').addEventListener('click', () => {
  Sound.click();
  showScreen('setup');
  renderPlayers();
});

function showScreen(id){
  $$('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function updateRoundInfo(){
  $('#roundInfo').textContent = `Putaran ${state.round} · ${state.players.length} pemain`;
}

/* =========================================================
   7. TOGGLE SUARA
   ========================================================= */
const soundToggle = $('#soundToggle');
function renderSoundToggle(){
  soundToggle.textContent = soundEnabled ? '🔊' : '🔇';
  soundToggle.classList.toggle('muted', !soundEnabled);
}
soundToggle.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  try{ localStorage.setItem('tod_sound', soundEnabled ? 'on' : 'off'); }catch(e){}
  renderSoundToggle();
  if(soundEnabled) Sound.click();
});
renderSoundToggle();

/* =========================================================
   8. RODA PUTAR
   ========================================================= */
const canvas = $('#wheel');
const ctx = canvas.getContext('2d');
const SIZE = 600, CX = SIZE / 2, CY = SIZE / 2, R = SIZE / 2 - 14;
const COLORS = ['#FF4D3D','#FFC93C','#2B44FF','#00A878',
                '#FF6FD8','#7B2CBF','#00C2D1','#FF8C1A'];

function brightness(hex){
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}
function segmentAtPointer(){
  const n = state.players.length;
  if(n === 0) return 0;
  const seg = (Math.PI * 2) / n;
  let i = (-Math.PI / 2 - state.rotation - seg / 2) / seg;
  i = ((i % n) + n) % n;
  return Math.floor(i);
}

function drawWheel(){
  ctx.clearRect(0, 0, SIZE, SIZE);
  const n = state.players.length;
  if(!n) return;

  const seg = (Math.PI * 2) / n;
  ctx.save();
  ctx.translate(CX, CY);
  ctx.rotate(state.rotation);

  for(let i = 0; i < n; i++){
    const a0 = i * seg, a1 = a0 + seg;
    const color = COLORS[i % COLORS.length];

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, R, a0, a1);
    ctx.closePath();
    ctx.fillStyle = color; ctx.fill();
    ctx.lineWidth = 4; ctx.strokeStyle = '#12100E'; ctx.stroke();

    const mid = a0 + seg / 2;
    const abs = (mid + state.rotation) % (Math.PI * 2);
    const upside = Math.cos(abs) < 0;

    ctx.save();
    ctx.rotate(upside ? mid + Math.PI : mid);
    const fs = Math.max(12, Math.min(26, 250 / n + 11));
    ctx.font = `700 ${fs}px 'Space Grotesk', system-ui, sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = brightness(color) > 0.62 ? '#12100E' : '#FFFDF7';
    let name = state.players[i];
    if(name.length > 12) name = name.slice(0, 11) + '…';

    if(upside){ ctx.textAlign = 'left'; ctx.fillText(name, -(R - 30), 0); }
    else      { ctx.textAlign = 'right'; ctx.fillText(name, R - 30, 0); }
    ctx.restore();
  }
  ctx.restore();

  ctx.beginPath();
  ctx.arc(CX, CY, R + 4, 0, Math.PI * 2);
  ctx.lineWidth = 10; ctx.strokeStyle = '#12100E'; ctx.stroke();
}

const spinBtn = $('#spinBtn');
const stage = $('#stage');
const spinStatus = $('#spinStatus');

function resetStage(){
  stopTimer();
  stage.innerHTML = '';
  spinStatus.textContent = 'Siap di-spin!';
  spinBtn.disabled = false;
}

spinBtn.addEventListener('click', spin);

function spin(){
  if(state.spinning || state.players.length < 2) return;
  state.spinning = true;
  spinBtn.disabled = true;
  stage.innerHTML = '';
  spinStatus.textContent = 'Roda berputar...';
  Sound.spinStart();

  const n = state.players.length;
  let idx = Math.floor(Math.random() * n);
  if(n > 1 && idx === state.lastPicked){
    idx = (idx + 1 + Math.floor(Math.random() * (n - 1))) % n;
  }
  state.lastPicked = idx;

  const seg = (Math.PI * 2) / n;
  const target = -Math.PI / 2 - (idx * seg + seg / 2);
  const start = state.rotation;
  const turns = 5 + Math.floor(Math.random() * 3);
  let final = target;
  while(final < start + turns * Math.PI * 2) final += Math.PI * 2;

  const dur = 4000 + Math.random() * 700;
  const t0 = performance.now();
  let lastTickTime = t0;
  let lastTickSeg = segmentAtPointer();

  function frame(now){
    const p = Math.min(1, (now - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 4);
    state.rotation = start + (final - start) * eased;
    drawWheel();

    if(now - lastTickTime > 35){
      const currentSeg = segmentAtPointer();
      if(currentSeg !== lastTickSeg){
        lastTickSeg = currentSeg;
        lastTickTime = now;
        Sound.tick();
      }
    }
    if(p < 1) requestAnimationFrame(frame);
    else finishSpin(idx);
  }
  requestAnimationFrame(frame);
}

function finishSpin(idx){
  state.rotation = state.rotation % (Math.PI * 2);
  state.current = idx;
  state.spinning = false;
  drawWheel();
  spinStatus.innerHTML = `Giliran: <strong>${escapeHtml(state.players[idx])}</strong>`;
  renderMode();
}

/* =========================================================
   9. TIMER
   ========================================================= */
let timerInterval = null;
let timerEndTime = 0;
let lastTickSec = -1;

function startTimer(seconds){
  if(!settings.timer || settings.freeMode) return;
  stopTimer();
  timerEndTime = Date.now() + seconds * 1000;

  const fill = document.getElementById('timerFill');
  const number = document.getElementById('timerNumber');

  if(fill){
    fill.style.transition = 'none';
    fill.style.width = '100%';
    fill.style.background = 'var(--green)';
    // Force reflow
    void fill.offsetWidth;
    fill.style.transition = `width ${seconds}s linear`;
    fill.style.width = '0%';
  }

  timerInterval = setInterval(() => {
    const remaining = Math.max(0, Math.ceil((timerEndTime - Date.now()) / 1000));
    if(number){
      number.textContent = remaining;
      number.style.color = remaining <= 5 ? 'var(--red)' : 'var(--ink)';
      number.style.animation = (remaining <= 5 && remaining > 0) ? 'pulse .5s infinite' : '';
    }
    if(fill && remaining <= 5) fill.style.background = 'var(--red)';

    if(remaining <= 5 && remaining > 0 && remaining !== lastTickSec){
      lastTickSec = remaining;
      Sound.timeTick(remaining <= 3);
    }
    if(remaining <= 0){
      stopTimer();
      Sound.timeUp();
      if(number){
        number.textContent = '⏰';
        number.style.animation = 'pulse .5s infinite';
      }
    }
  }, 200);
}

function stopTimer(){
  if(timerInterval){ clearInterval(timerInterval); timerInterval = null; }
  lastTickSec = -1;
}

/* =========================================================
   10. ALUR: MODE → TRUTH/DARE → KARTU
   ========================================================= */
function renderMode(){
  stage.innerHTML = `
    <p class="prompt">Pilih sendiri atau biar sistem yang mengacak?</p>
    <div class="btn-row">
      <button class="btn" data-action="pick-self">Pilih Sendiri</button>
      <button class="btn btn-blue" data-action="pick-random">Acak Semua</button>
    </div>
    <button class="btn-skip" data-action="skip">Lewati pemain ini</button>`;
}

function renderChoice(){
  stage.innerHTML = `
    <p class="prompt">Pilih tantanganmu</p>
    <div class="btn-row">
      <button class="btn btn-blue" data-action="truth">Truth</button>
      <button class="btn btn-red" data-action="dare">Dare</button>
    </div>
    <button class="btn-skip" data-action="back-mode">← Kembali</button>`;
}

function showCard(type){
  const deck = state.decks[type];
  const { card, reshuffled } = drawCard(deck);
  const label = type === 'truth' ? 'TRUTH' : 'DARE';
  const playerName = state.players[state.current];

  const useTimer = settings.timer && !settings.freeMode;
  const usePoints = settings.points && !settings.freeMode;

  const timerHtml = useTimer ? `
    <div class="timer-display">
      <div class="timer-bar"><div class="timer-fill" id="timerFill"></div></div>
      <span class="timer-number" id="timerNumber">${settings.timerDuration}</span>
    </div>
  ` : '';

  let actionsHtml = '';
  if(usePoints){
    const penaltyText = settings.penalty ? '-1' : '0';
    actionsHtml = `
      <div class="btn-row" style="margin-top:16px">
        <button class="btn btn-green" data-action="success">✓ Berhasil +1</button>
        <button class="btn btn-red" data-action="fail">✗ Tolak ${penaltyText}</button>
      </div>
      <button class="btn btn-yellow big" data-action="next">Spin Berikutnya →</button>`;
  } else {
    actionsHtml = `<button class="btn btn-yellow big" data-action="next">Spin Berikutnya →</button>`;
  }

  stage.innerHTML = `
    ${timerHtml}
    <div class="card ${type}">
      <div class="card-label">${label}</div>
      <p class="card-text">${escapeHtml(card)}</p>
    </div>
    ${reshuffled ? '<p class="card-note">Semua kartu sudah terpakai — dek diacak ulang.</p>' : ''}
    ${actionsHtml}
  `;

  if(useTimer) startTimer(settings.timerDuration);

  Sound.reveal();
  launchConfetti();
  addHistory(playerName, type, card);
}

function markCardDone(message){
  const actionBtns = stage.querySelectorAll('[data-action="success"], [data-action="fail"]');
  actionBtns.forEach(b => { b.disabled = true; b.style.opacity = '.4'; });

  let badge = stage.querySelector('.done-message');
  if(!badge){
    badge = document.createElement('p');
    badge.className = 'done-message';
    const nextBtn = stage.querySelector('[data-action="next"]');
    if(nextBtn) stage.insertBefore(badge, nextBtn);
    else stage.appendChild(badge);
  }
  badge.textContent = message;
}

stage.addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if(!btn) return;

  switch(btn.dataset.action){
    case 'pick-self':
      Sound.click(); renderChoice();
      break;
    case 'pick-random':
      Sound.click(); showCard(Math.random() < 0.5 ? 'truth' : 'dare');
      break;
    case 'truth':
    case 'dare':
      Sound.click(); showCard(btn.dataset.action);
      break;
    case 'success': {
      Sound.success();
      stopTimer();
      const p = state.players[state.current];
      addScore(p, 1);
      markCardDone(`✓ ${p} +1 poin!`);
      break;
    }
    case 'fail': {
      Sound.fail();
      stopTimer();
      const p = state.players[state.current];
      if(settings.penalty){
        addScore(p, -1);
        markCardDone(`✗ ${p} -1 poin`);
      } else {
        markCardDone(`✗ ${p} melewati tantangan`);
      }
      break;
    }
    case 'skip':
      Sound.remove(); resetStage();
      break;
    case 'back-mode':
      Sound.click(); renderMode();
      break;
    case 'next':
      Sound.click();
      state.round++;
      updateRoundInfo();
      resetStage();
      break;
  }
});

/* =========================================================
   11. RIWAYAT
   ========================================================= */
const historyList = $('#historyList');

function addHistory(player, type, text){
  state.history.unshift({ player, type, text });
  if(state.history.length > 5) state.history.length = 5;
  renderHistory();
}
function renderHistory(){
  if(state.history.length === 0){
    historyList.innerHTML = '<p class="history-empty">Belum ada riwayat.</p>';
    return;
  }
  historyList.innerHTML = state.history.map(h => `
    <div class="history-item">
      <span class="history-type ${h.type}">${h.type === 'truth' ? 'T' : 'D'}</span>
      <span class="history-player">${escapeHtml(h.player)}</span>
      <span class="history-text">${escapeHtml(h.text)}</span>
    </div>
  `).join('');
}

/* =========================================================
   12. SKOR
   ========================================================= */
const scoreboard = $('#scoreboard');
const scoreboardList = $('#scoreboardList');

function renderScoreboard(){
  if(!settings.points || settings.freeMode){
    scoreboard.classList.add('hidden');
    return;
  }
  scoreboard.classList.remove('hidden');

  const sorted = Object.entries(state.scores)
    .sort((a, b) => b[1] - a[1]);

  scoreboardList.innerHTML = sorted.map(([name, score], i) => {
    const cls = score > 0 ? 'pos' : (score < 0 ? 'neg' : '');
    return `
      <div class="score-row">
        <span class="score-rank">${i + 1}.</span>
        <span class="score-name">${escapeHtml(name)}</span>
        <span class="score-value ${cls}">${score > 0 ? '+' : ''}${score}</span>
      </div>`;
  }).join('');
}

function addScore(player, delta){
  state.scores[player] = (state.scores[player] || 0) + delta;
  renderScoreboard();
}

$('#resetScoreBtn').addEventListener('click', () => {
  if(confirm('Reset semua skor ke 0?')){
    state.players.forEach(p => state.scores[p] = 0);
    renderScoreboard();
    Sound.click();
  }
});

/* =========================================================
   13. CONFETTI
   ========================================================= */
function launchConfetti(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const c = document.createElement('canvas');
  c.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;width:100vw;height:100vh;';
  c.width = window.innerWidth; c.height = window.innerHeight;
  document.body.appendChild(c);

  const cx2 = c.getContext('2d');
  const colors = ['#FF4D3D','#FFC93C','#2B44FF','#00A878','#FF6FD8','#7B2CBF'];
  const particles = [];
  const centerX = c.width / 2, centerY = c.height / 2;

  for(let i = 0; i < 90; i++){
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 12 + 4;
    particles.push({
      x: centerX, y: centerY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 5,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * 360,
      vr: (Math.random() - 0.5) * 24,
      life: 1
    });
  }

  const start = performance.now();
  const duration = 2200;

  function frame(now){
    const progress = Math.min(1, (now - start) / duration);
    cx2.clearRect(0, 0, c.width, c.height);

    particles.forEach(p => {
      p.vy += 0.45; p.vx *= 0.985;
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      p.life = 1 - progress;
      if(p.life <= 0) return;

      cx2.save();
      cx2.globalAlpha = p.life;
      cx2.translate(p.x, p.y);
      cx2.rotate(p.rot * Math.PI / 180);
      cx2.fillStyle = p.color;
      cx2.fillRect(-p.size/2, -p.size/4, p.size, p.size * 0.7);
      cx2.restore();
    });

    if(progress < 1) requestAnimationFrame(frame);
    else c.remove();
  }
  requestAnimationFrame(frame);
}

/* =========================================================
   14. RIPPLE
   ========================================================= */
document.addEventListener('click', e => {
  const btn = e.target.closest('.btn, .btn-skip');
  if(!btn || btn.disabled) return;

  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.2;
  const x = e.clientX - rect.left, y = e.clientY - rect.top;

  const ripple = document.createElement('span');
  ripple.style.cssText = `
    position:absolute;left:${x - size/2}px;top:${y - size/2}px;
    width:${size}px;height:${size}px;border-radius:50%;
    background:rgba(0,0,0,.22);transform:scale(0);
    pointer-events:none;animation:rippleAnim .55s ease-out forwards;
  `;
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}, true);

/* =========================================================
   15. MODAL SYSTEM
   ========================================================= */
function openModal(id){
  document.getElementById(id).classList.add('open');
}
function closeModal(id){
  document.getElementById(id).classList.remove('open');
}

$$('[data-close]').forEach(el => {
  el.addEventListener('click', () => {
    closeModal(el.dataset.close);
    Sound.click();
  });
});
$$('.modal').forEach(m => {
  m.addEventListener('click', e => {
    if(e.target === m) m.classList.remove('open');
  });
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){
    $$('.modal.open').forEach(m => m.classList.remove('open'));
  }
});

/* =========================================================
   16. PANEL PENGATURAN
   ========================================================= */
const freeModeToggle   = $('#freeModeToggle');
const timerToggle      = $('#timerToggle');
const timerDuration    = $('#timerDuration');
const timerDurationGrp = $('#timerDurationGroup');
const pointsToggle     = $('#pointsToggle');
const penaltyToggle    = $('#penaltyToggle');
const darkModeToggle   = $('#darkModeToggle');

function updateSettingsUI(){
  freeModeToggle.checked = settings.freeMode;
  timerToggle.checked    = settings.timer;
  timerDuration.value    = settings.timerDuration;
  pointsToggle.checked   = settings.points;
  penaltyToggle.checked  = settings.penalty;
  darkModeToggle.checked = settings.darkMode;

  // Free mode → disable dependent toggles
  $$('.setting-group[data-setting]').forEach(el => {
    el.classList.toggle('disabled', settings.freeMode);
  });

  timerDurationGrp.style.display = (settings.timer && !settings.freeMode) ? 'flex' : 'none';

  document.body.classList.toggle('dark', settings.darkMode);

  renderScoreboard();
}

function applySettingsAndSave(){
  saveSettings();
  updateSettingsUI();
}

freeModeToggle.addEventListener('change', e => {
  settings.freeMode = e.target.checked;
  Sound.click();
  applySettingsAndSave();
});
timerToggle.addEventListener('change', e => {
  settings.timer = e.target.checked;
  Sound.click();
  applySettingsAndSave();
});
timerDuration.addEventListener('change', e => {
  settings.timerDuration = Number(e.target.value);
  applySettingsAndSave();
});
pointsToggle.addEventListener('change', e => {
  settings.points = e.target.checked;
  Sound.click();
  applySettingsAndSave();
});
penaltyToggle.addEventListener('change', e => {
  settings.penalty = e.target.checked;
  Sound.click();
  applySettingsAndSave();
});
darkModeToggle.addEventListener('change', e => {
  settings.darkMode = e.target.checked;
  Sound.click();
  applySettingsAndSave();
});

$('#settingsBtn').addEventListener('click', () => {
  Sound.click();
  updateSettingsUI();
  openModal('settingsModal');
});

$('#resetAllBtn').addEventListener('click', () => {
  if(!confirm('Reset semua data? Pemain, skor, kartu custom, dan pengaturan akan dihapus.')) return;
  try{
    localStorage.removeItem('tod_players');
    localStorage.removeItem('tod_settings');
  }catch(e){}
  settings.freeMode = false;
  settings.timer = false;
  settings.timerDuration = 30;
  settings.points = false;
  settings.penalty = true;
  settings.darkMode = false;
  settings.customCards = { truth: [], dare: [] };
  state.players = [];
  state.scores = {};
  state.history = [];
  renderPlayers();
  renderHistory();
  renderScoreboard();
  updateSettingsUI();
  closeModal('settingsModal');
  Sound.remove();
  alert('Semua data sudah direset.');
});

/* =========================================================
   17. KARTU CUSTOM
   ========================================================= */
let currentCustomTab = 'truth';

$('#customCardsBtn').addEventListener('click', () => {
  Sound.click();
  renderCustomCards(currentCustomTab);
  openModal('customCardsModal');
});

$$('.custom-tabs .tab').forEach(tab => {
  tab.addEventListener('click', () => {
    Sound.click();
    $$('.custom-tabs .tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentCustomTab = tab.dataset.tab;
    renderCustomCards(currentCustomTab);
  });
});

$('#addCustomCardBtn').addEventListener('click', () => {
  const input = $('#customCardInput');
  const text = input.value.trim();
  if(!text){
    input.focus();
    return;
  }
  settings.customCards[currentCustomTab].push(text);
  saveSettings();
  input.value = '';
  input.focus();
  Sound.add();
  renderCustomCards(currentCustomTab);
});

$('#customCardInput').addEventListener('keydown', e => {
  if(e.key === 'Enter' && !e.shiftKey){
    e.preventDefault();
    $('#addCustomCardBtn').click();
  }
});

function renderCustomCards(type){
  const list = settings.customCards[type];
  const el = $('#customCardsList');

  if(list.length === 0){
    el.innerHTML = '<p class="custom-empty">Belum ada kartu custom.</p>';
    return;
  }

  el.innerHTML = list.map((text, i) => `
    <div class="custom-item">
      <span class="custom-text">${escapeHtml(text)}</span>
      <button class="custom-del" data-type="${type}" data-index="${i}" aria-label="Hapus">×</button>
    </div>
  `).join('');
}

$('#customCardsList').addEventListener('click', e => {
  const btn = e.target.closest('[data-index]');
  if(!btn) return;
  const type = btn.dataset.type;
  const index = Number(btn.dataset.index);
  settings.customCards[type].splice(index, 1);
  saveSettings();
  Sound.remove();
  renderCustomCards(type);
});

/* =========================================================
   18. INIT
   ========================================================= */
(function init(){
  loadSettings();

  try{
    const saved = JSON.parse(localStorage.getItem('tod_players') || '[]');
    if(Array.isArray(saved)) state.players = saved.filter(x => typeof x === 'string').slice(0, 24);
  }catch(e){}

  renderPlayers();
  renderHistory();
  updateSettingsUI();
  drawWheel();
})();

/* =========================================================
   19. SERVICE WORKER (PWA)
   ========================================================= */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.log('SW failed:', err));
  });
}