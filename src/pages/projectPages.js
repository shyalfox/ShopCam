import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  // Fetch product details based on the `id` or use it to display data from props or state
  return (
    <div className="container mx-auto py-8">
      <h1>Product Detail for Product {id}</h1>
      {/* Here you can display the product's detailed information */}
    </div>
  );
};

export default ProductDetail;
