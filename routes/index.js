var express = require('express');
var router = express.Router();
var db

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://starwars:slaptazodis@ds161032.mlab.com:61032/star-wars-quotes', (err, database) => {
   if(err) return console.log(err)
   db=database
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/atsiliepimas', (req, res) => {
  db.collection('atsiliepimai').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

module.exports = router;
