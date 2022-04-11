import React from 'react'
import Select from 'react-dropdown-select'
import './ProductFilters.css'

const filterOptions = [
    { value: 'all', label: 'All'},
    { value: 'sticks', label: 'Sticks' },
    { value: 'skates', label: 'Skates' },
    { value: 'gear', label: 'Protective Gear' }
  ]

  const sortOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'priceLow', label: 'Price: Low to High' },
    { value: 'priceHigh', label: 'Price: High to Low' }
  ]

const ProductFilters = () => {
  return (
    <div className='bannerContainer'>
        <div className='blockContainer'>
            <div className='title'>
                <h1>Hockey Equipment</h1>
            </div>
            <div className='filterContainer'>
                <div className='filter'>
                    <p>Filter:</p>
                    <Select options={filterOptions} className='dropdown'/>
                </div>
                <div className='filter push'>
                    <p>Sort:</p>
                    <Select options={sortOptions} className='dropdown'/>
                </div>
            </div>
        </div>
    </div>
   

  )
}

export default ProductFilters