import BlockGet from "./block_revitalizer.js";

export default function validateError(blockArray) {
    console.log(blockArray);
    for (let i = 1; i < blockArray.timeSheet.length; i++) {
        const currentBlock = new BlockGet(blockArray.timeSheet[i]);
        const prevBlock = 100;
        console.log(currentBlock, prevBlock);

        let testHash = currentBlock.calculateHash().then(hash => {
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