const menuToggle = document.querySelector('.toggle');
      const showcase = document.querySelector('.showcase');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
      })

const menu = document.querySelector('.menu-text')

let currentYear = new Date().getFullYear().toString()

let span = document.createElement("span")
span.setAttribute("id", "year")
let spanText = document.createTextNode(currentYear)
span.appendChild(spanText)
menu.appendChild(span)
