document.getElementById('password').addEventListener('focus', function() {
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('password').addEventListener('blur', function() {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('password').addEventListener('input', function(event) {
    const value = event.target.value;
    let Number = false;
    let Uppercase = false;
    let SpecialChar = false;

    for (let char of value) {
        if (char >= '0' && char <= '9') {
            Number = true;
        } else if (char >= 'A' && char <= 'Z') {
            Uppercase = true;
        } else if ('!@#$%^&*(),.?":{}|<>'.includes(char)) {
            SpecialChar = true;
        }
    }

    document.getElementById('number').style.display = Number ? 'none' : 'block';
    document.getElementById('uppercase').style.display = Uppercase ? 'none' : 'block';
    document.getElementById('special').style.display = SpecialChar ? 'none' : 'block';
});
