///<reference path="references.ts" />
/*@annotations.object.and('propA', 'propB')
class Resource {
    @annotations.string.string()
    public propA: string;

    @annotations.string.string()
    public propB: string;
}

class CompositionTest {
    @annotations.object.validate()
    public resource: Resource;
}

let test, error;
describe("annotation", function() {
    describe("validate", function() {
       it("should validate composed object", function() {
           test = new CompositionTest();
           test.resource = new Resource();
           test.resource.propA = 'abc';
           test.resource.propB = 'def';

           error = Joi.validate(test).error;

           expect(error).toBeNull();

           test = new CompositionTest();
           test.resource = new Resource();
           test.resource.propA = 'abc';

           error = Joi.validate(test).error;

           expect(error).not.toBeNull();
       });
    });
});*/ 
