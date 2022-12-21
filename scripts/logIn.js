import blockchainView from "./blockchainView.js";
import pug from "./pictures.js";
import saveNewMember from "./saveNewMember.js";
import UserList from "./userList.js";
import User from "./user.js";
import blockchain from "./blockchain.js";

/* let users = new UserList();
console.log("userList", users); */

export default function logIn(){

    // <h3>LOG IN</h3> 
    // <h3 id="createNewText">CREATE NEW</h3>

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

    newMember.addEventListener("click", () =>{
       content.innerHTML = "";
       saveNewMember();
    })

    logInBtn.addEventListener("click", async () => {


        let users = JSON.parse(localStorage.getItem("users"));
        console.log(users.users[0].name);
        /* let foundUser = users.users.find(() => {
            
        });
        */
        function findAUser () {
            console.log(users.users)
        }


        //console.log(foundUser + "hittade denna user fran lS objekt");

        //console.log("Testa lösenordet: ", inputPassword.value);
        //let userId = await foundUser.checkPassword(inputPassword.value); //.checkpassword??
        localStorage.setItem("userId", userId);
    })
}

