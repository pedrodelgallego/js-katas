describe("Class shortcuts", function() {
  var User, user;
  beforeEach(function(){
    User = new Class;
    user = new User;
  })
  it("fn should be a shorcut for the prototype", function() {
    expect(User.fn).toBeDefined();
    expect(User.fn).toBe(User.prototype);
  });

  it("fn should be a shorcut for the Class of the instance", function() {
    expect(user.parent).toBeDefined();
    expect(user.parent).toBe(User);
  });
});
