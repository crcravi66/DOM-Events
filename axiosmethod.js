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
