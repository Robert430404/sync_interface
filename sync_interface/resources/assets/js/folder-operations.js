
class FolderOperations
{
    newFolder()
    {
        console.log('new folder');
    }

    goHome()
    {
        $.get("http://localhost:8000/sync-folders", function(response){
            $('.directories').empty();
            $('.crumb-sub').remove();

            for(var directory in response)
            {
                $('.directories').append('<li class="directory item" data-folder-name="' + response[directory].path + '"><i class="fa fa-folder-o"></i>' + response[directory].name + '</li>')
            }
        });

        $.get("http://localhost:8000/sync-files", function(response){
            $('.files').empty();

            for(var directory in response)
            {
                $('.files').append('<li class="file item" data-file-name="' + response[directory].path + '" data-file-type="' + response[directory].type + '"><i class="fa fa-file-o"></i>' + response[directory].name + '</li>')
            }
        });
    }

    getSelectedFolder(folder)
    {
        var folderName = folder.attr('data-folder-name');

        $.get("http://localhost:8000/sync-folders/" + folderName, function(response){
            $('.directories').empty();
            $('.crumb-list').append('<li class="crumb-sub crumb" data-folder-name="' + folderName + '"><i class="fa fa-folder-o"></i> <span class="label">' + folderName + '</span></li>');

            for(var directory in response)
            {
                $('.directories').append('<li class="directory item" data-folder-name="' + response[directory].path + '"><i class="fa fa-folder-o"></i>' + response[directory].name + '</li>')
            }
        });

        $.get("http://localhost:8000/sync-files/" + folderName, function(response){
            $('.files').empty();

            for(var directory in response)
            {
                $('.files').append('<li class="file item" data-file-name="' + response[directory].path + '" data-file-type="' + response[directory].type + '"><i class="fa fa-file-o"></i>' + response[directory].name + '</li>')
            }
        });
    }
}
