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

function countBs(){
    let counter = 0;
    let input = document.getElementById("input").value;
    for(let char of input){
        if(char == 'B'){
            counter++;
        }
    }
    document.getElementById('output').innerHTML = counter;
}