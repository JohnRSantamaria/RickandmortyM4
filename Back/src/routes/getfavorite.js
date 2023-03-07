const router = require("express").Router();
const getFavorites = require("../controllers/getFavorites");

router.get("/favs", (req, res) => {
  try {
    res.json(getFavorites());
  } catch (error) {
    res.status(500).json({error:error.message});
  }
});

module.exports = router;
