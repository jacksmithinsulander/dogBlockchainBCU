import blockchain from "./blockchain.js";
import pug from "./pictures.js";
import saveNewMember from "./saveNewMember.js";
import UserList from "./userList.js";
import User from "./user.js";

    let users = new UserList();
    console.log("userList", users);

export default function logIn(){

    // <h3>LOG IN</h3> 
    // <h3 id="createNewText">CREATE NEW</h3>

    pug();

    let headline = document.createElement("h1");
    headline.id = "pupster"; 
    headline.innerText = "PUPSTER";
    contentLogIn.appendChild(headline);

    //LABEL FÖR USERNAME
    let labelUsername = document.createElement("Label");
    labelUsername.innerText = "Username:";
    contentLogIn.appendChild(labelUsername);

    //SKAPA LOG IN
    let inputUserName = document.createElement("input");
    inputUserName.id = "inputUserName";
    inputUserName.type = "text";
    contentLogIn.appendChild(inputUserName);

    //LABEL FÖR PASSWORD
    let labelPassword = document.createElement("Label");
    labelPassword.innerText = "Password:";
    contentLogIn.appendChild(labelPassword);

    //SKAPAR LOG IN
    let inputPassword = document.createElement("input");
    inputPassword.id = "inputPassword";
    inputPassword.type = "password";
    contentLogIn.appendChild(inputPassword);

    //LOG IN KNAPP
    let logInBtn = document.createElement("button");
    logInBtn.innerText = "Log in"
    logInBtn.id = "logInBtn";
    contentLogIn.appendChild(logInBtn);

    //CREATE NEW USER 
    let newMember = document.createElement("button");
    newMember.innerText = "New Member?";
    newMember.id = "newMember";
    contentLogIn.appendChild(newMember);

    newMember.addEventListener("click", () =>{
    contentLogIn.innerHTML = "";
    saveNewMember();
    })

    logInBtn.addEventListener("click", async () => {

        let foundUser = users.users.find(user => user.name === inputUserName.value);
        // KOLLA OM FOUNDUSER ÄR TRUE
        // console.log("foundUser", foundUser);
        // console.log("Testa lösenordet: ", foundUser.checkPassword(inputPassword.value));
        let userId = await foundUser.checkPassword(inputPassword.value);
        // console.log("userId", userId);
        if (foundUser && userId){
            localStorage.setItem("userId", userId);
            // console.log("userList", users);
            contentLogIn.innerHTML = "";
            blockchain();
        } else {
            alert = "Sorry invalid password";
        }
        
    })

}

