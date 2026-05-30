import { useDispatch } from "react-redux";
import { Button } from "../../ui";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    if (!pizzaId) return null;
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
};

export default DeleteItem;
