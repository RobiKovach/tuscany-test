import React from "react";
import ImageGrid from "../ImageGrid/ImageGrid";
import translations from "../../data/translations.json";

const ProductGallery = ({ productId, language }) => {
  return (
    <div className="product-info__gallery gallery-product">
      <h2 className="gallery-product__title title">
        {translations[language].gallery}
      </h2>
      <ImageGrid productId={productId} />
    </div>
  );
};

export default ProductGallery;
