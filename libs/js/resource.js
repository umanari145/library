var $ = require('jquery');

require('select2');

require('jquery-ui/ui/widgets/datepicker.js');
require('jquery-ui/ui/i18n/datepicker-ja.js');

require( 'datatables.net-dt')
require( 'datatables.net-scroller/js/dataTables.scroller.js');


//html2tocanvas
import html2canvas from 'html2canvas'

//ckeditor
const ClassicEditor = require( '@ckeditor/ckeditor5-build-classic');

//lean-modal
var leanModal = require("lean-modal");

//swwetalert
import swal from 'sweetalert';

//sugar
const Sugar = require('Sugar');
const SugarLanguage =  require("sugar-language")

//moment
const moment = require('moment');

//validation
import Validator from 'validatorjs';

//typeahead
require('typeahead.js');

//スコープが閉じているのでグローバルオブジェクト(windowに格納)
window.$ = window.jQuery = $;
window.ClassicEditor = ClassicEditor;
window.leanModal = leanModal;
window.moment = moment;
window.Sugar = Sugar;
window.SugarLanguage = SugarLanguage;
window.Validator = Validator;
window.html2canvas = html2canvas;

//jqueryがグローバルに展開されている必要があるため
//ここでrequireを入れる必要がある
require('paginationjs');
