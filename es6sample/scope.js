
funcHoisting();
//funcHoistingを使用前に書くと挙動が違う
function funcHoisting() {
    var hensuu ="test"
    console.log(hensuu);
    if (true) {
        console.log(hensuu); //外のスコープだがvarなので外部のスコープなので使える
        var hensuu ="test2"
        console.log("--ブロックスコープの中--");
        console.log(hensuu);
        //この中では外の変数を使える
        console.log("--ブロックスコープの中の変更はきく--")
        console.log(hensuu);
    }

    console.log("--関数の外 中の変更の影響を受ける--")
    console.log(hensuu)
}

console.log("-----------------------");
console.log("-----------------------");
console.log("-----------------------");
console.log("-----------------------");

console.log("----------letだとスコープをキッチり判定するので上記の問題が起こらない-------------");

funcHoisting2();
function funcHoisting2() {
    let hensuu2 ="aaaaaa"
    console.log("引数の外だと使えない");
    console.log(hensuu2);
    if (true) {
        let hensuu2 = "test2"; //スコープの外なので宣言ができる 本来同じスコープならエラーになるので
        console.log("--ブロックスコープの中の変更はきく--")
        console.log(hensuu2);
    }

    console.log("--関数の中の影響を受けない--")
    console.log(hensuu2)
}