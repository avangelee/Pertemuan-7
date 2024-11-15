const btn = document.querySelector(".btn")

btn.onclick = () => {
   document.documentElement.classList.toggle ("dark")
   document.documentElement.classList.toggle ("light")

   if (document.documentElement.classList.contains("dark")) {
    btn.innerHTML = `Light Mode <i class="fa-solid fa-sun"></i>`
   } else {
    btn.innerHTML = `Dark Mode <i class="fa-solid fa-moon"></i>`
   }
}