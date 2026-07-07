const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

// ボタンクリック時に「active」クラスをトグル（付与・削除）する
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});