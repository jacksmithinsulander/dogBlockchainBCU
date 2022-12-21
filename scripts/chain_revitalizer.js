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
        });
        return tempTimesheet;
    }
    getLatestTime() {
        // HÄMTA FÖREGÅENDE TID
        return this.timeSheet[this.timeSheet.length - 1];
    }
    async addTime(newTime) {
        // FÅNGA OCH PUSHA IN NYA TIDER
        // SPARA ÄVEN TIDIGARE HASH
        newTime.prevHash = this.getLatestTime().hash;
        console.log(this.getLatestTime().hash);
        // MAJNA
        newTime.mineBlock(this.difficulty);
        // HASHA
        // PUSHA
        this.timeSheet.push(newTime);
    }
    isChainValid() {
        // VALIDERA VÅR KEDJA
        for (let i = 1; i < this.timeSheet.length; i++) {
            const currentBlock = this.timeSheet[i];
            //const prevBlock = this.timeSheet[i - 1];
            //let testHash = currentBlock.calculateHash().then(hash => {});
        }
    }
}
