import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
  const { id, category, description, image, price, title } = product;
 
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product-details/${id}`)
  }

  return (
    <Card sx={{ maxWidth: 170 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{objectFit:'contain'}}
          height="140"
          image={image}
          alt="product image"
        />
        <CardContent>
          <Typography sx={{height:'150px', overflow:'hidden', textOverflow:'ellipsis'}} gutterBottom variant="body1" component="div">
            {title}
          </Typography>
          <Divider/>
          <Typography gutterBottom variant="body1" component="div">
            {price} &#8378;
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions  sx={{display:'flex', justifyContent:'center', alignSelf:'end'}} >
        <Button onClick={handleNavigate} sx={{flexGrow:1}} size="small" color="secondary" variant='contained'>
         ÜRÜNE GİT
        </Button>
      </CardActions>
    </Card>
  );

}

export default Product