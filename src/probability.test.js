const Probability = require("./probability");

test("two probabilities are equal", () => {
  const firstProbability = new Probability(100);
  const secondProbability = new Probability(100);

  expect(firstProbability.equals(secondProbability)).toBe(true);
});

test("two different probabilities are not equal", () => {
  const firstProbability = new Probability(100);
  const secondProbability = new Probability(50);

  expect(firstProbability.equals(secondProbability)).toBe(false);
});

test("probability is not equal to null", () => {
  const firstProbability = new Probability(1);

  expect(firstProbability.equals(null)).toBe(false);
});

test("combining probabilities", () => {
  expect(new Probability(50).and(new Probability(75))).toEqual(
    new Probability(37.5)
  );

  expect(
    new Probability(70).and(new Probability(22)).and(new Probability(90))
  ).toEqual(new Probability(13.86));
});

test("combining probabilities", () => {
  expect(new Probability(40).and(new Probability(40))).toEqual(
    new Probability(16)
  );
});
