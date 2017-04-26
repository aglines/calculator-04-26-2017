// This is the business (or back-end) logic:

var add = function(input1, input2) {
  flagWhichButton = "add";
  return input1 + input2;
};

var subtract = function(input1, input2) {
  flagWhichButton = "sub";
  return input1 - input2;
};

var multiply = function(input1, input2) {
  return input1 * input2;
};

var divide = function(input1, input2) {
  return input1 / input2;
};

// Everything below this line is the user interface (or front-end) logic:

$(document).ready(function() {
  $("form#compute").submit(function(event){
    event.preventDefault();
    var input1 = parseInt($("#input1").val());
    var input2 = parseInt($("#input2").val());

    var addResult = add(input1, input2);
    var subResult = subtract(input1, input2);


    if (flagWhichButton === "add") {
      console.log(flagWhichButton);
      $("#output").text(addResult);
      }
    else if (flagWhichButton === "sub") {
      console.log(flagWhichButton);

      $("#output").text(subResult);
    }
    else { }


  });



});
