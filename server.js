const express = require('express');
const fs = require('fs');
const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


const app = express();
const routes = require('./routes/index');


app.set('port', (process.env.PORT || 3001));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.use(compression());
}

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use('/api', routes);

app.listen(app.get('port'), () => {
   console.log(`find the server at: http://localhost:${app.get('port')}/`);
});