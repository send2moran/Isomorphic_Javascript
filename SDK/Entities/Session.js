import _ from 'lodash';
import {ObjectAssignWithPrototype} from '../Utils'

var sessionProto = {
  sayHello: () => console.log('hello')
};

var Session = (json) =>
ObjectAssignWithPrototype(sessionProto,json);

export {Session}
