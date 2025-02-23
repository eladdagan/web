const users = {
    "אלעד": "2323",
    "ינאי": "2222",
    "נועה": "4545",
    "סיון": "0987"
};

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.logout-container').style.display = 'block';
        document.getElementById('welcome-message').innerText = `שלום ${username}, מה תרצה לעשות היום?`;
    } else {
        document.getElementById('message').innerText = 'שם משתמש או סיסמה שגויים';
    }
});

document.getElementById('logout-button').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.logout-container').style.display = 'none';
    document.getElementById('login-form').reset();
    document.getElementById('message').innerText = '';
});

document.getElementById('change-password-button').addEventListener('click', function() {
    const newPassword = prompt('הכנס סיסמה חדשה:');
    if (newPassword) {
        const username = document.getElementById('welcome-message').innerText.split(' ')[1];
        users[username] = newPassword;
        alert('הסיסמה שונתה בהצלחה');
    }
});