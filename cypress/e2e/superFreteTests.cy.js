import CalculatePage from "../pages/calculatePage"
import ObjectFormat from "../fixtures/objectFormat"
import Weight from "../fixtures/weight"

describe('Testes SuperFrete', () => {

  const calculatePage = new CalculatePage()

  beforeEach(() => {
    cy.waitCalculatePageLoad()
  })

  it('Deve exibir calculo de frete com sucesso', () => {
    calculatePage.fillOriginPostCode('08090-284')
    calculatePage.selectObjectFormat(ObjectFormat.CAIXA_PACOTE)
    calculatePage.selectWeight(Weight["300G"])
    calculatePage.fillDimension({ height: '4', width: '16', depth: '24' })
    calculatePage.fillDestinationPostcode('05407-002')
    calculatePage.clickCalculatorButton()
    calculatePage.validateFreightCalculator()
  })

  it('Deve exibir alerta de erro quando não informar CEP origem', () => {
    calculatePage.selectObjectFormat(ObjectFormat.CAIXA_PACOTE)
    calculatePage.selectWeight(Weight["300G"])
    calculatePage.fillDimension({ height: '4', width: '16', depth: '24' })
    calculatePage.fillDestinationPostcode('05407-002')
    calculatePage.clickCalculatorButton()
    calculatePage.validateOriginPostCodeError()
  })

  it('Deve exibir alerta de erro quando não informar CEP destino', () => {
    calculatePage.fillOriginPostCode('08090-284')
    calculatePage.selectObjectFormat(ObjectFormat.CAIXA_PACOTE)
    calculatePage.selectWeight(Weight["300G"])
    calculatePage.fillDimension({ height: '4', width: '16', depth: '24' })
    calculatePage.clickCalculatorButton()
    calculatePage.validateDestinationPostCodeError()
  })

  it('Deve exibir alerta de erro quando informar dimensões inválidas', () => {
    calculatePage.fillOriginPostCode('08090-284')
    calculatePage.selectObjectFormat(ObjectFormat.CAIXA_PACOTE)
    calculatePage.selectWeight(Weight["300G"])
    calculatePage.fillDimension({ height: '0.1', width: '7', depth: '12' })
    calculatePage.fillDestinationPostcode('05407-002')
    calculatePage.clickCalculatorButton()
    calculatePage.validateHeightError()
    calculatePage.validateWidthError()
    calculatePage.validateDepthError()
  })


})