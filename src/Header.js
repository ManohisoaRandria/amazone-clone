import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  // const history = useHistory();
  function LOGOUT(e) {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
    });
    // history.push("/login");
  }
  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* search */}
      <div className="header__searchItem">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__links">
        {/* links */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Rakoto</span>
            <span className="header__optionTwo">Sing In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Returns</span>
            <span className="header__optionTwo">& Orders</span>
          </div>
        </Link>
        <div onClick={LOGOUT} className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Your</span>
            <span className="header__optionTwo">Prime</span>
          </div>
        </div>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        {/* basket */}
      </div>
    </nav>
  );
}

export default Header;
