import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Junction} from '../../entities/junction';

@Injectable({
  providedIn: 'root'
})
export class JunctionsDataService {

  constructor(private http: HttpClient
  ) { }

  getAllJunctions() {
    return this.http.get<Junction[]>(`http://localhost:8080/junctions`);
  }

  deleteJunction(id) {
    return this.http.delete(`http://localhost:8080/junctions/${id}`);
  }

  retrieveJunction(id) {
    return this.http.get<Junction>(`http://localhost:8080/junctions/${id}`);
  }


  createJunction(junction: Junction) {
    return this.http.put(`http://localhost:8080/junctions/create/`, junction);
  }

}
