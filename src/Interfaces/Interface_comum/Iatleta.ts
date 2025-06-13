// Arquivo da classe 

export interface Iatleta{
    nome: string;
    altura: number;
}

export class Judo implements Iatleta{
    nome: string;
    altura: number;
    peso: number;
    faixa: string;
    categoria: string;

    constructor(nome: string, altura: number, peso: number, faixa: string, categoria: string){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
        this.faixa = faixa;
        this.categoria = categoria;
    }
}

export class Basquete implements Iatleta{
    nome: string;
    altura: number;
    pontos: number;
    rebotes: number;
    assitencias: number;
    bloqueios: number;

    constructor(nome: string, altura: number, pontos: number, rebotes: number, assitencias: number, bloqueios: number){
        this.nome = nome;
        this.altura = altura;
        this.pontos = pontos;
        this.rebotes = rebotes;
        this.assitencias = assitencias;
        this.bloqueios = bloqueios;
    }
}