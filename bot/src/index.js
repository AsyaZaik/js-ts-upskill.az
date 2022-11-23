
// Task 1

function showAFlat(flat) {
        console.log (flat)
}


// Task 2

function markAsSold(flat) {
    return flat.sold = true
}

console.log (markAsSold(flat1))
console.log(flat1)


//Task 3

function filterBySpace(flatsArray, desiredSpace) {
    const newArray = []
    console.log (flatsArray, desiredSpace)
    for(let i = 0; i < flatsArray.length; i++) {
       if (flatsArray[i].space >= desiredSpace) {
          newArray.push(flatsArray[i])
       }
    }
    return newArray
}

let result = filterBySpace(flatArray, 100)
console.log (result)


//Task 4

function getShortFlatInfo(flat) {
    return [flat.address, flat.numberOfRooms, flat.salePrice]
}

console.log(getShortFlatInfo(flat1))
