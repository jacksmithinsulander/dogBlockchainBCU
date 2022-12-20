import logIn from "./logIn.js";
import UserList from "./userList.js";
import User from "./user.js";

let users = new UserList();
//console.log("userList", users);

export default function blockchainView(){  //blockchain() bytas mot ...

    let imgtwo = document.createElement("img");
    imgtwo.src = "pexels-gilberto-reyes-825947.jpg";
    imgtwo.id = "pitbull";
    content.appendChild(imgtwo);

    document.body.style.backgroundColor = "#f5f5f5";

    let logOutBtn = document.createElement("button"); //logout btn kvar
    logOutBtn.id = "logOutBtn";
    logOutBtn.innerText = "Log out";
    document.body.appendChild(logOutBtn);

    logOutBtn.addEventListener("click", () => {
        content.innerHTML = "";
        logIn();
        localStorage.removeItem("userId");
        document.body.style.backgroundColor = "#cccdcf";
        logOutBtn.remove();
    })
}


