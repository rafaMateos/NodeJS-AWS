const{ Router, request, response } = require('express');
const router = Router();
const data = require('../data/data.json');

//routes
router.get('/' , (request , response) => {
    response.json(data);
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

module.exports = router;
