// const express = require('express'); //Import the express dependency
// const app = express();              //Instantiate an express app, the main work horse of this server
// const port = 5000;                  //Save the port number where your server will be listening

// //Idiomatic expression in express to route and respond to a client request
// app.get('/', (req, res) => {        //get requests to the root ("/") will route here
//     res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
//                                                         //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
// });

// app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
//     console.log(`Now listening on port ${port}`); 
// });
const express = require('express'); //Import the express dependency
const app = express();  
const port = 5000; 

app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
	res.sendFile('ink.js', {root: __dirname});
	res.sendFile('style.css', {root: __dirname});
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});

function loadStory(){
var Story = require('inkjs').Story;
var inkFile = require('./story.json');
var fs = require('fs');
var readline = require('readline');

// //load the ink file
// var inkFile = fs.readFileSync('./story.json', 'UTF-8').replace(/^\uFEFF/, '');

//create a new story
var myStory = new Story(inkFile);

//start reading and writting to the console

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


continueToNextChoice();

function continueToNextChoice(){
	//check we haven't reached the end of the story
	if (!myStory.canContinue && myStory.currentChoices.length === 0) end();
	
	//write the story to the console until we find a choice
	while (myStory.canContinue){
		myStory.Continue();
		console.log(myStory.Continue());
	}
	
	//check if there are choices
	if (myStory.currentChoices.length > 0){
		for (var i = 0; i < myStory.currentChoices.length; ++i) {
			var choice = myStory.currentChoices[i];
			console.log((i + 1) + ". " + choice.text);
		}
		
		//prompt the user for a choice
		rl.question('> ', (answer) => {
			//continue with that choice
			myStory.ChooseChoiceIndex(parseInt(answer) - 1);
			continueToNextChoice();
		});
	}
	else{
		//if there are no choices, we reached the end of the story
		end();
	}
}

function end(){
	console.log('THE END');
	rl.close();
}
}