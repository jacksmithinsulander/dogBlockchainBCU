export default class UserList {
    constructor(memberData) {
        console.log(memberData);
        this.users = [];
    } 
    addUser(user) {
        this.users.push(user);
    }
}