////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////  BASIC SYNTAX  /////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Variables, data types, operators, and control structures (if, for, while) Functions.
//Arrays, objects, and classes.
//Scope, hoisting, and closures.

// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const



// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date


// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Array object.
cars[1] = "Volvo";
person.firstName = "Mark";
person["lastName"] = "Smith";

// Date object:
const date = new Date("2022-03-25");




// JavaScript Function Syntax
// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

function name(parameter1, parameter2, parameter3) {
    // code to be executed
}




// The if Statement
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

if (condition) {
    //  block of code to be executed if the condition is true
  } else {
    //  block of code to be executed if the condition is false
  }




//   JavaScript Loops
//   Loops are handy, if you want to run the same code over and over again, each time with a different value.
// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }

for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }

  for (key in object) {
    // code block to be executed
  }

  while (condition) {
    // code block to be executed
  }






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////  DOM  //////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Manipulation: Selecting and changing HTML elements, handling events.

// With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

// The HTML DOM (Document Object Model)
// When a web page is loaded, the browser creates a Document Object Model of the page.

// The HTML DOM Document Object
// The document object represents your web page.

// If you want to access any element in an HTML page, you always start with accessing the document object.

 document.getElementById(id)	//Find an element by element id
 document.getElementsByTagName(name)	//Find elements by tag name
 document.getElementsByClassName(name)	//Find elements by class name



element.innerHTML =  //new html content	Change the inner HTML of an element
element.attribute = //new value	Change the attribute value of an HTML element
element.style.property = //new style	Change the style of an HTML element
element.setAttribute(attribute, value)	//Change the attribute value of an HTML element



// Examples of HTML events:

// When a user clicks the mouse
// When a web page has loaded
// When an image has been loaded
// When the mouse moves over an element
// When an input field is changed
// When an HTML form is submitted
// When a user strokes a key








//JavaScript HTML DOM EventListener
//element.addEventListener(event, function, useCapture);
element.addEventListener("click", function(){ alert("Hello World!"); });




//Navigating Between Nodes
// You can use the following node properties to navigate between nodes with JavaScript:

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////  if there is a time  ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Error Handling: try, catch, finally, and throw.
//JavaScript Libraries and Frameworks: Introduction to jQuery.
//Asynchronous JavaScript: Callbacks, promises, async/await.
//ES6 Features: let/const, arrow functions, template literals, destructuring, spread/rest operators.