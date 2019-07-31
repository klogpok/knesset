const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const partsRoutes = require('./routes/parts');

const PORT = process.env.PORT || 5000;

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(require('body-parser').urlencoded({ extended: true }));

app.use('/', homeRoutes);
app.use('/parts', partsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
