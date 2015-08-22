var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var meta_1 = require('./meta');
var util_1 = require('./util');
var any_1 = require('./any');
var ObjectAnnotations = (function (_super) {
    __extends(ObjectAnnotations, _super);
    function ObjectAnnotations() {
        _super.apply(this, arguments);
        this._type = 'object';
    }
    ObjectAnnotations.prototype.object = function () {
        return meta_1.Meta.addMetadata({
            type: this._type
        });
    };
    ObjectAnnotations.prototype.keys = function (schema) {
        return meta_1.Meta.addMetadata({
            priority: 2,
            type: this._type,
            validatorName: 'keys',
            validatorParameters: util_1.params(schema)
        });
    };
    ObjectAnnotations.prototype.min = function (limit) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'min',
            validatorParameters: [limit]
        });
    };
    ObjectAnnotations.prototype.max = function (limit) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'max',
            validatorParameters: [limit]
        });
    };
    ObjectAnnotations.prototype.length = function (limit) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'length',
            validatorParameters: [limit]
        });
    };
    ObjectAnnotations.prototype.pattern = function (pattern, name) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'pattern',
            validatorParameters: util_1.params(pattern, name)
        });
    };
    ObjectAnnotations.prototype.and = function () {
        var peers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            peers[_i - 0] = arguments[_i];
        }
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'and',
            validatorParameters: peers
        });
    };
    ObjectAnnotations.prototype.nand = function () {
        var peers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            peers[_i - 0] = arguments[_i];
        }
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'nand',
            validatorParameters: peers
        });
    };
    ObjectAnnotations.prototype.or = function () {
        var peers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            peers[_i - 0] = arguments[_i];
        }
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'or',
            validatorParameters: peers
        });
    };
    ObjectAnnotations.prototype.xor = function () {
        var peers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            peers[_i - 0] = arguments[_i];
        }
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'xor',
            validatorParameters: peers
        });
    };
    ObjectAnnotations.prototype.with = function (key, peers) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'with',
            validatorParameters: util_1.params(key, peers)
        });
    };
    ObjectAnnotations.prototype.without = function (key, peers) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'without',
            validatorParameters: util_1.params(key, peers)
        });
    };
    ObjectAnnotations.prototype.rename = function (from, to, options) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'rename',
            validatorParameters: util_1.params(from, to, options)
        });
    };
    ObjectAnnotations.prototype.assert = function (key, schema, message) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'assert',
            validatorParameters: util_1.params(key, schema, message)
        });
    };
    ObjectAnnotations.prototype.unknown = function (allow) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'unknown',
            validatorParameters: util_1.params(allow)
        });
    };
    ObjectAnnotations.prototype.type = function (constructor, name) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'type',
            validatorParameters: util_1.params(constructor, name)
        });
    };
    ObjectAnnotations.prototype.requiredKeys = function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i - 0] = arguments[_i];
        }
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'requiredKeys',
            validatorParameters: children
        });
    };
    ObjectAnnotations.prototype.optionalKeys = function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i - 0] = arguments[_i];
        }
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'optionalKeys',
            validatorParameters: children
        });
    };
    ObjectAnnotations.prototype.validate = function (type) {
        return meta_1.Meta.addMetadata({
            priority: 3,
            type: this._type,
            validatorName: 'resource',
            validatorParameters: [type.prototype]
        });
    };
    return ObjectAnnotations;
})(any_1.AnyAnnotations);
exports.ObjectAnnotations = ObjectAnnotations;
