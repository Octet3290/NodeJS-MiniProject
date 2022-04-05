const { read } = require("fs");
const yargs = require("yargs");
const commands = require('./commands');

let command = yargs.argv._[0];
let title = yargs.argv.title;
let body = yargs.argv.body;

if (command === "add"){

    if(title && body){
        commands.add(title, body);
    }

}
else if(command === "remove"){
    if(title){
        commands.remove(title);
    }

}
else if(command === "list"){
    
    commands.list();
}
else if(command === "read"){
    if(title){
        commands.read(title);
    }
} 
else{
    console.log("This doesn't make any sense");
}        