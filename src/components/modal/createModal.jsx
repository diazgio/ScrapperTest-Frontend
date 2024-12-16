import React, { useState } from "react";
import Modal from "react-modal";
import Loader from "../loader/loader";
import { ProductsService } from "../../service/productsService";

const productsService = new ProductsService();

const CreateModal = ({ isOpen, onRequestClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    uri: "",
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchCreateProduct = async () => {
    setIsLoading(true);
    try {
        const response = await productsService.createProduct(formData.uri)
        console.log(response)
        if (response) {
          setIsLoading(false);
          onRequestClose();
        }
    } catch (error) {
        console.error("Error creating product", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    fetchCreateProduct();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      contentLabel="Create Product Modal"
      className="flex flex-col inset-0 items-center justify-center h-max z-50 max-w-[70%] m-auto bg-white rounded-lg p-8"
      overlayClassName="fixed flex m-auto inset-0 bg-black bg-opacity-75"
    >      
      <h1 className="w-full text-center text-2xl font-bold text-gray-700 pt-2 pb-4">
        CREATE PRODUCT
      </h1>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="URL"
          >
            URL
          </label>
          <input
            type="text"
            id="uri"
            name="uri"
            value={formData.uri}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="https://www.flipkart.com/srpm-wayfarer-sunglasses/p/itmaf19ae5820c06"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            CREATE PRODUCT
          </button>
        </div>
      </form>
      {isLoading && <Loader />}
    </Modal>
  );
};

export default CreateModal;
