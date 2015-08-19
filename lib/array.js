///<reference path="references.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var meta_1 = require('./meta');
var any_1 = require('./any');
var ArrayAnnotations = (function (_super) {
    __extends(ArrayAnnotations, _super);
    function ArrayAnnotations() {
        _super.apply(this, arguments);
        this._type = 'array';
    }
    ArrayAnnotations.prototype.array = function () {
        return meta_1.Meta.addMetadata({
            type: this._type
        });
    };
    ArrayAnnotations.prototype.sparse = function (enabled) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'sparse',
            validatorParameters: [enabled]
        });
    };
    ArrayAnnotations.prototype.single = function (enabled) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'single',
            validatorParameters: [enabled]
        });
    };
    ArrayAnnotations.prototype.items = function () {
        var types = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            types[_i - 0] = arguments[_i];
        }
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'items',
            validatorParameters: types.slice()
        });
    };
    ArrayAnnotations.prototype.min = function (limit) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'min',
            validatorParameters: [limit]
        });
    };
    ArrayAnnotations.prototype.max = function (limit) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'max',
            validatorParameters: [limit]
        });
    };
    ArrayAnnotations.prototype.length = function (limit) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'length',
            validatorParameters: [limit]
        });
    };
    ArrayAnnotations.prototype.unique = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'unique',
        });
    };
    return ArrayAnnotations;
})(any_1.AnyAnnotations);
exports.ArrayAnnotations = ArrayAnnotations;
