const router = require("express").Router();
const deleteFavorite = require("../controllers/deleteFavorite");

router.delete("/favs/:id", (req, res) => {
  const {id} = req.params;
  try {
    res.json(deleteFavorite(id))
  } catch (error) {
    res.status(500).json({error:error.message});
  }
  
});

module.exports = router;
