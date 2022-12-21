function validateForm() {
  var username = document.forms["login"]["username"].value;
  var password = document.forms["login"]["password"].value;
  if (username == "sling" && password == "1234") {
    window.location.href = 'members/member0/member0.html';
    return false;
  }
  if (username == "fortnite" && password == "1234") {
    window.location.href = 'members/member1/member1.html';
    return false;
  }
  if (username == "2048" && password == "1234") {
    window.location.href = 'members/member2/member2.html';
    return false;
  }
  else {
    alert("Incorrect username or password");
    return false;
  }
}