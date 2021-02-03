const{ Router, request, response } = require('express');
const router = Router();
const data = require('../data/data.json');
const DBConection = require('../mysql/DB_Connection');

//routes
router.get('/' , (request , response) => {
    getAllMovies(function(result){
    response.json(result);
    });
 
});

router.post('/' , (request , response) => {
    const { title , principal_Actor} = request.body;
    if(title && principal_Actor){
        const id = data.length + 1; // Generate ID
        const newMovie = {id , ...request.body}; // Create object
        data.push(newMovie); // Add to memory array
        response.status(200);
        response.send('saved'); 
    }else{
        response.status(400);
        response.send('Not valid JSON');
    }
});

function getAllMovies(callback){
    var query = DBConection.query('select id , title , principal_Actor from movies;', function(error, data){
        if(error){
           throw error;
        }else{
            var result = data;
           if(result.length > 0){
                callback(result);
           }else{
                callback('not found');
           }
        }
     }
    );
}

module.exports = router;
