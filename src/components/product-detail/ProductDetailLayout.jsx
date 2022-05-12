import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  FETCH_PRODUCT_BEGIN,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
} from "../../store/actionTypes";
import Loading from "../../widget/Loading";
import { showAlert } from "../../widget/showAlert";
import { Grid } from "@mui/material";
import ProductDetailInfo from "./ProductDetailInfo";

function ProductDetailLayout() {
  const content = useSelector((state) => state);
  const dispatch = useDispatch();
  let { state } = useLocation();
  window.history.replaceState({}, document.title);
  let navigate = useNavigate();

  useEffect(() => {
    if (state === undefined) {
      navigate("/home");
    }
    dispatch({
      type: FETCH_PRODUCT_BEGIN,
    });
    axios
      .get(`api/products/${state?.itemId}`)
      .then((res) => {
        dispatch({
          type: FETCH_PRODUCT_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PRODUCT_FAILURE,
          payload: error,
        });
      });
  }, [dispatch, navigate, state, state?.itemId]);

  return (
    <Grid
      sx={{
        display: "flex",
        alignitems: "center",
        justifyContent: "center",
        py: 3,
      }}
    >
      {content.product.loading ? (
        <Loading />
      ) : content.product.error ? (
        showAlert("There is a problem with your network", 3000)
      ) : (
        <ProductDetailInfo
          key={content.product.items._id}
          e={content.product.items}
        />
      )}
    </Grid>
  );
}

export default ProductDetailLayout;
