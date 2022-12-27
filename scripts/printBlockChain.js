import validate from "./validate.js";
import validateError from "./validateError.js";

export default function printBlockChain() {
    const blockExplorer = document.createElement("div");
    blockExplorer.id = "blockExplorer";
    content.appendChild(blockExplorer);
    async function blockchainPrinter() {
        blockExplorer.innerHTML = "";
        
        let validateBtn = document.createElement("button");
        validateBtn.id = "validateBtn";
        validateBtn.innerText = "Validate chain";
        blockExplorer.appendChild(validateBtn);
        validateBtn.addEventListener("click", () => {
          validate(blockArray);
        })

        let createErrorBtn = document.createElement("button");
        createErrorBtn.id = "vcreateErrorBtn";
        createErrorBtn.innerText = "Create error";
        blockExplorer.appendChild(createErrorBtn);
        createErrorBtn.addEventListener("click", () => {
          validateError(blockArray);
        })
        
        var blockArray = JSON.parse(localStorage.getItem(
            'blockchainObjectArr'));
        blockArray.timeSheet.map(work => {
            let timeBox = document.createElement("div");
            timeBox.style.padding = "20px";
            timeBox.style.margin = "20px";
            timeBox.style.borderRadius = "10px";
            timeBox.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
            timeBox.id = work.id;
            timeBox.id = "blockBoxar";
            if (work.data.dogName === "Genesis") {
                timeBox.innerHTML = "<p> Genesis block </p>"
            } else {
                timeBox.innerHTML = "<p id = 'explorerText'> Previous Hash: " + work.prevHash + "<br>"
                + "<br> Hash: " + work.hash + "<br>"
                + "<br> Timestamp: " + work.data.timeStamp  + "<br>"
                + "<br> Event: " + work.event + "<br>"
                + "<br> Dogs Name: " + work.data.dogName + "<br>"
                + "<br> Dogbreed: " + work.data.dogBreed + "<br>"
                + "<br> Owner of dog: " + work.data.dogsOwner + "<br>"
                + "<br> Dog is: " + work.data.dogState + "<br>"
                + "<br> Dogs XP: " + work.data.dogXP + "<br>"
                + "<br> Dog Image URL: " + work.data.dogImage  
                + "</p> <br> <div id='dogImageBox'> <img id='doggyImage' src='" + work.data.dogImage 
                + "' style='object-fit:contain;'> </div>"
            }
            blockExplorer.appendChild(timeBox);
        })
    }
    blockchainPrinter(); 
}
