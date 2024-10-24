function toggleMode() {
const html = document.documentElement
html.classList.toggle('light')
const img = document.querySelector("#profile img")

if (html.classList.contains('light')) {
img.setAttribute ('src', './assets/avatar_white.png')
img.setAttribute ('alt', 'gato branco de óculos')
} else {
img.setAttribute ('src', './assets/Avatar.png')
img.setAttribute ('alt', 'desenho de um gato branco e fundo branco')
}
}