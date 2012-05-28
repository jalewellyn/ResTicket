// This Function handles the validation of the question:
// Please Define your problem (The very first question)

function validate_problem(thisform) {
myOption = -1;
for (i=thisform.problem_type.length-1; i > -1; i--) {
if (thisform.problem_type[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please select the type of problem you are experiencing!");
return false;
}
thisform.submit();
}




//////////////////////////////////////////////////////////////////////////////
//The functions below handle validation of computer related questions!
//////////////////////////////////////////////////////////////////////////////

function validate_computer_q1(thisform) {
myOption = -1;
for (i=thisform.computer_problem.length-1; i > -1; i--) {
if (thisform.computer_problem[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please select the type of computer problem you are experiencing!");
return false;
}
thisform.submit();
}

//////////////////////////////////////////////////////////////////////////////
//The functions below handle validation of internet related questions!
//////////////////////////////////////////////////////////////////////////////


function validate_internet_q1(thisform) {
myOption = -1;
for (i=thisform.registered.length-1; i > -1; i--) {
if (thisform.registered[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please indicate whether you registered your computer!");
return false;
}
thisform.submit();
}




function validate_internet_q2(thisform) {
myOption = -1;
for (i=thisform.trippled.length-1; i > -1; i--) {
if (thisform.trippled[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please indicate whether you are trippled!");
return false;
}
thisform.submit();
}

function validate_internet_q3(thisform) {
myOption = -1;
for (i=thisform.anothercable.length-1; i > -1; i--) {
if (thisform.anothercable[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please indicate whether you tried using another network cable!");
return false;
}
thisform.submit();
}


function validate_internet_q4(thisform) {
myOption = -1;
for (i=thisform.anotherjack.length-1; i > -1; i--) {
if (thisform.anotherjack[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please indicate whether you tried using another jack!");
return false;
}
thisform.submit();
}



//////////////////////////////////////////////////////////////////////////////
//The functions below handle validation for texting questions:
//Would you like to subscribe and text provider selection!
//////////////////////////////////////////////////////////////////////////////

function validate_text_updates(thisform) {
myOption = -1;
for (i=thisform.subscribed.length-1; i > -1; i--) {
if (thisform.subscribed[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please indicate whether you want text message updates!");
return false;
}
thisform.submit();
}


function validate_texting_provider(thisform) {
    if (document.texting_provider.txt_provider.selectedIndex == 0) {
        alert('Error: Please select your cell phone provider!');       
	return false;
}
thisform.submit();
}


//////////////////////////////////////////////////////////////////////////////
//The function below handles the validation for location selection screen
//////////////////////////////////////////////////////////////////////////////

function validate_location(thisform) {
myOption = -1;
for (i=thisform.rchd_location.length-1; i > -1; i--) {
if (thisform.rchd_location[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please which helpdesk location you are currently visiting!");
return false;
}
thisform.submit();
}



//////////////////////////////////////////////////////////////////////////////
//The function below handles the validation of the continuation question
// "Would you like to continue filing this request?"
//////////////////////////////////////////////////////////////////////////////


function validate_suggestion_continue(thisform) {
myOption = -1;
for (i=thisform.continue_after_suggestion.length-1; i > -1; i--) {
if (thisform.continue_after_suggestion[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please specify whether you would like to continue filing this request!");
return false;
}
thisform.submit();
}


//////////////////////////////////////////////////////////////////////////////
//The code below handles the validation for the liability form
//////////////////////////////////////////////////////////////////////////////

function validate_release(thisform) {
myOption = -1;
for (i=thisform.liability.length-1; i > -1; i--) {
if (thisform.liability[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert('In order for us to process your request, you must agree to our terms of use!');
return false;
}
thisform.submit();
}