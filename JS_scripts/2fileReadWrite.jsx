// readdir(path.join(__dirname,my_file_path), (err,file)=>{})
// writeFile(path.join(__dirname, ../output.txt, fileContent ,(err)=>{}))
//use: path.extname(file_name_to_be_filtered)=== '.png' to check the file extension  & fs.mkdirSync(<target_dirName>, {recursive:true}) to create new directory & fs.existsSync()
//{recursive: true} is for, if neseted dir like /parentDir/childDir/1.txt, if not provided "recursive" then we might get 'err'
    

const fs = require('fs');
const path = require('path');

//main source & target files
const readFrom = '../../Projects/FullStack_Projects/Food_delivery_assets/frontend_assets/';
const writeTo = '../../Projects/FullStack_Projects/Food_delivery_webApp/public/menuImages';

//if Target dir not exisiting:
if(!fs.existsSync(writeTo)){
    fs.mkdirSync(writeTo, {recursive: true})
}

//add both read/write paths to exisitng path
const readFromPath = path.join(__dirname, readFrom);
const writeToPath = path.join(__dirname, writeTo);

//read dir
fs.readdir(readFromPath, (err,files)=>{
    if(err)throw err;
    // console.log("All-Files", files)

    //filter-out the menu_1...8.png files
    const regEx = /^menu\_[1-8]\.png$/;
    files.filter(file=>regEx.test(file)).forEach(file=>{
        // console.log(file)

        //add filtered files to main path
        const sourceFiles = path.join(readFromPath, file);
        const targetFiles = path.join(writeToPath, file);
        // console.log(targetFiles);

        //now read the files: files need to be in target dir not dir
        fs.readFile(sourceFiles, (err, menuFiles)=>{
            if(err)throw err;
            
            //write files to target dir
            fs.writeFile(targetFiles, menuFiles, (err)=>{
                if(err)throw err;
                console.log("Files write completed: ", menuFiles);
            })
        })
    })
})