import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/slices/productSlice';
import Product from './Product';
import { Stack } from '@mui/material';

function ProductList() {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <div style={{marginTop:'30px', paddingBottom:'30px'}}>
            <Stack useFlexGap direction={'row'} spacing={2} sx={{
                flexWrap:'wrap',
                justifyContent:'center',
                
            }}>
                {
                    products && products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </Stack>
        </div>
    )
}

export default ProductList