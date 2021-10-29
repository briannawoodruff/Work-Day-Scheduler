// reference to important DOM elements
var timeDisplayEl = $('#currentDay');
var saveBtn = $('.saveBtn');
// var description = $('.description');
var timeBlock = $('.time-block');
var hour = $('.hour');

var calenderInput = localStorage.getItem("dataObject") || "[]";
var calenderInputArr = JSON.parse(calenderInput);


// loop through each item in the array and grab
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
// handle project form submission
function scheduleTime() {
    var currentTime = moment().hour();

    // loop over each time block to see what time it is
    $(timeBlock).each(function() {

    })
  
  }
  


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
/* 1. setting local storage in jquery for each time?
2. creating an .on click event to do that
*/
// $(description).val(localStorage.getItem(description, hour))

saveBtn.on("click", function() {
  var time = $(this).siblings(".description").attr("id")
  var text = $(this).siblings(".description").val()
  calenderInputArr.push({time:time, value:text})
  console.log(calenderInputArr)
  localStorage.setItem("dataObject", JSON.stringify(calenderInputArr))
})

