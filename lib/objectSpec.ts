///<reference path="references.ts" />

import * as Joi from 'joi';
import {annotations} from './index';

class KeysOnPropertyTest {
    @annotations.object.keys({
        a: Joi.string().required(),
        b: Joi.string().required()
    })
    public prop: {};

    constructor(prop: {}) {
        this.prop = prop;
    }
}

@annotations.object.min(2)
class MinOnClassTest {
    @annotations.string.string()
    public propA: string;

    @annotations.string.string()
    public propB: string;

    constructor(propA: string, propB: string) {
        this.propA = propA;
        this.propB = propB;
    }
}

class MinOnPropertyTest {
    @annotations.object.min(2)
    @annotations.object.unknown()
    public prop: {};

    constructor(prop: {}) {
        this.prop = prop;
    }
}

@annotations.object.max(2)
class MaxOnClassTest {
    @annotations.string.string()
    public propA: string;

    @annotations.string.string()
    public propB: string;

    constructor(propA: string, propB: string) {
        this.propA = propA;
        this.propB = propB;
    }
}

class MaxOnPropertyTest {
    @annotations.object.max(2)
    @annotations.object.unknown()
    public prop: {};

    constructor(prop: {}) {
        this.prop = prop;
    }
}

@annotations.object.length(2)
@annotations.object.unknown()
class LengthOnClassTest {
    @annotations.string.string()
    public propA: string;

    @annotations.string.string()
    public propB: string;

    constructor(propA: string, propB: string) {
        this.propA = propA;
        this.propB = propB;
    }
}

class LengthOnPropertyTest {
    @annotations.object.length(2)
    @annotations.object.unknown()
    public prop: {};

    constructor(prop: {}) {
        this.prop = prop;
    }
}

@annotations.object.and('propA', 'propB')
class AndOnClassTest {
    @annotations.string.string()
    public propA: string;

    @annotations.string.string()
    public propB: string;

    constructor(propA: string, propB: string) {
        this.propA = propA;
        this.propB = propB;
    }
}

class AndOnPropertyTest {
    @annotations.object.and('a', 'b')
    @annotations.object.unknown()
    public prop: {};

    constructor(prop: {}) {
        this.prop = prop;
    }
}

@annotations.object.or('propA', 'propB')
class OrOnClassTest {
    @annotations.string.string()
    public propA: string;

    @annotations.string.string()
    public propB: string;

    constructor(propA: string) {
        this.propA = propA;
    }
}

class OrOnPropertyTest {
    @annotations.object.or('a', 'b')
    @annotations.object.unknown()
    public prop: {};

    constructor(prop: {}) {
        this.prop = prop;
    }
}

@annotations.object.nand('propA', 'propB')
class NandOnClassTest {
    @annotations.string.string()
    public propA: string;

    @annotations.string.string()
    public propB: string;

    constructor(propA: string) {
        this.propA = propA;
    }
}

class NandOnPropertyTest {
    @annotations.object.nand('a', 'b')
    @annotations.object.unknown()
    public prop: {};

    constructor(prop: {}) {
        this.prop = prop;
    }
}

@annotations.object.xor('propA', 'propB')
class XorOnClassTest {
    @annotations.string.string()
    public propA: string;

    @annotations.string.string()
    public propB: string;

    constructor(propA: string) {
        this.propA = propA;
    }
}

class XorOnPropertyTest {
    @annotations.object.xor('a', 'b')
    @annotations.object.unknown()
    public prop: {};

    constructor(prop: {}) {
        this.prop = prop;
    }
}

@annotations.object.with('propA', 'propB')
class WithOnClassTest {
    @annotations.string.string()
    public propA: string;

    @annotations.string.string()
    public propB: string;

    constructor(propA: string, propB: string) {
        this.propA = propA;
        this.propB = propB;
    }
}

@annotations.object.without('propA', 'propB')
class WithoutOnClassTest {
    @annotations.string.string()
    public propA: string;

    @annotations.string.string()
    public propB: string;

    constructor(propA: string) {
        this.propA = propA;
    }
}

@annotations.object.rename('propA', 'propB')
class RenameOnClassTest {
    @annotations.string.string()
    public propA: string;

    constructor(propA: string) {
        this.propA = propA;
    }
}

@annotations.object.assert('d.e', Joi.ref('a.c'))
class AssertOnClassTest {
    @annotations.object.keys({
        b: Joi.string(),
        c: Joi.number()
    })
    public a: {};

    @annotations.object.keys({
        e: Joi.any()
    })
    public d: {};

    constructor(a: {}, d: {}) {
        this.a = a;
        this.d = d;
    }
}

@annotations.object.unknown()
class UnknownOnClassTest {}

class TypeOnPropertyTest {
    @annotations.object.type(RegExp)
    public prop: any;

    constructor(prop: any) {
        this.prop = prop;
    }
}

@annotations.object.requiredKeys('prop')
class RequiredKeysOnClassTest {
    @annotations.string.string()
    public prop: string;
}

@annotations.object.optionalKeys('prop')
class OptionalKeysOnClassTest {
    @annotations.string.required()
    public prop: string;
}

@annotations.object.pattern(/\w\d/, Joi.boolean())
class PatternOnClassTest {
    @annotations.boolean.boolean()
    public a: any;

    constructor(a: any) {
        this.a = a;
    }
}

