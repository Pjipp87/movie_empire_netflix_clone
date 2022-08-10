import { Route, Routes } from "react-router-dom";
import WelcomeScreen from "./Screens/WelcomeScreen";
import { HomeScreen } from "./Screens/HomeScreen";
import { Startpage } from "./Screens/Startpage";
import { Movies } from "./Screens/Movies";
import { Series } from "./Screens/Series";
import { News } from "./Screens/News";
import { MyList } from "./Screens/MyList";
import { Profile } from "./Screens/Profile";

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
      <Route path="/home" element={<HomeScreen />}>
        <Route path="/home/" element={<Startpage />} />
        <Route path="/home/movies" element={<Movies />} />
        <Route path="/home/series" element={<Series />} />
        <Route path="/home/news" element={<News />} />
        <Route path="/home/mylist" element={<MyList />} />
        <Route path="/home/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
