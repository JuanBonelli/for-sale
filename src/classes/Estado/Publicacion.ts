import { Cliente } from "../Cliente";
import { Empleado } from "../Empleado";
import { Operacion } from "../Operacion/Operacion";
import { Concretacion } from "./Concretacion";
import { Estado } from "./Estado";
import { Reserva } from "./Reserva";

export class Publicacion extends Estado {
    constructor() {
        super();   
    }

    public reservar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        operacion.cambiarEstado(new Reserva());
        this.cliente = cliente;
        this.empleado = empleado;

        this.empleado.asignarReserva(operacion);

    }
    public concretar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        operacion.cambiarEstado(new Concretacion());
        this.cliente = cliente;
        this.empleado = empleado;

        this.empleado.asignarConcretada(operacion);
    }
   
}