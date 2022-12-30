import UserList from "./userList.js";
import logIn from "./logIn.js";
import blockchainView from "./blockchainView.js";
import blockchain from "./blockchain.js";

if (!localStorage.getItem("users")) {
    let users = new UserList();
    localStorage.setItem("users", JSON.stringify(users));
}
if (localStorage.getItem("userId")) {
    blockchainView();
    blockchain();
} else {
    logIn();
}
