import logo from "../Assets/images/logo.svg";
import "../Styles/App.css";
//import axios from "axios";

function WelcomeScreen() {
  /* 
  // TODO: Server Abfrage:
  const [counter, setCounter] = useState(0);

  const getData = () => {
    axios
      .get("/api")
      .then((response) => console.log("Counter: ", counter, response.data))
      .then(setCounter((counter) => counter + 1));
  };
 */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default WelcomeScreen;
