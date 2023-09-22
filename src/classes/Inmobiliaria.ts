import { Empleado } from "./Empleado";
import { Operacion } from "./Operacion/Operacion";

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

    public asignarEmpleado(empleado: Empleado) {
        this.empleados.push(empleado);
    }

    public obtenerEmpleadoConMasConcretadas() : Empleado {
        let empleadoConMasConcretadas: Empleado = this.empleados[0];

        this.empleados.forEach((empleado, index) => {
            if (index > 0) {
                if (empleado.obtenerConcreatadas() > empleadoConMasConcretadas.obtenerConcreatadas()) {
                    empleadoConMasConcretadas = empleado;
                }
            }
        });

        return empleadoConMasConcretadas;
    }

    public obtenerEmpleadoConMasComisiones() : Empleado {
        let empleadoConMasComisiones: Empleado = this.empleados[0];

        this.empleados.forEach((empleado, index) => {
            if (index > 0) {
                if (empleado.obtenerTotalComisiones() > empleadoConMasComisiones.obtenerTotalComisiones()) {
                    empleadoConMasComisiones = empleado;
                }
            }
        });

        return empleadoConMasComisiones;
    }

    private cerraronOperacionEnLaMismaZona(empleado1 : Empleado, empleado2 : Empleado) : boolean {
        
        let hayConflicto : boolean = false;
        empleado1.getOperacionesConcretadas().forEach(operacionEmpleado1 => {

            empleado2.getOperacionesConcretadas().forEach(operacionEmpleado2 => {
              
                if(operacionEmpleado1.getInmueble().getZona().getNombre() === operacionEmpleado2.getInmueble().getZona().getNombre()){
                    hayConflicto = true;
                }
            })

        });

        return hayConflicto;
    }

    private seCerraronSusOperaciones(empleado1: Empleado, empleado2: Empleado) : boolean {
        let hayConflicto : boolean = false;

        // empleado1.


        return hayConflicto;
    }

    public verificarConflictoEntreEmpleado(empleado1 : Empleado, empleado2 : Empleado) : boolean {
        return this.cerraronOperacionEnLaMismaZona(empleado1, empleado2) || this.seCerraronSusOperaciones(empleado1, empleado2);
    }

}