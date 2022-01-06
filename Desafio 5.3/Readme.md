# Desafio 5.3 - Serviços

### Qual o propósito de `services` no angular?

Service é a função ou o objeto usado para organizar e/ou compartilhar estados de objetos e as regras de negócio da aplicação.

### Porque no Angular há uma distinção entre `components` e `services`?

O Angular distingue componentes de serviços para aumentar a modularidade e a capacidade de reutilização.

### Como as services são disponibilizadas em um component?

Através do recurso chamado _Dependendy Injection_(DI).

### Que tipo de tarefas uma service pode ter?

Retirar informações do servidor para entregá-las ao component.

### Verdadeiro ou Falso. Uma service precisa obrigatoriamente estar em pelo menos um módulo? Justifique sua escolha.

Verdadeiro. Pois através dele que o Component poderá fazer a comunicação para retirar as informações do Service.

### Verdadeiro ou Falso. Uma service é do tipo de padrão de projeto `Singleton`? Justifique sua escolha.

Falso. Nem todos service são do tipo padrão `Singleton` dentro do Angular. Você pode usá-lo em várias instâncias.

### Escreva uma service que deverá ter os seguintes métodos e em cada um deverá escrever uma implementação básica (pode ser usado Arrays):

export interface Usuario {
nome: string;
sobrenome: string;
idade: number;
userId: number;
}

- getUsers( ): <Usuario[]> {
  return [{
  nome: "Thiago",
  userId: 1,
  idade: 25,
  }]
  }

- getUserById(userId: number): <any> {

}

- setUsers(users: Usuario): <any> {

}

- deleteUser(userId: number): <any> { }

---

## A respeito de services, responda:

### O que é Injeção de Dependências?

É um padrão de design no qual uma classe solicita dependências de fontes externas, em vez de criá-los.
A injeção de dependência angular visa separar a implementação de serviços dos componentes.

### Verdadeiro ou Falso. Injeção de Dependências pode ser apenas de services? Justifique sua escolha.

Falso. Não precisa ser um serviço, pode ser uma função ou um valor, por exemplo.

### Verdadeiro ou Falso. O Angular quando vai instanciar uma classe de componente verifica se as injeções de dependência já não estão sendo usadas?Justifique sua escolha.

Verdadeiro. Quando o Angular descobre que um componente depende de um serviço, ele primeiro verifica se o injetor tem alguma instância existente desse serviço. Se uma instância de serviço solicitada ainda não existe, o injetor faz uma usando o provedor registrado e a adiciona ao injetor antes de retornar o serviço ao Angular.

---

## HTTP Client:

### O que é o protocolo HTTP?

O HTTP (Hypertext Transfer Protocol ou Protocolo de Transferência de Hipertexto em português) é um protocolo que especifica como será a comunicação entre um navegador e um servidor web.

### Cite outros tipos de comunicação com o backend e faça um breve resumo de cada.

- Através de conteúdo estático.
- Através de conteúdo dinâmico.
- Através de interatividade com jQuery, Javascript.
- Através de estrutura frontend integrada
- Aplicativo de SPA

### Que recursos o HTTP nos fornece?

- A capacidade de solicitar objetos de resposta digitados .
- Tratamento de erros simplificado .
- Recursos de testabilidade .
- Interceptação de solicitação e resposta .

### Para usar o HttpClient no Angular, como devemos fazer sua importação e injeção?

A importação é feita na maioria das vezes através na raiz `AppModule`, do qual importa o `HttpClientModule` para a mesma. A partir disso se pode injetar o `HttpClient` como um dependência de uma classe de aplicativo.

Exemplo:
**app / app.module.ts (trecho)** - Importação

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

**app / config / config.service.ts (trecho)** - Injeção

```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}
```

### Verdadeiro ou Falso. O HttpClient pode ser usado com RxJS? Justifique sua escolha.

Verdadeiro. Pois o HttpClient deve importar os símbolos observáveis e de operador RxJS que aparecem nos fragmentos.

### Cite os principais métodos HTTP e faça um breve resumo de cada.

**GET**
O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.

**HEAD**
O método HEAD solicita uma resposta de forma idêntica ao método GET, porém sem conter o corpo da resposta.

**POST**
O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.

**PUT**
O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.

**DELETE**
O método DELETE remove um recurso específico.

