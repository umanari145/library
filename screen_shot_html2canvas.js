
/**
 * スクショツール
 * @param  string targetSelector スクショとる部分
 */
function html2canvasWrapper(targetSelector){
    html2canvas($(targetSelector),{
      onrendered: function(canvas){
        //imgタグのsrcの中に、html2canvasがレンダリングした画像を指定する。
        var imgData = canvas.toDataURL();
        $('body').append('<img id="result" src="">')
        document.getElementById("result").src = imgData;
      }
    });
}
