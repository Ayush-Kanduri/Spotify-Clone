const express = require("express");
const router = express.Router();

const playlistsController = require("../controllers/playlists_controller");

router.get("/:id", playlistsController.show);
router.get("/create", playlistsController.add);

module.exports = router;