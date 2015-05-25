import {SessionManager} from '../utils/';

var request =  require('superagent');
require('superagent-auth-bearer')(request);


var getUrl = (method) => `https://api-integration-c.whipclip.com/v1/${method}?apiVersion=4.15`;

//import defualt from 'isomorphic-fetch';
//https://github.com/matthew-andrews/isomorphic-fetch


// request
//   .get('/')
//   .bearer('XvWjkh54rs53HmNlKg165DfE')
//   .end(function(err,res) {
//     ...
//   });

//console.log(fetch);

export default {
	post: function(method, data, session, typedObject){
		return new Promise((resolve, reject) => {
			request.post(getUrl(method))
				.authBearer(session.token || '')
				.send(data)
				.end(function RequestManagerGet(err,res) {
					let outputVal = (typedObject) ? typedObject(res.body) : res.body;
					resolve(outputVal);
				});
		});
	},
	get: function(method, data, session, typedObject){
		return new Promise((resolve, reject) => {
			request.get(getUrl(method))
				.authBearer(session.token || '')
				.query(data)
				.end(function RequestManagerGet(err,res) {
					let outputVal = (typedObject) ? typedObject(res.body) : res.body;
					resolve(outputVal);
				});
    	});
	},
	update: function (url, data, Session) {

	},
	delete: function function_name(url, data, Session) {

	}
}
