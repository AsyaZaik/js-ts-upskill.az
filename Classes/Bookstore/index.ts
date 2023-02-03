import { Author } from "./Author"
import { Book } from "./Book"
import { BookShelf } from "./BookShelf"
import { BookStore } from "./BookStore";

//Create 5 books with the default stock number - 20 items and add them to the Bookshelf

const newShelfNonFiction = new BookShelf("nonFiction");
const newShelfScience = new BookShelf("science")
const newShelfClassics = new BookShelf("classics")
const bookTheWhaCafe = new Book("The Why Cafe", new Author("John Strelecky", 53, "Was born in the USA"), 8, 20, "nonFiction");
const bookWitcher = new Book("The Witcher", new Author("Andrzej Sapkowsk", 74, "Was born in Poland"), 29, 20, "nonFiction");
const bookFlowrsForAlgernon = new Book("Flowrs For Algernon",new Author("Daniel Keyes", 86, "was born in the USA. Died in 2014"), 12, 20, "nonFiction");
const bookTogether = new Book("Together",new Author("Kevin Monzy", 32, "was born in Canada"), 12, 20, "nonFiction");
const bookAnother = new Book("Another",new Author("John Tenzy", 24, "was born in Australia"), 12, 20, "nonFiction");
const bookToDevelop = new Book("To Develop", new Author("Samanta",57, "Was born in Spain"), 6, 20, "science");
const bookCats = new Book("Cats", new Author("Jessica", 42, "Was born in France"), 10, 20, "classics")


newShelfNonFiction.addBook(bookTheWhaCafe);
newShelfNonFiction.addBook(bookWitcher);
newShelfNonFiction.addBook(bookFlowrsForAlgernon);
newShelfNonFiction.addBook(bookTogether);
newShelfNonFiction.addBook(bookAnother);
newShelfScience.addBook(bookToDevelop);
newShelfClassics.addBook(bookCats);


// //Review shelf
// newShelfNonFiction.reviewShelf();

// //Remove one of the added books from the shelf 
// newShelfNonFiction.removeBook(bookAnother);

// //Review shelf
// newShelfNonFiction.reviewShelf();

// // Sell all of the books of one title
// newShelfNonFiction.sellSome("Flowrs For Algernon", 20);

// // Sell one item per each of 2 different titles
// newShelfNonFiction.sellOne("The Why Cafe");
// newShelfNonFiction.sellOne("The Witcher");

// // Review shelf
// newShelfNonFiction.reviewShelf();

const newBookStore = new BookStore(newShelfNonFiction, newShelfScience, newShelfClassics);

//console.log (newBookStore.getABookByTitle("To Develop"))
newShelfNonFiction.sellOne("The Why Cafe");
//newShelfNonFiction.reviewShelf()
console.log(newShelfNonFiction)
