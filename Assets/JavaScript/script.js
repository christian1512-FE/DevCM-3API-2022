
var currentDay = dayjs()
$('#currentDay').text(currentDay.format('dddd, MMM D, YYYY, HH:mm A'));

var saveBtnEl = $('.btn');

saveBtnEl.on('click', function () {


  var btnEl = $(this);
  var textArea = btnEl.siblings('.description').val()
  var idHour = btnEl.parent().attr('id')
  localStorage.setItem(idHour, textArea)

});


function compTime() {                                         //COMPARING TIME FUNCTION
  var currentDayTime = dayjs().hour();                        //CURRENT DAY & TIME

  $('.time-block').each(function () {                         //JQUERY FUNCTION FOR .TIMEBLOCK CLASS, FOR "EACH" APPLYS TO ALL .TIME-BLOCK ELEMENTS
    var timeBlockNow = parseInt($(this).attr('id'));          //VARAIBLE TIMEBLOCKNOW, USES THE PERSEINT METHOD PARSES THE ID STRING VALUE AND RETURNS IT AS INTEGER. 

    if (timeBlockNow < currentDayTime) {                      //IF STATEMENT COMPARING CURRENT DAY/TIME TO THE TIME-BLOCKS TIME
      $(this).addClass('past');                               //USING 'THIS' TO ADDCLASS TO PAST, PRESENT, FUTURE
    } else if (timeBlockNow === currentDayTime) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }

  })
}



$('#9>textarea').val(localStorage.getItem('9'))
$('#10>textarea').val(localStorage.getItem('10'))
$('#11>textarea').val(localStorage.getItem('11'))
$('#12>textarea').val(localStorage.getItem('12'))
$('#13>textarea').val(localStorage.getItem('13'))
$('#14>textarea').val(localStorage.getItem('14'))
$('#15>textarea').val(localStorage.getItem('15'))
$('#16>textarea').val(localStorage.getItem('16'))
$('#17>textarea').val(localStorage.getItem('17'))



compTime();


