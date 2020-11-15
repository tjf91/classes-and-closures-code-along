/* 
  Once you complete a problem, refresh ./closures.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////
/* 
  Below we have a function named count that takes in a number
  Create a closure that will increment num by one and return the result when invoked

  (Hint: When newClosure is invoked, it should return 6 the first time, 7 the second time, etc.)

*/

function count(num){
  var n = num
  return function (){
    return n+=1
  }
};


// Do not edit the code below.
var newClosure = count(5);

// Do not edit the code above.



////////// PROBLEM 2 //////////
/* 
  Using closures and only the arguments from greeting and greetingClosure's invocations included below, write a function that will make the below code work
  When greetingClosure is invoked with 'Hello', it should return 'Hello Henry'
  'Henry' should be coming from the argument given to the function named greeting

  ------------- CODE TO MAKE WORK ------------
  const greetingClosure = greeting('Henry');
  greetingClosure('Hello')
  
*/
 
// Code here
    function greeting(name){
      let n = name
      return function(greet){
        return (greet+" "+n)
      }
    }
    


// After you have created the greeting function above, uncomment the code below, but do not edit it

const greetingClosure = greeting('Henry');
let greet = greetingClosure('Hello')
    


////////// PROBLEM 3 //////////
/* 
  Here we will be creating a calculator

  Write a function called calculatorCreator
  Create a variable called num inside of calculatorCreator that is equal to the value 0
  Use the module pattern to create four additional methods named add, subtract, multiply and divide
  These methods should each take in a number parameter
  They should use the parameter to change the original num variable (by adding, subtracting, multiplying and dividing)

*/

// Code here
function calculatorCreator (){
  let num=0
  return{
    add:function(n){
      num+=n
      return num
    },
    subtract:function(n){
      num-=n
      return num
    },
    multiply:function(n){
      num*=n
      return num
    },
    divide:function(n){
      num/=n
      return num
    },
  }
}


////////// PROBLEM 4 //////////
/* 
  Create a class called Puppy
  The class should have a constructor that accepts three parameters: happiness, energy, and behavior
  
*/

// Code here
class Puppy {
  constructor(happiness,energy,behavior) {
    this.happiness=happiness
    this.energy=energy
    this.behavior=behavior
  }

}


////////// PROBLEM 5 //////////
/* 
  Create a class called Car that creates two properties on each Car object
  The properties should be called manufacturer and year
  The class should also have a method called displayManufacturer that returns the manufacturer
  It should also have a method called displayYear that returns the year

*/

// Code here
class Car {
  constructor(manufacturer,year) {
    this.manufacturer=manufacturer
    this.year=year    
  }
  displayManufacturer(){
    return this.manufacturer
  }
  displayYear(){
    return this.year
  }
}


////////// PROBLEM 6 //////////
/* 
  Using the Puppy class from Problem 4 as a template, create a new class called Panda
  The class should have a constructor that accepts three parameters: happiness, energy, and behavior
  
  This Panda class should also include two prototype methods:
    - getTreat: This method should increase happiness by 20 and return the new happiness value
    - takesNap: This method should decrease energy by 45 and increase behavior by 15

*/
const larry= new Puppy(10,20,30)
const moe= new Puppy(10,20,30)
const curly= new Puppy(10,20,30)



// Code here

class Panda extends Puppy{
  getsTreat(){
    this.happiness+=20
    return this.happiness
  }
  takesNap(){
    this.energy-=45
    this.behavior+=15
  }
}


