var ObjectAssignWithPrototype = function() {
  var slice = Array.prototype.slice;
  var args = slice.call(arguments, 0);
  var Parent = Object.create(args.shift());
  args.unshift(Parent);
  return Object.assign.apply(Object, args);
};


var _global = (typeof window !== 'undefined') ? window : global;
_global.session = {};

var SessionManager = function() {
    return{
        get: function(){ return global.session },
        set: function(val){ global.session.token = val; }
    }
};

export {ObjectAssignWithPrototype};
export {SessionManager};
