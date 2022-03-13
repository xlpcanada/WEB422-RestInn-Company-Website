import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import img1 from '../assets/img/resort1.webp';
import img2 from '../assets/img/resort2.webp';
import img3 from '../assets/img/resort3.webp';
import img4 from '../assets/img/resort4.webp';
export default function Example(props)
{
    var items = [
        {
            image: img1,
        },
        {
            image: img2,
        },        
        {
            image: img3,
        },
        {
            image: img4,
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper style={{height: '640px'}}>
            <img src={props.item.image} />
        </Paper>
    )
}