const element = document.querySelector('h1')

element.textContent = "Olá Devs!" // Retorna o texto COM formatações, mas sem os elementos html

element.innerText = "Olá Mundo!" // Retorna somente o texto, sem formatações ou elementos html

element.innerHTML = "Olá Devs <small>I'm pretty</small>" // Retorna o texto, COM formatações e COM elementos html


const elementInput = document.querySelector('input')

elementInput.value = "Valor que eu quiser" // Alterar o valor do Input


const header = document.querySelector('header')

header.setAttribute('id', 'header') // Adicionar atributo

console.log(header.getAttribute('id')) // Pegar conteudo do atributo

header.removeAttribute('id') // Remover atributo

