function myUsername() {
    var userNameValue = document.getElementsByTagName("input")[0].value
    var passwordValue = document.getElementsByTagName("input")[1].value
    alert("Username" + userNameValue + ' -- ' + "Password" + passwordValue);
}