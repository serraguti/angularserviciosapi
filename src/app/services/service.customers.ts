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

    async getCustomersAsync(): Promise<Customer[]> {
        let request = "Customers";
        let url = environment.apicustomers + request;
        
        let response = await firstValueFrom(this._http.get<any>(url));
        return response.value;
    }
}