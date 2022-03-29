import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchProducts, setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  //   console.log(products);
  const dispatch = useDispatch();

  //   const fetchProducts = async () => {
  //     const response = await axios
  //       .get("https://fakestoreapi.com/products")
  //       .catch((err) => {
  //         console.log("err", err);
  //       });
  //     console.log(response.data);
  //     dispatch(setProducts(response.data));
  //   };

  useEffect(() => {
    // fetchProducts();
    dispatch(fetchProducts());
  }, []);

  console.log("Products", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
