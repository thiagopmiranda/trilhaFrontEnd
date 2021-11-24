<p align="center">
  <a href="#principais-tags-html">Tags HTML</a> •
  <a href="#a-importância-do-html-semântico">HTML Semântico</a> •
  <a href="#o-que-é-acessibilidade-em-páginas-web">Acessibilidade em Páginas Web</a> •
  <a href="#a-importância-do-css">Importância do CSS</a> • 
  <a href="#diferença-entre-class-e-id">class e id</a> •   
  <a href="#como-podemos-fazer-a-inserção-do-css-na-página">Inserção do CSS na página</a> • 
  <a href="#o-que-é-encadeamento-e-agrupamento-de-seletores">Encadeamento e Agrupamento de Seletores</a> • 
  <a href="#o-que-é-box-model">Box-Model</a> • 
  <a href="#diferença-entre-margin-e-padding">Margin e Padding</a> • 
  <a href="#o-que-é-position">Position</a>
</p>

# Principais tags HTML

## Tags de comentários em HTML:

```
  <!-- Meu comentário em HTML -->
  <p>Olá Mundo</p> <!-- aqui é o meu paragrafo-->
```

---

## Tags HTML Estruturais:

- Tag Header:

```
  <header></header>
```

- Tag Main:

```
  <main></main>
```

- Tag Footer:

```
  <footer></footer>
```

- Tag Section:

```
  <section></section>
```

- Tag Article:

```
  <article></article>
```

- Tag Aside:

```
  <aside></aside>
```

- Tag Nav:

```
  <nav></nav>
```

- Tag Div:

```
  <div></div>
```

---

## Tags HTML de Conteúdo:

### Tags HTML de Título

```
  <h1></h1> - Título de Maior Valor Hierárquico
  <h2></h2>
  <h3></h3>
  <h4></h4>
  <h5></h5>
  <h6></h6> - Título de Menor Valor Hierárquico
```

### Tags HTML de Texto

- Tag Parágrafo:

```
  <p></p>
```

- Tag Span:

```
  <span></span>
```

- Tag Texto Pré-Formatado:

```
  <pre></pre>
```

- Tag Conteúdo em Negrito:

```
  <b></b>
```

- Tag Conteúdo em Itálico:

```
  <i></i>
```

- Tag Conteúdo em Itálico:

```
  <i></i>
```

- Tag Quebra de Linha:

```
  <br/>
```

- Tag Linha Horizontal:

```
  <hr/>
```

### Tag de Link HTML

```
  <a href="coloca o link aqui"></a>

  <p>Para acessar o Google, <a href="https://www.google.com">clique aqui.</a></p>

```

### Tags HTML de Multimídia

- Tag Imagem:

```
  <img src="imagens/imagem1.jpg" alt="imagem 1 da minha página">
```

- Tag Vídeo:

```
  <video controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.ogg" type="video/ogg">
    Seu navegador não possui suporte para Vídeos.
  </video>
```

- Tag Áudio:

```
  <audio controls>
    <source src="musica.ogg" type="audio/ogg">
    <source src="musica.mp3" type="audio/mpeg">
    Seu navegador não possui suporte para áudio.
  </audio>
```

- Tag Frame:

```
  <iframe src="https://www.homehost.com.br">
    <p>Seu navegador não possui suporte para iFrames.</p>
  </iframe>
```

### Tags HTML de Listas

- Tag Lista Ordenada:

```
  <p>Minha lista ordenada:</p>
  <ol>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ol>
```

- Tag Lista Não Ordenada:

```
  <p>Minha lista não ordenada:</p>
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>
```

### Tags HTML de Formulário

- Tag Input:

```
  <input type=”text” placeholder="" name="">
```

- Tag TextArea:

```
  <textarea>Cria uma área de texto aqui</textarea>
```

- Tag Estilos:

```
  <style></style> - Geralmente incluída no <head>
```

- Tag Scripts:

```
  <script></script> - Pode ser incluída em qualquer parte.
  Contudo, recomenda-se fortemente que seja inserida após o <footer>
```

---

# A Importância do HTML Semântico

O HTML semântico diz respeito a utilizar de forma correta as diversas tags
existentes da linguagem para mostrar o significado de cada parte do documento,
facilitando a leitura de mecanismos de busca (como o Google), mas principalmente
a leitura de pessoas que usam softwares de leitores de tela.

