// Para la música: pega aquí tu archivo en formato data URI (data:audio/mpeg;base64,...)
var AUDIO_SRC = "musica.mp3";
var bgm = document.getElementById('bgm'), mb = document.getElementById('music');
if (AUDIO_SRC) { bgm.src = AUDIO_SRC; mb.style.display = 'block'; }

mb.onclick = function () {
  if (bgm.paused) { bgm.play(); mb.classList.add('on'); } else { bgm.pause(); mb.classList.remove('on'); }
};

document.getElementById('openBtn').onclick = function () {
  document.getElementById('cover').classList.add('open');
  document.body.classList.add('show');
  if (AUDIO_SRC) { bgm.volume = .6; bgm.play().then(function(){ mb.classList.add('on'); }).catch(function(){}); }
  setInterval(petal, 700);
};

function petal() {
  var p = document.createElement('div');
  p.className = 'petal';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = (6 + Math.random() * 6) + 's';
  document.body.appendChild(p);
  setTimeout(function () { p.remove(); }, 12000);
}

var target = new Date(2026, 10, 27, 8, 0, 0).getTime();
function tick() {
  var t = Math.max(0, target - Date.now());
  document.getElementById('d').textContent = Math.floor(t / 864e5);
  document.getElementById('h').textContent = Math.floor(t % 864e5 / 36e5);
  document.getElementById('m').textContent = Math.floor(t % 36e5 / 6e4);
  document.getElementById('s').textContent = Math.floor(t % 6e4 / 1e3);
}
tick(); setInterval(tick, 1000);
