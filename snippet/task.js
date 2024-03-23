const username = document.getElementById('username');
const password = document.getElementById('password');

const button = document.getElementById('submit-data');
button.addEventListener('click', () => {
    console.log(`Hello ${username.value} your password is ${password.value}`);
});