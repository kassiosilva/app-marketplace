# Operadores de consulta de operação

**\$gte**

Faz uma comparação, traz todos os dados que forem maiores ou igual(>=) a valor

```js
filters.price.$gte = req.query.price_min;
```

**\$lte**

Faz uma comparação, traz todos os dados que forem maiores ou igual(>=) a valor

```js
filters.price.$lte = req.query.price_max;
```

**RegExp()**

Uma expressão regular, verifica se a palavra especificada existe em algum lugar no value. Passamos dois parâmetros, o primeiro seria a palavra a ser comparada e o segundo seria transformar essa expressão regular em Case Insensitive(parâmetro **i**), ou seja, a palavra a ser comparada pode ser tanto maiúsculo como minúsculo que lá no banco de dados não irá haver essa diferenciação.
