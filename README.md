# Desafio SuperFrete

Este é um projeto de testes automatizados utilizando Cypress em Javascript para validar o cálculo de frete do SuperFrete.

## Estrutura de Pastas

```
desafio-superfrete
├───cypress
│   ├───e2e
│   ├───fixtures
│   ├───pages
│   └───support
├───cypress.config.js
└───package.json
```

- A pasta `e2e` contém os testes end to end.
- A pasta `fixtures` contém arquivos auxiliares de massa de teste.
- A pasta `pages` contém os elementos que vamos interagir nos testes da psata e2e.
- A pasta `support` contém os comandos e configurações que podem ser úteis para os testes.
- O arquivo `cypress.config.js` contém configurações globais do cypress.
- O arquivo `package.json` contém configurações do projeto desafio-superfrete.

## Configuração do Ambiente

O projeto utiliza o Cypress para automação de testes web. Para executar os testes, você precisa ter node/npm instalado.

Você pode fazer o download do Node.js no seguinte link: [https://nodejs.org/pt](https://nodejs.org/pt)

## Instalando as dependências

Para baixar as dependências necessárias para rodar o projeto, abra o terminal na raiz do projeto e execute o seguinte comando:

```
npm install
```

## Executando os Testes

Para executar os testes utilizando a interface do cypress, abra o terminal na raiz do projeto e execute o seguinte comando:

```
npm run cypress:open
```

Para executar os testes por linha de comando, abra o terminal na raiz do projeto e execute o seguinte comando:

```
npm run cypress
```