import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 

@Injectable({
    providedIn: 'root'
})
export class OrgService {

    constructor(
        private http: HttpClient
    ) { }

    getOrgData() {
        return this.http.get('../../../assets/json/org.json');
    }
}
