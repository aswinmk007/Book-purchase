import React from 'react'

function Footer() {
  return (
    <>
    <div style={{width:'100%',height:'300px',backgroundColor:'#291403 '}} className='mt-5 w-100'>
      <div  className='footer-content'>
        <div style={{color:'white'}} className='about'>
          <h5>About</h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Velit deserunt.</p>
        </div>
        <div style={{color:'white'}} className='about'>
          <h5>Newsletter</h5>
          <div className='d-flex'>
                    <input type="text" className='form-control me-1' placeholder='Email id Please' />
                    <button style={{backgroundColor:'#C70039',color:'white'}} className='btn '><i class="fa-solid fa-arrow-right"></i></button>
                </div>
        </div>
        <div style={{color:'white'}} className='about'>
          <h5>Follow Us</h5>
          <div className='icons d-flex justify-content-between mt-2'>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-solid fa-envelope"></i>
          </div>
        </div>
      </div>
      <p style={{color:'white'}} className='text-center mt-5'>copyright@books2024</p>
    </div>
    </>
  )
}

export default Footer