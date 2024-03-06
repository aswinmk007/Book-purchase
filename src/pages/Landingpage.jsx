import React from 'react'
import Button from 'react-bootstrap/Button';
import bookimg from '../images/header-img.png'
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';



function Landingpage() {
  const Navigate = useNavigate()
  const handlenavigate = ()=>{
    Navigate('/Home')
  }
  return (
    <>
    <div className='landingpage'>
      <div className='book'>
        <div className="content">
          <h1 style={{color:'white',fontSize:'60px',fontWeight:'bold'}}>MY BOOKS</h1>
          <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Quisquam  ipsam dolore sunt ullam saepe quia dolorem. <br /> Necessitatibus laboriosam nesciunt eum, vel perspiciatis fugit beatae. <br /></p>
          <Button onClick={handlenavigate} className='getstart' style={{width:'170px',borderRadius:'18px'}} variant="light">Getting Started</Button>

        </div>
        <div className="content">
          <img style={{width:'450px'}} src={bookimg} alt="" />
        </div>

      </div>
    </div>
    <h2 className='text-center mt-3'>Featuers</h2>
 <div className='d-flex justify-content-center mt-5'>
      <div className='row'>
        <div className="col-lg-4">
        <Card style={{width:'320px'}}>
        <Card.Img style={{height:'220px'}} variant="top" src="https://m.media-amazon.com/images/G/31/Amazon-Global-Selling-IN/sell_books_online_amazon.jpg" />
        <Card.Body>
          <Card.Title style={{color:'#C70039'}}>Online Purchasing</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         
        </Card.Body>
      </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{width:'320px'}}>
        <Card.Img style={{height:'220px'}} variant="top" src="https://www.bookdeal.com/blog/wp-content/uploads/2021/09/second-hand-college-books-1024x683.jpg" />
        <Card.Body>
          <Card.Title style={{color:'#C70039'}}>View Book Details</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{width:'320px'}}>
        <Card.Img style={{height:'220px'}} variant="top" src="https://content.jdmagicbox.com/def_content/book_shops/default-book-shops-91.jpg" />
        <Card.Body>
          <Card.Title style={{color:'#C70039'}}>List Your Books</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
      </div>
 </div>

    
  
  
    </>
  )
}

export default Landingpage