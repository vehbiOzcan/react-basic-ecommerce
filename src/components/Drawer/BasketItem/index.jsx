import { FaTrashAlt } from "react-icons/fa";
import { Button, Divider, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import React from 'react'
import { useDispatch } from "react-redux";
import { calculateBasket, deleteToBasket } from "../../../redux/slices/basketSlice";

function BasketItem({ product }) {
    const {id} = product
    const dispatch = useDispatch();
    const deleteProduct = () => {
        dispatch(deleteToBasket(id))
        dispatch(calculateBasket());
    }
    return (
        <>
            <ListItem alignItems="center" sx={{}}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-around'} spacing={2}>
                    <img style={{ width: '40px' }} src={product?.image} alt="" />

                    <ListItemText primary={product?.title} secondary={<Typography variant="body2"><b>({product?.count} adet)</b></Typography>} />

                    <Typography variant='h6' sx={{ marginLeft: '0px', textAlign: 'center' }}>
                        {product?.price}&#8378;
                    </Typography>
                    
                    <Button onClick={deleteProduct} color="error" variant="contained" size="small" startIcon={<FaTrashAlt size={12} color="white" />} >Sil</Button>
                </Stack>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default BasketItem