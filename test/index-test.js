/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `Hello, everybody!`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in SpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, Neil deGrasse Tyson!`)
}) 

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual("Let's talk about space.")
})
var greeting = "Hello, everybody!";

var specialGuest = "Neil deGrasse Tyson"

var greetSpecialGuest = "Hello, " + specialGuest + "!";

var topic = "space";

var conversation = `Let's talk about ${topic}.`;