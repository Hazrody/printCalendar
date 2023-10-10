const express = require('express');
const app = express();
const port = 3000;
/**
 * Configuration du serveur node js en utilisant express
 */
app.use('/node_modules',express.static('node_modules'));
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
