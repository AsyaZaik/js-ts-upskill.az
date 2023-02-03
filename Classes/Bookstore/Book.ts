import { Author } from "./Author"

export class Book {
title: string;
author: Author;
price: number;
stockNumber: number;
genre: string;

constructor(title:string, author:Author, price:number, stockNumber:number, genre:string) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.stockNumber = stockNumber;
    this.genre = genre;
}

getBookInfo(){
    console.log("title:", this.title + ",", "authorName:", this.author.name + ",", "price:", this.price);
}

get getPrice(): number {
    return this.price;
}

get getStock(): number {
    return this.stockNumber;
}

get getGenre(): string {
    return this.genre;
}

set setStockNumber(stockNumber: number) {
    this.stockNumber = stockNumber
}
}

