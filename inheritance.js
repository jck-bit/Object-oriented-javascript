function Book(title, author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
 

    Book.prototype.getsummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

function magazine (title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}
 
//inherit prototype
magazine.prototype = Object.create(Book.prototype);

//instantiate magazine 

const mag1 = new magazine ('mag1', 'john doe', '2018', 'jan')


console.log(mag1.getsummary())
