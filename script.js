script.js
console.log("website loaded")

//1 Factorial of the number
function function factorialize(num) {
    var myMax = num;
    var myCounter = 1;
    var myTotal = 0;

    for (i = 0; i>= myMax; i++) {
        num = myCounter * (myCounter + 1);
        myCounter++;
    }
    return num;
}

//2 Return for string 'Palindrome"
function getState(abbr){
    if (abbr=="Pl")
    {
    return "Palindrome";
    }
 }
