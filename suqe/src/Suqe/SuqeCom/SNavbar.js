import React from "react";
import './SuqecomCss/SNavbar.css';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Home from '@mui/icons-material/Home';


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { useState } from 'react';
import {  Checkbox, FormControlLabel,Typography } from '@mui/material';

function GNavbar() {

  return (
    <>
      <div className="NavMain">
        <div className="AllNav">
          <div className="title">
          <TemporaryDrawer/>
           <h2>Suqe / ሱቄ</h2>
          </div>
          
          <div className="title2">
                    <div className="Title">
                      <CustomizedInputBase />
                      <FilterDrawer/>
                     
                    </div>
          </div>

          </div>
      </div>

    </>
  );

}
export default GNavbar





function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 2px', display: 'flex', alignItems: 'center', width: 380 }}
    >

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search product / ምን ፈለጉ "
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>

    </Paper>
  );
}



function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const navigate = useNavigate();
  const [value, setValue] = React.useState('Home'); // Initialize state for value

  const handleChange = (event, newValue) => {
    setValue(newValue); // Update the value state
    if (newValue === 'favorites') {
      navigate('/Gebiya/Favorites'); // Adjust the path according to your route setup
    } if (newValue === 'Home') {
      navigate('/suqe'); // Adjust the path according to your route setup
    } else if (newValue === 'Profile') {
      navigate('/Gebiya/Profile'); // Adjust the path according to your route setup
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Avatar sx={{ width: 90, height: 90, display: 'flex', flexDirection: "column", margin: '20px', marginLeft: '60px' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Divider />
      <List>
        <BottomNavigation sx={{ width: 425, display: 'flex', flexDirection: "column", marginTop: '50px', marginLeft: '5px' }} value={value} onChange={handleChange}>
          <h5>{value}</h5>
          <BottomNavigationAction
            label="Home"
            value="Home"
            icon={<Home />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Profile"
            value="Profile"
            icon={<PersonPinIcon />}
          />

        </BottomNavigation>
      </List>

      <List>

      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuOpenIcon sx={{ p: '1px 1px', marginTop: '2px', display: 'flex' }} /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

function FilterDrawer({ fetchFilteredData }) {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    electronics: false,
    clothing: false,
    homeAppliances: false,
    beauty: false,
    sports: false,
    books: false,
    furniture: false,
    toys: false,
    groceries: false,
  });

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters(prevState => ({ ...prevState, [name]: checked }));
  };

  const applyFilters = () => {
    fetchFilteredData(filters); // Call the function to fetch filtered data based on selected filters
    setOpen(false); // Close the drawer after applying filters
  };

  const DrawerList = (
    <Box className="drawer-container" role="presentation">
      <List>
        <Typography variant="h6" className="drawer-title">Product Type 1</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.electronics}
              onChange={handleFilterChange}
              name="electronics"
            />
          }
          label="Electronics"
          className="checkbox-label"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.clothing}
              onChange={handleFilterChange}
              name="clothing"
            />
          }
          label="Clothing"
          className="checkbox-label"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.homeAppliances}
              onChange={handleFilterChange}
              name="homeAppliances"
            />
          }
          label="Home Appliances"
          className="checkbox-label"
        />
        <Divider className="drawer-divider" />

        <Typography variant="h6" className="drawer-title">Product Type 2</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.beauty}
              onChange={handleFilterChange}
              name="beauty"
            />
          }
          label="Beauty Products"
          className="checkbox-label"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.sports}
              onChange={handleFilterChange}
              name="sports"
            />
          }
          label="Sports Equipment"
          className="checkbox-label"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.books}
              onChange={handleFilterChange}
              name="books"
            />
          }
          label="Books"
          className="checkbox-label"
        />
        <Divider className="drawer-divider" />

        <Typography variant="h6" className="drawer-title">Product Type 3</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.furniture}
              onChange={handleFilterChange}
              name="furniture"
            />
          }
          label="Furniture"
          className="checkbox-label"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.toys}
              onChange={handleFilterChange}
              name="toys"
            />
          }
          label="Toys"
          className="checkbox-label"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.groceries}
              onChange={handleFilterChange}
              name="groceries"
            />
          }
          label="Groceries"
          className="checkbox-label"
        />
      </List>
      <Button onClick={applyFilters} className="apply-button">
        Apply Filters
      </Button>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} className="filter-icon-button">
        <FilterAltIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}