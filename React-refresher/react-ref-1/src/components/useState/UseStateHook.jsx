import React from 'react'
import Counter from './Counter'
import Products from './Products'
import Toggled from './Toggled'
import InputField from './InputField'
import List from './List'

function UseStateHook() {
  return (
    <div>
      <h2>UseState Hook Ex#1) Counter :</h2>
      <Counter />
      <h2>UseState Hook Ex#2) Product Heading change :</h2>
      <Products category="clothing" detail={{manufactureYear: 2022, countryOfOrigin: "china"}} />
      <h2>UseState Hook Ex#3) Toggled :</h2>
      <Toggled />
      <h2>UseState Hook Ex#4) Input Field :</h2>
      <InputField />
      <h2>UseState Hook Ex#5) List :</h2>
      <List />
    </div>
  )
}

export default UseStateHook
