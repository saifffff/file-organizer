// Project --> CLI based file organizer 

// Imports
let helpFunc = require("./commands/help");

// lets take a command first

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

// based on cmd we can call command specific functions
switch(command){
    case "tree":
        console.log("command is tree on path - "+path);
        break;
    case "organize":
        console.log("command is organize on path - "+path);
        break;
    case "help":
        helpFunc.help();
        break;
    default:
        console.log("command not found\nplease try again");
        break;
}