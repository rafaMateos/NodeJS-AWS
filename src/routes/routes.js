const{ Router } = require('express');
const router = Router();


router.get('/' , (request , response) => {
    response.json({"Hello" : "Nothing to show"});
});

router.get('/test' , (request , response) => {
    const data = {
        "name" : "Rafael",
        "website" : "uninformaticoRafa.com"
    }
    response.json(data);
});

module.exports = router;