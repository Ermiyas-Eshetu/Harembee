import React, { useState } from "react";
import { Card, CardContent, Typography, CardActions, CardMedia, IconButton, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined'; // Import the Save icon
import data from '../Sdata.json'; // Import your JSON data


// SCard Component
function SCard({ title, description, imageUrl, onAction, onSave,amount,Susername,price }) {
  const [openLinkModal, setOpenLinkModal] = useState(false);

  const handleOpenLinkModal = () => {
    setOpenLinkModal(true);
  };

  const handleCloseLinkModal = () => {
    setOpenLinkModal(false);
  };

  return (
    <>
      <Card sx={{ display: 'flex', padding: '20px', margin: 2, position: 'relative', minWidth: '350px' }}>
        <CardMedia
          component="img"
          sx={{ width: 100, height: 180 }}
          image={imageUrl}
          alt={title}
        />
        <CardContent sx={{ flex: '1 0 auto', textAlign: 'left', overflow: false }}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3, // Limits to 3 lines
              WebkitBoxOrient: 'vertical',
            }}
          >
            {description}
          </Typography>
          <Typography variant="body2" component="div">
            Amount : {amount}
          </Typography>
          <Typography variant="body2" component="div">
            Price : {price}
          </Typography>
          <Typography variant="body2" component="div">
            Seller : {Susername}
          </Typography>
        </CardContent>
        <CardActions sx={{ alignItems: "left" }}>
          <Button size="small" onClick={onAction} sx={{ position: 'absolute', bottom: 10, right: 10 }}>BUY NOW</Button>
        </CardActions>
        <CardActions sx={{ alignItems: "left" }}>
          <Button
            color="primary"
            variant="contained"
            size="small"
            onClick={handleOpenLinkModal}
            sx={{ position: 'absolute', bottom: 10, right: 80 }}
          >
            Link ልሽጥ
          </Button>
        </CardActions>
        <IconButton
          sx={{ position: 'absolute', top: 10, right: 10 }} // Position the save icon
          onClick={onSave}
        >
          <TurnedInNotOutlinedIcon />
        </IconButton>
      </Card>

      {/* LinkProduct Modal */}
      <LinkProduct open={openLinkModal} onClose={handleCloseLinkModal} />
    </>
  );
}

// LinkProduct Modal Component
function LinkProduct({ open, onClose }) {
  const [tags, setTags] = useState('');

  const handleSubmit = () => {
    console.log('Tags Submitted: ', tags);
    onClose(); // Close the modal after submitting
  };
 let productid = 'Ermiyas'
  return ( 
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Link Product</DialogTitle>
      <DialogContent>
        <TextField
          disabled="true"
          margin="dense"
        
          fullWidth
          value={productid}
          onChange={(e) => setTags(e.target.value)}
          sx={{ marginBottom: '15px' }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Save Link
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          sx={{
            backgroundColor: '#007bff',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          Generate Link
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// Main Component to Render SCard
function ProductList() {
  return (
    <div>
      {data.products.map(product => (
        <SCard 
          key={product.id} 
          title={product.name} 
          description={product.description} 
          imageUrl={product.imageUrl} 
          onAction={() => console.log(`Buying ${product.name}`)} 
          onSave={() => console.log(`Saved ${product.name}`)} 
        />
      ))}
    </div>
  );
}

export default ProductList;
