import React, { useState } from 'react'

const Input = ({ name, setValue }) => {

  const setName = ({ target }) => {
    setValue(target.value)
  }

  return (
    <input value={ name } onChange={ setName } />
  )
}

export default Input;