import logIn from "./logIn.js";
import UserList from "./userList.js";
import User from "./user.js";

let users = new UserList();
//console.log("userList", users);

export default function blockchainView(){  //blockchain() bytas mot ...
    content.innerHTML = "HEJEJ";

    let logOutBtn = document.createElement("button"); //logout btn kvar
    logOutBtn.id = "logOutBtn";
    logOutBtn.innerText = "Log out";
    content.appendChild(logOutBtn);

    logOutBtn.addEventListener("click", () => {
        content.innerHTML = "";
        logIn();
        localStorage.removeItem("userId");
    })
}