**CONNECT**
O método CONNECT estabelece um túnel para o servidor identificado pelo recurso de destino.

**OPTIONS**
O método OPTIONS é usado para descrever as opções de comunicação com o recurso de destino.

**TRACE**
O método TRACE executa um teste de chamada loop-back junto com o caminho para o recurso de destino.

**PATCH**
O método PATCH é utilizado para aplicar modificações parciais em um recurso.

### Verdadeiro ou Falso. Com o protocolo HTTP é possível dizer/setar o tipo de resposta do servidor backend? Justifique sua escolha.

Verdadeiro. Use-se o `HttpClient.get()` método para buscar dados de um servidor. O método assíncrono envia uma solicitação HTTP e retorna um Observable que emite os dados solicitados quando a resposta é recebida. O tipo de retorno varia com base nos valores `observe` e `responseType` que você passa para a chamada.

### Cite os tipos de retorno que uma requisição HTTP pode ter? Faça um breve resumo de cada.

1. Respostas de informação (100-199): Os códigos que se situam dentro do intervalo 100-199 significam que o servidor está a processar a requisição do browser, sendo puramente informativos e não tendo propriamente impacto em termos de SEO.

2. Respostas de sucesso (200-299): O HTTP Status Code 200 significa que está tudo a decorrer com normalidade com a página/website em questão e, como tal, não há razão para preocupações. É o mundo ideal de qualquer owner de um website ou analista de SEO. A requisição do browser para o servidor foi bem-sucedida e o carregamento da página a que o utilizador está a tentar aceder decorreu sem problemas.

3. Redirecionamentos (300-399): A página a que o utilizador está a tentar aceder vai redirecioná-lo para outra página.

4. Erros do cliente (400-499): Os chamados client errors (erros do cliente) correspondem ao status “Not Found”, o que significa que o site ou a página a que o utilizador está a tentar aceder não existe.

5. Erros do servidor (500-599): Embora a requisição do lado do cliente tenha sido válida, o servidor falhou a completá-la.

### Cite os principais status de uma requisição HTTP e faça um breve resumo de cada.

**100 Continue** – É enviado em algumas circunstâncias, quando um cliente envia uma solicitação contendo um corpo. A resposta indica que os cabeçalhos de solicitação foram recebidos e que o cliente deve continuar a enviar o corpo. O servidor retorna uma segunda resposta quando a solicitação foi concluída.
**200 OK** – Indica que a solicitação foi bem sucedida e que a resposta do corpo contém o resultado do pedido.
**201 Created** – É devolvido em resposta a uma solicitação PUT para indicar que o solicitação foi bem-sucedida.
**301 Moved Permanently** – Redireciona o navegador de forma permanente para uma URL diferente, que é especificada no cabeçalho Location. O cliente deve usar a nova URL no futuro, em vez do original.
**302 Found** – Redireciona o navegador temporariamente para uma URL diferente, que é especificada no cabeçalho Location. O cliente deve reverter para a URL original nas solicitações subseqüentes.
**304 Not Modified** – Instrui o navegador a usar a sua cópia em cache do recurso solicitado. O servidor usa os cabeçalhos da solicitação If-Modified-Since e If-None-Match para determinar se o cliente tem a versão mais recente do recurso.
**400 Bad Request** – Indica que o cliente apresentou uma solicitação HTTP inválida. Você provavelmente vai encontrar isso quando você tem modificar um pedido de certa maneira inválida, como pela colocação de um caractere de espaço na URL.
**401 Unauthorized** – Indica que o servidor requer autenticação HTTP antes do pedido ser atendido. O cabeçalho WWW-Authenticate contém detalhes sobre o tipo(s) de autenticação suportado.
**403 Forbidden** – Indica que ninguém está autorizado para acessar o recurso solicitado, independentemente de autenticação.
**404 Not Found** – Indica que o recurso solicitado não existe.
**405 Method Not Allowed** – Indica que o método utilizado no pedido é suportado para a URL especificado. Por exemplo, poderá receber esta código de status se você tentar usar o método PUT onde não é suportado.
**413 Request Entity Too Large** – Se você está buscando por vulnerabilidades de buffer overflow no código nativo, e, portanto, está enviando string de dados longas, isso indica que o corpo de seu pedido é muito grande para o
servidor manusear.
**414 Request URI Too Long** – É semelhante à resposta 413. Ela indica que a URL utilizadas no pedido é muito grande para o servidor de manusear.
**500 Internal Server Error** – Indica que o servidor encontrou um erro ao tentar cumprir com a solicitação. Isso normalmente ocorre quando você apresenta um input inesperado que causou um erro não tratado em algum lugar dentro do processamento da aplicação. Você deve analisar cuidadosamente o conteúdo completo
da resposta do servidor para quaisquer detalhes indicando a natureza do erro.
**503 Service Unavailable** – Normalmente indica que, embora o servidor we está funcionando e pode responder às solicitações, o aplicativo acessada através do servidor não está respondendo. Você deve verificar se este é o resultado de qualquer ação que você executou.

