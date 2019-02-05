# Mongoose

> ORM para MongoDB com node

Para instalar ele na sua aplicação:

```bash
npm install --save mongoose
```

# Configurando conexão usando mongoose

```js
database () {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }
```

**mongoose.connect("uri")**

- Método para conexão com o mongodb.
- Como parâmetro passamos a uri de conexão e um objeto

  ```
   mongodb://usuario:senha@localhost:27017/nomedatabase
  ```

  - No objeto, passe duas informações para informar ao mongoose que estamos trabalhando com versões mais recentes do node, assim ele precisa fazer algumas adaptações.

  ```js
  {
  useCreateIndex: true,
  useNewUrlParser: true
  }
  ```
