import { Cliente } from "../classes/Cliente";
import { Empleado } from "../classes/Empleado";
import { Reserva } from "../classes/Estado/Reserva";
import { Inmobiliaria } from "../classes/Inmobiliaria";
import { Casa } from "../classes/Inmueble/Casa";
import { Operacion } from "../classes/Operacion/Operacion";
import { Venta } from "../classes/Operacion/Venta";
import { Zona } from "../classes/Zona";



// Inmobiliaria
const inmobiliaria = new Inmobiliaria();

// Zona
const zona = new Zona();
zona.setNombre("San Telmo")
zona.setValorAgregado(50000)

// Empleado
const empleado = new Empleado();
empleado.setDni("45235143");
empleado.setNombre("Juan Bonelli");
inmobiliaria.asignarEmpleado(empleado);

// Empleado
const empleado2 = new Empleado();
empleado2.setDni("45689360");
empleado2.setNombre("Julian Garcia");
inmobiliaria.asignarEmpleado(empleado2);

// Cliente
const cliente = new Cliente();
const cliente2 = new Cliente();

//Inmueble
const casa = new Casa(500000);
casa.setCantAmbientes(2);
casa.setMetrosCuadrados(36);
casa.asignarZona(zona);

const casa2 = new Casa(350000);
casa2.setCantAmbientes(3);
casa2.setMetrosCuadrados(36);
casa2.asignarZona(zona);


//Operacion
const operacion = new Venta();
operacion.asignarCliente(cliente);
operacion.asignarEmpleado(empleado);
operacion.asignarInmueble(casa);

const operacion2 = new Venta();
operacion2.asignarCliente(cliente2);
operacion2.asignarEmpleado(empleado2);
operacion2.asignarInmueble(casa2);

operacion.concretar();
operacion2.concretar();



test("Req 1. La comision de la venta fue de 8250 pesos", () => {
    expect(operacion.calcularComision()).toBe(8250);
})

test("Req 2. El empleado con mas operaciones CERRADAS es Juan Bonelli", () => {
    expect(inmobiliaria.obtenerEmpleadoConMasReservas().getDni()).toBe("45235143")
})

test("Req 2. El empleado con mas operaciones CONCRETADA es Juan Bonelli", () => {
    expect(inmobiliaria.obtenerEmpleadoConMasConcretadas().getDni()).toBe("45235143");
})


test("Req 2. El empleado con mas COMISIONES es Juan Bonelli", () => {
    expect(inmobiliaria.obtenerEmpleadoConMasComisiones().getDni()).toBe("45235143");
});

test("Req 3. Empleado 45689360 va a tener problemas con empleado 45235143", () => {
    expect(inmobiliaria.verificarConflictoEntreEmpleado(empleado, empleado2)).toBe(true);
});





