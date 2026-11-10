import { Injectable } from "@angular/core";
import { Comic } from "../models/comic";

@Injectable()
export class ServiceComics {
    //inventamos un metodo para visualizar
    //como funciona
    getSaludo(): string {
        //al final del método, siempre debemos 
        //devolver algo del tipo que hemos indicado
        return "Hola, soy un servicio de martes";
    }

    getComic(): Comic {
        let comic = new Comic("Mortadelo y Filemon",
            "https://m.media-amazon.com/images/I/91VqoL0gIEL._AC_UF1000,1000_QL80_.jpg"
            , "Agentes de la Tia"
        )
        return comic;
    }
}