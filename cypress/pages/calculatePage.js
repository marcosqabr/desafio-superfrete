class CalculatePage {

    fillOriginPostCode(postcode) {
        cy.get('#originPostcode').type(postcode)
    }

    selectObjectFormat(format) {
        cy.get('#object_format').click()
        cy.get(`[data-value="${format}"]`).click()
    }

    selectWeight(weight) {
        cy.get('#weight').click()
        cy.get(`[data-value="${weight}"]`).click()
    }

    fillHeight(height) {
        cy.get('#packageHeight').type(height)
    }

    fillWidth(width) {
        cy.get('#packageWidth').type(width)
    }

    fillDepth(depth) {
        cy.get('#packageDepth').type(depth)
    }

    fillDimension({ height, width, depth }) {
        this.fillHeight(height)
        this.fillWidth(width)
        this.fillDepth(depth)
    }

    fillDestinationPostcode(postcode) {
        cy.get('#destinationPostcode').type(postcode)
    }

    clickCalculatorButton() {
        cy.get('button').contains('CALCULAR FRETE COM DESCONTO').click()
    }

    validateFreightCalculator() {
        cy.get('#calculator-package-type-PAC-container div:nth-child(2) p').scrollIntoView().should('be.visible').contains('PAC')
        cy.get('#calculator-package-type-SEDEX-container div:nth-child(2) p').scrollIntoView().should('be.visible').contains('SEDEX')
        cy.get('#calculator-package-type-Mini\\ Envios-container div:nth-child(2) p').scrollIntoView().should('be.visible').contains('Mini Envios')
    }

    validateOriginPostCodeError() {
        cy.get('#originPostcode-helper-text').scrollIntoView().should('be.visible').contains('CEP de origem é obrigatório')
    }

    validateDestinationPostCodeError() {
        cy.get('#destinationPostcode-helper-text').scrollIntoView().should('be.visible').contains('CEP de destino é obrigatório')
    }

    validateHeightError() {
        cy.get('#packageHeight-helper-text').scrollIntoView().should('be.visible').contains('Altura mínima 0.4 cm.')
    }

    validateWidthError() {
        cy.get('#packageWidth-helper-text').scrollIntoView().should('be.visible').contains('Largura mínima 8 cm.')
    }

    validateDepthError() {
        cy.get('#packageDepth-helper-text').scrollIntoView().should('be.visible').contains('Comprimento mínimo 13 cm.')
    }

}

export default CalculatePage