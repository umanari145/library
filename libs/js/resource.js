var $ = require('jquery');

//select2
require('select2');

//datepicker
require('jquery-ui/ui/widgets/datepicker.js');
require('jquery-ui/ui/i18n/datepicker-ja.js');

//datatable
require( 'datatables.net-dt')
require( 'datatables.net-scroller/js/dataTables.scroller.js');

//ckeditor
const ClassicEditor = require( '@ckeditor/ckeditor5-build-classic');

//lean-modal
var leanModal = require("lean-modal");

//スコープが閉じているのでグローバルオブジェクト(windowに格納)
window.$ = window.jQuery = $;
window.ClassicEditor = ClassicEditor;
window.leanModal = leanModal;
