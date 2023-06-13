function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  const alex = document.getElementById('experience').style.display = 'flex'

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-mayk.png")
    document.getElementById("aluno-professor").innerHTML = "Professor Rocketseat: Mayk Brito"
    document.getElementById("experience").style.display = "flex"
    document.getElementById("alex").style.display = "none"
    document.getElementById("mayk").style.display = "flex"
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.jpg")
    document.getElementById("aluno-professor").innerText = "Aluno Rocketseat: Alex Fabian"
    document.getElementById("experience").style.display = "none"
    document.getElementById("alex").style.display = "flex"
    document.getElementById("mayk").style.display = "none"
  }
}
