import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName = 'Thiago Miranda'
  guideName = 'Alexsander'
  dateToday = new Date('2021-12-08T18:30:00.000Z')
  class = 'Turma 7'
  urlImagem = 'https://picsum.photos/400/200'

  valorAtual: string = '';
  valorSalvo:string = '';  

  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'Thiago',
    idade: 29
  }

  cursos: string[] = ["Angular"];

  mostrarCursos: boolean = false;  

  aba: string = 'home';

  cursos2: string[] = ["Angular 2", "Java", "Phonegap"];

  meuFavorito: boolean = false;

  ativo: boolean = false;
  tamanhoFonte: number = 10;

  mudarAtivo(){
    this.ativo = !this.ativo;
  }

  onClick () {
    this.meuFavorito = !this.meuFavorito;
  }


  ngOnInit() {
    for(let i=0; i<this.cursos2.length; i++){
      let curso = this.cursos2[i];
    }
  }
  

  buttonClick() {
    alert('Botão clicado!')
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }
  
  title = 'firt-angular-app';
}

