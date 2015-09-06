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
var KeysOnPropertyTest = (function () {
    function KeysOnPropertyTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.object.keys({
            a: Joi.string().required(),
            b: Joi.string().required()
        })
    ], KeysOnPropertyTest.prototype, "prop");
    return KeysOnPropertyTest;
})();
var MinOnClassTest = (function () {
    function MinOnClassTest(propA, propB) {
        this.propA = propA;
        this.propB = propB;
    }
    __decorate([
        index_1.annotations.string.string()
    ], MinOnClassTest.prototype, "propA");
    __decorate([
        index_1.annotations.string.string()
    ], MinOnClassTest.prototype, "propB");
    MinOnClassTest = __decorate([
        index_1.annotations.object.min(2)
    ], MinOnClassTest);
    return MinOnClassTest;
})();
var MinOnPropertyTest = (function () {
    function MinOnPropertyTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.object.min(2),
        index_1.annotations.object.unknown()
    ], MinOnPropertyTest.prototype, "prop");
    return MinOnPropertyTest;
})();
var MaxOnClassTest = (function () {
    function MaxOnClassTest(propA, propB) {
        this.propA = propA;
        this.propB = propB;
    }
    __decorate([
        index_1.annotations.string.string()
    ], MaxOnClassTest.prototype, "propA");
    __decorate([
        index_1.annotations.string.string()
    ], MaxOnClassTest.prototype, "propB");
    MaxOnClassTest = __decorate([
        index_1.annotations.object.max(2)
    ], MaxOnClassTest);
    return MaxOnClassTest;
})();
var MaxOnPropertyTest = (function () {
    function MaxOnPropertyTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.object.max(2),
        index_1.annotations.object.unknown()
    ], MaxOnPropertyTest.prototype, "prop");
    return MaxOnPropertyTest;
})();
var LengthOnClassTest = (function () {
    function LengthOnClassTest(propA, propB) {
        this.propA = propA;
        this.propB = propB;
    }
    __decorate([
        index_1.annotations.string.string()
    ], LengthOnClassTest.prototype, "propA");
    __decorate([
        index_1.annotations.string.string()
    ], LengthOnClassTest.prototype, "propB");
    LengthOnClassTest = __decorate([
        index_1.annotations.object.length(2),
        index_1.annotations.object.unknown()
    ], LengthOnClassTest);
    return LengthOnClassTest;
})();
var LengthOnPropertyTest = (function () {
    function LengthOnPropertyTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.object.length(2),
        index_1.annotations.object.unknown()
    ], LengthOnPropertyTest.prototype, "prop");
    return LengthOnPropertyTest;
})();
var AndOnClassTest = (function () {
    function AndOnClassTest(propA, propB) {
        this.propA = propA;
        this.propB = propB;
    }
    __decorate([
        index_1.annotations.string.string()
    ], AndOnClassTest.prototype, "propA");
    __decorate([
        index_1.annotations.string.string()
    ], AndOnClassTest.prototype, "propB");
    AndOnClassTest = __decorate([
        index_1.annotations.object.and('propA', 'propB')
    ], AndOnClassTest);
    return AndOnClassTest;
})();
var AndOnPropertyTest = (function () {
    function AndOnPropertyTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.object.and('a', 'b'),
        index_1.annotations.object.unknown()
    ], AndOnPropertyTest.prototype, "prop");
    return AndOnPropertyTest;
})();
var OrOnClassTest = (function () {
    function OrOnClassTest(propA) {
        this.propA = propA;
    }
    __decorate([
        index_1.annotations.string.string()
    ], OrOnClassTest.prototype, "propA");
    __decorate([
        index_1.annotations.string.string()
    ], OrOnClassTest.prototype, "propB");
    OrOnClassTest = __decorate([
        index_1.annotations.object.or('propA', 'propB')
    ], OrOnClassTest);
    return OrOnClassTest;
})();
var OrOnPropertyTest = (function () {
    function OrOnPropertyTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.object.or('a', 'b'),
        index_1.annotations.object.unknown()
    ], OrOnPropertyTest.prototype, "prop");
    return OrOnPropertyTest;
})();
var NandOnClassTest = (function () {
    function NandOnClassTest(propA) {
        this.propA = propA;
    }
    __decorate([
        index_1.annotations.string.string()
    ], NandOnClassTest.prototype, "propA");
    __decorate([
        index_1.annotations.string.string()
    ], NandOnClassTest.prototype, "propB");
    NandOnClassTest = __decorate([
        index_1.annotations.object.nand('propA', 'propB')
    ], NandOnClassTest);
    return NandOnClassTest;
})();
var NandOnPropertyTest = (function () {
    function NandOnPropertyTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.object.nand('a', 'b'),
        index_1.annotations.object.unknown()
    ], NandOnPropertyTest.prototype, "prop");
    return NandOnPropertyTest;
})();
var XorOnClassTest = (function () {
    function XorOnClassTest(propA) {
        this.propA = propA;
    }
    __decorate([
        index_1.annotations.string.string()
    ], XorOnClassTest.prototype, "propA");
    __decorate([
        index_1.annotations.string.string()
    ], XorOnClassTest.prototype, "propB");
    XorOnClassTest = __decorate([
        index_1.annotations.object.xor('propA', 'propB')
    ], XorOnClassTest);
    return XorOnClassTest;
})();
var XorOnPropertyTest = (function () {
    function XorOnPropertyTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.object.xor('a', 'b'),
        index_1.annotations.object.unknown()
    ], XorOnPropertyTest.prototype, "prop");
    return XorOnPropertyTest;
})();
var WithOnClassTest = (function () {
    function WithOnClassTest(propA, propB) {
        this.propA = propA;
        this.propB = propB;
    }
    __decorate([
        index_1.annotations.string.string()
    ], WithOnClassTest.prototype, "propA");
    __decorate([
        index_1.annotations.string.string()
    ], WithOnClassTest.prototype, "propB");
    WithOnClassTest = __decorate([
        index_1.annotations.object.with('propA', 'propB')
    ], WithOnClassTest);
    return WithOnClassTest;
})();
var WithoutOnClassTest = (function () {
    function WithoutOnClassTest(propA) {
        this.propA = propA;
    }
    __decorate([
        index_1.annotations.string.string()
    ], WithoutOnClassTest.prototype, "propA");
    __decorate([
        index_1.annotations.string.string()
    ], WithoutOnClassTest.prototype, "propB");
    WithoutOnClassTest = __decorate([
        index_1.annotations.object.without('propA', 'propB')
    ], WithoutOnClassTest);
    return WithoutOnClassTest;
})();
var RenameOnClassTest = (function () {
    function RenameOnClassTest(propA) {
        this.propA = propA;
    }
    __decorate([
        index_1.annotations.string.string()
    ], RenameOnClassTest.prototype, "propA");
    RenameOnClassTest = __decorate([
        index_1.annotations.object.rename('propA', 'propB')
    ], RenameOnClassTest);
    return RenameOnClassTest;
})();
var AssertOnClassTest = (function () {
    function AssertOnClassTest(a, d) {
        this.a = a;
        this.d = d;
    }
    __decorate([
        index_1.annotations.object.keys({
            b: Joi.string(),
            c: Joi.number()
        })
    ], AssertOnClassTest.prototype, "a");
    __decorate([
        index_1.annotations.object.keys({
            e: Joi.any()
        })
    ], AssertOnClassTest.prototype, "d");
    AssertOnClassTest = __decorate([
        index_1.annotations.object.assert('d.e', Joi.ref('a.c'))
    ], AssertOnClassTest);
    return AssertOnClassTest;
})();
var UnknownOnClassTest = (function () {
    function UnknownOnClassTest() {
    }
    UnknownOnClassTest = __decorate([
        index_1.annotations.object.unknown()
    ], UnknownOnClassTest);
    return UnknownOnClassTest;
})();
var TypeOnPropertyTest = (function () {
    function TypeOnPropertyTest(prop) {
        this.prop = prop;
    }
    __decorate([
        index_1.annotations.object.type(RegExp)
    ], TypeOnPropertyTest.prototype, "prop");
    return TypeOnPropertyTest;
})();
var RequiredKeysOnClassTest = (function () {
    function RequiredKeysOnClassTest() {
    }
    __decorate([
        index_1.annotations.string.string()
    ], RequiredKeysOnClassTest.prototype, "prop");
    RequiredKeysOnClassTest = __decorate([
        index_1.annotations.object.requiredKeys('prop')
    ], RequiredKeysOnClassTest);
    return RequiredKeysOnClassTest;
})();
var OptionalKeysOnClassTest = (function () {
    function OptionalKeysOnClassTest() {
    }
    __decorate([
        index_1.annotations.string.required()
    ], OptionalKeysOnClassTest.prototype, "prop");
    OptionalKeysOnClassTest = __decorate([
        index_1.annotations.object.optionalKeys('prop')
    ], OptionalKeysOnClassTest);
    return OptionalKeysOnClassTest;
})();
var PatternOnClassTest = (function () {
    function PatternOnClassTest(a) {
        this.a = a;
    }
    __decorate([
        index_1.annotations.boolean.boolean()
    ], PatternOnClassTest.prototype, "a");
    PatternOnClassTest = __decorate([
        index_1.annotations.object.pattern(/\w\d/, Joi.boolean())
    ], PatternOnClassTest);
    return PatternOnClassTest;
})();
describe('annotation', function () {
    describe('keys', function () {
        beforeEach(function () {
            var obj = {
                a: 'Thomas',
                b: 'Phillip'
            };
            _this.error = null;
            _this.test = new KeysOnPropertyTest(obj);
        });
        it('should be valid', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should not be valid', function () {
            delete _this.test.prop.a;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('"min" (class-level)', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new MinOnClassTest('propertyA', 'propertyB');
        });
        it('should allow two keys', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should not allow less than two keys', function () {
            delete _this.test.propA;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('"min" (property-level)', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new MinOnPropertyTest({
                a: true,
                b: true
            });
        });
        it('should allow two keys', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should not allow less than two keys', function () {
            delete _this.test.prop.a;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('"max" (class-level)', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new MaxOnClassTest('propertyA', 'propertyB');
        });
        it('should allow two keys', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should not allow more than two keys', function () {
            _this.test.propC = 'propertyC';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('"max" (property-level)', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new MaxOnPropertyTest({
                a: true,
                b: true
            });
        });
        it('should allow two keys', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should not allow more than two keys', function () {
            _this.test.prop.c = true;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('"length" (class-level)', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new LengthOnClassTest('propertyA', 'propertyB');
        });
        it('should allow two keys', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should not allow less than two keys', function () {
            delete _this.test.propA;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
        it('should not allow more than two keys', function () {
            _this.test.propC = 'propertyC';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('"length" (property-level)', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new LengthOnPropertyTest({
                a: true,
                b: true
            });
        });
        it('should allow two keys', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should not allow less than two keys', function () {
            delete _this.test.prop.a;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
        it('should not allow more than two keys', function () {
            _this.test.prop.c = true;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('"and" (class-level)', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new AndOnClassTest('propertyA', 'propertyB');
        });
        it('should allow both properties', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only be valid if both properties are there', function () {
            delete _this.test.propA;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('"and" (property-level)', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new AndOnPropertyTest({
                a: true,
                b: true
            });
        });
        it('should allow both properties', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only be valid if both properties are there', function () {
            delete _this.test.prop.a;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('"or" (class-level)', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new OrOnClassTest('propertyA');
        });
        it('should be valid if one property is present', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only be valid if at least one property is present', function () {
            delete _this.test.propA;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('"or" (property-level)', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new OrOnPropertyTest({
                a: true
            });
        });
        it('should be valid if one property is present', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only be valid if at least one property is present', function () {
            delete _this.test.prop.a;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('"nand" (class-level)', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new NandOnClassTest('propertyA');
        });
        it('should be valid if no property is present', function () {
            delete _this.test.propA;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should be valid if one property is present', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only be valid if not both properties are present', function () {
            _this.test.propB = 'propertyB';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('"nand" (property-level)', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new NandOnPropertyTest({
                a: true
            });
        });
        it('should be valid if no property is present', function () {
            delete _this.test.prop.a;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should be valid if one property is present', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only be valid if not both properties are present', function () {
            _this.test.prop.b = true;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('"xor" (class-level)', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new XorOnClassTest('propertyA');
        });
        it('should be valid if one property is present', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should not be valid if no property is present', function () {
            delete _this.test.propA;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
        it('should only be valid if not both properties are present', function () {
            _this.test.propB = 'propertyB';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('"xor" (property-level)', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new XorOnPropertyTest({
                a: true
            });
        });
        it('should be valid if one property is present', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should not be valid if no property is present', function () {
            delete _this.test.prop.a;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
        it('should only be valid if not both properties are present', function () {
            _this.test.prop.b = true;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('with', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new WithOnClassTest('propertyA', 'propertyB');
        });
        it('should be valid when both properties are present', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should not be valid if propertyB is not present', function () {
            delete _this.test.propB;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('without', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new WithoutOnClassTest('propertyA');
        });
        it('should be valid when only propA is present', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should not be valid if propB is present', function () {
            _this.test.propB = 'propertyB';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('rename', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new RenameOnClassTest('propertyA');
        });
        it('should rename property', function () {
            var result = Joi.validate(_this.test);
            expect(result.value.propB).toBeDefined();
            expect(result.value.propB).toBe(_this.test.propA);
        });
    });
    describe('assert', function () {
        beforeEach(function () {
            var a = { b: 'b', c: 2 };
            var d = { e: 2 };
            _this.error = null;
            _this.test = new AssertOnClassTest(a, d);
        });
        it('should be valid because a.c equals d.e', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should not be valid because a.c does not equals d.e', function () {
            _this.test.d.e = 3;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('unknown', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new UnknownOnClassTest();
        });
        it('should allow unknown keys', function () {
            _this.test.unknown = 'key';
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
    });
    describe('type', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new TypeOnPropertyTest(new RegExp(''));
        });
        it('should allow RegExp key', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow RegExp key', function () {
            _this.test.prop = new Number(3);
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('requiredKeys', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new RequiredKeysOnClassTest();
        });
        it('should require prop to be defined', function () {
            delete _this.test.prop;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
    describe('optionalKeys', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new OptionalKeysOnClassTest();
        });
        it('should not require prop to be set', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
    });
    describe('pattern', function () {
        beforeEach(function () {
            _this.error = null;
            _this.test = new PatternOnClassTest(true);
        });
        it('should allow boolean value', function () {
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).toBeNull();
        });
        it('should only allow boolean value', function () {
            _this.test.a = 3;
            _this.error = Joi.validate(_this.test).error;
            expect(_this.error).not.toBeNull();
        });
    });
});
