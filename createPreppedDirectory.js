/*

node.js required
Launch using 'node createPreppedDirectory.js'

*/

let currentPath = ""; //path to dir parent
let pathToFiles = ""; //dir name

let fs = require("fs");

if (fs.existsSync(currentPath)) {
    var pathToDir = currentPath;
} else {
    console.log('Path incorrect.');
}

let prepped = " PREPPED";
let readMainFolder = fs.readdirSync(pathToDir);
let readFilesFolder = fs.readdirSync(pathToDir + pathToFiles);

createPreppedDirectory();

function createPreppedDirectory() {
    for (var i = 0; i < readMainFolder.length; i++) {
        if (readMainFolder.length != 0 && readMainFolder[i] == pathToFiles) {
            let currentProject = readMainFolder[i + 1];
            if (currentProject == pathToFiles + prepped) {
                console.log("This project already has PREPPED Folder");
            } else {
                fs.mkdirSync(pathToDir + pathToFiles + prepped);
                console.log("PREPPED Folder Created");
                console.log("\n" + "Current folder list:" + "\n");
                createFolderForEach();
            }
        }
    }
}

function createFolderForEach() {
    for (var j = 0; j < readFilesFolder.length; j++) {
        let currentFolderName = readFilesFolder[j].slice(0, -4);
        let pathToCurrentFolders = pathToDir + pathToFiles + prepped + "/" + currentFolderName;
        console.log(currentFolderName);
        fs.mkdirSync(pathToCurrentFolders + prepped);
    }
    createFolderStructure();
}

function createFolderStructure() {
    let pathToPreppedFolders = fs.readdirSync(pathToDir + pathToFiles + prepped);

    for (var k = 0; k < pathToPreppedFolders.length; k++) {
        let pathToCreateStructure = fs.readdirSync(pathToDir + pathToFiles + prepped + "/" + pathToPreppedFolders[k]);
        let path = pathToDir + pathToFiles + prepped + "/" + pathToPreppedFolders[k];

        if (pathToCreateStructure.length == 0) {
            fs.mkdirSync(path + "/Images");
            fs.mkdirSync(path + "/Images/640x360");
            fs.mkdirSync(path + "/Images/1920x1080");
            fs.createWriteStream(path + "/Images/images.txt");

            fs.mkdirSync(path + "/Subtitles");
            fs.createWriteStream(path + "/Subtitles/subs.srt");
            fs.createWriteStream(path + "/Subtitles/subs.txt");

            fs.mkdirSync(path + "/assets");
            fs.mkdirSync(path + "/assets/Source Files");
            fs.createWriteStream(path + "/assets/json.json");
        }
    }
}
