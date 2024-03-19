                //mouse enter
const mouseEnt = document.querySelector('#mouse-enter')
function clickReaction(){
    console.log("you cliked button")
}
mouseEnt.onclick = clickReaction;
function stream() {
    console.log('you start hover the mouse');
}

mouseEnt.onmouseenter = stream;