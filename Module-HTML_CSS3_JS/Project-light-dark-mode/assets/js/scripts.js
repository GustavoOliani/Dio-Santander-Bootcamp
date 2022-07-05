const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const darkModeClass = "dark-mode";

function changeMode(){
    chageClasses();
    changeText();
}

function changeText(){
    if (button.classList.contains(darkModeClass)){
        h1.innerHTML = "Dark Mode ON";
        button.innerHTML = "Light Mode";
    }else{
        h1.innerHTML = "Light Mode ON";
        button.innerHTML = "Dark Mode";
    }
}

function chageClasses(){
    document.getElementsByTagName("body")[0].classList.toggle(darkModeClass);
    document.getElementsByTagName("footer")[0].classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass);
}

button.addEventListener("click", changeMode);