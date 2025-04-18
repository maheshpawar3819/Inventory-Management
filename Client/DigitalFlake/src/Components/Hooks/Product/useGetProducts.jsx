import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProduct, removeProduct } from "../../../store/categorySlice";
import { toast } from "react-toastify";
import { Backend_Url } from "../../../config";

const useGetProducts = () => {
  const dispatch = useDispatch();
  const getProducts = async () => {
    try {
      const response = await axios.get(`${Backend_Url}/api/product/products`);
      dispatch(getProduct(response?.data));
    } catch (error) {
      console.error(`something worng not able to fetch data`, error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `${Backend_Url}/api/product/delete/${id}`
      );
      if (response.status >= 200) {
        toast.success(response?.data?.message);
        dispatch(removeProduct(id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [dispatch]);

  return { getProducts, deleteProduct };
};

export default useGetProducts;
