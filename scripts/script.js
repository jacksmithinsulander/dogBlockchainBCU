import Chain from "./chain.js";
import Block from "./block.js";
const chooseDogText = document.createElement("p");
document.body.appendChild(chooseDogText);
chooseDogText.innerHTML = "Choose your";

const dropDown = document.createElement("select");
document.body.appendChild(dropDown);

const buyBtn = document.createElement("button");
document.body.appendChild(buyBtn);
buyBtn.innerHTML = "buy dog";

var dogsArray = [];

fetch('https://dog.ceo/api/breeds/list/all') 
.then(response => response.json()) 
.then(data => { for (var key in data.message) 
    { dogsArray.push({ key: key}); 
    } 
});

function makeDropDown() {
    for (let i = 0; i < dogsArray.length; i++) {
        dropDown.innerHTML += "<option value='" + dogsArray[i].key + "'>" + dogsArray[i].key + "</option>";
    }
}

setTimeout(() => {
    console.log(dogsArray);
    makeDropDown();
}, 100);
