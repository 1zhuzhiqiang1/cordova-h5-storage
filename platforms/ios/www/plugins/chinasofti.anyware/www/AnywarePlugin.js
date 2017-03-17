cordova.define("chinasofti.anyware.AnywarePlugin", function (require, exports, module) {
    var exec = require('cordova/exec');

    exports.coolMethod = function (arg0, success, error) {
        exec(success, error, "AnywarePlugin", "coolMethod", [arg0]);
    };

    // 打开新界面
    exports.openNewPage = function (arg0, success, error) {
        exec(success, error, "AnywarePlugin", "openNewPage", [arg0]);
    };

    // pop ViewController
    exports.popVC = function (arg0, success, error) {
        exec(success, error, "AnywarePlugin", "popVC", [arg0]);
    };

});
