import React from 'react'
import { Card } from 'react-bootstrap'
import { removeBookAPI } from '../services/allAPI'


function Bookcard({displayData,setDeleteBook}) {
  //remove book
  const deletebook = async (bId)=>{
    //api call
    const result = await removeBookAPI(bId)
    setDeleteBook(result.data)


  }
  return (
    <>
      <Card style={{ width: '15rem',backgroundColor:'#C70039' }}>
      <Card.Img style={{height:'210px'}} variant="top" src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title>
           
                <p style={{color:'white'}}>{displayData?.title}</p>
                <div/>
           
               
                <p style={{color:'white'}}>{displayData?.author}</p>
                
                
           
           <p style={{color:'white'}}>₹:{displayData?.price}</p>
           <div className='d-flex justify-content-between'> 
          <button style={{backgroundColor:'yellow',borderRadius:'5px'}}><a style={{textDecoration:'none',color:'black',fontSize:'15px'}} href="https://www.amazon.in/books/s?k=books">SHOP NOW</a></button>
           <button onClick={()=>deletebook(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-primary'></i></button>
           </div>

        </Card.Title>
        <Card.Text>

        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Bookcard