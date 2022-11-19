'use strict'
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name,
            this.releaseDate = releaseDate,
            this.pagesCount = pagesCount,
            this.state = 100,
            this.type = null
    }

    fix() {
        this.state *= 1.5
    }
    set state(state) {
        if (this._state < 0) {
            this._state = 0
        } else if (this._state > 100) {
            this._state = 100
        } else {
            this._state = state;
        }
    }
    get state() {
        if (this._state > 100) {
            this._state = 100
        }
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book"
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}
class Library {
    constructor(name) {
        this.name = name;
        this.books = []
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }
    findBookBy(type, value) {
        let resultArr = this.books.find((book) => book[type] === value);
        return resultArr || null;
    }
    giveBookByName(bookName) {

        const resultBook = this.books.find((book) => book.name === bookName);
        const indexBook = this.books.indexOf(resultBook)

        if (indexBook === -1) {
            return null
        } else {
            this.books.splice(indexBook, 1)
            return resultBook
        }
    }

}