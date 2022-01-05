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

console.log(userOne)


