/*
    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transforamção de uma unidade para outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32
*/

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado!')
    } 
    
    // fluxo ideia, F -> C
    let updateDegree = Number(degree.match(/\d+/g).join('')); // RegExp
    let originDegreeSign = 'F'
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo, C -> F
    if(celsiusExists) {
        originDegreeSign = 'C'
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return updateDegree + originDegreeSign + " = " + formula(updateDegree) + degreeSign
}

try {
    console.log(transformDegree("50F"))
    console.log(transformDegree("10C"))
    console.log(transformDegree("50"))
} catch (error) {
    console.log(error.message)
}