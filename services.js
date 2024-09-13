const dom = document.body
const trueerror = document.querySelector("#error");
const flaseerror = document.querySelector("#flase-error")
const theme = document.querySelector("#theme img")
const themesta = document.querySelector(".light-icon")
const menu = document.querySelector("span")
const develope = document.querySelectorAll("#develope")
const condevelope = document.querySelectorAll("#develope > p")

function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        themesta.src = "light-mode.png";
        menu.style.color = "white";
        dnresume.style.backgroundColor = "#0c0025";
        dnresume.style.color = "white";
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        themesta.src = "dark-mode.png";
        menu.style.color = "black";
        dnresume.style.backgroundColor = "white";
        dnresume.style.color = "black";
    }
}

// Check localStorage for saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});

window.addEventListener('offline', function () {
    trueerror.style.display = "block";
    setTimeout(function () {
        trueerror.style.display = "none";
    }, 3000);
});

window.addEventListener('online', function () {
    flaseerror.style.display = "block";
    setTimeout(function () {
        flaseerror.style.display = "none";
    }, 3000);
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

const saveTheme = theme.addEventListener('click', () => {
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem('theme', 'light');
        applyTheme('light');
    } else {
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
    }
});

dnresume.addEventListener('click', () => {
    location.reload();
});

document.addEventListener('copy', (a) => {
    a.preventDefault();
});

document.addEventListener('contextmenu', (b) => {
    b.preventDefault();
});

document.addEventListener('keydown', (event) => {
    if (event.key === "F12") {
        event.preventDefault();
    }
});
