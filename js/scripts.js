// This is the business (or back-end) logic:

var add = function(input1, input2) {
  return input1 + input2;
};

var subtract = function(input1, input2) {
  return input1 - input2;
};

var multiply = function(input1, input2) {
  return input1 * input2;
};

var divide = function(input1, input2) {
  return (input1 / input2).toFixed(5);
};

var square = function(input1) {
  return (input1 * input1);
}

var squareroot = function(input1){
  return (Math.sqrt(input1));
}

// Everything below this line is the user interface (or front-end) logic:

$(document).ready(function() {
  $("form#compute").submit(function(event){
    event.preventDefault();
    var input1 = parseInt($("#input1").val());
    var input2 = parseInt($("#input2").val());

    var mathType = $("#mathType").val();
    console.log(mathType);

    if (mathType === "add") {
      var result = add(input1, input2);
      $("#output").text(result);
      }
    if (mathType === "subtract") {
      var result = subtract(input1, input2);
      $("#output").text(result);
      }
    if (mathType === "multiply") {
      var result = multiply(input1, input2);
      $("#output").text(result);
      }
    if (mathType === "divide") {
      var result = divide(input1, input2);
      $("#output").text(result);
      }
    if (mathType === "square") {
      var result = square(input1);
      $("#output").text(result);
    }
    if (mathType === "sqrt") {
      var result = squareroot(input1);
      $("#output").text(result);
    }



  });



});
