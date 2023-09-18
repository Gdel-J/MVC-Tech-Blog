const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const apiRoutes = require("./controllers/api");
const frontendRoutes = require("./controllers/frontendRoutes");
const helpers = require('./utils/helpers');
require('dotenv').config();

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

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));
}

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
  app.listen(PORT, function() {
    console.log(`App listening on http://localhost:${PORT}`);
  });
});
