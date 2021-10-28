// reference to important DOM elements
var timeDisplayEl = $('#currentDay');
var saveBtn = $('#saveBtn');
var description = $('.description');
var timeBlock = $('.time-block');
var hour = $('.hour');

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// handle displaying the time
function displayTime() {
    var rightNow = moment();
    timeDisplayEl.text(rightNow.format('MMM DD, YYYY'));
  }
displayTime();


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
/* 1. create a function that uses momentjs to know what the current time is and then show on the calender if it's in the past, present, or future
for loop [$("").each(function ()] and if/ else statements in jquery? */ 
// handle project form submission
function scheduleTime() {
    var currentTime = moment().hour();

    // loop over each time block to see what time it is
    $(timeBlock).each(function (){

    })
  
  }
  


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
/* 1. setting local storage in jquery for each time
2. creating an .on click event to do that
*/
$(description).val(localStorage.getItem(description, hour))

saveBtn.on("click", function() {
  console.log(this);
  var input = $(this).siblings(description).val().trim();
  localStorage.setItem(input)
})

