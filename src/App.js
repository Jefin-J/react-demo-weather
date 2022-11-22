import "./App.css";
import { BsSearch } from "react-icons/bs";
import WeatherBox from "./weatherBox";

function App() {
  const search = () => {
    console.log("Search");
  };
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            onKeyDown={(evt) => (evt.key === "Enter" ? search() : "")}
          />
          <button className="search-button" onClick={search}>
            <BsSearch />
          </button>
        </div>

        <WeatherBox place="Ernakulam" />
      </main>
    </div>
  );
}

export default App;
