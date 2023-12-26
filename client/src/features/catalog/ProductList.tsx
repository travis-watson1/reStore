import { List } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

export interface Props {
  products: Product[];
}

export default function ProductList({ products }: Readonly<Props>) {
  return (
    <List>
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </List>
  );
}
