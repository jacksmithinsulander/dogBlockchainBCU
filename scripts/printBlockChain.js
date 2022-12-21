import Chain from "./chain.js";
import Block from "./block.js";
import BlockGet from "./block_revitalizer.js";
import ChainGet from "./chain_revitalizer.js";
import blockchain from "./blockchain.js";
export default function printBlockChain() {
    const blockExplorer = document.createElement("div");
    blockExplorer.id = "blockExplorer";
    content.appendChild(blockExplorer);
    async function blockchainPrinter() {
        blockExplorer.innerHTML = "";
        var blockArray = JSON.parse(localStorage.getItem(
            'blockchainObjectArr'));
        blockArray.timeSheet.map(work => {
            let timeBox = document.createElement("div");
            timeBox.style.border = "3px solid magenta";
            timeBox.style.padding = "20px";
            timeBox.style.margin = "20px";
            timeBox.style.backgroundColor = "cyan"
            timeBox.style.borderRadius = "10px"
            timeBox.id = work.id;
            timeBox.id = "blockBoxar"
            if (work.data.dogName === "Genesis") {
                timeBox.innerHTML = "<p> Genesis block </p>"
            } else {
                timeBox.innerHTML = "<p> Previous Hash: " + work
                    .prevHash + "<br/> Dogbreed: " + work.data
                    .dogBreed + "<br/> Dogs Name: " + work.data
                    .dogName + "<br> Dogs XP: " + work.data.dogXP +
                    "<br> Owner of dog: " + work.data.dogsOwner +
                    "<br> Dog is: " + work.data.dogState +
                    "<br> Dog Image URL: " + work.data.dogImage +
                    "<br> Timestamp: " + work.data.timeStamp +
                    "<br/> Hash: " + work.hash +
                    "</p> <br> <img src='" + work.data.dogImage +
                    "' style='object-fit:contain;'>"
            }
            blockExplorer.appendChild(timeBox);
        })
    }
    blockchainPrinter();
}
