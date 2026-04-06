import { Component, resource } from '@angular/core';
import { CepService } from '../services/cep';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  cep: string = '';
  
  constructor(public cepService: CepService) {}
  
  buscar(){

    if(this.cep.length !== 8){
      alert("Ops! CEP está com erro, pois excede ou é menor que 8 dígitos!")
    }

     this.cepService.buscarCep(this.cep).subscribe({
     next: (resultado: any) => {
      if (resultado.erro) {
        alert('CEP não encontrado.');
        return;
      }
      this.cepService.salvarResultadoCep(resultado);
    }})
  }
}
