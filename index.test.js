const index = require('./index')

test('deve retornar numeral cinquenta em string', () => {
    const cinquentaEmRomanos = 'L'
    const cinquentaInteiroMontado = 50

    var retorno = index.inteiroParaRomano(cinquentaInteiroMontado)

    expect(retorno).toEqual(cinquentaEmRomanos)
})

test('deve retornar numeral um em romanos ', () => {
    const umEmRomanos = { I: 1 }
    const umStringMontado = 1

    var retorno = index.inteiroParaRomano(umStringMontado)

    expect(retorno).toEqual(umEmRomanos)
})

test('deve retornar numeral cinco em String ', () => {
    const cincoEmRomanos = 'V'
    const cincoStringMontado = 5
    
    var retorno = index.inteiroParaRomano(cincoStringMontado)

    expect(retorno).toEqual(cincoEmRomanos)
})

test('deve retornar numeral dez em stirng ', () => {
    const dezEmRomanos = 'X'
    const dezStringMontado = 10

    var retorno = index.inteiroParaRomano(dezStringMontado)

    expect(retorno).toEqual(dezEmRomanos)
})