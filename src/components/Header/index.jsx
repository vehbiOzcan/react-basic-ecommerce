import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './style.css'
import { MdShoppingCart } from "react-icons/md";
import { IconButton, Typography } from '@mui/material';
import { DarkThemeButton, LightThemeButton } from './components/ThemeIcons';
import SearchInput from './components/SearchInput';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { calculateBasket, setBasketDrawer } from '../../redux/slices/basketSlice';
import { useNavigate } from 'react-router-dom';

function Header() {

  const [theme, setTheme] = useState(true);

  const { basketProducts } = useSelector(state => state.basket);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const changeTheme = () => {
    const root = document.getElementById("root");

    if (theme) {
      root.style.backgroundColor = '#232323';
      root.style.color = "#FDFDFD"
    }
    else {
      root.style.backgroundColor = '#FDFDFD';
      root.style.color = "#232323"
    }

    setTheme(!theme);
  }

  const openBasketDrawer = () => {
    dispatch(setBasketDrawer())
    dispatch(calculateBasket())
  }


  return (
    <div style={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      <div className='flex-row' onClick={() => navigate('/')}>
        <img src={logo} className='logo' alt="market logosu" />
        <p className='logo-text'>Shopla</p>
      </div>
      <div className='flex-row'>
        <SearchInput />
        <div className='flex-row' style={{ marginLeft: '10px' }}>
          {
            !theme ? <LightThemeButton changeTheme={changeTheme} /> : <DarkThemeButton changeTheme={changeTheme} />
          }
          <IconButton onClick={openBasketDrawer}>
            <Badge badgeContent={basketProducts.length} color="secondary">
              <MdShoppingCart color={!theme ? '#FDFDFD' : '#232323'} />
            </Badge>
          </IconButton>
        </div>

      </div>
    </div>
  )
}

export default Header