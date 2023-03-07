const router = require("express").Router();
const getAllCharacters = require("../controllers/getAllCharacters");


router.get("/all", (req, res) => {
  
  try {
    getAllCharacters();

    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({error:error.message});
  }
  
});

module.exports = router;