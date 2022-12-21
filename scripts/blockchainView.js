import logIn from "./logIn.js";
import UserList from "./userList.js";
import User from "./user.js";

let users = new UserList();

export default function blockchainView() {
    let imgtwo = document.createElement("img");
    imgtwo.src = "pexels-gilberto-reyes-825947.jpg";
    imgtwo.id = "pitbull";
    content.appendChild(imgtwo);
    document.body.style.backgroundColor = "#f5f5f5";
    let logOutBtn = document.createElement("button");
    logOutBtn.id = "logOutBtn";
    logOutBtn.innerText = "Log out";
    document.body.appendChild(logOutBtn);
    logOutBtn.addEventListener("click", () => {
        content.innerHTML = "";
        header.innerHTML = "";
        logIn();
        localStorage.removeItem("userId");
        document.body.style.backgroundColor = "#cccdcf";
        logOutBtn.remove();
    })
}
