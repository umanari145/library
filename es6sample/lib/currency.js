//自動名前つき(default)エクスポート
//export default function currency(num) {
//    console.log("formatします" + num)
//}
// ↓
// 分解してかくと下記の２行になる
// (1ファイルにき1つの関数、1つのクラスのみ)
function currency(num) {
    console.log("formatします" + num)
}

export default currency
