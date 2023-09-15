import { Empleado } from "./Empleado";

export class Inmobiliaria {
    private empleados: Empleado[];

    constructor() {
        this.empleados = [];
    }

    public obtenerEmpleadoConMasReservas(): Empleado {
        let empleadoConMasReservas: Empleado = this.empleados[0];

        this.empleados.forEach((empleado, index) => {
            if (index > 0) {
                if (empleado.obtenerReservas() > empleadoConMasReservas.obtenerReservas()) {
                    empleadoConMasReservas = empleado;
                }
            }
        });

        return empleadoConMasReservas;
    }

    // public obtenerEmpleadoConMasConcreatadas() : Empleado {
    //     this.empleados.forEach( empleado => {

    //     });
    // }

    // public obtenerEmpleadoConMasComisiones() : Empleado {
    //     this.empleados.forEach( empleado => {

    //     });
    // }

}