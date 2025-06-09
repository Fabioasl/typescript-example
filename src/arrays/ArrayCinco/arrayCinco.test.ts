import {arrayCinco} from './arrayCinco';

test('os elementos pares devem ser 8, 6 e 12.', () => {
    expect(arrayCinco([8, 3, 9, 5, 6, 12])).toEqual([8,6,12]);
});