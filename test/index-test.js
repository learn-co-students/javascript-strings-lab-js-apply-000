/*global concatenatedString, describe, interpolatedString, it, myString */
var greeting = "Hello, everybody!"
var greetings = "Hello,"
var specialGuest = " Neil deGrasse Tyson! !"
var greetSpecialGuest = "specialGuest"  + "greetings";
var topic = "space";
var conversation = `${topic}`;

('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!");
});

('concatenates strings to greet a special guest in `greetSpecialGuest`',
  function() {
  expect(greetSpecialGuest).toEqual("'Hello${specialGuest!}`")});
  
('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`${topic}`);
});  
