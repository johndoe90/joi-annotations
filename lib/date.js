///<reference path="references.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var meta_1 = require('./meta');
var any_1 = require('./any');
var DateAnnotations = (function (_super) {
    __extends(DateAnnotations, _super);
    function DateAnnotations() {
        _super.apply(this, arguments);
        this._type = 'date';
    }
    DateAnnotations.prototype.date = function () {
        return meta_1.Meta.addMetadata({
            type: this._type
        });
    };
    DateAnnotations.prototype.min = function (date) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'min',
            validatorParameters: [date]
        });
    };
    DateAnnotations.prototype.max = function (date) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'max',
            validatorParameters: [date]
        });
    };
    DateAnnotations.prototype.format = function (format) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'format',
            validatorParameters: [format]
        });
    };
    DateAnnotations.prototype.iso = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'iso'
        });
    };
    return DateAnnotations;
})(any_1.AnyAnnotations);
exports.DateAnnotations = DateAnnotations;
