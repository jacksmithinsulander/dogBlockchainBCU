import logIn from "./logIn.js";

export default class User {
    constructor(name, password) {
        this.name = name;
        this.password = this.savePassword(password);
        this.id = self.crypto.randomUUID();
    }

   async consumePassword(password) {
        let msgInt8 = new TextEncoder().encode(password+"salt1234salt");
          let hashBuffer = await crypto.subtle.digest("SHA-256", msgInt8);
          let hashArray = Array.from(new Uint8Array(hashBuffer));
          let hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
          //console.log("hashHex", hashHex);
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
        let testPassword = await this.consumePassword(password)

        console.log("testPassword", testPassword);

        if (testPassword === this.password) {
            console.log("Rätt lösenord");
            //alert = "Correct password"
            return this.id;
        } else {
            //console.log("Fel lösenord");
            alert = "Sorry invalid password"
            return false;
        }
    }    
}