### Faça um exemplo de chamadas do tipo GET, POST, PUT, DELETE.

### Para que serve o cabeçalho em uma requisição HTTP?

Os cabeçalhos HTTP permitem que o cliente e o servidor passem informações adicionais com a solicitação ou a resposta HTTP.

### O que é um Interceptor e quais as suas aplicações?

É um pattern simples que nos permite interceptar, tratar e gerenciar requisições http, antes mesmo delas serem enviadas ao servidor.

### Quais cenários mais comuns podemos usar Interceptors?

- Autenticar usuários;
- Adaptar informações;
- Tratar erros do servidor.

---

## RxJS:

### O que é o RxJS?

É uma biblioteca para compor programas assíncronos e baseados em eventos usando sequências observáveis. Ele fornece um tipo de núcleo, o Observable , tipos de satélite (Observer, Schedulers, Assuntos) e operadores inspirados em Array # extras (mapear, filtrar, reduzir, todos, etc) para permitir o tratamento de eventos assíncronos como coleções.

### Qual a diferença de Promises e Observables?

Promise sempre são assíncronas, enquanto Observable pode ser tanto síncronas quanto assíncronas.
Promise sempre retornam o mesmo valor, enquanto Observable pode retornar um fluxo de valores, de nenhum a vários.
O Observable, pode ser aprimorado usando outras ferramentas dentro do RxJS, para tornar ele ainda mais poderoso, conseguindo definir fluxos sobre medida.

### O que significa ser baseado em eventos?

Significa que ele é baseado em ações

### O que é o padrão de projetos Observer?

É uma coleção de callbacks que sabem ouvir os valores entregues pelo Observable.

### O que é o padrão de projetos Iterator?

éé um padrão de design no qual um iterador é usado para percorrer um contêiner e acessar os elementos do contêiner. O padrão do iterador desacopla algoritmos de contêineres; em alguns casos, os algoritmos são necessariamente específicos do contêiner e, portanto, não podem ser separados.

### O que é programação funcional com coleções?

São um padrão de programação onde você organiza alguns cálculos como uma sequência de operações que se compõe tomando uma coleção como saída de uma operação e alimentando-a na próxima. (As operações comuns são filtrar, mapear e reduzir.) Esse padrão é comum na programação funcional e também em linguagens orientadas a objetos que possuem lambdas.

### Quais os conceitos básicos do RxJS para eventos assíncronos? Descreva todos e dê um exemplo de como utilizá-lo.

- Observável: representa a ideia de uma coleção invocável de valores ou eventos futuros.
- Observer: é uma coleção de callbacks que sabem ouvir os valores entregues pelo Observable.
- Assinatura: representa a execução de um Observable, é principalmente útil para cancelar a execução.
- Operadores: são funções puros que permitem um estilo de programação funcional de lidar com coleções com operações como map, filter, concat, reduce, etc.
- Assunto: é equivalente a um EventEmitter e a única forma de multicast de um valor ou evento para vários Observadores.
- Schedulers: são despachantes para a simultaneidade de controle centralizado, permitindo-nos para coordenar quando computação acontece no exemplo setTimeoutou requestAnimationFrameou outros.

### Quais são os operadores de criação?

**Operadores de criação**

- ajax
- bindCallback
- bindNodeCallback
- defer
- empty
- from
- fromEvent
- fromEventPattern
- generate
- interval
- of
- range
- throwError
- timer
- iif

### Ainda dentro de operadores de criação, explique melhor e dê um exemplo para os seguintes operadores:

