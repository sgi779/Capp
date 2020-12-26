var choicea="";
var gender="";
var choosen = 0;
function choice(a){
	choicea = a;
	
	document.getElementById("boll").innerHTML="<i>"+a+"</i>"
}
function gen(ho){
	gender = ho;
	document.getElementById("gen").innerHTML="<i>"+ho+"</i>"
}
function changebg(a){
	a.style.backgroundColor= "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
}
var mdc=1;
function modeC(){
++mdc;
if(mdc%2!=0){
	document.querySelectorAll("body")[0].style.backgroundColor="white";
	document.getElementById("mc"). innerHTML="dark_mode";
	document.querySelectorAll("body")[0].style.color="black";
	for(i=0;i<document.querySelectorAll(".imp").length;i++){
		document.querySelectorAll(".imp")[i].style.border="2px solid black";
		document.querySelectorAll(".imp")[i].style.backgroundColor="white";
		document.querySelectorAll(".imp")[i].style.color="black";
	}
		
}else{
	for(i=0;i<document.querySelectorAll(".imp").length;i++){
		document.querySelectorAll(".imp")[i].style.border="2px solid white";
		document.querySelectorAll(".imp")[i].style.backgroundColor="black";
		document.querySelectorAll(".imp")[i].style.color="white";
	}
	document.querySelectorAll("body")[0].style.backgroundColor="black";
	document.querySelectorAll("body")[0].style.color="grey";
	document.getElementById("mc"). innerHTML="light_mode";
}}
function changeBack(){
	var ty= 1;
	var leftvez0=setInterval(function (){++ty},10)
	var leftbez = setInterval(function (){changebg(document.getElementById('rt'))},100-ty)
	document.getElementById('rt').addEventListener("touchend", function (){
		clearInterval(leftbez);clearInterval(leftvez0);ty=1;
		})
}

	