const{ Router, request, response } = require('express');
const router = Router();
const data = require('../data/data.json');

//routes
router.get('/' , (request , response) => {
    response.json(data);
});

router.post('/' , (request , response) => {
    const { title , principal_Actor} = request.body;
    const id = data.length + 1;
    const newMovie = {id , ...request.body};
    data.push(newMovie);
    response.send('saved');
});

module.exports = router;