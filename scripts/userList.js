export default class UserList {
    constructor(memberData) {
        console.log(memberData);
        this.users = []; // Remake user objects // return empty array if member data is empty
    }
    // its an object that holds an array that contains objects. 
    addUser(user) {
        this.users.push(user);
        //user.addToLs();
    }

    // Remake users method
}