describe('annotation', () => {
    describe('keys', () => {
        beforeEach(() => {
            let obj = {
                a: 'Thomas',
                b: 'Phillip'
            };

            this.error = null;
            this.test = new KeysOnPropertyTest(obj);
        });

        it('should be valid', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should not be valid', () => {
            delete this.test.prop.a;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('"min" (class-level)', () => {
       beforeEach(() => {
           this.error = null;
           this.test = new MinOnClassTest('propertyA', 'propertyB');
       });

       it('should allow two keys', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
       });

        it('should not allow less than two keys', () => {
            delete this.test.propA;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('"min" (property-level)', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new MinOnPropertyTest({
                a: true,
                b: true
            });
        });

        it('should allow two keys', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should not allow less than two keys', () => {
            delete this.test.prop.a;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('"max" (class-level)', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new MaxOnClassTest('propertyA', 'propertyB');
        });

        it('should allow two keys', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should not allow more than two keys', () => {
            this.test.propC = 'propertyC';

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('"max" (property-level)', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new MaxOnPropertyTest({
                a: true,
                b: true
            });
        });

        it('should allow two keys', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should not allow more than two keys', () => {
            this.test.prop.c = true;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('"length" (class-level)', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new LengthOnClassTest('propertyA', 'propertyB');
        });

        it('should allow two keys', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should not allow less than two keys', () => {
            delete this.test.propA;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });

        it('should not allow more than two keys', () => {
            this.test.propC = 'propertyC';

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('"length" (property-level)', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new LengthOnPropertyTest({
                a: true,
                b: true
            });
        });

        it('should allow two keys', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should not allow less than two keys', () => {
            delete this.test.prop.a;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });

        it('should not allow more than two keys', () => {
            this.test.prop.c = true;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('"and" (class-level)', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new AndOnClassTest('propertyA', 'propertyB');
        });

        it('should allow both properties', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should only be valid if both properties are there', () => {
            delete this.test.propA;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('"and" (property-level)', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new AndOnPropertyTest({
                a: true,
                b: true
            });
        });

        it('should allow both properties', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should only be valid if both properties are there', () => {
            delete this.test.prop.a;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('"or" (class-level)', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new OrOnClassTest('propertyA');
        });

        it('should be valid if one property is present', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should only be valid if at least one property is present', () => {
            delete this.test.propA;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('"or" (property-level)', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new OrOnPropertyTest({
                a: true
            });
        });

        it('should be valid if one property is present', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should only be valid if at least one property is present', () => {
            delete this.test.prop.a;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('"nand" (class-level)', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new NandOnClassTest('propertyA');
        });

        it('should be valid if no property is present', () => {
            delete this.test.propA;

            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should be valid if one property is present', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should only be valid if not both properties are present', () => {
            this.test.propB = 'propertyB';

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('"nand" (property-level)', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new NandOnPropertyTest({
                a: true
            });
        });

        it('should be valid if no property is present', () => {
            delete this.test.prop.a;

            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should be valid if one property is present', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should only be valid if not both properties are present', () => {
            this.test.prop.b = true;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('"xor" (class-level)', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new XorOnClassTest('propertyA');
        });

        it('should be valid if one property is present', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should not be valid if no property is present', () => {
            delete this.test.propA;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });

        it('should only be valid if not both properties are present', () => {
            this.test.propB = 'propertyB';

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('"xor" (property-level)', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new XorOnPropertyTest({
                a: true
            });
        });

        it('should be valid if one property is present', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should not be valid if no property is present', () => {
            delete this.test.prop.a;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });

        it('should only be valid if not both properties are present', () => {
            this.test.prop.b = true;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('with', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new WithOnClassTest('propertyA', 'propertyB');
        });

        it('should be valid when both properties are present', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should not be valid if propertyB is not present', () => {
            delete this.test.propB;

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('without', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new WithoutOnClassTest('propertyA');
        });

        it('should be valid when only propA is present', () => {
            this.error = Joi.validate(this.test).error;
            expect(this.error).toBeNull();
        });

        it('should not be valid if propB is present', () => {
            this.test.propB = 'propertyB';

            this.error = Joi.validate(this.test).error;
            expect(this.error).not.toBeNull();
        });
    });

    describe('rename', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new RenameOnClassTest('propertyA');
        });

        it('should rename property', () => {
            let result = Joi.validate(this.test);

            expect(result.value.propB).toBeDefined();
            expect(result.value.propB).toBe(this.test.propA);
        });
    });

    describe('assert', () => {
        beforeEach(() => {
            let a = { b: 'b', c: 2 };
            let d = { e: 2 };

            this.error = null;
            this.test = new AssertOnClassTest(a, d);
        });

        it('should be valid because a.c equals d.e', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it('should not be valid because a.c does not equals d.e', () => {
            this.test.d.e = 3;
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('unknown', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new UnknownOnClassTest();
        });

        it('should allow unknown keys', () => {
            this.test.unknown = 'key';
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });
    });

    describe('type', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new TypeOnPropertyTest(new RegExp(''));
        });

        it('should allow RegExp key', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it('should only allow RegExp key', () => {
            this.test.prop = new Number(3);
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('requiredKeys', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new RequiredKeysOnClassTest();
        });

        it('should require prop to be defined', () => {
            delete this.test.prop;
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });

    describe('optionalKeys', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new OptionalKeysOnClassTest();
        });

        it('should not require prop to be set', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });
    });

    describe('pattern', () => {
        beforeEach(() => {
            this.error = null;
            this.test = new PatternOnClassTest(true);
        });

        it('should allow boolean value', () => {
            this.error = Joi.validate(this.test).error;

            expect(this.error).toBeNull();
        });

        it('should only allow boolean value', () => {
            this.test.a = 3;
            this.error = Joi.validate(this.test).error;

            expect(this.error).not.toBeNull();
        });
    });
});