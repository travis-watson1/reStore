import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

export interface Props {
  products: Product[];
}

export default function ProductList({ products }: Readonly<Props>) {
  return (
    <Grid container spacing={4}>
      {products.map((product: any) => (
        <Grid item xs={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
