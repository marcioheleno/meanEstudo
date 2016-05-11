var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlLocationsInfo1 = require('../controllers/locationInfo1');
var ctrlLocationsInfo2 = require('../controllers/locationComentarios');
var ctrlOthers = require('../controllers/others');

// Iniciamos a variavel na routas
// var ctrlTeste = require('../controllers/testeController');
// var ctrlMain = require('../controllers/main');

// Location pages
router.get('/', ctrlLocations.homelist);
router.get('/localInfo', ctrlLocationsInfo1.locationInfo);
router.get('/locations/locacationComentarios', ctrlLocationsInfo2.addReview);
// router.get('/localInfo3', ctrlLocationsInfo3.locationInfo3);
// router.get('/locations/review/new', ctrlLocations.addReview);

//Other page
router.get('/about', ctrlOthers.others);

// indicamos o router
// router.get('/teste', ctrlTeste.exibir);


// configuração antiga
// router.get('/', ctrlMain.index);

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
