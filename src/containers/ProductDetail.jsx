import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
import { useSelector } from "react-redux";

//

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  console.log(product);

  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("error", err);
      });

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    fetchProductDetail();
  }, [productId]);

  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">.</div>
    </div>
  );
};

export default ProductDetail;
