import { Console } from "console";
import { Empleado } from "../Empleado";
import { Operacion } from "../Operacion/Operacion";
import { Zona } from "../Zona";


export abstract class Inmueble {
    protected operacion: Operacion;
    protected cantAmbientes: number;
    protected metrosCuadrados: number;
    protected zona: Zona;
    protected valor: number;
    protected abstract calcularValor(): number;

    public asignarZona(zona: Zona) {
        this.zona = zona;
    }


    public asignarOperacion(operacion: Operacion) {
        this.operacion = operacion;
    }

    public setCantAmbientes(cantidad: number) {
        this.cantAmbientes = cantidad;
    }

    public setMetrosCuadrados(dimension: number) {
        this.metrosCuadrados = dimension;
    }

    public getZona(): Zona {
        return this.zona;
    }

    public calcularValorFinal(): number {
        return this.calcularValor() + this.getZona().getValorAgregado();
    }




}