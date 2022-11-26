let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  
  let num = 1;
  let result = convertToOldRoman(num);
  let expected = "I";
  expected(result).toEqual(expected);
  
});
