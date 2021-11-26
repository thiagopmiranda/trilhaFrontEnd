/* Abre e Fecha o Menu ao clicar no ícone hamburguer */
const nav = document.querySelector('nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Esconder menu ao clicar */
const items = document.querySelectorAll('nav ul li a')

for (const item of items) {
  item.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
