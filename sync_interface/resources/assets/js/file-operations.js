
class FileOperations
{
    newFile()
    {
        console.log('new file');
    }

    getSelectedFile(file)
    {
        var fileName = file.attr('data-file-name');
        var fileType = file.attr('data-file-name');
        // http://localhost:8000/sync-files/1455559504226.jpg

        if(fileType.indexOf('image') !== '-1')
        {
            
        }
    }
}
