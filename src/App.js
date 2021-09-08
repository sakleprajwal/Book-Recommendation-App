import { useState } from "react";
import "./styles.css";

var bookTypes = ["Javascript", "Fiction", "Business"];

var bookSet = [
  {
    bookType: "Javascript",
    bookName: "Eloquent JavaScript",
    rating: 4
  },
  {
    bookType: "Javascript",
    bookName: "You Don't Know JS",
    rating: 3
  },
  {
    bookType: "Fiction",
    bookName: "Shiva Trilogy",
    rating: 4
  },
  {
    bookType: "Fiction",
    bookName: "Harry Potter and the Sorcerer's Stone",
    rating: 3
  },
  {
    bookType: "Business",
    bookName: "Never Split the Difference",
    rating: 5
  }
];

export default function App() {
  var [bookList, setbookList] = useState([]);

  function clickHandler(book) {
    var bookList = [];
    for (let item of bookSet) {
      // console.log(item.bookName);
      if (item.bookType === book) {
        bookList.push(item);
      }
    }
    setbookList(bookList);
  }

  return (
    <div className="bookRecommendation-section">
      <h1 className="header">Book Recommendation</h1>

      {bookTypes.map(function (item) {
        return (
          <button className="book-button" onClick={() => clickHandler(item)}>
            {" "}
            {item}
          </button>
        );
      })}

      <ul>
        {bookList.map(function (item) {
          return (
            <li className="bookName">
              {item.bookName} <br /> Rating: {item.rating}/5
            </li>
          );
        })}
      </ul>
    </div>
  );
}
