const transactions = require('./routes/transactions');
const home = require('./routes/home');
const debug = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
const morgan = require('morgan');   // logging http messages
const helmet = require('helmet');   // adding http headers
const logger = require('./middleware/logger');
const Joi = require('joi');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); // optional, default value is ./views
app.use(logger);
app.use(helmet());
app.use(express.json());


app.use('/api/transactions', transactions);
app.use('/', home);


debug('Application Name: ' + config.get('name'));
dbDebugger('Connected to db...');

if(app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('Morgan enabled...');
}

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    debug('authenticating...');
    next();
});

const port = process.env.port || 3000;
app.listen(port, () => debug(`listening on port ${port}...`));