
/**
 * Module Dependencies
 */

var cheerio = require('cheerio');

function parseBody (body) {

  var $  = cheerio.load(body);
  var m = $('pre').next().html() || $('pre').html();
  m = m.split('\n');
  var output = [];

  for (var i = 0; i < m.length; i++) {

    if(m[i].match(/^<img src="\/icons\/.+\.gif".+href=".+"/)) {
      var type = m[i].match(/icons\/(.+)\.gif/)[1];
      var name = m[i].match(/href="(.+)"/)[1];

      if(!name.match(/Last modified/)) {
        output.push({
          name: name,
          type: type
        });
      }
    }

  }

  return output;

}

/**
 * Exports
 */

module.exports = {};
module.exports.parseBody = parseBody;
