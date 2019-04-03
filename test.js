'use strict';

let https = require ('https');

let accessKey = 'd3971e6add024986bb77bf0564c9f2d7';

let uri = 'canadacentral.api.cognitive.microsoft.com';
let path = '/text/analytics/v2.0/keyPhrases';

let testans = ["charity", "volunteer"];
console.log(testans);

let response_handler = function (response) {
    let body = '';
    response.on ('data', function (d) {
        body += d;
    });
    response.on ('end', function () {
		let body_ = JSON.parse (body);
		let body__ = JSON.stringify (body_, null, '  ');
        console.log (body_.documents[0].keyPhrases.length);
        let len = body_.documents[0].keyPhrases.length;
        let score = 0;
        for(var i = 0; i < len; i++) {
            if(testans.indexOf(body_.documents[0].keyPhrases[i]) >= 0) {
               score++;
            }
        }
        score /= testans.length;
        console.log(score);
    });
    response.on ('error', function (e) {
        console.log ('Error: ' + e.message);
    });
};

let get_key_phrases = function (documents) {
	let body = JSON.stringify (documents);

	let request_params = {
		method : 'POST',
		hostname : uri,
		path : path,
		headers : {
			'Ocp-Apim-Subscription-Key' : accessKey,
		}
	};

	let req = https.request (request_params, response_handler);
	req.write (body);
	req.end ();
}

let sentence = "In my spare time I like to volunteer with charity and youth.";

let documents = { 'documents': [
	{ 'id': '1', 'language': 'en', 'text': sentence }
]};


get_key_phrases (documents);
