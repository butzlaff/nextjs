import { useRouter } from 'next/router';
import React from 'react'

const Button = ({ redirectPage }) => {

  return (
    <button onClick={ redirectPage }>Ir para /about/seu-nome</button>
  )
}

export default Button;