const express = require("express");
const exphbs = require("express-handlebars");
const allRoutes = require("./controllers");
const session = require("express-session");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
require('dotenv').config();
const apiRoutes = require("./controllers/api");
const frontendRoutes = require("./controllers/frontendRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sess = {
  secret: process.env.DB_SESSION_SECRET,
  cookie: {
    maxAge: 0.5 * 60 * 60 * 1000 // 30 min
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

app.use(express.static('public'));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use("/api", apiRoutes);
app.use("/", frontendRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, 'localhost', function() {
    console.log(`App listening on http://localhost:${PORT}`);
});

});
