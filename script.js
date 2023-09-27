// Toggle icon navbar

let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x")
  navbar.classList.toggle('active')
}

// scroll sections

let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY
    let offset = sec.offsetTop - 100
    let height = sec.offsetHeight
    let id = sec.getAttribute("id")

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active")
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active")
      })
      // Active sections for animation on scroll
      sec.classList.add('show-animate')
    }
  })

  let header = document.querySelector("header")

  header.classList.toggle("sticky", window.scrollY > 100)

  // Remove toggle icon and navbar when click navbar links (scroll)
   menuIcon.classList.remove("bx-x")
   navbar.classList.remove("active")

  //  animation footer on scroll
  let footer = document.querySelector('footer');

  footer.classList.add('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}

//  Hrefs dos projetos

const forca = document.getElementById("forca")
const devlinks = document.getElementById("devlinks")
const shorts = document.getElementById("shorts")
const gc = document.getElementById("gc")
const crud = document.getElementById("crud")
const portfolio = document.getElementById("portfolio")

forca.addEventListener("click", () => {
  window.location.href = "https://jogo-da-forca-coral.vercel.app" // Substitua com o URL desejado
})

devlinks.addEventListener("click", () => {
  window.location.href = "https://darioklein.github.io/Devlinks/" // Substitua com o URL desejado
})

shorts.addEventListener("click", () => {
  window.location.href = "https://github.com/DarioKlein/nlwIA" // Substitua com o URL desejado
})

gc.addEventListener("click", () => {
  window.location.href = "https://github.com/DarioKlein/TCC" // Substitua com o URL desejado
})

crud.addEventListener("click", () => {
  window.location.href = "https://github.com/DarioKlein/portfolio" // Substitua com o URL desejado
})

portfolio.addEventListener("click", () => {
  window.location.href = "https://github.com/DarioKlein/portfolio" // Substitua com o URL desejado
})
