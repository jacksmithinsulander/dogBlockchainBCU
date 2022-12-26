import Block from "./block.js";
import ChainGet from "./chain_revitalizer.js";

export default function dogGym(dogData) {
    console.log(dogData);  
    var blockArray = JSON.parse(localStorage.getItem(
    'blockchainObjectArr'));
    blockArray = new ChainGet(blockArray); 
    const dogEvent = "Send to Gym";
    let newDogData = { 
        timeStamp: Math.floor(Date.now() / 1000),
        dogBreed: dogData.dogBreed,
        dogName: dogData.dogName,
        dogImage: dogData.dogImage,
        dogXP: "Leveling....",
        dogsOwner: dogData.dogsOwner,
        dogState: "At Gym!"
    }
    blockArray.addTime(new Block(newDogData, dogEvent));
    setTimeout(() => {
        localStorage.setItem("blockchainObjectArr", JSON
            .stringify(blockArray));
    }, 1000);



    


}