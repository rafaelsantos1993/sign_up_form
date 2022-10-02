//script to verify is passwords are macthing 
//using the onKeyup event listener 

var check = function(){
    if ((document.getElementById("password1").value ==
        document.getElementById("password2").value) && 
        (document.getElementById("password1").value!= '') &&
        (document.getElementById("password2").value!= '')) {
        document.getElementById("message").style.color="green";
        document.getElementById("message").textContent="Matching";
        }   
        else {
            document.getElementById("message").style.color = "red";
            document.getElementById("message").textContent="Not macthing password";
        }
}
