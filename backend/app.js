/**
 * @author MBM
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('./database/knexfile');

const database = knex(knexConfig.development);

Model.knex(database);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
})

/**
 * les routes
 */
// const userRoutes = require("./routes/user");
// const rechercheRoutes = require("./routes/recherche");
// const gestionProtocoleRoutes = require("./routes/gestion-protocole");
// const gestionRequeteRoutes = require("./routes/gestion-requete");
// const modelesRoute = require("./routes/modeles");//editions
// const resultatActif = require("./routes/resultatActif");//resultat actif

////////////////////////////
app.use('/api/redirect', function (req, res) {
  res.redirect('https://localhost:3000/');
});
// app.use('/api/users', userRoutes);
// app.use('/api/recherche', rechercheRoutes);
// app.use('/api/modele', modelesRoute);//editions
// app.use('/api/resultatActif', resultatActif);//Resultat actif
// app.use('/api/gestionProtocole', gestionProtocoleRoutes);
// app.use('/api/gestionRequete', gestionRequeteRoutes);

module.exports = app;
