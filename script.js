var user = document.getElementById('username');
var pass1 = document.getElementById('password');
var pass2 = document.getElementById('confirm_password');

function checkIt() {
  if (user.value.length < 4 || pass1.value.length < 4 || pass2.value.length < 4 || user.value.length > 8 || pass1.value.length > 8 || pass2.value.length > 8) {
  	document.getElementById('message').style.visibility = 'visible';
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'The length of user name and password must be between 4 and 8';
  }
  else if (pass1.value == pass2.value) {
  	document.getElementById('message').style.visibility = 'visible';
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'The input values are correct';
  }
  else {
  	document.getElementById('message').style.visibility = 'visible';
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'The passwords are different';
  }
}