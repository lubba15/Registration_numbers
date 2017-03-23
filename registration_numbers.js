var ul = document.getElementById('regNumber');
 function registrtionNumbers() {
   var input = document.getElementById('name').value;

   var plate = document.createElement('div');
  //  var li = document.appendChild('li');
   plate.classList.add('myReg');
   var li = document.createTextNode(input);
   plate.appendChild(li);
   document.body.appendChild(plate);
   document.getElementById("name").value = "";
  // regNumbers.push(plate);
 }
 // var user = document.getElementById("myInput").value;
    //var filter = user.toUpperCase();


function allTown(){
    if (document.getElementById('Cape Town').checked) {
        checkTown('CA');

    } else if(document.getElementById('Paarl').checked) {
        checkTown('CJ');

    } else if (document.getElementById('Bellville').checked) {
        checkTown('CY')

    } else if (document.getElementById('All').checked) {
        document.body.appendChild(plate);
}
}
function checkTownReg(location) {
  var allTown = [];
  for (var i = 0; i < regNumbers.length; i++) {
    if (document.body.children[i].textContent.startsWith(location)) {
      // fromTownReg.push(regNumbers)
      document.body.children[i].style.display = 'block';
    }else{
      document.body.children[i].style.display = 'none';
    }
  }
}
//for (i = 0; i < tr.length; i++) {
//    td = tr[i].getElementsByTagName("td")[0];
  //  if (td) {
  //    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //    tr[i].style.display = "";
    //  } else {
  //      tr[i].style.display = "none";
    //  }
    //}
//  }
//
