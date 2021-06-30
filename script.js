$(document).ready(function () {
  //Selects the saveBtn --- adds click event to store the value of what is inside the textarea
  //Set the localstorage key value pair ---sets empty array --pushes values to array -- gets items value and sends it to description
  var saveBtn = $(".saveBtn");
  saveBtn.on("click", function () {
    var value = $(this).siblings(".description").val().trim();

    localStorage.setItem("key", JSON.stringify(value));
    var desc = [];
    desc.push(value);
    $(".description").value = JSON.parse(localStorage.getItem("key")) || [];
  });

  //Selects the currentDay p tag and sets the date in its place
  setInterval(() => {
    var currentDay = $("#currentDay");
    const currentTime = moment().format("MMM Do, YYYY hh:mm:ss");
    currentDay.text(currentTime);
  }, 1000);

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


