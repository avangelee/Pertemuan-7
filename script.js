const btn = document.querySelector(".btn")

btn.onclick = () => {
   document.documentElement.classList.toggle ("dark")
   document.documentElement.classList.toggle ("light")
}