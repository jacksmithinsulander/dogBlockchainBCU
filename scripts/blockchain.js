import Chain from "./chain.js";
import Block from "./block.js";


export default function blockchain () {

    //let newBlock = new Chain();

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

    if(!(localStorage.getItem('blockchainObjectArr'))){
        var blockArray = new Chain();
        localStorage.setItem('blockchainObjectArr', JSON.stringify(blockArray));
        printBlockChain();
        console.log('ls has been created');
    } else {
        console.log('ls is updating');
        var blockArray = JSON.parse(localStorage.getItem('blockchainObjectArr'));
        printBlockChain();
        console.log('ls has been updated');
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
 function buyDog() { 
    console.log("köp " + dropDown.value);
        (async () => {
            const dogsName = await setDogName()
            let blockData = { 
                timeStamp: Math.floor(Date.now() / 1000),
                dogBreed: dropDown.value,
                dogName: dogsName,
                dogXP: 0,
                dogState: "With owner"
            }
            console.log(blockData);
            console.log(blockArray);
            blockArray.addTime(new Block(blockData));
        localStorage.setItem("blockchainObjectArr", JSON.stringify(blockArray))
        printBlockChain();
        })();
 }
    buyBtn.addEventListener ("click", () => {
        buyDog();
    }); 

    //I och med att jag ändrade  här ovanför igår (funktionen write block) så att vi får ett ganska korrekt objekt i ls (vi får väll 
    // fixa till det objektet med så vi får in all info som vi vill ha sen, hehe) så får vi göra om brint chain funktionen. 
    // Gör om den så att den istället för att bygga ihop det printade blocket som den gör manuellt nu, så läser den det från blockkedjan från ls. 

    async function printBlockChain() {
        console.log("printing chain");
        blockExplorer.innerHTML = ""; 
        //for (block in blockArray) {
            blockArray.timeSheet.map(work => {
                setTimeout(console.log("print new"), 1000)
                console.log(work);
                let timeBox = document.createElement("div");
                timeBox.style.border = "3px solid magenta";
                timeBox.style.padding = "20px";
                timeBox.style.margin = "20px";
                timeBox.style.backgroundColor = "cyan"
                timeBox.style.borderRadius = "10px"
                timeBox.id = work.id;
                timeBox.innerHTML = "<p> Previous Hash: " + work.prevHash + "<br/> Dogbreed: " + work.data.dogBreed + "<br/> Dogs Name: " + work.data.dogName + "<br> Dogs XP: " + work.data.dogXP + "<br> Dog is: " + work.data.dogState + "<br> Timestamp: " + work.data.timeStamp  + "<br/> Hash: " + work.hash + "</p>"
                //timeBox.innerHTML = "<p>" + blockArray[block] + "</p>";
                blockExplorer.appendChild(timeBox);
            })
        //}
    }
}
