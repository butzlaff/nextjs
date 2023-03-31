import React from 'react'
import Link from 'next/link';

const Header = () => {
  let categories = [
    {
        label:'Home',
        link:'/',
     },
     {
        label:'About',
        link:'/about',
     },
     {
        label:'Contato',
        link:'/contato',
     },
    ]
  const layoutMenu = {
    display: 'inline-block',
    minWidth: '150px',
    fontFamily: 'calibri',
    color: 'white'
}

const layoutLink = {
  color: 'white',
  textDecoration: 'none'

}

  return (
    <nav>
      <ul>
      { categories.map((items, index) =>(
          <li key={ index } style={layoutMenu}>
          <Link style={layoutLink} href={items.link}>{items.label}
          </Link></li>
          ))
            }
      </ul>
    </nav>
  )
}

export default Header;