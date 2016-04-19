
class FileOperations
{
    newFile()
    {
        console.log('new file');
    }

    getSelectedFile(file)
    {
        var fileName = file.attr('data-file-name');
        var fileType = file.attr('data-file-type');

        $('.file-contents').empty();

        console.log(fileType);

        if(fileType.indexOf('image') !== -1)
        {
            $('.file-contents').append('<div class="image-container"></div>');
            $('.file-contents .image-container').append('<h2 class="caption">' + fileName + '</h2>');
            $('.file-contents .image-container').append('<img src="http://localhost:8000/sync-files/' + fileName + '" />');
        }
        if(fileType.indexOf('video') !== -1)
        {
            $('.file-contents').append('<div class="video-container"></div>');
            $('.file-contents .video-container').append('<h2 class="caption">' + fileName + '</h2>');
            $('.file-contents .video-container').append('<video controls src="http://localhost:8000/sync-files/' + fileName + '"></video>');
        }
        else
        {
            $('.file-contents').append('<div class="message-container"></div>');
            $('.file-contents .message-container').append('<h2 class="Message">File Type Not Supported</h2>');
        }
    }
}
