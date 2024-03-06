import React from 'react'
import logo from '../images/logo.png'



function Header() {
  return (
    <>
    <nav style={{width:'100%',height:'45px',backgroundColor:'#C70039'}}>
        <img  className='mt-1 logo' src={logo} alt="" />
        <ul className='list'>
            <li>
                <a href="">HOME</a>
            </li>
            <li>
                <a href="">ABOUT</a>
            </li>
            <li>
                <a href="">PAGES</a>
            </li>
        </ul>

    </nav>
    
    </>
  )
}

export default Header