//backend logic

// var sideA = "0";
// var sideB = "0";
// var sideC = "0";

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

// var equilateral = "Equilateral";
// var isosceles = "Isosceles";
// var scalene = "Scalene";

var geometry = function (sideA, sideB, sideC) {
  if ((sideA === sideB) && (sideA === sideC)) {
    return "Equilateral"
  }
  else if (((sideA === sideB) && (sideA !== sideC)) || ((sideB === sideC) && (sideB !== sideA)) || ((sideC === sideA) && (sideC !== sideB))) {
    return "Isosceles";
  }
  else if ((sideA !== sideB) && (sideB !== sideC)) {
    return "Scalene";
  }
  // else if ((sideA + sideB <= sideC) || (sideB + sideC <= sideA) || (sideC + sideA <= sideB)) {
  //   return "Not a triangle.";
  // }
  else {
    return "Not a triangle.";
  }
}


 $(document).ready(function (event) {
   $("form#new-triangle").submit(function(event) {
     event.preventDefault();

     var sideAInput = parseInt($("input#new-sideA").val());
     var sideBInput = parseInt($("input#new-sideB").val());
     var sideCInput = parseInt($("input#new-sideC").val());

     var newTriangle = new Triangle(sideAInput, sideBInput, sideCInput);

     $("#result").append(geometry(sideAInput, sideBInput, sideCInput));

     $("input#new-sideA").val("");
     $("input#new-sideB").val("");
     $("input#new-sideC").val("");
   });
 });


//frontend user interface
