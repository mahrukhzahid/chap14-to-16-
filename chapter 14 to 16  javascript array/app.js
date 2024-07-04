
// // // Q1) Declare an empty array using JS literal notation to store student names in future.

var studentNames = [];

// // // Q2) Declare an empty array using JS object notation to store student names in future.

var studentNames = new Array();

// // // Q3) Declare and initialize a strings array.

let stringArray = ["aftab","ahmed","soomro"];

// // // Q4) Declare and initialize a numbers array.

let numberArray = [1,2,3];

// // // Q5) Declare and initialize a boolean array.

// let boolArray = [True,False];

// // // Q6) Declare and initialize a mixed array.

// let mixArray = ["aftab",1,True,""];

// // // Q7) Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,BS, BCOM, MS, M. Phil., PhD).

let availableEd = ["1) SSC","2) HSC","3) BCS","4) BS","5) BCOM","6) MS","7) M.Phil.","8) PHD"];
document.write(`<h1>Qualifications</h1>`);
for (let i of availableEd) {
    document.write(`${i}<br/>`);
}

// // // // Q8) Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student.

// let studentNames = ["michael","john","tony"];
let studentScores = [450,400,350];
document.write(`Score of ${studentNames[0]} is ${studentScores[0]}. Percentage: ${studentScores[0]/500 *100}%<br/>Score of ${studentNames[1]} is ${studentScores[1]}. Percentage: ${studentScores[1]/500 *100}%<br/>Score of ${studentNames[2]} is ${studentScores[2]}. Percentage: ${studentScores[2]/500 *100}%`)

// // // Q9) Initialize an array with color names. Display the array elements in your browser.

let colorNames = ["Red","Blue","Green"];
document.write(`${colorNames}<br/>`);

// // // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.

let askUser1 = prompt("What color you want to add to the beginning of the array");
colorNames.unshift(askUser1);
document.write(`${colorNames}<br/>`);

// // // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

let askUser2 = prompt("What color you want to add to the end of the array");
colorNames.push(askUser2);
document.write(`${colorNames}<br/>`);

// // // c. Add two more color to the beginning of the array.Display the updated array in your browser.

colorNames.unshift("Orange","Yellow");
document.write(`${colorNames}<br/>`)

// // // d. Delete the first color in the array. Display the updated array in your browser.

colorNames.shift();
document.write(`${colorNames}<br/>`);

// // // e. Delete the last color in the array. Display the updated array in your browser.

colorNames.pop();
document.write(colorNames);

// // // f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

let colorIndex = +prompt("At which index you want to add a color");
let colorName = prompt("Which color you want to add");
colorNames[colorIndex] = colorName;
document.write(colorNames);

// // // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

let indexOfColor = +prompt("At which index you want to delete a color");
let numberOfColors = +prompt("How many colors you want to delete");
colorNames.splice(indexOfColor,numberOfColors)
document.write(colorNames);

// // // Q10) Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

let scoreOfStudents = [50,25,100,60,13,90,5];
document.write(`Scores of Students : ${scoreOfStudents}<br/>`);
scoreOfStudents.sort((a, b) => a - b);   //ascending order
// scoreOfStudents.sort((a, b) =>b - a);    //descending order
document.write(`Ordered Scores of Students : ${scoreOfStudents}`);

// // // Q11) Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.

let cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write(`Cities List :<br/>${cities}<br/>`);
let selectedCities = cities.slice(1,4);
document.write(`Selected Cities List :<br/>${selectedCities}`);

// // // Q12) Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

let arr = ["This"," is "," my "," cat "];
document.write(`<h3>Array :<h3/>${arr}<br/>`);

document.write(`<h3>String :<h3/>${arr.join("")}`);

// // // Q13) Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

let devices1 = new Array("Keyboard","Mouse","Printer","Monitor");
document.write(`Devices:<br/>${devices1}<br/><br/>`);

for (let j of devices1) {
    document.write(`Out:<br/>${j}<br/>`);
}

// // // Q14) Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)

let devices2 = new Array("Keyboard","Mouse","Printer","Monitor");
document.write(`Devices:<br/>${devices2}<br/><br/>`);

devices2.reverse();

for (let j of devices2) {
    document.write(`Out:<br/>${j}<br/>`);
}

// // // Q15) Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in your browser using document.write() method:

let phoneManufacturers = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write(`<label><h2>Phone Manufacturers :<h2/></label>
<select>
  <option value="">${phoneManufacturers[0]}</option>
  <option value="">${phoneManufacturers[1]}</option>
  <option value="">${phoneManufacturers[2]}</option>
  <option value="">${phoneManufacturers[3]}</option>
  <option value="">${phoneManufacturers[4]}</option>
  <option value="">${phoneManufacturers[5]}</option>
</select>`);
