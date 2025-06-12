import { arrayUm } from './arrayUm';
import { arrayUmFE } from './arrayUm';

test('o quadrado dos elementos devem ser 9,25,49,9,64,81,1', () => {
    expect(arrayUm([3,5,7,3,8,9,1])).toEqual([9,25,49,9,64,81,1])
});

test('o quadrado dos elementos devem ser 9,25,49,9,64,81,1', () => {
    expect(arrayUmFE([3,5,7,3,8,9,1])).toEqual([9,25,49,9,64,81,1])
});

