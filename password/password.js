const password_L = document.querySelector('#password');
const length_L= document.querySelector('#length');
const uppercase_L = document.querySelector('#uppercase');
const lowercase_L = document.querySelector('#lowercase');
const numbers_L= document.querySelector('#numbers');
const symbols_L = document.querySelector('#symbols');

const generate_btn = document.querySelector('#generate');
generate_btn.addEventListener('click', GeneratePassword);
const uppercase_birliyi = "QAZWSXEDCRFVTGBYHNUJMIKOLP";
const lowercase_birliyi = "aqzxswedcrfvtgbyhnujmikolp";
const numbers_birliyi = "1234567890";
const symbols_birliyi = "!@#$5^&*=";

function GeneratePassword() {
    let password = "";
    let length = length_L.value;
    let birlik = "";
    birlik += uppercase_L.checked ? uppercase_birliyi : "";
    birlik += lowercase_L.checked ? lowercase_birliyi : "";
    birlik += numbers_L.checked ? numbers_birliyi : "";
    birlik += symbols_L.checked ? symbols_birliyi : "";
    for (let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * birlik.length);
        password += birlik.charAt(rand);
    }
    password_L.value = password;
}