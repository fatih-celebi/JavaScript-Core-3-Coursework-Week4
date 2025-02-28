function convertToNewRoman(n) {
    let newRoman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";

    for (let i in newRoman) {
      while (n >= newRoman[i]) {
        n -= newRoman[i];
        result += i;
      }
    }
    return result;
}

module.exports = convertToNewRoman;
