describe("Model.include", function() {
  var user;
  beforeEach(function(){
    var User = Model.create();
    User.include({
      save: function(id) { return "saved" }
    });
    user = User.init();
  })

  it("A class instance should have the included methods", function() {
    expect(user.save).toBeDefined();
  });

  it("A class instance should be able to call an included methods", function() {
    expect(user.save()).toBe("saved");
  });
});
