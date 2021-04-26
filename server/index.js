const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3021;

const components = {
  edges: ['Tradicional', 'Com catupiry', 'Com cheddar', 'Com cream cheese'],
  sauces: ['Tradicional', 'Picante'],
  sizes: ['Pequena', 'Média', 'Grande', 'Extra grande'],
  toppings: [
    'Tomate',
    'Cebola',
    'Pimentão',
    'Manjericão',
    'Bacon',
    'Muçarela',
    'Parmesão',
    'Brie',
    'Iscas de filé',
    'Frango',
    'Milho',
    'Presunto',
    'Atum',
    'Frango com catupiry',
    'Frango com cream cheese',
    'Cogumelos',
    'Azeitona',
  ],
}

const dailyPizza = {
  edge: 'Com cream cheese',
  sauce: 'Tradicional',
  size: 'Grande',
  toppings: ['Iscas de filé', 'Brie', 'Cogumelos']
}

const { edge, sauce, size, toppings } = dailyPizza;
const toppingList = toppings.join(', ').toLowerCase();
const suggestion = `Pizza ${size.toLowerCase()}, borda ${edge.toLowerCase()}, molho ${sauce.toLowerCase()}, ${toppingList}`;

app.use(express.json());
app.use(cors());

app.get('/pizza', (req, res) => {
  res.status(200).send({
    components,
    suggestion,
  }) 
});

app.post('/pizza', (req, res) => {
  const { edge, sauce, size, toppings } = req.body;
  const sameEdge = edge === dailyPizza.edge;
  const sameSauce = sauce === dailyPizza.sauce;
  const sameSize = size === dailyPizza.size;
  const toppingsDifference = toppings
    .filter(item => !dailyPizza.toppings.includes(item))
    .concat(dailyPizza.toppings.filter(item => !toppings.includes(item)));
  const isDailyPizza = sameEdge && sameSauce && sameSize && toppingsDifference.length <= 0;

  if (isDailyPizza) {
    res.status(200).send({ message: 'Você recebeu pontos de benefício!' });
  } else {
    res.status(200).send({
      message: 'Pizza criada com sucesso!',
      sameEdge,
      sameSauce,
      sameSize,
      toppingsDifference,
    });
  }
});

app.listen(
  PORT,
  () => console.log(`Server running on http://localhost:${PORT}`),
);
