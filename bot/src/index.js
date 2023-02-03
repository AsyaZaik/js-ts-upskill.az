const flat1 = {
    address: '944 Vale Dr.Mocksville',
    space: 24,
    numberOfRooms: 1,
    salePrice: 24000,
    sold: false
    }
    
    const flat2 = {
    address: '881 Courtland DriveBoucherville',
    space: 63,
    numberOfRooms: 2,
    salePrice: 53000,
    sold: true
    }
   

// Task 1

function showAFlat(flat) {
        console.log (flat)
}


// Task 2

function markAsSold(flat) {
    return flat.sold = true
}

//console.log (markAsSold(flat1))
//console.log(flat1)


//Task 3

const flatArray = [
    {
      address: '881 Courtland DriveBoucherville',
      space: 63,
      numberOfRooms: 2,
      salePrice: 53000,
      sold: true
    },
    {
      address: '676 Thatcher Dr.Kingsclear',
      space: 71,
      numberOfRooms: 1,
      salePrice: 60000,
      sold: false
    },
    {
      address: '76 Central St.Brooks',
      space: 59,
      numberOfRooms: 2,
      salePrice: 64000,
      sold: false
    },
    {
      address: '757 Brookside StreetLachute',
      space: 125,
      numberOfRooms: 5,
      salePrice: 99000,
      sold: true
    }
  ]


function filterBySpace(flatsArray, desiredSpace) {
    const newArray = []
    for(let i = 0; i < flatsArray.length; i++) {
       if (flatsArray[i].space >= desiredSpace) {
          newArray.push(flatsArray[i])
       }
    }
    console.log (newArray)
    return newArray
}


//filterBySpace(flatArray, 100)



//Task 4

function getShortFlatInfo(flat) {
    return [flat.address, flat.numberOfRooms, flat.salePrice]
}

console.log(getShortFlatInfo(flat1))


