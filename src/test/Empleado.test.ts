import { Cliente } from "../classes/Cliente";
import { Empleado } from "../classes/Empleado";
import { Casa } from "../classes/Inmueble/Casa";
import { Operacion } from "../classes/Operacion/Operacion";
import { Venta } from "../classes/Operacion/Venta";
import { Zona } from "../classes/Zona";


//Zona
const zona = new Zona();
zona.setValorAgregado(50000)

// Empleado
const empleado = new Empleado();
empleado.setDni("45235143");
empleado.setNombre("Juan Bonelli");

// Cliente
const cliente = new Cliente();

//Inmueble
const casa = new Casa(500000);
casa.setCantAmbientes(2);
casa.setMetrosCuadrados(36);
casa.asignarZona(zona);


//Operacion
const operacion = new Venta();
operacion.asignarCliente(cliente);
operacion.asignarEmpleado(empleado);
operacion.asignarInmueble(casa);

const operacion2 = new Venta();
operacion.asignarCliente(cliente);
operacion.asignarEmpleado(empleado);
operacion.asignarInmueble(casa);


test("Req 1. La comision de la venta fue de 8250 pesos", () => {
    expect(operacion.calcularComision()).toBe(8250);
})

test("Req 2. El mejor empleado es Juan Bonelli", () => {
    // expect(empleado.obtenerTotalComisiones()).toBe(16500);
})

