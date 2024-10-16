const dom = document.body;
const themeSta = document.querySelector('.dark-icon');



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



const resumeBtn = document.querySelector('#resumeButton');
resumeBtn.addEventListener('click' , ()=>{
  let samples = document.querySelector('#samples')
  samples.scrollIntoView({behavior : "smooth"})
})



// objects for colors



const lightModeColors = {
  backgroundColors : 'white',
  textColors : 'black',
  containerTextColors : 'white',
  containerColors : 'gray',
}

const darkModeColors = {
  backgroundColors : 'rgb(15 23 42)',
  textColors : 'white',
  containerTextColors : 'white',
  containerColors : 'gray',
}

document.body.style.backgroundColor = lightModeColors.backgroundColors
document.body.style.color = lightModeColors.textColors;

const allPTags = document.querySelectorAll('p, p1 , p2');

const allHTags = document.querySelectorAll('h1');




const storedTheme = localStorage.getItem('theme')
let currentMode = localStorage.getItem('theme') || 'light';
const allServicesDetails = document.querySelectorAll(".services-deatail")



const darkIcon = document.querySelector('.dark-icon');

function applyTheme (){
  if(currentMode === 'dark'){
    allServicesDetails.forEach(serviceDeatail=>{
      serviceDeatail.style.color = darkModeColors.textColors
    })
    allPTags.forEach(pTag=>{
      pTag.style.color = lightModeColors.textColors
    })
    document.body.style.backgroundColor = lightModeColors.backgroundColors
    document.body.style.color = lightModeColors.textColors;
    darkIcon.src = 'dark-mode.png'
    // currentMode = 'light'
  } else{
    allPTags.forEach(pTag=>{
      pTag.style.color = darkModeColors.textColors
    })
    document.body.style.backgroundColor = darkModeColors.backgroundColors
    document.body.style.color = darkModeColors.textColors;
    darkIcon.src = 'light-mode.png'
    // currentMode = 'dark'
  }
  localStorage.setItem('theme' , currentMode)
}

window.addEventListener('load' , ()=>{
  applyTheme()
})

darkIcon.addEventListener('click', ()=>{
  currentMode = (currentMode === "dark") ? 'light' : 'dark';
  applyTheme()
})