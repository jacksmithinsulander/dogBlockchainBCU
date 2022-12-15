import Chain from "./chain.js";
import Block from "./block.js";

let newBlock = new Chain();

let content = document.getElementById("content");

const chooseDogText = document.createElement("p");
content.appendChild(chooseDogText);
chooseDogText.innerHTML = "Choose your";

const dropDown = document.createElement("select");
content.appendChild(dropDown);

const buyBtn = document.createElement("button");
content.appendChild(buyBtn);
buyBtn.innerHTML = "buy dog";

const blockExplorer = document.createElement("div");
content.appendChild(blockExplorer);

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


async function setDogName() {
    const res = await fetch('https://namey.muffinlabs.com/name.json')
    const json = await res.json()
    return json[0]
}

buyBtn.addEventListener ("click", () => {
    console.log("köp " + dropDown.value);
    (async () => {
        const dogsName = await setDogName()
        let blockData = { 
            timeStamp: Math.floor(Date.now() / 1000),
            dogBreed: dropDown.value,
            dogName: dogsName,
            dogXP: 0,
            dogState: "With owner"
            // owner: 
        }
        console.log(blockData);
        newBlock.addTime(new Block(blockData));
    setTimeout(writeBlock, 100);
    })();
});

function writeBlock() {
    newBlock.timeSheet.map(work => {
        let blockChain = {
            prevHash: work.prevHash,
            dogBreed: work.data.dogBreed,
            dogName: work.data.dogName,
            hash: work.hash     
        }
        localStorage.setItem(work.nonce, JSON.stringify(blockChain))
    })
}

function printBlockChain() {
    blockExplorer.innerHTML = ""; 
    newBlock.timeSheet.map(work => {
        let timeBox = document.createElement("div");
        timeBox.style.border = "3px solid magenta";
        timeBox.style.padding = "20px";
        timeBox.style.margin = "20px";
        timeBox.style.backgroundColor = "cyan"
        timeBox.style.borderRadius = "10px"
        timeBox.id = work.id;
        timeBox.innerHTML = "<p>" + work.prevHash + "<br/>" + work.data.dogBreed + "<br/>" + work.data.dogName + "<br/>" + work.hash + "</p>"
        blockExplorer.appendChild(timeBox);
    })
}

