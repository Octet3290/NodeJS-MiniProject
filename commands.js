const fs = require('fs');


const add = (title, body) => {

    let titleList = [];
    
    try{
        titleList = JSON.parse(fs.readFileSync("titleList.json"));
    }
    catch (e){
       // console.log(e);
    }
   


let index = titleList.findIndex((x)=>x.title === title);

if(index===-1){
    titleList.push({title, body});
    console.log(titleList)
}
else{
    titleList[index].body+=price
}
fs.writeFileSync("titleList.json", JSON.stringify(titleList));
}

const remove = (title)=> {
     
    let titleList =[];
    try{
        titleList = JSON.parse(fs.readFileSync("titleList.json"));
    }
    catch (e){
       // console.log(e);
    }

    const filteredList = titleList.filter((x)=>x.title !== title);
    console.log(filteredList)
    fs.writeFileSync("titleList.json", JSON.stringify(filteredList));
}

const list = ()=> {
    
    let titleList = [];
    try{
        titleList = JSON.parse(fs.readFileSync("titleList.json"));
    }
    catch (e){
       // console.log(e);
    }

    console.log(titleList);

}

const read = (title) =>{

    let titleList = [];

    try{
        titleList = JSON.parse(fs.readFileSync("titleList.json"));
    }
    catch (e){
       // console.log(e);
    }
    let index = titleList.findIndex((x)=>x.title === title);

    if(index !== -1){
        console.log(`title ${title} with body ${titleList[index].body}`)
    }
}



module.exports = {
    add, 
    remove,
    list,
    read
};