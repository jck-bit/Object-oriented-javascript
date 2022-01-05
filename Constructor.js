function User(email, name){
   this.email =email;
   this.name = name;
//    this.online = false;
   this.login = function (){
       console.log(this.name, 'has logged in')
   }
}

var userone = new User('ryui@gmail.com', 'Ryui');
var userTwo = new User('mario@gmail.com', 'Mario');

console.log(userone);
userTwo.login();
