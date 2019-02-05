# FindOne

> Método do mongoose para encontrar algum dado no mongodb

```js
const User = require("../models/User");

class UserController {
  async store(req, res) {
    const { email } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }
}

module.exports = new UserController();
```

- Aqui está uma validação de email. Mesmo com o campo email setado com "unique" no mongo, isso não será o suficiente para validar se existe emails duplicados. Nesse caso, estamos fazendo um **findOne()** passando como parâmetro o email a ser verificado e caso já exista ele retornará o status 400 em formato json com uma mensagem "error".

**create()**

- É importante lembrar que tudo na api tem que ser retornado em json, por que é isso que o front end estará esperando.
