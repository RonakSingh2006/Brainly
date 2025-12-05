import { useState , useRef } from "react"
import { Cross } from "../icons/Cross"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios"
import { BACKEND_URL } from "../config"

enum ContentType {
  YouTube = "youtube",
  Twitter = "twitter"
}

export function AddContent({open,onClose} : {open : boolean , onClose : ()=>void}){
  
  const [type,setType] = useState(ContentType.YouTube);
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  const [loading , setLoading] = useState(false);


  async function addContent(){
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    setLoading(true);

    await axios.post(`${BACKEND_URL}/api/v1/content`,{
      link,
      type,
      title,
      tags : []
    },
    {
      headers : {
        'authorization' : localStorage.getItem('auth')
      }
    }
    
  )

    setLoading(false);

    alert("Content Added");
  }

  return<>
    {open && <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-black/85 flex justify-center items-center">
      <div className="bg-white w-80 h-96 rounded-md flex items-center flex-col gap-5 m-24">

        <div className="w-full flex justify-end p-2">
          <div className="cursor-pointer" onClick={onClose}>
            <Cross/>
          </div>
        </div>

        <Input placeholder="Title" ref={titleRef}/>
        <Input placeholder="Link" ref={linkRef}/>

        <div className="flex gap-14">
          <Button variant={`${type === ContentType.YouTube ? "secondry" : "primary"}` } text="Youtube" onClick={()=>{
            setType(ContentType.YouTube);
          }}/>
          <Button variant={`${type === ContentType.Twitter ? "secondry" : "primary"}` } text="Twitter" onClick={()=>{
            setType(ContentType.Twitter);
          }}/>
        </div>

        <Button variant="secondry" text="Submit" onClick={addContent} loading={loading}/>
      </div>
    </div>}
  </>
}