var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var meta_1 = require('./meta');
var any_1 = require('./any');
var BinaryAnnotations = (function (_super) {
    __extends(BinaryAnnotations, _super);
    function BinaryAnnotations() {
        _super.apply(this, arguments);
        this._type = 'binary';
    }
    BinaryAnnotations.prototype.binary = function () {
        return meta_1.Meta.addMetadata({
            type: this._type
        });
    };
    BinaryAnnotations.prototype.min = function (limit) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'min',
            validatorParameters: [limit]
        });
    };
    BinaryAnnotations.prototype.max = function (limit) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'max',
            validatorParameters: [limit]
        });
    };
    BinaryAnnotations.prototype.length = function (limit) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'length',
            validatorParameters: [limit]
        });
    };
    BinaryAnnotations.prototype.encoding = function (encoding) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'encoding',
            validatorParameters: [encoding]
        });
    };
    return BinaryAnnotations;
})(any_1.AnyAnnotations);
exports.BinaryAnnotations = BinaryAnnotations;
