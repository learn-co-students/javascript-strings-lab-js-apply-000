//defined `greeting` with string's expected value from tests
var greeting = "Hello, everybody!";



var specialGuest = "Neil deGrasse Tyson";
//concatenated to match expected value, by adding the above variable to string.
var greetSpecialGuest = "Hello, " + specialGuest + "!";



var topic = "space";
//interpolated to match expected value, by inserting variable into string. Cleaner approach than lengthy concatanations when reading code. Backticks don't require me to escape "'".
var conversation = `Let's talk about ${topic}.`;