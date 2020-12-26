var firebaseConfig = {
    apiKey: "AIzaSyCdB4IB33XKDeeOHZdTSUHA8Dp42YRL2ug",
    authDomain: "feedback-pong.firebaseapp.com",
    projectId: "feedback-pong",
    storageBucket: "feedback-pong.appspot.com",
    messagingSenderId: "74418400183",
    appId: "1:74418400183:web:0dbfb79cfe1e1a8a57d632"
  };
firebase.initializeApp(firebaseConfig)
var i =0;
setTimeout(function (){
	var id = localStorage.getItem("email") 
if(id!=null||undefined||""){
	    document.getElementById("i1").value=id
        document.getElementById("i1").readOnly=true
}

},1/100)

function changei(a,b){
	if(document.getElementById(b).dataset.jot==0){
		change(a,b)
	}
}
function change(a,b){
var j = document.getElementById(b).dataset.jot;
j=j+1;
document.getElementById(b).dataset.jot=j;
if(j==1){
	var such =setInterval(function (){
	i=i+0.445;
	document.getElementById(a).style.fontSize=i+"px"
    },1)
    setTimeout(function (){
    clearInterval(such)
    },20*5)
   }
  j=0
  i=0
}
var de = ["feedback"]
function goBack() {
  window.history.back();
}
function ctag(a,b){
	var str = document.getElementById(a).value
var inn=document.getElementById(b).innerHTML
if(str.charAt(str.length-1)===" "&&str!=" "*str.length){
	document.getElementById(b).innerHTML=inn+`
<span class="mdl-chip mdl-chip--deletable" style="border:1px solid black;"  onclick="this.style.display='none';const index = de.indexOf('${str}');if (index > -1) {de.splice(index, 1) }">
    <span class="mdl-chip__text">${str}</span>
    <button type="button" class="mdl-button mdl-button--icon mdl-js-button"><i class="material-icons">cancel</i></button>
</span>
`
document.getElementById(a).value=""
de.push(str)
console.log(de)
}}
setInterval(function (){
	var a  = document.getElementById("i1").value.length
	var b =document.getElementById("i2").value.length
if(a>5&&b>10){
	document.getElementById("set").disabled=false
}
},1)
function goFire(){
if(!(document.getElementById("i1").value.length==0||document.getElementById("i2").value.length==0||document.getElementById("i1").value==" "*document.getElementById("i1").value.length||document.getElementById("i2").value==" "*document.getElementById("i2").value.length)&&document.getElementById("i2").value.length>=10){
	var newData={
		id:document.getElementById("i1").value,
		description:document.getElementById("i2").value,
		tags:de,
	}
	firebase.database().ref("feedback/").push(newData)
}
}
	
