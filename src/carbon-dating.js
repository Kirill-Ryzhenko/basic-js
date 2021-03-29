const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let act = parseFloat(sampleActivity);
  if (typeof activity != 'string' || !act) return false;
  return act > 0 && act < MODERN_ACTIVITY ? yearCalc(act) : false;
};
