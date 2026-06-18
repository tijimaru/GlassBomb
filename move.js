// プラスボタン要素を取得
const plusBtn = document.querySelector('.plus-btn');

// ボタンがクリックされた時の処理
plusBtn.addEventListener('click', function () {
    // bodyタグに対して 'menu-open' クラスをつけ外しする
    document.body.classList.toggle('menu-open');
});