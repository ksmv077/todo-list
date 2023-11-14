const list = document.getElementById('list')
const input = document.getElementById('text')
const button = document.getElementById('button')


button.addEventListener('click', (e) => {
  e.preventDefault()
  const li = document.createElement('li')
  li.textContent = input.value
  list.append(li)
  input.value = ''

  const button2 = document.createElement('button')
  button2.textContent = 'x'
  li.append(button2)
  button2.addEventListener('click', (e) => {
    e.target.parentElement.remove()
  })

  li.className = 'lii'

  const chek = document.createElement('input')
  chek.type = 'checkBox'
  li.prepend(chek)

  chek.addEventListener('click', (e) => {
    e.target.parentElement.style.opacity = '0.5'
    button2.remove()
  })

})

document.body.style.backgroundColor = 'aqua'

