var greeting = "Hello, everybody!";
//Defines the global variable 'greeting'
      //Assigns 'greeting' the string 'Hello, Everybody!'

var specialGuest = "Neil deGrasse Tyson";
//Defines the global variable 'specialGuest'
      //Assigns 'specialGuest' the string 'Neil deGrasse Tyson'

var greetSpecialGuest = "Hello, " + specialGuest + "!";
//Defines the global variable 'greetSpecialGuest'
      //Assigns 'greetSpecialGuest' the concatantion of:
            // 1. The string "Hello,"
            // 2. the string variable 'specialGuest' (here 'Neil deGrasse Tyson')
            // 3. The string "!"
      // The result is the string "Hello, Neil deGrasse Tyson!"

var topic = "space";
//Defines the global variable 'topic'
      //Assigns 'topic' the string 'space'

var conversation = `Let's talk about ${topic}.`;
//Defines the global variable 'conversation'
      //Assigns 'conversation' the string 'Let's talk about ${topic}.'
            //The interpolation '${topic}' references the 'topic' variable
            //Because the phrase is wrapped in back ticks, the interpolation will return the string 'space'
      //The final result is the string 'Let's talk about space.'