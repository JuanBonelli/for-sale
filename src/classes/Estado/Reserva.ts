import { Cliente } from "../Cliente";
import { Empleado } from "../Empleado";
import { Operacion } from "../Operacion/Operacion";
import { Concretacion } from "./Concretacion";
import { Estado } from "./Estado";

export class Reserva extends Estado {
    constructor() {
        super();       
    }

    public reservar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        throw new Error("Este inmueble ya esta reservado");
    }

    public concretar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        if(this.cliente === cliente) {
            operacion.cambiarEstado(new Concretacion());
            this.empleado.asignarConcretada(operacion);

        }
    }
   
    
}