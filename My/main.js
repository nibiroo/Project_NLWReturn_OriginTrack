/* Como no html, ele carrega uma tag de cada vez, e no body está chamando um JS, ele não chegou até o fim para entender que tem um arquivo JS(sem impacto), e para correção disso, tem como adicionarmos um EventListener para a Window inteira ===== https://prnt.sc/79UrpMOyuMVD*/
window.addEventListener('scroll', onScroll)

/* Quando carregar o arquivo JS, executa a classe onScroll, pois caso eu acessasse direto o URL, por exemplo, index.html#services, ele teria que ter a class .scroll na nav */
onScroll()

/* Criando uma função */
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}
function showNavOnScroll() {
  navigation.classList.add('scroll')
  if (scrollY == 0) {
    navigation.classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
/*Console.log -> manda alguma mensagem para o log da Dev Tools*/

ScrollReveal({
  /* Revelará os objetos, de cima para baixa, com distancia de 30px, durando 700ms */
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
            #home,
            #home img, 
            #home .stats, 
            #services,
            #services header,
            #services .card,
            #about,
            #about header,
            #about .content`)
