import { arrayDois } from "./arrayDois";

test('O output deve ser: Arrays com TypeScript', () =>{
    expect(arrayDois(['Arrays', 'com', 'TypeScript'])).toEqual('Arrays com TypeScript')
});