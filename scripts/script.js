import Chain from "./chain.js";
import Block from "./block.js";

let content = document.getElementById("content");

const chooseDogText = document.createElement("p");
content.appendChild(chooseDogText);
chooseDogText.innerHTML = "Choose your";

const dropDown = document.createElement("select");
content.appendChild(dropDown);

const buyBtn = document.createElement("button");
content.appendChild(buyBtn);
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
}, 500);

buyBtn.addEventListener ("click", () => {
    console.log("köp" + dropDown.value);
    let blockData = { 
       dog: dropDown.value,
       timeStamp: Math.floor(Date.now() / 1000)
       // owner: 
    }
    console.log(blockData);
});
