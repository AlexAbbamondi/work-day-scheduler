$(document).ready(() => {
  //Displays the localstorage key value pair if applicable
  //for each loop to get key value pair and set it to the textarea with class of description
  $.each($('.time-block'), (index, item) => {
    const $item = $(item);
    const storedValue = localStorage[$item.attr('id')];
    if (!storedValue || !storedValue.length) {
      return;
    }

    const $textArea = $item.find('textarea.description');
    if (!$textArea.length) {
      return;
    }

    $textArea.val(storedValue);
  });

  //Selects the saveBtn --- adds click event to store the value of what is inside the textarea --- sets key value pair
  var saveBtn = $(".saveBtn");
  saveBtn.on("click", (evt) => {
    const $saveButton = $(evt.currentTarget);
    var value = $saveButton.siblings("textarea.description").val().trim();
    //get the id in this div
    var hour = $saveButton.parent().attr("id");
    localStorage.setItem(hour, value);
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

    const $timeSlot = $("#hour-" + hour);
    if($timeSlot && $timeSlot.length) {
      $timeSlot.children().eq(1).addClass(time);
    }
  }
});
