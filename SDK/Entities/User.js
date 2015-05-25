import _ from 'lodash';
import imageProto from '../Prototypes/images.js'
import {ObjectAssignWithPrototype} from '../Utils'
import {SessionManager} from '../utils'

var userProto = {
  login: () => console.log('hello')
};

var User = (json) =>
ObjectAssignWithPrototype(userProto,json,{
});

export {User}
