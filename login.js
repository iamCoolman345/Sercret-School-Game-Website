function validateForm() {
    var username = document.forms["login"]["username"].value;
    var password = document.forms["login"]["password"].value;
    if (username == "admin" && password == "1234") {
      window.location.href = 'members.html';
      return false;
      }
      else {
        alert("Incorrect username or password");
        return false;
      }
  }