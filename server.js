const path          = require('path');
const compression = require('compression');
const express= require('express');

const { PORT, NODE_ENV } = process.env;

const app = express();
var port = PORT || 3000;
var isDevelopment = NODE_ENV === 'development';

var staticDir = isDevelopment ? './dist' : '.';

app.use(compression());
app.use(express.static(path.join(__dirname, staticDir)));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, staticDir, 'index.html')));
app.listen(port, function () {
    console.log(`Express server listening on port ${port}`);
});