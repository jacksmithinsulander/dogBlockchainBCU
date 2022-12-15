import pug from "./pictures.js";
import logIn from "./logIn.js";
import UserList from "./userList.js";
import User from "./user.js";

    let users = new UserList();
    console.log("userList", users);

export default function saveNewMember(){

    pug();

    // LABEL FÖR NYTT USERNAME
    let labelNewUser = document.createElement("Label");
    labelNewUser.innerText = "New username:";
    contentLogIn.appendChild(labelNewUser);

    //SKAPAR NY ANVÄNDARE
    let inputCreateUserName = document.createElement("input");
    inputCreateUserName.id = "inputCreateUserName";
    inputCreateUserName.type = "text";
    contentLogIn.appendChild(inputCreateUserName);

    // LABEL FÖR NYTT LÖSENORD
    let labelNewPassword = document.createElement("Label");
    labelNewPassword.innerText = "New password:";
    contentLogIn.appendChild(labelNewPassword);

    //SKAPAR NYTT LÖSENORD
    let inputCreatePassword = document.createElement("input");
    inputCreatePassword.id = "inputPassword";
    inputCreatePassword.type = "text";
    contentLogIn.appendChild(inputCreatePassword);

    //SKAPAR CREATE-KNAPP
    let createBtn = document.createElement("button");
    createBtn.innerText = "Save";
    createBtn.id = "createBtn";
    contentLogIn.appendChild(createBtn);

    let closeBtn = document.createElement("button");
    closeBtn.innerText = "Close";
    closeBtn.id = "closeBtn";
    contentLogIn.appendChild(closeBtn);

    closeBtn.addEventListener("click", () => {
        contentLogIn.innerHTML = "";
        logIn();
    })


    createBtn.addEventListener("click", () => {
        users.addUser(new User(inputCreateUserName.value, inputCreatePassword.value));
        console.log("users", users);
    })

}