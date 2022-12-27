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
            // leta efter dubletter och lagg bara till det med hogsta index     
            //console.log(block);
            ownedDogs.push(block);
        }
    });

    // Array med alla ID i owned dogs
    let ownedDogsIdArray = [];
    ownedDogs.map((block) => {
        ownedDogsIdArray.push(block.data.id);
    });
    console.log(ownedDogsIdArray);

    // Hittar dubletter och lagger ID med dubletter i array
    const toFindDuplicates = ownedDogsIdArray => ownedDogsIdArray.filter((item, index) => ownedDogsIdArray.indexOf(item) !== index)
    const duplicateElements = toFindDuplicates(ownedDogsIdArray);
    console.log(duplicateElements);

    // mappar genom alla ID (kanske bara ska mappa dublettID)
    duplicateElements.map((id) => {
        let dogsWithId = [];
        // Hittar alla hundar med dublett ID
        ownedDogs.map((dog) => {
            if (dog.data.id === id) {
                //hundar med ID
                dogsWithId.push(dog);
            }
        });
        console.log(dogsWithId);
        dogsWithId.pop(); // poppar bort hunden vi vill behalla 
        //console.log(dogsWithId);
        // ta bort hundar fran Owned dogs med samma Index som dogsWithID
        dogsWithId.map((dog) => {
            let dogIndex = dog.index;
            //console.log(dog.index);
            let duplicateDog = ownedDogs.find(x => x.index === dogIndex);
            let indexInOwnedDogs = ownedDogs.indexOf(duplicateDog);
            console.log(indexInOwnedDogs);
            //console.log(ownedDogs);
            if (indexInOwnedDogs > -1) {
                ownedDogs.splice(indexInOwnedDogs, 1);
            }
        });
    });
    console.log(ownedDogs);
    
    for (let i = 0; i < ownedDogs.length; i++) {
        const dogDiv = document.createElement("div");
        dogDiv.id = `dogDivs dogDiv${i}`;
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