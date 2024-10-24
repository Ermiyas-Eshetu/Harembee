import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions, Input, Select, MenuItem } from '@mui/material';

export default function AddProduct() {
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = () => {
    // You can handle the form submission here, sending the data to your backend
    const productData = {
      productName,
      price,
      description,
      amount,
      image,
      category,
      tags: tags.split(',').map(tag => tag.trim())  // Convert tags to an array
    };
    console.log("Product Data: ", productData);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Upload Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload New Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Product Name"
            fullWidth
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description"
            multiline
            rows={4}
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Amount"
            type="number"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            displayEmpty
          >
            <MenuItem value="" disabled>Select Category</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="fashion">Fashion</MenuItem>
            <MenuItem value="home_appliances">Home Appliances</MenuItem>
          </Select>
          <TextField
            margin="dense"
            label="Tags (comma separated)"
            fullWidth
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <Input
            type="file"
            onChange={handleImageUpload}
            inputProps={{ accept: "image/*" }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
