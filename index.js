 function receivesAFunction(callback) {
     callback();
 }

 function returnsANamedFunction() {
   function namedFunction() {
       console.log("This is a named function.");
   }
   return namedFunction;}

   function returnsAnAnonymousFunction() {
       return function() {
           console.log("This is an anonymous function.");
       };
   }

 receivesAFunction(() => console.log("Callback function executed."));
 const namedFunc = returnsANamedFunction();
 namedFunc(); 
const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc();

const returnFirstTwoDrivers = function (drivers) {
  //  array
  return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
console.log(returnLastTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
};
