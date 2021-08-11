// the characters that will be used to generate password
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&'
// password will be stored here, a new character will be added after every loop
let password = '';


document.getElementById("passwordBtn").addEventListener("click", function() {
    // clear password to get new password every btn click
    password = ''

    // loops 10 times and generates a random number that is used to select a character that is stored in password variable
    for(let i = 0; i < 10; i++) {

    // generates a random number
    let selector = Math.floor(Math.random() * characters.length)

    // adds a character to password variable
    password += characters[selector]
    }

    // displays password to html element
    document.getElementById('password').innerHTML = password
})
