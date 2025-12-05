import { useEffect, useState } from "react";
import axios from 'axios'
import { BACKEND_URL } from "../config";

export interface Content {
  _id: string;                    
  link: string;
  type: "youtube" | "twitter";    
  title: string;
  tags: string[];                 
  userId: string;                 
}


export function useContent(){
  const [content,setContent] = useState<Content[]>([]);

  useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/content`,{
      headers : {
        'Authorization' : localStorage.getItem('auth')
      }
    }).then((response)=>{
      setContent(response.data);
    })
  },[])

  return content;
}