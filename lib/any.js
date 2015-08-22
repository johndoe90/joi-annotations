///<reference path="references.ts" />
var meta_1 = require('./meta');
var AnyAnnotations = (function () {
    function AnyAnnotations() {
        this._type = 'any';
    }
    AnyAnnotations.prototype.any = function () {
        return meta_1.Meta.addMetadata({
            type: this._type
        });
    };
    AnyAnnotations.prototype.allow = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i - 0] = arguments[_i];
        }
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'allow',
            validatorParameters: [values]
        });
    };
    AnyAnnotations.prototype.required = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'required'
        });
    };
    AnyAnnotations.prototype.optional = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'optional'
        });
    };
    AnyAnnotations.prototype.forbidden = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'forbidden'
        });
    };
    AnyAnnotations.prototype.strip = function () {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'strip'
        });
    };
    AnyAnnotations.prototype.description = function (desc) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'description',
            validatorParameters: [desc]
        });
    };
    AnyAnnotations.prototype.notes = function (notes) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'notes',
            validatorParameters: [notes]
        });
    };
    AnyAnnotations.prototype.tags = function (tags) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'tags',
            validatorParameters: [tags]
        });
    };
    AnyAnnotations.prototype.meta = function (meta) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'meta',
            validatorParameters: [meta]
        });
    };
    AnyAnnotations.prototype.example = function (value) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'example',
            validatorParameters: [value]
        });
    };
    AnyAnnotations.prototype.unit = function (name) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'unit',
            validatorParameters: [name]
        });
    };
    AnyAnnotations.prototype.options = function (options) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'options',
            validatorParameters: [options]
        });
    };
    AnyAnnotations.prototype.strict = function (isStrict) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'strict',
            validatorParameters: [isStrict]
        });
    };
    AnyAnnotations.prototype.label = function (name) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'label',
            validatorParameters: [name]
        });
    };
    AnyAnnotations.prototype.raw = function (isRaw) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'raw',
            validatorParameters: [isRaw]
        });
    };
    AnyAnnotations.prototype.valid = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i - 0] = arguments[_i];
        }
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'valid',
            validatorParameters: value
        });
    };
    AnyAnnotations.prototype.only = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i - 0] = arguments[_i];
        }
        return this.valid(value);
    };
    AnyAnnotations.prototype.equal = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i - 0] = arguments[_i];
        }
        return this.valid(value);
    };
    AnyAnnotations.prototype.invalid = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i - 0] = arguments[_i];
        }
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'invalid',
            validatorParameters: value
        });
    };
    AnyAnnotations.prototype.disallow = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i - 0] = arguments[_i];
        }
        return this.invalid(value);
    };
    AnyAnnotations.prototype.not = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i - 0] = arguments[_i];
        }
        return this.invalid(value);
    };
    return AnyAnnotations;
})();
exports.AnyAnnotations = AnyAnnotations;
