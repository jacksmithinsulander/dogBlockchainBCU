import Block from "./block.js";
import ChainGet from "./chain_revitalizer.js";

export default function dogGym(dogData) {
    
    var blockArray = JSON.parse(localStorage.getItem(
    'blockchainObjectArr'));
    blockArray = new ChainGet(blockArray); 
    if (dogData.dogState == "With owner") {
        var dogEvent = "Send to Gym";
        var newDogData = { 
            timeStamp: Math.floor(Date.now() / 1000),
            dogBreed: dogData.dogBreed,
            dogName: dogData.dogName,
            dogImage: dogData.dogImage,
            dogXP: "Leveling....",
            dogsOwner: dogData.dogsOwner,
            dogState: "At Gym!"
        }
    } else {
        var dogEvent = "Take home";
        var newDogXP = (Math.floor(Date.now() / 1000) - dogData.timeStamp)/100;
        var newDogData = { 
            timeStamp: Math.floor(Date.now() / 1000),
            dogBreed: dogData.dogBreed,
            dogName: dogData.dogName,
            dogImage: dogData.dogImage,
            dogXP: newDogXP,
            dogsOwner: dogData.dogsOwner,
            dogState: "With owner"
        }
    }
    blockArray.addTime(new Block(newDogData, dogEvent));
        setTimeout(() => {
            localStorage.setItem("blockchainObjectArr", JSON
                .stringify(blockArray));
        }, 1000);
}