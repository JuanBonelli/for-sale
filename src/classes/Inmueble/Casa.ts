import { Inmueble } from "./Inmueble";

export class Casa extends Inmueble {

    private valorCasa : number;

    constructor(valor : number) {
        super();
        this.valorCasa = valor;

    }

    public calcularValor() : number {
        
        return this.valorCasa;
    }
}