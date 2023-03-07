const router = require("express").Router();
const getCharDetail = require("../controllers/getCharDetail");

router.get("/detail/:id", async (req, res) => {
  const { id } = req.params;

  try {
    res.json(await getCharDetail(id));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
