import React from 'react'

export const Loader = (listItems, setListItems) => {
  return (
    <button onClick={() => setListItems(listItems + 10)}>Show More...</button>
  )
}
