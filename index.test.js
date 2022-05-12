const index = require('./index')

test('deve retornar numeral cinquenta em string', () => {
    var cinquentaEmRomanos = 'L'
    var cinquentaInteiroMontado = 50

    var cinquentaStringMontado = index.inteiroParaRomano(cinquentaInteiroMontado)

    expect(cinquentaStringMontado).toEqual(cinquentaEmRomanos)
})

test('deve retornar numeral um em String ', () => {
    var umEmRomanos = 'I'
    var umStringMontado = 1

    var umStringMontado = index.inteiroParaRomano(umStringMontado)

    expect(umStringMontado).toEqual(umEmRomanos)
})

test('deve retornar numeral cinco em String ', () => {
    var cincoEmRomanos = 'V'
    var cincoStringMontado = 5

    var cincoStringMontado = index.inteiroParaRomano(cincoStringMontado)

    expect(cincoStringMontado).toEqual(cincoEmRomanos)
})