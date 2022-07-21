const palindromes = function (string) {
  // Regular expression says "search whole string for any characters that are NOT a-z"
  const filteredString = string.toLowerCase().replace(/[^a-z]/g, "");
  return filteredString.split("").reverse().join("") === filteredString;
};

//palindromes("works with multiple words");
// Do not edit below this line
module.exports = palindromes;
