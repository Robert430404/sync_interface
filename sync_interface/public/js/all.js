'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileOperations = function () {
    function FileOperations() {
        _classCallCheck(this, FileOperations);
    }

    _createClass(FileOperations, [{
        key: 'newFile',
        value: function newFile() {
            console.log('new file');
        }
    }, {
        key: 'getSelectedFile',
        value: function getSelectedFile(file) {
            var fileName = file.attr('data-file-name');
            var fileType = file.attr('data-file-type');

            $('.file-contents').empty();

            if (fileType.indexOf('image') !== -1) {
                $('.file-contents').append('<div class="image-container"></div>');
                $('.file-contents .image-container').append('<h2 class="caption">' + fileName + '</h2>');
                $('.file-contents .image-container').append('<img src="http://localhost:8000/sync-files/' + fileName + '" />');
            } else {
                $('.file-contents').append('<div class="message-container"></div>');
                $('.file-contents .message-container').append('<h2 class="Message">File Type Not Supported</h2>');
            }
        }
    }]);

    return FileOperations;
}();

var FolderOperations = function () {
    function FolderOperations() {
        _classCallCheck(this, FolderOperations);
    }

    _createClass(FolderOperations, [{
        key: 'newFolder',
        value: function newFolder() {
            console.log('new folder');
        }
    }, {
        key: 'goHome',
        value: function goHome() {
            $.get("http://localhost:8000/sync-folders", function (response) {
                $('.directories').empty();

                for (var directory in response) {
                    $('.directories').append('<li class="directory item" data-folder-name="' + response[directory].path + '"><i class="fa fa-folder-o"></i>' + response[directory].name + '</li>');
                }
            });

            $.get("http://localhost:8000/sync-files", function (response) {
                $('.files').empty();

                for (var directory in response) {
                    $('.files').append('<li class="file item" data-file-name="' + response[directory].path + '" data-file-type="' + response[directory].type + '"><i class="fa fa-file-o"></i>' + response[directory].name + '</li>');
                }
            });
        }
    }, {
        key: 'getSelectedFolder',
        value: function getSelectedFolder(folder) {
            var folderName = folder.attr('data-folder-name');

            $.get("http://localhost:8000/sync-folders/" + folderName, function (response) {
                $('.directories').empty();

                for (var directory in response) {
                    $('.directories').append('<li class="directory item" data-folder-name="' + response[directory].path + '"><i class="fa fa-folder-o"></i>' + response[directory].name + '</li>');
                }
            });

            $.get("http://localhost:8000/sync-files/" + folderName, function (response) {
                $('.files').empty();

                for (var directory in response) {
                    $('.files').append('<li class="file item" data-file-name="' + response[directory].path + '" data-file-type="' + response[directory].type + '"><i class="fa fa-file-o"></i>' + response[directory].name + '</li>');
                }
            });
        }
    }]);

    return FolderOperations;
}();

window.onload = function init() {
    var folderOperations = new FolderOperations();
    var fileOperations = new FileOperations();

    $('body').on('click', '.directory', function () {
        folderOperations.getSelectedFolder($(this));
    });

    $('body').on('click', '.crumb-home', function () {
        folderOperations.goHome($(this));
    });

    $('body').on('click', '.file', function () {
        fileOperations.getSelectedFile($(this));
    });
};
//# sourceMappingURL=all.js.map
