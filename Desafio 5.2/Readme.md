# Item 1: Reutilização de Componentes

# Reutilização de componentes

## Componente em aplicações Angular

Os componentes são o bloco de construção principal para aplicações angulares.

## Do que um componente é composto?

- Um modelo HTML que declara o que é renderizado na página
- Uma classe Typescript que define o comportamento
- Um seletor CSS que define como o componente é usado em um modelo
- Opcionalmente, estilos CSS aplicados ao modelo

## Qual é o comando utilizado para criar um componente utilizando Angular CLI?

`ng generate component <component-name>`, onde `component-name` é o nome do seu novo componente.

## Qual a importância da reutilização de componentes?

Ao criar componentes reutilizáveis você consegue otimizar o trabalho, gerar uma maior consistência em sua base, melhorar o fluxo de ajustes, cortar custos desnecessários, facilitar a colaboração, permitir escalonamento de projetos e acelerar o desenvolvimento.

## Qual a funcionalidade do selector no exemplo abaixo?

**Exemplo**:

```
 @Component({
   selector: 'app-component-overview',
  })
```

Escolher um seletor CSS

## Explique a funcionalidade de **templateUrl** e template nos exemplos abaixo equando devemos utilizar cada uma delas.

**Exemplo 1**:

```
@Component({
selector:'app-component',
templateUrl: './component.component.html'
})
```

É o caso mais usado. É um bloco HTML referenciado através de um arquivo externo.

**Exemplo 2**:

```
@Component({
selector:'app-component-overview',
template: '<h1>Hello World!<h1>'
})
```

Nesse caso o bloco de HTML é referenciado dentro do próprio componente.

## Explique a funcionalidade de **styleUrls** e **styles** nos exemplos abaixo equando devemos utilizar cada um deles.

**Exemplo 1**:

```
@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
  })
```

O `styleUrls` serve para declarar os estilos de um componente em um arquivo separado.

**Exemplo 2**:

```
@Component({
selector: 'app-component-overview',
template: '<h1>Hello World!</h1>',
styles: ['h1 { font-weight: normal; }']
})
```

O `styles` é uma propriedade que serve para declarar dentro do componente, os estilos que deseja usar.

# Item 2: Rotas

## Qual é o comando no Angular CLI para criar uma nova aplicação com rotas?

`ng new routing-app --routing --defaults`

## Qual é o comando no Angular CLI para criar um novo módulo com rotas?

`ng generate component second`

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Para que serve o método **navigate( )** da classe Router?

É utilizado para fazer a navegação via código. O parâmetro para o método `navigate()` é um array cujos elementos representam partes de uma URL.

## Para que serve o método isactive( ) da classe Router?

Serve para identificar em qual rota você está.

## Para que serve o arquivo `src/app/app-routing.module.ts`?

Serve para configurar o roteador em um módulo separado de nível superior que é dedicado ao roteamento e importado pela raiz `AppModule`.

## Para que serve a tag `<router-outlet></router-outlet>`?

É uma das diretivas do Router. Atua como um espaço reservado que o Angular preenche dinamicamente com base no estado atual do roteador. Dessa forma nós podemos passar as nossas rotas para que ele possa interpreta-las e direcionar para o component correto.

## Dê um exemplo de um botão chamando uma rota através de um método em angular

```
<button (click)="goToPage('/home')"></button>
```

## Dê um exemplo de um botão chamando uma rota sem chamar um método em angular

```
<nav>
  <button routerLink="/crisis-list">Crisis Center</button> |
  <button routerLink="/heroes-list">Heroes</button>
</nav>
```

## O que é Lazy Load? Dê um exemplo da definição de uma rota em angular utilizando Lazy Load

O Lazy Load é um modo de carregamento das rotas que ajuda a manter os tamanhos iniciais dos pacotes menores, o que, por sua vez, contribui para diminuir os tempos de carregamento.

