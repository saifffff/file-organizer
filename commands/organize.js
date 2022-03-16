// path module
const path  = require("path");
// fs module
const fs = require("fs");

let types = {
    media: ["mp4","mkv","mp3"],
    archives: ["zip","rar","7z","tar","iso"],
    documents: ["docx","doc","pdf","xlsx","xls","odt","ods","epub","txt"],
    apps: ["exe","dmg","pkg","deb"],
    images: ["jpg","png","jpeg"]
}

// organise functions
 function organize(srcPath){
     if(srcPath == undefined){
         console.log(srcPath); // in empty condition it will pass undefined
         srcPath = process.cwd(); // if undefined it takes path as cwd(current working directory)
         console.log(srcPath);
     }else{
         console.log(srcPath);
     }

     let organizedFiles = path.join(srcPath,"organized_files");
    //  console.log(organizedFiles);

     //fs.mkdirSync() --> creates a directory syncronously to the specified path 
        if(fs.existsSync(organizedFiles)){
        console.log("folder exists");
        }else{
            fs.mkdirSync(organizedFiles);
        }

        // scan the entire srcPath 
        // so to read all the files in a directory we use the fs module method
        // fs.readdirSync("path"); returns array of all files 
        let allFiles = fs.readdirSync(srcPath);
        // console.log(allFiles);
        //we only need extensions for sorting on basis of file type
        for(let i = 0; i < allFiles.length; i++){
            // let fileName = allFiles[i];
            // let tempfilenamearray = fileName.split(".");
            // let ext = tempfilenamearray[1];
            let ext = path.extname(allFiles[i]); // when we get ext name using path module function we do not have to hadle for folder(undefined)
            // if(ext!=undefined){
            // console.log(ext);
            // }
            console.log(ext);
        }


    }

    let srcPath = "C:\\Users\\angry\\OneDrive\\Desktop\\fjpdev\\learnNode\\fileOrganizer\\downloads";

  organize(srcPath);