import "./App.css";

function App() {
  const books = ["book1", "book2", "book3"];
  const users = [
    {
      name: "user1",
      books: ["book1", "book2", "book3"],
    },
    {
      name: "user2",
      books: ["book3"],
    },
    {
      name: "user3",
      books: ["book2", "book3"],
    },
  ];

  const findCommonBooks = (users: any) => {
    const books = users.map((user: { books: string }) => user.books);
    const commonBooks = books.reduce((acc: string[], curr: string | any[]) => {
      return acc.filter((book: string) => curr.includes(book));
    });
    return commonBooks;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "100px",
            }}
          >
            <h2>List of books:</h2>
            <ul>
              {books.map((book) => (
                <li key={book}>{book}</li>
              ))}
            </ul>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2>List of common books:</h2>
            <ul>
              {findCommonBooks(users).map((book: string) => (
                <li key={book}>{book}</li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

/*
First Task:
Create a react component that receives an array of books (Eg.: book1,book2, book3) and renders them as a list.


Second Task: 
Given a system that has users and books, where each user may like multiple books, write a function that given a list of users finds all the common books to all users.

Example:

User1: Book1, Book2, Book3
User2: Book3
User3: Book2, Book3

Common books: Book3

*/