A estrutura do arquivo do módulo de carregamento lento é a seguinte:
![1_3s8TZ3B5p4VdUQYrroxVtQ](https://user-images.githubusercontent.com/85966559/147185862-02b198f9-2df8-41ea-96b1-e62ff905bc6b.png)

No `src / app / app-routing.module.ts`

```
const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
```

No `src / app / customers / customers.module.ts`

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }
```

No `src / app / customers / customers-routing.module.ts`

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';


const routes: Routes = [
  {
    path: '',
    component: CustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
```

## O que é Eager Load? Dê um exemplo da definição de uma rota em angular utilizando Eager Load

É um mode de carregamento de rotas do qual seria carregado antes do aplicativo ser iniciado. Esta é a estratégia de carregamento de módulo padrão.

A estrutura do arquivo do módulo de carregamento antecipado é a seguinte:
![1_9I8R6QVgfY-BQGkFWrQ_Ag](https://user-images.githubusercontent.com/85966559/147185718-708092c1-8e0b-4df5-8b04-147784e18a9e.png)

No arquivo eager-home.component.html, adiciono rotas de navegação a seus dois componentes filhos. O código é mostrado a seguir:

```
<h3 class="eager-title">This is from Eager Loading Module</h3>

<div class="row">
  <div class="col-sm-4">
    <a routerLink="child1">Eager Child 1</a>
  </div>
  <div class="col-sm-4">
    <a routerLink="child2">Eager Child 2</a>
  </div>
</div>

<div>
  <router-outlet></router-outlet>
</div>
```

Em seguida, precisamos declarar o componente eager-home, bem como seus dois componentes filhos em eager-loading.module.ts.

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerHomeComponent } from './eager-home/eager-home.component';
import { EagerChild1Component } from './eager-home/eager-child1/eager-child1.component';
import { EagerChild2Component } from './eager-home/eager-child2/eager-child2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EagerHomeComponent,
    EagerChild1Component,
    EagerChild2Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class EagerLoadingModule { }
