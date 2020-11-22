import { Injectable } from '@angular/core';
import { Tree } from '../interfaces/tree';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  private tree: Tree
  constructor(
    private http: HttpClient
  ) { }


  public getTree() {
    return this.http.get('/api/tree');
  }
}
