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
    }]);

    return FileOperations;
}();

var folderOperations = function () {
    function folderOperations() {
        _classCallCheck(this, folderOperations);
    }

    _createClass(folderOperations, [{
        key: 'newFolder',
        value: function newFolder() {
            console.log('new folder');
        }
    }]);

    return folderOperations;
}();

function init() {
    var folderOperations = new FolderOperations();
    var fileOperations = new FileOperations();
}
//# sourceMappingURL=all.js.map
