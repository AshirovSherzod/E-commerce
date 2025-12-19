import { useState } from "react";

import "./manageProducts.scss";
import Products from "../../../components/products/Products";
import {
  useCreateProductMutation,
  useGetProductsQuery,
} from "../../../context/api/productApi";
import Modal from "../../../components/modal/Modal";
import { useGetValue } from "../../../hooks/useGetValue";

const initialState = {
  id: `${new Date().getTime()}`,
  categoryId: "2",
  title: "Kid's Toys",
  description: "The best toy in the world and good quality product",
  category: "Kid's Furniture",
  price: 12.0,
  oldPrice: 15.0,
  rating: 3.5,
  stock: 45,
  images: [
    "https://png.pngtree.com/png-vector/20231014/ourmid/pngtree-toy-teddy-bear-in-brown-color-png-image_10294350.png",
  ],
};

const ManageProducts = () => {
  const [createProductModal, setCreateProductModal] = useState(false);

  const { data, isLoading, isSuccess } = useGetProductsQuery();
  const [createProduct] = useCreateProductMutation();
  const { formData, handleChange, setFormData } = useGetValue(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(formData);
    setFormData(initialState);
    setCreateProductModal(false);
  };

  return (
    <div className="manage-products">
      <div className="manage-products__top">
        <h1>Manage Products</h1>
        <button onClick={() => setCreateProductModal(true)}>
          Create Product
        </button>
      </div>
      <Products
        data={data}
        isLoading={isLoading}
        isSuccess={isSuccess}
        limit={16}
      />
      {createProductModal ? (
        <Modal setModal={setCreateProductModal}>
          <form
            onSubmit={handleSubmit}
            className="manage-products__form"
            action=""
          >
            <h2>Create Product</h2>
            <div className="manage-products__form__input">
              <label htmlFor="title">Product Title *</label>
              <input
                id="title"
                value={formData.title}
                onChange={(e) => handleChange(e)}
                name="title"
                type="text"
                placeholder="title"
                required
              />
            </div>
            <div className="manage-products__form__input">
              <label htmlFor="description">Product Description *</label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange(e)}
                name="description"
                required
              ></textarea>
            </div>
            <div className="manage-products__form__input">
              <label htmlFor="category">Product Category *</label>
              <input
                id="category"
                value={formData.category}
                onChange={(e) => handleChange(e)}
                name="category"
                type="text"
                placeholder="category"
                required
              />
            </div>
            <div className="manage-products__form__input">
              <label htmlFor="price">Product Price *</label>
              <input
                id="price"
                value={formData.price}
                onChange={(e) => handleChange(e)}
                name="price"
                type="number"
                placeholder="price"
                required
              />
            </div>
            <div className="manage-products__form__input">
              <label htmlFor="oldPrice">Product Old Price *</label>
              <input
                id="oldPrice"
                value={formData.oldPrice}
                onChange={(e) => handleChange(e)}
                name="oldPrice"
                type="number"
                placeholder="old price"
                required
              />
            </div>
            <div className="manage-products__form__input">
              <label htmlFor="rating">Product Rating *</label>
              <input
                id="rating"
                value={formData.rating}
                onChange={(e) => handleChange(e)}
                name="rating"
                type="number"
                step="0.1"
                min="0"
                max="5"
                placeholder="rating"
                required
              />
            </div>
            <div className="manage-products__form__input">
              <label htmlFor="stock">Product Stock *</label>
              <input
                id="stock"
                value={formData.stock}
                onChange={(e) => handleChange(e)}
                name="stock"
                type="number"
                min="0"
                placeholder="stock"
                required
              />
            </div>
            <div className="manage-products__form__input">
              <label htmlFor="imageUrl">Product Image Url *</label>
              <input
                id="imageUrl"
                value={formData.images[0] || ""}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    images: [e.target.value],
                  });
                }}
                type="url"
                placeholder="image url"
                required
              />
            </div>
            <button>Create Product</button>
          </form>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ManageProducts;
