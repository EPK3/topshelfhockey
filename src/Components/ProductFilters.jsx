import React from 'react'
import { useStateContext } from '../context/StateContext'
import Select from 'react-select'
import './ProductFilters.css'


const ProductFilters = () => {
  const { handleFilters, handleSort} = useStateContext();

  const filterOptions = [
    { value: '', label: 'All', name: "category"},
    { value: 'sticks', label: 'Sticks', name: "category" },
    { value: 'skates', label: 'Skates', name: "category" },
    { value: 'gear', label: 'Protective Gear', name: "category"}
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest', name: "sort" },
    { value: 'priceLow', label: 'Price: Low to High', name: "sort" },
    { value: 'priceHigh', label: 'Price: High to Low', name: "sort" }
  ];


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
                <div className='filter'>
                    <p>Sort:</p>
                    <Select onChange={ handleSort } options={sortOptions} className='dropdown'/>
                </div>
            </div>
        </div>
    </div>
   

  )
}

export default ProductFilters