                //mouse enter verson - 2
const mouseEnt = document.querySelector('#mouse-enter')
function clickReaction(){
    console.log("you cliked button")
}
mouseEnt.onclick = clickReaction;
function stream() {
    console.log('you start hover the mouse');
}

mouseEnt.onmouseenter = stream;

                    // verson - 3

const v3Click = document.querySelector("#verson3")
v3Click.addEventListener('click',clickReaction)

                        //background-color-change   

const btn = document.querySelector('#bg-color-c')
const rgbHeading = document.querySelector('#rgb')
const conatiner = document.querySelector('#container')


btn.addEventListener('click',function(){
    let rgbcolor = makeRaCo();       
    conatiner.style.backgroundColor = rgbcolor;
    rgbHeading.innerText = rgbcolor;
    rgbHeading.style.color = makeRaCo();
})

let makeRaCo = ()=>{
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}

                // multible button

const allBtn = document.querySelectorAll('.multiple-btn')
for (let btn of allBtn){
    btn.addEventListener('click', colorize)
}

function colorize (){
    this.style.backgroundColor = makeRaCo();
    this.style.color = makeRaCo();
}

                    //evt btn

const eventbtn = document.querySelector('#evt')