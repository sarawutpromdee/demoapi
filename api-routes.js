let router = require('express').Router();
var usersController = require('./controller/users.controller.js');


router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
router.route('/users')
    .get(usersController.view)
    .post(usersController.new);
router.route('/login')
    .post(usersController.login);



module.exports = router;