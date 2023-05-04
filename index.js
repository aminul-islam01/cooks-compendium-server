const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');
const featureRecipe = require('./data/featureRecipe.json');


app.use(cors())

app.get('/', (req, res) => {
    res.send('Home Page Route')
});

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(chef => chef.id === id);
    res.send(selectedChef);
  })

app.get('/recipes', (req, res) => {
    res.send(recipes)
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipes = recipes.filter(recipe => recipe.id === id);
    res.send(selectedRecipes)
})

app.get('/feature-recipe', (req, res) => {
    res.send(featureRecipe)
})
app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));