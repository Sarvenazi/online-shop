import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomeLayout from "./components/home/HomeLayout";
import { useEffect } from "react";
import { Container, CssBaseline } from "@mui/material";
import ProductDetailLayout from "./components/product-detail/ProductDetailLayout";
import { Box } from "@mui/system";
import ShoppingCardLayout from "./components/shopping-cart/ShoppingCardLayout";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '80vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 1 }}>
        <Header />
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/login" element={<HomeLayout />} />
          <Route path="/sign-up" element={<HomeLayout />} />
          <Route path="/product-detail/:id" element={<ProductDetailLayout />} />
          <Route path="/profile" element={<HomeLayout />} />
          <Route path="/shopping-cart" element={<ShoppingCardLayout />} />
          <Route path="/user-info" element={<HomeLayout />} />
          <Route path="/payment" element={<HomeLayout />} />
        </Routes>
        <Footer />
      </Container >
    </Box>
  );
}

export default App;
