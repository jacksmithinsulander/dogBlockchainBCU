import BlockGet from "./block_revitalizer.js";

export default class chainGet {
    constructor(oldChain) {
        this.timeSheet = this.remakeBlocks(oldChain);
        this.difficulty = 3;
        console.log(this.timeSheet);
    }

    remakeBlocks(blockArray) {
        let tempTimesheet = [];
        blockArray.timeSheet.map(blockData => {
            let block = new BlockGet(blockData);
            tempTimesheet.push(block);
            //console.log(tempTimesheet);
        });
        return tempTimesheet;
    }

    getLatestTime() {
        // HÄMTA FÖREGÅENDE TID
        return this.timeSheet[this.timeSheet.length -1];
    }

    async addTime(newTime) {
        // FÅNGA OCH PUSHA IN NYA TIDER
        // SPARA ÄVEN TIDIGARE HASH
        newTime.prevHash = this.getLatestTime().hash;
        // MAJNA
        newTime.mineBlock(this.difficulty);
        // HASHA
        // newTime.hash = await newTime.calculateHash();
        // PUSHA
        this.timeSheet.push(newTime);
    }

    isChainValid() {
        // VALIDERA VÅR KEDJA
        for (let i = 1; i < this.timeSheet.length; i++) {
            const currentBlock = this.timeSheet[i];
            const prevBlock = this.timeSheet[i -1];

           // //console.log("Testa block", currentBlock, prevBlock);

            let testHash = currentBlock.calculateHash().then(hash => {
                //console.log("testHash", hash);
                if (currentBlock.hash !== hash) {
                    //console.log("INVALID! Not same hash!", currentBlock.hash, hash);
                    // return false;
                }
            });

            if (currentBlock.prevHash !== prevBlock.hash) {
                //console.log("Invalid: Not same prev hash");
               // return false;
            }

            //console.log("VALID");
           // return true;
        }
    }
}
