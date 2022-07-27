
// document.cookie = "firstName = Atlanta; expires = Wed, 26 July 2022 17:22:10 UTC; path = ./;"
// document.cookie = "lastName = Georgia; expires = Wed, 26 July 2023 17:22:10 UTC; path = ./;"
// console.log(document.cookie);
// deleteCookie("email");
// deleteCookie("lastName");

let firstText = document.querySelector("#firstText");
let lastText = document.querySelector("#lastText");
let submitButton = document.getElementById("submitButton");
let cookiesButton = document.querySelector("#cookiesButton");
cookiesButton.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});
submitButton.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});

// setCookie("firstName", "Martell", 365);
// setCookie("lastName", "Harrison", 365);

// console.log(getCookie("firstName"));
// console.log(document.cookie); 


function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive*24*60*60*1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}


// let date = new Date();
// date.setTime(date.getTime() + (60*60*1000));
// date = date.toUTCString();

// let date = new Date();
// //calculate one year from now in milliseconds and add to current date
// date = date.setTime(date.getTime() + (365*24*60*60*1000)); 
// date = date.getTime();
// console.log(date);