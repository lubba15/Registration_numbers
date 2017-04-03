var ul = document.getElementById('regNumber');
var input = document.querySelector('#name');

 function registration_numbers() {

   if (input.value ==="" || input.value.trim("").length <= 0) {
     return
   }
   var plate = document.createElement('li')
   plate.classList.add('myReg');
   plate.innerHTML = input.value;
    ul.appendChild(plate);

   document.getElementById("name").value = "";
 }

  function checkReg(){
  var option = document.getElementById('option').value;
  var capetown = document.getElementById('CapeTown');
  var Bellville = document.getElementById('bellville');
  var Paarl = document.getElementById('paarl');
  var All = document.getElementById('all');
//  var ul = document.querySelectorAll('myReg');

     for (var i = 0; i < ul.children.length; i++){
     var regList = ul;
    var towns = ul.children[i].textContent.toUpperCase();

      if(option === "paarl" && towns.startsWith("CJ")){
      regList.children[i].style.display = 'block'
    }
     else if(option === "Cape Town" && towns.startsWith("CA")){
     regList.children[i].style.display = 'block';
   }
    else if(option === "Bellville" && towns.startsWith("CY")){
     regList.children[i].style.display = 'block';
   }
   else if(option === "All"){
     regList.children[i].style.display = 'block';
   }
   else {
    regList.children[i].style.display = 'none';
    }
   }
 };
