var zendesk = require('node-zendesk'),
fs = require('fs');


var count;
var client = zendesk.createClient({
	  username:  'user',
	  token:     'token',
	  remoteUri: '/'
	});

client.views.showCount("29639836", function (err, req, result) {
  if (err) {
    console.log(err);
    return;
  }
    count = JSON.stringify(result.view_count.value);
	console.log(count, null, 2, true);
	return count;
});