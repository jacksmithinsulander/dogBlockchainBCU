import BlockGet from "./block_revitalizer.js";

export default function validate(blockArray) {
    
    for (let i = 1; i < blockArray.timeSheet.length; i++) {
        const currentBlock = new BlockGet(blockArray.timeSheet[i]);
        const prevBlock = new BlockGet(blockArray.timeSheet[i-1]);
        let testHash = currentBlock.calculateHash().then(hash => {
            document.getElementById("blockBoxar").id = i;
            if (currentBlock.prevHash !== prevBlock.hash) {
                document.getElementById(i).style.border = "3px solid red";
                return false;
            } else { 
                document.getElementById(i).style.border = "3px solid teal";
                return true;
            }
        });
    }    
}






 



