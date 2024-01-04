import "../src/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import routes from "./routes/routes";
import { AuthProvider } from "./reducers/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          {routes}
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
