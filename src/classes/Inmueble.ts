import { Empleado } from "./Empleado";
import { Operacion } from "./Operacion";

export abstract class Inmueble {
    private operacion : Operacion;
    private empleado : Empleado;
    private ambientes: number;
    private dimension: number;
    private valor: number;
    public abstract calcularValor(): number;
}