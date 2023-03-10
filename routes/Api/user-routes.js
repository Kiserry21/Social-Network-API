const router = require("express").Router();

const {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	addFriend,
	deleteFriend,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:id/friends/:friendsId
router.route("/:id/friends/:friendsId").post(addFriend).delete(deleteFriend);

module.exports = router;