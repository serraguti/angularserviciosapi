import { Injectable } from "@angular/core";

@Injectable()
export class ServiceComics {
    //inventamos un metodo para visualizar
    //como funciona
    getSaludo(): string {
        //al final del método, siempre debemos 
        //devolver algo del tipo que hemos indicado
        return "Hola, soy un servicio de martes";
    }
}