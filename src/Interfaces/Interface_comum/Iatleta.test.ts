// Arquivo de testes 

import {Judo, Basquete} from './Iatleta';

describe('Classe judo', () => {
    let judoca: Judo;

    beforeEach(() => {
        judoca = new Judo("Ferreira", 1.75, 75, "Roxa", "Meio-médio");
    });

    it('Deve criar um judoca com os seguintes atributos', () => {
        expect(judoca.nome).toBe("Ferreira");
        expect(judoca.altura).toBe(1.75);
        expect(judoca.peso).toBe(75);
        expect(judoca.faixa).toBe("Roxa");
        expect(judoca.categoria).toBe("Meio-médio");
    });
    it('Deve alterar os atributos do judoca ja criado', () =>{
        judoca.peso = 70;
        judoca.categoria = "Leve";
        expect(judoca.peso).toBe(70);
        expect(judoca.categoria).toBe("Leve");
    })
});

describe('Classe Basquete', () => {
    let basquetebolista: Basquete;

    beforeEach(() => {
        basquetebolista = new Basquete("Lucena", 1.86, 7, 5, 3, 1 );
    });

    it('Deve criar um basquetebolista com os seguintes atributos', () => {
        expect(basquetebolista.nome).toBe("Lucena");
        expect(basquetebolista.altura).toBe(1.86);
        expect(basquetebolista.pontos).toBe(7);
        expect(basquetebolista.rebotes).toBe(5)
        expect(basquetebolista.assitencias).toBe(3);
        expect(basquetebolista.bloqueios).toBe(1);
    });
    it('Deve alterar os atributos do basquetebolista ja criado', () =>{
        basquetebolista.pontos = 10;
        basquetebolista.rebotes = 15;
        basquetebolista.assitencias = 8;
        basquetebolista.bloqueios = 5;
        expect(basquetebolista.pontos).toBe(10);
        expect(basquetebolista.rebotes).toBe(15)
        expect(basquetebolista.assitencias).toBe(8);
        expect(basquetebolista.bloqueios).toBe(5);
    })
});