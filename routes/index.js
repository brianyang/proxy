var request = require('request');

exports.index = function(req, res){
  request('http://interactivereader.us', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set('Content-Type', 'text/html');
      //body = body.replace('src="/logos', 'src="//google.com/logos')
      res.send(body)
    }
  })
  //res.render('index', { title: 'Express' });
};
