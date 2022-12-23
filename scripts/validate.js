import BlockGet from "./block_revitalizer.js";

export default function validate(blockArray) {
    console.log(blockArray);
    for (let i = 1; i < blockArray.timeSheet.length; i++) {
        const currentBlock = new BlockGet(blockArray.timeSheet[i]);
        const prevBlock = new BlockGet(blockArray.timeSheet[i-1]);
        console.log(currentBlock, prevBlock);
        let testHash = currentBlock.calculateHash().then(hash => {
            document.getElementById("blockBoxar").id = i;
            console.log("testHash", i, hash);
            if (currentBlock.prevHash !== prevBlock.hash) {
                console.log("INVALID! Not same hash!", currentBlock.hash, i, hash);
                document.getElementById(i).style.border = "3px solid red";
                return false;
            } else { 
                console.log("valid");
                document.getElementById(i).style.border = "3px solid teal";
                return true;
            }
        });
    }    
}






 



