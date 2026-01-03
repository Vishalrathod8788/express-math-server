export const addTwoNumbers = (req, res) => {
  const { a, b } = req.body;

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ Error: "A and B are require" });
  }

  const sum = a + b;

  res.status(200).json({ result: sum });
};

export const addArraySum = (req, res) => {
  const { numbers } = req.body;

  if (!Array.isArray(numbers) || numbers.length === 0) {
    return res.status(400).json({ Error: "Array is Empty" });
  }

  const total = numbers.reduce((acum, curr) => acum + curr);

  res.status(200).json({ result: total });
};

export const subTwoNumbers = (req, res) => {
  const { a, b } = req.body;

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ Error: "A and B ar required" });
  }
  const difference = a - b;

  res.status(200).json({ result: difference });
};

export const subArraySum = (req, res) => {
  const { numbers } = req.body;
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return res.status(400).json({ Error: "Array is Empty" });
  }

  const subtraction = numbers.reduce((acum, curr) => acum - curr);

  res.status(200).json({ result: subtraction });
};

export const divideTwoNumbers = (req, res) => {
  const { a, b } = req.query;

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ Error: "A and B are required" });
  }

  if (Number(b) === 0) {
    return res.status(400).json({ Error: "Division by zero is not allowed" });
  }

  const quotient = Number(a) / Number(b);

  res.status(200).json({ a, b, result: quotient });
};
