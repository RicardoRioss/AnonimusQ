import  Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')




//Pegar todos os botões que existem com a class check
const checkButtons = document.querySelectorAll(".actions a.check")
/*checkButtons.forEach(button => {
  //adicionar a escuta
  button.addEventListener('click', event => {

    modaTitle.innerHTML = "Marcar como lida"
    //Abrir modal
    modal.open()
  })
})
*/
// otimizando o codigo 
checkButtons.forEach(button => {
  //adicionar a escuta
  button.addEventListener('click', handleClick)
})


//Quando o botão delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll('.actions a.delete')

/*deleteButton.forEach(button => {
  button.addEventListener("click", event =>{

    modaTitle.innerHTML = "Excluir essa pergunta"

    modal.open()
  })
})
*/
// otimizando o codigo 
deleteButton.forEach(button => {
  button.addEventListener('click',(event) => handleClick (event,  false))
})


function handleClick (event, check = true) {
  event.preventDefault()
  const text = check ? "Marcar como lida " : "Excluir"
  const slug = check ? "check" : "delete"
  const rooId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${rooId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text.toLocaleLowerCase()} esta pergunta?`
  modalDescription.innerHTML = ` Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?` 
  modalButton.innerHTML = `Sim,${text.toLocaleLowerCase()}`
  check ? modalButton.classList.remove("red") : modalButton.classList.add("red")//mudar a cord do botão
  //abrir modal
  modal.open()
}