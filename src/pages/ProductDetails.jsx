import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductById } from '../redux/slices/productSlice';
import { Button, Divider, Grid2, IconButton, Paper, Typography } from '@mui/material';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdShoppingCart } from "react-icons/md";

import '../css/ProductDetail.css'
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';

function ProductDetails() {
    const { id } = useParams();

    const { selectedProduct } = useSelector(state => state.products)
    const dispatch = useDispatch();

    const { category, description, image, price, title } = selectedProduct;

    useEffect(() => {
        dispatch(getProductById(id))
    }, [])

    const [count, setCount] = useState(1);

    const handleAdd = ()  => {
        setCount(prev => prev + 1);
    }

    const handleDiscard = ()  => {
        setCount(prev => {
            return prev > 1 ? prev - 1 : 1
        });
    }

    const addBasket = () => {
        const payload = {
            ...selectedProduct,
            count
        }
        dispatch(addToBasket(payload))
        dispatch(calculateBasket())
    }

    return (
        <div style={{marginTop:'20px', paddingBottom:'20px'}}>
            <Grid2 container spacing={0.5}  >
                <Grid2 size={{ xs: 12, sm: 6, md: 5, lg: 4 }} display="flex" justifyContent="center" alignItems="center" >
                    <Paper sx={{ width: '90%', height:'100%', padding:'10px', alignItems:'center', display:'flex'}} >
                        <img style={{ width: '100%' }} src={image} alt={title} />
                    </Paper>
                </Grid2>

                <Grid2 size={{ xs: 12, sm: 6, md: 7, lg: 8 }} >
                    <div>
                        <Typography gutterBottom variant="h3" component="div">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            {description}
                        </Typography>
                        <br />
                        <Divider />
                        <Typography sx={{ marginTop: '30px' }} gutterBottom variant="h4" component="div">
                            {price} &#8378;
                        </Typography>
                    </div>
                    <div className='flex align-center' style={{marginTop:'30px'}}>
                        <IconButton onClick={handleAdd}>
                            <CiCirclePlus size={40} color='black'/>
                        </IconButton>
                        <Typography sx={{display:'inline-block', margin:'0 10px 0 10px', minWidth:'40px', textAlign:'center'}} gutterBottom variant="h5" component="div">
                            {count}
                        </Typography>
                        <IconButton onClick={handleDiscard}>
                            <CiCircleMinus size={40} color='black'/>
                        </IconButton>
                    </div>

                    <div style={{marginTop:'30px'}}>
                        <Button onClick={addBasket} size='large' color='warning' variant='contained'
                        endIcon={<MdShoppingCart color='white'/>}
                        >Sepete Ekle</Button>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    )
}

export default ProductDetails