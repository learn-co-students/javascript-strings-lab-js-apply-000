/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function(' Hello, everybody ') {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function(' Hello,' + specialGuest " ! ") {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function(` Let's talk about ${topic}.) {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
