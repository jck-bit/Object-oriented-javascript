// class Book{
//     constructor(title, author, year){
//        this.title = title;
//        this.author = author;
//        this.year = year;
//     }

//     getsummary(){
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }

//     getAge(){
//         const years = new Date().getFullYear() - this.year
//         return  `${this.title} is ${years} years old`
//     }

//     revise(newYear){
//         this.year = newYear;
//         this.revised = true;
//     }
// }


// const book1 = new Book('Book1', 'john Doe', '2015')

// console.log(book1)
// book1.revise('2018')
// console.log(book1)

for (var i =1; i < 101; i ++){
    if(i % 15 ==0) console.log('fizzbuzz');
    if(i % 5 == 0) console.log('buzz');
    if(i %3 == 0) console.log('fizz');
    else console.log(i)
}