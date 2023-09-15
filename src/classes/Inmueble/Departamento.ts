import { Inmueble } from "./Inmueble";

export class Departamento extends Inmueble {

    constructor() {
        super();  
    }

    public calcularValor() : number {
        return 350000 * this.cantAmbientes;
    }   
}
