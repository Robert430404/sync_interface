
class FolderOperations
{
    newFolder()
    {
        console.log('new folder');
    }

    getSelectedFolder(folder)
    {
        var folderName = folder.attr('data-folder-name');

        console.log(folderName);
    }
}
