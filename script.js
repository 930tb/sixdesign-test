// JavaScript
    function toggleMenu() {
    const menu = document.getElementById('menu');
    const trigger = document.querySelector('.hamburger');
    const logoContainer = document.querySelector('.logo-container-1'); // ロゴコンテナを取得

    menu.classList.toggle('open');
    trigger.classList.toggle('open');

    // ロゴコンテナの表示/非表示を切り替える
    logoContainer.classList.toggle('hidden');
  }