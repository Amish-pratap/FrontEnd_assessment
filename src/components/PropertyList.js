import React, { useState } from 'react';
import properties from '../data/properties';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CropSquareIcon from '@mui/icons-material/CropSquare';


const PropertyList = () => {
    const isSmallScreen = useMediaQuery('(max-width:700px)');
    const [priceFilter, setPriceFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [moveInDateFilter, setMoveInDateFilter] = useState('');
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [searchText, setSearchText] = useState('');
    const handleSearch = () => {
        const newFilteredProperties = properties.filter((property) => {
            const isPriceMatch = priceFilter === '' || property.price <= priceFilter;
            const isLocationMatch = locationFilter === '' || property.location === locationFilter;
            const isTypeMatch = typeFilter === '' || property.type.toLowerCase() === typeFilter.toLowerCase();

            // Convert property.moveInDate and moveInDateFilter to Date objects for comparison
            const propertyMoveInDate = new Date(property.moveInDate);
            const filterMoveInDate = new Date(moveInDateFilter);

            // Check if the filter date is after the property date
            const isMoveInDateMatch = moveInDateFilter === '' || filterMoveInDate >= propertyMoveInDate;

            return isPriceMatch && isLocationMatch && isTypeMatch && isMoveInDateMatch;
        });

        setFilteredProperties(newFilteredProperties);
    };

    const handleTextInput = (e) => {
        setSearchText(e.target.value);
        const words = searchText.trim().toLowerCase().split(' ');
        const newFilteredProperties = properties.filter((property) => {
            return (
                // Check if at least one word in the search text is present in the property title or address
                words.some((word) => property.title.toLowerCase().includes(word) ||
                    property.address.toLowerCase().includes(word))
            );
        });

        setFilteredProperties(newFilteredProperties);
    }



    return (
        <Box
            display='flex'
            flexDirection={'column'}
            padding='10px 30px'
            sx={{ backgroundColor: '#F7F3F8' }}
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="10px 20px"
                sx={{ p: "1" }}
                flexDirection={isSmallScreen ? 'column' : 'row'}
            >
                <Box>
                    <h1 style={{ fontSize: '2.5rem' }}>Search Properties to Rent</h1>
                </Box>
                <Box>
                    <TextField
                        label="Search Properties"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={searchText}
                        onChange={handleTextInput}
                    />
                </Box>
            </Box>

            <Box sx={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: 'white',
                borderRadius: 2,
                gap: 1,
                padding: 1
            }}
                flexDirection={isSmallScreen ? 'column' : 'row'}
            >
                <Box display="flex" flexDirection="column" width={isSmallScreen ? '100%' : '21%'}>
                    <Typography>Location</Typography>

                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={locationFilter}
                        label="Age"
                        onChange={(e) => setLocationFilter(e.target.value)}
                        sx={{

                            borderWidth: '0px',

                        }}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    bgcolor: '#F3E5F5',
                                    '& .MuiMenuItem-root': {
                                        padding: 2,
                                    },
                                },
                            },
                        }}
                    >

                        <MenuItem value={"Delhi"}>Delhi</MenuItem>
                        <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                        <MenuItem value={"Chennai"}>Chennai</MenuItem>
                    </Select>



                </Box>
                <Divider
                    orientation={isSmallScreen ? 'horizontal' : 'verticals'}
                    variant="middle"
                    flexItem
                    style={{
                        width: '2px', // Width of the vertical divider
                        background: '#ccc', // Color of the divider
                        margin: '0 10px', // Adjust the margin as needed
                    }}
                />
                <Box display="flex" flexDirection="column" width={isSmallScreen ? '100%' : '21%'}>
                    <Typography>When</Typography>

                    <TextField
                        name="someDate"
                        label=""
                        value={moveInDateFilter}
                        onChange={(e) => setMoveInDateFilter(e.target.value)}
                        type="date"

                    />


                </Box>
                <Divider
                    orientation={isSmallScreen ? 'horizontal' : 'verticals'}
                    variant="middle"
                    flexItem
                    style={{
                        width: '2px', // Width of the vertical divider
                        background: '#ccc', // Color of the divider
                        margin: '0 10px', // Adjust the margin as needed
                    }}
                />
                <Box display="flex" flexDirection="column" width={isSmallScreen ? '100%' : '21%'}>
                    <Typography>Price</Typography>

                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={priceFilter}
                        label="Age"
                        onChange={(e) => setPriceFilter(e.target.value)}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    bgcolor: '#F3E5F5',
                                    '& .MuiMenuItem-root': {
                                        padding: 2,
                                    },
                                },
                            },
                        }}
                    >

                        <MenuItem value={1000}>1000</MenuItem>
                        <MenuItem value={1500}>1500</MenuItem>
                        <MenuItem value={2000}>2000</MenuItem>
                    </Select>


                </Box>
                <Divider
                    orientation={isSmallScreen ? 'horizontal' : 'verticals'}
                    variant="middle"
                    flexItem
                    style={{
                        width: '2px', // Width of the vertical divider
                        background: '#ccc', // Color of the divider
                        margin: '0 10px', // Adjust the margin as needed
                    }}
                />
                <Box display="flex" flexDirection="column" width={isSmallScreen ? '100%' : '21%'}>
                    <Typography>Property Type</Typography>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={typeFilter}
                        label="Age"
                        onChange={(e) => setTypeFilter(e.target.value)}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    bgcolor: '#F3E5F5',
                                    '& .MuiMenuItem-root': {
                                        padding: 2,
                                    },
                                },
                            },
                        }}
                    >

                        <MenuItem value={"Apartment"}>Apartment</MenuItem>
                        <MenuItem value={"Room"}>Room</MenuItem>
                        <MenuItem value={"house"}>House</MenuItem>
                    </Select>
                </Box>
                <Divider
                    orientation={isSmallScreen ? 'horizontal' : 'verticals'}
                    variant="middle"
                    flexItem
                    style={{
                        width: '2px', // Width of the vertical divider
                        background: '#ccc', // Color of the divider
                        margin: '0 10px', // Adjust the margin as needed
                    }}
                />
                <Box display="flex" justifyContent="center" alignItems="center" width={isSmallScreen ? '100%' : '16%'}>
                    <Button variant="contained" onClick={handleSearch}>Search</Button>
                </Box>
            </Box>
            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent='space-between'
                padding={3}
                gap={3}
            >
                {filteredProperties.map((property) => (
                    <Card sx={{ minWidth: 250, maxWidth: 300, display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} key={property.id}>
                        <CardMedia
                            sx={{ height: 180 }}
                            image={property.photo}
                        />
                        <Typography padding={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant='h4' component="span" color='purple' display="inline">${property.price}<span><Typography component="span" fontSize="15px" variant="caption" display="inline">/month</Typography></span></Typography>

                            <FavoriteBorderIcon />
                        </Typography>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                {property.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {property.address}
                            </Typography>
                        </CardContent>
                        <hr
                            style={{
                                border: 'none',
                                height: '1px',
                                backgroundImage: 'linear-gradient(to right, transparent, #e0e0e0, transparent)',
                                margin: '0 0 8px',
                            }}
                        />
                        <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center' }}><BedIcon sx={{ marginRight: '4px', color: 'purple' }} />{property.beds}</Typography>
                            <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center' }}> <BathtubIcon sx={{ marginRight: '4px', color: 'purple' }} /> {property.bathroom}</Typography>
                            <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center' }}><CropSquareIcon sx={{ marginRight: '4px', color: 'purple' }} />{property.area}m²</Typography>

                        </CardActions>
                    </Card>

                ))}



            </Box>
        </Box>
    );
};

export default PropertyList;
