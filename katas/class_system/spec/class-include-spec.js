describe("Class.include", function() {
  var user;
  beforeEach(function(){
    var User = new Class;
    User.include({
      save: function(id) { return "saved" }
    });
    user = new User();
  })

  it("A class instance should have the included methods", function() {
    expect(user.save).toBeDefined();
  });

  it("A class instance should be able to call an included methods", function() {
    expect(user.save()).toBe("saved");
  });
});
