import dogGym from "./dogGym.js";

export default function walletView () {
    const content = document.getElementById("content");
    const blockArray = JSON.parse(localStorage.getItem("blockchainObjectArr"));
    let userId = localStorage.getItem("userId");

    if (!isNaN(userId)) {
        userId = userId.toString();
    }
    const walletDiv = document.createElement("div");


    let ownedDogs = [];
    blockArray.timeSheet.map((block) => {
        //console.log(block.data.dogsOwner);
        if(block.data.dogsOwner === userId) {
            //console.log(block);
            ownedDogs.push(block);
        }
    })
    
    for (let i = 0; i < ownedDogs.length; i++) {
        const dogDiv = document.createElement("div");
        dogDiv.id = `dogDiv${i}`;
        dogDiv.class = "dogDiv";

        dogDiv.innerHTML = 
        `<img src="${ownedDogs[i].data.dogImage}" alt="din hund"> </br> 
        <h3>${ownedDogs[i].data.dogName}</h3> </br> 
        <h4>XP: ${ownedDogs[i].data.dogXP}</h4> 
        <p>Dog State: ${ownedDogs[i].data.dogState}` ;

        const gymButton = document.createElement("button");
        gymButton.id = `gymBtn${i}`;
        if (ownedDogs[i].data.dogState == "With owner") {
            gymButton.innerHTML = "Send to gym!";
            gymButton.addEventListener('click', () => {
                dogGym(ownedDogs[i].data); 
                walletView();
            });
        } else {
            gymButton.innerHTML = "Send home!";
            gymButton.addEventListener('click', () => {
                dogGym(ownedDogs[i].data);
                walletView(); 
            });
        }

        dogDiv.appendChild(gymButton);

        walletDiv.appendChild(dogDiv);
    }
    content.innerHTML = "";
    content.appendChild(walletDiv);
    



}