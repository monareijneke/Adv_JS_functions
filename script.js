//zet de functie om naar een arrow functie DEEL A

const ikRockArrowFunctions = function () {
  console.log("Joe, ik rock de arrow functions!");
};

const ikRockArrowFunctions2 = () =>
  console.log("Joe, ik rock de arrow functions twee keer!");

ikRockArrowFunctions2();
ikRockArrowFunctions();

// Deel B
const fivePlusSeven = function () {
  return 5 + 7;
};
console.log(fivePlusSeven()); //12

const fivePlusSeven2 = () => 5 + 7; //functie op 1 regel
console.log(fivePlusSeven2()); //12

//deel C met 2 parameters
const myFunction = (a, b) => a + b;
console.log(myFunction(3, 4));

//deel D met 1 parameter
const addFive = (a) => a + 5; // geschreven zonder haakjes, maar de extentie (stylelint??) zet er haakjes om
console.log(addFive(5));

//deel E function met Object
const createObject = () => ({ greeting: "Hoi!" });
console.log(createObject());
