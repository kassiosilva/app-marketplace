# Criando model com mongoose

O processo é bem simples:

```js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", UserSchema);
```

**mongoose.Schema({})**

- Método utilizado para criar os Schemas, que é uma estrutura de dados do documento. Aqui criaremos nossos "campos" no banco através de uma objeto passado como parâmetro.

- Em cada propriedade do seu schema, defina primeiramente o **type** do dado. Os tipo serão os nativos existentes do javascript.

- _unique_: valor único

- _lowercase_: sempre deixará o valor do campo em caixa baixa

- **createdAt**:

  - Guardará o horário e dia do save do registro

  - type: Date

    - formato nativo do javascript que retorna data e horário

  - default: Date.now

    - o valor padrão dele será a data atual do save do registro

Para encerrar, exporte o model passando o nome do mesmo e seu schema:

```js
module.exports = mongoose.model("User", UserSchema);
```
