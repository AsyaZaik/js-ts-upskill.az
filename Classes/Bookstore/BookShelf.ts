import { Author } from "./Author";
import { Book } from "./Book";

export class BookShelf {
    books: Book[];
    genreOfShelf: string

    constructor(genreOfShelf: string) {
        this.books = [];
        this.genreOfShelf = genreOfShelf;
    }

    get getBooks() {
        return this.books
    }

    addBook(book: Book) {
        if(book.genre === this.genreOfShelf)
        {return this.books.push(book)} else {
            console.log(`This shelf only for ${this.genreOfShelf}`)
            }
    }

    removeBook(book: Book) {
        const indexOfBook = this.books.indexOf(book)
        if (indexOfBook > -1) {
            this.books.splice(indexOfBook, 1)
        } else {
            console.log ("No such book on that shelf");
        }
    }

    sellOne(title: string) {
        const foundBook = this.books.find(book => book.title === title)
        if(foundBook && foundBook.stockNumber > 0) {
            foundBook.setStockNumber = foundBook.stockNumber - 1;
            if (foundBook.stockNumber === 0) {
                this.removeBook(foundBook)
            }
        }  else {
        console.log ("No such book on that shelf");
        }
    }

    sellSome(title: string, quantity: number) {
        const foundBook = this.books.find(book => book.title === title)
        if (foundBook && foundBook.stockNumber >= quantity) {
            foundBook.setStockNumber = foundBook.stockNumber - quantity; 
        } else {
            throw new Error("Not enough books in stock")
        }
    }

    reviewShelf() {
        console.log(this.books)
    }

    sortBooksAlphabetically() {
        this.books.sort(function (a, b) {
            if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
         return 0;
        });
  
    }


}




