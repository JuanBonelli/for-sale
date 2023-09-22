import { Cliente } from "../Cliente";
import { Empleado } from "../Empleado";
import { Operacion } from "../Operacion/Operacion";


export abstract class Estado {
    protected cliente : Cliente;
    protected empleado : Empleado;

    public abstract reservar(cliente : Cliente, empleado : Empleado, operacion : Operacion) : void;
    public abstract concretar(cliente : Cliente, empleado : Empleado, operacion : Operacion) : void;


    public asignarCliente(cliente: Cliente) {
        this.cliente = cliente;
    }

    public asignarEmpelado(empleado: Empleado) {
        this.empleado = empleado;
    }

}