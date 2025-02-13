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
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import PopularPackages from "./Components/PopularPackages/PopularPackages";
import Comments from "./Components/Home/Comments/Comments";
import About from "./Components/AboutPage/AboutPage";
import TourPackagesPage from "./Components/TourPackagesPage/TourPackagesPage";
import ServicePage from "./Components/ServicePage/ServicePage";
import ContactUs from "./Components/ContactUs/ContactUs";
import Tickets from "./Components/Tickets/Tickets";
import Checkout from "./Components/Checkout/Checkout";
import { AuthProvider } from "./Components/Authorization/AuthContext";
import BookingDetails from "./Components/Checkout/BookingDetails/BookingDetails";
import YourDetails from "./Components/Checkout/YourDetails/YourDetails";
import PaymentMethod from "./Components/Checkout/PaymentMethod/PaymentMethod";

function App() {
  return (
    <Router basename="/tuscany-test">
      <AuthProvider>
        <LanguageProvider>
          <ScrollToTop />
          <Routes>
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
                  <PopularPackages />
                  <Comments />
                  <ResponsiveMove />
                  <Footer />
                </>
              }
            />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="/services/:servicesId" element={<ServicePage />} />
            <Route path="/" element={<Tabs />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<TourPackagesPage />} />
            <Route path="/contacts" element={<ContactUs />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/checkout/booking-details"
              element={<BookingDetails />}
            />
            <Route path="/checkout/your-details" element={<YourDetails />} />
            <Route
              path="/checkout/payment-method"
              element={<PaymentMethod />}
            />
          </Routes>
        </LanguageProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
