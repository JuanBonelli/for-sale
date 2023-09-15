import { Cliente } from "../Cliente";
import { Empleado } from "../Empleado";
import { Operacion } from "../Operacion/Operacion";
import { Estado } from "./Estado";

export class Concretacion extends Estado {

    protected reservar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        throw new Error("No se puede reservar un inmueble concretado.");
    }
    protected concretar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        throw new Error("Este inmueble ya esta concretado.");
    }
  
}