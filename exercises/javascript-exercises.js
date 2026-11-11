console.log("Hello, JavaScript!");

alert("Welcome to MIS201!");
alert("New Message Click Me!");

console.log(3+5)
console.log("My name is Enes")

let courseName = "Internet Technologies and Programming";
console.log("Course:", courseName);
console.log("Total Price:", 20*5);

var userName1 = prompt("Please enter your name:");
alert("Welcome, " + userName1 + "! Welcome to the course.");

let result = confirm("Do you want to continue?");
if (result) {
    alert("You chose to continue!");

} else {
    alert("You chose to cancel.");
}   

let age = prompt("Please enter your age:");
console.log(typeof age);

let numberAge = Number(prompt("Please enter your age:"));
console.log(typeof numberAge);

let sum = numberAge + 30;
console.log("Age + 30:", sum);



let userName = prompt("What is your name?");

if (userName !== null && userName.trim() !== "") {
    let continueProcess = confirm(
    "Hello, " + userName + "! Do you want to continue?"
    );
    if (continueProcess) {
    alert("Welcome to the application!");
    } else {
    alert("Operation cancelled.");
    }
} else {
    alert("No name was provided.");
}