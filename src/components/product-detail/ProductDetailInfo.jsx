import { Button, CardMedia, Container, Grid, Typography } from "@mui/material";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../store/actionTypes";
import Loading from "../../widget/Loading";

const container = {
  display: "flex",
  justifyContent: "space-around",
  mt: 2,
};

function ProductDetailInfo({ e, ...props }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      setLoading(true);
    };
  }, []);

  const handleAddToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: e,
    });

    /* axios({
      method: "post",
      url: "api/orders",
      data: {
        orderItems: [
          {
            product: e._id,
            name: e.name,
            image: e.image,
            price: e.price,
            countInStock: e.countInStock,
            qty: 1,
          },
        ],
        shippingAddress: {
          address: "",
          city: "",
          postalCode: "",
          phone: "",
        },
        paymentMethod: "",
        itemsPrice: e.price,
        shippingPrice: "0.00",
        totalPrice: e.price,
      },
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    axios
      .post("api/orders")
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: ADD_TO_CART,
        });
      })
      .catch((error) => {
        console.log(error);
      }); */
  };

  return (
    <Container>
      <Grid container sx={container} columns={{ xs: 4, md: 12 }}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Grid item xs={4}>
              <CardMedia>
                <img
                  src={`${e.image}`}
                  alt={e.name}
                  style={{
                    flex: 1,
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                    contain: "cover",
                  }}
                />
              </CardMedia>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mt: 1, textAlign: "center" }}
              >
                {e.name}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mt: 1, textAlign: "center" }}
              >
                {e.price} $
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h4" color="text.secondary" sx={{ mt: 1 }}>
                {e.description}.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                brand: {e.brand}
              </Typography>
              <ReactStars
                count={5}
                value={e.rating}
                size={24}
                activeColor="#ffd700"
                isHalf={true}
                edit={false}
                a11y={false}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
              />
              <Button
                sx={{ mt: 1 }}
                onClick={handleAddToCart}
                color="primary"
                variant="contained"
                disabled={e.countInStock > 0 ? null : true}
              >
                {e.countInStock > 0 ? "Add to cart" : "Sold Out"}
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}

export default ProductDetailInfo;
