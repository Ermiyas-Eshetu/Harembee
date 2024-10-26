import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CustomCard = ({ title, content, imageurl }) => {
  return (
    <Card
      style={{
        width: '300px',
        height:'200px',
        backgroundImage: `url(${imageurl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color:"#ffffff",
        
      }}
    >
      <CardContent >
        <Typography variant="h5" component="div" sx={{fontWeight:"700",color:"#FFFFF",marginTop:"25px"}}>
          {title}
        </Typography>
        <Typography variant="body2"  sx={{fontWeight:"700",color:"#FFFFF"}}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
