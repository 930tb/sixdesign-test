  /* JavaScript */
    function toggleMenu() {
    const menu = document.getElementById('menu');
    const trigger = document.querySelector('.hamburger');
    const headerLogo = document.querySelector('.logo'); /* ロゴを取得 */
    const headerColor = document.querySelector('.header-color'); /* header-colorを取得 */

    menu.classList.toggle('open');
    trigger.classList.toggle('open');

    /* ロゴコンテナとheader-colorの表示/非表示を切り替える */
    headerLogo.classList.toggle('hidden');
    headerColor.classList.toggle('hidden');
  }