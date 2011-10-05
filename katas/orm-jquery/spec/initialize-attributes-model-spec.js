describe("Model.init", function() {
  var user;
  beforeEach(function(){
    var User = Model.create();
    user = User.init({
      name:"John Doe",
      login:"jdoe"
    });
  })

  it("A class instance should have the included methods", function() {    
    expect(user.name).toBe("John Doe");
    expect(user.login).toBe("jdoe");
  });
});
