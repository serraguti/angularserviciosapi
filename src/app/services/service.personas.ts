import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "../models/persona";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServicePersonas {
    //en los servicios Api, debemos recuperar HttpClient
    constructor(
        private _http: HttpClient
    ) {}

    async getPersonasAsync(): Promise<Persona[]>{
        //necesitamos la url de nuestro servicio
        let url = "https://apipersonas2026a.azurewebsites.net/api/personas"
        //devolvemos el primer valor del get
        return firstValueFrom(
            //hacemos la petición con http
            this._http.get<Persona[]>(url)
        )
    }
}