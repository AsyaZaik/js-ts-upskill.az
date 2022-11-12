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
    
    flat1.rentPrice = flat1.salePrice * 0.015;
    flat2.rentPrice = flat2.salePrice * 0.015;
    flat3.rentPrice = flat3.salePrice * 0.015;
    flat4.rentPrice = flat4.salePrice * 0.015;
    flat5.rentPrice = flat5.salePrice * 0.015;
   
    
    console.log(flat1, flat2, flat3, flat4, flat5);
    
   
  