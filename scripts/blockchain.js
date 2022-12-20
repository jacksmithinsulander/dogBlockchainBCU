import Chain from "./chain.js";
import Block from "./block.js";
import BlockGet from "./block_revitalizer.js";
import ChainGet from "./chain_revitalizer.js";
import chainGet from "./chain_revitalizer.js";


export default function blockchain () {

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

    if(!(localStorage.getItem('blockchainObjectArr'))){
        var blockArray = new Chain();
        localStorage.setItem('blockchainObjectArr', JSON.stringify(blockArray));
        printBlockChain();
    } else {
        var blockArray = JSON.parse(localStorage.getItem('blockchainObjectArr'));
        blockArray = new chainGet(blockArray);
        printBlockChain();
    } 

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
        const urlResponse = await fetch(baseURL.concat(choosenDogBreed, URLEnding))
        const urlJSON = await urlResponse.json()
        return urlJSON.message;
        }
    
 function buyDog() { 
        (async () => {
            const dogImg = await setDogImg(dropDown.value);
            const dogsName = await setDogName()
            let blockData = { 
                timeStamp: Math.floor(Date.now() / 1000),
                dogBreed: dropDown.value,
                dogName: dogsName,
                dogImage: dogImg,
                dogXP: 0,
                dogState: "With owner"
            }
            blockArray.addTime(new Block(blockData));
            console.log(blockArray);
            localStorage.setItem("blockchainObjectArr", JSON.stringify(blockArray))
        printBlockChain();
        })();
 }
    buyBtn.addEventListener ("click", () => {
        buyDog();
    }); 

    async function printBlockChain() {
        blockExplorer.innerHTML = ""; 
            blockArray.timeSheet.map(work => {
                let timeBox = document.createElement("div");
                timeBox.style.border = "3px solid magenta";
                timeBox.style.padding = "20px";
                timeBox.style.margin = "20px";
                timeBox.style.backgroundColor = "cyan"
                timeBox.style.borderRadius = "10px"
                timeBox.id = work.id;
                if (work.data.dogName === "Genesis"){
                    timeBox.innerHTML = "<p> Genesis block </p>"
                }else {
                    timeBox.innerHTML = "<p> Previous Hash: " + work.prevHash + "<br/> Dogbreed: " + work.data.dogBreed + "<br/> Dogs Name: " + work.data.dogName + "<br> Dogs XP: " + work.data.dogXP + "<br> Dog is: " + work.data.dogState + "<br> Dog Image URL: " + work.data.dogImage + "<br> Timestamp: " + work.data.timeStamp  + "<br/> Hash: " + work.hash + "</p> <br> <img src='" + work.data.dogImage + "' style='object-fit:contain;'>" 
                }
                blockExplorer.appendChild(timeBox);
            })
    }
}
