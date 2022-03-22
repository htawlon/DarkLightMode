const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

//dark Mode
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 /50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 /50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.remove("fa-sun");
  toggleIcon.children[1].classList.add("fa-moon");
  image1.src = 'image/programmer_dark.svg';
  image2.src = 'image/production_dark.svg';
  image3.src = 'image/css3_dark.svg';
}

//Light Mode
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 /50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 /50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.remove("fa-moon");
  toggleIcon.children[1].classList.add("fa-sun");
  image1.src = "image/programmer_light.svg";
  image2.src = "image/production_light.svg";
  image3.src = "image/css3_light.svg";
}
//Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem('theme','dark'); //set a data for using localstorage
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem('theme','light');
    lightMode(); //set a value for using localstorage
  }
}

//Event Listener
toggleSwitch.addEventListener("change", switchTheme);

//Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
//console.log(currentTheme);
if(currentTheme){
  document.documentElement.setAttribute('data-theme',currentTheme);

  if(currentTheme === 'dark'){
    toggleSwitch.checked =true; 
    darkMode();
  }
}