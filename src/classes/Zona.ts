export class Zona {
    private nombre: string;
    private valorAgregado: number;

    public getNombre() : string {
        return this.nombre;
    }

    public setNombre(nombre : string) {
        this.nombre = nombre;
    }

    public getValorAgregado(): number {
        return this.valorAgregado;
    }

    public setValorAgregado(valor: number) {
        this.valorAgregado = valor;
    }

    


}