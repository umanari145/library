


var arr = ['a', 1, "2", null, "" , undefined]

for(var i = 0; i < arr.length; i++) {
    console.log(toInt(arr[i]))
}

console.log('文字と数字の結合')

console.log(1 + '')  //1 undefinedにはならない
console.log(1 + '0') //10
console.log(1 + '2') //12
console.log("1" + "2") //12
console.log(parseInt(''))//NaN

console.log('数字で使うべきでない処理')
console.log("1000".replace(/(\d)(?=(\d\d\d)+$)/g, '$1,')) //1,000

//var price = 1000
//console.log(price.replace(/(\d)(?=(\d\d\d)+$)/g, '$1,')) // price.replace is not a function エラー


var arr = ['a',1, "2", null, "¥2,345" , undefined]

console.log('toIntの処理')
for(var i = 0; i < arr.length; i++) {
    console.log(toInt(arr[i]))
}

console.log('全角変換')
//空白、undefinded,null,数値は落ちるので要注意
var arr = ['９',, "2", 8, "¥2,345" , undefined, null]
var arr = ['９',"2", '7', "2,345"]
for(var i = 0; i < arr.length; i++) {
    console.log(convertZentoHan(arr[i]))
}


/**
 * 数値返還
 * @param  string 値の返還
 * @return integer 数値化された値
 */
function toInt(v) {
    v = trimPriceStr(v);
    if (v !== '' && v !== undefined && v !== null && isNaN(v) == false) {
        return v
    } else {
        return 0
    }
}

/**
 * 存在チェック
 * @return
 */
function isEmpty(v) {
    return (v === undefined || v === '' || v === null)
}

/**
 * 金額系のカンマセット
 * @param  string price 金額
 * @return カンマ付与
 */
function convertPrice(price) {
    if (price == '' || price === undefined) {
        return ''
    }
    if (isNaN(price) === false) {
        price = String(price)
    }
    price = price.replace(/,/g, '');
    price = price.replace(/[^0-9]/g, '');
    price = price.replace(/^0+/g, '');
    price = price.replace(/(\d)(?=(\d\d\d)+$)/g, '$1,');
    return price
}

/**
 * 金額についたカンマや円マークを取り、数値化
 * @param  string priceStr 金額文字列
 * @return string          カンマ、円マーク除去
 */
function trimPriceStr(priceStr) {
    if (typeof (priceStr) == "string" || priceStr instanceof String) {
        priceStr = priceStr.replace(/¥/g,'');
        priceStr = priceStr.replace(/,/g,'');
        priceStr = convertZentoHan(priceStr);
        if (priceStr == '') {
            priceStr = 0;
        }
    }
    return parseInt(priceStr)
}

/**
 * 全角を半角に
 * @return {[type]} [description]
 */
function convertZentoHan(num) {

    if(num != "0"){
        //全角を半角にする(正規表現部分を変更することでアルファベットも可能)
        num = num.replace(/[０-９]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) - 65248);
        });
        return num
    }
}
