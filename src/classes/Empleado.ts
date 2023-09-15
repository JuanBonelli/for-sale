import { Estado } from "./Estado/Estado";
import { Operacion } from "./Operacion/Operacion";

export class Empleado {
    private nombre: string;
    private dni: string;
    private operaciones: Operacion[];
    private reservas : Estado[];
    private concretadas : Estado[];

    constructor() {
        this.operaciones = [];
        this.reservas = [];
        this.concretadas = [];
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public setDni(dni: string) {
        this.dni = dni;
    }

    public asignarOperacion(operacion: Operacion) {
        this.operaciones.push(operacion);
    }

    public asignarReserva(reserva : Estado) {
        this.reservas.push(reserva)
    }

    public asignarConcretada(concretada : Estado) {
        this.concretadas.push(concretada);
    }

    public obtenerTotalComisiones() : number  {
        return this.operaciones.reduce((accum, operacion) => accum + operacion.calcularComision(), 0);
    }

    public obtenerConcreatadas() : number {
        return this.concretadas.length;
    }

    public obtenerReservas () : number {
        return this.reservas.length;
    }

}