const router = require("express").Router();
const {
	getAllThoughts,
	getThoughtById,
	addThought,
	updateThought,
	removeThought,
	addReaction,
	removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/").get(getAllThoughts)
// /api/thoughts/:id
router
	.route("/:thoughtId")
	.get(getThoughtById)
	.put(updateThought)
	.delete(removeThought);
router.route("/:userId").post(addThought)


//	/api/thoughts/:id/reactions
router.route("/:id/reactions").post(addReaction);

// /api/thoughts/:id/reactions/:reactionId
router.route("/:id/reactions/:reactionId").delete(removeReaction);

module.exports = router;