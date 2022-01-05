class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in')
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out')
        return this;
    }
    updateScore(){
        this.score ++;
        console.log(this.email, 'score is now', this.score )
        return this;
    }
}

class Admin extends User{
    deleteUser(user){
        users = users.filter(u =>{
            return u.email !=user.email;
        })
    }
}

var userone = new User('ryui@gmail.com', 'Ryui');
var userTwo = new User('mario@gmail.com', 'Mario');

var admin = new Admin('shaun@gmail.com', 'shaun')


var users = [userone, userTwo, admin];


admin.deleteUser(userone);
console.log(users)