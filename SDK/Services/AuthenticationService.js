import _ from 'lodash';
import {ObjectAssignWithPrototype} from '../Utils'
import {SessionManager} from '../Utils'
import * as RequestManager from '../utils/RequestManager.js';
import {Session} from '../entities/session.js';

const Authentication = {
  login: (username, password) => {
      return new Promise(function(resolve, reject){
          RequestManager.post('authenticate', {username: username, password: password}, {}, Session).then(function(res){
              SessionManager().set(res.sessionToken);
              resolve(res);
          });
      });
  }
};

export {Authentication}
