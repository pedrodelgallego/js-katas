describe("Create model", function() {
  var User;
  beforeEach(function(){
    User = Model.create();
  })

  describe("Instances", function(){
    var user;
    beforeEach(function(){
      user = User.init();
    })
    it("A user is a User class instance", function() {
      expect(user.parent).toBe(User);
    });
  })

  describe("Instances", function(){
    it("A Class can create new instances", function() {
      expect(User.init).toBeDefined();
    });

    it("Model is the parent of a created model", function() {
      expect(User.parent).toEqual(Model);
    });

    it("The Model class prototype is equal to the created model prototype", function() {
      expect(User.fn).toEqual(Model.prototype);
      expect(User.prototype).toEqual(Model.prototype);
    });
  })
});
