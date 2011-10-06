// Empty collection of instances
Model.extend({
  created: function(){
    this.records = {};
  }
});

Model.records = {}

Model.include({
  newRecord: true,

  create: function(){
    if ( !this.id ) this.id = Math.guid();
    this.newRecord = false;
    this.parent.records[this.id] = this.dup();
  },

  update: function(){
    this.newRecord = false;
    this.parent.records[this.id] = this.dup();
  },

  save: function(){
    this.newRecord ? this.create() : this.update();
  },

  dup: function(){
    return jQuery.extend(true, {}, this);
  }
})

// Finders
Model.extend({
  find: function(id){
    var record = this.records[id]
    return record.dup();
  }
})

Model.extend({
  populate: function(values){
    // Reset model & records
    this.records = {};

    for (var i=0, length = values.length; i < length; i++) {
      var record = this.init(values[i]);
      record.newRecord = false;
      this.records[record.id] = record;
    }
  }
});

// Id generator
// see http://www.broofa.com/2008/09/javascript-uuid-function/
Math.guid = function(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  }).toUpperCase();
};
