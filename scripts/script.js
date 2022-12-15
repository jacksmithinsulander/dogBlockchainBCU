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

function setDogName () {

    fetch('https://namey.muffinlabs.com/name.json')

    .then(response => response.json())

    .then (data => {
        data = String(data);
        // console.log(data);
        return data;
        // let dogsName = data;
        // console.log(dogsName);
        
    })

    // setTimeout(() => {
       
    // }, 500);

 }

// function func(url) {
//     return fetch(url)  // return this promise
//     .then(response => response.json())
//     .then(json => (json.results))
// }

// func('https://namey.muffinlabs.com/name.json')
// .then(users => console.log(users))  // call `then()` on the returned promise to access users
// .catch(err => /* handle errors */)

// setDogName();

buyBtn.addEventListener ("click", () => {
    console.log("köp" + dropDown.value);
    setDogName();
    let blockData = { 
        timeStamp: Math.floor(Date.now() / 1000),
        dog: dropDown.value,
        dogName: setDogName()
       // owner: 

    }
    console.log(blockData);

});
