const responses = {
  berat: 'Terima kasih sudah mengakui perasaanmu. Kamu boleh berhenti sejenak. Jika terasa sulit dihadapi sendiri, hubungi orang yang kamu percaya.',
  lelah: 'Kamu sudah berusaha. Coba beri tubuhmu jeda: minum air, longgarkan bahu, atau beristirahat sebentar.',
  biasa: 'Hari yang biasa juga punya tempat. Adakah satu hal kecil yang kamu butuhkan saat ini?',
  tenang: 'Nikmati ruang tenang ini. Perhatikan satu hal sederhana yang membuatmu merasa nyaman hari ini.',
  baik: 'Senang kamu merasa baik. Luangkan sebentar untuk menghargai hal yang membuat hari ini terasa menyenangkan.'
};

document.querySelectorAll('[data-mood]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-mood]').forEach(item => {
      item.setAttribute('aria-pressed', String(item === button));
    });
    document.getElementById('mood-response').textContent = responses[button.dataset.mood];
  });
});

function openLinkedArticle() {
  const article = document.getElementById(window.location.hash.slice(1));
  if (article instanceof HTMLDetailsElement) article.open = true;
}
window.addEventListener('hashchange', openLinkedArticle);
openLinkedArticle();
