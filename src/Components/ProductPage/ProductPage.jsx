import "./ProductPage.scss";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ResponsiveMove from "../../Components/ResponsiveMove/ResponsiveMove";
import products from "../../data/products.json";
import translations from "../../data/translations.json";
import { useLanguage } from "../../Components/LanguageContext/LanguageContext";
import ProductBooking from "./ProductBooking";
import ProductInfo from "./ProductInfo";
import ProductGallery from "./ProductGallery";
import ProductComments from "./ProductComments";
import BackButton from "../../Components/BackButton/BackButton";

const ProductPage = () => {
  const { productId } = useParams();
  const { language } = useLanguage();
  const product = products.find((p) => p.url === `/products/${productId}`);

  if (!product) {
    return <h2>{translations[language].product_not_found}</h2>;
  }

  return (
    <>
      <Header />
      <div id="header-container"></div>
      <ResponsiveMove />
      <div className="product-page">
        <BackButton />
        <div className="product__info product-info">
          <div className="product-info__top">
            <ProductBooking product={product} language={language} />
          </div>
          <ProductInfo product={product} language={language} />
          <ProductGallery productId={product.id} language={language} />
          <ProductComments productId={product.id} language={language} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
