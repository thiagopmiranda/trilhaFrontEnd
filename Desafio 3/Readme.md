<p align="center">
  <a href="#o-que-é-FlexBox">FlexBox</a> •
  <a href="#propriedade-do-eixo-principal">Eixo Principal</a> •
  <a href="#propriedade-do-eixo-transversal">Eixo Transversal</a> •
  <a href="#o-que-é-um-flex-container">Flex Container</a> • 
  <a href="#o-que-é-um-flex-item">Flex Item</a> •   
  <a href="#como-funciona-o-flex-wrap">Flex-Wrap</a> • 
  <a href="#como-é-feita-a-expansão-encolhimento-e-tamanho-dos-elementos-flex">Expansão, Encolhimento e Tamanho</a> • 
  <a href="#como-é-feito-o-alinhamento-justificação-e-distribuição-de-espaço-livre-entre-os-elementos">Alinhamento, Justificação e Distribuição</a> 
</p>

---

# O que é FlexBox?

É um modelo de _layout_ **Unidimensional** e um método capaz de organizar espacialmente os elementos de uma interface, além de possuir capacidades avançadas de alinhamento. Quando se refere a ele sendo unidimensional, enfatiza-se o fato que o mesmo lida com o _layout_ em uma dimensão por vez, seja uma linha ou coluna.

---

# Propriedade do Eixo Principal

O Eixo Principal é definido atráves da propriedade `flex-direction`. Essa propriedade define a direção do eixo principal e pode assumir 4 valores possíveis:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Caso o valor escolhido for `row` ou `row-reverse` (linha ou linha reversa), o Eixo Principal irá se mover ao longo da linha, ou seja, na **direção inline**.

