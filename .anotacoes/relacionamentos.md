# Relacionamentos no moongose

É muito simples relacinar dados do mongodb com o moongose, primeiro **passe um id** na propriedade type e logo após use a propriedade **ref** passando com qual model ele irá se relacionar:

```js
const moongose = require("mongoose");

const Ad = new moongose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: moongose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = moongose.model("Ad", Ad);
```

**moongose.Schema.Types.ObjectId**

- Cria um id no type

**ref: "User"**

- Aqui você passa o model com que ele irá se relacionar
