var request = require('request');

exports.list = function(req, res){
  request('http://interactivereader.us/img/google-books-logo.png', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set('Content-Type', 'image/png');
      //body = body.replace('src="/logos', 'src="//google.com/logos')
      res.send(body)
    }
  })
  //res.render('index', { title: 'Express' });
};
