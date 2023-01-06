**Context**: The job rule is that every project must follow a strict and specific folder structure. It must not contain extra files (like after effects autosave) and every file (e. g subs.txt - see createPreppedDirectory for folder structure) must be present and in the correct path location.
# archiver
Scripts created using Node.js to automate repetitive tasks and check for possible mistakes.

## checkImageSizes
Checks if the '_GFX' images exist and are in the correct folder location and if the size corresponds to the requirements.

## createArchivedProjects
Archives specified folder, removing unwanted files (e.g desktop.ini) and maintaining the structure.

## createPreppedDirectory
Creates a working directory structure for each project file in the specified location

**Input** directory contains:
```
Project1.1
Project1.2
```
**Output** (folder structure):
```
Project1.1 PREPPED - main working directory
   Images
       640x360
       1920x1080
   Subtitles
       subs.srt
       subs.txt
   assets
       Source Files
       json.json
Project1.2 PREPPED - main working directory
   Images
       640x360
       1920x1080
   Subtitles
       subs.srt
       subs.txt
   assets
       Source Files
       json.json
```
