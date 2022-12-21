import UserList from "./userList.js";
import User from "./user.js";
import saveNewMember from "./saveNewMember.js";
import logIn from "./logIn.js";
import blockchainView from "./blockchainView.js";
import blockchain from "./blockchain.js";
const content = document.getElementById("content");
if (!localStorage.getItem("users")) {
    let users = new UserList();
    localStorage.setItem("users", JSON.stringify(users));
    console.log("we have ls");
} else {
    console.log("ls already exists");
}
if (localStorage.getItem("userId")) {
    blockchainView();
    blockchain();
} else {
    logIn();
}
