import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  inputCep: string ='';
  resultadoInput: any;
  historicoCep:any[] = [];

  constructor(private http: HttpClient){}
  buscarCep(cep:string){
    this.inputCep = cep;
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  salvarResultadoCep(cep:any){
    this.resultadoInput = cep;
    this.historicoCep.push(cep)
  }
}
