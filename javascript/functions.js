var app = document.querySelector('#app')
var inputText = document.querySelector('input[type="text"]')
var ul = document.querySelector('.list')
var button = document.querySelector('button')

var valor0 = 0

function adiciona() {
    var valor = inputText.value
    let newUL = document.createElement("li")
    let newA = document.createElement("a")

    let textApaga = document.createTextNode('excluir')

    let newULtext = document.createTextNode(valor)

    newA.setAttribute('href', '#')
    newA.setAttribute('onclick', "apaga(" + valor0 + ")")
    newA.appendChild(textApaga)
    newUL.appendChild(newULtext)
    newUL.appendChild(newA)

    ul.appendChild(newUL)
    valor0++
}


function apaga(e) {

    let todosOsLiTodo = document.querySelectorAll('ul.list li')
    ul.removeChild(todosOsLiTodo[e])


}