export default class UserList {
    constructor(memberData) {
        this.users = [];
    } 
    addUser(user) {
        this.users.push(user);
    }
}