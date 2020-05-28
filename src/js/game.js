var data;
var x;



$(document).ready(function(){

	var request = new XMLHttpRequest();
	request.open("GET","https://testapi.io/api/Yevrah/myTest",true);
	request.send();
	request.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			data = JSON.parse(this.responseText);
			x = data.test;
		}
	}
		
});
// The first Game;
var n = 0;
var myGame = $(".toShow");
function play(){
	var gameButton = $(".show");
	var question = document.getElementById("question");
	gameButton.hide();
	myGame.delay(2000).fadeIn();
	question.innerHTML = x[n]["question"];
}

function submit(){
	var ans = x[n]["answer"];
	var user_input = document.getElementById("answer").value;
	switch (user_input) {
		case ans:
			alert("good job ! click next to continue");
			n++;
			if(ans == "binary digit"){
				$("#firstGame").hide();
				$("#break1").after("<div class ='done'><img class = 'congrats' src = '../img/done.gif'><br><center><button id='start' class='appear'>Star again</button><button class='appear'>Back to home</button></center></div>");
			}else{
				next();
			}
			break;
		default:
			alert("try again");
			break;
	}
}

function next(){
	
	myGame.hide();
	myGame.show();
	$("#answer").val("");
	question.innerHTML = x[n]["question"];
	

}
function show_ans(){
	alert(x[n]["answer"]);
	
}

function skip(){
	n++;
	myGame.hide();
	myGame.show();
	$("#answer").val("");
	question.innerHTML = x[n]["question"];
}
$("#start").click(function(){
	alert("yes");
});

var computer = {
"computerparts":[
	{
		"word":"keyboard",
		"hint":"An input device used to type symbols and letters"
	},
	{
		"word":"cpu",
		"hint" : "It is where all the processes happen"
	},
	{
		"word":"mouse",
		"hint" : "an input device use with a computer to control a cursor"
	}
	],
"computersoftwares":[
	{
		"word":"application",
		"hint":"software created for a specific purpose"
	},
	{
		"word":"software",
		"hint" : "collection of data or computer instructions that tell the computer how to work"
	},
	{
		"word":"antivirus",
		"hint" : "designed to detect and destroy computer viruses"
	}
	],
"randomTopics":[
	{
		"word":"hyperlink",
		"hint":"a link from a hypertext file or document to another location or file, typically activated by clicking on a highlighted word or image on the screen"
	},
	{
		"word":"browser",
		"hint" : "software program to present and explore content on the World Wide Web"
	},
	{
		"word":"database",
		"hint" : "a structured set of data held in a computer, especially one that is accessible in various ways"
	}
	]
}
var t;
var secGame = $(".show1");
var windo = $(".toshow");
var lives = 10;
var word;
var random;
var hint;
var count;
var wrong;

function play1(){
	secGame.hide();
	windo.delay(2000).fadeIn();
	$("#picture").append("<img style='width: 100%; height: 100%;' src='../img/white.png'>");
	$("#picture").show();
	wrong = 0;
	count = 0;
}

function play2(){
	secGame.hide();
	windo.delay(2000).fadeIn();
	$("#picture").html("<img style='width: 100%; height: 100%;' src='../img/white.png'>");
	$("#picture").show();
	$(".sylaboll").attr("disabled",false);
	wrong = 0;
	count = 0;
	lives = 10;
}

function letters(letter){
	console.log(event);
	checked(letter);
}

$(".sylaboll").click(function(){
	if(wrong != count){
		$(this).attr("disabled",true);
	}
});

$(".select").change(function(){
	t = $(".select").val();
	random = Math.round(Math.random()*3);
	hint = computer[t][random]["hint"];
	count = 0;
	word = computer[t][random]["word"];
	alert("hint\n"+hint);
	for(var n of word){
		count++;
	}
	console.log(word);
	for(var i = 0;i<count;i++){
		$("#guess").append("<span class = 'answered'>_ </span>");
	}
	$(".life").html("<p>Your life is "+lives+"</p>");
});

function cliked(){
	alert(hint);
}

function checked(letter){
	var check = 0;
	var ctr = 0;
	var span = $(".answered");
	for(var let of word){
		ctr++;
		if(let == letter){
			span[ctr-1].innerHTML = letter;
			wrong++;
		}else{
			check++;
		}
		
	}
	setTimeout(startagain(wrong),20000);
	numberoflife(check);
}

function numberoflife(number){
	if(number == count){
		lives--;
		$(".life").html("<p>Your life is "+lives+"</p>");
		drawing();
	}
}

function startagain(check) {
	if(check == count){
		var bol = confirm("Congratstulation,Do you want to continue?");
		if(bol){
			windo.delay(2000).fadeOut();
			play2();
			$("#guess").html("<div id='guess'></div>");
			console.log(check+","+count);
		}else{
			windo.delay(1000).fadeOut();
			secGame.show();
		}
	}
}

function drawing(){
	switch (lives) {
		case 7:
			$("#picture").html("<img style='width: 100%; height: 100%;' src='../img/man-7.png'>");
			break;
		case 6:
			$("#picture").html("<img style='width: 100%; height: 100%;' src='../img/man-6.png'>");
			break;
		case 5:
			$("#picture").html("<img style='width: 100%; height: 100%;' src='../img/man-5.png'>");
			break;
		case 4:
			$("#picture").html("<img style='width: 100%; height: 100%;' src='../img/man-4.png'>");
			break;
		case 3:
			$("#picture").html("<img style='width: 100%; height: 100%;' src='../img/man - 3.png'>");
			break;
		case 2:
			$("#picture").html("<img style='width: 100%; height: 100%;' src='../img/man-2.png'>");
			break;
		case 1:
			$("#picture").html("<img style='width: 100%; height: 100%;' src='../img/man-1.png'>");
			var con = confirm("Game Over,Do you want to start again?");
			if(con){
				windo.delay(2000).fadeOut();
				play2();
				$("#guess").html("<div id='guess'></div>");
				console.log(check+","+count);
			}else{
				windo.delay(1000).fadeOut();
				secGame.show();
			}
			break;
	}
}