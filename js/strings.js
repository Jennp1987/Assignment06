/*eslint-env browser*/

//STEP 1

/*
function usersNameLength() {
    "use strict";
    var usersName = window.prompt("Type in your name");
    var nameLength = usersName.length;
    return nameLength; 
}

window.alert(usersNameLength());
*/

//STEP 2

/*
function codeNum() {
    "use strict";
    var usersName = window.prompt("Type in your name"),
        usersNum = window.prompt("Enter in a number to find the relating letter in your name"),
        numLetter = usersName.charAt(usersNum);
        return numLetter;
    
}
window.alert(codeNum());
*/

//STEP 3


/*
function concatName() {
    "use strict";
    var firstName = window.prompt("Type in your first name"),
        lastName = window.prompt("Type in your last name"),
        firstLast = "Your name is: " + firstName.concat(" ", lastName);
        return firstLast;
}

window.alert(concatName());
*/


//STEP 4

/*
function foxIndx() {
    "use strict";
    var fox = "The quick brown fox jumps over the lazy dog",
        indx = fox.indexOf("fox");
    return indx;
    
}
window.alert(foxIndx());
*/

//STEP 5

/*
function lastFox() {
    "use strict";
    var fox = "The quick brown fox jumps over the lazy fox",
        indx = fox.lastIndexOf("fox");
    return indx;   
}

window.alert(lastFox());
*/


//STEP 6

/*
function quickFox() {
    "use strict";
    var fox = "The quick brown fox jumps over the lazy dog",
        fullName = window.prompt("Type in your full name"),
        replaceMe = fox.replace("the lazy dog", fullName);
    return replaceMe;
    
}

window.alert(quickFox());
*/


//STEP 7

/*
function wordExist() {
    "use strict";
    var fox = "The quick brown fox jumps over the lazy dog",
        wordChoice = window.prompt("Please enter a word"),
        wordSearch = fox.search(wordChoice);
    return wordSearch;
    
}
window.alert(wordExist());
*/


//STEP 8


/*
function lazyDog() {
    "use strict";
    var old_string = "The quick brown fox jumps over the lazy dog",
        new_string = old_string.slice(31).toUpperCase();
    return new_string;
    
}

window.alert(lazyDog());
*/



//STEP 9

/*
function lazyDog() {
    "use strict";
    var fox = "      THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG     ".toLowerCase().trim();
    return fox;
    
}
window.alert(lazyDog());
*/


//STEP 10

/*
function capitalize() {
    "use strict";
    var fox = "the quick brown fox jumps over the lazy dog";
    fox = fox[0].toUpperCase() + fox.substring(1);
    return fox;
    
}

window.alert(capitalize());
*/












