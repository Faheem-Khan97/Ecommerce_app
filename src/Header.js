import React from 'react'
import './css/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom';
import { useStateValue } from './stateProvider'
import {auth} from './firebase'
import { signOut } from 'firebase/auth'




function Header() {
    const [{user, cartItems}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if(user){
            signOut(auth)
        }
    }
    return (
        <div className = "header">
            <Link to="/" >
                <img className = "header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png " />
            </Link>
            

            <div className = "header__search"  > 

                <input className = "header__searchInput"
                type = "text" />
                <SearchIcon className = "header__searchIcon" />

            </div>

            <div className = "header__nav" >
                <Link to = {!user && "/login"} >
               
                    <div className = "header__option" onClick={handleAuthentication} >

                        <span className = "header_option_lineOne" >Hello {user? user?.email: "Guest"}</span>
                        <span className = "header_option_lineTwo">{user? "Sign-Out": "Sign-In"}</span>

                    </div>
                </Link>
                <div className = "header__option">
                    <span className = "header_option_lineOne" >Returns </span>
                    <span className = "header_option_lineTwo">& Orders</span>

                </div>

                <div className = "header__option">
                    <span className = "header_option_lineOne" >Your</span>
                    <span  className = "header_option_lineTwo">Prime</span>

                </div>
                <Link to="/checkout" >
                    <div className = "header__optionBasket">

                        <ShoppingBasketIcon className = "header__basket" />
                        <span  className = "header__countBasket header_option_lineTwo" >{cartItems?.length}</span>

                 </div>
                </Link>
                



            </div>


        </div>
    )
}

export default Header
