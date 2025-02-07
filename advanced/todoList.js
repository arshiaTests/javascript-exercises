/**
 * Problem:
 * Write a program to manage a to-do list.
 * The program should support adding tasks, removing tasks, and displaying all tasks.
 *
 * Your task:
 * Implement the functions `addTask`, `removeTask`, and `showTasks` to manage the to-do list.
 *
 * Example:
 * addTask("Buy groceries") should add a new task.
 * removeTask("Buy groceries") should remove the task.
 * showTasks() should return a list of all current tasks.
 */

// Write your solution here

let todoList = ['learning', 'gym', 'uni']

function addTask(newTask) {

    if (typeof newTask == 'number') {
        console.log('this is number , not like task');
    } else {

        todoList.push(newTask)
    }
    console.log(todoList);


}

function removeTask(remove) {

    let indexOfTask = todoList.indexOf(remove)

    if (indexOfTask != -1) {

        todoList.splice(indexOfTask, 1)
    }

    console.log(todoList);
}

function showTasks() {

    console.log(todoList);


}


addTask('react learnning')
removeTask('gym')
showTasks()

module.exports = { addTask, removeTask, showTasks };