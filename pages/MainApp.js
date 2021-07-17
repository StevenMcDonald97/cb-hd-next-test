// import "./styles.css";

import MainPage from "./MainPage";
import AboutCB from "./AboutCB";
import AboutHD from "./AboutHD";
import TestsPage from "./TestsPage";
import ContactPage from "./ContactPage";
import MenuLink from "../components/MenuLink"
import AboutTeam from "./AboutTeam";



function App() {
  return (
    <div className="App">
      <MenuLink/>
      <MainPage />
    </div>
  );
}

export default App;
