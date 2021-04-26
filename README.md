# Faça sua própria pizza!
Este projeto foi criado usando ReactJs, Redux, Redux Sauce, Sass, Axios e um servidor mock com NodeJs + Express

## Como executar 🏃

Após clonar o projeto e instalar as dependências navegue até o diretório e utilize o comando:

`yarn start` ou `npm start`

Isto fará com que o servidor NodeJs de onde serão consumidos os dados execute na porta 3021 e a aplicação na porta 3000, (acessível através do link http://localhost:3000).

## Decisões técnicas 📖

### Redux + Ducks + Redux Sauce
O padrão Ducks permite uma melhor organização para uma aplicação escalável e uma garante uma boa manutenibilidade para o código. A utilização do Redux Sauce torna possível a criação de uma store mais semântica e menos burocrática.

### Adaptações na arquitetura do estilo
Foram escolhidas para o projeto adaptações da arquitetura de ITCSS para deixar o estílo mais próximo de uma orientação a objeto e um padrão de nomeclatura próximo ao do RSCSS para deixar os estilos com boa legibilidade.

### UX/UI Design
Devido ao tempo disponível e as priorizações feitas no desenvolvimento no projeto foi feita a opção de uma UI mais limpa e sem muitos detalhes, as cores foram escolhidas de acordo com a bandeira da Itália devido ao tema 🍕. Apesar disso a usabilidade foi projetada pensando nas 10 heurísiticas de Nielsen.

### NodeJs + ExpressJs
Para haver simulação de um backend que processa e retorna dados foi utilizado o ExpressJs pela sua simplicidade de uso, gananhando tempo para o desenvolvimento do Front End.
