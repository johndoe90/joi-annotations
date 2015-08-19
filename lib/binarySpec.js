var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var _this = this;
///<reference path="references.ts" />
var Joi = require('joi');
var index_1 = require('./index');
var EncodingTest = (function () {
    function EncodingTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.binary.encoding('base64')
    ], EncodingTest.prototype, "prop");
    return EncodingTest;
})();
var MinTest = (function () {
    function MinTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.binary.min(5)
    ], MinTest.prototype, "prop");
    return MinTest;
})();
var MaxTest = (function () {
    function MaxTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.binary.max(5)
    ], MaxTest.prototype, "prop");
    return MaxTest;
})();
var LengthTest = (function () {
    function LengthTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.binary.length(5)
    ], LengthTest.prototype, "prop");
    return LengthTest;
})();
describe('annotation', function () {
    describe('encoding', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new EncodingTest('data');
        });
        it('should convert to Buffer', function () {
            var result = Joi.validate(_this.test);
            expect(Buffer.isBuffer(result.value.prop)).toBe(true);
        });
    });
});
describe('annotation', function () {
    describe('min', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new MinTest(new Buffer('whatever'));
        });
        it('should allow buffers with size greater than 5', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow buffers with size greater than 5', function () {
            _this.test.prop = new Buffer('abc');
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
});
describe('annotation', function () {
    describe('max', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new MaxTest(new Buffer('abc'));
        });
        it('should allow buffers with size less than 5', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow buffers with size less than 5', function () {
            _this.test.prop = new Buffer('abcdef');
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
});
describe('annotation', function () {
    describe('length', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new LengthTest(new Buffer('abcde'));
        });
        it('should allow buffers with size  5', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow buffers with size 5', function () {
            _this.test.prop = new Buffer('abcdef');
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
});
