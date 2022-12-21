import Block from "./block.js";
export default class Chain {
    constructor() {
        this.timeSheet = [this.createGenesisBlock()];
        this.difficulty = 3;
    }
    createGenesisBlock() {
        let newBlock = new Block({
            "dogName": "Genesis"
        });
        return newBlock
    }
    getLatestTime() {
        // HÄMTA FÖREGÅENDE TID
        return this.timeSheet[this.timeSheet.length - 1];
    }
    async addTime(newTime) {
        // FÅNGA OCH PUSHA IN NYA TIDER
        // SPARA ÄVEN TIDIGARE HASH
        newTime.prevHash = this.getLatestTime().hash;
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
