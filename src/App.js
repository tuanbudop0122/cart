import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Screens/Home";
import DetailPage from "./Screens/Detail";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
