// Ternary Operator and Constructor Function
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
} 
// Constructor Function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
} 
// Another Constructor Function
function Person(First, Last, Age, Eye) {
    this.Person_First = First;
    this.Person_Last = Last;
    this.Person_Age = Age;
    this.Person_Eye = Eye;
}

var John = new Person("John", "Doe", 50, "blue");
var Jane = new Person("Jane", "Smith", 40, "green");
var Emily = new Person("Emily", "Jones", 30, "brown");

function displayPerson() {
    document.getElementById("Person_Info").innerHTML =
    John.Person_First + " " + John.Person_Last + " is " + John.Person_Age + 
    " years old and has " + John.Person_Eye + " eyes.";
}

// Nested Function
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}