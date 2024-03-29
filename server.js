const express = require("express");

const homeRoutes = require('./routes/homeroutes')

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

app.use('/', homeRoutes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));