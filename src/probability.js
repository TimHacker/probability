class Probability {
  constructor(percentageAsDecimal) {
    this._likelihood = percentageAsDecimal;
  }

  equals(otherProbability) {
    if (!otherProbability) return false;

    return this._likelihood === otherProbability._likelihood;
  }

  and(otherProbability) {
    return new Probability((this._likelihood * otherProbability._likelihood) / 100);
  }
}

module.exports = Probability;
