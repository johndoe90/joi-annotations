///<reference path="references.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var meta_1 = require('./meta');
var util_1 = require('./util');
var any_1 = require('./any');
var AlternativesAnnotations = (function (_super) {
    __extends(AlternativesAnnotations, _super);
    function AlternativesAnnotations() {
        _super.apply(this, arguments);
        this._type = 'alternatives';
    }
    AlternativesAnnotations.prototype.alt = function () {
        return meta_1.Meta.addMetadata({
            type: this._type
        });
    };
    AlternativesAnnotations.prototype.alternatives = function () {
        return meta_1.Meta.addMetadata({
            type: this._type
        });
    };
    AlternativesAnnotations.prototype.try = function (schemas) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'try',
            validatorParameters: [schemas]
        });
    };
    AlternativesAnnotations.prototype.when = function (ref, options) {
        return meta_1.Meta.addMetadata({
            type: this._type,
            validatorName: 'when',
            validatorParameters: util_1.params(ref, options)
        });
    };
    return AlternativesAnnotations;
})(any_1.AnyAnnotations);
exports.AlternativesAnnotations = AlternativesAnnotations;
