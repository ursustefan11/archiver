/*

node.js required
Launch using 'node checkImageSizes.js'

*/

let parent = ""; //path to dir parent
let pathToDir = ""; //dir name without 'PREPPED'

var fs = require("fs");
var sizeOf = require("image-size");

let errMsg = [];
let prepped = " PREPPED";
let input_folder = parent + pathToDir + prepped;
let folderStructure = [
  "/assets",
  "/assets/Source Files",
  "/assets/json.json",
  "/Images",
  "/Images/1920x1080",
  "/Images/640x360",
  "/Images/gfx.txt",
  "/Subtitles",
  "/Subtitles/subs.srt",
  "/Subtitles/subs.txt",
];

checkImageSize();

if (errMsg.length !== 0) {
  console.log(errMsg.join("/n"));
} else {
  console.log("Correct image size");
}

function checkImageSize() {

  let checkImageSmall = fs.readdirSync(input_folder + folderStructure[5]);
  checkImageSmall = checkImageSmall.filter(el => el != 'desktop.ini');
  let checkImageBig = fs.readdirSync(input_folder + folderStructure[4]);
  checkImageBig = checkImageBig.filter(el => el != 'desktop.ini');

  for (var p = 0; p < checkImageSmall.length; p++) {
    let pathToImages = input_folder + folderStructure[5] + "/" + checkImageSmall[p];
    let dimensions = sizeOf(pathToImages);

    if (Math.max(dimensions.width, dimensions.height) < 1640) {
      errMsg.push(input_folder + folderStructure[5] + "/" + checkImageSmall[p] + " has " + Math.max(dimensions.width, dimensions.height) + "px. Incorrect size" + "\n");
    }
  }
  for (var l = 0; l < checkImageBig.length; l++) {
    let pathToImages = input_folder + folderStructure[4] + "/" + checkImageSmall[l];
    let dimensions = sizeOf(pathToImages);

    if (Math.max(dimensions.width, dimensions.height) < 1920) {
      errMsg.push(input_folder + folderStructure[4] + "/" + checkImageSmall[l] + " has " + Math.max(dimensions.width, dimensions.height) + "px. Incorrect size" + "\n");
    }
  }

  return errMsg;
}