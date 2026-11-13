import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Customer } from "../models/customer";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceCustomers {
    constructor(
        private _http: HttpClient
    ){}

    getCustomersAsync(): Promise<Customer[]>{
        let request = "Customers";
        let url = environment.apicustomers + request;
        return firstValueFrom(
            this._http.get<Customer[]>(url)
        )
    }
}