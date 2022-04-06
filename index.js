const questions = document.querySelectorAll('.question')
const seta = document.querySelectorAll('.seta')

questions.forEach(function (item, index) {
  item.addEventListener('click', function () {
    const activeItem = document.querySelector('.active')
    if (activeItem) {
      activeItem.classList.remove('active')
    }

    item.classList.add('active')
  })
})
