// clearTimeout cancelar um timeOut

const timeOut = 3000 //ms
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)