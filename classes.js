class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email, 'just logged in')
    }
    logout(){
        console.log(this.email, 'just logged out')
    }
}

var userone = new User('ryui@gmail.com', 'Ryui');
var userTwo = new User('mario@gmail.com', 'Mario');


userone.login();
userTwo.logout();


