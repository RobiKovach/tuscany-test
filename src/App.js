import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Додаємо маршрутизацію
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Home/Banner/Banner";
import Popular from "./Components/Home/Popular/Popular";
import ProductPage from "./Components/ProductPage/ProductPage"; // Імпортуємо сторінку товару
import { LanguageProvider } from "./Components/LanguageContext/LanguageContext";
import ResponsiveMove from "./Components/ResponsiveMove/ResponsiveMove";
import Tabs from "./Components/Tabs/Tabs";
import SearchResults from "./Components/SearchResults/SearchResults";
import Welcome from "./Components/Home/Welcome/Welcome";
import SpecialOffers from "./Components/Home/SpecialOffers/SpecialOffers";
import Anons from "./Components/Home/Anons/Anons";
import BookBike from "./Components/Home/BookBike/BookBike";

function App() {
  return (
    <Router basename="/tuscany-test">
      <LanguageProvider>
        <Routes>
          {/* Головна сторінка */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Banner />
                <Popular />
                <Welcome />
                <SpecialOffers />
                <Anons />
                <BookBike />
                <ResponsiveMove />
                <Footer />
              </>
            }
          />
          {/* Сторінка товару без зайвих компонентів */}
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/" element={<Tabs />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;
