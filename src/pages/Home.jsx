import React from 'react'
import Addbook from '../componets/Addbook'
import Bookdetail from '../componets/Bookdetail'
import ListBooks from '../componets/ListBooks'

function Home() {
  return (
    <>
    <div className='d-flex justify-content-between'>
      <Addbook/>
    </div>
    <div className='container-fluid mt-5 row'>
      <div className="col-lg-12">
        <h3 className='ms-5'>All Books</h3>
        <Bookdetail/>

      </div>
     

    </div>
    
    </>
  )
}

export default Home