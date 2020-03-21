



class TestClass{

    /**
     * ターゲットのフォームオブジェクト
     * @param object formObj フォームオブジェクト
     */
    constructor(formObj) {
        this.formObj = formObj
    }

    /**
     * すでにHTMLにある入力状態をJSON形式で出力
     */
    getSerializeData() {

        $('body').append(`<a href="#" style="display:none;" id="test_data_download" download="test_data.json">ダウンロード</a>`)
        let serializeData = $(`${this.formObj}`).serializeArray()
        var returnJson = {};
        /*本来は下記を使うとJSONに近くなるが、配列が上手く加工するのがめんどくさいので
        保留
        for (var idx = 0; idx < serializeData.length; idx++) {
            let arrName = serializeData[idx].name;
            let arrValue = serializeData[idx].value;
            if (arrName.match(/\[\]$/g) != null) {
                //エラー
                returnJson[arrName].push(arrValue)
            } else {
                returnJson[arrName] = arrValue
            }
        }*/
        const string = JSON.stringify(serializeData)
        let blob = new Blob([string], {type: 'text/plain'});
        document.getElementById("test_data_download").href = window.URL.createObjectURL(blob);

        //$('#test_data_download').click()では動かないので注意;
        $('#test_data_download')[0].click();
    }


    /**
     * すでにHTMLにある入力状態を復元するHTMLを記述
     * 例 $('input[name="name"]').val('山田太郎').change()
     */
    getFormsInputHtml() {

        let inputArr = [
            'input',
            'select',
            'textarea'
        ];

        let formSelect = inputArr.map((v)=>{
            return `${this.formObj} ${v}`
        }).join(',')

        let jsMessage = ''
        $(`${formSelect}`).each(function(i,e) {
            var tagName = $(e).prop('tagName')
            var type = $(e).prop('type')
            var formName = $(e).attr('name') || ''
            var formVal = $(e).val()

            if (formName !== '') {
                var tagName2 = tagName.toLowerCase()
                var selecter = `${tagName2}[name="${formName}"]`
                if (['radio','checkbox'].indexOf(type) >= 0) {
                    if ($(e).prop('checked')) {
                        jsMessage += `$('${selecter}[value="${formVal}"]').prop('checked', true).change()\n`
                    }
                } else if (tagName2 == 'textarea') {
                    jsMessage += `$('${selecter}').val('${formVal}').change()\n`
                } else {
                    jsMessage += `$('${selecter}').val('${formVal}').change()\n`
                }
            }
        })
        console.log(jsMessage)
    }

}
var testClass = new TestClass('form[name="inputform"]');
