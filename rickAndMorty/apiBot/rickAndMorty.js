import { responseData } from "../data/dataInfo.js";
import fetch from 'node-fetch';

//Task1. function that would return Location’s id by it’s name

const locationName = "Worldender's lair"

function findID(locationName) {
    const resultWithId = responseData.results.filter(element => element.name === locationName).map(item => item.id);

    return resultWithId;
}


//console.log(findID (locationName));


//Task2. function that would return all the Locations with number of residents ≤ 5

function allLocations() {
    const resultLocation = responseData.results.filter(element => element.residents.length <= 5);

    return resultLocation;
}

//console.log(allLocations());


//Task3. function that would get the response and return a list of all Locations, that would have only id and name properties.

function returnIdandName(responseData) {
    const resultIdAndName = responseData.results.map(item => {
   return {id: item.id, name: item.name}
 })

    return resultIdAndName;
}

//console.log(returnIdandName(responseData));

//Task4.function that would return quantity of all residents provided in the response.

function quentity(responseData) {
    const resultOfQuantity = responseData.results.map(item => item.residents.length).reduce((partialSum, a) => partialSum + a);
    return resultOfQuantity;
}

//console.log(quentity(responseData));


//Task5.function that would return a list of all locations’ URLs.

function list(responseData) {
    const resultList = responseData.results.map(item => item.url);
    return resultList;
}

//console.log(list(responseData));

//Task6.write a request that would receive all Characters in a response

fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET'
}).then((response) => { return response.json() })
//.then((data) => { console.log(data) })

//Task7. Implement a program that would return an object of all the locations in the following format

function newFormat (responseData) {
    const uniqDimension = responseData.results.map((item) => item.dimension).filter((value, index, self) => self.indexOf(value) === index)
    
    const findLocations = uniqDimension.map((item) => {return {
        dimension: item,
        locations: responseData.results.filter(element => element.dimension === item).map(item => {return {
            id:item.id, 
            name:item.name,
            type: item.type
        }}) 

    }})

    const dimensions = [];
        dimensions.push(findLocations)
        return {dimensions: findLocations}
}
//console.log(JSON.stringify(newFormat(responseData), null, 4));

console.dir(newFormat(responseData), { depth: null });

