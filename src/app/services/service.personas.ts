import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "../models/persona";
import { firstValueFrom } from "rxjs";
import { Global } from "../global";

@Injectable()
export class ServicePersonas {
    //en los servicios Api, debemos recuperar HttpClient
    constructor(
        private _http: HttpClient
    ) {}

    async getPersonasAsync(): Promise<Persona[]>{
        //necesitamos la url de nuestro servicio
        let request = "api/personas";
        let url = Global.apipersonas + request
        //devolvemos el primer valor del get
        return firstValueFrom(
            //hacemos la petición con http
            this._http.get<Persona[]>(url)
        )
    }
}