![Basics1](https://user-images.githubusercontent.com/85966559/143450358-7c990476-8bf3-4047-9da5-d09887fee919.png)

Agora, se o valor escolhido for `column` ou `column-reverse`, o Eixo Principal se moverá do topo até o fim da página, na **direção block**.

![Basics2](https://user-images.githubusercontent.com/85966559/143450672-782dd337-3934-4aa4-9213-3761f77cdba0.png)

---

# Propriedade do Eixo Transversal

O Eixo Transversal é **perpendicular** ao eixo principal. Dessa forma, se a propriedade `flex-direction` estiver definha nas linhas (`row` ou `row-reverse`), o Eixo Transversal estará na direção das colunas (`column` ou `column-reverse`).

![Basics3](https://user-images.githubusercontent.com/85966559/143451166-aaa3d7b0-2f84-482a-b4fc-ffc0a4e337ba.png)

Mas caso o eixo principal for definido nas colunas (`column` ou `column-reverse`), então o Eixo Transversal estará na direção das linhas (`row` ou `row-reverse`).

![Basics4](https://user-images.githubusercontent.com/85966559/143451463-9f1a9dd1-4ed8-46d3-b8df-f9f6c0c102ea.png)

---

# O que é um Flex Container?

É a área de um documento que faz uso do _flexbox_. Para criação dessa estrutura, é definido o valor da propriedade `display` do elemento representado pelo Container como `flex` ou `inline-flex`. Dessa maneira, os elementos-filhos desse container, ou seja, os elementos que estão dentro do mesmo, irão se tornar do tipo _flex_.

![1_0HBVarU7N_IalfZqMwxGAA](https://user-images.githubusercontent.com/85966559/143455909-6938fee0-c457-45d2-9bb8-17e3e23345da.png)

# O que é um Flex Item?

Nada mais é do que a denominação dos elementos que estão dentro do Flex Container.

![artigos-css-flexbox-itens-alturas-iguais](https://user-images.githubusercontent.com/85966559/143454296-0608df31-8b25-4f14-b24d-2a20a6560f3e.png)

# Como funciona o Flex-wrap?

A propriedade `flex-wrap` é utilizada para definir se haverá quebra ou não de linha quando os itens de um flex container forem muito grandes para serem exibidos numa linha apenas.
O valor inicial do `flex-wrap` é `nowrap`, ou seja, não permite quebra de linha. Essa configuração obriga os flex itens a se alinharem todos ao longo do eixo principal.
Caso não haja espaço suficiente para que todos eles caibam no eixo principal, eles irão tentar diminuir até o tamanho de seu conteúdo para caber. Se mesmo assim não for mais possível diminuir e não couberem todos em uma linha, irão vazar para fora do container.

![flex-wrap](https://user-images.githubusercontent.com/85966559/143464585-5b114763-fc0c-4cf8-8dc2-de472404f5c3.png)

Outro valor possível ao `flex-wrap` é `wrap`, fazendo com que os itens não mais encolham para caber, mas sim, quebrem a linha quando forem muito grandes para serem exibidos numa linha.

![wrap](https://user-images.githubusercontent.com/85966559/143464943-dab67ef5-e3e8-4127-844c-b449d1c07926.png)

# Como é feita a Expansão, Encolhimento e Tamanho dos elementos Flex?

Dentro de um Flex Container, pode haver **espaço disponível** após os flex items se "acomodarem". Caso houver necessidade que esses elementos cresçam proporcionalmente, ou não, e preencham o espaço disponível, alguns métodos fazem com que eles se distribuam nesse tal espaço.

![Basics7](https://user-images.githubusercontent.com/85966559/143483245-20abda9f-6937-4989-a026-a89fd97e2ba8.png)

- **Tamanho:** A propriedade `flex-basis` define o tamanho inicial dos elementos, em unidades de _pixel_, antes que o espaço que sobrou seja redistribuído. O valor inicial desta propriedade é `auto`. De modo que caso não haja um tamanho padrão dentre os elementos, a dimensão dos seus conteúdos (imagem, texto, etc) serão passadas como parâmetro para a propriedade `flex-basis`.

![flexbasis](https://user-images.githubusercontent.com/85966559/143484670-41de9e86-e5a1-44d6-806b-cab8bf8d6148.png)

- **Expansão:** A expansão no elemento flex é feito atráves da propriedade `flex-grow`, a qual define que os elementos _flex_ podem crescer ao longo do eixo principal, a partir do valor mínimo estabelcido no `flex-basis`. Isso ocasionará com que o elemento se estique e ocupe qualquer espaço disponível nesse eixo ou uma proporção dele, caso os demais flex items também possam crescer.
  Desse modo, ao atribuir o valor 1 à propriedade `flex-grow`, o espaço disponível no flex container será igualmente distribuído entre todos os elementos, no sentido do eixo principal.
  Mas também, podemos atribuir o valor 2 a um dos elementos e aos demais 1, fazendo com que duas parte sejam dadas ao elemento de valor 2 e uma parte apenas para os elementos com valor 1, em relação ao espaço disponível no flex container.

![flexgrow](https://user-images.githubusercontent.com/85966559/143484836-ce812813-a46a-45d9-be5c-8c7eeb11d0c7.png)

- **Encolhimento:** A propriedade `flex-shrink` controla a redução dos elementos em relação ao espaço dentro do flex container. Caso haja necessidade, o valor atribuido ao `flex-shrink` pode reduzir a largura do elemento a um valor menor do que o definido na propriedade `flex-basis`. Assim como o flex-grow, diferentes valores podem ser atribuídos aos elementos do flex container, onde o valor inteiro maior irá diminuir mais do que os demais que possuem valores menores

![flexshrink](https://user-images.githubusercontent.com/85966559/143484849-91799c10-09a4-46a5-bcca-802cbf005a25.png)

⚠️ Usualmente as propriedades `flex-basis`, `flex-grow` e `flex-shrink` são combinadas através da propriedade de abreviação `flex`. A abreviatura `flex` possibilita definir os três valores na seguinte ordem: `flex-grow`, `flex-shrink`, `flex-basis`.

```
.box {
  display: flex;
}

.one {
  flex: 1 2 auto;
}

1- representa o valor do flex-grow
2- representa o valor do flex-shrink
auto - representa o valor do flex-basis

```

# Como é feito o Alinhamento, Justificação e Distribuição de espaço livre entre os elementos?

Um atributo chave do _flexbox_ é a capacidade de **alinhar** e **justificar** os elementos _flex_ nos eixos principal e transversal e **distribuir** o espaço entre eles.

- **Justify-Content:** Essa propriedade `justify-content` define o alinhamento dos itens ao longo do **eixo principal**. E pode assumir os seguintes valores:

  - `flex-start` (padrão): os itens ficam junto no começo da linha
  - `flex-end`: os itens ficam juntos no final da linha
  - `center`: os itens ficam centralizados na linha
  - `space-between`: os itens são distribuídos igualmente no espaço disponível. O primeiro item fica no começo da linha e o último fica no final.
  - `space-around`: os itens são distribuídos igualmente no espaço disponível ao redor deles.
  - `space-evenly`: os itens são distribuídos igualmente no espaço disponível.

![pasted image 0](https://user-images.githubusercontent.com/85966559/143494607-7150a413-96ba-4ae4-9ceb-32ca6153a659.jpg)

- **Align-Items**: Essa propriedade `align-items` define o alinhamento dos itens perpendicularmente em relação ao **eixo principal**. E pode assumir os seguintes valores:

  - `stretch` (padrão): estica os elementos para preencherem o container.
  - `flex-start`: os itens ficam junto no começo do eixo perpendicular
  - `flex-end`: os itens ficam juntos no final do eixo perpendicular
  - `center`: os itens ficam centralizados no eixo perpendicular
  - `baseline`: parecido com o center, mas usando o alinhamento a partir da primeira letra do texto de cada item.

![pasted image 0](https://user-images.githubusercontent.com/85966559/143495080-fcc5fdc1-9e4e-4cb4-953e-a88e7a224874.jpg)

- **Align-Content**: Essa propriedade `align-content` alinha as linhas do flex container. Por alinhas as linhas, esta propriedade só possui efeito quando há mais de uma linha. E pode assumir os seguintes valores:

  - `stretch` (padrão): As linhas são uniformemente distribuídas ao longo do eixo transversal, preenchendo todo o espaço disponível.
  - `flex-start`: As linhas são postas no começo do eixo transversal.

- `flex-end`: As linhas são alocadas no final do eixo transversal.
- `center`: As linhas são alinhadas no meio do eixo transversal.
- `space-between`: A primeira linha fica no começo do eixo transversal e a última no fim, as restantes ficam alinhadas entre si no meio.
- `space-around`: As linhas são distribuídas uniformemente dentro do eixo transversal, sendo o espaçamento de cada uma adjacente igual. O espaço vazio antes da primeira e depois da última linha é igual a metade do espaço entre cada par de linhas adjacentes.
- `space-evenly`: Parecida com as anteriores, as linhas são colocadas no eixo transversal com espaçamentos equivalentes entre si.

![pasted image 0](https://user-images.githubusercontent.com/85966559/143495767-efcda49c-d97e-4766-850a-c854c456f5c2.jpg)
