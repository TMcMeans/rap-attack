const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const requireHTTPS = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
};

if (process.env.NODE_ENV === 'production') { app.use(requireHTTPS); }

app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));
app.use(bodyParser.json());

app.locals.title = 'Rap Attack';

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on localhost:${app.get('port')}`);
})


module.exports = app;