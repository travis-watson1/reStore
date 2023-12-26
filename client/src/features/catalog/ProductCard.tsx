import { ListItem, ListItemAvatar, Avatar } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Readonly<Props>) {
  return (
    <ListItem key={product.id}>
      <ListItemAvatar>
        <Avatar src={product.pictureUrl}></Avatar>
      </ListItemAvatar>
    </ListItem>
  );
}
