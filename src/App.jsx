import "../src/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import routes from "./routes/routes";
import { AuthProvider } from "./components/AuthProvider"; 

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
