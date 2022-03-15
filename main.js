// Project --> CLI based file organizer 

// lets take a command first
let inputArr = process.argv.slice(2);
let command = inputArr[0];

// based on cmd we can call command specific functions
switch(command){
    case "tree":
        console.log("command is tree");
        break;
    case "organize":
        console.log("command is organize");
        break;
    case "help":
        console.log("command is help");
        break;
    default:
        console.log("command not found\nplease try again");
        break;
}