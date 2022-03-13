import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import img4 from '../assets/img/resort4.webp';
import { useNavigate } from 'react-router-dom'; 

export default function ListItem({item}) {
  const theme = useTheme();
  const navigate = useNavigate(); 
  return (
    <Card sx={{ display: 'flex' }} style={{width:'100%', marginTop:'1rem', marginBottom:'1rem'}}>
                <CardMedia
            component="img"
            sx={{ width: 600 }}
            image={item.propertyPhotoURL}
            alt="Live from space album cover"
            onClick={()=>{
                navigate(`/resortsDes/${item._id}`)
            }}
        />
      <Box sx={{ display: 'flex', flexDirection: 'column' }} style={{flexGrow: '1', textAlign: 'right'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h3" style={{color: 'red'}}>
             {item.bestSellers ? "Bestseller" : ''} 
            </Typography>
        <Typography component="div" variant="h4">
            $ {item.propertyRentalPrice} Per night
            </Typography>
          <Typography component="div" variant="h5">
            {item.propertyTitle}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {item.propertyType}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
            {item.location}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
