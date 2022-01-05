//sub classes are easier to use in javasript than classes
class Book{
    constructor(title, author, year){
       this.title = title;
       this.author = author;
       this.year = year;
    }

    getsummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

//magazine subclasses
class magazine extends Book{
    constructor(title,author,year,month){
        super(title, author, year)
        this.month = month;
    }
}

mag1 = new magazine('mag1', 'john doe', '2015', 'Dec')

console.log(mag1.getsummary())
