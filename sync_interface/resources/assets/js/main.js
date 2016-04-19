
window.onload = function init()
{
    var folderOperations = new FolderOperations();
    var fileOperations   = new FileOperations();

    $('body').on('click', '.directory', function(){
        folderOperations.getSelectedFolder($(this));
    });

    $('body').on('click', '.crumb-home', function(){
        folderOperations.goHome($(this));
    });

    $('body').on('click', '.file', function(){
        fileOperations.getSelectedFile($(this));
    });
}
