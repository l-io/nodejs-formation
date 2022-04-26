const express = require('express');
const app = express();

// use ejs as view engine
app.set('view engine', 'ejs');

app.get('/:nome/:lang', (req, res) => {
    var name = req.params.nome;
    var lang = req.params.lang;
    res.render('index', {
        name: name,
        lang: lang,
        company: 'Inc Corp.',
        enrolled: 800
    });
});

app.listen(8080, () => {
    console.log('Running...');
});
