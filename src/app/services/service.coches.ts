import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Coche } from "../models/coche";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceCoches {
    constructor(
        private _http: HttpClient
    ){}

    async getCochesAsync(): Promise<Coche[]>{
        let request = "api/coches"
        let url = environment.apicoches + request;
        return firstValueFrom(
            this._http.get<Coche[]>(url)
        )
    }
}