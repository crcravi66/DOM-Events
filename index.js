const h1 = document.querySelector('h1')
h1.style.textAlign = 'center';
h1.style.fontSize = '3rem';

                // container

const pokemon = document.querySelector('#container')    
baseurl = './frame2/'


for (let i = 1; i <= 300; i++){
    const div = document.createElement("div")
    const span = document.createElement("span")
    const img = document.createElement("img")
    div.classList.add('pokemon')

    img.src = `${baseurl}${i}.png`
    span.innerText = `#${i}`;
    
    // div.insertAdjacentElemen('afterend',img);
    // div.insertAdjacentElement("afterend",span);
    // pokemon.insertAdjacentElement('afterend',div)

    div.appendChild(img);
    div.appendChild(span);
    pokemon.appendChild(div)
   

}


