

//Calling dayjs() without parameters returns a fresh Day.js object with the current date and time.

var currentTime = dayjs()
$('#currentDay').text(currentTime.format('dddd, MMM D, YYYY, HH:mm A'));



//CURRENT HOUR ON THE PLANNER: div id ="10" 
//Text AREA:  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
//SAVED BUTTON:  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//SAVED BUTTON:  <i class="fas fa-save" aria-hidden="true"></i>

//ADD EVENT LISTNER FOR CLICK EVENTS ON THE SAVE BUTTON. 


//this refers to the global object


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  var saveBtnEl = $('.btn');

  saveBtnEl.on('click', function () {

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //

    var btnEl = $(this);
    var textArea = btnEl.siblings('.description').val()
    var idHour = btnEl.parent().attr('id')
    localStorage.setItem(idHour,textArea)
    
  
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.

  });

  $('#9>textarea').val(localStorage.getItem('9'))
  $('#9>textarea').val(localStorage.getItem('9'))
  $('#9>textarea').val(localStorage.getItem('9'))
  $('#9>textarea').val(localStorage.getItem('9'))
  $('#9>textarea').val(localStorage.getItem('9'))
  $('#9>textarea').val(localStorage.getItem('9'))
  $('#9>textarea').val(localStorage.getItem('9'))
  $('#9>textarea').val(localStorage.getItem('9'))
  $('#9>textarea').val(localStorage.getItem('9'))

})


// var idHr = $('#10');
// var savebtnEL = $('.saveBtn');


// var idHour = dayjs();

// comparing ID to Current hour.

// if(idHour) {

//   .addClass('past')
//   .addClass('present')
//   .addClass('future')


//   .removeClass('past')
//   .removeClass('present')
//   .removeClass('future')

// }





//timeblockEl.addclass('class', 'past');


// .on('click', function() { - same as add addEventListener




//click event should use the time block id, 