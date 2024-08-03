// readdir(path.join(__dirname,my_file_path), (err,file)=>{})
// writeFile(path.join(__dirname, ../output.txt, (err)=>{}))
//use: path.extname(file_name_to_be_filtered)=== '.png' to check the file extension  & fs.mkdirSync(<target_dirName>, {recursive:true}) to create new directory & fs.existsSync()
//{recursive: true} is for, if neseted dir like /parentDir/childDir/1.txt, if not provided "recursive" then we might get 'err'
    
const fs = require('fs');
const path = require('path');

fileReadFrom = '../../Projects/FullStack_Projects/Food_delivery_webApp/src/assets';
fileWriteTo = '../../Projects/FullStack_Projects/Food_delivery_webApp/public/menuImages2/';

const sourceDir = path.join(__dirname, fileReadFrom);
const targetDir = path.join(__dirname, fileWriteTo);

//check whether target file exist or not
if(!fs.existsSync(targetDir)){ fs.mkdirSync(targetDir, {recursive: true}) }

//Read directory
fs.readdir(sourceDir, (err, files)=>{
    if(err){console.error(`ERROR-readDir: ${err.message}`)};

    //find the .png files & seggrigate them
    files.filter(elem=>elem.includes()).forEach(file=>{
        //now add these files one-by-one to source dir
        const sourceFilePath = path.join(sourceDir, file);
        const targetFilePath = path.join(targetDir, file);

        //now read the files from the source file path
        fs.readFile(sourceFilePath, (err,data)=>{
            if(err){console.error(`ERROR-READFILE: ${err.message}`)}

            //now wwrite the files to target path
            fs.writeFile(targetFilePath, data, (err)=>{
                if(err){console.error(`ERROR-In-Write: ${err.message}`)}
                console.log(data);
            })
        })
    })



})