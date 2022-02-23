## Qual a responsabilidade do package.json no projeto?

Ele é o local central para configurar e descrever como interagir e executar o aplicativo. Ele é usado pela CLI do npm (e yarn) para identificar o projeto e entender como lidar com as dependências do mesmo. É o arquivo package.json que permite ao npm iniciar o projeto, executar scripts, instalar dependências, publicar no registro do NPM e muitas outras tarefas úteis.

## Qual a responsabilidade do angular.json no projeto?

É um arquivo de configuração muito importante relacionado à aplicação angular. Ele define a estrutura do aplicativo e inclui todas as configurações associadas ao mesmo. Aqui, é possível especificar ambientes neste arquivo (desenvolvimento, produção).

## Qual a finalidade da tag <router-outlet></router-outlet>?

RouterOutlet é uma das diretivas de Router. Quando importamos AppRoutingModule em AppModule, ele nós permite adicioná-la dentro do arquivo HTML do nosso AppComponent, dessa forma podemos passar as nossas rotas para que ele possa interpreta-las e direcionar para o component correto.

## Qual a diferença entre as duas declarações de rotas a seguir? Qual delas é denominada de eager-load e lazy-load?

Uma delas possui um carregamento dos módulos antes do ínicio do aplicativo, já a outra os módulos seriam carregados sob demanda após o início do mesmo.

#### Declaração 1:

R= Eager Loading

```
const routes: Routes = [
  {  path: 'entries/new', component: EntryFormComponent },
];
```

#### Declaração 2:

R= Lazy Loading

```
const routes: Routes = [
  {  path: 'entries', loadChildren: () => import('./pages/entries/entries.module').then(m => m.EntriesModule) },
];
```

## Qual a importância da componentização?

Ela nos permite que o sistema final seja tratado como vários “minissistemas”, diminuindo sua complexidade e permitindo que cada componente empregado seja focado em apenas uma funcionalidade ou um conjunto de funcionalidades semelhantes. Deste modo, estas funcionalidades podem ser reutilizadas em diversas aplicações através do acesso ao componente.

## Quais componentes reaproveitáveis foram criados no projeto?

Os componentes reaproveitáveis criados no projeto foram o `base-resource-form`, `base-resource-list`, `bread-crumb`, `form-field-error`, `page-header` e o `server-error-messages`

## No arquivo bread-crumb.component.ts qual funcionalidade da linha a seguir:

É passar as informações da array de items de forma dinâmica para ser utilizada em um componente filho.

`@Input() items: Array<BreadCrumbItem> = [];`

## h) Com base no exercício anterior para qual finalidade a anotação a seguir é utilizada?

É uma propriedade que permite passar dados do componente filho para o componente pai.
`@Output()`

## Sobre a arquitetura proposta no curso, descreva os requisitos para se enquadrar em cada um dos níveis a seguir: core, pages e shared

Core -> Entram Components, Models, Serviços que são obrigatórios para o funcionamento do sistema e que seja carregado no projeto. (Exemplo a navbar, um footer, um guarda de rotas, um token service)

Pages -> São os módulos de páginas que serão exibidas para o usuário, composta por componentes, models e services também.

Shared -> Terá Components, Models, Services que porderão ser reutilizados por algum outro componente principal, no entanto não são obrigatórios.

## Qual o papel do arquivo in-memory-database.ts?

É um arquivo que contém o as informações de retorno do CRUD.

## Liste 5 métodos e 5 propriedades de um objeto do tipo FormControl e suas respectivas funcionalidades.

### Methods()

`setValue()` -> Define um novo valor para o controle de formulário.

`patchValue()` -> Corrige o valor de um controle.

`reset()` -> Redefine o controle de formulário, marcando-o `pristine` e `untouched`, e redefinindo o valor. O novo valor será o valor fornecido (se passado), `null` ou o valor inicial se `initialValueIsDefault` foi definido no construtor via FormControlOptions.

`registerOnChange()` -> Registre um ouvinte para eventos de alteração.

`registerOnDisabledChange()` -> Registre um ouvinte para eventos desabilitados.

### Propriedades

`defaultValue:` -> O valor padrão deste FormControl, usado sempre que o controle é redefinido sem um valor explícito.

## Explique o funcionamento da seguinte sentença:

É uma condicional que avalia a ação atual, se caso ela for do tipo edit, ela mapeia o lançamento pelo Id e subscreve o valor atual do novo lançamento. Caso ocorra algum tipo de erro, gera um alerta de 'Ocorreu um erro no servidor, tente mais tarde'.

```
if (this.currentAction == "edit ") {
  this.route.paramMap.pipe(
    switchMap(params => this.lancamentoService.getById(+params.get("id")))
  )
     .subscribe(
     (lancamento) => {
      this.lancamento = lancamento;
      this.lancamentoForm.patchValue(lancamento);
     },
     (error)  => alert('Ocorreu um erro no servidor, tente mais tarde')
    )
}
```

## A linha a seguir se refere a encapsulamento, polimorfismo, herança, abstração ou injeção de dependências?

Herança
`export class EntryFormComponent extends BaseResourceFormComponent<Entry> implements OnInit`

## A linha a seguir se refere a encapsulamento, polimorfismo, herança, abstração ouinjeção de dependências?

Injeção de Dependências

```
ngOnInit() {
  this.loadCategories();
  super.ngOnInit();
}
```

## A linha a seguir se refere a encapsulamento, polimorfismo, herança, abstração ouinjeção de dependências? Existe outra maneira?

Injeção de Dependências

```
@NgModule({
  providers: [
    EntryService
  ]
})
```
