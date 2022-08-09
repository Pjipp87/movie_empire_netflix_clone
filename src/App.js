import { Route, Routes } from "react-router-dom";
import WelcomeScreen from "./Screens/WelcomeScreen";

function App() {
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
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
    </Routes>
  );
}

export default App;
