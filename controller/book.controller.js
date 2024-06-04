import Book from "../model/book.model.js"

export const getBook = async (req, res) => {
    try {
        const book = await Book.find()
        return res.status(200).json(book)
    } catch (error) {
        return res.status(500).send({ message: error.message })

    }
}