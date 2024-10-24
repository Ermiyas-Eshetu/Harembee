import React, { useState } from "react";
import emptyBox from '../../../asset/Inbox Empty.png';
import { Outlet } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Select, MenuItem, Input } from '@mui/material';

function OpenSuqe() {
  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleClick = () => {
    setShowAddProduct(true);
  };

  return (
    <>
      <div style={{ marginTop: '160px' }}>
        <h1>አሁን ሱቄን መክፈት ልጀምር</h1>
        <img src={emptyBox} alt="Empty Box" />
        <div className="btncon">
          <button className="btn2" onClick={handleClick}>
            Add Now / አሁን ልጨምር
          </button>
        </div>
      </div>

      {showAddProduct && <AddProduct />} {/* Conditionally render AddProduct */}
      <Outlet />
    </>
  );
}

export default OpenSuqe;

function AddProduct() {
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
    const productData = {
      productName,
      price,
      description,
      amount,
      image,
      category,
      tags: tags.split(',').map((tag) => tag.trim()),
    };
    console.log('Product Data: ', productData);
    handleClose();
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          backgroundColor: '#28a745',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#218838',
          },
          marginBottom: '20px'
        }}
      >
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
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            margin="dense"
            label="Description"
            multiline
            rows={4}
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            margin="dense"
            label="Amount"
            type="number"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{ marginBottom: '15px' }}
          />
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            displayEmpty
            sx={{ marginBottom: '15px' }}
          >
            <MenuItem value="" disabled>
              Select Category
            </MenuItem>
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
            sx={{ marginBottom: '15px' }}
          />
          <Input
            type="file"
            onChange={handleImageUpload}
            inputProps={{ accept: 'image/*' }}
            fullWidth
            sx={{ marginBottom: '15px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
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
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
