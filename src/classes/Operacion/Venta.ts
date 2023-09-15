import { Operacion } from "./Operacion";

export class Venta extends Operacion {
    static porcentajeGanancia : number = 1.5;


    constructor() {
        super();
    }

    public setPorcentajeGanancia(porcentaje : number) {
        Venta.porcentajeGanancia = porcentaje;
    }

    public static getPorcentajeGanancia() {
        return Venta.porcentajeGanancia;
    }

    public calcularComision(): number {
        return (this.inmueble.calcularValorFinal() * Venta.porcentajeGanancia) / 100;

    }
}