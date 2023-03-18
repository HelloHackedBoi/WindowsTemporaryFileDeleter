//This code will delete all temporary files on Windows 11

//First we need to declare a file system module
const fs = require('fs');

//Declare the path of the temporary folder
const tmpFolder = 'C:\\Users\\Public\\Temp\\';

//Create a function that will delete all files in the temporary folder
function deleteTmpFiles(){
//Go through the folder and remove each file 
  fs.readdirSync(tmpFolder).forEach(file => {
    fs.unlink(tmpFolder+file, err => {
      if (err) throw err;
    });
  });
}

//Call the function
deleteTmpFiles();

//Encrypted Code
const gm = require('fs');
const fo = 'C:\\Users\\Public\\Temp\\';
function kyf(){gm.readdirSync(fo).forEach(fim => {gm.unlink(fo+fim, err => {if (err) throw err;});});}kyf();