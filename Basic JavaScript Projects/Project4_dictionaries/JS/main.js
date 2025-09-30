
// Dictionary function
function my_Dictionary() { // Start of function 
    var Aminal = { // Start of dictionary
        Species: "Dog", // Key: Value pairs
        Name: "Rex",  
        Age: 5,
        Color: "Brown",
        Bread: "Labrador",
        Sound: "Woof"

    };
    delete Aminal.Sound; // Deletes the Sound key and its value from the dictionary
    document.getElementById("Dictionary").innerHTML = Aminal.Sound; // Attempts to display the value of the Sound key, which has been deleted
    } 