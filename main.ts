#! /usr/bin/env node
import inquirer  from "inquirer";
import chalk from "chalk";

let todo_List = [];
let conditions  = true;

console.log(chalk.blueBright.bold ("\n\tWElcome to my Todos_List_Application\n"));

while(conditions){
    let addTask= await inquirer.prompt([
        {
          name:"task",
          type:"input",
          message:"Enter Your New Task:"
        }
   ]);
todo_List.push(addTask.task);
console.log(`${addTask.task}Task added in Todos_List successfully`);

let addmoreTask = await inquirer.prompt([
      {
         name:"addmore",
         type:"confirm",
         message:"Do you want to addMore Task?",
        default:"false"
       }
]);
conditions = addmoreTask.addmore
}
console.log("Your updated Todos_List:" , todo_List);