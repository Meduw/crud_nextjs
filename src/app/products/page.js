import { getProducts } from "@/actions/actions";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import Products from "./Products";

export default async function page() {
  const products = await getProducts();
  return (
    <div>
      <Products />
    </div>
  );
}
