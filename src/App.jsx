import "../src/App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import routes from "./routes/routes";

function App() {
  return (
    <>
      <Router>
        <Header />
        {routes}
        <Footer />
      </Router>
    </>
  );
}

export default App;
