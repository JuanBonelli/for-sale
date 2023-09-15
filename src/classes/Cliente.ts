import { Estado } from "./Estado/Estado";
import { Operacion } from "./Operacion/Operacion";

export class Cliente {
    private nombre: string;
    private operaciones : Operacion[];
    

    constructor() {
        this.operaciones = [];
    }
    
    public asignarOperacion(operacion: Operacion) {
        this.operaciones.push(operacion);
    }
}