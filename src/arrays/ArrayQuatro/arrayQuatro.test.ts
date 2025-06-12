import { arrayQuatro } from './arrayQuatro';
//  Teste para o código
test('os 2 primeiros elementos do array devem ser 2 e 4', () => {
    expect(arrayQuatro([2,4,6,2,8,9,5])).toEqual([2,4]);
});

test('os 2 primeiros elementos do array devem ser 10 e 15 ', () => {
    expect(arrayQuatro([10,15])).toEqual([10,15]);
});

test('deve lançar erro se array tiver menos que 2 elementos', () => {
  expect(() => arrayQuatro([1])).toThrow(Error);
});
