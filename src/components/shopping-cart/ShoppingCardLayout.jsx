import * as React from "react";
import Box from "@mui/material/Box";
import StepperComponent from "./StepperComponent";
import { useState } from "react";
import StepOneOrder from "./StepOneOrder";
import StepTwoAddress from "./StepTwoAddress";
import StepThreePayment from "./StepThreePayment";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

export default function ShoppingCardLayout() {
  const [activeStep, setActiveStep] = useState(0);
  const content = useSelector((state) => state);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        my: content.order.products.length !== 0 ? 0 : 20,
      }}
    >
      {content.order.products.length !== 0 ? (
        <Box sx={{ width: "100%", mt: 1 }}>
          {activeStep === 0 ? (
            <StepOneOrder />
          ) : activeStep === 1 ? (
            <StepTwoAddress />
          ) : activeStep === 2 ? (
            <StepThreePayment />
          ) : null}
          <StepperComponent
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </Box>
      ) : (
        <Typography
          sx={{ border: "1px solid gray", borderRadius: "15px", p: 3 }}
        >
          your shopping cart is empty!
        </Typography>
      )}
    </Box>
  );
}
