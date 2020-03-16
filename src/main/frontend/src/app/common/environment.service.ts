import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class EnvironmentService {

    public rootapiUrl = '/krp/api/';
    constructor(private http: HttpClient) { }
    
    public hentSkannerUrl(): Observable<string> {
        return this.http.get<string>(this.rootapiUrl + `environment/hentSkannerIndbakkeUrl`);
    }
}