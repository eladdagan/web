const users = {
    "אלעד": { password: "2323", rank: "ראש צוות", progress: 100 },
    "ינאי": { password: "2222", rank: "ראש צוות", progress: 100 },
    "נועה": { password: "4545", rank: "מנהל", progress: 50 },
    "סיון": { password: "0987", rank: "פקיד", progress: 25 }
};

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username].password === password) {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.logout-container').style.display = 'block';
        document.getElementById('welcome-message').innerText = `שלום ${username}, מה תרצה לעשות היום?`;
        document.getElementById('rank-message').innerText = `דרגה: ${users[username].rank}`;
        document.getElementById('progress').style.width = `${users[username].progress}%`;
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
        users[username].password = newPassword;
        alert('הסיסמה שונתה בהצלחה');
    }
});