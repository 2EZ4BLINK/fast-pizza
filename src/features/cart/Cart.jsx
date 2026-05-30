import { Button, LinkButton } from "../../ui";
import CartItem from "./CartItem";
import { clearCart, getCart } from "./cartSlice";
import { getName } from "../user/userSlice";
import EmptyCart from "./EmptyCart";

import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const username = useSelector(getName);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    if (!cart.length) return null;
    dispatch(clearCart());
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {(cart || []).map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
