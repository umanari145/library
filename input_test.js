
class TestClass{

    /**
     * ターゲットのフォームオブジェクト
     * @param object formObj フォームオブジェクト
     */
    constructor(formObj) {
        this.formObj = formObj
    }

    /**
     * HTMLに出力するHTMLを出す
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

            if (formName !== '' && formVal !== '') {
                var tagName2 = tagName.toLowerCase()
                var selecter = `${tagName2}[name="${formName}"]`
                if (['radio','checkbox'].indexOf(type) < 0) {
                    jsMessage += `$('${selecter}').val('${formVal}').change()\n`
                } else if (type == 'radio') {
                    jsMessage += `$('${selecter}[value="${formVal}"]').prop('checked', true).change()\n`
                } else if (type == 'checkbox') {
                    jsMessage += `$('${selecter}[value="${formVal}"]').prop('checked', true).change()\n`
                } else if (tagName2 == 'textarea') {
                    jsMessage += `$('${selecter}).val('${formVal}').change()\n`
                }
            }
        })
        console.log(jsMessage)
    }
}
var testClass = new TestClass('form[name="inputform"]');
