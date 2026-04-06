import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  inputCep: string = '';
  resultadoInput: any;
  historicoCep: any[] = [];

  constructor(private http: HttpClient) { }

  buscarCep(cep: string) {
    const cepLimpo = cep.replace(/\D/g, '');
    return this.http.get<any>(`https://viacep.com.br/ws/${cepLimpo}/json/`);
  }

  salvarResultadoCep(cep: any) {
    this.resultadoInput = cep;
    this.historicoCep.push(cep)
  }
}
