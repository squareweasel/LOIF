// function setDreams() {
//   // Get the value of the input field
//   var userDreams = document.getElementById("userDreams").value;

//   // Display the value of the variable in an alert box
//   alert("You have set your dreams to " + userDreams);

//   story.variablesState["dreams"] = userDreams.value;

// }
var userValue=document.getElementById("userInput");
var userDreams=userValue.value;

function updateInkVar() {
  // Get the value of the input field
  userDreams=document.getElementById("userInput").value;
  // Display the value of the variable in the userNumber paragraph
  document.getElementById("userNumber").innerHTML = "Dreams Target: " + userDreams;
  story.variablesState["dreams"] = Number(userDreams);
  
}

function setChoices() {
  console.log("Setting choice.");
}

function observeVars() {
  story.ObserveVariables(
    [
      "dreams",
      "deaths"
    ],
    [
      function(variableName, variableValue) {
        if (variableValue>0) {
        dreams.innerHTML = "Dreams left: " + variableValue;

        }
      },
      function(variableName, variableValue) {
        deaths.innerHTML = "Deaths: " + variableValue;
      }
    ]
  ); 
}

function autoplay() {
  for (var i=0;i<userDreams;i++)
  console.log(i);
}