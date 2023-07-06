import Header from "./Components/Header";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import "./Style/Cards.css"
import Cards from "./Components/Cards";
import CardsDetails from "./Components/CardsDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}  />
        </Routes>
      </BrowserRouter>
       <Cards/>
       <CardsDetails/>
    </div>
  );
}

export default App;
