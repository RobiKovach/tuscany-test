const FilterProducts = (products, filters) => {
  return products.filter((product) => {
    const matchTour =
      !filters.tour ||
      product.name.toLowerCase() === filters.tour.toLowerCase();
    const matchTime =
      !filters.time || product.availableTimes.includes(filters.time);
    const matchTransportation =
      !filters.transportation ||
      (product.transportation &&
        product.transportation.toLowerCase() ===
          filters.transportation.toLowerCase());
    const matchType =
      !filters.type ||
      (product.type &&
        product.type.toLowerCase() === filters.type.toLowerCase());

    const isMatch = matchTour && matchTime && matchTransportation && matchType;

    return isMatch;
  });
};

export default FilterProducts;
