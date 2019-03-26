var greeting = "Hello, everybody!";
//Defines the variable 'greeting' and sets it equal to the string 'Hello, Everybody!'

var specialGuest = "Neil deGrasse Tyson"
//Defines the variable 'specialGuest' and sets it equal to the string 'Neil deGrasse Tyson'

var greetSpecialGuest = "Hello, " + specialGuest + "!";
//Defines the variable 'greetSpecialGuest' and sets it equal to the concatanation of the string "Hello," the variable 'specialGuest' ('Neil deGrasse Tyson'), and the string "!"
// Equals the string "Hello, Neil deGrasse Tyson!"

var topic = "space";
//Defines the variable 'topic' and sets it equal to the string 'space'

var conversation = `Let's talk about ${topic}.`;
//Defines the variable 'conversation' and sets it equal to the string 'Let's talk about ${topic}.'
//The interpolation '${topic}' references the 'topic' variable and will return the string 'space'
//The final result is the string 'Let's talk about space.'