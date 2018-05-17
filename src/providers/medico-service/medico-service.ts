import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Utils } from '../../entity/Utils';
import { Medico } from '../../entity/Medico';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MedicoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MedicoServiceProvider {

  private medicoUrl: string;

  constructor(public http: HttpClient, public requestOptions: RequestOptions, public httpProvider: Http) {
    this.medicoUrl = Utils.getUrlBackend() + "medicos/";
  }

  create(medico: Medico): Observable<Medico> {
    return this.http.post(this.medicoUrl, medico);
  }

  update(medico: Medico): Observable<Medico> {
    return this.http.put(this.medicoUrl, medico);
  }

  find(id: number): Observable<Medico> {
    return this.httpProvider.get(`${this.medicoUrl}${id}`);
  }

  query(req?: any): Observable<any> {
    return this.http.get(this.medicoUrl);
  }

  public getMedicos() {
    return this.httpProvider.get(this.medicoUrl)
        .map(res => res.json());
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.medicoUrl}${id}`, { observe: 'response', responseType: 'text' });
  }

}
