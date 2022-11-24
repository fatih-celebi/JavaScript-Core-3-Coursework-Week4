let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from", function () {
  //expect(removeVowelsFromWords(["Irina", "Etza", "Daniel"])).toEqual(["rn", "tz", "Dnl"]);
  // expect(removeVowelsFromWords("Etza")).toEqual("tz");
  // expect(removeVowelsFromWords("Daniel")).totoEqual("Dnl");

  let input = ["Irina", "Etza", "Daniel"];
  let output = ["rn", "tz", "Dnl"];

  expect(input).toEqual(output);
  // Arrange
  // Act
  // Assert
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
