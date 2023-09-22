import { Cliente } from "../Cliente";
import { Empleado } from "../Empleado";
import { Estado } from "../Estado/Estado";

import { Publicacion } from "../Estado/Publicacion";
import { Inmueble } from "../Inmueble/Inmueble";

export abstract class Operacion {
    private cliente : Cliente;
    private empleado: Empleado;
    protected inmueble : Inmueble;
    protected estado: Estado = new Publicacion();
    
    public abstract calcularComision() : number;


    public asignarCliente(cliente: Cliente) {
        cliente.asignarOperacion(this);
        this.cliente = cliente;
        
    }

    public asignarEmpleado(empleado : Empleado) {
        empleado.asignarOperacion(this);
        this.empleado = empleado;
    }

    public asignarInmueble(inmueble : Inmueble) {
        this.inmueble = inmueble;
    }

    public cambiarEstado(estado: Estado) {
        this.estado = estado;
    }

    public getInmueble() : Inmueble {
        return this.inmueble;
    }

    public getEstado() : Estado {
        return this.estado;
    }

    public reservar() {
        this.estado.reservar(this.cliente, this.empleado, this);
    }

    public concretar() {
        this.estado.concretar(this.cliente, this.empleado, this);
    }


}