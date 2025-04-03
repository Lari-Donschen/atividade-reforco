import { MaterialLeitura } from "./materialLeitura";

class Revista implements MaterialLeitura{
    titulo: string;
    autor: string;
    edicao: number;

    constructor(titulo: string, autor: string, edicao: number){
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }
    exibirDetalhe(): void {
        console.log(`O titulo é: ${this.titulo}, O autor é ${this.autor} e a edição é: ${this.edicao}`);
    }

}
const revista = new Revista("fashion", "blabla", 2);
revista.exibirDetalhe();