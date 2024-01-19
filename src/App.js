import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  const [name, setName] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(
      async (response) => {
        const users = await response.json();
        setName(users);
        console.log(users);
      }
    );
  }, []);

  const filteredUsers = name.filter((user) => {
    return user.name.toLocaleLowerCase().includes(searchField);
  });

  function onSearchChange(event) {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  }

  return (
    <div className="App">
      <h1 className="app-title">Rolodex</h1>
      <SearchBox searchChange={onSearchChange} placeholder="search" className="search-box"/>
      <CardList usersList={filteredUsers} />
    </div>
  );
}

export default App;
