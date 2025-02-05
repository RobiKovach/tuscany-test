import React from "react";
import "./ImageGrid.scss";
import products from "../../data/products.json"; // Імпортуємо JSON з продуктами

const ImageGrid = ({ productId }) => {
  // Знаходимо потрібний продукт за його ID
  const product = products.find((p) => p.id === productId);

  // Перевіряємо, чи є продукт
  if (!product || !product.gallery || product.gallery.length < 4) {
    return <p>Gallery not available for this product.</p>;
  }

  return (
    <div className="image-grid">
      <div className="image-grid__item image-grid__item--large">
        <img
          src={`${process.env.PUBLIC_URL}${product.gallery[0]}`}
          alt="Large"
        />
      </div>
      <div className="image-grid__column">
        <div className="image-grid__item">
          <img
            src={`${process.env.PUBLIC_URL}${product.gallery[1]}`}
            alt="Top"
          />
        </div>
        <div className="image-grid__item">
          <img
            src={`${process.env.PUBLIC_URL}${product.gallery[2]}`}
            alt="Bottom"
          />
        </div>
      </div>
      <div className="image-grid__item">
        <img
          src={`${process.env.PUBLIC_URL}${product.gallery[3]}`}
          alt="Side"
        />
      </div>
    </div>
  );
};

export default ImageGrid;
