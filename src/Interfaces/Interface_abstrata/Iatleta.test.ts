// Arquivo de testes 
import {Judoca, Basquetebolista } from './Iatleta';

describe('Classe abstrata do judoca', () =>{
    let judoca: Judoca;

    beforeEach(() => {
        judoca = new Judoca("Ana", 1.68, 65, "Verde");
    });
    it('Deve criar um judoca com os seguintes atributos', () => {
        expect(judoca.nome).toBe("Ana");
        expect(judoca.altura).toBe(1.68);
        expect(judoca.peso).toBe(65);
        expect(judoca.faixa).toBe("Verde");
        expect(judoca.Categoria()).toBe(`Categoria do atleta: Ana é Médio.`)
    });
    
    it('deve alterar os atributos do judoca' , () =>{
        judoca.peso = 60;
        judoca.faixa = "preta";

        expect(judoca.peso).toBe(60);
        expect(judoca.faixa).toBe("preta");
        expect(judoca.Categoria()).toBe(`Categoria do atleta: Ana é Ligeiro.`)
    });
    it('A média de ana deve ser 100%', () =>{
        expect(Judoca.media(judoca,10,0)).toBe(`A média de aproveitamento do atleta: Ana é 100%.`)
    })
    it('A média de ana deve ser: Não há confrontos registrados.', () =>{
        expect(Judoca.media(judoca,0,0)).toBe(`Não há confrontos registrados.`)
    })
})

describe('Classe abstrata para Basquetebolista', () =>{
    let basquetebolista: Basquetebolista;
    beforeEach(() => {
        basquetebolista = new Basquetebolista("2pac", 1.76, 15, 15, 12, 6);
    });
    it ("O basquetebolista deve ter os seguintes atributos", () => {
        expect(basquetebolista.nome).toBe("2pac");
        expect(basquetebolista.altura).toBe(1.76);
        expect(basquetebolista.pontos).toBe(15);
        expect(basquetebolista.rebotes).toBe(15);
        expect(basquetebolista.assistencias).toBe(12);
        expect(basquetebolista.bloqueios).toBe(6);
        expect(basquetebolista.Overall(3)).toBe(`O overall do atleta: 2pac é de 5 pontos, 5 rebotes, 4 assitencias, e 2 bloqueios em  um total de 3 partidas.`)
    });
    it ("Deve alterar os atributos do basquetebolista", () =>{
        basquetebolista.pontos = 30;
        basquetebolista.rebotes = 24;
        basquetebolista.assistencias = 18;
        basquetebolista.bloqueios = 12;
        expect(basquetebolista.pontos).toBe(30);
        expect(basquetebolista.rebotes).toBe(24);
        expect(basquetebolista.assistencias).toBe(18);
        expect(basquetebolista.bloqueios).toBe(12);
        expect(basquetebolista.Overall(3)).toBe(`O overall do atleta: 2pac é de 10 pontos, 8 rebotes, 6 assitencias, e 4 bloqueios em  um total de 3 partidas.`)
    })
    it('A média de 2pac deve ser 100%', () =>{
        expect(Basquetebolista.media(basquetebolista,3,0)).toBe(`A média de aproveitamento do atleta: 2pac é 100%.`)
    })
    it('A média de 2pac deve ser Não há confrontos registrados.', () =>{
        expect(Basquetebolista.media(basquetebolista,0,0)).toBe(`Não há confrontos registrados.`)
    })
})