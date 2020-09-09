/**
 * exercise 1
 */
console.log("Exercise 1:");
function displayHash() {
    let original = "";
    let newLine = "\n";
    for (let ctr = 0; ctr < 8; ctr++) {
        for (let counter = 0; counter < ctr; counter++) {
            original += "#";
        }
        original += newLine;
    }
    return original;
}

console.log(displayHash());

/**
 * exercise 2
 * 
 */

function countBs() {
    let counter = 0;
    let input = document.getElementById("input").value;
    for (let char of input) {
        if (char == 'B') {
            counter++;
        }
    }
    document.getElementById('output').innerHTML = counter;
}

function countChar() {
    let counter = 0;
    let condition = document.getElementById('condition').value;
    if (condition.length > 1) {
        alert("'Character to countd' field takes only one character!");
        document.getElementById('condition').value = "";
        return;
    }
    let input = document.getElementById('input2').value;

    for (let char of input) {
        if (char == condition) {
            counter++;
        }
    }
    document.getElementById('input2').innerHTML = counter;
}


/**
 * exercise 3
 * 
 */
function reverseArray(arr) {
    let newArray = [];
    let pos = arr.length - 1;
    for (let ctr = 0; ctr < arr.length; ctr++) {
        newArray.push(arr[pos - ctr]);
    }
    return newArray;
}
console.log(reverseArray([12, 13, 14, 15, 16]));

function reverseArrayInPlace(arr) {
    return arr.reverse();
}
console.log(reverseArrayInPlace([12, 13, 14, 15, 16]));


/**
 * exercise 4
 */

var mountains = [
    {
        "name": "Kilimanjaro",
        "height": 5895,
        "place": "Tanzania"
    },
    {
        "name": "Everest",
        "height": 8848,
        "place": "Nepal"
    },
    {
        "name": "Mayon",
        "height": 2463,
        "place": "Philippines"
    },
    {
        "name": "Denali",
        "height": 6190,
        "place": "USA"
    }
];

/**
 * 
 * exercise 4
 */
function createTable() {
    let parent = document.getElementById("cont");
    let keys = Object.keys(mountains[0]);
    let elements = "<table id='mountains'><tr><th>" + keys[0] + "</th><th>" + keys[1] + "</th><th>" + keys[2] + "</th></tr>";
    for (let element of mountains) {
        elements += "<tr><td>" + element[keys[0]] + "</td><td>" + element[keys[1]] + "</td><td>" + element[keys[2]] + "</td></tr>";
    }
    parent.innerHTML = elements;
    
}




