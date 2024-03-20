const form = document.querySelector("#form");
const input = document.querySelector('#formInput');
const submited = document.querySelector('#submitButton');
const li =document.querySelector("#ul-container");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newList = document.createElement('li');
    const listvalues = input.value ;
    newList.innerText = listvalues ;
    li.append(newList)
    input.value = "";
});