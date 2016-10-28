// Business Logic
function isValid(userInput) {
  if (userInput < 1) {
    return false;
  }
} // isValid function

function pingPong(userInput) {
  var outputNumbers = [];

  for (var i = 1; i <= userInput; i++) {
    outputNumbers.push(i);
  }

  outputNumbers.forEach(function(number) {
    if (number % 15 === 0) {
      var fifteen = outputNumbers.indexOf(number);
      outputNumbers[fifteen] = "pingpong";
    } else if (number % 5 === 0) {
      var five = outputNumbers.indexOf(number);
      outputNumbers[five] = "pong";
    } else if (number % 3 === 0) {
      var three = outputNumbers.indexOf(number);
      outputNumbers[three] = "ping";
    }
  });

  return outputNumbers;

} // pingPong function



// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $("#pageOutput").empty();
    var userInput = parseInt($("#userNumber").val());
    var validInput = isValid(userInput);
    var output = pingPong(userInput);
    var list = "";

    if (validInput === false) {
      alert("Please enter a positive integer.")
    } else {
        for (var index = 0; index < output.length; index++) {
          list += "<li>"+output[index]+"</li>";
        }
      $("#pageOutput").append(list);
    }

  }); // submit
}); // document
