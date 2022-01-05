var userOne = {
    email:'ryui@gmail.com',
    name:'ryui',
    login(){
        console.log(this.email ,'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    } 
};




var userone = new User('ryui@gmail.com', 'ryui')
var userTwo = new User('mario@gmail.com', 'Mario')



userone.login();
userTwo.logout();