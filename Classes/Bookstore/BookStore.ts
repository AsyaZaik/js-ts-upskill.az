import { Author } from "./Author";
import { Book } from "./Book";
import { BookShelf } from "./BookShelf";


export class BookStore {
    nonFiction: BookShelf
    science: BookShelf
    classics: BookShelf
    
    

    constructor(nonFiction: BookShelf, science: BookShelf, classics: BookShelf) {
        this.nonFiction = nonFiction;
        this.science = science;
        this.classics = classics;
    }

    getListOfBooks() {
        const listOfBooks: Book[] = []
        return listOfBooks.concat(this.nonFiction.getBooks,this.science.getBooks, this.classics.getBooks)
    }

    getABookByGenre(genre: string) {
        if(genre === "nonFiction") {
            const foundBook = this.nonFiction.books.find(book => book.genre === genre)
            return foundBook
        }
        if(genre === "science") {
            const foundBook = this.science.books.find(book => book.genre === genre)
            return foundBook
        }
        if(genre === "classics") {
            const foundBook = this.classics.books.find(book => book.genre === genre)
            return foundBook
        } else {
            console.log ("No such genre in the store")
        }
    }

    getABookByAuthor(author: string) {
        const listOfBooks = this.getListOfBooks()
        const bookByAuthor = listOfBooks.find(book => book.author.name === author)
        return bookByAuthor
        
    }

    getABookByTitle(title:string) {
        const listOfBooks = this.getListOfBooks()
        const bookByTitle = listOfBooks.find(book => book.title === title)
        return bookByTitle
    }

}

