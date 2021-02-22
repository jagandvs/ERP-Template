const express = require("express");

const { logger } = require("../controller/_helper");
const { isSignedIn } = require("../controller/auth");
const {
  userMaster,
  getModule,
  getScreen,
  userRight,
  insertUserRights,
} = require("../controller/administrator/userRight");

const router = express.Router();

router.get("/userMaster", isSignedIn, userMaster);
router.get("/getModule", isSignedIn, getModule);
router.get("/getScreen", getScreen);
router.post("/userRight", isSignedIn, logger, userRight);
router.post("/insertUserRights", isSignedIn, logger, insertUserRights);

module.exports = router;
