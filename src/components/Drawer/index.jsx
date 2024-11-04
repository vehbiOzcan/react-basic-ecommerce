import React, { useEffect } from 'react'
import Drawer from '@mui/material/Drawer';
import { Divider, IconButton, List, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import BasketItem from './BasketItem';
import { calculateBasket, setBasketDrawer } from '../../redux/slices/basketSlice';
import { IoMdClose } from "react-icons/io";

function BasketDrawer() {

    const { basketProducts } = useSelector(state => state.basket)
    const { basketDrawer } = useSelector(state => state.basket)
    const { totalAmount } = useSelector(state => state.basket)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateBasket())
    }, [])

    const closeDrawer = () => {
        dispatch(setBasketDrawer())
    }

    return (
        <Drawer
            anchor='right'
            open={basketDrawer}
            onClose={closeDrawer}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                <IconButton onClick={closeDrawer}>
                    <IoMdClose />
                </IconButton>
                <Typography variant='h5' alignContent={'center'}>
                    Sepetim
                </Typography>
            </div>
            <List sx={{ width: '100%', maxWidth: 420,minWidth:400, bgcolor: 'background.paper' }}>
                {basketProducts.map((product) => <BasketItem key={product.id} product={product} />)}
            </List >
            <Divider />
            <Typography padding={2} variant='h6'>Toplam Tutar: {totalAmount}&#8378;</Typography>
        </Drawer>
    )
}

export default BasketDrawer