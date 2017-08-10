// Se establecen las dependencias que Node va a utilizar
var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose');

// Se establece una conexión con mongoose por medio de las siguientes variables
var db = mongoose.connection,
    dburl = 'mongodb://admin:Arroba345@ds051863.mlab.com:51863/bd_arroba_proyecto_fct',
    port = 3000;
// se le indica al servidor la tarea a ejecutar
var server = app.listen(port,_server());

// Se define la conexion con mongoose
mongoose.connect(dburl);
// Se define las respuestas del servidor
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.on('open', function(){
  console.log('Base de datos conectada correctamente');
})
// Por medio de express se genera la conexión entre el index.js, server.js y el front-end
app.use(express.static(path.join(__dirname, 'public')));

// Se indica que el formato en el que se reciben los datos va a ser JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

// Se definen los verbos que express va a reconocer como parte de la petición que se realiza desde el front-end (public)
app.use( function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
// Se definen las rutas que van estar ligadas a toda la funcionalidad de la aplicacion
var index = require('./index'),
    academiesRoutes = require('./components/academies/academy.route'),
    beneficientsRoutes = require('./components/beneficientAssociation/beneficient.route'),
    blazesRoutes = require('./components/blazes/blaze.route'),
    eventsRoutes = require('./components/events/event.route'),
    eventsGeneralRoutes = require('./components/eventsGeneral/eventGeneral.route'),
    exhibitionsRoutes = require('./components/exhibitions/exhibition.route'),
    fightsRoutes = require('./components/fights/fight.route'),
    generalRankingsRoutes = require('./components/generalRanking/generalRanking.route'),
    placesRoutes = require('./components/places/place.route'),
    productsRoutes = require('./components/products/product.route'),
    profilesRoutes = require('./components/profiles/profile.route'),
    sponsorsRoutes = require('./components/sponsors/sponsor.route'),
    studentsRoutes = require('./components/students/student.route'),
    teachersRoutes = require('./components/teachers/teacher.route'),
    ticketsRoutes = require('./components/tickets/ticket.route');
// Se definen las rutas de los servicios con las que se conecta el front-end
app.use('/api', academiesRoutes);
app.use('/api', beneficientsRoutes);
app.use('/api', blazesRoutes);
app.use('/api', eventsRoutes);
app.use('/api', eventsGeneralRoutes);
app.use('/api', exhibitionsRoutes);
app.use('/api', fightsRoutes);
app.use('/api', generalRankingsRoutes);
app.use('/api', placesRoutes);
app.use('/api', productsRoutes);
app.use('/api', profilesRoutes);
app.use('/api', sponsorsRoutes);
app.use('/api', studentsRoutes);
app.use('/api', teachersRoutes);
app.use('/api', ticketsRoutes);
app.use('/', index);

// Se guarda todo lo que se ha realizado
module.exports = app;

function _server(){
  console.log('Conexión establecida en el puerto ' + port);
}
