const ftoc = function (fdeg) {
  return Math.round(((fdeg - 32) / 1.8) * 10) / 10;
};

const ctof = function (cdeg) {
  return Math.round((cdeg * 1.8 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
