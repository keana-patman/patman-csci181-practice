//--------------variables---------------
let modeToggleButton = document.querySelector("#theme-toggle");
let darkMode = false;

//--------------funcitons---------------
function modePress(){
    darkMode = !darkMode;
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        modeToggleButton.textContent = "Switch to Light Mode";
    }
    if(!document.body.classList.contains("dark")){
        modeToggleButton.textContent = "Switch to Dark Mode";
    }
}

modeToggleButton.addEventListener("click", modePress);