import { Estado } from "./Estado/Estado";
import { Operacion } from "./Operacion/Operacion";

export class Empleado {
    private nombre: string;
    private dni: string;
    private operaciones: Operacion[];
    private reservas : Operacion[];
    private concretadas : Operacion[];

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

    public asignarReserva(operacion : Operacion) {
        this.reservas.push(operacion)
    }

    public asignarConcretada(operacion : Operacion) {
        this.concretadas.push(operacion);
    }

    public obtenerTotalComisiones() : number  {
        return this.concretadas.reduce((accum, operacion) => accum + operacion.calcularComision(), 0);
    }

    public getOperacionesConcretadas() : Operacion[] {
        return this.concretadas;
    }

    public obtenerConcreatadas() : number {
        return this.concretadas.length;
    }

    public obtenerReservas () : number {
        return this.reservas.length;
    }

    public getDni() : string {
        return this.dni;
    }

}