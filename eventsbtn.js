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
    btn.addEventListener('mouseleave', colorize)
}

function colorize (){
    this.style.backgroundColor = makeRaCo();
    this.style.color = makeRaCo();
}

                    //evt btn

const eventbtn = document.querySelector('#evt')
eventbtn.addEventListener('click', function (event){ console.log(event);})

                        // bubbling

const bubblediv = document.querySelector('#bubbl')
const btnbubbl = bubblediv.lastElementChild

btnbubbl.addEventListener('click', function(eve){
    bubblediv.style.backgroundColor = makeRaCo();
    eve.stopPropagation()
})
bubblediv.addEventListener("click", function(){
    bubblediv.classList.toggle('bubbl')
})



                        //async functions

// setTimeout(function(){
//         document.body.style.backgroundColor = "red"
//         setTimeout(function(){
//             document.body.style.backgroundColor = "orange"
//             setTimeout(function(){
//                 document.body.style.backgroundColor = "yellow"
//                 setTimeout(function(){
//                     document.body.style.backgroundColor = "green"
//                     setTimeout(function(){
//                         document.body.style.backgroundColor = "blue"
                        
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)

// const delayedColorChange = (newcolor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newcolor;
//         doNext && doNext();
        
//     }, delay) 
// }

// delayedColorChange('red', 2000, () => {
//     delayedColorChange("orange", 2000, () => {
//         delayedColorChange("yellow", 2000, () => {
//             delayedColorChange("pink", 2000, () => {
//                 delayedColorChange("skyblue", 2000, () => {
//                     delayedColorChange("blue", 2000, () => {
//                         delayedColorChange("lightgreen", 2000, () =>{
//                             delayedColorChange("green", 1000, ()=>{})
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

setTimeout((newcolor)=>{
    document.body.style.backgroundColor = newcolor;
}, 2000, "red" )


                // promise 

const fakeRequestCallback = (url) =>{
    return new Promise((resolve, reject) => {
      const random = Math.random();
        setTimeout(() => {
            if (random < 0.7){
            resolve("resolve pass to url ");
          }
            reject("sorry rejected");
          }, 1000)
    })
}
fakeRequestCallback('passage for promise ')
.then((data) => {
    console.log("for resolve result :" + data);
})
.catch((err) => {
    console.log("for error because rejected : " + err);
})






