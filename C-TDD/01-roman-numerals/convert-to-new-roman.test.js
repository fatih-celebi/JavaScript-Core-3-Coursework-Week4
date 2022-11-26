let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  let num = 1;
  let result = convertToNewRoman(num);
  let expected = "I";
  expected(result).toEqual(expected);
});
