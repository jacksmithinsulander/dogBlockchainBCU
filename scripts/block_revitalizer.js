export default class BlockGet {
    constructor(data) {
        this.index = data.index;
        this.data = data.data;
        this.event = data.event;
        this.id = data.id;
        this.prevHash = data.prevHash;
        this.hash = data.hash;
        this.nonce = data.nonce;
    }
    async calculateHash() {
        // RÄKNA UT BLOCKETS HASH
        let msgInt8 = new TextEncoder().encode("salt1234salt" + JSON
            .stringify(this.data));
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
            this.data.nonce++;
            tryHash = await this.calculateHash();
        }
        this.data.hash = tryHash;
    }
}
