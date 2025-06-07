import { arrayTres } from './arrayTres';

test('o array ordenado deve serigual a ave, boneco, carro, lapis', () => {
    expect(arrayTres(['carro', 'boneco', 'ave', 'lapis'])).toEqual(['ave', 'boneco', 'carro', 'lapis'])
});

