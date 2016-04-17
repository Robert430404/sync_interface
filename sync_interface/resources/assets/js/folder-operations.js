
class folderOperations
{
    newFolder()
    {
        console.log('new folder');
    }

    getSelectedFolder()
    {
        var folderName = $(this).attr('data-folder-name');
        console.log(folderName);
    }
}
