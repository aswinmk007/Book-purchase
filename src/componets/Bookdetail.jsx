import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Bookcard from './Bookcard'
import { getAllbookDetailAPI } from '../services/allAPI'


function Bookdetail() {
  const [deletebook,setDeleteBook] = useState("")
  
  const [allbook,setAllBook] = useState([])

  const getbookdetail = async ()=>{
    const result = await getAllbookDetailAPI()
    console.log(result);
    if(result?.status==200){
      setAllBook(result?.data);
    }
  }

  useEffect(()=>{
    getbookdetail()
    

  },[deletebook])
  console.log(allbook);

  return (
    <>
    <Row style={{columnGap:'5rem'}} className='d-flex justify-content-center' >
      { allbook?.length>0? allbook?.map((book,index)=>(
          <Col key={index}  className='mb-4' sm={12} md={4} lg={2}>
          <Bookcard displayData={book} setDeleteBook={setDeleteBook}/>
  
        </Col>

      ))
       
      :
      <div>Nothing to display</div>
      }
      

     
</Row>
    </>
  )
}

export default Bookdetail