 //write a function called describe_city()that accept country and its city. the function

 function describe_city(nameOfCity: string,country:string ="south africa"){
    return  `${nameOfCity} is in ${country}`;
 };
 //3 cities
 let city1 =describe_city("captown", "south africa");
 let city2 =describe_city("dehli", "India");
 let city3=describe_city("Quetta","Pakistan");
 let city4 =describe_city("UAE","Dubai");
 
 console.log(city1);
 console.log(city2);
 console.log(city3);
 console.log(city4);
 
 