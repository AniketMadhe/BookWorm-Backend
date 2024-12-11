const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  addBook,
  getOneBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

router.get("/", getAllBooks);
router.post("/add", addBook);
router.get("/:id", getOneBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
