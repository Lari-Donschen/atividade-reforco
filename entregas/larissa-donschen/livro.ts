import { MaterialLeitura } from "./materialLeitura";

class Livro implements MaterialLeitura{
    titulo: string;
    autor: string;
    numeroPaginas: number;

    constructor(titulo: string, autor: string, numeroPaginas: number){
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }
    exibirDetalhe(): void {
    console.log(`O titulo é: ${this.titulo}, O autor é ${this.autor} e o número de páginas é: ${this.numeroPaginas}`);
    }

}
const livro = new Livro("Jogos Vorazes", "blabla", 351);
livro.exibirDetalhe();