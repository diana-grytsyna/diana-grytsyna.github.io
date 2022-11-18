window.onload = (event) => {
    if(localStorage.length!=0) document.getElementById("deleteStorage").style.display = "block";
    if(localStorage.getItem("textStyle")!=null)document.getElementById("text2").style.fontStyle = localStorage.getItem("textStyle");
    if(document.cookie!=''){
        
        var result = confirm(document.cookie + "There are some cookies, delete to continue");
if(result===true){
    document.cookie = "triangleResults= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    window.location.reload();
}else{
    alert("Reload page");
}
    }else{
    document.getElementById("form-triangle").style.display = "block";
    }
    if(localStorage.getItem("arr2")!=null){
      console.log(localStorage.getItem("arr2"));
      document.getElementById("main-cont2").style.display = "none";
      displayList("list2", "arr2");
    }
    if(localStorage.getItem("arr3")!=null){
      console.log(localStorage.getItem("arr3"));
      document.getElementById("main-cont3").style.display = "none";
      displayList("list3", "arr3");
    }
    if(localStorage.getItem("arr5")!=null){
      console.log(localStorage.getItem("arr5"));
      document.getElementById("main-cont5").style.display = "none";
      displayList("list5", "arr5");
    }
    if(localStorage.getItem("arr4")!=null){
      console.log(localStorage.getItem("arr4"));
      document.getElementById("main-cont4").style.display = "none";
      displayList("list4", "arr4");
    }
    if(localStorage.getItem("arr6")!=null){
      console.log(localStorage.getItem("arr6"));
      document.getElementById("main-cont6").style.display = "none";
      displayList("list6", "arr6");
    }
    if(localStorage.getItem("arr1")!=null){
      console.log(localStorage.getItem("arr1"));
      document.getElementById("main-cont1").style.display = "none";
      displayList("list1", "arr1");
    }
  };
// task1
function changeText(){
var text1 = document.getElementById("text1").textContent;  
var text6 = document.getElementById("text6").textContent; 
document.getElementById("text1").innerHTML = text6;
document.getElementById("text6").innerHTML =  text1;
}
// task2
var a = 11;
var h = 7;
s = a * h;
var text3 = document.getElementById("text3").textContent;
text3 += " S(h=7, a=11)=" + s;
document.getElementById("text3").innerHTML = text3;
// task3
function getTriangle() {
    let a = parseInt(document.forms["form-triangle"]["selectA"].value);
    let b = parseInt(document.forms["form-triangle"]["selectB"].value);
    let c = parseInt(document.forms["form-triangle"]["selectC"].value);
    if(((a+b)>c)&&((b+c)>a)&&((c+b)>a)) x = "possible";
    else x = "impossible";
    window.alert(x);
    var mycookie = document.cookie.split("=");
    if(mycookie[1]!=undefined)results = mycookie[1]+x +"|";
    else results = x + "|";
    document.cookie = 'triangleResults=' + results;
    return false;
  }
// task4
function setMouseOver(){
if(localStorage.getItem("textStyle")!=null){
    document.getElementById("text2").onmouseover = function event(){
    document.getElementById("text2").style.fontStyle = "normal";
    localStorage.removeItem("textStyle");
}
}else{
document.getElementById("text2").onmouseover = function event(){
document.getElementById("text2").style.fontStyle = "italic";
localStorage.setItem("textStyle", "italic");
}
}
}
var arr1 =[];
var arr2 = [];
var arr3 = [];
var arr4 = [];
var arr5 = [];
var arr6 = [];
function getArr(blockname){
  console.log(blockname==="list2");
   switch(blockname){
     case "list1":
       return [arr1, "addelement1", "arr1"];
       break;
    case "list2":
      console.log("hello");
       return [arr2, "addelement2", "arr2"];
       break;
    case "list3":
      return [arr3, "addelement3", "arr3"];
      break;
    case "list4":
      return [arr4, "addelement4", "arr4"];
      break;
    case "list5":
      return [arr5, "addelement5", "arr5"];
      break;
    default:
      return [arr6, "addelement6", "arr6"];            
   }
}
function addElement(blockname){
  var result = getArr(blockname);
  console.log(result);
  var arr = result[0];
  var inputId = result[1];
  console.log(document.getElementById(inputId).value);
  arr.push(document.getElementById(inputId).value);
  return false;
}

function createList(list, buttonname, finishbtn, addbtn){
  var arr = getArr(list)[0];
var orderedList = document.getElementById(list);
for(i=0;i<arr.length;i++) {
  var newli = document.createElement("li");
  newText = document.createTextNode(arr[i]);
  if(i%2===0){
      newli.style.backgroundColor = "#694c4e";
      newli.style.color = "#dbd1bd";
  }else{
    newli.style.backgroundColor = "#dbd1bd";
    newli.style.color = "#694c4e";
  }
  newli.appendChild(newText);
  console.log(orderedList);
  orderedList.appendChild(newli);
}
document.getElementById(buttonname).style.display = "block";
document.getElementById(finishbtn).disabled = true;
document.getElementById(addbtn).disabled = true;
return false;
}
function addToStorage(list, storagebtn){
   var result = getArr(list);
   localStorage.setItem(result[2], result[0]);
   document.getElementById(storagebtn).disabled = true;
   return false;
}
function displayList(list, arrname){
  var arr = localStorage.getItem(arrname).split(",");
var orderedList = document.getElementById(list);
for(i=0;i<arr.length;i++) {
  var newli = document.createElement("li");
  newText = document.createTextNode(arr[i]);
  if(i%2===0){
      newli.style.backgroundColor = "#694c4e";
      newli.style.color = "#dbd1bd";
  }else{
    newli.style.backgroundColor = "#dbd1bd";
    newli.style.color = "#694c4e";
  }
  newli.appendChild(newText);
  console.log(orderedList);
  orderedList.appendChild(newli);
}
}
function createForm(formname, listname){
 document.getElementById(formname).style.display = "block";
 document.getElementById(listname).style.display = "none";
}
function deleteLocalStorage(){
  localStorage.clear();
  document.location.reload();
}