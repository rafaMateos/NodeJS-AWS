var mysql = require('mysql');
var connection = mysql.createConnection({
   host: '127.0.0.1',
   user: 'rmateost',
   password: 'Sevillamalo16',
   database: 'restApi',
   port: 3306
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});

module.exports = connection;