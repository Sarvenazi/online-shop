import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductInfo({ e, ...props }) {
  let navigate = useNavigate();

  function handleSubmit() {
    if (e._id !== undefined) {
      navigate(`/product-detail/${e._id}`, {
        state: {
          itemId: e._id,
        },
        replace: true,
      });
    } else {
      navigate("/home");
    }
  }

  return (
    <Card sx={{ maxWidth: 280, m: 3 }}>
      <CardActionArea onClick={handleSubmit}>
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
        <CardContent
          sx={{
            textAlign: "center",
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            {e.name}
          </Typography>
          <Divider />
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            {e.price} $
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
