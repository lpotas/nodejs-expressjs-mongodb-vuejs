import express from 'express';
const router = express.Router();

router.get('/example', function(req, res, next) {
  //render from templates i.e. ejs, jade, handlebars within views dir
  res.render('index', { title: 'nodejs expressjs mongodb' });
});

export default router;
