//object literals
book1={
    title:'john',
    author:'goojan',
    year:'2013',
    getSummary: function (){
      return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book1.getSummary())

book2={
    title:'Book 2',
    author:'goojan',
    year:'2015',
    getSummary: function (){
      return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// console.log(book2.getSummary())
console.log(Object.values(book2))
console.log(Object.keys(book2))