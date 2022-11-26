function convertToOldRoman(n) {
    let oldRoman = {
        M: 100,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };
    
    let result = "";

    for (let i in obj) {
        while (n >= oldRoman[i]) {
          n -= oldRoman[i];
          res += i;
        }
    }
    return result;
}

module.exports = convertToOldRoman;
