const removeFromArray = function (inputArr, ...removedElements) {
  return inputArr.filter((notWanted) => !removedElements.includes(notWanted));
};

// Do not edit below this line
module.exports = removeFromArray;
