#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.cyanBright("Welcome To My Todos List App"));

let todos: string[] = [];
let condition = true;

async function RunTodo() {
  while (condition) {
    let operation = await inquirer.prompt([
      {
        name: "todo",
        type: "list",
        message: chalk.magentaBright(
          "Select Any One Of The Following Operator"
        ),
        choices: ["AddTask", "ShowTask", "DeleteTask", "Exit"],
      },
    ]);
    if (operation.todo === "AddTask") {
      let add = await inquirer.prompt([
        {
          name: "addtodo",
          type: "input",
          message: chalk.redBright("What Do You Want To Add In Your Todo"),
        },
      ]);
      todos.push(add.addtodo);
    } else if (operation.todo === "ShowTask") {
      console.log(chalk.greenBright(`${todos}`)); //if you only show list item without in an array then use this console
      // console.log(todos)//if you show the list items in an array then use this console
    } else if (operation.todo === "DeleteTask") {
      let Delete = await inquirer.prompt([
        {
          name: "delete",
          type: "list",
          message: chalk.redBright("Select The Task You Want To Delete"),
          choices: todos.map((item) => item),
        },
      ]);
      let newtodos: any[] = todos.filter((val) => val !== Delete.delete);
      todos = [...newtodos];
      console.log(`${todos}`);
    } else if (operation.todo === "Exit") {
      console.log(chalk.yellowBright("Thank You For Using This Todo App"));
      condition = false;
    } else {
      console.log(chalk.yellowBright("Please Select Any One Operator"));
    }
  }
}
RunTodo();
