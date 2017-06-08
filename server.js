const express = require('express');
const fs = require('fs');

const app = express();

app.set('port', (process.env.PORT || 3001));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

app.get('/api/posts', (req, res) => {

    res.json({"test": "good"});
});

app.listen(app.get('port'), () => {
   console.log(`find the server at: http://localhost:${app.get('port')}/`);
});