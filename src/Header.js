import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "./StateProvider";

import './Header.css'

function Header() {

    const [{basket}]=useStateValue();
    // const [{basket},dispatch ]=useStateValue();

    return (
        <nav className='header'>
            {/* logo on left */}
            <Link to="/">
                <img className="header_logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="" />
            </Link>
           
            {/* search bar */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon"/>
            </div>

             {/*  ------------  3 links ------ */}
             <div className="headerNav">
                {/* 1st link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className='header_optionOne'>Hello piyush</span>
                        <span className='header_optionTwo'>Sign in</span>
                    </div>
                </Link>

                {/* 2nd */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className='header_optionOne'>Returns</span>
                        <span className='header_optionTwo'>& Orders</span>
                    </div>
                </Link>

                {/* 3rd */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className='header_optionOne'>Your</span>
                        <span className='header_optionTwo'>Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        {/* shopping basket */}
                        <ShoppingBasket/>

                        {/* No: of items */}
                        <span className='header_optionTwo header_basketCount'>{basket?.length}</span>
                        {/* OPTINOAL CHAINNING , IT TAKES TIME TO LOAD {basket?.length} */}
                    </div>
                </Link>
             </div>

        </nav>
    )
}

export default Header
