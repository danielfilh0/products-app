<div align="center">
  <h1>Products App</h2>
  <p>CRUD de Produtos e Autenticação de Usuários</p>
</div>
<br>

## Funcionalidades
- Listar produtos com paginação
- Adicionar produtos
- Editar produtos
- Remover produtos
- Buscar produtos
- Validar formulários
- Autenticar usuários


## Tecnologias utilizadas

### Front-end
- React e Next.js
- Typescript
- React Hook Form
- Zod
- Tailwind CSS
- Radix UI (Components e icons)
- Jest e React Testing Library
- Consumo de API Rest
- Storybook

## Como executar

Antes de tudo, na sua máquina deverá ter:

- Node.js
- Git

Em seguida, execute os comandos abaixo:

```bash
$ cd products-app

$ mkdir public

$ npm install # ou yarn install

$ npm run dev # ou yarn dev
```

Para executar o storybook, execute o comando abaixo:
```bash
$ npm run storybook
```

## Observações

- O sistema consome uma API Rest para o carregamento de produtos e usuários. A docs se encontra neste <a href="https://dummyjson.com/">link</a>.
- Algumas funcionalidades como a renderização de botões e links para cadastro, edição e remoção de usuários só estão disponíveis se o usuário estiver autenticado.
- Para autenticação, utilizar os seguintes dados:
> Username: `kminchelle`

> Password: `0lelplR`

## Pontos de melhoria

- Componentizar botões usados na aplicação
- Deploy do Storybook
- Cobertura maior nos testes unitários
- Implementação de testes E2E
- Melhorar o SEO (Metatags, robots, etc...)
- Melhorar o feedback visual de alguns componentes e páginas, como por exemplo implementação de loadings
de carregamento e mensagens alertando o usuário que itens não foram carregados
