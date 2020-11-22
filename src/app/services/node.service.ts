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
    return this.http.get('/api/nodes');
  }

  public add(data) {
    return this.http.post('/api/node/add', data);
  }
}
