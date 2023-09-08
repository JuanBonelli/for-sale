abstract class Inmueble{
    operacion : Operacion;
    ambientes : number;
    dimension : number;
    estado : Estado;
    valor: number;
    zona: Zona;
    abstract function calcularValorInmueble();
    abstract function cambiarEstado();

}

class PH extends Inmueble {
    function calcularValorInmueble();
}

class Casa extends Inmueble {
    function calcularValorInmueble();
}

class Departamento extends Inmueble {
    function calcularValorInmueble();
}

abstract class Operacion {
    cliente : Cliente;
    comision : number;
    inmueble : Inmueble;
    empleado: Empleado
    abstract function calcularComision();
}

class Alquiler extends Operacion {
    descripcion : "Alquiler"
    meses: number;
    function calcularComision();
    
}

class Venta extends Operacion {
    descripcion : "Venta"
    private static comision : number;
    function calcularComision();
}

class Estado {
    nombre : string;

}

class Reserva extend Estado {
    function cambiarEstado();

}

class Concretacion extends Estado {
    function cambiarEstado();
}

class Zona {
    nombre : nombreZona;
    valorExtra : number;

}

class Empleado {
    nombre: string;
    operaciones : Operacion[];
    
}

class Cliente {
    nombre: string;
    operaciones : Operacion[];

}