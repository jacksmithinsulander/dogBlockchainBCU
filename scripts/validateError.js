import BlockGet from "./block_revitalizer.js";

export default function validateError(blockArray) {
    console.log(blockArray);
    for (let i = 1; i < blockArray.timeSheet.length; i++) {
        const currentBlock = new BlockGet(blockArray.timeSheet[i]);
        const prevBlock = 100;

        let testHash = currentBlock.calculateHash().then(hash => {
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