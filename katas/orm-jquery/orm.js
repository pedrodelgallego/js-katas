/*

*/

// Object.create() takes one argument, a prototype object, and returns
// a new object with the specified prototype object. In other words,
// you give it an object, and it returns a new one, inheriting from
// the one you specified.

// see http://javascript.crockford.com/prototypal.html
if (typeof Object.create !== "function"){
  Object.create = function(o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var Model = {
  inherited: function(){},
  created: function(){},
  prototype: { init: function(){} },

  // The create() function returns a new object, inheriting from the
  // Model object; we’ll use this for creating new models. The init()
  // function returns a new object, inheriting from Model.prototype
  create: function(){
    var object = Object.create(this);
    object.parent = this;
    object.prototype = object.fn = Object.create(this.prototype);
    object.created();
    this.inherited(object);
    return object;
  },

  init: function(){
    var instance = Object.create(this.prototype);
    instance.parent = this;
    instance.init.apply(instance, arguments);
    return instance;
  },

  extend: function(o){
    var extended = o.extended;
    jQuery.extend(this, o);
    if (extended) extended(this);
  },

  include: function(o){
    var included = o.included;
    jQuery.extend(this.prototype, o);
    if (included) included(this);
  }
};
