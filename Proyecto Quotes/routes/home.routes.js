const router = require("express").Router();
const { HomeControler, QuotesControler } = require("./../controllers");

router.get("/", HomeControler.index);
router.get("/about", HomeControler.about);
router.get("/quotes", QuotesControler.index);
router.get("/quotes/all", QuotesControler.get);
router.post("/quotes", QuotesControler.add);

module.exports = router;
