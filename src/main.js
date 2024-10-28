const accordionBtn = document.querySelectorAll('.accordion-btn')

accordionBtn.forEach (accordionBtn => {
  accordionBtn.addEventListener("click", event => {
    accordionBtn.classList.toggle("active")
    const accordionBody = accordionBtn.nextElementSibling
    if(accordionBtn.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 16 + "px"
    }
    else {
      accordionBody.style.maxHeight = 0
    }
    accordionBtn.nextElementSibling.classList.toggle("p-2")
  })
})