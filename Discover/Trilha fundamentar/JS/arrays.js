// Manipulando Arrays

let techs = ["html", "css", "js"]

// Adicionar um item no fim
techs.push("nodejs")
// Adicionar um item no começo
techs.unshift("sql")
// Remover do fim
// techs.pop()
// Remover do começo
// techs.shift()
// Pegar somente alguns elementos do aray
// console.log(techs.slice(1, 3))
// Remover 1 ou mais itens em qualquer posição  do array
// techs.splice(1, 1)
// Encontrar a posição de um elemento no array
console.log(techs)
let index = techs.indexOf("css")
console.log(index)
techs.splice(index, 1)

console.log(techs)