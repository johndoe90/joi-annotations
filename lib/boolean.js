var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var meta_1 = require('./meta');
var any_1 = require('./any');
var BooleanAnnotations = (function (_super) {
    __extends(BooleanAnnotations, _super);
    function BooleanAnnotations() {
        _super.apply(this, arguments);
        this._type = 'boolean';
    }
    BooleanAnnotations.prototype.bool = function () {
        return meta_1.Meta.addMetadata({
            type: this._type
        });
    };
    BooleanAnnotations.prototype.boolean = function () {
        return meta_1.Meta.addMetadata({
            type: this._type
        });
    };
    return BooleanAnnotations;
})(any_1.AnyAnnotations);
exports.BooleanAnnotations = BooleanAnnotations;
