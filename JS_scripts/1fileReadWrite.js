// Below script will fetch data/files from particular directory and write those data/files to another file:
// say /dirImages/1.png 2.png....100.png files,so we've 100 images and wanted to fetch & write only name of file in separate file say image.txt
//Line No:-10 & 14 need to be changed as per your path
// save this nodeJS file and run: >node fileName.js
// ----------------------------------------------------------------------------------------------------------------------------------------- //

//import the 'file System' & 'path'
const fs = require('fs');
const path = require('path');

// join the directory with file name compatible in both Unix & windows env.
const readFrom = '../../Projects/FullStack_Projects/Food_delivery_assets/frontend_assets' //paste your file from you wanted to read/fetch from
const dirName = path.join(__dirname, readFrom);

//files to be written
const writeTo = '../../Projects/FullStack_Projects/Food_delivery_assets/outputFile/allFileNames.txt'; //where you need to write file to
const outputFiles = path.join(__dirname, writeTo);

//read & write the file
const readWriteFile = ()=>{
    try{

        return new Promise((resolve, reject)=>{
            //read file
            fs.readdir(dirName, (err, files)=>{  //'files' consists all .png file names in array
                if(err){console.error("ERROR=> ",err.message)};
                resolve(files)  
            })
        })
        .then(allFiles=>{
            console.log(allFiles);
            const filesContent = allFiles.join(`\n`)
            
            fs.writeFile(outputFiles, filesContent, (err)=>{
                if(err){console.error(`ERROR=> ${err}`); return;};
                console.log("Output File: ",outputFiles);
                return outputFiles;

            })
        })
        .catch(err=>console.error(err.message))
    }
    catch(err){
        console.log(`ERROR: ${err.message}`)
    }
}

readWriteFile();