////// Business Logic //////
function isValid(userInput, firstDivisor, secondDivisor) {
  if (userInput < 1) {
    return false;
  } else if (firstDivisor < 1) {
    return false;
  } else if (secondDivisor < 1) {
    return false;
  }
} // isValid function

function pingPong(userInput, firstDivisor, secondDivisor, firstDivisorName, secondDivisorName) {
  var outputNumbers = [];

  console.log(secondDivisor);

  for (var i = 1; i <= userInput; i++) {
    outputNumbers.push(i);
  }

  outputNumbers.forEach(function(number) {
    if (number % (firstDivisor*secondDivisor) === 0) {
      var both = outputNumbers.indexOf(number);
      outputNumbers[both] = firstDivisorName + secondDivisorName;
    } else if (number % firstDivisor  === 0) {
      var first = outputNumbers.indexOf(number);
      outputNumbers[first] = firstDivisorName;
    } else if (number % secondDivisor === 0) {
      var second = outputNumbers.indexOf(number);
      outputNumbers[second] = secondDivisorName;
    }
  });

  var outputList = ""
  for (var index = 0; index < outputNumbers.length; index++) {
    outputList += "<li>" + outputNumbers[index] + "</li>";
  }

  return outputList;

} // pingPong function


////// User Interface Logic //////
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $("#pageOutput").empty();
    var userInput = parseInt($("#userNumber").val());

    var firstDivisor = parseInt($("#divisorOne").val());
    var firstDivisorName = $("#divisorOneName").val();

    var secondDivisor = parseInt($("#divisorTwo").val());
    var secondDivisorName = $("#divisorTwoName").val();

    var validInput = isValid(userInput, firstDivisor, secondDivisor);
    var output = pingPong(userInput, firstDivisor, secondDivisor, firstDivisorName, secondDivisorName);

    if (validInput === false) {
      alert("Please only use positive integers");
    } else {
      $("#pageOutput").append(output);
    }


  }); // submit
}); // document
