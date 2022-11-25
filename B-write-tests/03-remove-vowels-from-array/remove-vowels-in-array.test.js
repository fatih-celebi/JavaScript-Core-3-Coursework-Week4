let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  //expect(removeVowelsFromWords(["Irina", "Etza", "Daniel"])).toEqual(["rn", "tz", "Dnl"]);
  // expect(removeVowelsFromWords("Etza")).toEqual("tz");
  // expect(removeVowelsFromWords("Daniel")).totoEqual("Dnl");

  let words = ["irina", "etza", "daniel"];
  let result = removeVowelsFromWords(words);
  let expected = ["rn", "tz", "dnl"];

  expect(result).toEqual(expected);

});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
