//var di = require('di');
import {Injector} from 'di';

import React from 'react';
import CheckboxWithLabel from './components/CheckboxWithLabel.js';
import PostComponent from './components/PostComponent.js';

import {Post} from '../sdk/entities/post';
import testWithDi from '../sdk/entities/testWithDi.js';

import {Session} from '../sdk/utils/';
import * as RequestManager from '../sdk/utils/RequestManager.js';
import * as testJson from '../test/mocks/posts';

var injector = new Injector([]);

const global = (typeof window !== 'undefined') ? window : {};

global.WhipSdk = global.WhipSdk || {};
global.WhipSdk.PartnerSdk = {
  login: function loginFunction(argument) {
    a.login('moderator@whipclip.com', '_password_').then(function(err, res) {});
  },

  test: function() {
	var twdi = injector.get(testWithDi);
	console.log(twdi.sayHi());
  },

  testMemory: function(){
    var test = [];
    for (var i = 0; i < 500; i++) {
        test.push(Post(testJson.posts[0]));
    }
    React.render(<PostComponent results={test}/>, document.getElementById('main'));
    return test;
  }
};

//React.render(<CheckboxWithLabel/>, document.getElementById('main'));

export default global;
