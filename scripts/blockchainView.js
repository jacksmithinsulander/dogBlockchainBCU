import logIn from "./logIn.js";
import UserList from "./userList.js";

let users = new UserList();

let header = document.querySelector('#header'); // select the header element
let logOutBtn = document.createElement("button");
logOutBtn.id = "logOutBtn";
logOutBtn.innerText = "Log out";

export default function blockchainView() {
    let imgtwo = document.createElement("img");
    imgtwo.src = "pexels-gilberto-reyes-825947.jpg";
    imgtwo.id = "pitbull";
    content.appendChild(imgtwo);
    document.body.style.backgroundColor = "#f5f5f5";
    header.appendChild(logOutBtn); // append the logOutBtn element to the header element
    logOutBtn.addEventListener("click", () => {
        content.innerHTML = "";
        header.innerHTML = "";
        logIn();
        localStorage.removeItem("userId");
        document.body.style.backgroundColor = "#cccdcf";
        document.body.removeChild(logOutBtn); // remove the logOutBtn element from the document body
        header.removeChild(returnBtn);
    })
}
