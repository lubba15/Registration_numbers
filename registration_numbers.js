var ul = document.getElementById('regNumber');
 function registrtionNumbers() {
   var input = document.getElementById('name').value;

   var plate = document.createElement('div');
   plate.classList.add('myReg');

   const text = input.value;
   var li = document.createTextNode(input);
   plate.appendChild(li);
   document.body.appendChild(plate);
    input.value = "";
//   regNumbers.push(plate);
 }
 // var user = document.getElementById("myInput").value;
    //var filter = user.toUpperCase();
