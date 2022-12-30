import blockchain from "./blockchain.js";
import logIn from "./logIn.js";
import blockchainView from "./blockchainView.js";
import printBlockChain from "./printBlockChain.js";
import walletView from "./walletView.js";

export default function headerMenuMaker() {
    let blockExplorerView = document.createElement("button");
    blockExplorerView.id = "blockExplorerView";
    blockExplorerView.innerText = "Blockchain Explorer";
    header.appendChild(blockExplorerView);

    let returnBtn = document.createElement("button");
    returnBtn.innerText = "Return"
    returnBtn.id = "returnBtn";

    blockExplorerView.addEventListener("click", () => {
        content.innerHTML = "";
        returnBtnfunc();
        printBlockChain();
    });
    
    if (localStorage.getItem("userId")) {
        let walletBtn = document.createElement("button");
        walletBtn.id = "walletBtn";
        walletBtn.innerText = "Dog Wallet";
        header.appendChild(walletBtn);
        walletBtn.addEventListener('click', () => {
            walletView();
            returnBtnfunc();    
        })
    }

    function returnBtnfunc() {
        header.appendChild(returnBtn);
        returnBtn.addEventListener("click", () => {
            if (localStorage.getItem("userId")) {
                content.innerHTML = "";
                header.innerHTML = "";
                blockchainView();
                blockchain();
            } else {
                content.innerHTML = "";
                header.innerHTML = "";
                logIn();
            }
        })
    }

}
