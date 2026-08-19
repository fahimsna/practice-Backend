const { Router } = require("express");
const registerUser = require("../controllers/usercontroller");
const router = Router();
router.post("/register", registerUser);

module.exports = router;
