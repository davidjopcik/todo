import Menu from "./sharedComponents/Menu";
import Game from "./sharedComponents/TicTacToe/Game";
import MyButton from "./sharedComponents/MyButton";
import MyButtonsList from "./sharedComponents/MyButtonsList";
import Home from "./sharedComponents/Home";
import News from "./sharedComponents/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsDetail from "./sharedComponents/NewsDetail";
import SignInForm from "./sharedComponents/SignInForm";
import NewsEditForm from "./sharedComponents/NewsEditForm";
import Alert from "./sharedComponents/Alert";
import Greet from "./sharedComponents/Greet";
import Joke from "./Joke";
import { ThemeContextProvider } from "./context/ThemeContext";
import SearchFilter from "./SearchFilter";
import Weather from "./sharedComponents/WeatherApp";
import PhoneValidation from "./sharedComponents/PhoneValidation";
import Todo from "./sharedComponents/Todo";


function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          News
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/news/edit/:id" element={<NewsEditForm />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/alerts/:id" element={<Alert color="red" show={true} text="This is Alert"/>} />
          <Route path="/greet" element={<Greet name="David"/>} />
          <Route path="/Joke" element={<Joke />} />
          <Route path="/search" element={<SearchFilter values={["Banana","Apple","Orange"]} />} />
          <Route path="/weatherapp" element={<Weather/>} />
          <Route path="/phoneValidation" element={<PhoneValidation/>} />
          <Route path="/todo" element={<Todo/>} />



        </Routes>
      </Router>
      </ThemeContextProvider>
  );
}

export default App;
