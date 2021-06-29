$(document).ready(function() {

//Selects the saveBtn --- adds click event to store the value of what is inside the textarea
var saveBtn = $(".saveBtn");
saveBtn.on("click", function() {
    var value = $(this).siblings(".description").val();
    console.log(value);
})

//Selects the currentDay p tag and sets the date in its place
var currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM Do"));







})