import { toast } from "react-toastify";
import axios from './../../api/AxiosConfig'
import { loaduser } from "../reducers/userSlice"

export const asyncremovecart = (productId) => async (dispatch, getState) => {
  try {
    const { usersReducer } = getState();
    const user = usersReducer.users; // ✅ correct

    if (!user) return;

    // remove product from cart
    const updatedCart = user.cart.filter((c) => 
      (c.productId || c.product?.id) !== productId
    );
    const updatedUser = { ...user, cart: updatedCart };

    // update backend (json-server style)
    await axios.put(`/users/${user.id}`, updatedUser);

    // update redux + localStorage
    dispatch(loaduser(updatedUser));
    localStorage.setItem("user", JSON.stringify(updatedUser));

  } catch (error) {
    console.log(error);
    toast.error("Failed to remove from cart");
  }
};
