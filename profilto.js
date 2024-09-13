const dom = document.body;
const trueerror = document.querySelector("#error");
const flaseerror = document.querySelector("#flase-error");
const theme = document.querySelector("#theme img");
const themesta = document.querySelector(".light-icon");
const menu = document.querySelector("span");
const dnresume = document.querySelector("#resume > .resume");

let backBtn = document.querySelector("#backToindex > button")
backBtn.addEventListener('click', () => {
    window.location.href = "index.html"
})

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.remove("light-theme")
        document.body.classList.add("dark-theme")
        themesta.src = "light-mode.png"
    }
    else {
        document.body.classList.remove("dark-theme")
        document.body.classList.add("light-theme")
        themesta.src = "dark-mode.png"
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    applyTheme(savedTheme)
})

const saveTheme = theme.addEventListener('click', () => {
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem('theme', 'light')
        applyTheme('light')
    } else {
        localStorage.setItem('theme', 'dark')
        applyTheme('dark')
    }
})


let serialino = document.getElementById("serialino")
serialino.addEventListener('click', () => {
    window.location.href = "https://hosseinkhashaypour.github.io/serialino2/index.html"
})


let toDo = document.getElementById("todo")
toDo.addEventListener('click', () => {
    window.location.href = "https://hosseinkhashaypour.github.io/ToDo/"
})


let temp = document.getElementById("temp")
temp.addEventListener('click', () => {
    window.location.href = "https://hosseinkhashaypour.github.io/temp/"
})

let digikala = document.getElementById('digikala');
digikala.addEventListener('click' , ()=>{
    window.location.href = "https://hosseinkhashaypour.github.io/newkala/";
})

let contact = document.getElementById("contact")
contact.addEventListener('click' , ()=>{
    window.location.href = "contact.html"
})

let simpleShop = document.getElementById('simpleShop');
simpleShop.addEventListener('click' , ()=>{
    window.location.href = 'https://hosseinkhashaypour.github.io/frontendmentor3/'
})

let advice = document.getElementById('advice');
advice.addEventListener('click' , ()=>{
    window.location.href = 'https://hosseinkhashaypour.github.io/advice/'
})