/*

node.js required
Launch using 'node createArchivedProjects.js'

*/

const fs = require("fs");
const archiver = require("archiver");
var path = require('path');

let parent = ""; //path to dir parent
let pathToFiles = ""; //dir name

let prepped = " PREPPED";
let readFilesFolder = fs.readdirSync(parent + pathToFiles + prepped);
readFilesFolder = readFilesFolder.filter(el => el != 'desktop.ini');

folderToArchive();

function folderToArchive() {
  const output = fs.createWriteStream(parent + pathToFiles + prepped + ".zip");
  let archive = archiver("zip", { zlib: { level: 9 } });
  output.on('close', function () {
    console.log(pathToFiles + prepped + ".zip has been created");
  })
  archive.pipe(output);
  for (var i = 0; i < readFilesFolder.length; i++) {
    var dir = parent + pathToFiles + prepped + "/" + readFilesFolder[i];
    archive.directory(dir, path.basename(dir), false);
  }
  archive.finalize();
}