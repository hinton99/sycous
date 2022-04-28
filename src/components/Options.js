import React from 'react'
import './Consumer.css'

export const Options = ({filter, setFilter}) => {

  return (
    <div className='filter-box'>
    <label>Filter</label>
    <select value={filter} onChange={(e) => {setFilter(e.target.value)}}>
        <option value="">All</option>
        <option value="mobile">Mobile Only</option>
    </select>
</div>      
)
}
