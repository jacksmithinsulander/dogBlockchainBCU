import blockchainView from "./blockchainView.js";
import pug from "./pictures.js";
import saveNewMember from "./saveNewMember.js";
import User from "./user.js";
import blockchain from "./blockchain.js";
import headerMenuMaker from "./headerMenuMaker.js";

export default function logIn() {
    header.innerHTML = "";
    content.innderHTML = "";
    headerMenuMaker();
    pug();
    let headline = document.createElement("h1");
    headline.id = "pupster";
    headline.innerText = "PUPSTER";
    content.appendChild(headline);
    //LABEL FÖR USERNAME
    let labelUsername = document.createElement("Label");
    labelUsername.id = "labelUsername";
    labelUsername.innerText = "Username:";
    content.appendChild(labelUsername);
    //SKAPA LOG IN
    let inputUserName = document.createElement("input");
    inputUserName.id = "inputUserName";
    inputUserName.type = "text";
    content.appendChild(inputUserName);
    //LABEL FÖR PASSWORD
    let labelPassword = document.createElement("Label");
    labelPassword.id = "labelPassword";
    labelPassword.innerText = "Password:";
    content.appendChild(labelPassword);
    //SKAPAR LOG IN
    let inputPassword = document.createElement("input");
    inputPassword.id = "inputPassword";
    inputPassword.type = "password";
    content.appendChild(inputPassword);
    //LOG IN KNAPP
    let logInBtn = document.createElement("button");
    logInBtn.innerText = "Log in"
    logInBtn.id = "logInBtn";
    content.appendChild(logInBtn);
    //CREATE NEW USER 
    let newMember = document.createElement("button");
    newMember.innerText = "New Member?";
    newMember.id = "newMember";
    content.appendChild(newMember);
    newMember.addEventListener("click", () => {
        content.innerHTML = "";
        saveNewMember();
    })
    logInBtn.addEventListener("click", async () => {
        let users = JSON.parse(localStorage.getItem("users"));

        function findAUser() {
            console.log(users.users.length);
            for (let i = 0; i < users.users.length; i++) {
                let checkObject = new User(inputUserName.value,
                    inputPassword.value);
                setTimeout(testPassword, 1000);

                function testPassword() {
                    if (users.users[i].password === checkObject
                        .password) {
                        console.log("OKKKK", users.users[i].name);
                        localStorage.setItem("userId", inputUserName.value);

                        console.log(users.users[i].name);
                        content.innerHTML = "";
                        blockchainView();
                        blockchain();
                    } else {
                        alert("Password or username is incorrect")
                    }
                }
            }
        }
        findAUser();
    })
}
