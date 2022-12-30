import blockchain from "./blockchain.js";
import blockchainView from "./blockchainView.js";

export default class User {
    constructor(name, password) {
        this.name = name;
        this.password = this.savePassword(password);
        this.id = self.crypto.randomUUID();
    }
    async consumePassword(password) {
        let msgInt8 = new TextEncoder().encode(password + "salt1234salt");
        let hashBuffer = await crypto.subtle.digest("SHA-256", msgInt8);
        let hashArray = Array.from(new Uint8Array(hashBuffer));
        let hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0"))
            .join("");
        return hashHex;
    }
    async savePassword(password) {
        // Spara lösenord för användaren i this.password
        let hashPass = await this.consumePassword(password);
        this.password = hashPass;
    }
    async checkPassword(password) {
        // Kolla om lösen stämmer vid inlogg
        let tryPassword = await this.consumePassword(password)
        if (tryPassword === this.password) {
            content.innerHTML = "";
            blockchainView(); 
            blockchain();
            return this.id;
        } else {
            alert = "Sorry invalid password"
            return false;
        }
    }
}