```

Para aplicar a estratégia de Eager Loading, primeiro, precisamos registrar todos os componentes que serão carregados avidamente no app-routing.module.ts com a estratégia **forRoot** .

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EagerHomeComponent } from './features/eager-loading-module/eager-home/eager-home.component';
import { EagerChild1Component } from './features/eager-loading-module/eager-home/eager-child1/eager-child1.component';
import { EagerChild2Component } from './features/eager-loading-module/eager-home/eager-child2/eager-child2.component';

const routes: Routes = [
  {path: '', redirectTo: 'eager-loading', pathMatch: 'full'},
  {path: 'eager-loading', component: EagerHomeComponent, children: [
    {path: '', redirectTo: 'child1', pathMatch: 'full'},
    {path: 'child1', component: EagerChild1Component},
    {path: 'child2', component: EagerChild2Component},
    {path: '**', redirectTo: 'child1'}
  ]},
  {path: '**', redirectTo: 'eager-loading'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Na segunda, precisamos importar o EagerLoadingModule no AppModule, para que seja carregado antes do início do aplicativo.

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerLoadingModule } from './features/eager-loading-module/eager-loading.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EagerLoadingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

---

# Item 3: Pipes

## Qual é a utilidade dos pipes em aplicações Angular?

São funções simples para aceitar um valor de entrada e retornar um valor transformado.

## Cite os 6 pipes que fazem parte do pacote inicial do Angular.

`DatePipe`, `UpperCasePipe`, `LowerCasePipe`, `CurrencyPipe`, `DecimalPipe`, `PercentPipe`

## Descreva a funcionalidade de cada um dos pipes citados acima e dê um exemplo da sua utilização, juntamente com o resultado em tela.

`DatePipe`: Formata um valor de data de acordo com as regras locais.

```
@Component({
 selector: 'date-pipe',
 template: `<div>
   <p>Today is {{today | date}}</p>
   <p>Or if you prefer, {{today | date:'fullDate'}}</p>
   <p>The time is {{today | date:'h:mm a z'}}</p>
 </div>`
})
// Get the current date and time as a date-time value.
export class DatePipeComponent {
  today: number = Date.now();
}
```

`UpperCasePipe`: Transforma o texto em maiúsculas.

```
{{ value_expression | uppercase }}
```

`LowerCasePipe`: Transforma o texto em minúsculas.

```
@Component({
  selector: 'lowerupper-pipe',
  template: `<div>
    <label>Name: </label><input #name (keyup)="change(name.value)" type="text">
    <p>In lowercase: <pre>'{{value | lowercase}}'</pre>
    <p>In uppercase: <pre>'{{value | uppercase}}'</pre>
  </div>`
})
export class LowerUpperPipeComponent {
  // TODO(issue/24571): remove '!'.
  value!: string;
  change(value: string) {
    this.value = value;
  }
}
```

`CurrencyPipe`: Transforma um número em uma string de moeda, formatada de acordo com as regras locais.

```
@Component({
  selector: 'currency-pipe',
  template: `<div>
    <!--output '$0.26'-->
    <p>A: {{a | currency}}</p>

    <!--output 'CA$0.26'-->
    <p>A: {{a | currency:'CAD'}}</p>

    <!--output 'CAD0.26'-->
    <p>A: {{a | currency:'CAD':'code'}}</p>

    <!--output 'CA$0,001.35'-->
    <p>B: {{b | currency:'CAD':'symbol':'4.2-2'}}</p>

    <!--output '$0,001.35'-->
    <p>B: {{b | currency:'CAD':'symbol-narrow':'4.2-2'}}</p>

    <!--output '0 001,35 CA$'-->
    <p>B: {{b | currency:'CAD':'symbol':'4.2-2':'fr'}}</p>

    <!--output 'CLP1' because CLP has no cents-->
    <p>B: {{b | currency:'CLP'}}</p>
  </div>`
})
export class CurrencyPipeComponent {
  a: number = 0.259;
  b: number = 1.3495;
}
```

`DecimalPipe`: Transforma um número em uma string com um ponto decimal, formatado de acordo com as regras de localidade.

```
@Component({
  selector: 'number-pipe',
  template: `<div>

    <p>
      No specified formatting:
      {{pi | number}}
      <!--output: '3.142'-->
    </p>

    <p>
      With digitsInfo parameter specified:
      {{pi | number:'4.1-5'}}
      <!--output: '0,003.14159'-->
    </p>

    <p>
      With digitsInfo and
      locale parameters specified:
      {{pi | number:'4.1-5':'fr'}}
      <!--output: '0 003,14159'-->
    </p>

  </div>`
})
export class NumberPipeComponent {
  pi: number = 3.14159265359;
}
```

`PercentPipe`: Transforma um número em uma string de porcentagem, formatada de acordo com as regras de localidade.

```
@Component({
  selector: 'percent-pipe',
  template: `<div>
    <!--output '26%'-->
    <p>A: {{a | percent}}</p>

    <!--output '0,134.950%'-->
    <p>B: {{b | percent:'4.3-5'}}</p>

    <!--output '0 134,950 %'-->
    <p>B: {{b | percent:'4.3-5':'fr'}}</p>
  </div>`
})
export class PercentPipeComponent {
  a: number = 0.259;
  b: number = 1.3495;
}
```

## O que são custom pipes?

É a maneira de criar Pipes personalizados. E são criados da seguinte maneira:

```
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'Pipename'})

export class Pipeclass implements PipeTransform {
   transform(parameters): returntype { }
}
```

Onde,
**'Pipename'** - este é o nome do pipe.

**Pipeclass** - Este é o nome da classe atribuída ao canal personalizado.

**Transform** - Esta é a função para trabalhar com o tubo.

**Parameters** - são os parâmetros que são passados para o tubo.

**Returntype** - este é o tipo de retorno do tubo.
