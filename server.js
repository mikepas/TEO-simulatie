const express = require('express');
const app = express();

app.use(express.static('./dist/teo-simulatie'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/teo-simulatie/'}
  );
});

app.listen(process.env.PORT || 8080);