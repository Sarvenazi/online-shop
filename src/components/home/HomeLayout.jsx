import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
} from "../../store/actionTypes";
import ProductInfo from "./ProductInfo";
import Loading from "../../widget/Loading";
import { showAlert } from "../../widget/showAlert";

const HomeLayout = () => {
  const content = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: FETCH_PRODUCTS_BEGIN,
    });
    axios
      .get("api/products")
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: FETCH_PRODUCTS_FAILURE,
          payload: error,
        });
      });
  }, [dispatch]);

  return (
    <Grid
      sx={{
        display: "flex",
        alignitems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        py: 3,
      }}
    >
      {content.products.loading ? (
        <Loading />
      ) : content.products.error ? (
        showAlert("There is a problem with your network", 3000)
      ) : (
        content.products.items.map((e) => <ProductInfo key={e._id} e={e} />)
      )}
    </Grid>
  );
};

export default HomeLayout;
