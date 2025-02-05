import React from "react";

const ProductBooking = ({ product, language }) => {
  return (
    <div className="product__booking-container">
      {/* Головне зображення продукту */}
      <div className="product__images">
        <div className="product__image">
          <img
            src={`${process.env.PUBLIC_URL}${product.image}`}
            alt={product.name}
          />
        </div>

        {/* Додаткові зображення */}
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
    </div>
  );
};

export default ProductBooking;
