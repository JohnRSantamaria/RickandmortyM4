const router = require("express").Router();
const postFavorites = require("../controllers/postFavorites");

router.post("/favs", (req, res) => {
  const {datos} = req.body;
  
  try {
    res.json(postFavorites(datos));
  } catch (error) {
    res.status(500).json({error:error.message});
  }
});

module.exports = router;
