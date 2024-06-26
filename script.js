
function personal(){
    
    document.getElementById("personal").style.display = "flex";
    document.getElementById("personal").style.left = "10vw";
    document.getElementById("personal").style.opacity = "1";
    document.getElementById("background").style.filter = "brightness(0.2)"
}

window.onload = function(){

    document.getElementById("background").style.filter = "brightness(0.6)"

    personal();
}
