// setInterval irá rodar uma função N vezes depois de x milisegundos

const timeOut = 1000 //ms
const checking = () => console.log('checking!')

setInterval(checking, timeOut)