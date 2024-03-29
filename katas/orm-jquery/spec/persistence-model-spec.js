describe("Persistence", function(){
  var User;
  beforeEach(function(){ User = Model.create(); })

  describe("Class", function(){
    it("should be empty", function(){ expect(User.records).toEqual({}); });
  })

  describe("Instance", function(){
    var user;
    beforeEach(function(){ user = User.init({ name:"John Doe" }); })

    it("should be a new record", function(){ expect(user.newRecord).toBe(true); });

    describe("#create", function(){
      beforeEach(function(){ user.create(); })
      it("should have an id",          function(){ expect(user.id).toBeDefined(); });
      it("should respond to create",   function(){ expect(user.create).toBeDefined(); })
      it("should add a record",        function(){ expect(User.records).not.toEqual({});})
      it("should not be a new record", function(){ expect(user.newRecord).toBe(false); })
    })

    describe("#save", function(){
      beforeEach(function(){ user.save(); })
      it("should not be a new record", function(){ expect(user.newRecord).toBe(false); })

      it("should update the record", function(){
        user.name = "john";
        user.update();
        name = User.find(user.id).name
        expect(name).toBe("john");
      })
    })

    describe("#update", function(){
      beforeEach(function(){
        user.name = "john";
        user.update();
      })
      it("should update the record", function(){
        name = User.find(user.id).name
        expect(name).toBe("john");
      })
    })

    describe("#find", function(){
      var john;
      beforeEach(function(){ user.create();  })
      it("should find the correct record", function(){
        john = User.find(user.id);
        expect(user.id).toBe(john.id);
      })
    })

    describe("Duplicate the records", function(){
      it("should find the correct record", function(){
        user.save();
        user.name = "john"
        expect(User.find(user.id).name).toBe("John Doe");
      })
    })

    describe("Insolate records", function(){
      var Task;
      beforeEach(function(){ Task = Model.create(); })
      it("should find the correct record", function(){
        task = Task.init();
        task.save()
        expect(User.records).not.toEqual(Task.records);
      })
    })
  })
});

describe("Populate", function(){
  var User, users;
  beforeEach(function(){
    User = Model.create();
    users = JSON.parse(Fixtures.loadUsers.success.responseText).users
    spyOn(User, "init").andReturn(User.create());
  })

  it("calls onSuccess when requesting data", function() {
    User.populate(users)
    expect(User.init.callCount).toBe(2)
  });
})
