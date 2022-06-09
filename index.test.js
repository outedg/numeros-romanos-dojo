const index = require('./index')

test('deve retornar numeral cinquenta em string', () => {
    const cinquentaEmRomanos = 'L'
    const cinquentaInteiroMontado = 50

    var retorno = index.inteiroParaRomano(cinquentaInteiroMontado)

    expect(retorno).toEqual(cinquentaEmRomanos)
})

test('deve retornar numeral um em romanos ', () => {
    const umEmRomanos = 'I'
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

test('deve retornar numeral dez em String ', () => {
    const dezEmRomanos = 'X'
    const dezStringMontado = 10

    var retorno = index.inteiroParaRomano(dezStringMontado)

    expect(retorno).toEqual(dezEmRomanos)
})

test('deve retornar numeral cem em String ', () => {
    const cemEmRomano = 'C'
    const cemStringMontado = 100

    var retorno = index.inteiroParaRomano(cemStringMontado);

    expect(retorno).toEqual(cemEmRomano)
})

test('deve retornar numeral quinhentos em String', () => {
    const quinhentosEmRomano = 'D'
    const quinhentosStringMontado = 500

    var retorno = index.inteiroParaRomano(quinhentosStringMontado)

    expect(retorno).toEqual(quinhentosEmRomano)

})

test('deve retornar numeral mil em String' , () => {
    const milEmRomano = 'M'
    const milStringMontado = 1000

    var retorno = index.inteiroParaRomano(milStringMontado)

    expect(retorno).toEqual(milEmRomano)
})

test('deve retornar numeral dois em String', () => {
    const doisEmRomano = 'II'
    const doisStringMontado = 2

    var retorno = index.inteiroParaRomano(doisStringMontado)

    expect(retorno).toEqual(doisEmRomano)
})