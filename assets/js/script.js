// reference to DOM elements
var timeDisplayEl = $('#currentDay');
var saveBtn = $('.saveBtn');

// WHEN I refresh the page
// THEN the saved events persist
// set up local storage and first thing that is read
var calenderInput = localStorage.getItem("dataObject") || "[]";
var calenderInputArr = JSON.parse(calenderInput);

// loop through each item in the array, grab each item to then display if there is an item
for (i = 0; i < calenderInputArr.length; i++) {
  var timeID = calenderInputArr[i].time
  var valueVal = calenderInputArr[i].value
  $('#' + timeID).val(valueVal);
  console.log(timeID)
  console.log(valueVal)
  console.log($('#' + timeID))
}

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
/* 1. create a function that uses momentjs to know what the current time is and then show on the calender if it's in the past, present, or future with the classes in css
for loop [$("").each(function ()] and if/ else statements in jquery? */
function timeTracker() {
  var currentTime = moment().hour();

  // loop over each time block to compare to current time
  $(".time-block").each(function () {
    // parsing through each time block to get an integer to compare to the time integer
    var blockTime = parseInt($(this).siblings(".description").attr("id"));
    
    // past time
    if (blockTime < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    // present time
    else if (blockTime === currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    // future time
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
}

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// add .on to the save button and save the time and description that is input
saveBtn.on("click", function () {
  var time = $(this).siblings(".description").attr("id")
  var text = $(this).siblings(".description").val()
  calenderInputArr.push({ time: time, value: text })
  console.log(calenderInputArr)
  localStorage.setItem("dataObject", JSON.stringify(calenderInputArr))
})
// run again
timeTracker();