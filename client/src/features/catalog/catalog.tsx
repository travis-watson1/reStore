import { Avatar, Button, List, ListItem, ListItemAvatar } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Readonly<Props>) {
  return (
    <>
      <List>
        {products.map((product: any) => (
          <ListItem key={product.id}>
            <ListItemAvatar>
              <Avatar src={product.pictureUrl}></Avatar>
            </ListItemAvatar>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={addProduct}>
        Add Product
      </Button>
    </>
  );
}
