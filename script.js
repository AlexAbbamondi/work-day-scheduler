$(document).ready(function () {
  //Selects the saveBtn --- adds click event to store the value of what is inside the textarea
  var saveBtn = $(".saveBtn");
  saveBtn.on("click", function () {
    var value = $(this).siblings(".description").val();

    //////////ADD LOCALSTORAGE HERE//////////
  });

  //Selects the currentDay p tag and sets the date in its place
  var currentDay = $("#currentDay");
  var currentDate = moment().format("dddd, MMMM Do");
  currentDay.text(currentDate);

  //Getting current date and taking just the hours from it
  var now = new Date(Date.now());
  var currentHour = now.getHours();

  //Loop through the hours and select the appropriate class based on the id
  for (var hour = 9; hour < 18; hour++) {
    var time = "present";
    if (hour > currentHour) {
      time = "future";
    } else if (hour < currentHour) {
      time = "past";
    }

    const timeSlot = $("#hour-" + hour);
    if (timeSlot && timeSlot.length) {
      timeSlot.children().eq(1).addClass(time);
    }
  }
});
