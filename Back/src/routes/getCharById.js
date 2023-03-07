const router = require("express").Router();
const getcharById = require("../controllers/getCharById");

router.get("/onsearch/:id", async (req, res) => {
  const { id } = req.params;

  try {
    res.json(await getcharById(id));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
