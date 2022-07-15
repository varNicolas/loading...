let menuOpener = document.getElementById('menu--opener');
let closedMenu = document.getElementById('closedMenu');
function openMenu (){
  closedMenu.style.display = 'none'
  menuOpener.style.display = 'block'
}
function closeMenu(){
  menuOpener.style.display = 'none'
  closedMenu.style.display = 'block'
}