# O que é Acessibilidade em Páginas Web?

É a possibilidade e a condição de alcance, percepção e entendimento para a utilização,
em igualdade de oportunidades, dos serviços disponíveis na Web. Ou seja, é fazer com
que toda e qualquer pessoa com deficiência ou com capacidades (idosos) possam interagir
e contribuir com a Web.

# A importância do CSS

O CSS (Cascading Style Sheet ) é um componente essencial no processo de desenvolvimento web,
pois permite um controle modular sobre as páginas web, ajudando a vinculação de documentos para
que as mesmas sejam manipuladas de forma fácil. Basicamente ele redefine a apresentação do conteúdo
e indiretamente trabalha para um melhor desempenho das páginas web, tornando-as mais leves e ágeis.

# Diferença entre 'class' e 'id'

Ambos os termos são seletores. No entanto, convencionalmente afim de seguir padrões semânticos, utiliza-se
o `class` quando se deseja aplicar propriedades declaradas no CSS em mais de um elemento, ou seja generalizar
um estilo aplicado a um grupo de elementos. Já o `id` é utilizado quando queremos aplicar propriedades
declaradas no CSS em somente um único elemento, com o objetivo de individualizar ou diferenciar esse elemento.

# Como podemos fazer a inserção do CSS na página?

Há três tipos de inserção do CSS na página Web:

- CSS Interno: O CSS interno ou incorporado requer que você adicione a tags `<style>` na seção `<head>` do seu documento HTML.

```
<head>
  <style type="text/css">
  body {
      background-color: blue;
  }
  h1 {
      color: red;
      padding: 60px;
  }
  </style>
</head>
```

- CSS Inline: O CSS inline é usado para dar estilo a um elemento HTML específico. Para este estilo de CSS
  você somente vai precisar adicionar o atributo style para cada tag HTML, sem usar os seletores.

```
<body style="background-color:black;">

<h1 style="color:gray;padding:20px;">Tutorial</h1>
<p style="color:black;">Lorem ipsum</p>

</body>


```

- CSS Externo: Com o CSS externo, você vai linkar as páginas da internet com um arquivo .css externo,
  que você pode criar usando qualquer editor de texto no seu dispositivo.
  Basicamente você cria um novo arquivo .css com um editor de texto e adiciona regras de estilo:

```
.leftcol {
   float: left;
   width: 50%;
   background:#f245d5;
}
.midcol {
   float: left;
   width: 50%;
   background:#d1d1d1;
}
```

E na seção `<head>` do HTML, logo após a tag `<title>` você adiciona a referência para o seu arquivo .class

```
<link rel="stylesheet" type="text/css" href="style.css" />
```

# O que é Encadeamento e Agrupamento de Seletores?

São formas de trabalhar com as modificações de estilos no elemento(s) específico do HTML.
O Encadeamento trabalha com especifidade. Utilizamos quando queremos atribuir propriedades
a um elemento específico do HTML.

```
  strong em {
    color: blue
  }
```

Já o Agrupamento é quando se deseja atribuir as mesmas características a vários elementos.
Estes devem ser separados por vírgulas.

```
strong, em, span {
 color: red;
}
```

# O que é Box-Model?

É um modelo que descreve o conteúdo do espaço ocupado por um elemento. Cada
box possui 4 edges: Margin, Border, Padding e Content.

![box-model](https://user-images.githubusercontent.com/85966559/143275206-9ac7107e-b21c-4a48-908b-b5889f305e0e.png)

# Diferença entre Margin e Padding

Margin é o espaçamento fora do conteúdo, já o padding é utilizado para o espaçamento
dentro do conteúdo.
![margin-padding](https://user-images.githubusercontent.com/85966559/143275723-064c669e-74ff-4ca7-b732-65654db3352d.png)

# O que é Position?

É um propriedade do CSS que define como um elemento pode ser posicionado
no documento. Essa propriedade pode ser acompanhada de outras como, `top`,
`right`, `bottom` e `left`, que determinam como ficará a localização final
do objeto, permitindo seu deslocamento.

```
position: relative;
top: 40px; left: 40px;
```

- Valores do Position:
  static | relative | absolute | sticky | fixed
