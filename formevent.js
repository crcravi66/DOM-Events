                                //form Event

const form = document.querySelector("#form");
const input = document.querySelector('#formInput');
const submited = document.querySelector('#submitButton');
const li = document.querySelector("#ul-container");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newList = document.createElement('li');
    const listvalues = input.value ;
    newList.innerText = listvalues ;
    if (input.value){   
        li.append(newList)
    }
    input.value = "";
});

                                //tweets form Events

const tweetForm = document.querySelector('#form-tweets')


const alltweets = document.querySelector('#tweet-container')

tweetForm.addEventListener("submit", function(eve){
    eve.preventDefault();
    
    const usernameInput = tweetForm.elements.Username ; 
    const tweetsInput = tweetForm.elements.Tweets;  

    addEvents(usernameInput.value, tweetsInput.value);        
    usernameInput.value = "";
    tweetsInput.value = "";
    
})

const addEvents = (username, tweets ) =>{
    const newLi = document.createElement('li');
    const boldTag = document.createElement('b');
    boldTag.append(username)
    newLi.append(boldTag)
    newLi.append(` - ${tweets}`);
    if (username && tweets){
        alltweets.append(newLi)
    }
}






