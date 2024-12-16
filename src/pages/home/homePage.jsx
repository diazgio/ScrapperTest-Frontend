import React, { useState, useEffect } from "react";
import CreateModal from "../../components/modal/createModal";
import { ProductsService } from "../../service/productsService";
import ProductCard from "../../components/card/productCard";

const productsService = new ProductsService();

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    productsService.getProducts().then((res) => {
      setData(res.data);
    });
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div>
      <div className="flex w-[95%] justify-between items-center mt-5 mx-auto mb-6">
        <h1 className="text-gray-600 text-2xl font-semibold">PRODUCTS</h1>
        <button
          className="px-3 py-1 bg-blue-400 text-white rounded-md hover:bg-blue-200"
          onClick={openModal}
        >
          NEW PRODUCT
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(data) ? (
          data.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <CreateModal isOpen={isOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default HomePage;
