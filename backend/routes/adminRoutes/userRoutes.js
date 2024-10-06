const express = require("express");
const { getAllUsers,deleteUser,userStatusUpdate } = require("../../controllers/adminControllers/userController"); 

const router = express.Router();


router.get("/get-all-users", getAllUsers);
router.delete("/delete-user/:userId",deleteUser);
router.patch('/status-update/:userId', userStatusUpdate);

module.exports = router;
