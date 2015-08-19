///<reference path="references.ts" />
function params() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return Array.prototype.filter.call(args, function (param) {
        return param != null;
    });
}
exports.params = params;
