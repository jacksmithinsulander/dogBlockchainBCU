import Chain from "./chain.js";
import Block from "./block.js";
import ChainGet from "./chain_revitalizer.js";
import headerMenuMaker from "./headerMenuMaker.js";

export default function blockchain() {
    let content = document.getElementById("content");
    const header = document.getElementById("header")
    header.innerHTML = "";
    // content.innerHTML = "";
    const chooseDogText = document.createElement("p");
    content.appendChild(chooseDogText);
    chooseDogText.id = "chooseDogText"
    chooseDogText.innerHTML = "Choose your dog";
    const dropDown = document.createElement("select");
    dropDown.id = "dropDown"
    content.appendChild(dropDown);
    const buyBtn = document.createElement("button");
    buyBtn.id = "buyBtn";
    content.appendChild(buyBtn);
    buyBtn.innerHTML = "Buy dog";
    var dogsArray = [];
    if (!(localStorage.getItem('blockchainObjectArr'))) {
        var blockArray = new Chain();
        localStorage.setItem('blockchainObjectArr', JSON.stringify(blockArray));
        console.log("has chain");
    } else {
        var blockArray = JSON.parse(localStorage.getItem('blockchainObjectArr'));
        blockArray = new ChainGet(blockArray);
        console.log("created chain");
    }
    fetch('https://dog.ceo/api/breeds/list/all').then(response => response
    .json()).then(data => {
        for (var key in data.message) {
            dogsArray.push({
                key: key
            });
        }
    });

    function makeDropDown() {
        for (let i = 0; i < dogsArray.length; i++) {
            dropDown.innerHTML += "<option value='" + dogsArray[i].key + "'>" +
                dogsArray[i].key + "</option>";
        }
    }
    setTimeout(() => {
        makeDropDown();
    }, 500);
    async function setDogName() {
        const res = await fetch('https://namey.muffinlabs.com/name.json')
        const json = await res.json()
        return json[0]
    }
    async function setDogImg(choosenDogBreed) {
        let baseURL = "https://dog.ceo/api/breed/";
        let URLEnding = "/images/random";
        const urlResponse = await fetch(baseURL.concat(choosenDogBreed,
            URLEnding))
        const urlJSON = await urlResponse.json()
        return urlJSON.message;
    }

    function buyDog() {
        (async () => {
            const dogImg = await setDogImg(dropDown.value);
            const dogsName = await setDogName()
            const dogOwner = await localStorage.getItem("userId");
            const dogEvent = "Bought dog"; 
            let blockData = {
                timeStamp: Math.floor(Date.now() / 1000),
                dogBreed: dropDown.value.charAt(0).toUpperCase() + dropDown.value.slice(1),
                dogName: dogsName,
                dogImage: dogImg,
                dogXP: 0,
                dogsOwner: dogOwner,
                dogState: "With owner",
                id: self.crypto.randomUUID()
            }
            blockArray.addTime(new Block(blockData, dogEvent));
            setTimeout(() => {
                localStorage.setItem("blockchainObjectArr", JSON
                    .stringify(blockArray));
            }, 1000);
        })();
    }
    buyBtn.addEventListener("click", () => {
        buyDog();
        alert("You bought a dog!");
    });
    headerMenuMaker();
}
