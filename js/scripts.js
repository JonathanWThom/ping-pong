// Business Logic
function isValid(userInput) {
  

} // isValid function

function pingPong(userInput) {



} // pingPong function



// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userNumber").val();
    var output = pingPong(userInput);

    $("#pageOutput").text(output);

  }); // submit
}); // document
