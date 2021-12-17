<h1>API Gatos 🐱</h1>

Api simples, onde é possível cadastrar e deletar gatinhos.<hr>
Ferramentas utilizadas 🛠
<ul>
  <li>Node.js</li>
  <li>MySQL</li>
  <li>Express</li>
</ul>
<hr>

<h3>Antes de mais nada, gostaria de avisar que voces também conseguem ver essa api sendo consumida no meu repositorio ConsumoDeApi aqui do github!</h3>
<hr>

<h3>Adicionando novo gato:</h3>
Acesse a rota http://localhost:4567/cat
Em formato json adicione nome e raça:

```
{
    "nome": "Miau",
    "raca": "Siberiano"
}
```

<h3>Deletando...</h3>
Com o método DELETE, acesse a rota http://localhost:4567/cat/id<br>
(Insira na rota o id do gato que deseja excluir)

<h3>Rodando a api:</h3>
<hr>

```
# Clone este repositório
$ git clone https://github.com/mrsiilva/apiDeGatos.git

# Acesse a pasta do projeto no terminal
$ cd apiDegatos

# Instale as dependências

# Execute a aplicação
$ node index.js

# O servidor iniciará na porta:4567
```

Obs1: Está cheio de comentários, pois feito exclusivamente pra estudar um pouco mais sobre Node e Apis haha<br>
Obs2: Pretendo adicionar a função de edição ainda! (Então aguardem os próximos capitulos.
