var $ = require('jquery');
var moment = require('moment');
require('jquery-ui/ui/widgets/datepicker');
$(function(){
  var obj = $("#hogehoge");
  var timeStr = moment().format("YYYY-MM-DD");
  console.log(timeStr);
  $('.datepicker').datepicker();
});
