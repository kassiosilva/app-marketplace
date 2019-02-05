# MongoDB

> Banco não relacional usado principalmente quando temos uma grande quantidade de dados e poucos relacionamentos entre eles.

Pense no twitter, milhões de postagens de diversas pessoas diferentes. Não é necessário um relacionamento desses dados. Nesse caso, usar um banco não relacional é o mais indicado. Dentre as vantagens de se usar esse tipo de banco, aqui mais destaca é o **ganho de performance**.

Porém, esteja atento e veja se ao decorrer que sua aplicação cresce ela vai precisar de mais relacionamentos entre dados, se isso acontecer já está na hora de usar um banco relacional.

## Instalando MongoDB com Docker

Primeiro, crie o container mongo:

```bash
docker run --name mongodb -p 27017:27017 -d -t mongo
```

Feito isso, acesse <localhost:27017> ele mostrará uma mensagem de erro, pois não é possível acessar o mongo pelo navegador, então o mongo já está devidamente instalado.docker run --name mongodb -p 27017:27017 -d -t mongo
