  describe("userManagerMock", function() {
      var userManagerMock = require('../app/models/userManagerMock');
      
    it("must add user", function(done) {
      userManagerMock.clear();
      userManagerMock.addUser({name:'test'});
      
      userManagerMock.getUsers(function(users){
         expect(users.length).toEqual(1);      
         expect(users[0].name).toEqual('test');
         done();
      });
    })
    
    
   it("must add users", function(done) {
      userManagerMock.clear();
      userManagerMock.addUser({name:'test'});
      userManagerMock.addUser({name:'test'});
      userManagerMock.addUser({name:'test'});            
      
      userManagerMock.getUsers(function(users){
         expect(users.length).toEqual(3);      
         done();
      });
    })
    
  });