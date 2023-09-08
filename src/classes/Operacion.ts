import { Cliente } from "./Cliente";
import { Empleado } from "./Empleado";

export abstract class Operacion {
    cliente : Cliente;
    comision : number;
    empleado: Empleado
    public abstract calcularComision() : number;
}