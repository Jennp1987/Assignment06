/*eslint-env browser*/

//STEP 1

/*
function alphabeticalOrder(string) {
    "use strict";
    var arr = string.split('');
    var order = arr.sort().join('');
    return order;
    
}
window.console.log(alphabeticalOrder("webmaster"));
*/


//STEP 2


//function firstLetterCap(string) {
    //"use strict";
    //return string.replace(/\w\S*/g, function (word) {
        //return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        
    //});
//}
//window.console.log(firstLetterCap('the quick brown fox'));



//STEP 3


/*
function vowels(string) {
    "use strict";
    return (string.match(/[aeiou]/gi) || []).length;
}

window.console.log(vowels('The quick brown fox'));
*/




//STEP 4

/*
function randomG(len) {
    var str = "";
    for (var i = 0; i < len; i++) {
        var num = Math.random()*26 + ('a').charCodeAt(0);
        var ch = String.fromCharCode(num);
        str = str + ch;
    } 
    return str;
} 

window.console.log(randomG(1000));
*/



//STEP 5

/*
function longestName(country) {
    "use strict";
    return country.reduce(function (name, country) {
        return name.length > country.length ? name : country;
        
    },
        "");
}
window.console.log(longestName(["Russia", "Ukraine", "United States of America", "Poland", "Ireland"]));
*/




