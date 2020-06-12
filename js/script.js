// function to select
const selectItem = (s) => document.querySelector(s)
// click to open
selectItem('.menu-icon').addEventListener('click', () =>
  selectItem('.nav-list').classList.add('open')
)
// click to close
selectItem('.close').addEventListener('click', () =>
  selectItem('.nav-list').classList.remove('open')
)