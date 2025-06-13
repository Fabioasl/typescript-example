// Arquivo da classe 

export abstract class Iatleta{
    nome: string;
    altura: number;

    constructor(nome: string, altura: number) {
        this.nome = nome;
        this.altura = altura;
    }
    
    static media(atleta: Iatleta, vitorias: number, derrotas: number): string {
        const total = vitorias + derrotas;
        if (total === 0) {
        return "Não há confrontos registrados.";
        }
        const desempenho = (vitorias / total) * 100;
        return `A média de aproveitamento do atleta: ${atleta.nome} é ${desempenho}%.`;
    }
}


export class Judoca extends Iatleta {
    faixa: string;
    peso: number;
    categoria: string;

    constructor(nome: string, altura: number, peso: number, faixa: string) {
        super(nome, altura);
        this.peso = peso;
        this.faixa = faixa;
        this.categoria = "nenhuma";
    }
    Categoria() : string{
        if (this.peso <= 60){
            this.categoria = "Ligeiro";
        }
        else if (this.peso <= 80){
            this.categoria = "Médio";
        }
        else{
            this.categoria = "Pesado";
        }
        return `Categoria do atleta: ${this.nome} é ${this.categoria}.`
    }
}


export class Basquetebolista extends Iatleta{
    pontos: number;
    rebotes: number;
    assistencias: number;
    bloqueios: number;

        constructor(nome: string, altura: number, pontos: number, rebotes: number, assistencias: number, bloqueios: number) {
        super(nome, altura);
        this.pontos = pontos ;
        this.rebotes = rebotes;
        this.assistencias = assistencias;
        this.bloqueios = bloqueios;
    }
    Overall(partidas :  number ) : string{
        let total = partidas;
        let av_pontos = this.pontos / partidas;
        let av_rebotes = this.rebotes / partidas ;
        let av_assistencias = this.assistencias / partidas ;
        let av_bloqueios = this.bloqueios / partidas ;

        return `O overall do atleta: ${this.nome} é de ${av_pontos} pontos, ${av_rebotes} rebotes, ${av_assistencias} assitencias, e ${av_bloqueios} bloqueios em  um total de ${total} partidas.`
    }

    
}