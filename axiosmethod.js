const list = document.querySelector("#joke")
const button = document.querySelector("#clickJokeOn")

const newjoke = ( ) => {
    getDadJoke();
}
const getDadJoke = async () => {
    try{
    const jokeHead = { headers: { Accept : "application/json"}}     
    const res = await axios.get('https://icanhazdadjoke.com/',jokeHead)  
    const joke = res.data.joke;
    const newLi = document.createElement("LI");
    newLi.append(joke)
    list.append(newLi)
    }
    catch(err){ 
        console.log("error : ",err);
    }
}
button.addEventListener('click', newjoke)


                //tv name search form

const form = document.querySelector("#movielist")
const imgmain = document.querySelector("#img-main")
form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const searchName = form.elements.query.value
    const config = {params: {q: searchName}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
     film (res.data)
     form.elements.query.value ="";
})

const film = (films)=>{
    for (let result of films){
        const img = document.createElement("IMG")
        if(result.show.image){
             img.src = result.show.image.medium
            img.append(img.src)
            imgmain.append(img)
            }
        }
}


                    //factory functio

function makeColor(r, g, b){
    let color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() 
    {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    return color
    
}
const firstColor = makeColor(26, 65, 56);
firstColor.rgb()



                    //constructor function

function Color(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
}
Color.prototype.rgb = function(){
    const {r, g, b} = this
    return `rgb(${r}, ${g}, ${b})`;
};
Color.prototype.rgba =function(a){
    const {r, g, b} = this
    return `rgba(${r}, ${g}, ${b}, ${a})`
}
const color1 = new Color(100, 58, 150);
const color2 = new Color(200, 108, 150);
const color3 = new Color(100, 58, 150);
console.log(color1.rgb());
console.log(color2.rgb());
console.log(color3.rgba(0.6));



                        //classes for js

class Color1  {
    constructor( r, g, b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name
    }
    innerRGB(){
        const {r, g, b} = this
        return `${r}, ${g}, ${b}`
    }
    rgb(){
        return `rgb(${this.innerRGB()})`
    }
    rgba(a =1.0){
        return `rgba(${this.innerRGB()}, ${a})`
    }

}
const c1 = new Color1(58, 185, 200, 'skyblue');
const c2 = new Color1(200, 90, 160, 'pink');