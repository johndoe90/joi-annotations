///<reference path="references.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var _this = this;
var Joi = require('joi');
var index_1 = require('./index');
var ArrayTest = (function () {
    function ArrayTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.array.array()
    ], ArrayTest.prototype, "prop");
    return ArrayTest;
})();
var SparseTest = (function () {
    function SparseTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.array.sparse(true)
    ], SparseTest.prototype, "prop");
    return SparseTest;
})();
var SingleTest = (function () {
    function SingleTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.array.single(true)
    ], SingleTest.prototype, "prop");
    return SingleTest;
})();
var ItemsTest = (function () {
    function ItemsTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.array.items(Joi.number(), Joi.string())
    ], ItemsTest.prototype, "prop");
    return ItemsTest;
})();
var MinTest = (function () {
    function MinTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.array.min(5)
    ], MinTest.prototype, "prop");
    return MinTest;
})();
var MaxTest = (function () {
    function MaxTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.array.max(5)
    ], MaxTest.prototype, "prop");
    return MaxTest;
})();
var LengthTest = (function () {
    function LengthTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.array.length(5)
    ], LengthTest.prototype, "prop");
    return LengthTest;
})();
var UniqueTest = (function () {
    function UniqueTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.array.unique()
    ], UniqueTest.prototype, "prop");
    return UniqueTest;
})();
describe('annotation', function () {
    describe('array', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new ArrayTest([1, 2, 3]);
        });
        it('should allow arrays', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow arrays', function () {
            _this.test.prop = 'abc';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('sparse', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new SparseTest([1, 2, 3]);
        });
        it('should allow arrays with no undefined values', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should allow arrays with undefined values', function () {
            _this.test.prop = [1, 2, undefined, 3];
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
    });
    describe('single', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new SingleTest([1, 2, 3]);
        });
        it('should allow arrays', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should allow single values', function () {
            _this.test.prop = 1;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
    });
    describe('items', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new ItemsTest([1, 2, 'hello']);
        });
        it('should allow specified types', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow specified types', function () {
            _this.test.prop = [1, 2, 'hello', /fff/];
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('min', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new MinTest([1, 2, 3, 4, 5]);
        });
        it('should allow arrays with length greater or equal to 5', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow arrays with length greater or equal to 5', function () {
            _this.test.prop = [1, 2, 3, 4];
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('max', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new MaxTest([1, 2, 3, 4, 5]);
        });
        it('should allow arrays with length less or equal to 5', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow arrays with length less or equal to 5', function () {
            _this.test.prop = [1, 2, 3, 4, 5, 6];
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('length', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new LengthTest([1, 2, 3, 4, 5]);
        });
        it('should allow arrays with length  5', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow arrays with length 5', function () {
            _this.test.prop = [1, 2, 3, 4, 5, 6];
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('unique', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new UniqueTest([1, 2, 3, 4, 5]);
        });
        it('should allow arrays with unique values', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow arrays with unique values', function () {
            _this.test.prop = [1, 2, 3, 4, 5, 1];
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
});
