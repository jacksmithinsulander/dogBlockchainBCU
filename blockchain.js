import logIn from "./logIn.js";
import UserList from "./userList.js";
import User from "./user.js";

    let users = new UserList();
    console.log("userList", users);

export default function blockchain(){
    content.innerHTML = "HEJEJ";

    let logOutBtn = document.createElement("button");
    logOutBtn.id = "logOutBtn";
    logOutBtn.innerText = "Log out";
    content.appendChild(logOutBtn);

    logOutBtn.addEventListener("click", () => {
        content.innerHTML = "";
        logIn();
        localStorage.removeItem("userId");
    })
}


