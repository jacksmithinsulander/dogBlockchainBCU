import blockchain from "./blockchain.js";
import blockchainView from "./blockchainView.js";

export default class User {
    constructor(name, password) {
        this.name = name;
        this.password = this.savePassword(password);
        this.id = self.crypto.randomUUID();
    }
    async consumePassword(password) {
        console.log("consume password", password)
        let msgInt8 = new TextEncoder().encode(password + "salt1234salt");
        let hashBuffer = await crypto.subtle.digest("SHA-256", msgInt8);
        let hashArray = Array.from(new Uint8Array(hashBuffer));
        let hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0"))
            .join("");
        console.log("hashHex", hashHex);
        return hashHex;
    }
    async savePassword(password) {
        // Spara lösenord för användaren i this.password
        console.log("lösen in", password);
        let hashPass = await this.consumePassword(password);
        console.log("hash pasword", hashPass);
        this.password = hashPass;
    }
    async checkPassword(password) {
        // Kolla om lösen stämmer vid inlogg
        console.log("ingående password", password)
        let testPassword = await this.consumePassword(password)
        console.log("testPassword", testPassword);
        if (testPassword === this.password) {
            console.log("Rätt lösenord");
            content.innerHTML = "";
            blockchainView(); //bytas ut 
            blockchain();
            return this.id;
        } else {
            alert = "Sorry invalid password"
            return false;
        }
    }
}
