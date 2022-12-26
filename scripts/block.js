export default class Block {
    static nextIndex = 0;
    constructor(data, event, prevHash = "") {
        this.index = Block.nextIndex++;
        this.data = data;
        //this.timestamp = Date.now();
        this.event = event; 
        this.prevHash = prevHash;
        this.hash = this.calculateHash().then(data => this.hash = data);
        this.nonce = 0;
        console.log(this);
    }
    async calculateHash() {
        // RÄKNA UT BLOCKETS HASH
        let msgInt8 = new TextEncoder().encode("salt1234salt" + JSON
            .stringify(this.data) + this.index + this.timeStamp + this
            .prevHash + this.nonce);
        let hashBuffer = await crypto.subtle.digest("SHA-256", msgInt8);
        let hashArray = Array.from(new Uint8Array(hashBuffer));
        let hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0"))
            .join("");
        return hashHex;
    }
    async mineBlock(difficulty) {
        // MAJNA ETT BLOCK
        let tryHash = await this.calculateHash();
        while (!tryHash.toString().startsWith("0".repeat(difficulty))) {
            this.nonce++;
            tryHash = await this.calculateHash(this.nonce);
        }
        this.hash = tryHash;
        //this.index++;
    }
}
