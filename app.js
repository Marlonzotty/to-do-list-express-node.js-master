const express = require('express');

const path = require('path');

const checkListRouter = require('./src/routes/checklist.js'); // Usar barras normais
const rootRouter = require('./src/routes/index'); // Usar barras normais
require('./config/database.js');


const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'src/views/pages'));
app.set('view engine', 'ejs');





app.use('/',rootRouter);
app.use('/checklists',checkListRouter);

app.listen(3000, () => {
    console.log('Servidor foi iniciado');
});

