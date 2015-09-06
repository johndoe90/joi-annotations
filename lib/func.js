var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var meta_1 = require('./meta');
var any_1 = require('./any');
var FuncAnnotations = (function (_super) {
    __extends(FuncAnnotations, _super);
    function FuncAnnotations() {
        _super.apply(this, arguments);
        this._type = 'func';
    }
    FuncAnnotations.prototype.func = function () {
        return meta_1.Meta.addMetadata({
            type: this._type
        });
    };
    return FuncAnnotations;
})(any_1.AnyAnnotations);
exports.FuncAnnotations = FuncAnnotations;
