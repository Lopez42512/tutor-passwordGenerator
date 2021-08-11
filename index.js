const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&'
let password = '';

for(let i = 0; i < 10; i++) {
    let selector = Math.floor(Math.random() * characters.length)
    password += characters[selector]
}
console.log(password);
document.getElementById('password').innerHTML = password