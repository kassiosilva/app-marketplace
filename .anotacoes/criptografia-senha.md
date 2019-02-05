# Criptografando a senha

No seu model, podemos disparar hooks antes de uma ação acontecer:

```js
UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 8);
});
```

**UserSchema.pre**

- Serve para disparar hooks, como parâmetros passamos a ação a ser disparada e a function(a function tem que estar sem ser no formato de arrow function, pois o mongoose já nos trás dentro do this todas as instâncias de user).

- A ação **save** é tanto para a criação quanto para o update.

- a condição verifica se o password não foi modificado, se ele atender ele passa para salvar ou para próximo hook.

- Se ele não atender ele irá criptografar a senha.
