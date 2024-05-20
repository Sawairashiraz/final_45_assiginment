function storeCarInfo(manufacture: string,modelName: string, ...extraOption: { [key : string]:any}[]){
      const carInfo ={
        manufacture,
        modelName,
        ...Object.assign({},...extraOption )
      }

      return carInfo;
};
let answer=storeCarInfo('Honda','Civic',{color:'black'},{features:['navigation','power windo']})
console.log(answer);