import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import { GlobalCSS } from "./Global";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
