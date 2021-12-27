import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  template: '',
})
export class ComponentePaiComponent {
  @Input() numeroComponent: number = 0;

  isPar(valor: number): string {
    return valor % 2 === 0 ? 'par' : 'ímpar';
  }

  isPrime(num: number) {
    for (var i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1 ? 'é primo' : 'não é primo';
  }
}
