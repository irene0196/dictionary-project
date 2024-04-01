import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo img-fluid" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://github.com/irene0196/dictionary-project">
              Irene Caldera Quevedo
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
