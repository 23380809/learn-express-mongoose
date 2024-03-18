let BookInstance = require('../models/bookinstance');


const get_all_available_books = () => {
  return BookInstance.find({status: 'Available'})
  .populate('book')
  .select('book status')
}

exports.show_all_books_status = async function(res) {
  const books = await get_all_available_books();

  res.send(books.map((book) => {
    return book.book.title + " : " + book.status;
  }));
}