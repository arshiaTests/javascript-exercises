/**
 * Problem:
 * Write a simple user management system that allows adding and removing users,
 * and showing the list of users.
 *
 * Your task:
 * Implement the functions `addUser`, `removeUser`, and `showUsers` that
 * manage a list of users.
 *
 * Example:
 * addUser("Alice");
 * showUsers() should return ["Alice"].
 * removeUser("Alice");
 * showUsers() should return [].
 */

let userList = ['Alice', 'Bob', 'Charlie'];

function addUser(newUser) {
    if (typeof newUser === 'number') {
        console.log('This is a number, not a valid username!');
    } else {
        userList.push(newUser);
    }
    console.log(userList);
}

function removeUser(user) {
    let indexOfUser = userList.indexOf(user);

    if (indexOfUser !== -1) {
        userList.splice(indexOfUser, 1);
    } else {
        console.log('User not found!');
    }

    console.log(userList);
}

function showUsers() {
    console.log(userList);
}

addUser('David');
removeUser('Bob');
showUsers();

module.exports = { addUser, removeUser, showUsers };