function validate() {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" && password === "") {
    document.getElementById("error").innerHTML="Enter username and password";
    document.getElementById("error").style.color="Red";
    

  } else if (username === "") {
    document.getElementById("error").innerHTML="Enter username";
    document.getElementById("error").style.color="Red";
  
  } else if (password === "") {
    document.getElementById("error").innerHTML="Enter password";
    document.getElementById("error").style.color="Red";
  
  } else{
    document.getElementById("error").innerHTML="";
  }
}



