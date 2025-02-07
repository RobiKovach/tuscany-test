import React from "react";
import ProductDetails from "./ProductDetails";

const ProductBooking = ({ product, language }) => {
  return (
    <div className="product__booking-container">
      <div className="product__images">
        <div className="product__image">
          <img
            src={`${process.env.PUBLIC_URL}${product.image}`}
            alt={product.name}
          />
        </div>

        {product.images && product.images.length > 0 && (
          <div className="product__sub-images">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={`${process.env.PUBLIC_URL}${img}`}
                alt={`${product.name} ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <ProductDetails product={product} language={language} />
    </div>
  );
};

export default ProductBooking;
