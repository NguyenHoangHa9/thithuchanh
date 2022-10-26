function checkUsername() {
    var elMsg = document.getElementById('feedback1');
    var elUsername = document.getElementById('username');
    if (elUsername.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}
function matchPassword() {
    var elMsg = document.getElementById('feedback2')
    var pw1 = document.getElementById('exampleInputPassword1');
    var pw2 = document.getElementById('exampleInputPassword2');
    if (pw1 != pw2) {
        elMsg.textContent = 'Passwords did not match'
    } else {
        elMsg.textContent = "";
    }
}
function checkPassword() {
    var elMsg = document.getElementById('feedback3');
    var elPassword = document.getElementById('exampleInputPassword1');
    if (elPassword.value.length < 8) {
        elMsg.textContent = 'Username must be 8 characters or more';
    } else {
        elMsg.textContent = '';
    }
}
