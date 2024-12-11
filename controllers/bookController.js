const Book = require("../models/bookModel");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (e) {
    console.log(e);
  }
};

const addBook = async (req, res) => {
  try {
    const { name, author, description, price, image } = req.body;
    const newBook = new Book({ name, author, description, price, image });
    await newBook.save().then(() => {
      res.status(201).json(newBook);
    });
  } catch (e) {
    console.log(e);
  }
};

const getOneBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (e) {
    console.log(e);
  }
};

const updateBook = async (req, res) => {
  try {
    const book = req.body;
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, book, {
      new: true,
    });
    res.status(200).json(updatedBook);
  } catch (e) {
    console.log(e);
  }
};

const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book Deleted successfully" });
  } catch (e) {
    console.log(e);
  }
};
module.exports = { getAllBooks, addBook, getOneBook, updateBook, deleteBook };
