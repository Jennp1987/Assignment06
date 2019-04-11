/*eslint-env browser*/

//STEP 1


/*
function daysInMonth(month, year) {
    "use strict";
    return new Date(year, month, 0).getDate();
     
}

window.console.log(daysInMonth(4, 2019));
*/


//STEP 2

/*
function monthName() {
    "use strict";
    var date = new Date();
    window.console.log("The current month is " + date.toLocaleDateString('en-us', {month: 'long'}));
    
}

monthName();
*/



//STEP 3


/*
function weekend(dt) {
    "use strict";
    var date = new Date(dt);
    if (date.getDay() === 6 || date.getDay() === 0) {
        return "weekend";
    }
        else return "not weekend";
}
window.console.log(weekend('April 8, 2019'));
*/


//STEP 4


/*
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function yesterday() {
    "use strict";
    var date = new Date();
    date.setDate(date.getDate() - 1);
    return days[date.getDay()];
}
window.console.log(yesterday());
*/


//STEP 5

/*
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function firstLetter() {
    "use strict";
    var date = new Date();
    date = date.getDay();
    date = days[date].charAt(0);
    return date;
    
}
window.console.log(firstLetter());
*/



