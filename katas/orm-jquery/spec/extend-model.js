describe("Class.extend", function() {
  var User;
  beforeEach(function(){
    User = Model.create();
    User.extend({
      find: function(id) { return "finded" }
    });
  })

  it("A class should have the extended methods", function() {
    expect(User.find).toBeDefined();
  });

  it("A class instance should be able to call an extended methods", function() {
    expect(User.find()).toBe("finded");
  });
});
