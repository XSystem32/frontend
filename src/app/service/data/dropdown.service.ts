import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Ordning, Server, WLSHost} from '../../junction/junction.component';
import {HttpClient} from '@angular/common/http';

export class Hosts {
  constructor(public id: number, public groupName: string, public parenGroupID: number, public parentOption: number) {
  }
}

export class Ordnings {
  constructor(public id: number, public groupName: string, public parenGroupID: number, public parentOption: number) {
  }
}

export class Servers {
  constructor(public id: number, public groupName: string, public parenGroupID: number, public parentOption: number) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  hosts: Observable<WLSHost[]>;
  ordnings: Observable<Ordning[]>;
  servers: Observable<Server[]>;

  constructor(private http: HttpClient) { }

  getHosts() {
    return this.hosts = this.http.get<WLSHost[]>('./assets/hosts.json');
  }

  getOrdnings(id: number) {
    return this.ordnings = this.http.get<Ordning[]>('./assets/ordnings.json');
  }

  getServers(id: number) {
    return this.servers = this.http.get<Server[]>('./assets/servers.json');
  }

}
