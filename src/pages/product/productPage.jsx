import React, { useState, useEffect } from "react";
import { ProductsService } from "../../service/productsService";
import { useParams, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { ChevronLeft } from "lucide-react";

const productsService = new ProductsService();

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productData, setproductData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchproductData = async (id) => {
    const response = await productsService.getProduct(id);
    setproductData(response.data);
  }
  
  useEffect(() => {
    if (!id) return
    fetchproductData(id);
  }, [id]);

  useEffect(() => {
    if (productData) {
      setSelectedImage(productData.data?.attributes?.image_links[0]);
    }
  }, [productData]);

  const handleBackClick = () => {
    navigate(-1);
  };


  return (
    <div className="flex flex-col m-auto pt-5 w-[95%]">
       <div className="sticky top-5 right-5 flex justify-end">
        <button
          onClick={handleBackClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      { productData.data ? (
        <>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex">
              <div className="flex flex-col mr-4">
                {productData.data?.attributes.image_links.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="product thumbnail"
                    onClick={() => setSelectedImage(image)}
                    className={`w-12 h-12 mb-2 cursor-pointer border-2 ${
                      selectedImage === image
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                  />
                ))}
              </div>
              <div>
                <img
                  src={selectedImage}
                  alt="product"
                  className="w-[400px] h-[400px] ml-5"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-700 text-2xl font-semibold">
                {productData.data.attributes.title}
              </h1>
              <p className="text-gray-700 text-xl font-medium mt-2">
                {productData.data.attributes.description}
              </p>
              <div className="flex gap-5">
                <p className="text-lg font-semibold text-green-600 mt-4">
                  {productData.data.attributes.normal_price}
                </p>
                <p className="text-lg font-semibold text-orange-700 mt-4">
                  {productData.data.attributes.discount}
                </p>
              </div>
              <p className="text-lg font-medium text-gray-700 mt-4">
                {productData.data.attributes.raitings_reviews}
              </p>
              <div className="flex gap-[20px]">
                <p className="text-lg font-medium text-gray-700 mt-4">
                  {productData.data.attributes.raitings_average}
                </p>
                <Star className="mt-4" color={"#374151"} />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <table className="min-w-full bg-white border border-gray-200">
              { productData && (
                <tbody>
                  {productData.data?.attributes?.clean_product_details.map((detail, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 px-4 text-left text-gray-700 font-medium">
                        {detail.product_key}
                      </td>
                      <td className="py-3 px-4 text-left text-gray-700 font-medium">
                        {detail.product_value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </>) : (
          <p>Loading...</p>
        )
      }
    </div>
  );
};

export default ProductPage;
