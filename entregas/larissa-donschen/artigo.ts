import { MaterialLeitura } from "./materialLeitura";

class Artigo implements MaterialLeitura{
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo: string, autor: string, dataPublicacao: Date){
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    exibirDetalhe(): void {
        console.log(`O titulo é: ${this.titulo}, O autor é ${this.autor} e a data da publicação é: ${this.dataPublicacao}`);
    }

}
const artigo = new Artigo("Animais nas trincheiras", "blabla", new Date ("02/03/2025"));
artigo.exibirDetalhe();