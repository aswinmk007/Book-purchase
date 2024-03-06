import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { addBookAPI } from '../services/allAPI';


function Addbook() {
  const [addBook,setAddbook] = useState({
    title:"",author:"",imageURL:"",price:""
  })
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      setAddbook({...addBook,title:"",author:"",imageURL:"",price:""})
    }
    const handleShow = () => setShow(true);
    console.log(addBook);

    const handleAddbook =async ()=>{
      //store book detail
      const {title,author,imageURL,price} = addBook
      if(title && author && imageURL && price){
        const result = await addBookAPI(addBook)
       alert("add book details successflly!!")
       handleClose()
        console.log(result);

        // alert("proceed to store book detail")

      }else{
        alert("please fill the form completely!!!")
      }


    }

  return (
    <>
    <div className='d-flex ms-5 mt-5'>
        <h4>Add Book</h4>
        <button onClick={handleShow} className='btn rounded bg-primary ms-3'><i className='fa-solid fa-plus'></i></button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Book Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Title"
        className="mb-3"
      >
        <Form.Control value={addBook.title} onChange={e=>setAddbook({...addBook,title:e.target.value})} type="text" placeholder="Title" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Author"
        className="mb-3"
      >
        <Form.Control value={addBook.author} onChange={e=>setAddbook({...addBook,author:e.target.value})} type="text" placeholder="Author" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Image url"
        className="mb-3"
      >
        <Form.Control value={addBook.imageURL} onChange={e=>setAddbook({...addBook,imageURL:e.target.value})} type="text" placeholder="Image url" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="price"
        className="mb-3"
      >
        <Form.Control value={addBook.price} onChange={e=>setAddbook({...addBook,price:e.target.value})} type="text" placeholder="price" />
      </FloatingLabel>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddbook}  variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addbook