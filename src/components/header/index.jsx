<<<<<<< HEAD
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
=======
import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
>>>>>>> origin/starter

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import rootReducer from "../../redux/root-reducer";
import { loginUser, logoutUser } from "../../redux/user/actions";
import { selectProductsCount } from "../cart/cart.selector";

// Utilities
import { loginUser, logoutUser } from "../../redux/user/actions";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

<<<<<<< HEAD
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.userReducer);

=======
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const productsCount = useSelector(selectProductsCount);

  const dispatch = useDispatch();

>>>>>>> origin/starter
  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
<<<<<<< HEAD
    dispatch(loginUser({ name: "Felipe Rocha", email: "felipe@rocha.com" }));
=======
    dispatch(loginUser({ name: "Guilherme", email: "guilherme@teste.com" }));
>>>>>>> origin/starter
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
<<<<<<< HEAD

        <div onClick={handleCartClick}>Carrinho</div>
=======
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
>>>>>>> origin/starter
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
