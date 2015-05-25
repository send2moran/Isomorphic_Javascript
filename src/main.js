//var di = require('di');
import {Injector} from 'di';

import React from 'react';
import CheckboxWithLabel from './components/CheckboxWithLabel.js';

import {Post} from '../sdk/entities/post';
import testWithDi from '../sdk/entities/testWithDi.js';

import {Session} from '../sdk/utils/';
import * as RequestManager from '../sdk/utils/RequestManager.js';

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
  }
};

React.render(<CheckboxWithLabel/>, document.getElementById('main'));

export default global;
