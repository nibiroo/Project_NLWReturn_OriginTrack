/* Criando uma função */
function onScroll() {
  navigation.classList.add('scroll')
  if (scrollY == 0) {
    navigation.classList.remove('scroll')
  }
}
function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
/*Console.log -> manda alguma mensagem para o log da Dev Tools*/
