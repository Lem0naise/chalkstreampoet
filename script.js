
function personal(){
    document.getElementById("splash").style.display = "none";
    document.getElementById("personal").style.display = "flex";
    document.getElementById("personal").style.left = "10vw";
    document.getElementById("personal").style.opacity = "1";
    document.getElementById("background").style.filter = "brightness(0.2)"
}
function school(){
    document.getElementById("splash").style.display = "none";
    document.getElementById("personal").style.display = "flex";
    document.getElementById("personal").style.left = "10vw";
    document.getElementById("personal").style.opacity = "1";
    document.getElementById("personal_flip").style.display = "none";
    document.getElementById("school_flip").style.display = "inline";
    document.getElementById("background").style.filter = "brightness(0.2)"
}

window.onload = function(){
    document.getElementById("splash").style.opacity = "1";
    document.getElementById("background").style.filter = "brightness(0.6)"

    let poemform = document.getElementById("poem_form");
    poemform.addEventListener("submit", function(event){
        event.preventDefault();
        let formData = new FormData(event.target);
        let formProps = Object.fromEntries(formData);
        console.log(formProps);
        window.open(`mailto:chalkstreampoet@gmail.com?subject=Chalk Stream Poem ${formProps['name']}&body= Name: ${formProps['name']} %0D Age:  ${formProps['age']} %0D Poem: %0D  ${formProps['poem']}`)
    })
}
