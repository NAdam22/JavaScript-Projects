
document.write("15" + 6); // Outputs "156" due to string concatenation)
document.write("<br>");

// infinity 
document.write(6E310); // Outputs "Infinity"
document.write("<br>");
// -infinity
document.write(-6E310); // Outputs "-Infinity"
document.write("<br>");

// infinity comparisons
function infinity_function() {
    document.getElementById("infinity").innerHTML = (6E310 > 999999999999999); // Outputs "true"
}

// -infinity comparisons
function neg_infinity_function() {
    document.getElementById("neg_infinity").innerHTML = (-6E310 < -999999999999999); // Outputs "true"
}

// Boolean comparisons
document.write(10 > 2); // Outputs "true"
document.write("<br>");
document.write(10 < 2); // Outputs "false"
document.write("<br>");
document.write(10 >= 10); // Outputs "true" 

// console log
console.log(2 + 2); // Outputs "4"

// double equals
document.write(10 == 10); // Outputs "true"
document.write("<br>");
document.write(3 == 11); // Outputs "false"
document.write("<br>"); 

// triple equals
X = 10;
Y = 10;
document.write(X === Y); // Outputs "true" (same value and type)
document.write("<br>");
A = 82;
B = "82";
document.write(A === B); // Outputs "false" (same value, different type)

// logical operators
document.write("<br>");
document.write(5 > 2 && 10 > 4); // Outputs "true" (both conditions true)
document.write("<br>");
document.write(5 > 10 && 10 > 4); // Outputs "false" (one condition false)
document.write("<br>");
document.write(5 > 10 || 10 > 4); // Outputs "true" (one condition true)
document.write("<br>");
document.write(5 > 10 || 10 > 20); // Outputs "false" (both conditions false)
document.write("<br>");

// NOT operator
function not_function() {
    document.getElementById("not").innerHTML = !(20 > 10); // Outputs "false"
}
function not2_function() {
    document.getElementById("not2").innerHTML = !(5 > 10); // Outputs "true"
}