import UserList from "./userList.js";
import User from "./user.js";
import saveNewMember from "./saveNewMember.js";
import logIn from "./logIn.js";
import blockchain from "./blockchain.js";

const content = document.getElementById("content");

if (localStorage.getItem("userId")){
    blockchain();// byt ut sen 
} else{
    logIn();
}



//console.log("KöR logIN")

// Koppla js-filerna, lösa LS 


   



