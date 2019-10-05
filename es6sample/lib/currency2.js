//名前つきエクスポート(複数いける)
//export function currency2(num) {
//    console.log("format2 します" + num)
//}
//
//export function currency2_1(num) {
//    console.log("format 2_1します" + num)
//}

// ↓
// 分解してかくと下記のようになる
//
function currency2(num) {
    console.log("format2 します" + num)
}

function currency2_1(num) {
    console.log("format2_1します" + num)
}

export {
    currency2,
    //下記のようにaliasを組むことも可能
    currency2_1 as cur2_1,
}
