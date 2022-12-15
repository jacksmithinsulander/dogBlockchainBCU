import UserList from "./userList.js";
import User from "./user.js";
import saveNewMember from "./saveNewMember.js";
import logIn from "./logIn.js";
import blockchain from "./blockchain.js";

const contentLogIn = document.getElementById("contentLogIn");

if (localStorage.getItem("userId")){
    blockchain();
} else{
    logIn();
}




console.log("KöR logIN")

// Koppla js-filerna, lösa LS 


   



