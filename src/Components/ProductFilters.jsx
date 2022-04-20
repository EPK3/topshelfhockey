import React, { useState } from 'react'
import { useLocation } from 'react-router'
import Select from 'react-select'
import './ProductFilters.css'


const ProductFilters = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filter, setFilters] = useState({});
  const [sort, setSort] = useState({});
  

  const filterOptions = [
    { value: 'all', label: 'All', name: "category"},
    { value: 'sticks', label: 'Sticks', name: "category" },
    { value: 'skates', label: 'Skates', name: "category" },
    { value: 'gear', label: 'Protective Gear', name: "category"}
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest', name: "sort" },
    { value: 'priceLow', label: 'Price: Low to High', name: "sort" },
    { value: 'priceHigh', label: 'Price: High to Low', name: "sort" }
  ];
  
  const handleFilters = (option) => {
    setFilters({
      [option.name]: option.value,
    });
  };

  const handleSort = (option) => {
    setSort({
      [option.name]: option.value,
    });
  };

  return (
    <div className='bannerContainer'>
        <div className='blockContainer'>
            <div className='title'>
                <h1>Hockey Equipment</h1>
            </div>
            <div className='filterContainer'>
                <div className='filter'>
                    <p>Filter:</p>
                    <Select onChange={ handleFilters } options={filterOptions} className='dropdown'/>
                </div>
                <div className='filter push'>
                    <p>Sort:</p>
                    <Select onChange={ handleSort } options={sortOptions} className='dropdown'/>
                </div>
            </div>
        </div>
    </div>
   

  )
}

export default ProductFilters