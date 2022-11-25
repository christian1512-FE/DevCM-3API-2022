

//Calling dayjs() without parameters returns a fresh Day.js object with the current date and time.

var currentDay = dayjs()
$('#currentDay').text(currentDay.format('dddd, MMM D, YYYY, HH:mm A'));

//CHANGE IT TO MAKE MORE SENSE


//this refers to the global object


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

var saveBtnEl = $('.btn');

saveBtnEl.on('click', function () {


  var btnEl = $(this);
  var textArea = btnEl.siblings('.description').val()
  var idHour = btnEl.parent().attr('id')
  localStorage.setItem(idHour, textArea)

});

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?


// The each() method specifies a function to run for each matched element.
// The parseInt method parses a value as a string and returns the first integer.




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

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.


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


