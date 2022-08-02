const express = require('express');
const teste = require("./controllers/teste");
const CapturaTelaController = require('./controllers/capturaTelaController');

const router = express.Router();

router.get("/teste", function(req, res) {
  res.json(teste);
});


router.get('/telas', CapturaTelaController.getScreen);

module.exports = router;
