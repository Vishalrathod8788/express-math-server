export const addTwoNumbers = (req, res) => {
  const { a, b } = req.body;

  if (a === undefined || b === undefined) {
    return res.status(400).send("A and B are require");
  }

  const sum = a + b;

  res.status(200).send(`Sum is ${sum}`);
};
