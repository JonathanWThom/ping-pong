// Business Logic
function isValid(userInput) {
  if (userInput < 1) {
    return false;
  }
} // isValid function

function pingPong(userInput) {
  var outputArray = [];

  for (var i = 0; i <= userInput; i++) {
    outputArray.push(i);
  }

  return outputArray;

} // pingPong function



// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#userNumber").val());
    var validInput = isValid(userInput);
    var output = pingPong(userInput);

    if (validInput === false) {
      alert("Please enter a positive integer.")
    } else {
      $("#pageOutput").append("<li>" + output + "</li>");
    }

  }); // submit
}); // document
