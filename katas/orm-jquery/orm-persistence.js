// Empty collection of instances
Model.records = {}

Model.include({
  newRecord: true,

  create: function(){
    if ( !this.id ) this.id = Math.guid();
    this.newRecord = false;
    this.parent.records[this.id] = this;
  },

  update: function(){
    this.newRecord = false;
    this.parent.records[this.id] = this;
  },

  save: function(){
    this.newRecord ? this.create() : this.update();
  }
})

Model.extend({
  find: function(id){
    return this.records[id]
  }
})

// Id generator
// see http://www.broofa.com/2008/09/javascript-uuid-function/
Math.guid = function(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  }).toUpperCase();
};
