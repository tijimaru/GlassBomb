// プラスボタン要素を取得
const plusBtn = document.querySelector('.plus-btn');

// ボタンがクリックされた時の処理（開け閉め）
plusBtn.addEventListener('click', function () {
    document.body.classList.toggle('menu-open');
});

// --- 追加・修正部分 ---

// ① ページが読み込まれたら、最初についている 'menu-open' を外してレイヤーを開く
window.addEventListener('load', function () {
    // ほんの一瞬だけ待ってから外すと、アニメーションが確実に実行されます
    setTimeout(() => {
        document.body.classList.remove('menu-open');
    }, 100);
});

// ② メニュー内のすべてのリンク（aタグ）を取得
const menuLinks = document.querySelectorAll('.menu ul li a');

menuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // 通常のパッとしたページ遷移をいったん止める
        event.preventDefault();

        // 遷移先のURLを取得
        const targetUrl = this.getAttribute('href');

        // menu-open をつけて、青いレイヤーを閉じる（画面を覆う）アニメーションを開始
        document.body.classList.add('menu-open');

        // アニメーションが完了する時間（CSSに合わせて500ms）待ってからページ遷移
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 500); // 500ms = 0.5秒
    });
});