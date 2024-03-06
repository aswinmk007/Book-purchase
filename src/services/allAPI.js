import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

// add book detail
export const addBookAPI = async (book)=>{
    await commonAPI("POST",`${SERVER_URL}/allbooks`,book)

}

//get book detail 
export const getAllbookDetailAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allbooks`,"")
}

//remove book
export const removeBookAPI = async (bookId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allbooks/${bookId}`,{})
}
