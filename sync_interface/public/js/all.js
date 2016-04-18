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

            console.log(fileName);
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
        key: 'getSelectedFolder',
        value: function getSelectedFolder(folder) {
            var folderName = folder.attr('data-folder-name');

            console.log(folderName);
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

    $('body').on('click', '.file', function () {
        fileOperations.getSelectedFile($(this));
    });
};
//# sourceMappingURL=all.js.map