- **ajax**: Ele cria um observável para uma solicitação Ajax com um objeto de solicitação com url, cabeçalhos, etc. ou uma string para uma URL.
  Exemplo: Usando ajax () para buscar o objeto de resposta que está sendo retornado da API.

```
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const obs$ = ajax(`https://api.github.com/users?per_page=5`).pipe(
  map(userResponse => console.log('users: ', userResponse)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);
```

- **from**: Cria um Observable a partir de um Array, um objeto semelhante a um array, uma Promise, um objeto iterável ou um objeto semelhante a um Observable.
  Exemplo: Converte uma matriz em um observável

```
import { from } from 'rxjs';

const array = [10, 20, 30];
const result = from(array);

result.subscribe(x => console.log(x));

// Logs:
// 10
// 20
// 30
```

- **fromEvent**: Cria um Observable que emite eventos de um tipo específico vindo de um determinado destino de evento.

Exemplo: Emite cliques que acontecem no documento DOM

```
import { fromEvent } from 'rxjs';

const clicks = fromEvent(document, 'click');
clicks.subscribe(x => console.log(x));

// Results in:
// MouseEvent object logged to console every time a click
// occurs on the document.
```

- **generate**: Permite que você crie um fluxo de valores gerado com um loop muito semelhante a um loop for tradicional.
  Exemplo: Use com funções de condição e iteração

```
import { generate } from 'rxjs';

const result = generate(0, x => x < 3, x => x + 1);

result.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Complete!')
});

// Logs:
// 0
// 1
// 2
// "Complete!"
```

- **of**: Converte os argumentos em uma sequência observável.
  Exemplo: Emita os valores 10, 20, 30

```
import { of } from 'rxjs';

of(10, 20, 30)
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);

// Outputs
// next: 10
// next: 20
// next: 30
// the end
```

- **interval**: Cria um Observable que emite números sequenciais a cada intervalo de tempo especificado, em um determinado `SchedulerLike`.
  Exemplo: Emite números crescentes, um a cada segundo (1000ms) até o número 3

```
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const numbers = interval(1000);

const takeFourNumbers = numbers.pipe(take(4));

takeFourNumbers.subscribe(x => console.log('Next: ', x));

// Logs:
// Next: 0
// Next: 1
// Next: 2
// Next: 3
```

- **throwError**: Cria um observável que criará uma instância de erro e enviará para o consumidor como um erro imediatamente após a assinatura.
  Exemplo: Crie um observável simples que criará um novo erro com um carimbo de data / hora e o registrará junto com a mensagem toda vez que você se inscrever nele.

```
import { throwError } from 'rxjs';

let errorCount = 0;

const errorWithTimestamp$ = throwError(() => {
   const error: any = new Error(`This is error number ${++errorCount}`);
   error.timestamp = Date.now();
   return error;
});

errorWithTimesptamp$.subscribe({
   error: err => console.log(err.timestamp, err.message)
});

errorWithTimesptamp$.subscribe({
   error: err => console.log(err.timestamp, err.message)
});

// Logs the timestamp and a new error message each subscription;

```

- **timer**: Cria um observável que esperará por um período de tempo especificado, ou data exata, antes de emitir o número 0.
  Exemplo: Aguarde 3 segundos e inicie outro observável

```
import { timer, of } from 'rxjs';
import { concatMapTo } from 'rxjs/operators';

// This could be any observable
const source = of(1, 2, 3);

const result = timer(3000).pipe(
  concatMapTo(source)
)
.subscribe(console.log);

```

### Quais os operadores de criação de associação?

**Operadores de criação de associação**

- combineLatest
- concat
- forkJoin
- merge
- partition
- race
- zip

### Ainda dentro de operadores de criação de associação, explique melhor e dê um exemplo para os seguintes operadores:

- **concat**: Cria uma saída Observable que emite sequencialmente todos os valores do primeiro Observable fornecido e, em seguida, passa para o próximo.
  Exemplo: Concatene um cronômetro contando de 0 a 3 com uma sequência síncrona de 1 a 10

```
import { concat, interval, range } from 'rxjs';
import { take } from 'rxjs/operators';

const timer = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(timer, sequence);
result.subscribe(x => console.log(x));

// results in:
// 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10

