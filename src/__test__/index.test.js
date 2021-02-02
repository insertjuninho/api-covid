const index = require('../controller/indexController');

describe('Contagio Covid', () => {
    test('Index Test', () => {
        expect(index.index(1, 7)).toEqual();
    })
})