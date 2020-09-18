import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'



function Header() {
    return (
        <div className = "header">
            <img className = "header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png " />

            <div className = "header__search"  > 

                <input className = "header__searchInput"
                type = "text" />
                <SearchIcon className = "header__searchIcon" />

            </div>

            <div className = "header__nav" >

                <div className = "header__option">

                    <span className = "header_option_lineOne" >Hello Guest</span>
                    <span className = "header_option_lineTwo">Sign In</span>

                </div>

                <div className = "header__option">
                    <span className = "header_option_lineOne" >Returns </span>
                    <span className = "header_option_lineTwo">& Orders</span>

                </div>

                <div className = "header__option">
                    <span className = "header_option_lineOne" >Your</span>
                    <span  className = "header_option_lineTwo">Prime</span>

                </div>

                <div className = "header__optionBasket">

                    <ShoppingBasketIcon className = "header__basket" />
                    <span  className = "header__countBasket header_option_lineTwo" >0</span>


                </div>



            </div>


        </div>
    )
}

export default Header
