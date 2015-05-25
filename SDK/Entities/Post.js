import _ from 'lodash';
import imageProto from '../Prototypes/images.js'
import {ObjectAssignWithPrototype} from '../Utils'
import {SessionManager} from '../utils'

//tcomb

var postProto = {
  sayHello: () => console.log('hello')
};

var Post = (json) =>
ObjectAssignWithPrototype(postProto,json,{
    'author': json.author,
    'channel': json.channel,
    'program': json.program,
    'coverImage': ObjectAssignWithPrototype(imageProto,{images : json.coverImage.representations}),
    'media': json.media.map((media) => {return media})
  });

export {Post}
