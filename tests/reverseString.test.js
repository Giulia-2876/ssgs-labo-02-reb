const stringUtils = require('../src/stringUtils.js');

test('reverse di Ciao è oaiC', () =>{
    expect(stringUtils.reverseString("Ciao")).toBe("oaiC");
});
test('reverse di Anna è annA', () =>{
    expect(stringUtils.reverseString("Anna")).toBe("annA");
});
test('reverse di Iowa è awoI', () =>{
    expect(stringUtils.reverseString("Iowa")).toBe("awoI");
});