import UserList from "./userList.js";
import User from "./user.js";
import saveNewMember from "./saveNewMember.js";
import logIn from "./logIn.js";
import blockchain from "./blockchain.js";

const content = document.getElementById("content");

/* let users = new UserList();
console.log("userList", users); */
if (!localStorage.getItem("users")) {
    let users = new UserList();
    localStorage.setItem("users", JSON.stringify( users));
    console.log("we have ls");
}
else {
    console.log("ls already exists");
}

if (localStorage.getItem("userId")){
    blockchain();// byt ut sida/funktion sen 
} else{
    logIn();
}



//console.log("KöR logIN")

// Koppla js-filerna, lösa LS 


   



