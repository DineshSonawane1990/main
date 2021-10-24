import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClusterService {

  constructor(
    private http: HttpClient
  ) { }

  getClusterData() {
    return this.http.get('../../../assets/json/cluster.json');
  }
}
