describe("Persistence", function() {
  var User;
  beforeEach(function(){
    User = Model.create();
  })

  describe("Class", function(){
    it("should be empty", function() {
      expect(User.records).toBeDefined();
      expect(User.records).toEqual({});
    });
  })

  describe("Instance", function(){
    var user;
    beforeEach(function(){
      user = User.init();
    })

    describe("#create", function(){
      beforeEach(function(){ user.create(); })
      it("should have an id", function() {
        expect(user.id).toBeDefined();
      });

      it("should respond to create", function(){
        expect(user.create).toBeDefined();
      })

      it("should add a record", function(){
        expect(User.records).not.toEqual({});
      })
    })

    it("should be a new record", function() {
      expect(user.newRecord).toBeDefined();
      expect(user.newRecord).toBe(true);
    });
  })
});
