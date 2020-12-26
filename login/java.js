  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDHnTPt-RnA-rSYPOaYRVUMP88rhdfV0fY",
    authDomain: "capp-35119.firebaseapp.com",
    databaseURL: "https://capp-35119-default-rtdb.firebaseio.com",
    projectId: "capp-35119",
    storageBucket: "capp-35119.appspot.com",
    messagingSenderId: "198647912250",
    appId: "1:198647912250:web:446e85d8dd7d8625442203"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var db = firebase.database();
function toggle(){
	var i = 0
    i=i+1
if(document.getElementById("i4").type=='password'){
	document.getElementById("i4").type='text';
    document.getElementById("lee"). innerHTML="visibility_off";
}else{
	document.getElementById("i4").type='password';
    document.getElementById("lee"). innerHTML="visibility";
}
}
function load(){
	var i1 = document.getElementById("i3").value
   var i2 = document.getElementById("i4").value
if(i1.length>=5&&i2.length>=5){
	document.getElementById("cli").disabled=true;
   document.getElementById("p2").style.display="block";
   check(i1,i2)
}
}
var latName=0;
var jooj=0
function check(a,b){
db.ref("users/").on('child_added',function(snapshot){
	jooj+=1
        var name=snapshot.val().name;
        var email=snapshot.val().email;
        if(a===name||email){
        var pass = snapshot.val().pass;
      	 latName+=200;
             if(b===pass){
             	latName+=400;
          }}
});
             console.log(latName+" in "+jooj)
         verify(); 
 }
 function verify(){
 	if(latName>500){
 	 document.getElementById("console").innerHTML=document.getElementById("console").innerHTML+"<p style='color:green'>Log In success</p>"
     }  
  }
 