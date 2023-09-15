import { Inmueble } from "./Inmueble";

export class PH extends Inmueble {
    constructor() {
        super();
    }

    public calcularValor(): number {
        return 14000 * this.metrosCuadrados;
    }
}