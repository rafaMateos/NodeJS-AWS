const { request } = require('express');
const express = require('express');
const app = express();
const morgan =  require('morgan');

//settings
app.set('port' , process.env.PORT || 8080);
app.set('json spaces' , 2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('api/' , require('./routes/routes'));
app.use( '/api/movies' ,require('./routes/movies'));

//Starting server
app.listen(app.get('port') , () => {
    console.log('Server listen in port ' + app.get('port'));
});

