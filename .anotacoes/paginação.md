# Paginação na API

> Divide a devolução em páginas. Por exemplo, em uma página a api pode devolver 5 itens.

Instale a dependência:

```bash
npm install --save mongoose-paginate
```

Logo após, no seu model:

```js
const mongoosePaginate = require("mongoose-paginate");

// ...código

Ad.plugin(mongoosePaginate);
```

Passamos um plugin ao nosso Schema, que no caso é o mongoose paginate.

Já seu controller:

```js
const Ad = require('../models/Ad')

async index (req, res) {
  const ads = await Ad.paginate(
    {},
    {
      page: req.query.params || 1,
      limit: 20,
      sort: '-createdAt'
    }
  )

  return res.json(ads)
}
```

**Ad.paginate()**

- Aqui passamos dois parâmetros, o primeiro seria alguns filtros e o segundo são algumas configurações da nossa paginação:

  - _page_: propriedade que irá receber o valor da paginção via parâmetros na url, default é 1.

  - _limit_: quantidade de dados retornados em uma página.

  - _sort_: ordenação dos dados da página.

## Método populate

Insere informações de um relacionamento.

Se estivessimos usando o find() do mongoose passariamos somente um:

```js
const ads = Ad.populate("author");
```

Porém, como estamos usando o paginate, ele já tem uma propriedade populate na sua configuração:

```js
async index (req, res) {
  const ads = await Ad.paginate(
    {},
    {
      page: req.query.page || 1,
      limit: 20,
      populate: ['author'],
      sort: '-createdAt'
    }
  )

  return res.json(ads)
}
```
