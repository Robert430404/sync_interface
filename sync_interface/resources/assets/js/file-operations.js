
class FileOperations
{
    newFile()
    {
        console.log('new file');
    }

    getSelectedFile(file)
    {
        var fileName = file.attr('data-file-name');

        console.log(fileName);
    }
}
