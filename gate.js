(() => {
  if (location.pathname.endsWith('love.html')) return;

  const hasMaxLove = () => localStorage.getItem('loveMax') === 'true';

  function showRetryNotification() {
    const existing = document.getElementById('retryNotice');
    if (existing) return;
    const banner = document.createElement('div');
    banner.id = 'retryNotice';
    banner.style.cssText = 'position:fixed;top:18px;left:50%;transform:translateX(-50%);background:#ffffff;box-shadow:0 10px 24px rgba(47,42,44,0.2);border:1px solid #efe3e9;border-radius:999px;padding:10px 16px;font-family:Nunito, sans-serif;font-size:14px;color:#2f2a2c;z-index:9999;';
    banner.textContent = 'Please reach Max Love 💖 first. Try again!';
    document.body.appendChild(banner);
    setTimeout(() => banner.remove(), 2000);
  }

  function blockAndRedirect(e) {
    if (hasMaxLove()) return;
    e.preventDefault();
    e.stopPropagation();
    showRetryNotification();
    window.location.href = 'love.html';
  }

  document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (target) blockAndRedirect(e);
  }, true);

  if (!hasMaxLove()) {
    showRetryNotification();
    window.location.href = 'love.html';
  }
})();
