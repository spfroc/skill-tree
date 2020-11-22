import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(
    private http: HttpClient
  ) { }


  public getNodes() {
    return this.http.get('http://localhost:8000/api/nodes');
  }

  public add(data) {
    return this.http.post('http://localhost:8000/api/node/add', data);
  }
}
