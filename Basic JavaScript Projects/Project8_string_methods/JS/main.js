// Concat Method Example

function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence; 
}
// Slice Method Example

function slice_method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;       
}
// toUpperCase Method Example

function upper_method() {
    var text = "Hello World!";
    var result = text.toUpperCase();
    document.getElementById("Upper").innerHTML = result;
}
// Search Method Example

function search_method() {
    var str = "Visit Microsoft!";
    var n = str.search("Microsoft");
    document.getElementById("Search").innerHTML = n;
}
// Number Method Example

function string_method() {
    var X = 182;
    document.getElementById("Number").innerHTML = X.toString();
}
// toPrecision Method Example

function precision_method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

// fixed Method Example

function fixed_method() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("Fixed").innerHTML = n;
}
// valueOf Method Example

function value_method() {
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("Value").innerHTML = res;
}
