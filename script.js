let isNav = false;
const navBar = document.querySelector("#navBar");

function openHome() {
    window.location = "./index.html";
}

function openMail() {
    window.open("mailto:homebyleni@gmx.de?subject=kontakt - home by leni");
}

function openInstagram() {
    window.open("https://instagram.com/homebyleni");
}

function clickBurger() {

    if(isNav != true) {
        
        navBar.classList.toggle('fade');
        isNav = true;

    } else if(isNav == true) {

        navBar.classList.toggle('fade');
        isNav = false;

    }
}