const dom = document.body;
const trueerror = document.querySelector("#error");
const flaseerror = document.querySelector("#flase-error");
const theme = document.querySelector("#theme img");
const themesta = document.querySelector(".light-icon");
const menu = document.querySelector("span");
const dnresume = document.querySelector("#resume > .resume");



// document.addEventListener('copy', (a) => {
//     a.preventDefault();
// });

// document.addEventListener('contextmenu', (b) => {
//     b.preventDefault();
// });

// document.addEventListener('keydown', (event) => {
//     if (event.key === "F12") {
//         event.preventDefault();
//     }
// });
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


window.addEventListener('offline' , (e)=>{
  return 'اتصال شما قطع شده است';
})

window.addEventListener('online' ,  (e)=>{
  return 'اتصال شما برقرار شد'
})