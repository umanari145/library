
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
        this.setHrefLink()

        let serializeData = $(`${this.formObj}`).serializeArray()
        var returnJson = {};
        for (var idx = 0; idx < serializeData.length; idx++) {
            returnJson[serializeData[idx].name] = serializeData[idx].value
        }
        const string = JSON.stringify(returnJson)
        let blob = new Blob([string], {type: 'text/plain'});
        document.getElementById("test_data_download").href = window.URL.createObjectURL(blob);

        //$('#test_data_download').click()では動かないので注意;
        $('#test_data_download')[0].click();
    }

    setHrefLink() {
        $('body').append(`<a href="#" style="display:none;" id="test_data_download" download="test_data.json">ダウンロード</a>`)
    }

    /**
     * すでにHTMLにある入力状態を復元するHTMLを記述
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