```

- **forkJoin**: Aceita um `Array` de `ObservableInput` ou um dicionário `Object` de `ObservableInput` e retorna um `Observable` que emite uma matriz de valores na mesma ordem exata da matriz passada ou um dicionário de valores na mesma forma do dicionário passado.
  Exemplo: Use forkJoin com um dicionário de entradas observáveis

```
import { forkJoin, of, timer } from 'rxjs';

const observable = forkJoin({
  foo: of(1, 2, 3, 4),
  bar: Promise.resolve(8),
  baz: timer(4000),
});
observable.subscribe({
 next: value => console.log(value),
 complete: () => console.log('This is how it ends!'),
});

// Logs:
// { foo: 4, bar: 8, baz: 0 } after 4 seconds
// "This is how it ends!" immediately after

```

- **merge**: Cria uma saída `Observable` que emite simultaneamente todos os valores de cada entrada `Observable` fornecida.
  Exemplo: Combine dois observáveis: intervalo de 1s e cliques

```
import { merge, fromEvent, interval } from 'rxjs';

const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Quais os operadores de transformação?

**Operadores de transformação**

- buffer
- bufferCount
- bufferTime
- bufferToggle
- bufferWhen
- concatMap
- concatMapTo
- exhaust
- exhaustMap
- expand
- groupBy
- map
- mapTo
- mergeMap
- mergeMapTo
- mergeScan
- pairwise
- partition
- pluck
- scan
- switchScan
- switchMap
- switchMapTo
- window
- windowCount
- windowTime
- windowToggle
- windowWhen

### Ainda dentro de operadores de transformação, explique melhor e dê um exemplo para os seguintes operadores:

- **concatMap**: Projeta cada valor de origem para um Observable que é mesclado na saída Observable, de maneira serializada, esperando que cada um seja concluído antes de mesclar o próximo.
  Exemplo: Para cada evento de clique, marque a cada segundo de 0 a 3, sem simultaneidade

```
import { fromEvent, interval } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  concatMap(ev => interval(1000).pipe(take(4)))
);
result.subscribe(x => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3

```

- **map**: Aplica uma determinada projectfunção a cada valor emitido pela fonte Observável e emite os valores resultantes como um Observável.
  Exemplo: Mapeie cada clique para a posição clientX desse clique

```
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const positions = clicks.pipe(map(ev => ev.clientX));
positions.subscribe(x => console.log(x));

```

- **mapTo**: Emite o valor constante fornecido na saída Observable sempre que a fonte Observable emite um valor.
  Exemplo: Mapeie cada clique para a string 'Hi'

```
import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const greetings = clicks.pipe(mapTo('Hi'));
greetings.subscribe(x => console.log(x));
```

- **mergeMap**: Projeta cada valor de origem para um Observável que é mesclado na saída Observável.
  Exemplo: Mapeie e nivele cada letra para um tique-taque observável a cada 1 segundo

```
import { of, interval } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

const letters = of('a', 'b', 'c');
const result = letters.pipe(
  mergeMap(x => interval(1000).pipe(map(i => x+i))),
);
result.subscribe(x => console.log(x));

// Results in the following:
// a0
// b0
// c0
// a1
// b1
// c1
// continues to list a,b,c with respective ascending integers
```

- **mergeMapTo**: Projeta cada valor de origem para o mesmo Observable, que é mesclado várias vezes na saída Observable.
  Exemplo: Para cada evento de clique, inicie um intervalo observável marcando a cada 1 segundo

```
import { fromEvent, interval } from 'rxjs';
import { mergeMapTo } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(mergeMapTo(interval(1000)));
result.subscribe(x => console.log(x));
```

- **switchMap**: Projeta cada valor de origem para um Observável que é mesclado na saída Observável, emitindo valores apenas do Observável projetado mais recentemente.
  Exemplo: Gere um novo observável de acordo com os valores observáveis de origem

```
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)));
switched.subscribe(x => console.log(x));
// outputs
// 1
// 1
// 1
// 2
// 4
// 8
// ... and so on
```

- **switchMapTo**: Projeta cada valor de origem para o mesmo Observable, que é achatado várias vezes `switchMap` na saída Observable.
  Exemplo: Execute novamente um intervalo observável em cada evento de clique

```
import { fromEvent, interval } from 'rxjs';
import { switchMapTo } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(switchMapTo(interval(1000)));
result.subscribe(x => console.log(x));
```
