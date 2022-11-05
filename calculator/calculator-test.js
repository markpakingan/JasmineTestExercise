
it('should calculate the monthly rate correctly', function () {

  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };

  expect(calculateMonthlyPayment(values)).toEqual("48.33");
});


it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  }

  expect(calculateMonthlyPayment(values)).toEqual("48.54");
});

/// etc
