///<reference path="references.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var meta_1 = require('./meta');
var any_1 = require('./any');
var NumberAnnotations = (function (_super) {
    __extends(NumberAnnotations, _super);
    function NumberAnnotations() {
        _super.apply(this, arguments);
        this._type = 'number';
    }
    NumberAnnotations.prototype.number = function () {
        return meta_1.Meta.addMetadata({
            type: this._type
        });
    };
    NumberAnnotations.prototype.min = function (limit) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'min',
            validatorParameters: [limit]
        });
    };
    NumberAnnotations.prototype.max = function (limit) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'max',
            validatorParameters: [limit]
        });
    };
    NumberAnnotations.prototype.greater = function (limit) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'greater',
            validatorParameters: [limit]
        });
    };
    NumberAnnotations.prototype.less = function (limit) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'less',
            validatorParameters: [limit]
        });
    };
    NumberAnnotations.prototype.integer = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'integer'
        });
    };
    NumberAnnotations.prototype.precision = function (limit) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'precision',
            validatorParameters: [limit]
        });
    };
    NumberAnnotations.prototype.multiple = function (base) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'multiple',
            validatorParameters: [base]
        });
    };
    NumberAnnotations.prototype.positive = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'positive'
        });
    };
    NumberAnnotations.prototype.negative = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'negative'
        });
    };
    return NumberAnnotations;
})(any_1.AnyAnnotations);
exports.NumberAnnotations = NumberAnnotations;
