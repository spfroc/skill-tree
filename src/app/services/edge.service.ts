import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax'

@Injectable({
  providedIn: 'root'
})
export class EdgeService {

  constructor() { }


  public getEdges() {
    return ajax('/api/edges');
  }
}
