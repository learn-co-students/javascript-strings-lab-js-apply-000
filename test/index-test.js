/*global concatenatedString, describe, interpolatedString, it, myString */

it('Hello, everybody!', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it("Hello " + specialGuest + "!", function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('Let's talk about ${topic}.', function() {
  expect(conversation).toEqual('Let's talk about ${topic}.')
})
