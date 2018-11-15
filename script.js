console.log("Script loaded, v1.3");

//all checks must equal 1 to submit form
typeCheck = 0;
otherCheck = 0;
nameCheck = 0;
emailCheck = 0;
phoneCheck = 0;
addressCheck = 0;
cannotSubmitYet = 0;

function checkForGreen(){
  if(nameCheck == 1 &&
    emailCheck == 1 &&
    phoneCheck == 1 &&
    addressCheck == 1){ //if all values are set
        cannotSubmitYet = 1;
        console.log("you are cleared for takeoff");
    } else {
      //debuggin
      console.log("cannot submit yet");
    }
}

function updateList(e) {
  //var selected = document.getElementById("fm-dt").value =
  if(e.target.value == "Technology"){

    //check for old children and remove if needed
    removeAllChildren();

    //create new child for each individual degree program per category
    addNewChildren(e.target.value);

  } else if(e.target.value == "Healthcare") {
    //alert("Success " + e.target.value);

    //check for old children and remove if needed
    removeAllChildren();

    //create new child for each individual degree program per category
    addNewChildren(e.target.value);

  } else if(e.target.value == "Education") {

    //check for old children and remove if needed
    removeAllChildren();

    //create new child for each individual degree program per category
    addNewChildren(e.target.value);
  }
}

function removeAllChildren() {
  //check for old children (if user selected a new option from first dropdown)
  var howManyChildren = document.getElementById('fm-ds').length;
  if(howManyChildren > 1){
    //if too many children, delete all child nodes and create new ones
    console.log("test");
    for(var i = howManyChildren; i > 1; i--){
      console.log("loop " + i);
      var list = document.getElementById("fm-ds");
      list.removeChild(list.childNodes[i]);
    }
    //remove last item from list - can't be done in for loop
    //index is 2, leave index item 1 as the default list option
    var howManyChildren = document.getElementById('fm-ds').length;
    if(howManyChildren > 1){
      var list = document.getElementById("fm-ds");
      list.removeChild(list.childNodes[2]);
    }
  }
}

function addNewChildren(xin){
    var z = document.createElement("option");
    z.setAttribute("value", xin + "1");
    var t = document.createTextNode(xin + " - 1");
    z.appendChild(t);
    document.getElementById("fm-ds").appendChild(z);

    var z = document.createElement("option");
    z.setAttribute("value", xin + "2");
    var t = document.createTextNode(xin + " - 2");
    z.appendChild(t);
    document.getElementById("fm-ds").appendChild(z);

    var z = document.createElement("option");
    z.setAttribute("value", xin + "3");
    var t = document.createTextNode(xin + " - 3");
    z.appendChild(t);
    document.getElementById("fm-ds").appendChild(z);
  }

function validate() {
      console.log("Validation called");
      var x = document.forms["LibertyForm"]["degree-type"].value;
      if (x == "") {
          alert("The entire form must be completed to submit");
          return false;
      }
      var x = document.forms["LibertyForm"]["degree"].value;
      if (x == "") {
          alert("The entire form must be completed to submit");
          return false;
      }
      // var x = document.forms["LibertyForm"]["fname"].value;
      // if (x == "") {
      //     alert("The entire form must be completed to submit");
      //     return false;
      // }
      // var x = document.forms["LibertyForm"]["lname"].value;
      // if (x == "") {
      //     alert("The entire form must be completed to submit");
      //     return false;
      // }
      // var x = document.forms["LibertyForm"]["email"].value;
      // if (x == "") {
      //     alert("The entire form must be completed to submit");
      //     return false;
      // }
      // var x = document.forms["LibertyForm"]["telephone"].value;
      // if (x == "") {
      //     alert("The entire form must be completed to submit");
      //     return false;
      // }
      // var x = document.forms["LibertyForm"]["address"].value;
      // if (x == "") {
      //     alert("The entire form must be completed to submit");
      //     return false;
      // }
      // var x = document.forms["LibertyForm"]["submit"].value;
      // if (x == "") {
      //     alert("The entire form must be completed to submit");
      //     return false;
      // }
      if(cannotSubmitYet == 1){
        console.log("form can be submitted");
      } else {
        alert("The entire form must be completed to submit");
        return false;
      }



}//end function


//used to check data input
function checkInputNames(e){
  console.log("checkInput called");

  //set trigger id
  myId = e.currentTarget.id;

  //xin is the form that is being checked
  userInput = document.getElementById(myId).value; //user input

  //check for non letters
  pattern = /[^A-Za-z]/;

  //run check
  results = pattern.test(userInput);

  //update UI
  if(results == false){
    //false == letters
    document.getElementById(myId).style.borderColor = "green";
    nameCheck = 1;
  } else {
    document.getElementById(myId).style.borderColor = "red";
    nameCheck = 0;
  }
  console.log("Test is: ", results);

  //update greenlight
  checkForGreen()
}

//check user email
function checkEmail(e){

  //set trigger id
  myId = e.currentTarget.id;

  //xin is the form that is being checked
  userInput = document.getElementById(myId).value; //user input

  //check for email pattern
  pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //run check
  results = pattern.test(userInput);
  console.log("Email test is: ", results);

  //update UI
  if(results == true){
    document.getElementById(myId).style.borderColor = "green";
    emailCheck = 1;
  } else {
    document.getElementById(myId).style.borderColor = "red";
    emailCheck = 0;
  }

  //update greenlight
  checkForGreen()
}//end function


//check user email
function checkPhone(e){

  //set trigger id
  myId = e.currentTarget.id;

  //xin is the form that is being checked
  userInput = document.getElementById(myId).value; //user input

  //check for email pattern
  pattern = /^\d{10}$/;

  //run check
  results = pattern.test(userInput);
  console.log("Phone test is: ", results);

  //update UI
  if(results == true){
    document.getElementById(myId).style.borderColor = "green";
    phoneCheck = 1;
  } else {
    document.getElementById(myId).style.borderColor = "red";
    phoneCheck = 0;
  }

  //update greenlight
  checkForGreen()

}//end function

function checkAddress(e){

  //set trigger id
  myId = e.currentTarget.id;

  //xin is the form that is being checked
  userInput = document.getElementById(myId).value; //user input

  //check for entry
  if(userInput == null || userInput == ""){
    document.getElementById(myId).style.borderColor = "red";
    addressCheck = 0;
  } else {
    document.getElementById(myId).style.borderColor = "green";
    addressCheck = 1;
  }
  console.log("Address test is: ", results);


  //update greenlight
  checkForGreen()
}
