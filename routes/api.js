const router = require('express').Router();
const {getFlightOffers,getFlightRates,getAnotherRecommend,getSafety,getCurrentWeather,getAttractionsByName,getAccomodationsByName}=require("../controller/apictrl");

router.post('/flightofffers',getFlightOffers);
router.post('/flightrates',getFlightRates);
router.post('/anotherrecommend',getAnotherRecommend);
router.post('/safety',getSafety);

router.post('/weather',getCurrentWeather);

router.post('/attractions',getAttractionsByName);
router.post('/accomodations',getAccomodationsByName);

module.exports=router;