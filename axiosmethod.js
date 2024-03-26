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
