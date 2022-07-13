var $ = require('jquery');

require('select2');

require('jquery-ui/ui/widgets/datepicker.js');
require('jquery-ui/ui/i18n/datepicker-ja.js');

require( 'datatables.net-dt')
require( 'datatables.net-scroller/js/dataTables.scroller.js');


import html2canvas from 'html2canvas'

//slick
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

//ckeditor
const ClassicEditor = require( '@ckeditor/ckeditor5-build-classic');

var leanModal = require("lean-modal");

//swwetalert
import swal from 'sweetalert';


//sugar
const Sugar = require('Sugar');
const SugarLanguage =  require("sugar-language")

const moment = require('moment');

import Validator from 'validatorjs';

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
window.Swiper = Swiper;

//jqueryがグローバルに展開されている必要があるため
//ここでrequireを入れる必要がある
require('paginationjs');
