import logo from "../Assets/images/logo.svg";
import "../Styles/WelcomeScreen.css";
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
      <img src={logo} width="30%"></img>
      <button>Los</button>
    </div>
  );
}

export default WelcomeScreen;
