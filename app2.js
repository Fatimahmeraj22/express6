import express from "express";
const app = express();

const PORT = 5002;

app.use(express.json());

app.get("/users/:names", (req, res) => {
  try {
    let userInput = req.params.names

    res.status(200).json({msg:userInput});
  } catch (error) {
    console.log(error.name);
    res.status(200).json(userInput)
  }
});

app.listen(PORT, () => {
    console.log(`server is runing up and running`);
});
