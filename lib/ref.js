///<reference path="references.ts" />
var meta_1 = require('./meta');
var util_1 = require('./util');
function ref(key, options) {
    return meta_1.Meta.addMetadata({
        validatorName: 'ref',
        validatorParameters: util_1.params(key, options)
    });
}
exports.ref = ref;
