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
   
    
    const flat3 = {
    address: '676 Thatcher Dr.Kingsclear',
    space: 71,
    numberOfRooms: 2,
    salePrice: 60000,
    sold: false
    }
    
    const flat4 = {
    address: '76 Central St.Brooks',
    space: 59,
    numberOfRooms: 2,
    salePrice: 64000,
    sold: false
    }
    
       const flat5 = {
    address: '757 Brookside StreetLachute',
    space: 125,
    numberOfRooms: 5,
    salePrice: 99000,
    sold: true
    }


    const flatArray = [];

    flatArray.push(flat1, flat2, flat3, flat4, flat5);

    flatArray[2].numberOfRooms = 1;

    flatArray.shift();

    console.log (flatArray);
