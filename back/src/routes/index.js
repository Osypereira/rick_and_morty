const { Router } = require("express");

const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail.js");
const { addFav, getFavs, deleteFav } = require("../controllers/favControllers");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

router.post("/fav", addFav);
router.get("/fav", getFavs);
router.delete("/fav/:id", deleteFav);

module.exports = router;
