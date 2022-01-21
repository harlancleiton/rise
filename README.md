# Rise

## Tecnologias utilizadas

- [Node](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://www.fastify.io/)
- [BCrypt](https://github.com/dcodeIO/bcrypt.js)
- [Argon2](https://github.com/ranisalt/node-argon2)
- [Prisma](https://www.prisma.io/)
- [Jest](https://jestjs.io/en/)

# Execute o Projeto

Os comando apresentados abaixo utilizam o Yarn, mas podem ser facilmente alterados para Npm, veja mais em: https://classic.yarnpkg.com/lang/en/docs/migrating-from-npm/

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://classic.yarnpkg.com/lang/en/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## Clone o repositório

    $ git clone https://github.com/harlancleiton/rise
    $ cd rise

## Instale as dependências

    $ yarn install

## Defina as variáveis de ambiente

- Na raiz no projeto existe um arquivo chamado `.env.example` copie o conteúdo dele em um novo arquivo chamado `.env` e defina as variáveis de ambiente

### Executando o projeto

    yarn dev

### Executando os testes

    $ yarn test

# Execute o Projeto (Docker e Docker-compose)

### Pré-requisitos

Para utilizar o projeto com docker-compose é necessário instalar as ferramentas necessárias: [Docker](https://www.docker.com/) e [Docker-compose](https://docs.docker.com/compose/install/)

## Clone o repositório

    $ git clone https://github.com/harlancleiton/rise
    $ cd rise

## Docker-compose up

    $ docker-compose up -d

# Requisições HTTP

Por padrão, o servidor é executado na porta 3333, mas você pode mudar via variáveis de ambiente ou alterando nas configurações do projeto em `config/app.ts`.
Recomendo utilização do [Insomnia](https://insomnia.rest/download) ou [Postman](https://www.postman.com/) para realizar requisições HTTP.
Importe a coleção na sua ferramenta preferida: existe na raiz do projeto um arquivo `insomnia.json` e `postman.json`

## Insomnia Plugins

Alguns plugins foram utilizados no Insomnia, fique a vontade para informar outros valores nas requisições ou se preferir pode instalar os plugins necessários: [Insomnia Faker](https://insomnia.rest/plugins/insomnia-plugin-faker) e [Insomnia Documentos BR](https://insomnia.rest/plugins/insomnia-plugin-documents-br)
