const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = "~!@#$%^&*()_+=-{}[]/?.>,<"
const allchars = uppercase+lowercase+numbers+specialChars;

const passwordBox = document.getElementById("password");

function createPassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += specialChars[Math.floor(Math.random()*specialChars.length)];

    while(length>password.length){
        password+=allchars[Math.floor(Math.random()* allchars.length)]
    }

    passwordBox.value = password;


}

function copyText(){
    passwordBox.select();
    document.execCommand("copy");
}