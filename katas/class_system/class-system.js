/*
  Preliminary concepts, such as JavaScript classes and events. This
  will give me a solid foundation before moving on to some of the
  more advanced concepts.

  We are going to create classical classes with inheritance and
  instances system. JavaScript is a prototype language, and as such
  doesn’t include a native class implementation.
*/
var Class = function(parent){
  var klass = function(){
    this.init.apply(this, arguments);
  };

  // Inherited methods from parent class
  if (parent) {
    var subclass = function() { };
    subclass.prototype = parent.prototype;
    klass.prototype = new subclass;
  };

  klass.prototype.init = function(){};

  // Shortcut to access prototype
  klass.fn = klass.prototype;

  // Shortcut for super class
  klass._super = klass.__proto__;

  // Shortcut to access class
  klass.fn.parent = klass;

  // The extend function iterates over the object properties and
  // copy them directly onto the class: 
  // 
  // i.e:
  // var User = new Class;
  //   User.extend({
  //   find: function(id) { /* ... */ },
  //   exists: functions(id) { /* ... */ }
  // });
  //
  // var person = Person.find(1);
  klass.extend = function(obj){
    var extended = obj.extended;
    // copy each property into the class
    for(var i in obj){
      klass[i] = obj[i];
    }
    // Extend callback.
    if (extended) extended(klass); 
  };

  // The include function iterates over the object properties and copy
  // them onto the class’ prototype, rather than directly onto the
  // class.
  //
  // i.e 
  // var Person = new Class;
  // Person.include({
  //   save: function (id) { /* ... */ },
  //   destroy: function(id) { /* ... */ }
  // });
  // 
  // var person = new Person;
  // person.save();
  klass.include = function(obj){
    var included = obj.included;    
    // copy each property into the prototype
    for(var i in obj){
      klass.fn[i] = obj[i];
    }
    // Include callback.
    if (included) included(klass);
  };

  // By default, if you don’t return anything from a constructor
  // function, this—the current text—will be returned.
  return klass;
};
