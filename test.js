'use strict';

const https = require ('https');

const accessKey = 'd3971e6add024986bb77bf0564c9f2d7';

const uri = 'canadacentral.api.cognitive.microsoft.com';
const path = '/text/analytics/v2.0/keyPhrases';
var keyPhrases = "";

async function getKeyPhrases(sentence, answer) {
    let documents = { 'documents': [
        { 'id': '1', 'language': 'en', 'text': sentence }
    ]};
    await get_key_phrases (documents);
    let len = keyPhrases.length;
    let score = 0;
    for(var i = 0; i < len; i++) {
        if(answer.indexOf(keyPhrases[i]) >= 0) {
            score++;
        }
    }
    score /= answer.length;
    console.log(keyPhrases);
    console.log(score);
    return score;
}

function get_key_phrases(documents) {
    return new Promise(function(resolve, reject) {
        let body = JSON.stringify (documents);

        let request_params = {
            method : 'POST',
            hostname : uri,
            path : path,
            headers : {
                'Ocp-Apim-Subscription-Key' : accessKey,
            }
        };

        let req = https.request (request_params, (response) => {
            let body = '';
            response.on ('data', function (d) {
                body += d;
            });
            response.on ('end', function () {
                let body_ = JSON.parse (body);
                let body__ = JSON.stringify (body_, null, '  ');
                keyPhrases = body_.documents[0].keyPhrases;
                resolve(keyPhrases);
            });
            response.on ('error', function (e) {
                console.log ('Error: ' + e.message);
            });
        });
        req.write (body);
        req.end ();
    });
}

getKeyPhrases("with respect", ["open-minded", "respect", "nice", "civil", "discussion"]);
