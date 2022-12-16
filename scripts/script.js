//generell kommentar, tror det lättaste är att göra fixarna nerifrån och upp ist för uppifrån och ner, så börja med fixen närmast botten isf

import blockchain from "./blockchain.js";

blockchain();

/* import Chain from "./chain.js";
import Block from "./block.js";

let newBlock = new Chain();

// Gör en if else funktion som kollar ifall en blockkedja finns i LS eller ej, om den finns så laddain den förexisterande, 
// annars så kan den göra så som den gör nu (alltså printar genesisblock). Försök även baka in i denna funktionen
// en variabel som börjar på 1 och varje gång ett block adderas  så ++ar den. Tänker att denna aggerar som blockidentifierare i kedjan
// Så om blockkedjan finns i ls så ska denna siffra också läsas ifrån LS. 

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

//När vi gör blocket så kan vi även använda detta api: https://dog.ceo/api/breed/HUNDRAS/images/random (exempel: https://dog.ceo/api/breed/akita/images/random)
// för att även lägga till en url till en random bild i själva blocket som vi kan använda för att rendera i bild på hunden i t.ex. explorern eller ens 
// dogwallet (som absolut är något vi borde lägga till!

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


//  I funktionen writeBlock så kommer för varje adderat block hela blockkedjan adderas som ett nytt objekt(tror jag, testa detta), så  
// fixa till funktionen så att den "clearar" de delarna som ej ska läggas till igen

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


//I och med att jag ändrade  här ovanför igår (funktionen write block) så att vi får ett ganska korrekt objekt i ls (vi får väll 
// fixa till det objektet med så vi får in all info som vi vill ha sen, hehe) så får vi göra om brint chain funktionen. 
// Gör om den så att den istället för att bygga ihop det printade blocket som den gör manuellt nu, så läser den det från blockkedjan från ls. 

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

 */