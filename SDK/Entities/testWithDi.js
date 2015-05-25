import _ from 'lodash';
import {annotate, TransientScope, Inject} from 'di';
import {ObjectAssignWithPrototype} from '../Utils';

function json(){
    return {
        'name': '_name_'
    }
}

export default function testWithDi(json) {
    return{
        'sayHi': ()=>{console.log('hi');}
    }
};

annotate(testWithDi, new TransientScope());
annotate(testWithDi, new Inject(json));
