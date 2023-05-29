// function setDreams() {
//   // Get the value of the input field
//   var userDreams = document.getElementById("userDreams").value;

//   // Display the value of the variable in an alert box
//   alert("You have set your dreams to " + userDreams);

//   story.variablesState["dreams"] = userDreams.value;

// }

function setNumber() {
  // Get the value of the input field
  var userDreams = document.getElementById("userInput").value;

  // Display the value of the variable in the userNumber paragraph
  document.getElementById("userNumber").innerHTML = "Dreams Target: " + userDreams;
  
}

function updateInkVar() {

    story.variablesState["dreams"] = userDreams;

}